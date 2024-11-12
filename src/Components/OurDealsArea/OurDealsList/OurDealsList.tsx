/**
 * OurDealsList Component
 * ------------------------
 * Displays a list of travel deals in a promotional layout, including a loading state
 * and a promotional banner card. Fetches deals from either global state or an external source,
 * then renders each deal as an individual card. Utilizes image loading tracking for better
 * user experience during loading periods.
 * 
 * Imports:
 * - React and CSS for component structure and styling.
 * - Material UI components for layout and loading indicators.
 * - Redux for accessing global state.
 * - Services for data fetching and utility functions.
 */

import React, { useState, useEffect } from "react";
import "./OurDealsList.css";
import { OurDealCard } from "../OurDealCard/OurDealCard";
import { OurDealPromoCard } from "../OurDealPromoCard/OurDealPromoCard";
import { ourDealsService } from "../../../Services/OurDealsService";
import { useSelector } from "react-redux";
import { AppState } from "../../../Redux/AppState";
import useTitle from "../../../Utils/UseTitle";
import { OurDealModel } from "../../../Models/OurDealModel";
import { appService } from "../../../Services/AppService";
import { LoadingBox } from "../../SharedArea/LoadingBox/LoadingBox";

export function OurDealsList(): JSX.Element {
    const globalStateDeals = useSelector<AppState, OurDealModel[]>(appState => appState.ourDeals);
    const [isLoading, setIsLoading] = useState<boolean>(true);    // Loading state
    const [deals, setDeals] = useState<OurDealModel[]>([]);       // Local state for deal data
    const [imagesLoaded, setMediaLoaded] = useState<number>(0);   // Tracks number of images loaded
    const [totalImages, setTotalImages] = useState<number>(0);    // Total number of images to load
    
    // Sets page title with loading or content status
    useTitle(`טופ טיולים | ${isLoading ? "טוען..." : "דילים חמים"}`);

    /**
     * updateTotalImages
     * -------------------
     * Calculates the total number of images in the deals list and updates the `totalImages` state.
     * Also, stops the loading state once image counting is complete.
     * 
     * @param deals - Array of OurDealModel objects representing the deals
     */
    const updateTotalImages = (deals: OurDealModel[]) => {
        const total = appService.countImagesInDeals(deals);  // Counts images in deals
        setTotalImages(total);                               // Updates totalImages state
        setIsLoading(false);                                 // Sets loading state to false
    };

    /**
     * useEffect: Fetch Deals
     * -----------------------
     * Retrieves deals from either global state (if available) or by calling an external service.
     * Updates deal data and total images count once deals are loaded.
     */
    useEffect(() => {
        if (globalStateDeals.length) {                    // Uses global deals if available
            setDeals(globalStateDeals);
            return updateTotalImages(globalStateDeals);   // Updates image count
        }

        ourDealsService.fetchDealsFromExcel()             // Fetches deals if not in global state
            .then(deals => {
                setDeals(deals);
                updateTotalImages(deals);
            })
            .catch(err => console.error(err));            // Logs error if fetching fails
    }, [globalStateDeals]);

    /**
     * handleImageLoading
     * --------------------
     * Increments the loaded images count each time an image finishes loading,
     * to track the completion of image loading.
     */
    const handleImageLoading = () => {
        setMediaLoaded(prev => prev + 1);                // Increment loaded images count
    };

    return (
        <div className="OurDealsList">
            {/* Promo Card Display */}
            <OurDealPromoCard />
            
            {/* Loading State Display */}
            {isLoading ? (
                <LoadingBox />
            ) : (
                // Render each deal as a card once loading is complete
                deals.map((d, i) => (
                    <OurDealCard
                        key={i}
                        ourDeal={d}
                        onImageLoad={handleImageLoading}
                        imagesLoaded={!isLoading && imagesLoaded === totalImages && totalImages > 0} // Ensures all images are loaded
                    />
                ))
            )}
        </div>
    );
};