/**
 * OurDealCard Component
 * ----------------------
 * Renders a card component displaying a travel deal with image slideshow, title, destination,
 * date, price, and a "last spots" ribbon if applicable. Handles card click navigation, image
 * loading states, and skeleton loading placeholders.
 * 
 * Imports:
 * - Material UI components for styling and layout.
 * - Custom components and themes for specific design needs (e.g., ImageSlideshow, OurDealCardTheme).
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

type OurDealCardProps = {
    ourDeal: OurDealModel;              // The data model containing deal information
    imagesLoaded: boolean;              // Boolean indicating if images have finished loading
    onImageLoad: () => void;            // Callback function for when an image has loaded
};

export function OurDealCard(props: OurDealCardProps): JSX.Element {
    const navigate = useNavigate();

    /**
     * handleCardClicked
     * ------------------
     * Handles navigation when the card is clicked. Navigates to the specific deal’s detail page
     * if images have loaded. This check prevents navigating before image loading is complete.
     */
    const handleCardClicked = () => {
        if (props.imagesLoaded) navigate(`${props.ourDeal.id}`);
    };

    return (
        <div className="OurDealCard">
            <Card 
                sx={OurDealCardTheme.card}       // Applies theme styling to the main card
                onClick={handleCardClicked}       // Adds click event for navigation
            >

                {/* Image Slideshow */}
                <ImageSlideshow
                    images={props.ourDeal.mediaLinks.filter(media => media.type === "image")}
                    destination={props.ourDeal.destination}
                    onImageLoad={props.onImageLoad}
                    imagesLoaded={props.imagesLoaded}
                />

                {/* Deal Content (Shown After Images Loaded) */}
                {props.imagesLoaded ? (
                    <>
                        {/* Ribbon - Shows if last spots are available */}
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

                        {/* Price Tag */}
                        <Box className="priceTag">
                            <Typography level="title-sm">
                                {props.ourDeal.price} &#8362;
                            </Typography>
                        </Box>

                        {/* Card Overlay for Details */}
                        <CardCover sx={OurDealCardTheme.cardCover} />
                        <CardContent sx={OurDealCardTheme.cardContent}>

                            {/* Deal Title */}
                            <Typography level="title-lg" textColor="#fff">
                                {props.ourDeal.title}
                            </Typography>

                            {/* Location and Date Info */}
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
                    </>
                ) : (
                    // Skeleton Loader (Shown Until Images Load)
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