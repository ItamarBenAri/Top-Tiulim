/**
 * ScrollToTop Component
 * -----------------------
 * Automatically scrolls the window to the top whenever the route path changes.
 * This component ensures a smooth scrolling effect for a better user experience
 * as users navigate between different pages.
 * 
 * Imports:
 * - `useEffect`: React hook for executing side effects when dependencies change.
 * - `useLocation`: React Router hook for accessing the current location object, 
 *   allowing detection of route changes.
 */

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop(): JSX.Element {
    const { pathname } = useLocation();  // Extracts the current path to monitor route changes

    /**
     * useEffect Hook
     * ----------------
     * Triggers on `pathname` changes, scrolling the window smoothly to the top
     * whenever the user navigates to a new route.
     * 
     * Dependencies:
     * - `pathname`: The current URL path, which will cause this hook to execute
     *   whenever the path changes.
     */
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });  // Smoothly scrolls to the top of the page
    }, [pathname]);

    return null;  // No visible UI component, as this functionality is purely behavioral
};