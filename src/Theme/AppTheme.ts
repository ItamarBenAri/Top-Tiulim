/**
 * AppTheme
 * --------
 * Defines a centralized theme configuration for reusable UI styling within the application.
 * Each static property within `AppTheme` contains style definitions to ensure consistent styling across components,
 * reducing repetitive CSS and improving maintainability.
 *
 * Properties:
 * - `loadingBox`: Styles for a centered loading container, used to display loading animations or messages.
 * - `divider`: Margin configuration for dividing elements with a consistent vertical gap.
 * - `contactBtns`: Layout styling for button containers, particularly used in contact or CTA sections.
 * - `callBtn`: Specific style configuration for a standard call-to-action button.
 * - `whatsappBtn`: Style configuration for a WhatsApp call-to-action button, with a distinct green background color.
 * - `headerIcon`: Adjusts the positioning of header icons, ensuring alignment consistency.
 */

class AppTheme {
    
    /** 
     * loadingBox
     * ----------
     * Styles a container for centered loading animations.
     * 
     * - `display`: Flex layout to easily center content.
     * - `justifyContent`: Horizontally centers child elements.
     * - `alignItems`: Vertically centers child elements.
     * - `height`: Sets a fixed height for loading indicators.
     */
    public static loadingBox = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 200
    };

    /**
     * divider
     * -------
     * Standard margin configuration for divider elements.
     * - `marginY`: Vertical margin around the divider for consistent spacing.
     */
    public static divider = { marginY: 2 };

    /**
     * contactBtns
     * -----------
     * Layout configuration for contact buttons, typically used in CTA sections.
     * - `display`: Flex layout to align buttons horizontally.
     * - `justifyContent`: Ensures buttons are spaced evenly within the container.
     * - `gap`: Sets a consistent gap between buttons.
     */
    public static contactBtns = {
        display: "flex",
        justifyContent: "space-between",
        gap: "10px"
    };
    
    /**
     * callBtn
     * -------
     * Styles for a generic call-to-action button.
     * - `flex`: Allows the button to grow proportionally within a flex container.
     * - `textWrap`: Prevents text from wrapping, keeping the button layout compact.
     */
    public static callBtn = {
        flex: "1", 
        textWrap: "nowrap"
    };
    
    /**
     * whatsappBtn
     * -----------
     * Styles for a WhatsApp-specific button with a green background.
     * - `backgroundColor`: Sets WhatsApp brand color for quick visual recognition.
     * - `flex`: Ensures the button grows proportionally within a flex layout.
     * - `textWrap`: Prevents text wrapping for a cleaner button layout.
     */
    public static whatsappBtn = {
        backgroundColor: "#25D366", 
        flex: "1", 
        textWrap: "nowrap"
    };

    /**
     * headerIcon
     * ----------
     * Adjusts the position of icons in headers to align visually with other elements.
     * - `marginBottom`: Moves the icon slightly upward to align with surrounding text.
     */
    public static headerIcon = {
        marginBottom: "-7px"
    };
}

export default AppTheme;
