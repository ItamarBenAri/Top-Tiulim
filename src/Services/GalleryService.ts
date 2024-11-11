/**
 * GalleryService
 * --------------
 * Service to manage the retrieval and processing of gallery items data from an external Excel file.
 * It integrates with Redux for state management and stores processed gallery data in the application store.
 * 
 * Imports:
 * - `GalleryItemModel`: Model definition for gallery items.
 * - `galleryItemsActionCreators`: Redux action creators for managing gallery items.
 * - `appStore`: Application's Redux store for state management.
 * - `fileService`: Service responsible for fetching and reading data from Excel files.
 */

import GalleryItemModel from "../Models/GalleryItemModel";
import { galleryItemsActionCreators } from "../Redux/GalleryItems";
import { appStore } from "../Redux/Store";
import { fileService } from "./FileService";

class GalleryService {

    /**
     * fetchGalleryItemsFromExcel
     * --------------------------
     * Fetches gallery items from the Redux store or from an external Excel file if not already in the store.
     * The gallery items data is retrieved, processed, and then stored in the Redux store for future access.
     * 
     * @returns {Promise<GalleryItemModel[]>} - A promise that resolves with an array of `GalleryItemModel` instances.
     * 
     * Function Workflow:
     * - First, it checks if gallery items are already in the Redux store and returns them if available.
     * - If not found in the store, it fetches raw data from an Excel file via `fileService`.
     * - Processes the raw data to match the `GalleryItemModel` structure.
     * - Dispatches the processed data to Redux for persistent storage.
     * - Returns the gallery items.
     */
    public async fetchGalleryItemsFromExcel(): Promise<GalleryItemModel[]> {
        // Check if gallery items are already in the Redux store
        let galleryItems = appStore.getState().galleryItems;
        if(galleryItems.length) return galleryItems;
        
        // Fetch raw gallery items from Excel and process them
        const rawGalleryItems = await fileService.fetchDataFromExcel("Gallery");
        galleryItems = this.processRawGalleryItems(rawGalleryItems);

        // Store processed gallery items in Redux for centralized state management
        appStore.dispatch(galleryItemsActionCreators.initAll(galleryItems));
        
        return galleryItems;
    };

    /**
     * processRawGalleryItems
     * ----------------------
     * Processes raw gallery item data by mapping each item to the `GalleryItemModel` structure.
     * Ensures that the `images` field is correctly parsed as an array if stored as a JSON string.
     * 
     * @param {any[]} rawData - Array of raw data entries from the Excel sheet.
     * @returns {GalleryItemModel[]} - Array of gallery items formatted as `GalleryItemModel` instances.
     * 
     * Function Workflow:
     * - Maps each raw data item to a standardized `GalleryItemModel` format.
     * - Ensures that image data is parsed as an array, accommodating both JSON strings and arrays directly.
     */
    private processRawGalleryItems(rawData: any[]): GalleryItemModel[] {
        return rawData.map((item: any) => ({
            name: item.name,
            images: typeof item.images === "string" ? JSON.parse(item.images) : item.images
        }));
    };
}

// Export a singleton instance of GalleryService for use across the application
export const galleryService = new GalleryService();