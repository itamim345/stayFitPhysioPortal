import React from 'react';

export default function Therapist({therapist}) {
  return (
    <div>
      <div className="border">
        <div className="h6">
          {therapist.firstName} {therapist.lastName}
        </div>
      </div>
    </div>
  );
}
