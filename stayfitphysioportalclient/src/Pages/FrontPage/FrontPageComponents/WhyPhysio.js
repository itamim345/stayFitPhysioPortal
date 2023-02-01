import React from 'react';
import whyPhysioImg from "../../../images/whyPhysio_img.jpg"

export default function WhyPhysio() {
  return (
    <div id="why-physio-section">
      <section className="why-physio d-flex align-items-center gap-5">
        <div className="w-50" data-aos="zoom-in-right" data-aos-duration="1000">
          <img
            src={whyPhysioImg}
            alt="why-physio-img"
            className="w-100 rounded"
          />
        </div>
        <div className="w-50" data-aos="zoom-in-left" data-aos-duration="1000">
          <h2 className="mb-4">
            Why <span className="text-primary">Physio Therapy</span>
          </h2>
          <p>
            Physio Treatment otherwise called exercise based recuperation or
            kinesiology, assists with treating muscular, neurological, and
            cardiopulmonary infection conditions. With the assistance of PT,
            patients of all ages, including infants, children, adults, and the
            elderly, can be treated for their respective conditions. The trained
            allied health professionals who treat the disorder in a variety of
            ways are physiotherapists; thereby contributing to an improvement in
            the patients' overall quality of life.
          </p>
        </div>
      </section>
    </div>
  );
}
