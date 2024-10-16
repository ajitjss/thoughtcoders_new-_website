// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Register from './components/Register';
import Layout from './components/Layout';

import { BlogProvider } from './context/BlogContext';
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
import Katalon from './pages/training/katalon/Katalon'
import Manual from './pages/training/manual/Manual';
import Selenium from './pages/training/selenium/Selenium';
import Java from './pages/training/java/Java';
import BlogList from './pages/blog/blogList/BlogList';
import BlogDetail from './pages/blog/blogDetail/BlogDetail';
import CreateBlog from './pages/blog/createBlog/CreateBlog';
import EditBlog from './pages/blog/editBlog/EditBlog';
import Home from './pages/home/Home';
import JsonToJson from './components/json-to json-comparator/JsonComparator';
import News from './pages/news/News';

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
                        <Route path='/services/json-to-json-comparator/' element={ <JsonToJson /> } />

                        {/*Training Routes */}
                        <Route path='/training/katalon-studio-training/' element={ <Katalon /> } />
                        <Route path='/training/manual-testing-training/' element={ <Manual /> } />
                        <Route path='/training/selenium-training/' element={ <Selenium /> } />
                        <Route path='/training/core-java-training/' element={ <Java /> } />
                        {/* News */}
                        <Route path='/news' element={ <News /> } />
                    </Route>
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
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
