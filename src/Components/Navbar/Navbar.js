import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="navbar">
                <div className="navbar-brand">
                    <a href="/">GourmetFusion</a>
                </div>
                <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="chef_word">Chef's Word</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                    <li><a herf="#login" className="navbar_log">Log In/ Register</a></li>
                    <li><a herf="/" className="navbar_table"> Book Table</a></li>
                </ul>
                <div className="navbar-toggle" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span> 
                </div>
            </nav>
        </>
    );
};

export default Navbar;
