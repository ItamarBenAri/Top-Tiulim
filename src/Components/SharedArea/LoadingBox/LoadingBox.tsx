/**
 * LoadingBox Component
 *
 * This component provides a centralized loading indicator for asynchronous actions within the application.
 * It renders a styled `Box` component containing a `CircularProgress` spinner to indicate loading activity.
 * Styling is managed externally by `LoadingBoxTheme`.
 *
 * Dependencies:
 * - Material-UI `Box` and `CircularProgress` components for layout and spinner display.
 * - `LoadingBoxTheme` for consistent styling across the application.
 */

import { Box, CircularProgress } from "@mui/material"; 
import LoadingBoxTheme from "./LoadingBoxTheme";

export function LoadingBox(): JSX.Element {
    return (
        // Renders a loading box with a circular spinner centered within the box
        <Box sx={LoadingBoxTheme.loadingBox}>
            <CircularProgress /> {/* Loading spinner indicating active processing */}
        </Box>
    );
}
