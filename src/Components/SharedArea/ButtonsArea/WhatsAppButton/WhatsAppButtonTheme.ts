/**
 * WhatsAppButtonTheme Class
 * 
 * This class defines the theme styles for the WhatsApp button component in different viewport sizes,
 * ensuring a consistent look and feel across the application.
 * 
 * - `whatsappBtnMd` styles the button for medium and larger screens.
 * - `whatsappBtnSm` inherits from `whatsappBtnMd` but overrides certain properties for smaller screens.
 * 
 * Each style property is chosen to improve user experience, readability, and to maintain
 * platform-specific design standards.
 */

class WhatsAppButtonTheme {

    /**
     * Styles for the WhatsApp button on medium and larger screens.
     * 
     * Properties:
     * - `backgroundColor`: Matches the official WhatsApp green color for visual consistency.
     * - `flex`: Ensures the button adapts flexibly within its container.
     * - `textWrap`: Prevents text from wrapping, maintaining a cleaner and more compact button display.
     */
    public static whatsappBtnMd = {
        backgroundColor: "#25D366",
        flex: "1",
        textWrap: "nowrap",
    };

    /**
     * Styles for the WhatsApp button on smaller screens, inheriting from `whatsappBtnMd`
     * with specific adjustments for smaller viewports.
     * 
     * Properties:
     * - `fontSize`: Reduced font size for better fit and readability on compact screens.
     * - `padding`: Adjusted padding to maintain button proportions in smaller layouts.
     * - `minWidth`: Set to "auto" to allow the button to resize based on content and container size.
     */
    public static whatsappBtnSm = {
        ...WhatsAppButtonTheme.whatsappBtnMd,
        fontSize: "0.75rem",
        padding: "6px", 
        minWidth: "auto", 
    };
};

export default WhatsAppButtonTheme;
