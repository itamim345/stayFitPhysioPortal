import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../OurCss/common.css"

export default function Therapist({therapist}) {
  // console.log(therapist)
  const navigate = useNavigate()
  return (
    <div>
      <div className="border p-3 single-therapist" onClick={() => navigate(`/book-appointment/${therapist._id}`)}>
        <h5 className='text-primary text-center therapist-heading' >{therapist.firstName} {therapist.lastName}</h5>
        <hr />
        <h5 className='text-center bg-warning '><em>{therapist.specialization}</em></h5>
        <p><strong>Experience:</strong> {therapist.experience} yrs.</p>
        <p><strong>Fees:</strong> {therapist.consaltancyFees}</p>
        <p><strong>City:</strong> {therapist.address}</p>
        <p><strong>Timing:</strong> {therapist.timing[0]} - {therapist.timing[1]}</p>
        <button className='btn btn-outline-primary btn-sm w-100 mt-2'>Book Appointment</button>
      </div>
    </div>
  );
}
