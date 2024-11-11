/**
 * FloatingButton Component
 * -------------------------
 * A floating action button (FAB) component that provides quick contact options for users,
 * including WhatsApp, phone call, and email. Uses `react-tiny-fab` for creating an expandable
 * floating menu with icons and labels. Provides a toggling main button and contact action items.
 * 
 * Imports:
 * - Material UI icons for each contact method.
 * - FloatingButtonTheme for consistent styling across buttons.
 * - React hooks for managing the FAB open/close state.
 */

import "./FloatingButton.css";
import { Action, Fab } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
import { Add, Call, MailRounded, Sms, WhatsApp } from "@mui/icons-material";
import { useState } from "react";
import FloatingButtonTheme from "./FloatingButtonTheme";

export function FloatingButton(): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);      // State to control FAB menu open/close

    /**
     * closeFabMenu
     * --------------
     * Toggles the open state of the floating action button menu.
     * Useful for closing the menu after an action is selected.
     */
    const closeFabMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="FloatingButton">
            <Fab
                mainButtonStyles={FloatingButtonTheme.fabMainButton}  // Main button styling
                style={FloatingButtonTheme.fabButton}                 // FAB button position styling
                icon={
                    <div className="iconWrapper" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <Add fontSize="large" /> : <Sms sx={{ transform: "scaleX(-1)" }} />}
                    </div>
                }                                                     // Toggling icon based on isOpen state
                text={isOpen ? "סגירה" : "יצירת קשר"}                 // Button label toggles between "סגירה" (Close) and "יצירת קשר" (Contact)
                event="click"
            >
                {/* WhatsApp Contact Action */}
                <Action
                    about="שלח/י הודעת טקסט בוואצפ"                  // ARIA label for accessibility
                    text="שלח/י ווצאפ"                                // Action button label for WhatsApp
                    style={FloatingButtonTheme.fabWhatAppButton}       // WhatsApp button styling
                    onClick={closeFabMenu}                             // Closes menu on click
                >
                    <a
                        href="https://wa.me/506233228?text=היי!+אני+מעוניינ/ת+בטיול."
                        rel="noreferrer"
                        target="_blank"
                    >
                        <WhatsApp fontSize="large" />
                    </a>
                </Action>

                {/* Phone Call Contact Action */}
                <Action
                    about="התקשר/י בשיחת טלפון"
                    text="התקשר/י בטלפון"
                    style={FloatingButtonTheme.fabTelButton}           // Phone button styling
                    onClick={closeFabMenu}
                >
                    <a
                        href="tel:054-880-6891"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <Call fontSize="large" />
                    </a>
                </Action>

                {/* Email Contact Action */}
                <Action
                    about="שלח/י מייל"
                    text="שלח/י מייל"
                    style={FloatingButtonTheme.fabEmailButton}         // Email button styling
                    onClick={closeFabMenu}
                >
                    <a
                        href="mailto:TopTiulim@gmail.com"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <MailRounded fontSize="large" />
                    </a>
                </Action>
            </Fab>
        </div>
    );
}
