import React from 'react';
import ourFeaturesImg from "../../../images/physio_portal_features.jpg"

export default function OurFeatures() {
  return (
    <div id="our-features">
      <section className="our-features-section d-flex gap-5 align-items-center">
        <div className="w-50" data-aos="zoom-in-right" data-aos-duration="1000">
          <img
            src={ourFeaturesImg}
            alt="our-features-img"
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
