/**
 * Component: OurDealsList
 * 
 * This component renders a list of travel deals with options to filter by selected countries.
 * The component displays a promotional card at the top, a filter select box for countries, 
 * and a list of deal cards. It uses a loading indicator until data is fetched.
 */

import React, { useState, useEffect, Fragment } from "react";
import "./OurDealsList.css";
import { OurDealCard } from "../OurDealCard/OurDealCard";
import { OurDealPromoCard } from "../OurDealPromoCard/OurDealPromoCard";
import { ourDealsService } from "../../../Services/OurDealsService";
import { useSelector } from "react-redux";
import { AppState } from "../../../Redux/AppState";
import useTitle from "../../../Utils/UseTitle";
import { OurDealModel } from "../../../Models/OurDealModel";
import { LoadingBox } from "../../SharedArea/LoadingBox/LoadingBox";
import { OurDealsSelectBox } from "../OurDealsSelectBoxArea/OurDealsSelectBox/OurDealsSelectBox";

export function OurDealsList(): JSX.Element {
    // Access global state for deals and selected countries
    const globalStateDeals = useSelector<AppState, OurDealModel[]>(appState => appState.ourDeals);
    const globalSelectedCountries = useSelector<AppState, string[]>(appState => appState.selectedCountries);
    
    // Local state for deals, loading status, and currently selected countries
    const [deals, setDeals] = useState<OurDealModel[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [selectedCountries, setSelectedCountries] = useState<string[]>(globalSelectedCountries); 

    // Set document title, indicating loading status if applicable
    useTitle(`טופ טיולים | ${isLoading ? "טוען..." : "דילים חמים"}`);

    /**
     * Fetch deals from global state or from an external source if not already available.
     * Updates loading state once data is retrieved.
     */
    useEffect(() => {
        if (globalStateDeals.length) {
            setDeals(globalStateDeals);
            setIsLoading(false);
        } else {
            ourDealsService.fetchDealsFromExcel()
                .then(deals => {
                    setIsLoading(false);
                    setDeals(deals);
                })
                .catch(err => console.error(err)); // Log errors without disrupting component
        }
    }, [globalStateDeals]);

    /**
     * Filters deals based on selected countries.
     * If no countries are selected, all deals are displayed.
     */
    const filteredDeals = selectedCountries.length
        ? deals.filter(deal => selectedCountries.includes(deal.country))
        : deals;

    return (
        <div className="OurDealsList">
            {/* Promotional Card Displayed at the Top */}
            <OurDealPromoCard />

            {/* Show LoadingBox if data is still loading, otherwise render content */}
            {isLoading ? (
                <LoadingBox />
            ) : (
                <Fragment>
                    {/* Country Filter Select Box */}
                    <OurDealsSelectBox
                        countries={Array.from(new Set(globalStateDeals.map(deal => deal.country)))} // Unique country list
                        onChange={(selected) => setSelectedCountries(selected)} // Update selected countries
                    />

                    {/* Render filtered deal cards */}
                    {filteredDeals.map((deal, index) => (
                        <OurDealCard
                            key={index}
                            ourDeal={deal}
                        />
                    ))}
                </Fragment>
            )}
        </div>
    );
};