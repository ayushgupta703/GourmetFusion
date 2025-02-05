import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className="contact-us-container">
            <h1>Get in Touch</h1>
            <p>We'd love to hear from you! Please fill out the form below, and we'll get back to you soon.</p>
            <div className='contact-us'>
                <div className="contact-us-left">
                    <h2>Address:</h2>
                    <p><FontAwesomeIcon icon={faLocationDot} /> 123 Main St, Anytown, USA 12345</p><br />
                    <h2>Phone Number:</h2>
                    <p><FontAwesomeIcon icon={faPhone} /> +91 9120****30</p><br />
                    <h2>E-mail Address:</h2>
                    <p><FontAwesomeIcon icon={faEnvelope} />contact.GourmetFusion@gmail.com</p><br /><br />
                    <a href='#contact'><FontAwesomeIcon className='icon' icon={faEnvelope} /></a>
                    <a href='#contact'><FontAwesomeIcon className='icon' icon={faFacebookF} /></a>
                    <a href='#contact'><FontAwesomeIcon className='icon' icon={faInstagram} /></a>
                    <a href='#contact'><FontAwesomeIcon className='icon' icon={faWhatsapp} /></a>
                </div>
                <div className="contact-us-form">
                    <form>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" placeholder="Enter your name" required />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" placeholder="Enter your email" required />

                        <label htmlFor="subject">Subject:</label>
                        <input type="text" id="subject" placeholder="Enter subject" required />

                        <label htmlFor="message">Message:</label>
                        <textarea id="message" rows="5" placeholder="Write your message here..." required></textarea>

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
