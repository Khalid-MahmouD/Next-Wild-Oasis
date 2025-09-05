"use client";
import SpinnerMini from "@/app/_components/SpinnerMini";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useTransition } from "react";

function DeleteReservation({ bookingId, onDelete }) {
  const [isPending, startTransition] = useTransition();
  function handleDelete() {
    if (confirm("Are you sure you want to delete this reservation?"))
      startTransition(() => onDelete(bookingId));
  }
  return (
    <button
      onClick={handleDelete}
      disabled={isPending}
      className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900">
      {!isPending ? (
        <>
          <TrashIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
          <span className="mt-1">Delete</span>
        </>
      ) : (
        <span className="mx-auto">
          <SpinnerMini />
        </span>
      )}
    </button>
  );
}

export default DeleteReservation;

// ---
// React useTransition Hook (General Information)
// ---
// useTransition is a React hook that lets you mark certain updates as transitions. Transitions are typically non-urgent UI updates, such as navigation, filtering, or data mutations, that can be interrupted or deferred to keep the app responsive.
//
// Syntax:
//   const [isPending, startTransition] = useTransition();
//
// - isPending: boolean, true while the transition is ongoing.
// - startTransition: function, call this to wrap the code that triggers the transition.
//
// Usage:
//   startTransition(() => {
//     // code for non-urgent update (e.g., state update, async call)
//   });
//
// Benefits:
// - Keeps the UI responsive during slow updates.
// - Allows you to show loading indicators or disable UI elements while a transition is pending.
// - Improves user experience for actions that may take time (e.g., network requests).
//
// ---
// Project Use Case: DeleteReservation Component
// ---
// In this project, useTransition is used to manage the state of deleting a reservation.
//
// - When the user clicks the delete button, a confirmation dialog appears.
// - If confirmed, startTransition is called to begin the deletion process.
// - While the deletion is pending (isPending is true), the button is disabled and a spinner is shown.
// - This provides immediate feedback and prevents duplicate actions, improving the user experience.
//
// Example:
//   const [isPending, startTransition] = useTransition();
//   function handleDelete() {
//     startTransition(() => onDelete(bookingId));
//   }
//   // Use isPending to disable the button and show a spinner.
