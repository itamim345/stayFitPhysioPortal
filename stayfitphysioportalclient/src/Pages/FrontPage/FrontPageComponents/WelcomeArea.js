import React from 'react';
import { Link } from 'react-router-dom';
import '../Frontpage.css'

export default function WelcomeArea() {
  return (
    <div>
      <section className="welcome-area container">
        <div>
          <img
            src="https://i.ibb.co/tskPkS4/welcome-img-comp.jpg"
            alt="welcome-img"
          />
        </div>
        <div>
          <h2>Welcome to <span className='text-primary'>StayFit</span> Physio Portal</h2>
          <p className='my-4'>
            <q><em>Do Something Today, Your Future Self Will Thank You For.</em></q>
            <h5 className='my-2'>Platform for Patient and Therapist</h5>
          </p>
          <Link to="/login">
            <button className="btn btn-danger">Book An Appointment</button>
          </Link>
          <span className="mx-3 font-bold">OR</span>
          <Link to="/login">
            <button className="btn btn-warning">Apply As Therapist</button>
          </Link>
        </div>
      </section>
    </div>
  );
}
