/**
 * AppService
 * ----------
 * A utility service class that provides helper methods to manage and load media assets (images and videos)
 * used in the application. The service encapsulates functionality for preloading images and videos,
 * filtering media items, and calculating totals, supporting optimized and responsive user experiences.
 * 
 * Imports:
 * - `MediaLinkModel`, `OurDealModel`: Data models defining structure for media links and deals.
 */

import { MediaLinkModel, OurDealModel } from "../Models/OurDealModel";

class AppService {
    
    /**
     * loadImages
     * ----------
     * Preloads a list of images, accepting both direct URLs and `MediaLinkModel` objects.
     * This function initiates asynchronous image loading to ensure assets are cached before display,
     * enhancing performance by reducing load time on initial rendering.
     * 
     * @param {Array<MediaLinkModel | string>} images - List of image sources or `MediaLinkModel` items.
     * @returns {Promise<void[]>} - Resolves once all images are successfully loaded.
     */
    public loadImages = (images: (MediaLinkModel | string)[]): Promise<void[]> => {
        return Promise.all(
            images.map(image => new Promise<void>((resolve) => {
                const img = new Image();
                img.src = typeof image === "string" ? image : image.url;
                img.onload = () => resolve();  // Resolves when each image is fully loaded
            }))
        );
    };

    /**
     * loadedMedia
     * -----------
     * Preloads an array of media assets, handling both images and videos. This method accommodates different
     * media types, ensuring they are preloaded and ready for immediate display, thus improving page responsiveness.
     * 
     * @param {MediaLinkModel[]} media - Array of media items, each specifying type and URL.
     * @returns {Promise<void[]>} - Resolves when all media assets (images and videos) are loaded.
     */
    public loadedMedia = (media: MediaLinkModel[]): Promise<void[]> => {
        return Promise.all(
            media.map(item => new Promise<void>((resolve) => {
                if (item.type === "image") {  // Handles image loading
                    const img = new Image();
                    img.src = item.url;
                    img.onload = () => resolve();
                } else if (item.type === "video") {  // Handles video loading
                    const video = document.createElement("video");
                    video.src = item.url;
                    video.onloadeddata = () => resolve();
                }
            }))
        );
    };

    /**
     * getImages
     * ---------
     * Filters a list of media items to return only images, providing a streamlined array of image data.
     * 
     * @param {MediaLinkModel[]} media - Array of media items, each potentially of various types (image, video).
     * @returns {MediaLinkModel[]} - Array containing only image media items.
     */
    public getImages = (media: MediaLinkModel[]): MediaLinkModel[] => {
        return media.filter(media => media.type === "image");
    };

    /**
     * countImagesInDeals
     * -------------------
     * Calculates the total number of images across a list of deals by aggregating the image count within
     * each deal’s media links. This method is useful for tracking and preloading media.
     * 
     * @param {OurDealModel[]} deals - Array of deals, each with associated media links.
     * @returns {number} - Total number of images across all provided deals.
     */
    public countImagesInDeals = (deals: OurDealModel[]): number => {
        return deals.reduce((sum, deal) => 
            sum + deal.mediaLinks.filter(media => media.type === "image").length, 
        0);
    };
};

// Exporting an instance of AppService for global access
export const appService = new AppService();