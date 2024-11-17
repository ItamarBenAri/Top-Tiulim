/**
 * Toastify Component
 * ---------------------
 * A React component that configures and displays toast notifications using `react-toastify`.
 * Toast notifications provide non-intrusive feedback to users, appearing at the bottom-left
 * of the screen with a bounce animation effect.
 * 
 * Imports:
 * - `Bounce`: Animation effect from `react-toastify` that provides a smooth entry and exit.
 * - `ToastContainer`: Main container from `react-toastify` for displaying toast notifications.
 */

import { Bounce, ToastContainer } from "react-toastify";

export function Toastify(): JSX.Element {
    return (
        <div className="Toastify">
            <ToastContainer
                position="bottom-left"              /* Positions the toast container in the bottom-left corner */
                autoClose={5000}                    /* Toasts automatically close after 5 seconds */
                hideProgressBar={false}             /* Displays a progress bar indicating the auto-close timer */
                newestOnTop={false}                 /* Older toasts remain at the top, newer toasts added at bottom */
                closeOnClick                        /* Closes toast on user click */
                rtl={true}                          /* Sets right-to-left alignment for languages like Hebrew or Arabic */
                pauseOnFocusLoss                    /* Pauses the timer if the browser loses focus */
                draggable                           /* Enables dragging to dismiss the toast */
                pauseOnHover                        /* Pauses the timer while hovering over the toast */
                theme="light"                       /* Applies a light theme for toast styling */
                transition={Bounce}                 /* Bounce effect for toast entry and exit transitions */
                stacked
            />
        </div>
    );
}
