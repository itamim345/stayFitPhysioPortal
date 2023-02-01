import React from 'react';
import testimonialImg2 from "../../../images/testimonials2.jpg";
import testimonialImg4 from "../../../images/testimonials4.jpg";
import testimonialImg3 from "../../../images/testimonials3.jpg";


export default function Testimonials() {
  return (
    <div id="testimonials">
      <section className="testimonials-section py-3">
        <h2 className="mb-5 text-center text-primary">
          Our <span className="text-white">Testimonials</span>
        </h2>
        <div className="all-testimonials">
          <div data-aos="flip-up" data-aos-duration="1000">
            <img src={testimonialImg2} alt="testimonial-1" />
            <h6>Dharshani Arumugam</h6>
            <p>
              <q>
                Excellent Service! A very well-maintained and well-disciplined
                physioPortal
              </q>
            </p>
          </div>
          <div data-aos="flip-up" data-aos-duration="1000">
            <img src={testimonialImg4} alt="testimonial-2" />
            <h6>Praveen Bommanna</h6>
            <p>
              <q>
                Service and treatment is very good. Thank you for taking care of
                my father.
              </q>
            </p>
          </div>
          <div data-aos="flip-up" data-aos-duration="1000">
            <img src={testimonialImg3} alt="testimonial-3" />
            <h6>Yvenide Belizaire</h6>
            <p>
              <q>
                No words to describe! It provides an excellent quality rich
                services efficiently to patient.
              </q>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
