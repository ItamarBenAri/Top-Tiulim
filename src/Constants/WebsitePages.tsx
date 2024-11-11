/**
 * pages Array
 * -------------------
 * Defines an array of pages available in the application, each represented as an object with name, route, icon, 
 * and component properties. This configuration is used to render navigation links and map routes within the app.
 * 
 * Imports:
 * - Icons from `@mui/icons-material`: Used to visually represent each page in the UI.
 * - Components: Imported React components corresponding to each page in the application.
 * - `AppTheme`: Provides centralized styling for icon elements, ensuring consistent theme application.
 */

import { Collections, ContactMailRounded, Info, Whatshot } from "@mui/icons-material";
import AppPage from "../Models/AppPageModel";
import { OurDealsList } from "../Components/OurDealsArea/OurDealsList/OurDealsList";
import { AboutUs } from "../Components/AboutUsArea/AboutUs/AboutUs";
import { ContactUs } from "../Components/ContactUsArea/ContactUs/ContactUs";
import { Gallery } from "../Components/Gallery/Gallery";
import AppTheme from "../Theme/AppTheme";

/**
 * Array of pages used for routing and navigation within the application.
 * 
 * Each object contains:
 * - `name`: Display name for the page (string).
 * - `route`: URL path for routing (string).
 * - `icon`: Material-UI icon component with applied styling from `AppTheme`.
 * - `element`: The React component rendered for the page.
 */
export const pages: AppPage[] = [
    {
        name: 'דילים חמים',                           // Display name for the 'Hot Deals' page
        route: "/Top-Tiulim/hot-deals",                          // Route path for 'Hot Deals'
        icon: <Whatshot sx={AppTheme.headerIcon}/>,   // Fire icon styled using `AppTheme`
        element: <OurDealsList />                     // Component to render for the 'Hot Deals' page
    },
    {
        name: "גלריה",                                // Display name for the 'Gallery' page
        route: "/Top-Tiulim/gallery",                            // Route path for 'Gallery'
        icon: <Collections sx={AppTheme.headerIcon}/>,// Collections icon styled using `AppTheme`
        element: <Gallery />                          // Component to render for the 'Gallery' page
    },
    {
        name: "אודותינו",                             // Display name for the 'About Us' page
        route: "/Top-Tiulim/about-us",                           // Route path for 'About Us'
        icon: <Info sx={AppTheme.headerIcon}/>,       // Info icon styled using `AppTheme`
        element: <AboutUs />                          // Component to render for the 'About Us' page
    },
    {
        name: "צור קשר",                              // Display name for the 'Contact Us' page
        route: "/Top-Tiulim/contact-us",                         // Route path for 'Contact Us'
        icon: <ContactMailRounded sx={AppTheme.headerIcon}/>, // Contact icon styled using `AppTheme`
        element: <ContactUs />                        // Component to render for the 'Contact Us' page
    }
];
