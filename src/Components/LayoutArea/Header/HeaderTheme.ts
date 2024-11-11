/**
 * HeaderTheme Class
 * -------------------
 * Defines centralized styling configurations for elements within the header component,
 * ensuring consistency across button styles.
 */

class HeaderTheme {

    /**
     * whatsappBtn Style
     * ------------------
     * Applies styling for the WhatsApp button, ensuring clear visibility and responsiveness.
     * 
     * Properties:
     * - `backgroundColor`: Sets the button's background to WhatsApp's signature green color.
     * - `flex`: Ensures the button flexes to occupy available space when necessary.
     * - `textWrap`: Prevents text wrapping to maintain button readability.
     */
    public static whatsappBtn = {
        backgroundColor: "#25D366",       // WhatsApp green background for brand consistency
        flex: "1",                        // Allows button to expand flexibly within its container
        textWrap: "nowrap"                // Prevents text from wrapping, keeping button content inline
    };
}

export default HeaderTheme;
