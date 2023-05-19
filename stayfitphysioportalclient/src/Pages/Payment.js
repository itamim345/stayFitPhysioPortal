import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DashboardLayout from '../Components/DashboardLayout';
import axios from 'axios';
import { hideLoading, showLoading } from "../Redux/alertReducers";
import { useDispatch } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from './CheckoutForm'

import CardImg from "../../../stayfitphysioportalclient/src/images/card0.png"

const stripePromise = loadStripe(
  "pk_test_51N57k4SD6BX1TTRJTIovWlxAFtZX6EOqOB2v6gQrDye6eoZt6jHOAID5haFfnzBfdhPM6KsKdOYBYF9NFFLqlGVE00jBOI93IT"
);

export default function Payment() {
    const { appointmentId } = useParams();
    const dispatch = useDispatch();
    const [appointmentInfo, setAppointmentInfo] = useState()
    //test state
    const [tst, setTst] = useState("100taka");
            const getAppointmentInfoById = async () => {
              try {
                dispatch(showLoading());
                const response = await axios.get(
                  `/api/user/get-appointment-info-by-id/${appointmentId}`,
                  {
                    headers: {
                      Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                  }
                );
                dispatch(hideLoading());
                if (response.data.success) {
                  setAppointmentInfo(response.data.data);
                }
              } catch (error) {
                dispatch(hideLoading());
              }
            };
          appointmentInfo && console.log(appointmentInfo);

            //useEfftect
            useEffect(() => {
              getAppointmentInfoById();
            }, [appointmentId]);
  return (
    <DashboardLayout>
      <div className="payment-section">
        <h2 className="text-center">Please Pay Your Fees:</h2>
        <div className="d-flex justify-content-between">
          <h6>
            <strong className="text-warning">Therapist: </strong>
            {appointmentInfo?.therapistInfo?.firstName}{" "}
            {appointmentInfo?.therapistInfo?.lastName}
          </h6>
          <h6>
            <strong className="text-warning">Specialization: </strong>
            {appointmentInfo?.therapistInfo?.specialization}
          </h6>
        </div>
        <div className="d-flex justify-content-between">
          <h6>
            <strong className="text-warning">Timing:</strong>{" "}
            {appointmentInfo?.therapistInfo?.timing[0]} -{" "}
            {appointmentInfo?.therapistInfo?.timing[1]}
          </h6>
          <h6>
            <strong className="text-warning">Fees: </strong>
            {appointmentInfo?.therapistInfo?.consaltancyFees}
          </h6>
        </div>
        {appointmentInfo?.therapistInfo?.consaltancyFees && (
          <Elements stripe={stripePromise}>
            <CheckoutForm appointmentData={appointmentInfo} />
          </Elements>
        )}
      </div>

      <div className="container mt-5 ">
        <div className="row abc text-center ">
          <div className="col-lg-5">
            <h3 className="mt-2">Please Pay Your Fees</h3>
            <div>
              <p>Therapist : Tarik Zamal</p>
            </div>
            <div>
              <p>Specializatio : Orthopedic</p>
            </div>
            <div>
              <p>Timing : 08:30 - 04:30 </p>
            </div>
          </div>
          <div className="col-lg-7 paymentcard ">
            <div>
              <h3>Payment</h3>
              <img src={CardImg} alt="" className="w-50 h-40" srcset="" />
            </div>
            {/* tst section */}
            <br />
            <h2>{tst}</h2>
            <button onClick={() => setTst("500 taka")}>Click me</button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
