// src/components/Layout.jsx
import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import SEO from './SEO';
import Contact from './Contact1';

const Layout = () => {
  return (
    <>
      <SEO />
      <Header />
      <main style={{ marginTop: '75px', minHeight:'60vh' }}>
        <Outlet />
      </main>
      <Contact />
      <Footer />
    </>
  );
}

export default Layout;
