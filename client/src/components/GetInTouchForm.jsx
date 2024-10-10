import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'react-hot-toast';

const GetInTouchForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        try {
            emailjs
              .sendForm('service_98uncas', 'template_009pnvn', form.current, 'hgc-VvNa7-GFMNRys')
              .then(
                () => {
                    toast.success('Message Sent Successfully!');
                },
                (error) => {
                  console.log('FAILED...', error.text);
                  toast.error('Failed to send message. Please try again later.');
                }
              );
        } catch (error) {
            console.log('Error occurred while sending email:', error);
            toast.error('An unexpected error occurred. Please try again later.');
        }
        
        // Reset the form
        e.target.reset();
    };
    
  return (
    <div className="container mb-5">
        <div style={{fontFamily:"georgia"}}>
          <h2>Get In Touch</h2>
          <form className="mt-4" ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" className="form-control" name='name' id="name" placeholder="Enter your full name" />
            </div>

            <div className="form-group mt-3">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" name='email' id="email" placeholder="Enter your email" />
            </div>

            <div className="form-group mt-3">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" className="form-control" name='phone' id="phone" placeholder="Enter your phone number" />
            </div>

            <div className="form-group mt-3">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" name='message' id="message" rows="5" placeholder="Enter your message"></textarea>
            </div>
            <div className='d-grid'>
                <button type="submit" className="btn btn-primary mt-4" style={{background:"#FF6100", border:'none'}}>Submit</button>
                <Toaster position="top-center" reverseOrder={false} />
            </div>
          </form>
        </div>
      </div>
  );
}

export default GetInTouchForm;
