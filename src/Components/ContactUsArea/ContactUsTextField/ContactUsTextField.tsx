/**
 * ContactUsTextField Component
 * -----------------------------
 * Renders a customized text field for the "Contact Us" form, with support for validation, 
 * theming, and RTL (Right-to-Left) alignment.
 * Uses react-hook-form for validation and error handling, ensuring smooth form interactions.
 * 
 * Imports:
 * - `TextField`: Material UI component for consistent, accessible text input fields.
 * - `useFormContext`: Provides form context from react-hook-form for validation state access.
 * - `ContactUsFormValidation`: Object containing validation rules for form fields.
 * - `ContactUsTextFieldTheme`: Defines custom theme styling for the text field.
 */

import { TextField } from "@mui/material";
import { FieldError, UseFormRegister, useFormContext } from "react-hook-form";
import ContactUsFormValidation from "../ContactUsFormValidation";
import ContactUsTextFieldTheme from "./ContactUsTextFieldTheme";

// Type definition for props used in the ContactUsTextField component
type ContactUsTextFieldProps = {
    registerTo: string,                 // Name of the form field to register
    register: UseFormRegister<any>,     // Register function from react-hook-form
    label: string,                      // Label text displayed above the input
    rows?: number | undefined,          // Optional number of rows for multi-line text input
    autoFocus?: boolean,                // Optional autofocus setting for input focus on mount
    type?: string                       // Optional input type (e.g., "text", "email", "tel")
};

// Type for accessing specific keys within the validation rules object
type ValidationKeys = keyof typeof ContactUsFormValidation;

export function ContactUsTextField(props: ContactUsTextFieldProps): JSX.Element {
    // Accessing form errors using react-hook-form's useFormContext
    const { formState: { errors } } = useFormContext();

    // Extract error message for the current field, defaulting to an empty string if undefined
    const errorText = (errors[props.registerTo] as FieldError)?.message || '';

    // Constructs a key for retrieving validation rules from ContactUsFormValidation
    const validationLabelName = props.registerTo + "Validation" as ValidationKeys;
    const validationRules = ContactUsFormValidation[validationLabelName];

    return (
        <div className="ContactUsTextField">
            <TextField
                dir="rtl"                            // Sets direction to Right-to-Left for RTL languages
                required                             // Marks the field as required in the UI
                fullWidth                            // Expands the field to take up full container width
                label={props.label}                  // Sets label text from props
                autoFocus={props.autoFocus}          // Automatically focuses the field if autoFocus is true
                sx={ContactUsTextFieldTheme.textFiled} // Applies custom theme styling
                {...props.register(props.registerTo, validationRules)} // Registers field with validation
                error={!!errors[props.registerTo]}   // Shows error state if validation error exists
                helperText={errorText}               // Displays error message if validation fails
                multiline={props.rows ? true : false} // Enables multiline if rows prop is defined
                rows={props.rows}                    // Sets number of rows if multiline is enabled
                type={props.type}                    // Sets the input type, defaulting to text if undefined
            />
        </div>
    );
};