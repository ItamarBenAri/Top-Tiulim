/**
 * AppTheme
 * --------
 * Defines a centralized theme configuration for reusable UI styling within the application.
 * Each static property within `AppTheme` contains style definitions to ensure consistent styling across components,
 * reducing repetitive CSS and improving maintainability.
 *
 * Properties:
 * - `loadingBox`: Styles for a centered loading container, used to display loading animations or messages.
 * - `divider`: Margin configuration for dividing elements with a consistent vertical gap.
 * - `contactBtns`: Layout styling for button containers, particularly used in contact or CTA sections.
 * - `headerIcon`: Adjusts the positioning of header icons, ensuring alignment consistency.
 * - `stylis-plugin-rtl`: Plugin for transforming styles to RTL format.
 * - `stylis` prefixer: Adds vendor prefixes for cross-browser compatibility.
 * - `@emotion/cache`: Creates a custom cache for Emotion, allowing RTL styling.
 * - `@mui/material` createTheme: Defines the theme, setting the layout direction to RTL.
 */

import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import createCache from '@emotion/cache';
import { createTheme } from '@mui/material';

class AppTheme {

    /**
     * divider
     * -------
     * Standard margin configuration for divider elements.
     * - `marginY`: Vertical margin around the divider for consistent spacing.
     */
    public static divider = { marginY: 2 };

    /**
     * contactBtns
     * -----------
     * Layout configuration for contact buttons, typically used in CTA sections.
     * - `display`: Flex layout to align buttons horizontally.
     * - `justifyContent`: Ensures buttons are spaced evenly within the container.
     * - `gap`: Sets a consistent gap between buttons.
     */
    public static contactBtns = {
        display: "flex",
        justifyContent: "space-between",
        gap: "10px"
    };
    
    /**
     * headerIcon
     * ----------
     * Adjusts the position of icons in headers to align visually with other elements.
     * - `marginBottom`: Moves the icon slightly upward to align with surrounding text.
     */
    public static headerIcon = {
        marginBottom: "-7px"
    };

    /**
     * cacheRtl
     * --------
     * Creates an Emotion cache with RTL styling support, applying the `stylis-plugin-rtl` plugin.
     * This cache enables optimized rendering of RTL styles, with the `prefixer` adding necessary
     * vendor prefixes for compatibility.
     * 
     * Cache Options:
     * - `key`: Unique identifier for the cache instance, set to "muirtl" for RTL Material UI styling.
     * - `stylisPlugins`: An array of plugins, applying `prefixer` for vendor prefixes and `rtlPlugin`
     *   for RTL transformations.
     */
    public static cacheRtl = createCache({
        key: 'muirtl',                   // Unique key for identifying the RTL cache instance
        stylisPlugins: [prefixer, rtlPlugin], // Enables RTL transformations and vendor prefixing
    });

    /**
     * theme
     * ------
     * Defines the Material UI theme with the direction explicitly set to RTL.
     * Ensures all components within this theme context adopt a Right-to-Left layout,
     * suitable for RTL languages.
     * 
     * Theme Options:
     * - `direction`: Set to "rtl" to enforce RTL layout for all components using this theme.
     */
    public static theme = createTheme({ 
        direction: 'rtl'                 // Sets the theme direction to RTL for consistent alignment
    });
}

export default AppTheme;
