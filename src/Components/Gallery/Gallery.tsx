/**
 * Gallery Component
 * ------------------
 * Displays a gallery of images grouped by category. Integrates lazy loading, image zoom, and 
 * loading state indicators for enhanced user experience.
 * 
 * Imports:
 * - Material UI components for layout and structure.
 * - `Zoom` from react-medium-image-zoom for image zoom functionality.
 * - `galleryService` and `appService` for data fetching and image loading.
 * - `useTitle` for dynamic page title updates.
 * - Custom themes for styling consistency.
 */

import "./Gallery.css";
import { ImageList, ImageListItem, Typography, Container, Box, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import Zoom from 'react-medium-image-zoom';
import { galleryService } from "../../Services/GalleryService";
import { appService } from "../../Services/AppService";
import GalleryItemModel from "../../Models/GalleryItemModel";
import useTitle from "../../Utils/UseTitle";
import AppTheme from "../../Theme/AppTheme";
import GalleryTheme from "./GalleryTheme";

export function Gallery(): JSX.Element {
    // State to store gallery items and track image loading status
    const [galleryItems, setGalleryItems] = useState<GalleryItemModel[]>();
    const [isImagesLoaded, setIsImagesLoaded] = useState(false);

    // Sets the page title dynamically based on loading state
    useTitle(`טופ טיולים | ${isImagesLoaded ? "גלריה" : "טוען..."}`);

    /**
     * Fetch Gallery Data
     * -------------------
     * Fetches gallery items from an Excel source using galleryService. 
     * Updates galleryItems state on successful fetch; logs errors on failure.
     */
    useEffect(() => {
        galleryService.fetchGalleryItemsFromExcel()
            .then(galleryItems => setGalleryItems(galleryItems))
            .catch(err => console.error(err));
    }, []);

    /**
     * Preload Images
     * ---------------
     * Loads all images for each gallery item to enhance UX by displaying images only after 
     * they're fully loaded. Updates isImagesLoaded state to trigger image rendering.
     * 
     * Dependency: Triggers only when galleryItems state changes.
     */
    useEffect(() => {
        if (!galleryItems) return;
        
        const allImages = galleryItems.flatMap(item => item.images);
        appService.loadImages(allImages)
            .then(() => setIsImagesLoaded(true))
            .catch(err => console.error(err));
    }, [galleryItems]);

    return (
        <div className="Gallery">
            {/* Main Container - Provides a responsive layout for gallery content */}
            <Container 
                maxWidth="lg" 
                sx={GalleryTheme.container}
            >
                {/* Gallery Title */}
                <Typography 
                    variant="h4" 
                    component="h2" 
                    gutterBottom 
                    align="center"
                >
                    גלריה
                </Typography>

                {/* Display Gallery Items or Loading Indicator */}
                {galleryItems ? galleryItems.map((item) => (
                    <Box key={item.name} sx={GalleryTheme.itemBox}>
                        {/* Section Title for Each Gallery Item */}
                        <Typography variant="h5" gutterBottom>
                            {item.name}
                        </Typography>
                        
                        {/* Masonry Image List for Layout Control */}
                        <ImageList 
                            variant="masonry" 
                            cols={3} 
                            gap={8} 
                            sx={GalleryTheme.imageList}
                        >
                            {/* Render Images if Loaded, Else Show Spinner */}
                            {isImagesLoaded ? 
                                item.images.map((img, index) => (
                                    <ImageListItem key={index}>
                                        <Zoom>
                                            <img
                                                className="image-item"
                                                srcSet={`${img}?w=248&fit=crop&auto=format&dpr=2 2x`} // Higher resolution image for better quality on HiDPI screens
                                                src={`${img}?w=248&fit=crop&auto=format`}            // Default image source with lazy loading
                                                alt={item.name}
                                                loading="lazy"                                      // Enables lazy loading to improve initial load time
                                            />
                                        </Zoom>
                                    </ImageListItem>
                                ))
                                :
                                <Box sx={AppTheme.loadingBox}>
                                    <CircularProgress />
                                </Box>
                            }
                        </ImageList>
                    </Box>
                ))
                :
                <Box sx={AppTheme.loadingBox}>
                    <CircularProgress />
                </Box>
                }
            </Container>
        </div>
    );
}