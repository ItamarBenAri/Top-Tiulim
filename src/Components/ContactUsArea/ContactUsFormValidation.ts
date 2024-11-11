/**
 * ContactUsFormValidation Class
 * ------------------------------
 * Provides validation rules for the "Contact Us" form fields, defining constraints for each field.
 * Each validation rule includes specific requirements (e.g., minimum length, pattern matching) 
 * and error messages to display if validation fails.
 * 
 * Validation Rules:
 * - fullNameValidation: Rules for validating the full name field.
 * - phoneNumberValidation: Rules for validating the phone number field.
 * - messageValidation: Rules for validating the message field.
 */

class ContactUsFormValidation {

    /**
     * fullNameValidation
     * -------------------
     * Validation rules for the full name field, enforcing required entry, minimum and maximum length.
     * 
     * Rules:
     * - `required`: Ensures the field is mandatory with a custom error message.
     * - `minLength`: Enforces a minimum of 5 characters for full name entries.
     * - `maxLength`: Limits entries to a maximum of 50 characters.
     */
    public static fullNameValidation = {
        required: "שדה חובה",                  // Field is required with an error message in Hebrew
        minLength: {
            value: 5,
            message: "שם מלא חייב לכלול לפחות 5 תווים" // Error if entry is shorter than 5 characters
        },
        maxLength: {
            value: 50,
            message: "שם מלא יכול לכלול עד 50 תווים"   // Error if entry exceeds 50 characters
        }
    }

    /**
     * phoneNumberValidation
     * ----------------------
     * Validation rules for the phone number field, ensuring a valid format, length constraints,
     * and mandatory entry.
     * 
     * Rules:
     * - `required`: Ensures the field is mandatory with a custom error message.
     * - `pattern`: Validates the phone number format, supporting local and international formats for Israel.
     * - `minLength`: Requires a minimum length of 9 digits for valid phone numbers.
     * - `maxLength`: Limits phone number entries to 16 digits maximum.
     */
    public static phoneNumberValidation = {
        required: "שדה חובה",                  // Field is required with an error message in Hebrew
        pattern: {
            value: /^(?:(?:(\+?972|\(\+?972\)|\+?\(972\))(?:\s|\.|-)?([1-9]\d?))|(0[23489]{1})|(0[57]{1}[0-9]))(?:\s|\.|-)?([^0\D]{1}\d{2}(?:\s|\.|-)?\d{4})$/,
            message: "מספר טלפון לא חוקי"       // Error if the phone number format is invalid
        },
        minLength: {
            value: 9,
            message: "מספר טלפון חייב לכלול לפחות 9 תווים" // Error if entry is shorter than 9 characters
        },
        maxLength: {
            value: 16,
            message: "מספר טלפון יכול לכלול עד 16 תווים"   // Error if entry exceeds 16 characters
        }
    }

    /**
     * messageValidation
     * ------------------
     * Validation rules for the message field, enforcing required entry and length constraints.
     * 
     * Rules:
     * - `required`: Ensures the field is mandatory with a custom error message.
     * - `minLength`: Requires messages to be at least 5 characters long.
     * - `maxLength`: Limits messages to a maximum of 2000 characters.
     */
    public static messageValidation = {
        required: "שדה חובה",                  // Field is required with an error message in Hebrew
        minLength: {
            value: 5,
            message: "הודעה חייבת לכלול לפחות 5 תווים" // Error if entry is shorter than 5 characters
        },
        maxLength: {
            value: 2000,
            message: "הודעה יכולה לכלול עד 2000 תווים"  // Error if entry exceeds 2000 characters
        }
    }
}

export default ContactUsFormValidation;
