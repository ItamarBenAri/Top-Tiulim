/**
 * CustomArrow Component
 * ----------------------
 * Renders a customizable arrow button for navigation, supporting both left and right directions.
 * Utilizes Material UI's IconButton for consistent styling and accessibility.
 * 
 * Props:
 *  - direction: Specifies the direction of the arrow button ("left" or "right").
 *  - onClick: Optional callback function executed when the arrow button is clicked.
 */

import React from "react";
import { IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CustomArrowsTheme from "./CustomArrowsTheme";

// Type definition for CustomArrow component props
type CustomArrowProps = {
    direction: "left" | "right";  // Determines the arrow button direction
    onClick?: () => void;         // Optional click handler for custom behavior on click
};

/**
 * CustomArrow Functional Component
 * --------------------------------
 * Renders a directional arrow button with theme-based styles.
 * 
 * @param {CustomArrowProps} props - Props object containing:
 *   - direction: String value that defines arrow direction ("left" or "right").
 *   - onClick: Optional function executed when the arrow is clicked.
 * 
 * Logic:
 * - Based on the direction prop, an appropriate icon and styles are applied.
 * - Arrow direction determines the icon and icon's orientation.
 */
const CustomArrow: React.FC<CustomArrowProps> = (props: CustomArrowProps) => (
    <IconButton
        onClick={props.onClick}   // Attaches onClick handler if provided in props
        sx={CustomArrowsTheme.arrowStyles(props.direction === "left" ? "right" : "left")} // Determines icon position based on direction
    >
        {props.direction === "left" ? (
            <ArrowForwardIosIcon sx={CustomArrowsTheme.iconColor} /> // Renders right-facing icon if direction is "left"
        ) : (
            <ArrowBackIosNewIcon sx={CustomArrowsTheme.iconColor} /> // Renders left-facing icon if direction is "right"
        )}
    </IconButton>
);

export default CustomArrow;
