/**
 * ImageSlideshow Component
 * --------------------------
 * Displays a slideshow of images, cycling through each image at a set interval.
 * The component supports a loading state to ensure images are fully loaded before
 * being displayed with full opacity. Utilizes an interval to update the displayed
 * image index, creating a seamless slideshow effect.
 * 
 * Imports:
 * - React hooks for managing slideshow state and lifecycle.
 * - CardCover component from Material UI for overlay effects.
 * - ImageSlideshowTheme for consistent styling across images.
 */

import { useEffect, useState } from "react";
import CardCover from '@mui/joy/CardCover';
import { MediaLinkModel } from "../../../Models/OurDealModel";
import ImageSlideshowTheme from "./ImageSlideshowTheme";

type ImageSlideshowProps = {
    destination: string;           // Name of the destination, used in image alt text for accessibility
    images: MediaLinkModel[];      // Array of image objects to be displayed in the slideshow
};

export function ImageSlideshow(props: ImageSlideshowProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0); // Tracks the currently displayed image index

    /**
     * useEffect: Set Slideshow Interval
     * ----------------------------------
     * Sets up an interval to update the `currentImageIndex` every 5 seconds,
     * cycling through the images. The interval clears automatically when the
     * component unmounts or if the `images` array length changes.
     */
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % props.images.length);  // Cycle through images
        }, 5000);  // Update interval in milliseconds

        return () => clearInterval(interval);  // Clean up interval on unmount or dependencies change
    }, [props.images.length]);

    return (
        <div>
            {props.images.map((item, index) => (
                <CardCover
                    key={item.url}                                                      // Unique key for each image
                    sx={ImageSlideshowTheme.getImageSlideshowStyles(index, currentImageIndex)}  // Conditional styling based on current image
                >
                    <img
                        src={item.url}                                                // Image URL
                        alt={`${props.destination} ${index}`}                         // Alt text for accessibility
                    />
                </CardCover>
            ))}
        </div>
    );
};