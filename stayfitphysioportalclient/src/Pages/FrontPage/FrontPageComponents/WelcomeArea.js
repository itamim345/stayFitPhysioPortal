import React from 'react';
import { Link } from 'react-router-dom';
import '../Frontpage.css'

export default function WelcomeArea() {
  return (
    <div id="welcome-section">
      <section className="welcome-area container">
        <div className="welcome-area-content">
          <h1>A Way To Healthy Life, helping hand towards optimal health.</h1>
          <p className="my-4">
            We provide the best solution for therapist and patients. Always Feel
            better, move better and be better. We keep a Genuine Commitment to
            your Health. We are Setting new standards in physiotherapy. Relieve
            Pain & Regain Your Life.
          </p>
          <Link to="/login">
            <button className="btn btn-danger">Book An Appointment</button>
          </Link>
          <span className="mx-3 font-bold">OR</span>
          <Link to="/login">
            <button className="btn btn-warning">Apply As Therapist</button>
          </Link>
        </div>
        <div className="welcome-img-area">
          <img
            src="https://i.ibb.co/yYC0y0P/physioportal-welcome-img2.png"
            alt="welcome-img"
          />
        </div>
      </section>
    </div>
  );
}
