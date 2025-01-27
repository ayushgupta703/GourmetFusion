import React from 'react';
import './AboutUs.css';

const AboutUs = () => (
    <div className="aboutus_parent">
        <div className="aboutus_info">
            <h1 className="aboutus_h1">About Us</h1>
            <h2>Welcome To GourmetFusion</h2>
            <p className="aboutus_p1">At GourmetFusion, we believe in creating memorable dining experiences by combining global flavors with culinary artistry. From our carefully curated menu to our elegant ambiance, every detail is crafted to delight your senses.
                Our chefs are passionate innovators, blending traditional recipes with modern techniques to offer you dishes that are as delightful to the eye as they are to the palate. Whether you're here for a casual lunch, a romantic dinner, or a celebratory gathering, we are committed to ensuring your visit is unforgettable.</p>
            <h3>Highlights:</h3>
            <ul className="aboutus_ul">
                <li>Fresh and locally sourced ingredients.</li>
                <li>An innovative menu inspired by global cuisines.</li>
                <li>Warm, inviting atmosphere perfect for any occasion.</li>
            </ul>
        </div>
        <div className="history_info">
            <h1 className="history_h1">Our History</h1>
            <h2>Our Story</h2>
            <p className="history_p1">The story of GourmetFusion began in 2015 with a vision to bring together the best of global culinary traditions under one roof. What started as a small family-owned bistro has grown into a beloved dining destination, known for its innovative dishes and exceptional service.
                Our journey has been fueled by a love for food and a commitment to excellence. Over the years, we've collaborated with renowned chefs, experimented with diverse cuisines, and embraced sustainability to create a dining experience that resonates with our values and those of our guests.</p>
            <h3>Closing Statement:</h3>
            <p className="history_p2">Our history is a testament to our dedication and passion for the art of dining. As we look to the future, we remain committed to evolving, innovating, and exceeding your expectations at every visit.</p>
        </div>
    </div>
);

export default AboutUs;
