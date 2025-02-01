import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import AboutUs from './Components/AboutUs/AboutUs';
import Menu from './Components/Menu/Menu';
import ChefWord from './Components/ChefWord/ChefWord';
import Gallery from './Components/Gallery/Gallery';
import ContactUs from './Components/ContactUs/ContactUs';
import Login from './Components/Login/Login';
import SignUpPage from './Components/SignUpPage/SignUpPage';

const CLERK_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
if (!CLERK_KEY) {
  throw new Error("Missing Publishable Key");
}

const App = () => {
  return (
    <ClerkProvider publishableKey={CLERK_KEY}>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/chef-word" element={<ChefWord />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUpPage />} />
          </Routes>
        </div>
      </Router>
    </ClerkProvider>
  );
};

export default App;
