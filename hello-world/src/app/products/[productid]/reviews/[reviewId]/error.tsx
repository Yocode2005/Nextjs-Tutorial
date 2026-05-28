"use client";
import {useRouter} from "next/navigation";
import {startTransition} from "react"; // in simple terms, startTransition is a function that allows you to mark a state update as non-urgent. This means that React will prioritize more urgent updates (like user interactions) over the updates wrapped in startTransition. In this code, it is used to refresh the page and reset the error state without blocking the user interface, allowing for a smoother user experience when trying to recover from an error.


export default function ErrorBoundary({ error, reset,}: { error: Error; reset: () => void }) {
    const router = useRouter();

     startTransition(() => {
        router.refresh(); // Refresh the current page to attempt to recover from the error. This will re-render the page and may resolve the issue that caused the error.
        reset(); // Call the reset function to reset the error state. This allows the user to try loading the page again after an error has occurred.
    });
    return <div>
        <p>{error.message} </p>
        <button onClick={() => reset()}>Try again</button>
    </div>
}