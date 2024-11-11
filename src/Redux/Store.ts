/**
 * Redux Store Configuration
 * --------------------------
 * This file defines the central Redux store for the application, combining reducers to manage distinct
 * parts of the application state, such as "our deals," "itineraries," "recommendations," and "gallery items."
 * The store configuration enables easy scalability and modularity for state management across the application.
 * 
 * Imports:
 * - `configureStore` from Redux Toolkit: Utility for creating the Redux store with pre-configured middleware.
 * - `AppState` type: Defines the shape of the application state, ensuring type safety for the store.
 * - Reducer Containers: Reducers for various slices (e.g., `ourDeals`, `itineraries`, `recommendations`, and `galleryItems`).
 */

import { configureStore } from "@reduxjs/toolkit";
import { AppState } from "./AppState";
import { ourDealsReducersContainer } from "./OurDealsSlice";
import { itinerariesReducersContainer } from "./ItinerariesSlice";
import { recommendationsReducersContainer } from "./RecommendationsSlice";
import { galleryItemsReducersContainer } from "./GalleryItems";

/**
 * appStore
 * --------
 * Creates the central Redux store, incorporating individual reducers to manage various application states.
 * Each reducer corresponds to a different section of the app, facilitating modular state handling.
 * 
 * Reducers:
 * - `ourDeals`: Manages the deals available on the platform.
 * - `itineraries`: Manages itinerary data associated with each deal or travel package.
 * - `recommendations`: Manages user recommendations or testimonials.
 * - `galleryItems`: Manages media gallery content such as images related to travel deals or destinations.
 * 
 * Type Parameter:
 * - `AppState`: Ensures the store adheres to the defined application state structure, enforcing type safety.
 */
export const appStore = configureStore<AppState>({
    reducer: {
        ourDeals: ourDealsReducersContainer,                 // Reducer for managing deals data
        itineraries: itinerariesReducersContainer,           // Reducer for handling itinerary data
        recommendations: recommendationsReducersContainer,   // Reducer for managing recommendations
        galleryItems: galleryItemsReducersContainer          // Reducer for handling gallery items
    }
});