/**
 * SelectedCountriesManager Component
 *
 * This component is responsible for managing the selected countries state based
 * on the current route. It ensures that any selected countries are cleared when
 * the user navigates away from the `/hot-deals` path, maintaining a clean state
 * for country selections outside of the "hot deals" section.
 *
 * The component returns `null` as it only performs a side effect and does not
 * render any visible UI.
 */

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { ourDealsService } from "../../../../Services/OurDealsService";

export function SelectedCountriesManager(): null {
    // Access the current location for route-based logic
    const location = useLocation();
    // Access Redux dispatch for potential future dispatches
    const dispatch = useDispatch();

    /**
     * useEffect Hook
     *
     * Triggered whenever the location's pathname changes. Checks if the user
     * navigates away from the `/hot-deals` route and clears the selected
     * countries if they do. This maintains a clean state for the selected
     * countries when the user exits the hot deals section.
     *
     * Dependencies:
     * - location.pathname: Listens to route changes.
     * - dispatch: Included for potential future dispatches.
     */
    useEffect(() => {
        // Clear selected countries if not on `/hot-deals` route
        if (!location.pathname.startsWith('/hot-deals')) {
            ourDealsService.deleteSelectedCountries();  // Calls service to reset selected countries state
        };
    }, [location.pathname, dispatch]);

    // No UI rendered, so returning null
    return null;
};