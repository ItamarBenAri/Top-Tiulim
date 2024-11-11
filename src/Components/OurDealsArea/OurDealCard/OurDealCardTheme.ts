/**
 * OurDealCardTheme Class
 * -----------------------
 * Defines centralized styling configurations for the OurDealCard component. Each style object 
 * specifies layout, spacing, and visual effects, ensuring a cohesive and visually appealing 
 * design for the card's structure and content overlay.
 */

class OurDealCardTheme {

    /**
     * card Style
     * -----------
     * Sets the minimum height and fixed width for the deal card, ensuring consistent sizing across instances.
     * 
     * Properties:
     * - `minHeight`: Provides a minimum height to accommodate card content, creating a balanced layout.
     * - `width`: Sets a fixed width for the card to standardize card sizes across the UI.
     */
    public static card = {
        minHeight: '280px',                    // Minimum height for the card
        width: 320                              // Fixed width for consistent card sizing
    };

    /**
     * cardCover Style
     * ----------------
     * Applies a gradient overlay to the card cover, enhancing readability for text over the image.
     * 
     * Properties:
     * - `background`: Uses layered linear gradients to darken the bottom of the card for text contrast,
     *   fading to transparent at the top for a smooth visual effect.
     */
    public static cardCover = {
        background: 'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)' // Double gradient for enhanced text readability
    };

    /**
     * cardContent Style
     * ------------------
     * Aligns card content to the bottom of the card for a structured layout and better readability.
     * 
     * Properties:
     * - `justifyContent`: Positions content at the bottom of the card to maintain a clean and organized look.
     */
    public static cardContent = {
        justifyContent: 'flex-end',             // Aligns card content to the bottom
    };

    /**
     * cardContentBox Style
     * ---------------------
     * Defines the layout for content within the card, placing elements horizontally with
     * space between them for clarity.
     * 
     * Properties:
     * - `display`: Sets content to display in a flex row layout.
     * - `justifyContent`: Distributes space between child elements, improving readability.
     * - `alignItems`: Vertically centers content within the box.
     * - `margin`: Removes margin for tight alignment within the card.
     * - `width`: Ensures the box spans the full width of the card content area.
     */
    public static cardContentBox = {
        display: 'flex',                        // Flex layout for horizontal alignment
        justifyContent: 'space-between',        // Adds space between elements
        alignItems: 'center',                   // Vertically centers items
        margin: "0",                            // Removes margin for tight spacing
        width: "100%"                           // Sets full width for horizontal alignment
    };
};

export default OurDealCardTheme;