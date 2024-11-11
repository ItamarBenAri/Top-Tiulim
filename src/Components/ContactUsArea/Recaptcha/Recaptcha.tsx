/**
 * Recaptcha Component
 * --------------------
 * Renders a reCAPTCHA widget for bot verification, providing visual feedback while loading.
 * Uses Google's reCAPTCHA with options for RTL language support, error handling, and expiration management.
 * 
 * Imports:
 * - `ReCAPTCHA`: reCAPTCHA component from react-google-recaptcha for user verification.
 * - `appConfig`: Configuration file for application settings, including the reCAPTCHA site key.
 * - `react-toastify`: Displays toast notifications for error handling.
 * - `RecaptchaTheme`: Centralized theme object containing custom styling for reCAPTCHA elements.
 */

import { useState } from "react";
import "./Recaptcha.css";
import { Box, CircularProgress } from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";
import { appConfig } from "../../../Utils/AppConfig";
import { toast } from "react-toastify";
import RecaptchaTheme from "./RecaptchaTheme";

// Type definition for the Recaptcha component props
type RecaptchaProps = {
    onVerify: (value: boolean) => void; // Callback function to handle verification status
};

export function Recaptcha(props: RecaptchaProps): JSX.Element {
    // State to track whether the reCAPTCHA widget has loaded
    const [reCaptchaLoaded, setReCaptchaLoaded] = useState<boolean>(false);

    return (
        <div className="Recaptcha">
            {/* Loading Indicator - Displays a loading spinner and message until reCAPTCHA fully loads */}
            {!reCaptchaLoaded && (
                <Box sx={RecaptchaTheme.loadingBox}>
                    <CircularProgress />
                    <span className="recaptcha-loading">טוען אימות משתמש...</span>
                </Box>
            )}

            {/* reCAPTCHA Widget - Provides bot verification with error handling and expiration management */}
            <div className="recaptcha-box">
                <ReCAPTCHA
                    hl="iw"                                    // Sets the reCAPTCHA language to Hebrew (RTL support)
                    asyncScriptOnLoad={() => setReCaptchaLoaded(true)} // Updates state when reCAPTCHA script loads
                    sitekey={appConfig.recaptchaSiteKey}       // Uses the site key from appConfig
                    onChange={() => props.onVerify(true)}      // Calls onVerify with `true` on successful verification
                    onErrored={() => toast.error("תקלת תקשורת, אנא נסה שוב!")} // Displays an error toast on communication failure
                    onExpired={() => props.onVerify(false)}    // Calls onVerify with `false` if reCAPTCHA expires
                    style={RecaptchaTheme.recaptcha}           // Applies custom theming for reCAPTCHA styling
                />
            </div>
        </div>
    );
}
