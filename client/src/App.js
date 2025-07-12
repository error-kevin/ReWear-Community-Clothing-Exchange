import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import AuthContext and AuthProvider
import { AuthProvider } from './context/AuthContext.js';

// Import components based on your structure
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ProtectedRoute from './components/pages/ProtectedRoute.jsx';
import AdminRoute from './components/AdminRoute.jsx';

// Import page components
import LandingPage from './components/pages/LandingPage.jsx';
import Dashboard from './components/pages/DashBoard.jsx'; // Corrected name for consistency
import ItemDetail from './components/pages/ItemDetail.jsx';
import AddItem from './components/pages/AddItem.jsx';
import LoginPage from './components/pages/LoginPage.jsx'; // Re-added LoginPage
import SignupPage from './components/pages/SignupPage.jsx'; // Re-added SignupPage
import BrowsePage from './components/pages/BrowsePage.jsx';
import ContactHelp from './components/pages/ContactHelp.jsx';

// Placeholder for other pages (ensure these files exist in src/pages/ or are defined here)
const AdminPanelPage = () => <div style={{ padding: '20px', fontFamily: 'Inter, sans-serif' }}><h2>Admin Panel</h2><p>Moderate items and users.</p></div>;
const AboutPage = () => <div style={{ padding: '20px', fontFamily: 'Inter, sans-serif' }}><h2>About Us</h2><p>Learn more about Rewear.</p></div>;
const PrivacyPolicyPage = () => <div style={{ padding: '20px', fontFamily: 'Inter, sans-serif' }}><h2>Privacy Policy</h2><p>Our commitment to your privacy.</p></div>;
const TermsOfServicePage = () => <div style={{ padding: '20px', fontFamily: 'Inter, sans-serif' }}><h2>Terms of Service</h2><p>Terms and conditions for using Rewear.</p></div>;

// Error Boundary Component
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Error caught in Error Boundary:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h1 style={{ padding: '20px', textAlign: 'center', color: '#e74c3c' }}>Something went wrong. Please try again later.</h1>;
        }
        return this.props.children;
    }
}

// Main App Component
const App = () => {
    return (
        <Router>
            {/* AuthProvider must wrap all components that need access to the AuthContext */}
            <AuthProvider>
                <ErrorBoundary>
                    <Routes>
                        {/* Public Routes */}
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/browse" element={<BrowsePage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/signup" element={<SignupPage />} />
                        <Route path="/item/:id" element={<ItemDetail />} /> 
                        <Route path="/contact-help" element={<ContactHelp />}/>

                        
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/contact" element={<ContactHelp />} />
                        <Route path="/privacy" element={<PrivacyPolicyPage />} />
                        <Route path="/terms" element={<TermsOfServicePage />} />

                        {/* Protected Routes (require authentication) */}
                        <Route
                            path="/dashboard"
                            element={
                                <ProtectedRoute>
                                    <Dashboard />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/add-item"
                            element={
                                <ProtectedRoute>
                                    <AddItem />
                                </ProtectedRoute>
                            }
                        />

                        {/* Admin Protected Routes (require admin role) */}
                        <Route
                            path="/admin"
                            element={
                                <AdminRoute>
                                    <AdminPanelPage />
                                </AdminRoute>
                            }
                        />

                        {/* Catch-all for 404 Not Found */}
                        <Route path="*" element={<div style={{ padding: '20px', textAlign: 'center', fontFamily: 'Inter, sans-serif' }}><h2>404 - Page Not Found</h2><p>The page you are looking for does not exist.</p></div>} />
                    </Routes>
                </ErrorBoundary>
                <Footer />
            </AuthProvider>
        </Router>
    );
};

export default App;
