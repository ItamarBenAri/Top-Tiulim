/**
 * GalleryTheme Class
 * -------------------
 * Provides a centralized theme configuration for styling the gallery component.
 * Ensures consistent padding, spacing, and layout within the gallery for improved readability
 * and user experience.
 */

class GalleryTheme {

    /**
     * container Style
     * ----------------
     * Defines padding for the main gallery container, adding spacing around the gallery content.
     * 
     * Properties:
     * - `padding`: Adds 24px padding to the gallery container for balanced spacing within the layout.
     */
    public static container = { 
        padding: "24px"                   // Padding for the main gallery container
    };

    /**
     * itemBox Style
     * --------------
     * Sets vertical spacing between gallery sections, ensuring visual separation.
     * 
     * Properties:
     * - `marginBottom`: Adds spacing below each gallery item to separate them clearly.
     */
    public static itemBox = { 
        marginBottom: 4                    // Bottom margin to separate gallery items
    };

    /**
     * imageList Style
     * ----------------
     * Controls the maximum height and scrolling behavior of the image list, allowing for a 
     * scrollable image grid if the content exceeds the maximum height.
     * 
     * Properties:
     * - `maxHeight`: Limits the image list height to 600px for controlled layout.
     * - `overflowY`: Enables vertical scrolling when content exceeds the defined height.
     */
    public static imageList = { 
        maxHeight: 600,                    // Limits the height of the image list
        overflowY: "auto"                  // Enables scrolling for overflow content
    };
};

export default GalleryTheme;
