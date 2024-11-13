/**
 * OurDealsService
 * ---------------
 * This service is responsible for managing "Our Deals" and associated itinerary data.
 * It retrieves deal information and itinerary details from an external Excel file, processes the data, 
 * and stores it in the Redux store for global state management.
 * 
 * Imports:
 * - `appStore`: The main Redux store instance.
 * - `ourDealsActionCreators`: Redux action creators for managing deals.
 * - `itinerariesActionCreators`: Redux action creators for managing itineraries.
 * - `fileService`: Service responsible for reading and fetching data from Excel sheets.
 * - Model types like `OurDealModel`, `ItineraryModel`, and `Day`.
 */

import { appStore } from "../Redux/Store";
import { ourDealsActionCreators } from "../Redux/OurDealsSlice";
import { Day, ItineraryModel } from "../Models/ItineraryModel";
import { fileService } from "./FileService";
import { itinerariesActionCreators } from "../Redux/ItinerariesSlice";
import { OurDealModel } from "../Models/OurDealModel";
import { selectedCountriesActionCreators } from "../Redux/SelectedCountries";

class OurDealsService {

    /**
     * fetchDealsFromExcel
     * -------------------
     * Fetches the list of deals from the Redux store, or if not available, loads them from an Excel file.
     * This method retrieves raw data, processes it to a usable structure, and updates the Redux store.
     * 
     * @returns {Promise<OurDealModel[]>} - Promise resolving to an array of `OurDealModel` instances.
     * 
     * Function Workflow:
     * - Checks if deals are already loaded in Redux; returns them if available.
     * - If not, fetches raw deal data from the "Deals" sheet in Excel.
     * - Parses the raw data and updates the Redux store with processed deals.
     */
    public async fetchDealsFromExcel(): Promise<OurDealModel[]> {
        let deals = appStore.getState().ourDeals;
        if (deals.length) return deals;

        const rawData = await fileService.fetchDataFromExcel("Deals");
        deals = this.parseDealsData(rawData);

        appStore.dispatch(ourDealsActionCreators.initAll(deals));

        return deals;
    };

    /**
     * parseDealsData
     * --------------
     * Processes raw deal data to ensure proper structure, particularly converting `mediaLinks`
     * from JSON strings to objects if necessary.
     * 
     * @param {OurDealModel[]} data - Array of raw deal data from the Excel file.
     * @returns {OurDealModel[]} - Array of processed `OurDealModel` instances.
     * 
     * Function Workflow:
     * - Maps through each deal item and parses `mediaLinks` if it’s a JSON string.
     */
    private parseDealsData(data: OurDealModel[]): OurDealModel[] {
        return data.map((deal) => ({
            ...deal,
            mediaLinks: typeof deal.mediaLinks === "string" ? JSON.parse(deal.mediaLinks) : deal.mediaLinks
        }));
    }

    /**
     * fetchItineraryBySheetId
     * -----------------------
     * Retrieves an itinerary based on a given `itinerarySheetId`. If the itinerary is not already
     * in the Redux store, it fetches the data from an Excel sheet, processes it, and updates the store.
     * 
     * @param {string} itinerarySheetId - The unique sheet ID for the itinerary in the Excel file.
     * @returns {Promise<ItineraryModel>} - Promise resolving to the processed itinerary data.
     * 
     * Function Workflow:
     * - Checks if the itinerary is already in the Redux store by ID.
     * - If not, fetches the data from the Excel sheet, processes it, and dispatches it to Redux.
     */
    public async fetchItineraryBySheetId(itinerarySheetId: string): Promise<ItineraryModel> {
        let itinerary = appStore.getState().itineraries.find(itinerary => itinerary.itinerarySheetId === itinerarySheetId);
        if (itinerary) return itinerary;

        const rawData = await fileService.fetchDataFromExcel(itinerarySheetId);

        itinerary = this.parseItineraryData(rawData, itinerarySheetId);
        appStore.dispatch(itinerariesActionCreators.addItinerary(itinerary));

        return itinerary;
    };

    /**
     * parseItineraryData
     * ------------------
     * Processes raw itinerary data to organize it into days and sections, mapping each section to its day.
     * 
     * @param {any[]} data - Array of raw itinerary data from the Excel file.
     * @param {string} itinerarySheetId - Unique ID for the itinerary sheet.
     * @returns {ItineraryModel} - Structured itinerary data as an `ItineraryModel` instance.
     * 
     * Function Workflow:
     * - Initializes an itinerary model with days.
     * - Loops through the data, grouping sections by day.
     * - Each section can have a title, text, and/or image.
     */
    private parseItineraryData(data: any[], itinerarySheetId: string): ItineraryModel {
        const itinerary: ItineraryModel = {
            itinerarySheetId,
            days: []
        };
        let currentDay: Day | null = null;

        data.forEach((row: any) => {
            const { daySummary, sectionTitle, sectionText, sectionImage } = row;

            // New day begins when the current day's summary differs from the row's day summary
            if (!currentDay || currentDay.summary !== daySummary) {
                if (currentDay) {
                    itinerary.days.push(currentDay);
                }
                currentDay = {
                    summary: daySummary,
                    sections: [],
                };
            }

            // Add each section (title, text, image) to the current day
            currentDay.sections.push({
                title: sectionTitle || undefined,
                text: sectionText || undefined,
                image: sectionImage || undefined,
            });
        });

        // Push the last day into the itinerary if present
        if (currentDay) {
            itinerary.days.push(currentDay);
        }

        return itinerary;
    };

    /**
     * Updates the list of selected countries in the application state.
     * 
     * This method first clears all previously selected countries in the store and then adds each country from the provided
     * `selectedCountries` array to the store individually. Ensures that the store reflects the latest selection state.
     *
     * @param selectedCountries - An array of strings where each string represents a country to be selected.
     *
     * @example
     * // To update the selected countries with "France" and "Japan":
     * updateSelectedCountries(["France", "Japan"]);
     */
    public updateSelectedCountries(selectedCountries: string[]): void {
        // Clear all previously selected countries from the store
        this.deleteSelectedCountries();

        // Add each country in the provided array to the store
        selectedCountries.forEach(country => {
            appStore.dispatch(selectedCountriesActionCreators.addOne(country));
        });
    };

    /**
     * Deletes all selected countries from the application's state.
     * 
     * This function clears the list of selected countries, effectively resetting
     * the state related to selected countries in the application.
    */
    public deleteSelectedCountries(): void {
        appStore.dispatch(selectedCountriesActionCreators.deleteAll());
    };

    /**
     * Counts the total number of images in a given deal.
     * 
     * This method inspects the `mediaLinks` array within the provided `deal` object and filters for media items of type "image".
     * It returns the total count of image items, allowing quick access to the number of images associated with a deal.
     * 
     * @param deal - An instance of `OurDealModel` representing a specific deal. The `deal` object contains a `mediaLinks` array,
     *               which may include images, videos, or other media types.
     * 
     * @returns The number of media items in `deal.mediaLinks` that are of type "image".
     * 
     * @example
     * // Assuming `deal` has three media items, two of which are images:
     * const imageCount = countImagesInDeal(deal); // Returns 2
     */
    public countImagesInDeal = (deal: OurDealModel): number => {
        return deal.mediaLinks.filter(media => media.type === "image").length;
    };

}

// Export a singleton instance of OurDealsService for application-wide use
export const ourDealsService = new OurDealsService();