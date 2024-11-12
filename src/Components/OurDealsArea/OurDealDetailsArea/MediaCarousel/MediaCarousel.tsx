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
import { Fragment, useState } from "react";
import { MediaLinkModel } from "../../../../Models/OurDealModel";
import ReactPlayer from "react-player";
import { LoadingBox } from "../../../SharedArea/LoadingBox/LoadingBox";
import CustomArrow from "../../../AboutUsArea/CustomArrows/CustomArrows";

type MediaCarouselProps = {
    destination: string;                  // Name of the media destination for alt text
    mediaLinks: MediaLinkModel[];         // Array of media items (images/videos) to display in the carousel
};

export function MediaCarousel(props: MediaCarouselProps): JSX.Element {
    const [currentMediaIndex, setCurrentMediaIndex] = useState<number>(0);    // Index of the currently displayed media
    const [playingVideo, setPlayingVideo] = useState<boolean>(false);         // Indicates if a video is currently playing
    const [videoErrors, setVideoErrors] = useState<number[]>([]);             // Array storing indices of videos with loading errors
    const [videoLoading, setVideoLoading] = useState<number[]>([]);           // Array storing indices of videos that are loading

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

    /**
     * handleVideoReady
     * ------------------
     * Handles the completion of video loading by removing the current media index from the list of loading videos.
     * This function is triggered when a video has successfully loaded and is ready to play.
     * 
     * @param index - Index of the media item that has finished loading.
     */
    const handleVideoReady = (index: number) => {
        setVideoLoading(prevLoading => prevLoading.filter(i => i !== index));
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
                arrows
                rtl
                customLeftArrow={<CustomArrow direction="left" />}
                customRightArrow={<CustomArrow direction="right" />}
                autoPlaySpeed={10000}                      // Set autoplay interval to 10 seconds
                keyBoardControl
                transitionDuration={300}                   // Smooth transition duration between slides
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
                                <Fragment>
                                    {videoLoading.includes(i) && (
                                        <LoadingBox />
                                    )}
                                    <ReactPlayer
                                        controls
                                        onError={() => handleVideoError(i)}   // Error handler for video loading issues
                                        playing={playingVideo && i === currentMediaIndex} // Play only the current video
                                        onStart={() => setPlayingVideo(true)} // Set playing state when video starts
                                        onPause={() => setPlayingVideo(false)} // Reset playing state when paused
                                        onPlay={() => setPlayingVideo(true)}   // Set playing state on play event
                                        onReady={() => handleVideoReady(i)}    // Remove loading state when video is ready
                                        height={"100%"}
                                        width={"100%"}
                                        url={item.url}
                                    />
                                </Fragment>
                            )
                        )}
                    </div>
                ))}
            </Carousel>
        </div>
    );
};