/**
 * ContactUsTextFieldTheme Class
 * ------------------------------
 * Defines centralized styling options for the text fields used in the "Contact Us" form.
 * Provides reusable style properties to ensure consistency across multiple text field instances.
 */

class ContactUsTextFieldTheme {

    /**
     * textFiled Style
     * ----------------
     * Applies styling to individual text fields within the "Contact Us" form, enhancing layout and spacing.
     * 
     * Properties:
     * - `display`: Sets the text field as a block element to control layout alignment within the form.
     * - `marginBottom`: Adds vertical spacing below the text field to ensure consistent separation between fields.
     */
    public static textFiled = {
        display: "block",                  // Ensures text fields are displayed as block elements
        marginBottom: "10px",              // Adds bottom margin for consistent spacing between fields
    };
    
}

export default ContactUsTextFieldTheme;
