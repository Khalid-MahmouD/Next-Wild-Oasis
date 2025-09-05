"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { isValidNationalID } from "../_utility";
import { auth, signIn, signOut } from "./auth";
import { getBookings } from "./data-service";
import { supabase } from "./supabase";

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function updateGuest(formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in to update your profile");
  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");
  if (nationalID && !isValidNationalID(nationalID)) {
    throw new Error("Invalid National ID format");
  }
  const updateData = {
    nationality,
    countryFlag,
    nationalID,
  };
  const { data, error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", session.user.guestId)
    .select()
    .single();

  if (error) {
    throw new Error("Guest could not be updated");
  }

  revalidatePath("/account/profile");
}

export async function deleteReservation(bookingId) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in to update your profile");

  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((b) => b.id);
  if (!guestBookingIds.includes(parseInt(bookingId))) {
    throw new Error("You can only delete your own reservations");
  }

  const { data, error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);

  if (error) throw new Error("Booking could not be deleted");
  revalidatePath("/account/reservations");
}

export async function updateBooking(formData) {
  const bookingId = Number(formData.get("bookingId"));

  // 1) Authenticate the user
  const session = await auth();
  if (!session) throw new Error("You must be logged in to update your profile");

  // 2) Authorize the user (is this their booking?)
  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((b) => b.id);
  if (!guestBookingIds.includes(parseInt(bookingId))) {
    throw new Error("You can only update your own reservations");
  }

  // Validate the input
  const updateData = {
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations").slice(0, 500), // Limit to 500 chars
  };

  // mutation
  const { error } = await supabase
    .from("bookings")
    .update(updateData)
    .eq("id", bookingId)
    .select()
    .single();

  // error handling
  if (error) throw new Error("Booking could not be updated");

  // revalidating
  revalidatePath(`/account/reservations/edit/${bookingId}`);
  revalidatePath(`/account/reservations`);
  // redirecting
  redirect("/account/reservations");
}
