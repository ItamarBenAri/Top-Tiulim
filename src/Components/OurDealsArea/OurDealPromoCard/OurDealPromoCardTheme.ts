/**
 * OurDealPromoCardTheme Class
 * -----------------------------
 * Provides centralized styling properties for the OurDealPromoCard component, ensuring consistent
 * appearance and layout across the application. Defines styles for the main promo card and its title,
 * allowing for responsive adjustments based on screen size.
 */

class OurDealPromoCardTheme {
    
    /**
     * promoCard Style
     * ----------------
     * Defines the layout and padding for the promotional card, including responsive width limitations.
     * 
     * Properties:
     * - `margin`: Adds margin around the card for separation from other elements.
     * - `width`: Sets the card to occupy the full width of its container.
     * - `maxWidth`: Limits the card’s width to 1000px for better readability on large screens.
     * - `padding`: Adds padding inside the card to ensure content has adequate spacing.
     */
    public static promoCard = { 
        margin: "20px",
        width: "100%",
        maxWidth: "1000px",
        padding: "20px"
    };
    
    /**
     * promoCardTitle Style
     * ----------------------
     * Provides responsive margin for the promo card title, adjusting spacing based on screen size.
     * 
     * Properties:
     * - `marginBottom`: Sets bottom margin for extra spacing below the title. Adjusts to "10px" for small screens (xs) and removes margin on medium (md) screens and above.
     */
    public static promoCardTitle = {
        marginBottom: { xs: "10px", md: "0" }
    };
}

export default OurDealPromoCardTheme;
