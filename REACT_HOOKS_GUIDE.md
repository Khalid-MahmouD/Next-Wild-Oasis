# React useTransition and useOptimistic Hooks: General Guide and Project Use Cases

## useTransition (React)

### General Information

`useTransition` is a React hook that lets you mark certain updates as transitions. Transitions are typically non-urgent UI updates, such as navigation, filtering, or data mutations, that can be interrupted or deferred to keep the app responsive.

**Syntax:**

```js
const [isPending, startTransition] = useTransition();
```

- `isPending`: boolean, true while the transition is ongoing.
- `startTransition`: function, call this to wrap the code that triggers the transition.

**Usage:**

```js
startTransition(() => {
  // code for non-urgent update (e.g., state update, async call)
});
```

**Benefits:**

- Keeps the UI responsive during slow updates.
- Allows you to show loading indicators or disable UI elements while a transition is pending.
- Improves user experience for actions that may take time (e.g., network requests).

### Project Use Case: `DeleteReservation` Component

In this project, `useTransition` is used to manage the state of deleting a reservation.

- When the user clicks the delete button, a confirmation dialog appears.
- If confirmed, `startTransition` is called to begin the deletion process.
- While the deletion is pending (`isPending` is true), the button is disabled and a spinner is shown.
- This provides immediate feedback and prevents duplicate actions, improving the user experience.

**Example:**

```js
const [isPending, startTransition] = useTransition();
function handleDelete() {
  startTransition(() => onDelete(bookingId));
}
// Use isPending to disable the button and show a spinner.
```

---

## useOptimistic (React)

### General Information

`useOptimistic` is a React hook that allows you to optimistically update the UI before an async operation (like a server request) completes. This makes the app feel faster and more responsive.

**Syntax:**

```js
const [optimisticState, updateOptimistic] = useOptimistic(
  initialState,
  (currentState, action) => {
    // return the new state based on the action
  }
);
```

- `optimisticState`: the current (possibly optimistic) state.
- `updateOptimistic`: function to update the state optimistically.

**Usage:**

```js
updateOptimistic(action);
// UI updates immediately, even before the server confirms the change.
```

**Benefits:**

- Provides instant feedback to the user.
- Makes the UI feel faster and more interactive.
- Can be reverted if the async operation fails.

### Project Use Case: `ReservationList` Component

In this project, `useOptimistic` is used to instantly remove a reservation from the UI when the user deletes it, before the server confirms the deletion.

- When `updateOptimistic(bookingId)` is called, the booking is removed from the UI immediately.
- If the server later fails to delete, you would handle reverting the UI (not shown here).

**Example:**

```js
const [optimisticBookings, optimisticDelete] = useOptimistic(
  bookings,
  (currentBookings, bookingId) =>
    currentBookings.filter((booking) => booking.id !== bookingId)
);

async function handleDelete(bookingId) {
  optimisticDelete(bookingId);
  await deleteReservation(bookingId);
}
```

---

## Summary Table

| Hook            | File                                   | Purpose                                                                                  |
| --------------- | -------------------------------------- | ---------------------------------------------------------------------------------------- |
| `useOptimistic` | `app/_components/ReservationList.js`   | Instantly updates the UI for a better user experience during async actions (optimistic). |
| `useTransition` | `app/_components/DeleteReservation.js` | Manages UI state during async transitions, shows loading, disables actions, etc.         |

---

This guide documents how and why these hooks are used in this project. You can include this file in your repository for future reference or onboarding.
