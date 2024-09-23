// src/components/Layout.jsx
import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import SEO from './SEO';

const Layout = () => {
  return (
    <>
      <SEO />
      {/* Include Header at the top */}
      <Header />
      {/* Add padding top to the main content to avoid being hidden by the fixed header */}
      <main style={{ marginTop: '75px', minHeight:'60vh' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
