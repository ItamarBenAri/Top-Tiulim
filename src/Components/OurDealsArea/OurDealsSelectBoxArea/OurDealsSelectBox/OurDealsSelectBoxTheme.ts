/**
 * Theme Configuration for OurDealsSelectBox Component
 *
 * The OurDealsSelectBoxTheme class provides centralized styling options for
 * the OurDealsSelectBox component, including configurations for the dropdown
 * menu properties, form control layout, and select box display. This theme
 * configuration ensures consistent styling across the application and improves
 * readability and maintainability.
 */

class OurDealsSelectBoxTheme {
    
    /**
     * Dropdown menu properties for the select box.
     * Configures maximum height and width for the menu dropdown,
     * ensuring that the menu is scrollable and fits within the layout.
     */
    public static menuProps = {
        PaperProps: {
            style: {
                maxHeight: 224,  // Limits menu height for better visibility and usability
                width: 250,      // Sets menu width to fit select box layout
            },
        },
    };

    /**
     * Form control properties for styling the select box container.
     * Sets margin and width for proper spacing and alignment within the layout.
     */
    public static formControl = {
        m: 1,            // Adds a slight margin to the form control
        width: 300       // Sets the form control width for consistent appearance
    };

    /**
     * Styling for the select box when rendering selected items.
     * Configures flex display, wrapping, and spacing between selected items
     * to enhance readability and maintain a clean layout.
     */
    public static selectBox = {
        display: 'flex',       // Enables flex layout for selected items
        flexWrap: 'wrap',      // Wraps items to the next line when space is limited
        gap: 0.5               // Adds a small gap between each selected item
    };
}

export default OurDealsSelectBoxTheme;
