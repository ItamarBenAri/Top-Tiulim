/**
 * Our Deals Slice
 * -----------------
 * This Redux slice manages the state for "Our Deals" in the application, allowing for the initialization
 * of deals with a provided array of `OurDealModel` items.
 * 
 * Imports:
 * - `PayloadAction` and `createSlice` from Redux Toolkit: Utilized for creating the slice and defining action payloads.
 * - `OurDealModel`: Represents individual deals offered, each with details like pricing, dates, and destinations.
 */

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { OurDealModel } from "../Models/OurDealModel";

/**
 * initAll Function
 * -----------------
 * Reducer function that initializes the deals state by setting it to a new array of `OurDealModel` items.
 * 
 * Parameters:
 * - `currentState`: The current state of deals, which is an array of `OurDealModel`.
 * - `action`: Redux action carrying a payload, an array of `OurDealModel` items to set as the new state.
 * 
 * Returns:
 * - A new state array populated with all deals from the action payload, replacing any existing state.
 */
function initAll(currentState: OurDealModel[], action: PayloadAction<OurDealModel[]>): OurDealModel[] {
    const allDeals = action.payload; // Extract deals from the payload
    return allDeals;
}

/**
 * ourDealsSlice
 * --------------
 * Creates a Redux slice for managing the "Our Deals" section in the application state.
 * 
 * Properties:
 * - `name`: Specifies the slice name as "ourDeals".
 * - `initialState`: Sets the initial state to an empty array, indicating no deals initially loaded.
 * - `reducers`: Defines reducer functions for the slice, currently including only `initAll`.
 */
const ourDealsSlice = createSlice({
    name: "ourDeals",            // Name of the slice for referencing in the store
    initialState: [],            // Initial empty state for deals
    reducers: { initAll }        // Reducers for modifying the state, here adding `initAll` for initialization
});

/**
 * ourDealsActionCreators
 * ------------------------
 * Exports action creators generated by Redux Toolkit for the "Our Deals" slice, 
 * enabling dispatch of actions like `initAll`.
 */
export const ourDealsActionCreators = ourDealsSlice.actions;

/**
 * ourDealsReducersContainer
 * ---------------------------
 * Exports the reducer for the slice, allowing it to be included in the Redux store.
 */
export const ourDealsReducersContainer = ourDealsSlice.reducer;