/**
 * ContactUsFormTheme Class
 * -------------------------
 * Provides a theme configuration for the "Contact Us" form component, ensuring Right-to-Left (RTL)
 * styling support for languages such as Hebrew. This class includes a custom caching mechanism for
 * optimized RTL styles and a Material UI theme that sets the direction to RTL.
 * 
 * Dependencies:
 * - `stylis-plugin-rtl`: Plugin for transforming styles to RTL format.
 * - `stylis` prefixer: Adds vendor prefixes for cross-browser compatibility.
 * - `@emotion/cache`: Creates a custom cache for Emotion, allowing RTL styling.
 * - `@mui/material` createTheme: Defines the theme, setting the layout direction to RTL.
 */

import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import createCache from '@emotion/cache';
import { createTheme } from '@mui/material';

class ContactUsFormTheme {

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
};

export default ContactUsFormTheme;
