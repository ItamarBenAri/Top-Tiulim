/**
 * ContactUs Component
 * --------------------
 * Renders the "Contact Us" section, including a title and contact form.
 * Sets the page title upon mounting and utilizes a custom theme for styling.
 * 
 * Imports:
 * - `Typography`: Material UI component for consistent, accessible typography.
 * - `ContactUsForm`: Custom form component for user inquiries and contact information submission.
 * - `useTitle`: Custom hook to dynamically set the page title.
 * - `ContactUsTheme`: Centralized theme object containing custom styles for the component.
 */

import { Typography } from "@mui/material";
import { ContactUsForm } from "../ContactUsForm/ContactUsForm";
import "./ContactUs.css";
import useTitle from "../../../Utils/UseTitle";
import ContactUsTheme from "./ContactUsTheme";

export function ContactUs(): JSX.Element {
    // Sets the document title when the component is mounted
    useTitle("טופ טיולים | צור קשר");

    return (
        <div className="ContactUs">
            {/* Page Title */}
            <Typography variant="h4" sx={ContactUsTheme.typography}>
                צור קשר
            </Typography>
            
            {/* Contact Us Form */}
            <ContactUsForm />
        </div>
    );
}
