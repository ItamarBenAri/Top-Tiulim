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
 * - `headerIcon`: Adjusts the positioning of header icons, ensuring alignment consistency.
 */

class AppTheme {

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
