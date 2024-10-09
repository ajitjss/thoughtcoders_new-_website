import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark py-4" style={{color:'#FF6100'}}>
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-4 mb-3">
            <img src="https://thoughtcoders.com/wp-content/uploads/2013/06/cropped-THOUGHT-CODERS.png" style={{width:'200px', height:'50px'}} alt="" />
            <p className="text-white">
              We specialize in delivering comprehensive software testing and quality assurance (QA) solutions.
              Our expert team ensures your software is reliable, secure, and user-friendly through a range of 
              services including- Manual Testing, Automated Testing, Performance Testing, Security Testing, and  
              Mobile Testing.
            </p>
          </div>
          <div className="col-md-2 mb-3">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white" style={{textDecoration:"none"}}>Home</Link></li>
              <li><Link to="/contact-us" className="text-white" style={{textDecoration:"none"}}>Contact Us</Link></li>
              <li><Link to="/about-us" className="text-white" style={{textDecoration:"none"}}>About Us</Link></li>
              <li><Link to="/privacy-policy" className="text-white" style={{textDecoration:"none"}}>Privacy Policy</Link></li>
              <li><Link to="/terms-conditions" className="text-white" style={{textDecoration:"none"}}>Terms & Conditions</Link></li>
            </ul>
          </div>
          <div className="col-md-3 mb-3">
            <h5 className="text-uppercase">Contact Us</h5>
            <p className="text-white">IT Building, Bhimpura No.1 T. Barewa, Uttar Pradesh 221716</p>
            <p className="text-white">Email: info@thoughtcoders.com</p>
            <p className="text-white">Phone: +91-9555902032</p>
          </div>
          <div className="col-md-3 mb-3">
            <h5 className="text-uppercase">Follow Us</h5>
          <div>
          <Link to="https://facebook.com/thoughtcoders" target="_blank" rel="noopener noreferrer" className="text-white me-3" aria-label="Follow us on Facebook">
            <FaFacebookF size={20} />
          </Link>
          <Link to="https://twitter.com/thoughtcoders" target="_blank" rel="noopener noreferrer" className="text-white me-3" aria-label="Follow us on Twitter">
            <FaXTwitter size={20} />
          </Link>
          <Link to="https://www.instagram.com/thoughtcoders" target="_blank" rel="noopener noreferrer" className="text-white me-3" aria-label="Follow us on Instagram">
            <FaInstagram size={20} />
          </Link>
          <Link to="https://www.linkedin.com/company/thoughtcoders" target="_blank" rel="noopener noreferrer" className="text-white" aria-label="Follow us on LinkedIn">
            <FaLinkedinIn size={20} />
          </Link>

            </div>
          </div>
        </div>
        <div className="text-center pt-3 border-top border-secondary">
          <p style={{color:'#FF6100'}}>Copyright &copy; 2024 Thoughtcoders. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
