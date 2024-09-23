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
      <Header />
      <main style={{ marginTop: '75px', minHeight:'60vh' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
