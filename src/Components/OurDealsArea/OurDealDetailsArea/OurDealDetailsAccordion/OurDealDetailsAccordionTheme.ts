/**
 * OurDealDetailsAccordionTheme Class
 * ------------------------------------
 * Provides theme styles for the OurDealDetailsAccordion component, centralizing styling configurations
 * for accordion group layout and details font size. Ensures consistent styling across all instances
 * of the accordion, enhancing readability and maintaining a cohesive design.
 */

class OurDealDetailsAccordionTheme {

    /**
     * accordionGroup Style
     * ---------------------
     * Sets margin for the accordion group to control spacing within the component.
     * 
     * Properties:
     * - `my`: Vertical margin around the accordion group, improving separation from surrounding content.
     */
    public static accordionGroup = { my: 4 };

    /**
     * accordionDetails Style
     * -----------------------
     * Sets font size for text within accordion details, enhancing readability.
     * 
     * Properties:
     * - `fontSize`: Applies a medium font size for content within accordion details, balancing readability with layout constraints.
     */
    public static accordionDetails = { fontSize: "md" };
}

export default OurDealDetailsAccordionTheme;
