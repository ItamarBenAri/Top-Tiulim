/**
 * CallButtonTheme Class
 *
 * This class provides styling configurations for a responsive call button used across different
 * components. It defines two sets of styles, catering to medium and small screens, ensuring a consistent
 * and adaptable appearance.
 *
 * Styles:
 * - `callBtnMd`: Applied for medium and larger screens, ensuring standard button size.
 * - `callBtnSm`: Extended from `callBtnMd` with additional adjustments for compact displays,
 *    including reduced font size and padding.
 */

class CallButtonTheme {

    /**
     * Style for medium-sized screens and larger.
     * Ensures the button occupies flex space while keeping text wrapped within its boundaries.
     */
    public static callBtnMd = {
        flex: "1", // Allows button to expand and occupy available space
        textWrap: "nowrap", // Prevents text wrapping within the button
    };

    /**
     * Style for small screens, extending the medium style with compact adjustments.
     * Reduces font size, padding, and sets a more flexible minimum width.
     */
    public static callBtnSm = {
        ...CallButtonTheme.callBtnMd, // Inherits properties from `callBtnMd`
        fontSize: "0.75rem", // Reduces font size for smaller displays
        padding: "6px", // Adds compact padding
        minWidth: "auto", // Ensures button width adapts to content without unnecessary width
    };
}

export default CallButtonTheme;
