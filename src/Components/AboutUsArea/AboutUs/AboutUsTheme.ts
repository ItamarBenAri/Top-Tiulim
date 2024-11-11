/**
 * AboutUsTheme Class
 * -------------------
 * Defines a theme configuration for the "About Us" page component.
 * Provides a centralized style object that can be applied to Material-UI components
 * to ensure consistent styling and ease of maintenance.
 */

class AboutUsTheme {
    /**
     * Container Style
     * ---------------
     * Defines the primary container layout for the "About Us" section.
     * Utilizes flex layout to center-align elements and restricts the width for readability.
     */
    public static container = {
        display: "flex",               // Enables flex layout for structured alignment of child components
        flexDirection: "column",        // Aligns child components vertically
        alignItems: "center",           // Centers child components horizontally within the container
        textAlign: "right",             // Sets text alignment to right, following the design's RTL (right-to-left) orientation
        paddingTop: 4,                  // Adds top padding for spacing within the container
        paddingBottom: 4,               // Adds bottom padding for consistent spacing
        maxWidth: 800                   // Restricts maximum width to enhance readability on larger screens
    };

    /**
     * Avatar Style
     * ------------
     * Defines the avatar’s dimensions and spacing within the "About Us" section.
     * Ensures the avatar has a consistent look and aligns with design standards.
     */
    public static avatar = {
        width: 120,                     // Sets the avatar width to 120px
        height: 120,                    // Sets the avatar height to 120px, keeping it square
        marginBottom: 2                 // Adds spacing below the avatar to separate it from other content
    };

    /**
     * InfoBox Style
     * -------------
     * Defines the styling for the information box within the "About Us" section.
     * Restricts width for improved text readability and alignment with the main container.
     */
    public static infoBox = { 
        maxWidth: 600                   // Limits the width of the info box to 600px for better text layout and readability
    };
}

export default AboutUsTheme;
