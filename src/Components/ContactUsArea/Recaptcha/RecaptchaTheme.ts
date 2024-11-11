/**
 * RecaptchaTheme Class
 * ---------------------
 * Provides centralized styling configurations for the reCAPTCHA component and its loading state.
 * Ensures a consistent layout and alignment, improving user experience and visual coherence.
 */

class RecaptchaTheme {

    /**
     * loadingBox Style
     * -----------------
     * Defines styling for the loading container displayed while the reCAPTCHA widget loads.
     * 
     * Properties:
     * - `display`: Uses flex layout to enable content alignment.
     * - `justifyContent`: Centers content horizontally within the container.
     * - `margin`: Adds vertical spacing around the loading box for visual separation.
     */
    public static loadingBox = {
        display: 'flex',                  // Sets display to flex for controlled alignment of child elements
        justifyContent: "center",          // Centers the loading spinner and text horizontally
        margin: "24px 0 24px 0"            // Adds vertical spacing above and below the loading box
    };

    /**
     * recaptcha Style
     * ----------------
     * Applies styling for the main reCAPTCHA container, ensuring alignment and spacing consistency.
     * 
     * Properties:
     * - `marginBottom`: Adds spacing below the reCAPTCHA container for separation from subsequent content.
     * - `display`: Uses flex layout to align content within the reCAPTCHA container.
     * - `justifyContent`: Aligns the reCAPTCHA component to the right within its container for RTL compatibility.
     */
    public static recaptcha = {
        marginBottom: "10px",              // Adds bottom margin for separation from following elements
        display: "flex",                   // Uses flex display for controlled alignment
        justifyContent: "right"            // Aligns the reCAPTCHA component to the right, supporting RTL layouts
    };
};

export default RecaptchaTheme;
