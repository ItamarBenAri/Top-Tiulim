/**
 * CustomArrowsTheme Class
 * ------------------------
 * Defines the theme configurations for custom navigation arrows used in a carousel or slider component.
 * Provides reusable styling options to ensure consistent appearance and positioning across components.
 */

class CustomArrowsTheme {

    /**
     * arrowStyles Function
     * ---------------------
     * Returns an object defining the style properties for arrow buttons, positioned either to the left or right
     * of the container. The arrow is positioned centrally along the Y-axis, ensuring consistent alignment.
     * 
     * @param { "left" | "right" } position - Specifies the horizontal position of the arrow ("left" or "right").
     * 
     * Properties:
     * - `position`: Ensures the arrow is absolutely positioned within the parent container.
     * - `top`: Positions the arrow vertically centered along the Y-axis.
     * - `[position]`: Dynamically places the arrow to either the left or right based on the input parameter.
     * - `transform`: Shifts the arrow vertically to maintain center alignment.
     * - `backgroundColor`: Sets a transparent background for a minimalistic look.
     * - `&:hover .MuiSvgIcon-root`: Defines a hover effect, changing the icon color to indicate interactivity.
     */
    public static arrowStyles = (position: "left" | "right") => ({
        position: "absolute",                  // Ensures arrow stays within container boundaries in an absolute position
        top: "50%",                            // Centers the arrow vertically within the container
        [position]: 0,                         // Dynamically aligns arrow to the left or right based on input
        transform: "translateY(-50%)",         // Centers the arrow icon vertically
        backgroundColor: "transparent",        // Sets a transparent background for a clean design
        "&:hover .MuiSvgIcon-root": {          // Adds a subtle hover effect to enhance UI feedback
            color: "rgba(180,180,180)"         // Changes icon color on hover for user engagement
        },
    });

    /**
     * iconColor
     * ---------
     * Defines the default color of the arrow icons, ensuring visibility and alignment with the theme.
     * Uses a muted gray color to blend seamlessly with the design, while maintaining sufficient contrast.
     */
    public static iconColor = { 
        color: "rgba(80,80,80)"                // Sets default icon color to a medium gray for consistent appearance
    };
};

export default CustomArrowsTheme;
