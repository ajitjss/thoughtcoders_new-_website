import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm("service_98uncas", "template_009pnvn", form.current, {
            publicKey: "hgc-VvNa7-GFMNRys",
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
        );
        e.target.reset()
      };
  return (
      <div style={{fontFamily:"georgia"}}>
          <form className="mt-4" ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <input type="text" className="form-control" name='name' id="name" placeholder="Enter your full name" />
            </div>

            <div className="form-group mt-3">
              <input type="email" className="form-control" name='email' id="email" placeholder="Enter your email" />
            </div>

            <div className="form-group mt-3">
              <input type="tel" className="form-control" name='phone' id="phone" placeholder="Enter your phone number" />
            </div>

            <div className="form-group mt-3">
              <textarea className="form-control" name='message' id="message" rows="5" placeholder="Enter your message/query"></textarea>
            </div>
            <div className='d-grid'>
                <button type="submit" className="btn btn-primary mt-4" style={{background:"#FF6100", border:'none'}}>Submit</button>
            </div>
          </form>
        </div>
  )
}

export default Contact
