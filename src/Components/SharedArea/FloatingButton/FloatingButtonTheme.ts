/**
 * FloatingButtonTheme Class
 * ---------------------------
 * Defines centralized styling configurations for the FloatingButton component, 
 * including the main FAB button and individual action buttons for WhatsApp, phone, 
 * and email. Ensures consistent and distinct color schemes for each contact method, 
 * enhancing user interface clarity and accessibility.
 */

class FloatingButtonTheme {

    /**
     * fabButton Style
     * ----------------
     * Positions the FloatingButton in a fixed location on the screen.
     * 
     * Properties:
     * - `bottom`: Aligns the button near the bottom of the viewport.
     * - `right`: Adjusts the button horizontally to ensure visibility and accessibility.
     */
    public static fabButton = {
        bottom: 0,
        right: -45
    };
    
    /**
     * fabMainButton Style
     * ---------------------
     * Sets the background color for the main Floating Action Button, providing
     * a primary theme color that is visually distinct.
     * 
     * Properties:
     * - `backgroundColor`: Sets the primary blue color for the main FAB.
     */
    public static fabMainButton = {
        backgroundColor: "#1976D2"
    };

    /**
     * fabWhatAppButton Style
     * ------------------------
     * Sets the background color and positioning for the WhatsApp action button, 
     * ensuring a visually recognizable green color.
     * 
     * Properties:
     * - `backgroundColor`: WhatsApp's signature green color for easy recognition.
     * - `marginRight`: Adds space between the main FAB and this action button.
     */
    public static fabWhatAppButton = {
        backgroundColor: "#25D366",
        marginRight: "45px"
    };

    /**
     * fabTelButton Style
     * --------------------
     * Configures styling for the phone call action button, applying a consistent
     * blue theme color similar to the main button for uniformity.
     * 
     * Properties:
     * - `backgroundColor`: Blue color to indicate phone contact, aligning with main theme.
     * - `marginRight`: Positions the button to the left of the main FAB, similar to other actions.
     */
    public static fabTelButton = {
        backgroundColor: "rgb(25, 118, 210)",
        marginRight: "45px"
    };
    
    /**
     * fabEmailButton Style
     * ----------------------
     * Defines the styling for the email action button with a distinct orange color.
     * 
     * Properties:
     * - `backgroundColor`: Unique orange color for easy identification as an email action.
     * - `marginRight`: Positions the button to maintain consistent spacing with other actions.
     */
    public static fabEmailButton = {
        backgroundColor: "#f97548",
        marginRight: "45px"
    };
}

export default FloatingButtonTheme;
