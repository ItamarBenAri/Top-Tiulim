/**
 * FooterTheme Class
 * -------------------
 * Defines centralized styling configurations for the footer component, ensuring consistent 
 * background, padding, typography, and link spacing across the footer sections.
 */

class FooterTheme {

    /**
     * box Style
     * ----------
     * Configures the main container for the footer with a background color and padding.
     * 
     * Properties:
     * - `backgroundColor`: Sets a light gray background to visually separate the footer from other sections.
     * - `p`: Applies uniform padding around the footer content for balanced spacing.
     * - `paddingBottom`: Removes bottom padding to maintain alignment and prevent extra space.
     */
    public static box = {
        backgroundColor: "#EEEEEE",      // Light gray background for footer container
        py: 3,                           // Vertical padding (padding on the top and bottom) around the footer content
        paddingBottom: 0                 // Sets bottom padding to zero for precise alignment
    };
    
    /**
     * typography Style
     * -----------------
     * Defines text styling for footer links, adding a slight underline offset for emphasis.
     * 
     * Properties:
     * - `my`: Adds vertical margin around text for spacing consistency between lines.
     * - `textDecoration`: Underlines the text to indicate interactivity.
     * - `textUnderlineOffset`: Slightly offsets underline from the text for readability.
     */
    public static typography = { 
        my: 1,                           // Adds vertical margin for consistent spacing between text elements
        textDecoration: "underline",     // Underlines the text to indicate it is a clickable link
        textUnderlineOffset: 2           // Slightly offsets the underline for aesthetic emphasis
    };

    /**
     * link Style
     * -----------
     * Provides horizontal padding for icons in the social media links section.
     * 
     * Properties:
     * - `px`: Adds horizontal padding around each icon to create balanced spacing.
     */
    public static link = { 
        px: 1                             // Adds horizontal padding to each icon link for even spacing
    };

}

export default FooterTheme;
