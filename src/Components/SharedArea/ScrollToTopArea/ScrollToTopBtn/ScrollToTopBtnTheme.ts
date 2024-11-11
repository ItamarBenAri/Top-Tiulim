/**
 * ScrollToTopBtnTheme Class
 * ---------------------------
 * Provides theming styles for the ScrollToTopBtn component, specifically for the up arrow icon.
 * This class ensures consistent styling for the button across the application by centralizing
 * appearance settings such as background color, shape, and size.
 */

class ScrollToTopBtnTheme {
    
    /**
     * scrollToUpButton
     * ------------------
     * Styling configuration for the up arrow icon within the ScrollToTopBtn component.
     * 
     * Properties:
     * - `backgroundColor`: Semi-transparent light gray background to make the icon subtle yet visible.
     * - `borderRadius`: Fully rounded for a circular button appearance.
     * - `fontSize`: Sets the icon size to 40px for prominence and easy clickability.
     */
    public static scrollToUpButton = {
        backgroundColor: "rgb(200, 200, 200, 0.6)",   // Semi-transparent gray background for subtle visibility
        borderRadius: "50%",                          // Rounded shape for a circular appearance
        fontSize: "40px"                              // Icon size set to 40px for easy accessibility and visibility
    };
}

export default ScrollToTopBtnTheme;
