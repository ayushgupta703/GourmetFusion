import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className="contact-us-container">
            <h1>Get in Touch</h1>
            <p>We'd love to hear from you! Please fill out the form below, and we'll get back to you soon.</p>

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
    );
};

export default ContactUs;
