// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Register from './components/Register';
import Layout from './components/Layout';
import AdminDashboard from './pages/AdminDashboard';
import BlogList from './pages/BlogList';
import BlogDetail from './pages/BlogDetail';
import CreateBlog from './pages/CreateBlog'; 
import EditBlog from './pages/EditBlog';
import { BlogProvider } from './context/BlogContext';
import Home from './pages/home/Home';
import { HelmetProvider } from 'react-helmet-async';
import TestAutomation from './pages/home/TestAutomation';
import AccessibilityTesting from './pages/home/AccessibilityTesting';
import ContactUs from './pages/contact/ContactUs';
import PrivacyPolicy from './pages/privacy-policy/PrivacyPolicy';
import TermsConditions from './pages/terms-condition/TermsConditions';
import ApiAutomationTesting from './pages/services/api-automation-testing/ApiAutomationTesting';
import QualityAssuranceServeice from './pages/services/quality-assurance-service/QualityAssuranceServeice';
import RUC from './pages/services/ruc/RUC';
import AboutUs from './pages/about/aboutUs/AboutUs';
import OurTeam from './pages/about/ourTeam/OurTeam';

function App() {
    return (
            <HelmetProvider>
            <Router>
            <AuthProvider>
            <BlogProvider>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="blogs" element={<BlogList />} />
                        <Route path="blogs/:slug" element={<BlogDetail />} />
                        
                        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                        <Route path="terms-conditions" element={<TermsConditions />} />
                        <Route path="contact-us" element={<ContactUs />} />
                        {/* Case Studies Routes */}
                        <Route path="case-studies">
                            <Route path="test-automation" element={<TestAutomation />} />
                            <Route path="accessibility-testing" element={<AccessibilityTesting />} />
                        </Route>
                        {/*About Routes */}
                        <Route path='/about-us/' element={ <AboutUs /> } />
                        <Route path='/our-team/' element={ <OurTeam /> } />
                        {/*Services Routes */}
                        <Route path='/api-automation-testing-services/' element={ <ApiAutomationTesting /> } />
                        <Route path='/quality-assurance-services/' element={ <QualityAssuranceServeice /> } />
                        <Route path='/services/road-usages-charging/' element={ <RUC /> } />
                    </Route>
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route 
                        path="/admin-dashboard/*" 
                        element={
                            <PrivateRoute roleRequired="isAdmin">
                                <AdminDashboard />
                            </PrivateRoute>
                        } 
                    />
                    <Route 
                        path="/create-blog" 
                        element={
                            <PrivateRoute roleRequired="isAdmin">
                                <CreateBlog />  {/* Create blog restricted to admin */}
                            </PrivateRoute>
                        }
                    />
                    <Route 
                        path="/edit-blog/:slug/" 
                        element={
                            <PrivateRoute roleRequired="isAdmin">
                                <EditBlog />  {/* Edit blog restricted to admin */}
                            </PrivateRoute>
                        }
                    />
                </Routes>
                </BlogProvider>
        </AuthProvider>
        </Router>
        </HelmetProvider>
        
    );
}

export default App;
