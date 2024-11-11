/**
 * MediaCarousel Component
 * -------------------------
 * Displays a media carousel with images and videos, allowing automatic play and user-controlled
 * video playback. Includes error handling for video loading issues and responsive adjustments
 * based on screen size.
 * 
 * Imports:
 * - `Carousel` from react-multi-carousel for carousel functionality.
 * - Material UI's `useMediaQuery` for responsive control.
 * - `ReactPlayer` for video playback.
 * - `MediaLinkModel` type for media link structure.
 */

import "./MediaCarousel.css";
import Carousel from 'react-multi-carousel';
import { useState } from "react";
import { useMediaQuery } from "@mui/material";
import { MediaLinkModel } from "../../../../Models/OurDealModel";
import ReactPlayer from "react-player";

type MediaCarouselProps = {
    destination: string;                  // Name of the media destination for alt text
    mediaLinks: MediaLinkModel[];         // Array of media items (images/videos) to display in the carousel
};

export function MediaCarousel(props: MediaCarouselProps): JSX.Element {
    const [currentMediaIndex, setCurrentMediaIndex] = useState<number>(0);    // Index of the currently displayed media
    const [playingVideo, setPlayingVideo] = useState<boolean>(false);         // Indicates if a video is currently playing
    const [videoErrors, setVideoErrors] = useState<number[]>([]);             // Array storing indices of videos with loading errors

    // Checks for screen width to conditionally render arrows in carousel
    const matches = useMediaQuery('(min-width:600px)');

    // Carousel responsive settings for various screen sizes
    const responsive = {
        allDevices: {
            breakpoint: { max: 4000, min: 0 },
            items: 1                         // Shows one media item at a time
        }
    };

    /**
     * getBackgroundImage
     * --------------------
     * Returns the background image style URL for the current media item if it is an image.
     * 
     * @param mediaLinks - Array of media items in the carousel.
     * @param index - Index of the current media item.
     * @returns The background image URL or "none" if the item is not an image.
     */
    const getBackgroundImage = (mediaLinks: MediaLinkModel[], index: number) => {
        const media = mediaLinks[index];
        return media?.type === "image" ? `url('${media.url}')` : "none";
    };

    /**
     * handleVideoError
     * ------------------
     * Handles video loading errors by adding the current media index to the list of errors.
     * 
     * @param index - Index of the media item with the loading error.
     */
    const handleVideoError = (index: number) => {
        setVideoErrors(prevErrors => [...prevErrors, index]);
    };

    return (
        <div
            className="MediaCarousel"
            style={{
                backgroundImage: getBackgroundImage(props.mediaLinks, currentMediaIndex)
            }}
        >
            <Carousel
                responsive={responsive}
                autoPlay
                arrows={matches}                          // Show arrows on larger screens only
                autoPlaySpeed={10000}                      // Set autoplay interval to 10 seconds
                keyBoardControl
                transitionDuration={500}                   // Smooth transition duration between slides
                showDots                                   // Show pagination dots
                afterChange={() => setPlayingVideo(false)} // Stop video playback when slide changes
                beforeChange={nextSlide => setCurrentMediaIndex(nextSlide)} // Update current index before slide change
            >
                {props.mediaLinks.map((item, i) => (
                    <div key={i} className="media-container">
                        {item.type === "image" ? (
                            <img
                                className="image"
                                src={item.url}
                                alt={`${props.destination} ${i}`}     // Alt text with destination and index
                                loading="lazy"                       // Lazy load for performance optimization
                            />
                        ) : (
                            videoErrors.includes(i) ? (
                                <p className="video-err">
                                    אירעה שגיאה בטעינת הוידאו!
                                </p>
                            ) : (
                                <ReactPlayer
                                    controls
                                    onError={() => handleVideoError(i)}   // Error handler for video loading issues
                                    playing={playingVideo && i === currentMediaIndex} // Play only the current video
                                    onStart={() => setPlayingVideo(true)} // Set playing state when video starts
                                    onPause={() => setPlayingVideo(false)} // Reset playing state when paused
                                    onPlay={() => setPlayingVideo(true)}   // Set playing state on play event
                                    height={"100%"}
                                    width={"100%"}
                                    url={item.url}
                                />
                            )
                        )}
                    </div>
                ))}
            </Carousel>
        </div>
    );
};