/**
 * Layout Component
 * -----------------
 * Serves as the main structure for the application's layout, incorporating the header, footer,
 * and other shared components such as routing, floating action button, toast notifications,
 * and scroll-to-top functionality. The layout ensures consistent positioning and easy access
 * to key components across the application.
 * 
 * Imports:
 * - `Header`: Renders the main navigation header.
 * - `Routing`: Handles routing and displays the correct page content.
 * - `FloatingButton`: Provides a floating action button for quick access to a specific feature.
 * - `Toastify`: Displays toast notifications for user feedback.
 * - `Footer`: Renders the footer with additional links and contact info.
 * - `ScrollToTopBtn` and `ScrollToTop`: Components for scroll-to-top functionality.
 */

import Header from "../Header/Header";
import Routing from "../Routing/Routing";
import "./Layout.css";
import { FloatingButton } from "../../SharedArea/ButtonsArea/FloatingButton/FloatingButton";
import { Toastify } from "../../SharedArea/Toastify/Toastify";
import { Footer } from "../Footer/Footer";
import { ScrollToTopBtn } from "../../SharedArea/ScrollToTopArea/ScrollToTopBtn/ScrollToTopBtn";
import { ScrollToTop } from "../../SharedArea/ScrollToTopArea/ScrollToTop/ScrollToTop";
import { SelectedCountriesManager } from "../../OurDealsArea/OurDealsSelectBoxArea/SelectedCountriesManager/SelectedCountriesManager";

function Layout(): JSX.Element {
    return (
        <div className="Layout">

            {/* Header Section */}
            <header>
                <Header /> {/* Main header for site navigation */}
            </header>

            {/* Main Content Area */}
            <main>
                <Routing />                     {/* Routing component to handle navigation and display pages */}
                <FloatingButton />              {/* Floating button for quick actions */}
                <ScrollToTopBtn />              {/* Button to scroll to top of the page */}
                <ScrollToTop />                 {/* Handles automatic scroll to top on navigation */}
                <Toastify />                    {/* Toast notifications for real-time user feedback */}
                <SelectedCountriesManager />    {/* Component that handles countries election cleanup */}
            </main>

            {/* Footer Section */}
            <footer>
                <Footer />                 {/* Footer with additional links and contact information */}
            </footer>
        </div>
    );
}

export default Layout;
