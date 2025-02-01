import React from 'react';
import { SignUp } from '@clerk/clerk-react';
import './SignUp.css'; // Optional for styling

const SignUpPage = () => {
    return (
        <div className="signup-container">
            {/* <h2>Sign Up</h2> */}
            <SignUp path="/sign-up" routing="path" signInUrl="/login" />
        </div>
    );
};

export default SignUpPage;
