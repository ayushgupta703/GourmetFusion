import React from 'react';
import './AboutUs.css';

const AboutUs = () => (
    <div className="aboutus_parent">
        <div className="aboutus_info">
            <h1 className="aboutus_h1">About Us</h1>
            <p className="aboutus_p1">
                Lorem Ipsum Drolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. 
                In Sed Odio Nec Aliquet Eu Proin Mauris Et.</p>
            <button className="button">
                <a href="#Know_more">Know More</a>
            </button>
        </div>
        <div className="history_info">
            <h1 className="history_h1">Our History</h1>
            <p className="history_p1">
                Adipiscing Tempuse Ullamcorper Lobortis Odio Tellus Arcu Volutpat. Risus Placerat Morbi Voluptpat Habitasse Interdum Mi 
                Aliquam In Sed Odio Nec Aliquet.</p>
            <button className="button">
                <a href="#Know_more">Know More</a>
            </button>
        </div>
    </div>
);

export default AboutUs;
