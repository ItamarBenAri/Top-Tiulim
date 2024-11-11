/**
 * Main Entry Point
 * ----------------
 * This script initializes and renders the root of the React application. 
 * It sets up global providers for routing and Redux state management, configures global styling,
 * and registers the service worker for offline support.
 */

import ReactDOM from 'react-dom/client'; // ReactDOM for rendering the app
import './index.css'; // Global stylesheet
import reportWebVitals from './reportWebVitals'; // Web vitals for performance monitoring
import { BrowserRouter } from 'react-router-dom'; // Provides client-side routing
import Layout from './Components/LayoutArea/Layout/Layout'; // Main layout component
import { Provider } from 'react-redux'; // Redux provider for state management
import { appStore } from './Redux/Store'; // Redux store for global state management
import "react-multi-carousel/lib/styles.css"; // Carousel library styles
import 'react-toastify/dist/ReactToastify.css'; // Toast notification styles

// Initializes the root element by getting the root DOM node
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

// Renders the React application wrapped with essential providers
root.render(
    <BrowserRouter> {/* Enables client-side routing */}
        <Provider store={appStore}> {/* Redux provider for managing global state */}
            <Layout /> {/* Main layout component containing core app structure */}
        </Provider>
    </BrowserRouter>
);

// Starts measuring performance metrics in the app, reporting results to an analytics endpoint if configured
reportWebVitals();

/**
 * Registers a service worker if available in the navigator, allowing the application to cache assets
 * for offline functionality and improved load performance. The service worker is registered from 
 * the public root directory.
 */
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js');
}
