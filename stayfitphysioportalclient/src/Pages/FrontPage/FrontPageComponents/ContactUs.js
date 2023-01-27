import React from 'react';

export default function ContactUs() {
  return (
    <div id="contact-us-section">
      <section className="contact-us container d-flex align-items-center gap-5 text-white">
        <div className="map">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235850.7723487098!2d88.2072626825062!3d22.53536672476327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1674793517615!5m2!1sen!2sin"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="content">
          <div className="contact-details py-3">
            <h2 className='ps-3'>
              Contact <span className="text-primary">Us</span>
            </h2>
            <div>
              <i className="ri-mail-line text-danger"></i>
              <h6>Email: contact@stayfit.com</h6>
            </div>
            <div>
              <i className="ri-whatsapp-line text-success"></i>
              <h6>Whatsapp: +91 9889988998</h6>
            </div>
            <div>
              <i class="ri-building-2-line"></i>
              <h6>
                Address: Action Area II, Plot No.- IIA/27, Newtown, Kolkata,
                West Bengal 700156
              </h6>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
