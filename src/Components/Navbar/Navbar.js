import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="navbar">
                <div className="navbar-brand">
                    <Link to="/">GourmetFusion</Link>
                </div>
                <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
                    <li><Link to="/about">About Us</Link></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="chef_word">Chef's Word</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                    <li><a href="#table"> Book Table</a></li>
                    <li><a href="#login">Log In/ Register</a></li>
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
