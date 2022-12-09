import React from 'react';
import '../Frontpage.css'

export default function WelcomeArea() {
  return (
    <div>
      <section className="welcome-area container">
        <div>
          <img src="https://i.ibb.co/tskPkS4/welcome-img-comp.jpg" alt="welcome-img" />
        </div>
        <div>
            <h2>Welcome to the StayFit Physio Portal</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nesciunt quidem atque earum nihil necessitatibus sapiente quo aut possimus quae.</p>
            <button className='btn btn-danger'>Book An Appointment</button>
            <span className='mx-3 font-bold'>OR</span>
            <button className='btn btn-warning'>Apply As Therapist</button>
        </div>
      </section>
    </div>
  );
}
