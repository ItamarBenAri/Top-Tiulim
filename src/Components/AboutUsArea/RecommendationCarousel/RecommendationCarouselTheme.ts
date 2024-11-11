/**
 * RecommendationCarouselTheme Class
 * ----------------------------------
 * Provides a centralized theme for styling the RecommendationsCarousel component.
 * Contains reusable style objects that define the layout, spacing, colors, and typography
 * for each part of the carousel to ensure consistent design and easier maintenance.
 */

class RecommendationCarouselTheme {

    /**
     * mainBox Style
     * --------------
     * Styles the main container (Box) of the carousel, defining its maximum width
     * and responsive width settings, with additional margin for spacing.
     * 
     * Properties:
     * - `maxWidth`: Restricts the component width to maintain readability within larger layouts.
     * - `width`: Sets the component to occupy full width within its container.
     * - `marginTop`: Adds vertical space above the carousel for layout separation.
     */
    public static mainBox = { 
        maxWidth: 600,                   // Sets max width for readability
        width: "100%",                   // Expands component to full width of the container
        marginTop: 4                     // Adds top margin for separation from adjacent elements
    };

    /**
     * divider Style
     * --------------
     * Styles the Divider component to visually separate the title from carousel content.
     * 
     * Properties:
     * - `marginY`: Adds vertical margin above and below the divider.
     * - `borderColor`: Sets a light gray color for a subtle visual division.
     */
    public static divider = { 
        marginY: 2,                      // Vertical spacing around the divider
        borderColor: "#e0e0e0"           // Light gray color for a subtle, non-intrusive look
    };

    /**
     * paper Style
     * ------------
     * Defines the style for each recommendation's Paper component, ensuring consistent padding,
     * background color, and layout to improve readability and visual flow.
     * 
     * Properties:
     * - `backgroundColor`: Sets a soft gray background to differentiate from the main container.
     * - `padding`: Provides internal spacing for content with additional horizontal padding.
     * - `height`: Fixed height to maintain a consistent layout.
     * - `display`: Uses flex layout to vertically align the content within the Paper.
     * - `flexDirection`: Organizes content vertically.
     * - `justifyContent`: Spaces content to ensure readability and structure.
     * - `overflow`: Allows overflow handling for long content without disrupting layout.
     */
    public static paper = { 
        backgroundColor: "#ebebeb",      // Light background color to distinguish from main container
        padding: 2,                      // General padding around content
        paddingRight: 5,                 // Extra padding on right for alignment
        paddingLeft: 5,                  // Extra padding on left for alignment
        height: 210,                     // Fixed height to maintain consistency in the carousel
        display: "flex",                 // Flexbox for layout alignment
        flexDirection: "column",         // Stacks content vertically
        justifyContent: "space-between", // Spreads content to fill available space
        overflow: "auto"                 // Allows scroll if content exceeds available height
    };

    /**
     * nameTypography Style
     * ---------------------
     * Sets the margin for the name typography within the recommendation card.
     * 
     * Properties:
     * - `marginTop`: Adds space above the name text for better readability.
     */
    public static nameTypography = { 
        marginTop: 2                     // Top margin to separate name text from content above
    };
};

export default RecommendationCarouselTheme;
