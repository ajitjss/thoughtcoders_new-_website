import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'react-hot-toast';
import axios from 'axios'; // Import Axios
import { config } from '../config';

const Contact = () => {
    const form = useRef();

    const sendEmail = async (e) => {
        e.preventDefault();

        // Prepare form data
        const formData = {
            name: form.current.name.value,
            email: form.current.email.value,
            phone: form.current.phone.value,
            message: form.current.message.value,
        };

        try {
            // Send email via EmailJS
            await emailjs.sendForm(
                'service_98uncas', 
                'template_009pnvn', 
                form.current, 
                { publicKey: 'hgc-VvNa7-GFMNRys' }
            );
            // Store data in the database via Axios POST request
            const response = await axios.post(`${config.BASE_URL}/api/submitForm`, formData);
            console.log('response', response)
            
            if (response.status === 200) {
                toast.success('Form data saved successfully');
            } else {
                toast.error('Failed to save form data');
            }
        } catch (error) {
            toast.error('Error: ' + error.message);
            console.log('Error:', error);
        }

        // Reset the form
        e.target.reset();
    };

    return (
        <div className='w-100' style={{ fontFamily: "georgia", display: 'flex', justifyContent: 'center', background: '#F36E2B' }}>
            <form className="mt-4" ref={form} onSubmit={sendEmail} style={{ width: '80%' }}>
                <h2 style={{display:'flex', justifyContent:'center', fontWeight:'600', color:'white'}}>Contact Us</h2>
                <div className="row mb-2">
                    <div className="form-group col-md-6">
                        <label htmlFor="name">Full Name<span style={{color:'red'}}>*</span></label>
                        <input
                            type="text"
                            className="form-control"
                            name='name'
                            id="name"
                            placeholder="Enter your full name"
                            style={{ width: '100%', padding: '10px' }}
                            required
                        />
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="email">Email<span style={{color:'red'}}>*</span></label>
                        <input
                            type="email"
                            className="form-control"
                            name='email'
                            id="email"
                            placeholder="Enter your email"
                            style={{ width: '100%', padding: '10px' }}
                            required
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="form-group col-md-6">
                        <label htmlFor="phone">Phone<span style={{color:'red'}}>*</span></label>
                        <input
                            type="tel"
                            className="form-control"
                            name='phone'
                            id="phone"
                            placeholder="Enter your phone number"
                            style={{ width: '100%', padding: '10px' }}
                            required
                        />
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="message">Message<span style={{color:'red'}}>*</span></label>
                        <textarea
                            className="form-control"
                            name='message'
                            id="message"
                            rows="1"
                            placeholder="Enter your message/query"
                            style={{ width: '100%', padding: '10px' }}
                            required
                        />
                    </div>
                </div>

                <div className='d-flex justify-content-center'>
                    <button 
                      type="submit" 
                      className="btn mt-4 mb-4 py-2 px-5"
                      style={{  background: "#fff", color:'#000',border: 'none', fontSize:'20px' }}>
                        Submit
                    </button>
                    <Toaster position="top-center" reverseOrder={false} />
                </div>
            </form>
        </div>
    );
};

export default Contact;
