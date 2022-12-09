import React from 'react';

export default function HowItWorks() {
    return (
        <div>
            <section className='how-it-works py-3 my-5 container'>
                <h2 className='mb-4 text-center'>How <span className='text-primary'>It Works</span></h2>
                <div className='works-process'>
                    <div>
                        <i class="ri-shield-user-line"></i>
                        <h3>Registration</h3>
                        <p>You have to Registration first then you only you can get the appoint or can apply as a Therapist</p>
                        <button className='btn btn-success'>Register</button>
                    </div>
                    <div>
                        <i class="ri-shield-user-line"></i>
                        <h3>Registration</h3>
                        <p>You have to Registration first then you only you can get the appoint or can apply as a Therapist</p>
                        <button className='btn btn-danger'>Get Appointment</button>
                    </div>
                    <div>
                        <i class="ri-shield-user-line"></i>
                        <h3>Registration</h3>
                        <p>You have to Registration first then you only you can get the appoint or can apply as a Therapist</p>
                        <button className='btn btn-warning'>Apply As Therapist</button>
                    </div>
                </div>
            </section>
        </div>
    );
}
