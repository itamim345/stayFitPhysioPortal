import React from 'react';
import { Link } from 'react-router-dom';
import '../Frontpage.css';

export default function Header() {
  return (
    <div id="header" className='bg-primary'>
      <div class="nav-area container">
        <div className="logo">
          <h3>Logo</h3>
        </div>
        <div className="menu">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
        <div className="buttons">
          <Link to="/register">
            <button>Register</button>
          </Link>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
