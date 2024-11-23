import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark py-4" style={{color:'#FF6100'}}>
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-3 mb-3">
            <img src="https://thoughtcoders.com/wp-content/uploads/2013/06/cropped-THOUGHT-CODERS.png" style={{width:'200px', height:'50px'}} alt="Thoughtcoders Logo" />
            <div style={{marginTop:'20px'}}>
              <h5 className="text-uppercase" style={{fontSize:'15px'}}>CONNECT WITH US</h5>
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
          <div className="col-md-2 mb-3">
            <h5 className="text-uppercase">Company</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white" style={{textDecoration:"none"}}>Home</Link></li>
              <li><Link to="/about-us" className="text-white" style={{textDecoration:"none"}}>About Us</Link></li>
              <li><Link to="/about-us" className="text-white" style={{textDecoration:"none"}}>Partners</Link></li>
              <li><Link to="/about-us" className="text-white" style={{textDecoration:"none"}}>Careers</Link></li>
              <li><Link to="/about-us" className="text-white" style={{textDecoration:"none"}}>CSR</Link></li>
              <li><Link to="/contact-us" className="text-white" style={{textDecoration:"none"}}>Contact Us</Link></li>
              <li><Link to="/privacy-policy" className="text-white" style={{textDecoration:"none"}}>Privacy Policy</Link></li>
              <li><Link to="/terms-conditions" className="text-white" style={{textDecoration:"none"}}>Terms & Conditions</Link></li>
              </ul>
            <h5 className="text-uppercase">Consulting</h5>
            <ul className="list-unstyled">
              <li><Link to="https://calendly.com/thoughtcoders1/test-automation-qa-qc-consultation" className="text-white" style={{textDecoration:"none"}}>QA Consultation</Link></li>   
              <li><Link to="https://calendly.com/thoughtcoders1/test-automation-qa-qc-consultation" className="text-white" style={{textDecoration:"none"}}>Trainings</Link></li>  
              <li><Link to="https://calendly.com/thoughtcoders1/test-automation-qa-qc-consultation" className="text-white" style={{textDecoration:"none"}}>Book Appointment</Link></li>      
              <li><Link to="https://calendly.com/thoughtcoders1/test-automation-qa-qc-consultation" className="text-white" style={{textDecoration:"none"}}>Career Consultation</Link></li>             
              </ul>
           
          </div>
          <div className="col-md-2 mb-4">
            <h5 className="text-uppercase">Industries</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white" style={{textDecoration:"none"}}>AI/ML Testing</Link></li>
              <li><Link to="/" className="text-white" style={{textDecoration:"none"}}>Banking Domain</Link></li>
              <li><Link to="/contact-us" className="text-white" style={{textDecoration:"none"}}>Insuarnce Domain</Link></li>
              <li><Link to="/contact-us" className="text-white" style={{textDecoration:"none"}}>Healthcare & Life Science</Link></li>
              <li><Link to="/contact-us" className="text-white" style={{textDecoration:"none"}}>Logistics</Link></li>
              <li><Link to="/about-us" className="text-white" style={{textDecoration:"none"}}>Transportation</Link></li>
              <li><Link to="/privacy-policy" className="text-white" style={{textDecoration:"none"}}>E Commerce Testing</Link></li>
              <li><Link to="/privacy-policy" className="text-white" style={{textDecoration:"none"}}>Energy and Utilities</Link></li>
              <li><Link to="/privacy-policy" className="text-white" style={{textDecoration:"none"}}>Aerospace</Link></li>
              <li><Link to="/terms-conditions" className="text-white" style={{textDecoration:"none"}}>Fintech</Link></li>
              <li><Link to="/terms-conditions" className="text-white" style={{textDecoration:"none"}}>Entertainment</Link></li>
              <li><Link to="/terms-conditions" className="text-white" style={{textDecoration:"none"}}>Travel and Hospitality Domain</Link></li>
            </ul>
          </div>
          <div className="col-md-2 mb-5">
            <h5 className="text-uppercase">Services</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white" style={{textDecoration:"none"}}>End to End Functional Testing</Link></li>
              <li><Link to="/" className="text-white" style={{textDecoration:"none"}}>Test Automation</Link></li>
              <li><Link to="/" className="text-white" style={{textDecoration:"none"}}>Regression Testing</Link></li>
              <li><Link to="/" className="text-white" style={{textDecoration:"none"}}>Integration Testing</Link></li>
              <li><Link to="/" className="text-white" style={{textDecoration:"none"}}>Crowdsourced Testing</Link></li>
              <li><Link to="/" className="text-white" style={{textDecoration:"none"}}>Performance Testing</Link></li>
              <li><Link to="/" className="text-white" style={{textDecoration:"none"}}>Security Testing</Link></li>
              <li><Link to="/" className="text-white" style={{textDecoration:"none"}}>DevOps/AIOPs Testing</Link></li>
              <li><Link to="/" className="text-white" style={{textDecoration:"none"}}>Compatability Testing</Link></li>
              <li><Link to="/" className="text-white" style={{textDecoration:"none"}}>CRM Application Testing</Link></li>
              <li><Link to="/" className="text-white" style={{textDecoration:"none"}}>ERP Application Testing</Link></li>
            </ul>
          </div>
          <div className="col-md-3 mb-3">
          <h5 className="text-uppercase">QA/QC Audit</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white" style={{textDecoration:"none"}}>Speed Testing</Link></li>
              <li><Link to="/" className="text-white" style={{textDecoration:"none"}}>ECommerce QA/QC</Link></li>
              <li><Link to="/" className="text-white" style={{textDecoration:"none"}}>Accessibility Testing</Link></li>
              <li><Link to="/" className="text-white" style={{textDecoration:"none"}}>Airtificial Intelligence Testing</Link></li>
              <li><Link to="/" className="text-white" style={{textDecoration:"none"}}>Mobile Application Testing</Link></li>
              <li><Link to="/" className="text-white" style={{textDecoration:"none"}}>User Journey Testing</Link></li>
            </ul>
            <h5 className="text-uppercase">Contact</h5>
            <p className="text-white">IT Building, Bhimpura No.1 T. Barewa, Uttar Pradesh 221716</p>
            <p className="text-white">Email: info@thoughtcoders.com</p>
            <p className="text-white">Phone: +91-9555902032</p>
          </div>
        </div>
        <div className="text-center pt-3 border-top border-secondary">
          <p style={{color:'#FF6100'}}>Copyright &copy; 2024-25 Thoughtcoders. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
