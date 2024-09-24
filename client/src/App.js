// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import { AuthProvider } from './context/AuthContext';
import PrivacyPolicy from './pages/privacy-policy/PrivacyPolicy';
import TermsConditions from './pages/terms-condition/TermsConditions';
import ContactUs from './pages/contact/ContactUs';
import ProtectedRoute from './components/ProtectedRoute';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/home/Home';
import ApiAutomationTesting from './pages/services/api-automation-testing/ApiAutomationTesting';
import QualityAssuranceServeice from './pages/services/quality-assurance-service/QualityAssuranceServeice';
import TestAutomation from './pages/home/TestAutomation';
import AccessibilityTesting from './pages/home/AccessibilityTesting';
import OurTeam from './pages/about/OurTeam';
import BlogList from './pages/blog/BlogList';
import BlogDetail from './pages/blog/BlogDetail';
import EditBlog from './pages/blog/EditBlog';
import CreateBlog from './pages/blog/CreateBlog';

const App = () => {
  return (
    <AuthProvider>
    <HelmetProvider>  {/* Wrap with HelmetProvider */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/blogs' element={<BlogList />} />
            <Route path="blogs/:id" element={<BlogDetail />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms-conditions" element={<TermsConditions />} />
            <Route path="contact-us" element={<ContactUs />} />
            {/* Case Studies Routes */}
            <Route path="case-studies">
              <Route path="test-automation" element={<TestAutomation />} />
              <Route path="accessibility-testing" element={<AccessibilityTesting />} />
            </Route>
            
            {/*About Routes */}
            <Route path='/our-team/' element={ <OurTeam /> } />

            {/*Services Routes */}
            <Route path='/api-automation-testing-services/' element={ <ApiAutomationTesting /> } />
            <Route path='/quality-assurance-services/' element={ <QualityAssuranceServeice /> } />
            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="create-blog" element={<CreateBlog />} />
              <Route path="edit-blog/:id" element={<EditBlog />} />
              {/* Add more protected routes here as needed */}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      </HelmetProvider>
    </AuthProvider>
  );
};

export default App;
