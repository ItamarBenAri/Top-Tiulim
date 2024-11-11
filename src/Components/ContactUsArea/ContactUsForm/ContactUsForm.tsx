/**
 * ContactUsForm Component
 * ------------------------
 * Renders a form for users to submit inquiries, including name, phone number, and message fields.
 * Uses react-hook-form for form handling, reCAPTCHA for bot verification, and email service for message delivery.
 * Displays a loading indicator while the message is being sent, and navigates to a different route upon success.
 *
 * Imports:
 * - Material UI components for UI consistency and accessibility.
 * - react-hook-form for managing form state and validation.
 * - react-toastify for user feedback on submission.
 * - Custom components for input fields and reCAPTCHA validation.
 */

import { Box, Button, CircularProgress } from "@mui/material";
import "./ContactUsForm.css";
import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ContactUsTextField } from "../ContactUsTextField/ContactUsTextField";
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import MessageModel from "../../../Models/MessageModel";
import { emailService } from "../../../Services/EmailService";
import { Recaptcha } from "../Recaptcha/Recaptcha";
import { toast } from "react-toastify";
import ContactUsFormTheme from "./ContactUsFormTheme";

export function ContactUsForm(): JSX.Element {
    // Initializes form methods and state for message-sending and reCAPTCHA validation
    const methods = useForm<MessageModel>();
    const { register, handleSubmit } = methods;
    const [messageSending, setMessageSending] = useState<boolean>(false);
    const [isHuman, setIsHuman] = useState<boolean>(false);
    const navigate = useNavigate();

    /**
     * send - Handles form submission.
     * --------------------------------
     * Triggered when the user submits the form. Sends the message data through emailService.
     * - If successful, resets the form, displays a success toast, and navigates to the "hot deals" page.
     * - If an error occurs, displays an error toast to the user.
     *
     * @param {MessageModel} formData - The data entered by the user in the form fields.
     */
    const send: SubmitHandler<MessageModel> = (formData: MessageModel) => {
        setMessageSending(true);  // Indicates message is in the process of being sent
        emailService.sendEmail(formData)
            .then(() => {
                setMessageSending(false);      // Reset message-sending state
                toast.success("ההודעה נשלחה בהצלחה!"); // Show success toast
                methods.reset();               // Reset form fields
                navigate("/hot-deals");        // Navigate to "hot deals" page
            })
            .catch((error: any) => {
                toast.error("אירעה שגיאה, אנא נסה שוב!"); // Show error toast
                setMessageSending(false);       // Reset message-sending state on error
            });
    };

    return (
        <div className="ContactUsForm">
            {/* Enables right-to-left styling and custom theming for the form */}
            <CacheProvider value={ContactUsFormTheme.cacheRtl}>
                <ThemeProvider theme={ContactUsFormTheme.theme}>
                    <FormProvider {...methods}>
                        <Box
                            component="form"
                            noValidate
                            autoComplete="off"
                            onSubmit={handleSubmit(send)}
                        >
                            {/* Full Name Input Field */}
                            <ContactUsTextField
                                registerTo="fullName"           // Field name registered with react-hook-form
                                register={register}             // Form register method
                                label="שם מלא"                  // Input label in Hebrew for full name
                            />
                            
                            {/* Phone Number Input Field */}
                            <ContactUsTextField
                                registerTo="phoneNumber"        // Field name for phone number
                                register={register}             // Register form method for validation
                                label="מספר טלפון"             // Input label in Hebrew for phone number
                                type="tel"                      // Sets input type to telephone number
                            />
                            
                            {/* Message Text Area */}
                            <ContactUsTextField
                                registerTo="message"            // Field name for user message
                                register={register}             // Register form method for validation
                                label="הודעה"                  // Label for the message input field
                                rows={4}                        // Text area with 4 rows
                            />

                            {/* reCAPTCHA Verification */}
                            <Recaptcha onVerify={setIsHuman} /> {/* Updates isHuman state upon successful reCAPTCHA verification */}

                            {/* Submit Button */}
                            <Button
                                startIcon={messageSending && <CircularProgress color="inherit" size={25} />} // Shows loading icon if sending
                                disabled={!isHuman || messageSending}  // Disables button if reCAPTCHA not verified or sending
                                color="primary"
                                variant="contained"
                                fullWidth
                                type="submit"
                            >
                                {messageSending ? (
                                    <span>שולח</span>           // Shows "Sending" text during message submission
                                ) : (
                                    <span>שלח/י הודעה</span>   // Default text for submit button
                                )}
                            </Button>
                        </Box>
                    </FormProvider>
                </ThemeProvider>
            </CacheProvider>
        </div>
    );
};