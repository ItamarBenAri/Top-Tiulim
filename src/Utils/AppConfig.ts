/**
 * AppConfig
 * ---------
 * Central configuration class for application-wide constants and environment variables.
 * This class encapsulates all configurable settings, such as file paths, API keys, and third-party service credentials.
 * It allows easy modification of these values and keeps sensitive information secure by using environment variables.
 *
 * Properties:
 * - `topTiulimFileSrc`: Path to the static file containing deal data.
 * - `recaptchaSiteKey`: Public key for Google reCAPTCHA integration.
 * - `recaptchaSiteSecret`: Secret key for Google reCAPTCHA, typically used on the server side.
 * - `emailJsServiceId`: Service ID for EmailJS, used for email sending.
 * - `emailJsTemplateId`: Template ID for EmailJS, specifying the email format.
 * - `emailJsPublicKey`: Public key for authenticating with EmailJS.
 */

class AppConfig {
    /**
     * Path to the Excel file containing deal data.
     * Used in services that load static data for deals and gallery items.
     */
    public readonly topTiulimFileSrc = `${process.env.PUBLIC_URL}/assets/files/ourDeals.xlsx`;

    /**
     * Google reCAPTCHA public site key, configured through environment variables.
     * Used on the client side for verifying user interactions as human.
     */
    public readonly recaptchaSiteKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

    /**
     * Google reCAPTCHA secret key, configured through environment variables.
     * Important: This key should not be exposed on the client side and is generally reserved for server-side validation.
     */
    public readonly recaptchaSiteSecret = process.env.REACT_APP_RECAPTCHA_SITE_SECRET;

    /**
     * EmailJS service ID, loaded from environment variables.
     * This ID is required for specifying the EmailJS service configuration when sending emails.
     */
    public readonly emailJsServiceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;

    /**
     * EmailJS template ID, configured through environment variables.
     * Specifies the template to be used in email messages sent via EmailJS.
     */
    public readonly emailJsTemplateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

    /**
     * Public key for authenticating with EmailJS, retrieved from environment variables.
     * Ensures secure access to the EmailJS service on the client side.
     */
    public readonly emailJsPublicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
}

/** Singleton instance of AppConfig for consistent access to configuration values across the application */
export const appConfig = new AppConfig();
