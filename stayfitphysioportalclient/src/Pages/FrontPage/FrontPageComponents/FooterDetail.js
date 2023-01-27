import React from 'react';
import { Link } from 'react-router-dom';

export default function FooterDetail() {
  return (
    <div id="footer-details-section">
      <section className="footer-details container d-flex align-items-center gap-5">
        <div className="text-center">
          <img
            src="https://i.ibb.co/HhbbLzr/logo.png"
            alt=""
            className="w-50"
          />
          <h4>StayFit</h4>
          <p>
            Your neighborhood body specialists
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <div>
            <Link to="/">
              <i className="ri-arrow-right-s-line"></i>Home
            </Link>
            <Link to="/">
              <i className="ri-arrow-right-s-line"></i>About&nbsp;Us
            </Link>
            <Link to="/">
              <i className="ri-arrow-right-s-line"></i>Why&nbsp;Physio
            </Link>
            <Link to="/">
              <i className="ri-arrow-right-s-line"></i>Contact&nbsp;us
            </Link>
          </div>
        </div>

        <div>
          <h4>Important Links</h4>
          <div>
            <Link to="/">
              <i className="ri-arrow-right-s-line"></i>FAQ
            </Link>
            <Link to="/">
              <i className="ri-arrow-right-s-line"></i>Members
            </Link>
            <Link to="/">
              <i className="ri-arrow-right-s-line"></i>Privacy&nbsp;Policy
            </Link>
            <Link to="/">
              <i className="ri-arrow-right-s-line"></i>
              Terms&nbsp;&&nbsp;Condition
            </Link>
          </div>
        </div>
        <div className='get-app'>
          <h4>Get the App</h4>
          <div className="apps">
            <i class="ri-google-play-line"></i>
            <i class="ri-apple-line"></i>
          </div>
          <small>Available in App & Play Store</small>
        </div>
      </section>
    </div>
  );
}
