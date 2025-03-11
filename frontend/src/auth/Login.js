import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/auth.css';
import inventoryImage from '../images/inventory.png';

export const Login = () => {
  return (
    <div className="login-container">
      {/* Left Section: Image & Text */}
      <div className="login-left">
        <img src={inventoryImage} alt="Inventory" className="login-image" />
        <h2 className="login-text">INVENTORY MANAGEMENT SYSTEM</h2>
      </div>

      {/* Right Section: Login Form */}
      <div className="login-right">
        <form className="form">
          <h2 className="title">Welcome Back</h2>
          <p className="subtitle">Please log in to continue</p>

          {/* Username Field */}
          <div className="input-group">
            <input className="input" required type="text" id="username" />
            <label className="label" htmlFor="username">Username</label>
          </div>

          {/* Password Field */}
          <div className="input-group">
            <input className="input" required type="password" id="password" />
            <label className="label" htmlFor="password">Password</label>
          </div>

          {/* Forgot Password & Remember Me */}
          <div className="options">
            <label className="checkbox">
              <input type="checkbox" className="mr-1 cursor-pointer"/>
              Remember me
            </label>
            <a href="/" className="forgot-password">Forgot Password?</a>
          </div>

          {/* Login Button */}
          <button type="submit" className="button">Login</button>

          {/* Social Login */}
          <div className="social-login">
            <p>Or sign in with</p>
            <div className="social-buttons">
              <button className="social-btn google">Google</button>
              <button className="social-btn facebook">Facebook</button>
            </div>
          </div>

          {/* Sign Up Option */}
          <p className="option">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
