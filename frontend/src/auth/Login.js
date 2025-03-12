import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import '../styles/auth.css';
import inventoryImage from '../images/inventory.png';
import googleImage from '../images/google.png';
import facebookImage from '../images/facebook_icon.png';
import appleImage from '../images/apple.png';

export const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({});

  const validate = (name, value) => {
    let error = '';

    if (name === 'username') {
      if (!value.trim()) {
        error = 'Please enter your username.';
      }
    } else if (name === 'password') {
      if (!value.trim()) {
        error = 'Password is required.';
      } else if (value.length < 8) {
        error = 'Password must be at least 8 characters.';
      }
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validate(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    Object.keys(formData).forEach((key) => validate(key, formData[key]));

    if (!Object.values(newErrors).some((error) => error)) {
      console.log('Form submitted', formData);
      navigate('/home');
    }
  };

  return (
    <div className="login-container" id="page-container">
      <div className="login-left">
        <img src={inventoryImage} alt="Inventory" className="login-image" />
        <h2 className="text">INVENTORY MANAGEMENT SYSTEM</h2>
        <footer className="mt-14 text-gray-200">&copy; naakrong-adjei. All rights reserved</footer>
      </div>

      <div className="login-right">
        <form className="form" onSubmit={handleSubmit}>
          <h2 className="title">Welcome Back</h2>
          <p className="subtitle">Please log in to continue</p>

          <div className="input-group">
            <input
              className="input"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder=''
            />
            <label className="label" htmlFor="username">Username</label>
            {errors.username && <p className="text-red-500 text-sm error-message">{errors.username}</p>}
          </div>

          <div className="input-group">
            <input
              className="input"
              type="password"
              name="password"
              placeholder=''
              value={formData.password}
              onChange={handleChange}
            />
            <label className="label" htmlFor="password">Password</label>
            {errors.password && <p className="text-red-500 text-sm error-message">{errors.password}</p>}
          </div>

          <div className="options">
            <label className="checkbox">
              <input type="checkbox" className="mr-1 cursor-pointer" />
              Remember me
            </label>
            <a href="/" className="forgot-password">Forgot Password?</a>
          </div>

          <button type="submit" className="button">Login</button>

          <div className="social-login">
            <p>Or sign in with</p>
            <div className="social-buttons">
              <button className="social-btn google"><img src={googleImage} alt="Google" /></button>
              <button className="social-btn facebook"><img src={facebookImage} alt="facebook" /></button>
              <button className="social-btn apple"><img src={appleImage} alt="apple" /></button>
            </div>
          </div>

          <p className="option">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
