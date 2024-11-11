/**
 * OurDealPromoCard Component
 * ----------------------------
 * Displays a promotional card highlighting special deals with a call-to-action.
 * Contains contact buttons for phone and WhatsApp to encourage user interaction.
 * 
 * Imports:
 * - Material UI components for layout and styling.
 * - Icons for visual indication of contact methods.
 * - Custom themes for consistent styling.
 */

import { Button, Grid } from "@mui/material";
import "./OurDealPromoCard.css";
import { Card, Typography } from "@mui/joy";
import { Call, WhatsApp } from "@mui/icons-material";
import AppTheme from "../../../Theme/AppTheme";
import OurDealPromoCardTheme from "./OurDealPromoCardTheme";

export function OurDealPromoCard(): JSX.Element {
    return (
        <div className="OurDealPromoCard">
            {/* Main Promotional Card */}
            <Card sx={OurDealPromoCardTheme.promoCard}>
                <Grid container spacing={2} alignItems="center">
                    
                    {/* Promotional Text Section */}
                    <Grid item xs={12} md={7}>
                        <Typography
                            textAlign="right"
                            level="title-lg"
                            color="primary"
                            sx={OurDealPromoCardTheme.promoCardTitle}
                        >
                            מבצעים חמים במיוחד בשבילכם
                        </Typography>
                        <Typography
                            textAlign="right"
                            level="body-md"
                        >
                            התקשרו עכשיו וקבלו עד 10% הנחה נוספים
                        </Typography>
                    </Grid>

                    {/* Contact Buttons Section */}
                    <Grid item xs={12} md={5} sx={AppTheme.contactBtns}>
                        {/* Phone Button */}
                        <Button
                            href="tel:0506233228"
                            variant="contained"
                            endIcon={<Call />}
                            sx={AppTheme.callBtn}
                        >
                            התקשר/י עכשיו &nbsp;
                        </Button>
                        
                        {/* WhatsApp Button */}
                        <Button
                            href="https://wa.me/506233228?text=היי!+אני+מעוניין+בטיול."
                            target="_blank"
                            variant="contained"
                            endIcon={<WhatsApp />}
                            sx={AppTheme.whatsappBtn}
                        >
                            שלח/י הודעת וואצפ &nbsp;
                        </Button>
                    </Grid>
                </Grid>
            </Card>
        </div>
    );
};