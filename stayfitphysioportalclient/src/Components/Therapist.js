import React from 'react';
import "../OurCss/common.css"

export default function Therapist({therapist}) {
  return (
    <div>
      <div className="border p-3 text-center single-therapist">
        <h5 className='text-primary therapist-heading' >{therapist.firstName} {therapist.lastName}</h5>
        <h5><em>{therapist.specialization}</em></h5>
        <p><strong>Phone:</strong> {therapist.phone}</p>
        <p><strong>Experience:</strong> {therapist.experience} yrs.</p>
        <p><strong>Fees:</strong> {therapist.consaltancyFees}</p>
      </div>
    </div>
  );
}
