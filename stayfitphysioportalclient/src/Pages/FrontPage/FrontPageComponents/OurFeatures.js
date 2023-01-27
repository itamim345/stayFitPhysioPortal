import React from 'react';

export default function OurFeatures() {
  return (
    <div id="our-features">
      <section className="our-features-section container d-flex gap-5 align-items-center">
        <div className="w-50" data-aos="zoom-in-right" data-aos-duration="1000">
          <img
            src="https://i.ibb.co/6m0rPqf/physio-portal-features.jpg"
            alt="why-physio-img"
            className="w-100 rounded"
          />
        </div>
        <div className="w-50" data-aos="zoom-in-left" data-aos-duration="1000">
          <h2 className="mb-4">
            Our <span className="text-primary">Features</span>
          </h2>
          <p>We are always ready to provide the top class features to you.</p>
          <h6>
            <i class="ri-arrow-right-circle-line"></i>
            Minimal Interface
          </h6>
          <h6>
            <i class="ri-arrow-right-circle-line"></i>
            Notification system
          </h6>
          <h6>
            <i class="ri-arrow-right-circle-line"></i>
            User Freindly
          </h6>
          <h6>
            <i class="ri-arrow-right-circle-line"></i>
            Fast Support
          </h6>
          <h6>
            <i class="ri-arrow-right-circle-line"></i>
            24/7 Service
          </h6>
        </div>
      </section>
    </div>
  );
}
