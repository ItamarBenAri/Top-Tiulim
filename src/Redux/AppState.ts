/**
 * AppState Type Definition
 * ------------------------------
 * Defines the structure of the global application state in a strongly typed manner.
 * 
 * This type is utilized within the application to maintain centralized data, 
 * facilitating state management and ensuring consistency across components that rely on these data sets.
 * 
 * Imports:
 * - `GalleryItemModel`: Represents individual gallery items, such as images or media displayed in a gallery.
 * - `ItineraryModel`: Represents travel itineraries with details of daily plans and activities.
 * - `OurDealModel`: Represents promotional deals or packages offered in the application.
 * - `RecommendationModel`: Represents user recommendations or testimonials.
 */

import GalleryItemModel from "../Models/GalleryItemModel";
import { ItineraryModel } from "../Models/ItineraryModel";
import { OurDealModel } from "../Models/OurDealModel";
import RecommendationModel from "../Models/RecommendationModel";

/**
 * AppState Type
 * --------------
 * Represents the application's main global state structure.
 * 
 * Properties:
 * - `ourDeals`: Array of `OurDealModel` objects, representing available promotional deals.
 * - `itineraries`: Array of `ItineraryModel` objects, detailing various travel itineraries.
 * - `recommendations`: Array of `RecommendationModel` objects, containing user recommendations or reviews.
 * - `galleryItems`: Array of `GalleryItemModel` objects, defining media items to be displayed in a gallery.
 */
export type AppState = {
    ourDeals: OurDealModel[];          // Stores all promotional deals available in the app
    itineraries: ItineraryModel[];      // Contains detailed itineraries for trips or travel packages
    recommendations: RecommendationModel[]; // User reviews or recommendations for display
    galleryItems: GalleryItemModel[];   // Media items for gallery display
};
