/**
 * Page404 Component
 * ------------------
 * Displays a 404 error page when a user navigates to a non-existent route. 
 * The page includes a custom 404 image, an error message, and a button to return to the home page.
 * 
 * Imports:
 * - `imageSource`: The source path of the 404 image.
 * - `Button` and `Home` icon from Material UI for the styled button.
 * - `Link` from react-router-dom to navigate back to the home page.
 */

import imageSource from "../../../Assets/Images/404.gif";
import "./page404.css";
import { Button } from "@mui/material";
import { Home } from "@mui/icons-material";
import { Link } from "react-router-dom";

function Page404(): JSX.Element {
    return (
        <div className="page404">
            
            {/* 404 Image */}
            <img 
                src={imageSource}                  // Source for the 404 error image
                alt="404 | דף לא נמצא"             // Alt text for accessibility, indicating "Page Not Found"
            />
            
            {/* Error Message */}
            <p>אופס... הדף לא נמצא!</p>            {/* Displays a simple error message to inform users */}
            
            {/* Home Button */}
            <Link to="/">                           {/* Link to redirect users back to the home page */}
                <Button 
                    color="warning"                 // Sets button color to a warning tone
                    variant="outlined"              // Outlines button style
                    startIcon={<Home />}            // Adds a home icon at the start of the button
                >
                    &nbsp; חזרה לדף הבית &nbsp;    {/* Button text to indicate "Return to Home" */}
                </Button>
            </Link>
        </div>
    );
}

export default Page404;
