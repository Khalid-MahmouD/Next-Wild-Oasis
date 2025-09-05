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

// how i can know the status of the action
// pending / error / success
// disable the button when pending
// show a message when error
// maybe redirect or show a message when success
// isPending -> true / false
// startTransition -> function to start the action
// const [isPending, startTransition] = useTransition();
// useTransition is a react hook that allows us to manage the state of a transition
// it returns an array with two elements
// the first element is a boolean that indicates if the transition is pending or not
// the second element is a function that we can use to start the transition
// when we call this function, react will know that we are starting a transition
// and it will set isPending to true
// when the transition is done, react will set isPending to false
// we can use this boolean to disable the button when the action is pending
// and show a loading spinner or something else
// we can also use it to show a message when the action is done
// for example, we can show a success message or redirect the user to another page
// we can also use it to show an error message if the action fails
// for example, if the user is not logged in or if there is a network error
// we can use this hook to improve the user experience and make our app more responsive
// by showing feedback to the user when they perform an action
// this is especially important for actions that take some time to complete
// like deleting a reservation, which may involve a network request
// so using useTransition helps us manage the state of these actions better
// and provide a smoother experience for the user
// in this case, we will use it to manage the state of the deleteReservation action
// and disable the button while the action is pending
// and show a confirmation dialog before deleting the reservation
