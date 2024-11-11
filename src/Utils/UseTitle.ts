/**
 * useTitle Hook
 * --------------
 * Custom React hook for dynamically setting the document's title.
 * This hook updates the title in the browser's tab whenever the provided title changes, improving user experience
 * by providing context about the current page state.
 *
 * @param {string} title - The title to be set as the document's title.
 *
 * Usage:
 * - This hook should be used in any component where the document title needs to reflect a specific page or component state.
 * - The title will automatically update whenever the `title` parameter changes.
 */

import { useEffect } from "react";

/**
 * Sets the document title to the specified string.
 *
 * @param title - The title to set as the document's title.
 */
function useTitle(title: string): void {    
    useEffect(() => {
        // Set the document's title to the specified title
        document.title = title;
    }, [title]); // Re-run effect when the title changes
}

export default useTitle;
