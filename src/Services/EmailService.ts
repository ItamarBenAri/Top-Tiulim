/**
 * EmailService
 * ------------
 * This service provides an interface to send emails using the EmailJS library. The service is designed to
 * manage contact form submissions and send messages to a specified recipient using preconfigured template parameters.
 * 
 * Imports:
 * - `MessageModel`: The data model representing a message with attributes like `fullName`, `phoneNumber`, and `message`.
 * - `emailjs`: External library to integrate with EmailJS, which facilitates email sending from client-side code.
 * - `appConfig`: Configuration settings for the EmailJS service, containing keys and identifiers for authentication.
 */

import MessageModel from "../Models/MessageModel";
import emailjs from '@emailjs/browser';
import { appConfig } from "../Utils/AppConfig";

class EmailService {
    
    /**
     * sendEmail
     * ---------
     * Asynchronously sends an email using data provided in the contact form. The method leverages the EmailJS service
     * with a predefined template ID and service ID, configured through `appConfig`. The function maps the `MessageModel`
     * data to match the template parameters.
     * 
     * @param {MessageModel} formData - The message data captured from the contact form, including full name, phone number, and message content.
     * @returns {Promise<void>} - A promise that resolves when the email is successfully sent or fails with an error.
     * 
     * Usage:
     * This method is primarily used to process and send form submissions directly to the designated email address.
     */
    public async sendEmail(formData: MessageModel): Promise<void> {
        // Mapping form data to match EmailJS template parameters
        const formParams = {
            from_name: formData.fullName,
            from_phone_number: formData.phoneNumber,
            to_name: 'נעמה', // Static recipient name in the email template
            message: formData.message
        };

        // Sending email via EmailJS with the defined service ID, template ID, and public key from configuration
        emailjs.send(
            appConfig.emailJsServiceId,      // Service ID for EmailJS
            appConfig.emailJsTemplateId,     // Template ID configured for the email format
            formParams,                      // Parameters that populate template fields
            {
                publicKey: appConfig.emailJsPublicKey // Public key for authentication
            }
        );
    }
}

// Exporting an instance of EmailService for use throughout the application
export const emailService = new EmailService();