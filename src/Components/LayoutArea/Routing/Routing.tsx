/**
 * Routing Component
 * ------------------
 * Defines and organizes all application routes, including dynamic routing, default routes, 
 * and a fallback for non-existent paths. Uses react-router-dom for route handling and redirection.
 * 
 * Imports:
 * - `Routes`, `Route`, `Navigate` from react-router-dom for defining route paths.
 * - `Page404` for handling 404 errors.
 * - `pages` constant for standard routes.
 * - `OurDealDetails` for specific deal details page.
 */

import { Navigate, Route, Routes } from "react-router-dom";
import Page404 from "../page404/page404";
import { pages } from "../../../Constants/WebsitePages";
import { OurDealDetails } from "../../OurDealsArea/OurDealDetailsArea/OurDealDetails/OurDealDetails";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                
                {/* Standard App Routes */}
                {pages.map((page, index) => (
                    <Route
                        key={index}                  // Unique key for each route entry
                        path={page.route}            // Path for the route, defined in `pages` constant
                        element={page.element}       // Component to render at the given path
                    />
                ))}

                {/* Dynamic Route for Deal Details */}
                <Route path="/Top-Tiulim/hot-deals/:dealId" element={<OurDealDetails />} />

                {/* Default Route - Redirects to the main deals page */}
                <Route path="/Top-Tiulim" element={<Navigate to="/Top-Tiulim/hot-deals" />} />
                <Route path="/" element={<Navigate to="/Top-Tiulim/hot-deals" />} />

                {/* 404 Routes - Catch-all for unknown paths */}
                <Route path="/Top-Tiulim/pageNotFound" element={<Page404 />} />   {/* Specific "not found" page */}
                <Route path="*" element={<Page404 />} />               {/* Fallback for unmatched routes */}
                
            </Routes>
        </div>
    );
}

export default Routing;
