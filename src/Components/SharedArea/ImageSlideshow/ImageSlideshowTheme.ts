/**
 * ImageSlideshowTheme Class
 * ---------------------------
 * Provides styling configurations for the ImageSlideshow component, specifically
 * managing the visibility and transition effects of individual images. 
 * This class contains a method to apply conditional styling based on the currently
 * active image index, creating a smooth fade-in and fade-out effect for image transitions.
 */

class ImageSlideshowTheme {
    
    /**
     * getImageSlideshowStyles
     * -------------------------
     * Generates conditional styles for each image in the slideshow based on 
     * whether it is the currently displayed image.
     * 
     * @param index - The index of the image in the slideshow array.
     * @param currentImageIndex - The index of the currently displayed image.
     * @returns An object with styles to apply to the image component, including:
     *          - `opacity`: Full opacity if the image is active, otherwise hidden.
     *          - `transition`: Smooth transition effect for opacity changes.
     *          - `position`: Absolute positioning to stack images on top of each other.
     */
    public static getImageSlideshowStyles(index: number, currentImageIndex: number) {
        return {
            transition: 'opacity 0.5s ease-in-out',     // Smooth fade transition for image visibility changes
            opacity: index === currentImageIndex ? 1 : 0, // Full opacity if the image is active; otherwise, hidden
            position: 'absolute'                       // Positions images absolutely to stack them in the slideshow container
        };
    }
}

export default ImageSlideshowTheme;
