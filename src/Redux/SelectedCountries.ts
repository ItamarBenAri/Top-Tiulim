import { PayloadAction, createSlice } from "@reduxjs/toolkit";

/**
 * Adds a single country to the current state.
 * @param currentState - The current array of selected country codes.
 * @param action - Redux action containing the new country code to add.
 * @returns A new array with the added country code.
 */
function addOne(currentState: string[], action: PayloadAction<string>): string[] {
    return [...currentState, action.payload];
}

/**
 * Removes all countries from the current state.
 * @param currentState - The current array of selected country codes.
 * @param action - Redux action (not used in this reducer, but required by Redux pattern).
 * @returns An empty array, effectively resetting the selected countries.
 */
function deleteAll(currentState: string[], action: PayloadAction<string>): string[] {
    return [];
}

/**
 * Slice for managing selected countries state in the application.
 * 
 * @description
 * This slice is responsible for handling the state of selected country codes.
 * It provides two main actions: 
 * - `addOne` for adding a new country code.
 * - `deleteAll` for clearing all selected countries.
 */
const selectedCountriesSlice = createSlice({
    name: "selectedCountries",           // Slice name used as part of action type
    initialState: [],                     // Initial state: empty array of selected countries
    reducers: { addOne, deleteAll }       // Reducer functions for handling state updates
});

// Exporting action creators for the slice reducers, enabling dispatch of actions
export const selectedCountriesActionCreators = selectedCountriesSlice.actions;

// Exporting the reducer to be combined in the root reducer
export const selectedCountriesReducersContainer = selectedCountriesSlice.reducer;