/**
 * AboutUs Component
 * -----------------
 * Renders the "About Us" page with profile details, personal information, and recommendations.
 * Utilizes Material UI components for layout and styling.
 * Integrates lazy loading for enhanced UX by displaying a loading indicator until images are fully loaded.
 */

import React, { useEffect, useState } from "react";
import { Container, Typography, Avatar, Box, Divider } from "@mui/material";
import "./AboutUs.css";
import { RecommendationsCarousel } from "../RecommendationCarousel/RecommendationCarousel";
import { appService } from "../../../Services/AppService";
import useTitle from "../../../Utils/UseTitle";
import AboutUsTheme from "./AboutUsTheme";
import AppTheme from "../../../Theme/AppTheme";
import { LoadingBox } from "../../SharedArea/LoadingBox/LoadingBox";

export function AboutUs(): JSX.Element {
    // URL of the profile image to be displayed
    const profileSrc = "https://toptiulim.co.il/assets/Profiles/Picture2.png";

    // State variable to track if the page content has loaded
    const [isPageLoaded, setIsPageLoaded] = useState(false);

    // Set dynamic title based on loading state
    useTitle(`טופ טיולים | ${isPageLoaded ? "אודותינו" : "טוען..."}`);

    /**
     * Effect: Image Preloading
     * -------------------------
     * Preloads the profile image to ensure it’s available before rendering content.
     * On success, sets `isPageLoaded` to true, signaling content readiness.
     * Handles errors gracefully by logging them without impacting the user experience.
     */
    useEffect(() => {
        appService.loadImages([profileSrc])
            .then(() => setIsPageLoaded(true))
            .catch(err => console.error(err));
    }, []);

    return (
        <Container className="AboutUs" sx={AboutUsTheme.container}>
            {isPageLoaded ?
                (
                    <>
                        {/* Profile Avatar */}
                        <Avatar
                            src={profileSrc}
                            alt="תמונת פנים של נעמה מגורי כהן"
                            sx={AboutUsTheme.avatar}
                        />

                        {/* Information Section */}
                        <Box sx={AboutUsTheme.infoBox}>
                            <Typography variant="h4" gutterBottom>
                                קצת עלינו
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                                נעמה מגורי כהן
                            </Typography>
                            <Typography variant="body1" color="textSecondary" paragraph>
                                גיאוגרפית, אוהבת ונושמת טבע. בעלת תואר בארכיאולוגיה וגיאוגרפיה מהאוניברסיטה העברית. עסקתי ב-12 השנים האחרונות בתכנון סביבתי ושמירת טבע במשרד להגנת הסביבה. במסגרת תפקידי עשיתי כמיטב יכולתי על מנת לשמר את הטבע בארצנו היפה ולגרום לכך שהפרוייקטים האדירים בתחום התשתיות, יהיו ברי קיימא עד כמה שניתן תוך צימצום הפגיעה בנחלים, שמורות טבע, יערות ועוד. בנוסף, אני הנדסאית אדריכלות ועסקתי בתכנון פרוייקטים במשרד אדריכלים פרטי.
                            </Typography>
                            <Divider sx={AppTheme.divider} />
                            <Typography variant="body1" color="textSecondary" paragraph>
                                כיום, אני מחברת בין אהבתי לטבע לבין אהבתי לטיולים. את הטיולים אני עושה בד"כ בזוג, בהרכב משפחתי, חברים ועוד. בארצנו היפה אנו מטיילים כבר שנים רבות ולכן מכירים הרבה פינות חמד ידועות וכאלו שמהוות סוד שמור רק ליודעי דבר. גם בחו"ל אנו מטיילים כבר שנים רבות, וזכינו להתארח בבית חב"ד בבנגקוק כאשר היה עדיין צריף קטן.
                            </Typography>
                            <Divider sx={AppTheme.divider} />

                            {/* Highlighted Trip Section */}
                            <Typography variant="h6" gutterBottom>
                                הטיול לתאילנד
                            </Typography>
                            <Typography variant="body1" color="textSecondary" paragraph>
                                בשנה האחרונה הרכבתי טיול ייחודי בדרום תאילנד – באזור האי פוקט ושמורות הטבע מצפון לו. זהו מסלול שאינו מוכר לישראלים, גם לכאלו שכבר טיילו בתאילנד ובפוקט פעמים רבות. האירוח התאילנדי הרגוע והנעים, יחד עם עוצמת הטבע ומזג האוויר המשתנה בפתאומיות, יוצרים חוויות מדהימות ומרגשות כל פעם מחדש.
                            </Typography>
                            <Typography variant="body1" color="textSecondary" paragraph>
                                הטיול משלב את פוקט וחופיה הנפלאים ואת שמורות הטבע והג'ונגלים יחד עם אוכל כשר לאורך כל המסע. בקרוב נפרסם את מועדי הטיול המאורגן הבא שיכלול את המסלול המיוחד לפוקט- תאילנד.                            </Typography>
                        </Box>

                        {/* Recommendations Section */}
                        <RecommendationsCarousel />
                    </>
                ) : (
                    // Loading Indicator (Displays until page is fully loaded)
                    <LoadingBox />
                )
            }
        </Container>
    );
}
