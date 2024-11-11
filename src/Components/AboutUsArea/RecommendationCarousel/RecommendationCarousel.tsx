/**
 * RecommendationsCarousel Component
 * ----------------------------------
 * Renders a carousel of user recommendations using a responsive design.
 * Displays a loading indicator until data is fetched, and uses custom arrows for navigation.
 * Integrates Material UI and react-multi-carousel for styling and carousel functionality.
 */

import Carousel from "react-multi-carousel";
import { Typography, Box, Divider, Paper, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { recommendationsService } from "../../../Services/RecommendationsService";
import RecommendationModel from "../../../Models/RecommendationModel";
import RecommendationCarouselTheme from "./RecommendationCarouselTheme";
import AppTheme from "../../../Theme/AppTheme";
import CustomArrow from "../CustomArrows/CustomArrows";

export function RecommendationsCarousel(): JSX.Element {
    // State to store fetched recommendations
    const [recommendations, setRecommendations] = useState<RecommendationModel[]>();

    // Carousel responsiveness settings for all devices (single item display across all screen sizes)
    const responsive = {
        allDevices: {
            breakpoint: { max: 3000, min: 0 },
            items: 1,
        }
    };

    /**
     * Effect Hook - Fetch Recommendations
     * ------------------------------------
     * Fetches recommendations from the service when the component mounts.
     * On successful fetch, updates the recommendations state with data.
     * Logs errors to the console in case of a fetch failure.
     */
    useEffect(() => {
        recommendationsService.fetchRecommendations()
            .then(r => setRecommendations(r))       // Update state with fetched data
            .catch(err => console.error(err));      // Error handling for failed fetch
    }, []);

    return (
        <Box sx={RecommendationCarouselTheme.mainBox}>
            {/* Carousel Title */}
            <Typography variant="h5" gutterBottom>
                מטיילים ממליצים
            </Typography>
            <Divider sx={RecommendationCarouselTheme.divider} />

            {/* Conditional rendering based on recommendations data availability */}
            {recommendations ? (
                <div>
                    {/* Carousel Component with Customization */}
                    <Carousel
                        responsive={responsive}            // Enables responsive behavior
                        infinite                           // Enables infinite looping of carousel items
                        autoPlay                           // Carousel auto-plays through items
                        rtl                                // Enables right-to-left scrolling direction
                        autoPlaySpeed={10000}              // Sets auto-play delay to 10 seconds
                        arrows                             // Displays navigation arrows
                        customLeftArrow={<CustomArrow direction="left" />}  // Custom left arrow component
                        customRightArrow={<CustomArrow direction="right" />} // Custom right arrow component
                    >
                        {/* Maps each recommendation to a carousel slide */}
                        {recommendations.map(r => (
                            <div key={r.name}>
                                <Paper sx={RecommendationCarouselTheme.paper}>
                                    <Typography variant="body1" paragraph>
                                        {r.recommendation}
                                    </Typography>
                                    <Typography 
                                        variant="body2" 
                                        color="textSecondary" 
                                        align="left" 
                                        sx={RecommendationCarouselTheme.nameTypography}
                                    >
                                        {r.name} -
                                    </Typography>
                                </Paper>
                            </div>
                        ))}
                    </Carousel>
                </div>
            ) : (
                // Loading Indicator displayed while data is being fetched
                <Box sx={AppTheme.loadingBox}>
                    <CircularProgress />
                </Box>
            )}
        </Box>
    );
}
