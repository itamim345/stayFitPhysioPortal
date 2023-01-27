import React from 'react';
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="footer-area text-center text-white">
      <footer className="container py-3 d-flex justify-content-between align-items-center">
        <div>
          &copy;2023 | All Right Reserved by{" "}
          <span className="text-warning cursor-p">StayFit Physio Portal</span>
        </div>
        <div className="socical-links">
          <a href="http://facebook.com" target="_blank" rel="noreferrer">
            <i class="ri-facebook-box-line"></i>
          </a>
          <a href="http://gmail.com" target="_blank" rel="noreferrer">
            <i class="ri-instagram-line"></i>
          </a>
          <a href="http://twitter.com" target="_blank" rel="noreferrer">
            <i class="ri-twitter-line"></i>
          </a>
          <a href="http://linkedin.com" target="_blank" rel="noreferrer">
            <i class="ri-linkedin-box-line"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}
