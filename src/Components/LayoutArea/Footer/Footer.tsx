/**
 * Footer Component
 * -----------------
 * Renders the footer section with internal links, contact information, and social media links.
 * Organized into three columns: additional site links, contact info, and social media.
 * 
 * Imports:
 * - Material UI components for layout, typography, and icons.
 * - RouterLink for navigation within the site.
 * - Custom themes for consistent styling across the footer.
 */

import "./Footer.css";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, YouTube } from "@mui/icons-material";
import { Box, Tooltip } from "@mui/material";
import { TiktokIcon } from "../../SharedArea/TiktokIcon/TiktokIcon";
import { Link as RouterLink } from "react-router-dom";
import FooterTheme from "./FooterTheme";

export function Footer(): JSX.Element {

    // Internal navigation links for the website, including route paths and descriptive text
    const internalLinks = [
        { to: "/hot-deals/12565", text: "טיול הרים לתאילנד" },
        { to: "/hot-deals/12564", text: "טיול ג'ונגלים בתאילנד" },
        { to: "/hot-deals/12563", text: "טיול מאורגן לבטומי" },
        { to: "/hot-deals/12566", text: "טיול ג'יפים בדובאי" },
        { to: "/hot-deals/12568", text: "סיור היסטורי בירושלים העתיקה" },
        { to: "/about-us", text: "אודותינו" },
        { to: "/hot-deals/12567", text: "טיול נחלים בעין בוקק" },
        { to: "/contact-us", text: "צור קשר" },
    ];

    // Contact information links for email and phone with tooltips
    const contactInfo = [
        { href: "mailto:TopTiulim@gmail.com", text: "מייל: TopTiulim@gmail.com", tooltip: "לחצ/י כדי לשלוח מייל" },
        { href: "tel:0506233228", text: "טלפון: 050-623-3228", tooltip: "לחצ/י כדי להתקשר" }
    ];

    // Social media links with icons
    const socialLinks = [
        { href: "https://www.youtube.com/channel/UCcEcKkfm1PUkXTDcFwTFzmg", icon: <YouTube /> },
        { href: "https://www.facebook.com/Toptiulim/", icon: <Facebook /> },
        { href: "https://www.instagram.com/naama_top_tiulim/", icon: <Instagram /> },
        { href: "https://www.tiktok.com/@naama_top_thailand", icon: <TiktokIcon /> }
    ];

    return (
        <div className="Footer">
            <Box
                component="footer"
                sx={FooterTheme.box}   // Applies custom footer theme styling
            >
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        
                        {/* Internal Links Section */}
                        <Grid item xs={12} md={4}>
                            <Typography
                                variant="h6"
                                color="text.primary"
                                gutterBottom
                            >
                                עוד באתר שלנו
                            </Typography>
                            <Box display="flex" justifyContent="center">
                                {[0, 1].map((mod) => (
                                    <Box key={mod} mx={2}>
                                        {internalLinks
                                            .filter((_, index) => index % 2 === mod)
                                            .map((link, index) => (
                                                <Typography
                                                    key={index}
                                                    variant="body2"
                                                    color="text.secondary"
                                                    align="right"
                                                    sx={FooterTheme.typography}
                                                >
                                                    <Link component={RouterLink} to={link.to}>
                                                        {link.text}
                                                    </Link>
                                                </Typography>
                                            ))}
                                    </Box>
                                ))}
                            </Box>
                        </Grid>

                        {/* Contact Information Section */}
                        <Grid item xs={12} md={4}>
                            <Typography
                                variant="h6"
                                color="text.primary"
                                gutterBottom
                            >
                                צור קשר
                            </Typography>
                            {contactInfo.map((contact, index) => (
                                <Typography
                                    key={index}
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    <Tooltip placement="left" title={contact.tooltip}>
                                        <a
                                            className="contact-info-link"
                                            href={contact.href}
                                        >
                                            {contact.text}
                                        </a>
                                    </Tooltip>
                                </Typography>
                            ))}
                        </Grid>

                        {/* Social Media Links Section */}
                        <Grid item xs={12} md={4}>
                            <Typography
                                variant="h6"
                                color="text.primary"
                                gutterBottom
                            >
                                עקבו אחרינו
                            </Typography>
                            {socialLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    color="inherit"
                                    sx={FooterTheme.link}
                                >
                                    {link.icon}
                                </Link>
                            ))}
                        </Grid>
                    </Grid>

                    {/* Footer Bottom Section with Attribution */}
                    <Box mt={5}>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            align="center"
                        >
                            <a
                                href="https://www.linkedin.com/in/itamar-ben-ari-69678b28b/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {"© "} {new Date().getFullYear()} {"איתמר בן ארי, ישראל. כל הזכויות שמורות."}
                            </a>
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </div>
    );
};