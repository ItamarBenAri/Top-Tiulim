/**
 * CallButton Component
 *
 * This component renders a responsive call button with an icon, allowing users to initiate a phone
 * call to a predefined number. The button dynamically adapts its style based on screen size, using
 * styles defined in `CallButtonTheme`.
 *
 * Dependencies:
 * - Material-UI Button and Icon components
 * - CallButtonTheme for responsive styling
 * - React's Fragment for clean JSX structure
 */

import { Button, useMediaQuery } from "@mui/material";
import { Call } from "@mui/icons-material";
import CallButtonTheme from "./CallButtonTheme";
import { Fragment } from "react";

export function CallButton(): JSX.Element {
    // Determine screen size; applies specific styles for screens 400px wide or less.
    const matches = useMediaQuery("(max-width: 400px)");

    return (
        <Fragment>
            {/* Render a call button linking to a predefined phone number */}
            <Button
                href="tel:0506233228" // Click initiates a call to the specified number
                variant="contained" // Button variant for a filled look
                endIcon={<Call />} // Appends a call icon to the button
                sx={matches ? CallButtonTheme.callBtnSm : CallButtonTheme.callBtnMd} // Style adapts to screen size
            >
                התקשר/י עכשיו &nbsp;
            </Button>
        </Fragment>
    );
};