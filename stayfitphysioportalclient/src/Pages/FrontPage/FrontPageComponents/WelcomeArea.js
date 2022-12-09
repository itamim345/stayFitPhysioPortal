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
            <h2>Welcome to the StyeFit Physio Portal</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nesciunt quidem atque earum nihil necessitatibus sapiente quo aut possimus quae.</p>
        </div>
      </section>
    </div>
  );
}
