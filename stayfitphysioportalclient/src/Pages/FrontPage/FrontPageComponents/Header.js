import React from 'react';
import { Link } from 'react-router-dom';
import '../Frontpage.css';
import  logo from "../../../images/logo.png"

export default function Header() {
  return (
    <div id="header">
      <div class="nav-area">
        <div className="logo">
          <img
            src={logo}
            alt=""
            className="w-25"
          />
        </div>
        <div className="menu">
          <a href="#header">Home</a>
          <a href="#about-us-section">About</a>
          <a href="#our-features">Features</a>
          <a href="#contact-us-section">Contact</a>
        </div>
        <div className="buttons">
          <Link to="/login">
            <button id="btn-1" className="btn btn-sm">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button id="btn-2" className="btn btn-sm">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
