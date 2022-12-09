import React from 'react';
import { Link } from 'react-router-dom';
import '../Frontpage.css';

export default function Header() {
  return (
    <div id="header">
      <div class="nav-area container">
        <div className="logo">
          <h3>Logo</h3>
        </div>
        <div className="menu">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Services</Link>
          <Link to="/about">Cotact</Link>
        </div>
        <div className="buttons">
          <Link to="/login">
            <button id="btn-1">Login</button>
          </Link>
          <Link to="/register">
            <button id="btn-2">Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
