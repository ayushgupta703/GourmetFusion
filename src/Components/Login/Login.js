import React, { useEffect } from 'react';
import { SignIn, useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const { isSignedIn } = useUser();  // Check if the user is signed in
    const navigate = useNavigate();

    // Redirect user after successful sign-in
    useEffect(() => {
        if (isSignedIn) {
            navigate('/menu');  
        }
    }, [isSignedIn, navigate]);

    return (
        <div className="login-container">
            <h2>Login</h2>
            <SignIn path="/login" routing="path" signUpUrl="/sign-up" />
        </div>
    );
};

export default Login;
