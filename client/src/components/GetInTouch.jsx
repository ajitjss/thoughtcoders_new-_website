import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; 

const GetInTouch = () => {
  return (
    <div className="container mb-5">
      <div className="row">
        {/* Left Column - Contact Info & Map */}
        <div className="col-md-6" style={{fontFamily:"georgia"}}>
          <h2>Contact Information</h2>
          <p>Say something to start a live chat</p>
          
          <div className="contact-info">
            <p><FaPhoneAlt /> Phone: +91-9555902032</p>
            <p><FaEnvelope /> Email: info@thoughtcoders.com</p>
            <p><FaMapMarkerAlt /> Location: Bhimpura No.1 Ballia, Uttar Pradesh,221716</p>
          </div>

          {/* Map Integration */}
          <div className="map-container mt-4">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1792.5167994754431!2d83.77222711040515!3d26.032456661787833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39923bc0ab29fff1%3A0x126bb0d7bc499f86!2sThoughtcoders!5e0!3m2!1sen!2sin!4v1726035293320!5m2!1sen!2sin"
              width="100%" 
              height="300" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="col-md-6" style={{fontFamily:"georgia"}}>
          <h2>Get In Touch</h2>
          <form className="mt-4">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your full name" />
            </div>

            <div className="form-group mt-3">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>

            <div className="form-group mt-3">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" />
            </div>

            <div className="form-group mt-3">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
            </div>
            <div className='d-grid'>
                <button type="submit" className="btn btn-primary mt-4" style={{background:"#FF6100", border:'none'}}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
