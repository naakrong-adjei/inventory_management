import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/auth.css';
import inventoryImage from '../images/inventory.png';
import googleImage from '../images/google.png';
import facebookImage from '../images/facebook_icon.png';
import appleImage from '../images/apple.png';

export const Signup = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullname: '',
        username: '',
        email: '',
        password: '',
        termsAccepted: false
    });

    const [errors, setErrors] = useState({});

    const validate = (field, value) => {
        let errorMessage = '';
    
        if (typeof value === 'string') {
            value = value.trim();
        }
    
        if (field === 'termsAccepted') {
            if (!value) {
                errorMessage = 'You must agree to the Terms & Conditions';
            }
        } else if (!value) {  // For text fields
            switch (field) {
                case 'fullname':
                    errorMessage = 'Full Name is required';
                    break;
                case 'username':
                    errorMessage = 'Username cannot be empty';
                    break;
                case 'email':
                    errorMessage = 'Please enter a valid email address';
                    break;
                case 'password':
                    errorMessage = 'Password is required';
                    break;
                default:
                    break;
            }
        } else {
            if (field === 'email' && !/^\S+@\S+\.\S+$/.test(value)) {
                errorMessage = 'Invalid email format';
            } else if (field === 'password' && value.length < 8) {
                errorMessage = 'Password must be at least 8 characters long';
            }
        }
    
        setErrors((prevErrors) => ({ ...prevErrors, [field]: errorMessage }));
    };
    

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormData({ ...formData, [name]: newValue });
        validate(name, newValue);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        Object.keys(formData).forEach((key) => validate(key, formData[key]));

        if (!Object.values(newErrors).some((error) => error)) {
            console.log('Form submitted:', formData);
            navigate('/home'); // Redirect to home after successful signup
        }
    };

    return (
        <div className="signup-container" id="page-container">
            <div className="signup-left">
                <form className="form" onSubmit={handleSubmit}>
                    <h2 className="title">Create an Account</h2>
                    <p className="subtitle">Sign up to get started</p>

                    <div className="inline-fields">
                        <div className="input-group">
                            <input
                                className="input"
                                type="text"
                                name="fullname"
                                placeholder=''
                                value={formData.fullname}
                                onChange={handleChange}
                            />
                            <label className="label">Full Name</label>
                            {errors.fullname && <p className="text-red-500 text-sm error-message">{errors.fullname}</p>}
                        </div>

                        <div className="input-group">
                            <input
                                className="input"
                                type="text"
                                name="username"
                                placeholder=''
                                value={formData.username}
                                onChange={handleChange}
                            />
                            <label className="label">Username</label>
                            {errors.username && <p className="text-red-500 text-sm error-message">{errors.username}</p>}
                        </div>
                    </div>

                    <div className="input-group">
                        <input
                            className="input"
                            type="email"
                            name="email"
                            placeholder=''
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <label className="label">Email</label>
                        {errors.email && <p className="text-red-500 text-sm error-message">{errors.email}</p>}
                    </div>

                    <div className="input-group">
                        <input
                            className='input'
                            type="password"
                            name="password"
                            placeholder=''
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <label className="label">Password</label>
                        {errors.password && <p className="text-red-500 text-sm error-message">{errors.password}</p>}
                    </div>

                    <div className="options">
                        <label className="checkbox">
                            <input
                                type="checkbox"
                                name="termsAccepted"
                                checked={formData.termsAccepted}
                                onChange={handleChange}
                                className="mr-1 cursor-pointer"
                            />
                            I agree to the <Link to="#">Terms & Conditions</Link>
                        </label>
                        {errors.termsAccepted && <p className="text-red-500 text-sm error-message">{errors.termsAccepted}</p>}
                    </div>

                    <button type="submit" className="button">Sign Up</button>

                    <div className="social-login">
                        <p>Or sign up with</p>
                        <div className="social-buttons">
                            <button className="social-btn google">
                                <img src={googleImage} alt="Google" />
                            </button>
                            <button className="social-btn facebook">
                                <img src={facebookImage} alt="Facebook" />
                            </button>
                            <button className="social-btn apple">
                                <img src={appleImage} alt="Apple" />
                            </button>
                        </div>
                    </div>

                    <p className="option">
                        Already have an account? <Link to="/">Log in</Link>
                    </p>
                </form>
            </div>

            <div className="signup-right">
                <img src={inventoryImage} alt="Inventory" className="signup-image" />
                <h2 className="text">INVENTORY MANAGEMENT SYSTEM</h2>
                <footer className="mt-14 text-gray-200">&copy; naakrong-adjei. All rights reserved</footer>
            </div>
        </div>
    );
};
