import React from 'react';

export default function HowItWorks() {
    return (
        <div id='howitworks'>
            <section className='how-it-works py-3 container'>
                <div className='works-process'>
                    <div>
                        <i class="ri-shield-user-line"></i>
                        <h3>Registration</h3>
                        <p>You have to Registration first then only you can get the appointment or can apply as a Therapist</p>
                        <button className='btn btn-success'>Register</button>
                    </div>
                    <div>
                        <i class="ri-file-list-line"></i>
                        <h3>Appointment</h3>
                        <p>Now If you need an appointment as a patient, you can take Appointment after Registration.</p>
                        <button className='btn btn-danger'>Get Appointment</button>
                    </div>
                    <div>
                        <i class="ri-health-book-line"></i>
                        <h3>Therapist</h3>
                        <p>If you are a Therapist & want to apply here as a therapist, after successful Registration.</p>
                        <button className='btn btn-warning'>Apply As Therapist</button>
                    </div>
                </div>
            </section>
        </div>
    );
}
