/**
 * WhatsAppButton Component
 *
 * This component renders a WhatsApp contact button, dynamically adjusting its styling and
 * message content based on the screen size and provided properties. It allows users to initiate
 * a WhatsApp message for inquiries with pre-filled text related to a specific destination.
 *
 * Props:
 * - `destination` (optional): If provided, appends the destination name to the WhatsApp message.
 *
 * The component uses `useMediaQuery` to determine if the viewport width is below 400px,
 * applying a smaller button style for compact screens.
 */

import { Button, useMediaQuery } from "@mui/material";
import { WhatsApp } from "@mui/icons-material";
import WhatsAppButtonTheme from "./WhatsAppButtonTheme";
import { Fragment } from "react";

// Type definition for WhatsAppButton props
type WhatsAppButtonProps = {
    destination?: string; // Optional destination name to customize the message content
};

// WhatsAppButton Component Definition
export function WhatsAppButton(props: WhatsAppButtonProps): JSX.Element {

    // Media query to check if the viewport width is less than or equal to 400px
    const matches = useMediaQuery("(max-width: 400px)");

    return (
        <Fragment>
            <Button
                href={props.destination
                    ? `https://wa.me/506233228?text=היי!+אשמח+לפרטים+לגבי+הטיול+ל${props.destination}.`
                    : "https://wa.me/506233228?text=היי!+אשמח+לפרטים+לגבי+הטיול"
                }
                target="_blank" // Opens the WhatsApp link in a new tab
                variant="contained" // MUI button variant with filled background
                endIcon={<WhatsApp />} // WhatsApp icon as button end decoration
                sx={matches ? WhatsAppButtonTheme.whatsappBtnSm : WhatsAppButtonTheme.whatsappBtnMd}
            >
                שלח/י הודעת וואצפ &nbsp;
            </Button>
        </Fragment>
    );
};