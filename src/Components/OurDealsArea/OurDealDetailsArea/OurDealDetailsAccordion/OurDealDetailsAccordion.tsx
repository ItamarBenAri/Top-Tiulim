/**
 * OurDealDetailsAccordion Component
 * ----------------------------------
 * Displays an expandable accordion detailing the itinerary for each day of a trip. Each day's
 * information is organized into sections with text, images, and titles. Users can click to expand
 * each day's itinerary, providing a clean and organized view of the trip schedule.
 * 
 * Imports:
 * - Joy UI `Accordion` components for accordion functionality.
 * - `Typography` for styled text.
 * - `Zoom` for image zoom effects.
 * - `ItineraryModel` type for defining the structure of itinerary data.
 */

import "./OurDealDetailsAccordion.css";
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';
import { Typography } from "@mui/joy";
import { SyntheticEvent, useState } from "react";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { ItineraryModel } from "../../../../Models/ItineraryModel";
import OurDealDetailsAccordionTheme from "./OurDealDetailsAccordionTheme";

type OurDealDetailsAccordionProps = {
    itinerary: ItineraryModel;             // Itinerary data structure containing days and details
};

export function OurDealDetailsAccordion(props: OurDealDetailsAccordionProps): JSX.Element {
    const [expanded, setExpanded] = useState<string>('');   // Tracks the currently expanded panel

    /**
     * handleChange
     * --------------
     * Toggles the expanded state of an accordion panel based on the given panel identifier.
     * 
     * @param panel - Identifier for the panel to expand or collapse.
     * @returns An event handler function that toggles the accordion expansion state.
     */
    const handleChange = (panel: string) => (event: SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : '');
    };

    return (
        <div className="OurDealDetailsAccordion">
            {/* Title for the itinerary section */}
            <Typography 
                level="h3" 
                component="h3" 
                textAlign="right"
            >
                תכנית הטיול
            </Typography>

            {/* Accordion group containing the itinerary details for each day */}
            <AccordionGroup size="lg" sx={OurDealDetailsAccordionTheme.accordionGroup}>
                {props.itinerary.days.map((day, index) => (
                    <Accordion 
                        key={index} 
                        expanded={expanded === day.summary}        // Expands the panel if it matches the expanded state
                        onChange={handleChange(day.summary)}       // Toggles the expanded state on change
                    >
                        <AccordionSummary>{day.summary}</AccordionSummary>
                        <AccordionDetails sx={OurDealDetailsAccordionTheme.accordionDetails}>

                            {/* Renders each section in the day’s itinerary */}
                            {day.sections.map((section, idx) => (
                                <div key={idx} className="section-block">
                                    {/* Section title, if available */}
                                    {section.title && (
                                        <Typography 
                                            textAlign="right" 
                                            level="h4" 
                                            gutterBottom
                                        >
                                            {section.title}
                                        </Typography>
                                    )}
                                    
                                    {/* Section text content */}
                                    {section.text && (
                                        <Typography 
                                            textAlign="right" 
                                            level="body-md" 
                                            component="p"
                                        >
                                            {section.text}
                                        </Typography>
                                    )}
                                    
                                    {/* Section image with zoom effect */}
                                    {section.image && (
                                        <Zoom>
                                            <img
                                                className="trip-image"
                                                src={section.image}
                                                alt="תמונה של הטיול"    // Descriptive alt text for accessibility
                                            />
                                        </Zoom>
                                    )}
                                </div>
                            ))}
                        </AccordionDetails>
                    </Accordion>
                ))}
            </AccordionGroup>
        </div>
    );
};