/**
 * Header Component
 * -----------------
 * Renders a responsive header with navigation links, logo, and a WhatsApp contact button.
 * Includes a hamburger menu for smaller screens and a click-outside listener to close the menu.
 * 
 * Imports:
 * - Material UI components for layout and styling.
 * - NavLink for navigation within the app.
 * - pages constant for navigation links.
 * - HeaderTheme for custom theme styling.
 */

import { useState, useEffect } from "react";
import "./Header.css";
import { NavLink } from 'react-router-dom';
import { Button, Divider } from "@mui/material";
import logo from "../../../Assets/Images/logo.png";
import { pages } from "../../../Constants/WebsitePages";
import { WhatsApp } from "@mui/icons-material";
import HeaderTheme from "./HeaderTheme";

// WhatsAppButton Component
// -------------------------
// Renders a button that links to a WhatsApp chat with preset text.
// - Opens WhatsApp in a new tab to initiate a conversation.
// - Uses custom styling from HeaderTheme.
const WhatsAppButton = () => (
    <Button
        href="https://wa.me/506233228?text=היי!+אני+מעוניינ/ת+בטיול."
        target="_blank"
        variant="contained"
        endIcon={<WhatsApp />}
        sx={HeaderTheme.whatsappBtn}
    >
        שלח/י הודעת וואצפ &nbsp;
    </Button>
);

function Header(): JSX.Element {

    // State to control menu visibility in mobile view
    const [isOpen, setIsOpen] = useState(false);

    // Toggles the hamburger menu open/close state
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    /**
     * handleClickOutside
     * -------------------
     * Closes the menu if a user clicks outside of the header area.
     * - Prevents unintended menu interactions when clicking outside.
     * 
     * @param {MouseEvent} event - The click event used to determine if the click was outside.
     */
    const handleClickOutside = (event: MouseEvent) => {
        if (!(event.target as HTMLElement).closest('.Header')) {
            setIsOpen(false);
        }
    };

    /**
     * useEffect Hook - Manage Event Listener
     * --------------------------------------
     * Adds a click event listener to close the menu when clicking outside.
     * - The listener is added when the menu is open and removed when it closes.
     */
    useEffect(() => {
        if (isOpen) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        // Cleanup function to remove event listener on component unmount
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div>
            <nav className="Header">
                {/* Logo and small call button container */}
                <div className="logo-button-container">
                    <NavLink to="/">
                        <img 
                            className="logoImage" 
                            src={logo} 
                            alt="לוגו של האתר" 
                        />
                    </NavLink>
                    <div className="call-button-small">
                        <WhatsAppButton />
                    </div>
                </div>

                {/* Hamburger Menu Icon */}
                <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span /><span /><span />
                </div>

                {/* Navigation Menu */}
                <div className={`menu ${isOpen ? 'open' : ''}`}>
                    {pages.map((p) => (
                        <NavLink
                            key={p.name}
                            end
                            to={p.route}
                            className={({ isActive }) => `menu-link ${isActive ? "active" : ""}`}
                            onClick={() => setIsOpen(false)} // Closes menu on link click
                        >
                            {p.icon} {p.name}
                        </NavLink>
                    ))}
                </div>

                {/* Large call button (visible on larger screens) */}
                <div className="call-button-large">
                    <WhatsAppButton />
                </div>
            </nav>
            <Divider />
        </div>
    );
}

export default Header;
