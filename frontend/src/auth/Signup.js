import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/auth.css';
import inventoryImage from '../images/inventory.png';

export const Signup = () => {
    return (
        <div className="signup-container">
        {/* Left Section: Image & Text */}
            <div className="signup-left">
                <img src={inventoryImage} alt="Inventory" className="signup-image" />
                <h2 className="text">INVENTORY MANAGEMENT SYSTEM</h2>
            </div>

        {/* Right Section: Signup Form */}
            <div className="signup-right">
                <form className="form">
                <h2 className="title">Create an Account</h2>
                <p className="subtitle">Sign up to get started</p>

                {/* Full Name & Username on the Same Line */}
                <div className="inline-fields">
                    <div className="input-group">
                    <input className="input" required type="text" id="fullname" />
                    <label className="label" htmlFor="fullname">Full Name</label>
                    </div>

                    <div className="input-group">
                    <input className="input" required type="text" id="username" />
                    <label className="label" htmlFor="username">Username</label>
                    </div>
                </div>

                {/* Email Field */}
                <div className="input-group">
                    <input className="input" required type="email" id="email" />
                    <label className="label" htmlFor="email">Email</label>
                </div>

                {/* Password & Confirm Password on the Same Line */}
                <div className="password-fields">
                    <div className="input-group">
                    <input className="input" required type="password" id="password" />
                    <label className="label" htmlFor="password">Password</label>
                    </div>

                    <div className="input-group">
                    <input className="input" required type="password" id="confirm-password" />
                    <label className="label" htmlFor="confirm-password">Confirm Password</label>
                    </div>
                </div>

                {/* Terms and Conditions */}
                <div className="options">
                    <label className="checkbox">
                    <input type="checkbox" className="mr-1 cursor-pointer" required />
                    I agree to the <Link to="#">Terms & Conditions</Link>
                    </label>
                </div>

                {/* Signup Button */}
                <button type="submit" className="button">Sign Up</button>

                {/* Social Signup */}
                <div className="social-login">
                    <p>Or sign up with</p>
                    <div className="social-buttons">
                    <button className="social-btn google">Google</button>
                    <button className="social-btn facebook">Facebook</button>
                    </div>
                </div>

                {/* Login Option */}
                <p className="option">
                    Already have an account? <Link to="/">Log in</Link>
                </p>

                </form>
            </div>
        </div>
    );
};
