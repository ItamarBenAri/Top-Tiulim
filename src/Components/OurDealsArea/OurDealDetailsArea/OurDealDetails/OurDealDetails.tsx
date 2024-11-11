/**
 * OurDealDetails Component
 * -------------------------
 * Displays detailed information for a specific travel deal, including media carousel, 
 * deal metadata, description, itinerary, and contact options. Handles data fetching, 
 * loading states, and error navigation for invalid deal IDs.
 * 
 * Imports:
 * - `useNavigate`, `useParams` from react-router-dom for navigation and parameter access.
 * - Material UI components for layout and styling.
 * - Custom hooks, services, and themes for fetching data and handling component style.
 */

import { useNavigate, useParams } from "react-router-dom";
import "./OurDealDetails.css";
import { Fragment, useEffect, useState } from "react";
import { AppState } from "../../../../Redux/AppState";
import { useSelector } from "react-redux";
import { ourDealsService } from "../../../../Services/OurDealsService";
import { Button, Box, Stack, Divider, Skeleton, Grid, useMediaQuery } from "@mui/material";
import { CalendarMonthRounded, Call, LocationOn, WhatsApp } from "@mui/icons-material";
import { Typography } from "@mui/joy";
import { OurDealDetailsAccordion } from "../OurDealDetailsAccordion/OurDealDetailsAccordion";
import { appService } from "../../../../Services/AppService";
import { ItineraryModel } from "../../../../Models/ItineraryModel";
import useTitle from "../../../../Utils/UseTitle";
import { OurDealModel } from "../../../../Models/OurDealModel";
import { MediaCarousel } from "../MediaCarousel/MediaCarousel";
import AppTheme from "../../../../Theme/AppTheme";

export function OurDealDetails(): JSX.Element {
    const params = useParams();
    const dealId = +params.dealId;  // Deal ID from route parameters
    const navigate = useNavigate();

    // Fetches deal data from global state based on the deal ID
    const [globalStateDeal, setGlobalStateDeal] = useState<OurDealModel>(
        useSelector<AppState, OurDealModel>(appState => appState.ourDeals?.find(d => d.id === dealId))
    );

    const [isPageLoaded, setIsPageLoaded] = useState(false); // Tracks loading state of page data
    const [itinerary, setItinerary] = useState<ItineraryModel>(null); // Stores fetched itinerary data
    const matches = useMediaQuery("(min-width: 450px)"); // Checks if viewport width is over 450px

    useTitle(`טופ טיולים | ${isPageLoaded ? globalStateDeal?.destination : "טוען..."}`);

    /**
     * Fetches deal data if not available in global state or mismatched deal ID.
     * Redirects to 404 page if deal data is invalid or not found.
     */
    useEffect(() => {
        setIsPageLoaded(false);
        if (!globalStateDeal || globalStateDeal.id !== dealId) {
            ourDealsService.fetchDealsFromExcel()
                .then((deals) => {
                    const foundDeal = deals.find(d => d.id === dealId);
                    if (foundDeal) setGlobalStateDeal(foundDeal);
                    else navigate("/Top-Tiulim/pageNotFound");  // Redirects if no deal found
                })
                .catch(() => navigate("/Top-Tiulim/pageNotFound")); // Handles fetch error by redirecting
        }
    }, [dealId, globalStateDeal, navigate]);

    /**
     * Fetches itinerary data if `itinerarySheetId` is available in the deal data.
     * Sets itinerary to null if not available or fetch fails.
     */
    useEffect(() => {
        if (globalStateDeal && globalStateDeal.itinerarySheetId) {
            ourDealsService.fetchItineraryBySheetId(globalStateDeal.itinerarySheetId)
                .then(itinerary => setItinerary(itinerary))
                .catch(err => console.error(err));
        } else {
            setItinerary(null);
        }
    }, [dealId, globalStateDeal]);

    /**
     * Loads images once deal data is set to prevent preloading.
     * Updates loading state to true after images load.
     */
    useEffect(() => {
        if (globalStateDeal && globalStateDeal.mediaLinks) {
            appService.loadImages(appService.getImages(globalStateDeal.mediaLinks))
                .then(() => setIsPageLoaded(true))
                .catch(err => console.error(err));
        }
    }, [dealId, globalStateDeal]);

    return (
        <Box className="OurDealDetails">
            {isPageLoaded ? (
                <>
                    {/* Media Carousel Displaying Deal Images */}
                    <MediaCarousel
                        destination={globalStateDeal.destination}
                        mediaLinks={globalStateDeal.mediaLinks}
                    />

                    <Box className="content">
                        {/* Deal Metadata Section */}
                        <Stack
                            className="deal-meta"
                            direction="row"
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <Typography
                                startDecorator={<LocationOn />}
                                level={matches ? "title-md" : "title-sm"}
                                textColor="neutral.600"
                            >
                                {globalStateDeal.destination}
                            </Typography>
                            <Typography
                                level={matches ? "title-md" : "title-sm"}
                                textColor="neutral.600"
                            >
                                {globalStateDeal.price} ש"ח
                            </Typography>
                            <Typography
                                startDecorator={<CalendarMonthRounded />}
                                level={matches ? "title-md" : "title-sm"}
                                textColor="neutral.600"
                            >
                                {globalStateDeal.date}
                            </Typography>
                        </Stack>

                        <Divider sx={AppTheme.divider} />

                        {/* Deal Title and Description */}
                        <Typography
                            level="h1"
                            component="h1"
                            gutterBottom
                            textAlign="right"
                        >
                            {globalStateDeal.title}
                        </Typography>
                        <Typography level="body-md" className="description">
                            {globalStateDeal.description}
                        </Typography>

                        {/* Itinerary Accordion - Shown if itinerary data is available */}
                        {itinerary && <OurDealDetailsAccordion itinerary={itinerary} />}

                        {/* Contact Buttons Section */}
                        <Grid item sx={AppTheme.contactBtns}>
                            <Button
                                href="tel:0506233228"
                                variant="contained"
                                endIcon={<Call />}
                                sx={AppTheme.callBtn}
                            >
                                התקשר/י עכשיו &nbsp;
                            </Button>
                            <Button
                                href={`https://wa.me/506233228?text=היי!+אשמח+לפרטים+לגבי+הטיול+ל${globalStateDeal.destination}.`}
                                target="_blank"
                                variant="contained"
                                endIcon={<WhatsApp />}
                                sx={AppTheme.whatsappBtn}
                            >
                                שלח/י הודעת וואצפ &nbsp;
                            </Button>
                        </Grid>
                    </Box>
                </>
            ) : (
                // Skeleton Loaders for Content Placeholder
                <Fragment>
                    <Skeleton
                        variant="rectangular"
                        animation="wave"
                        height={450}
                    />
                    <Skeleton
                        className="skeleton"
                        animation="wave"
                        height={40}
                    />
                    <Skeleton
                        animation="wave"
                        height={30}
                    />
                </Fragment>
            )}
        </Box>
    );
};
