import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/auth.css';
import inventoryImage from '../images/inventory.png';
import googleImage from '../images/google.png';
import facebookImage from '../images/facebook_icon.png';
import appleImage from '../images/apple.png';

export const Signup = () => {
    return (
        <div className="signup-container" id="page-container">
            {/* Left Section: Signup Form */}
            <div className="signup-left">
                <form className="form">
                    <h2 className="title">Create an Account</h2>
                    <p className="subtitle">Sign up to get started</p>

                    {/* Full Name & Username in the Same Row */}
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

                    {/* Password Field */}
                    <div className="input-group">
                        <input className="input" required type="password" id="password" minLength="8" />
                        <label className="label" htmlFor="password">Password</label>
                        <small className="password-info">Must be at least 8 characters long</small>
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
                            <button className="social-btn google">
                            <img src={googleImage} alt="Google"/>
                            </button>
                            <button className="social-btn facebook">
                            <img src={facebookImage} alt="facebook"/>
                            </button>
                            <button className="social-btn apple">
                            <img src={appleImage} alt="apple"/>
                            </button>
                        </div>
                    </div>

                    {/* Login Option */}
                    <p className="option">
                        Already have an account? <Link to="/">Log in</Link>
                    </p>
                </form>
            </div>

            {/* Right Section: Inventory Image */}
            <div className="signup-right">
                <img src={inventoryImage} alt="Inventory" className="signup-image" />
                <h2 className="text">INVENTORY MANAGEMENT SYSTEM</h2>
                <footer className='mt-14 text-gray-200'>&copy; naakrong-adjei. All rights reserved</footer>
            </div>
        </div>
    );
};
