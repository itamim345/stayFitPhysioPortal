import React from 'react';
import "../Frontpage.css"
import aboutUsImg from "../../../images/physioPortal_about_us.jpg"

export default function AboutUs() {
  return (
    <div id="about-us-section">
      <section className="about-us d-flex gap-5 align-items-center">
        <div className="w-50" data-aos="zoom-in-right" data-aos-duration="1000">
          <h2 className="mb-4">
            About <span className="text-primary">Us</span>
          </h2>
          <p>
            We are an experience team Having a platform for the Patient and
            Therapist, We Ensure a excellent hassle free modern systemetic way
            to manage the patient and therapist problem. In this system a
            patient can get the appointment with any of the therapist from our
            platform based on his choice and a therapist can apply as a
            therapist anytime.
          </p>
        </div>
        <div className="w-50" data-aos="zoom-in-left" data-aos-duration="1000">
          <img src={aboutUsImg} alt="abou-Us-img" className="w-100 rounded" />
        </div>
      </section>
    </div>
  );
}
