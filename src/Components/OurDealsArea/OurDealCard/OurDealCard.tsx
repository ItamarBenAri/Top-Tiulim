/**
 * Component: OurDealCard
 * 
 * This component represents an individual deal card within the application, displaying details such as the title,
 * destination, date, and images of the deal. The card includes a skeleton loader while images are loading,
 * and dynamically displays a ribbon for last available spots and a price tag overlay. 
 * Clicking on the card navigates to the detailed view of the deal.
 */

import './OurDealCard.css';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import { CalendarMonthRounded } from '@mui/icons-material';
import { Box } from "@mui/joy";
import { ImageSlideshow } from "../../SharedArea/ImageSlideshow/ImageSlideshow";
import { OurDealModel } from "../../../Models/OurDealModel";
import { Skeleton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import OurDealCardTheme from './OurDealCardTheme';
import { Fragment, useEffect, useState } from 'react';
import { appService } from '../../../Services/AppService';

type OurDealCardProps = {
    ourDeal: OurDealModel; // Data model containing all details for a specific deal
};

export function OurDealCard(props: OurDealCardProps): JSX.Element {
    const navigate = useNavigate();  // Enables navigation to deal detail page
    const [cardLoaded, setCardLoaded] = useState<boolean>(false); // Tracks loading state of images
    const imageLinks = props.ourDeal.mediaLinks
        .filter(media => media.type === "image")  // Filters only image-type media links
        .map(media => media.url);

    // Effect hook to preload images and update the card's loaded state
    useEffect(() => {
        appService.loadImages(imageLinks)
            .then(() => setCardLoaded(true));  // Sets card as loaded once all images are loaded
    }, [imageLinks]);

    /**
     * Handler for card click event.
     * Navigates to the detailed view of the deal if images have fully loaded.
     */
    const handleCardClicked = () => {
        if (cardLoaded) navigate(`${props.ourDeal.id}`);
    };

    return (
        <div className="OurDealCard">
            <Card
                sx={OurDealCardTheme.card}  // Applies styling for the card container
                onClick={handleCardClicked} // Attach click event handler for navigation
            >

                {/* Conditional Rendering: Shows deal content if images are loaded */}
                {cardLoaded ? (
                    <Fragment>
                        {/* Image Slideshow Component */}
                        <ImageSlideshow
                            images={props.ourDeal.mediaLinks.filter(media => media.type === "image")}
                            destination={props.ourDeal.destination}
                        />
                        
                        {/* "Last Spots" Ribbon - Shown if the deal has limited spots */}
                        {props.ourDeal.lastSpots && (
                            <Box className="ribbon">
                                <Typography
                                    level="body-sm"
                                    textColor="#fff"
                                >
                                    מקומות אחרונים
                                </Typography>
                            </Box>
                        )}

                        {/* Price Tag Overlay */}
                        <Box className="priceTag">
                            <Typography level="title-sm">
                                {props.ourDeal.price} &#8362;
                            </Typography>
                        </Box>

                        {/* Card Content Overlay: Title, Location, and Date */}
                        <CardCover sx={OurDealCardTheme.cardCover} />
                        <CardContent sx={OurDealCardTheme.cardContent}>
                            
                            {/* Deal Title */}
                            <Typography level="title-lg" textColor="#fff">
                                {props.ourDeal.title}
                            </Typography>

                            {/* Location and Date Information */}
                            <Box sx={OurDealCardTheme.cardContentBox}>
                                <Typography
                                    startDecorator={<LocationOnRoundedIcon />}
                                    textColor="neutral.300"
                                >
                                    {props.ourDeal.destination}
                                </Typography>
                                <Typography
                                    startDecorator={<CalendarMonthRounded />}
                                    textColor="neutral.300"
                                >
                                    {props.ourDeal.date}
                                </Typography>
                            </Box>
                        </CardContent>
                    </Fragment>
                ) : (
                    // Skeleton Loader: Shows while images are loading
                    <CardCover>
                        <Skeleton
                            variant="rounded"
                            animation="wave"
                            width={352}
                            height={312}
                        />
                    </CardCover>
                )}
            </Card>
        </div>
    );
};