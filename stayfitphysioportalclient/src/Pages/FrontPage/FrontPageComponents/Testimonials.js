import React from 'react';

export default function Testimonials() {
  return (
    <div id="testimonials">
      <section className="testimonials-section py-3 container">
        <h2 className="mb-5 text-center text-primary">
          Our <span className="text-white">Testimonials</span>
        </h2>
        <div className="all-testimonials">
          <div data-aos="flip-up" data-aos-duration="1000">
            <img
              src="https://i.ibb.co/kQykRnv/testimonials2.jpg"
              alt="testimonial-1"
            />
            <h6>Dharshani Arumugam</h6>
            <p>
              <q>
                Excellent Service! A very well-maintained and well-disciplined
                physioPortal
              </q>
            </p>
          </div>
          <div data-aos="flip-up" data-aos-duration="1000">
            <img
              src="https://i.ibb.co/5jcdd7r/testimonials4.jpg"
              alt="testimonial-2"
            />
            <h6>Praveen Bommanna</h6>
            <p>
              <q>
                Service and treatment is very good. Thank you for taking care of
                my father.
              </q>
            </p>
          </div>
          <div data-aos="flip-up" data-aos-duration="1000">
            <img
              src="https://i.ibb.co/vwn5DmM/testimonials3.jpg"
              alt="testimonial-2"
            />
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
