/**
 * RecommendationsService
 * ----------------------
 * This service manages the fetching and storing of recommendations data.
 * It retrieves recommendations from an Excel file if not already available in the Redux store,
 * then processes and stores the data in Redux for global access.
 * 
 * Imports:
 * - `RecommendationModel`: Data model for recommendations.
 * - `fileService`: Service to handle file operations, specifically fetching data from Excel sheets.
 * - `appStore`: The main Redux store instance for state management.
 * - `recommendationsActionCreators`: Action creators for managing recommendations in Redux.
 */

import RecommendationModel from "../Models/RecommendationModel";
import { fileService } from "./FileService";
import { appStore } from "../Redux/Store";
import { recommendationsActionCreators } from "../Redux/RecommendationsSlice";

class RecommendationsService {
    
    /**
     * fetchRecommendations
     * --------------------
     * Retrieves the list of recommendations. If recommendations data is already in the Redux store,
     * it returns this cached data. Otherwise, it fetches the recommendations from the Excel file,
     * updates the Redux store with this data, and then returns it.
     * 
     * @returns {Promise<RecommendationModel[]>} - Promise resolving to an array of `RecommendationModel` instances.
     * 
     * Function Workflow:
     * - Checks the Redux store for existing recommendations data.
     * - If available, returns cached data to avoid redundant file access.
     * - If not, fetches data from the "Recommendations" sheet in Excel.
     * - Dispatches the loaded data to Redux to make it accessible across the application.
     * - Returns the data to the calling component.
     */
    public async fetchRecommendations(): Promise<RecommendationModel[]> {
        let recommendations = appStore.getState().recommendations;
        if (recommendations.length) return recommendations;

        // Fetch recommendations data from Excel if not found in store
        recommendations = await fileService.fetchDataFromExcel("Recommendations");
        
        // Dispatch fetched data to Redux store
        appStore.dispatch(recommendationsActionCreators.initAll(recommendations));
        
        return recommendations;
    }
};

// Export a singleton instance of RecommendationsService for use throughout the application
export const recommendationsService = new RecommendationsService();