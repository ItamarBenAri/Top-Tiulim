/**
 * ScrollToTopBtn Component
 * -------------------------
 * A button component that appears when the user scrolls down a certain distance on the page. 
 * When clicked, it smoothly scrolls the page back to the top. The button's visibility and 
 * appearance are managed based on the user's scroll position.
 * 
 * Imports:
 * - `KeyboardArrowUp`: Icon indicating upward scrolling direction.
 * - `useEffect`, `useState`: React hooks for component state and lifecycle management.
 * - `Tooltip`: Material UI component to display a tooltip on hover.
 * - `ScrollToTopBtnTheme`: Theming for button styling.
 */

import { KeyboardArrowUp } from "@mui/icons-material";
import "./ScrollToTopBtn.css";
import { useEffect, useState } from "react";
import ScrollToTopBtnTheme from "./ScrollToTopBtnTheme";
import { Tooltip } from "@mui/material";

export function ScrollToTopBtn(): JSX.Element {
    const [isVisible, setIsVisible] = useState(false); // Tracks button visibility based on scroll position

    /**
     * handleScroll Function
     * -----------------------
     * Checks the window's current scroll position and updates `isVisible` accordingly.
     * - Displays the button if the scroll position is greater than 500 pixels.
     * - Hides the button otherwise.
     */
    const handleScroll = () => {
        if (window.scrollY > 500) setIsVisible(true);  // Show button when scrolled down 500px
        else setIsVisible(false);                      // Hide button when near the top
    };

    /**
     * useEffect: Attach Scroll Listener
     * -----------------------------------
     * Attaches a scroll event listener to the window on component mount, 
     * triggering `handleScroll` whenever the user scrolls.
     * 
     * Cleanup:
     * - Removes the event listener when the component unmounts to prevent memory leaks.
     */
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);  // Add scroll event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);  // Clean up on unmount
        };
    }, []);

    /**
     * scrollToTop Function
     * ----------------------
     * Smoothly scrolls the window back to the top when the button is clicked.
     */
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });  // Scroll to top with smooth animation
    };

    return (
        <div
            className={`ScrollToTopBtn ${isVisible ? 'visible' : 'hidden'}`}  // Toggle class based on visibility
            onClick={scrollToTop}
        >
            <Tooltip title="גלילה לראש הדף" placement="right">
                <KeyboardArrowUp sx={ScrollToTopBtnTheme.scrollToUpButton} />
            </Tooltip>
        </div>
    );
}