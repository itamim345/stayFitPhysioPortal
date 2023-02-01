import React from 'react';
import { Link } from 'react-router-dom';
import '../Frontpage.css'
import welcomeImg  from "../../../images/physioportal_welcome_img2.png"

export default function WelcomeArea() {
  return (
    <div id="welcome-section">
      <section className="welcome-area">
        <div
          className="welcome-area-content"
          data-aos="zoom-in-right"
          data-aos-duration="1000"
        >
          <h1>A Way To Healthy Life, helping hand towards optimal health.</h1>
          <p className="my-4">
            We provide the best solution for therapist and patients. Always Feel
            better, move better and be better. We keep a Genuine Commitment to
            your Health. We are Setting new standards in physiotherapy. Relieve
            Pain & Regain Your Life.
          </p>
          <div className="d-flex gap-3 welcome-btn">
            <Link to="/login">
              <button className="btn btn-danger btn-sm">
                Book An Appointment
              </button>
            </Link>
            <Link to="/login">
              <button className="btn btn-warning btn-sm">
                Apply As Therapist
              </button>
            </Link>
          </div>
        </div>
        <div
          className="welcome-img-area"
          data-aos="zoom-in-left"
          data-aos-duration="1000"
        >
          <img src={welcomeImg} alt="welcome-img" />
        </div>
      </section>
    </div>
  );
}
