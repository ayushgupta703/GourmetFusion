import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, useClerk } from '@clerk/clerk-react';

const Navbar = () => {
    const { signOut } = useClerk();

    // Handle sign-out functionality without window reload
    const handleSignOut = () => {
        signOut(); // Sign the user out
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">GourmetFusion</Link>
            </div>
            <ul className="navbar-links">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/chef-word">Chef's Word</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>

                {/* Conditional rendering based on sign-in state */}
                <SignedIn>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><button onClick={handleSignOut}>Sign Out</button></li>
                </SignedIn>

                <SignedOut>
                    <li><Link to="/login">Log In</Link></li>
                    <li><Link to="/sign-up">Sign Up</Link></li>
                </SignedOut>
            </ul>
        </nav>
    );
};

export default Navbar;
