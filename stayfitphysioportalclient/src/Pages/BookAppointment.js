import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import DashboardLayout from "../Components/DashboardLayout";
import TherapistForm from "../Components/TherapistForm";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { hideLoading, showLoading } from "../Redux/alertReducers";
import axios from "axios";
import toast from "react-hot-toast";
import moment from "moment";
import "../OurCss/common.css"
import { DatePicker, TimePicker } from "antd";
import dayjs from "dayjs"

export default function BookAppointment() {
    const {user} = useSelector((state) => state.user) 
    const [therapist, setTherapist] = useState(null)
    const [isAvailable, setIsavailable] = useState(false);
    const [date, setDate] = useState()
    const [time, setTime] = useState()
    const params = useParams();
    const dispatch = useDispatch()

    const getTherapistData = async () => {
      try {
        dispatch(showLoading());
        const response = await axios.post(
          "/api/therapist/get-therapist-info-by-id",
          {
            therapistId: params.therapistId,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        dispatch(hideLoading());
        if (response.data.success) {
          setTherapist(response.data.data);
          console.log(response.data.data);
        }
      } catch (error) {
        console.log(error);
        dispatch(hideLoading());
      }
    };

    const bookNow = async () => {
       try {
         dispatch(showLoading());
         const response = await axios.post(
           "/api/user/book-appointment",
           {
             therapistId: params.therapistId,
             userId: user._id,
             date: date,
             time: time,
             therapistInfo: therapist,
             userInfo : user
           },
           {
             headers: {
               Authorization: `Bearer ${localStorage.getItem("token")}`,
             },
           }
         );

         dispatch(hideLoading());
         if (response.data.success) {
           toast.success(response.data.message)
         }
       } catch (error) {
         console.log(error);
         toast.error("Something wrong here!");
         dispatch(hideLoading());
       } 
    }

    const checkAvailability = async () => {
       try {
         dispatch(showLoading());
         const response = await axios.post(
           "/api/user/check-booking-availability",
           {
             therapistId: params.therapistId,
             date: date,
             time: time
           },
           {
             headers: {
               Authorization: `Bearer ${localStorage.getItem("token")}`,
             },
           }
         );

         dispatch(hideLoading());
         if (response.data.success) {
           toast.success(response.data.message)
         }else {
            toast.error(response.data.message)
         }
       } catch (error) {
         console.log(error);
         toast.error("Something wrong here!");
         dispatch(hideLoading());
       } 
    }

    useEffect(() => {
      getTherapistData();
    }, []);
  return (
    <DashboardLayout>
      {therapist && (
        <div className="border p-3 single-therapist w-25">
          <h3 className="text-primary text-center h5">
            {therapist.firstName} {therapist.lastName}
          </h3>
          <hr />
          <p>
            <strong>Timing:</strong> {therapist.timing[0]} -{" "}
            {therapist.timing[1]}
          </p>
          <div>
            <DatePicker format="DD-MM-YYYY" className="mb-2 w-100" onChange={(val) => setDate(moment(val).format("DD-MM-YYYY"))}/>
            <TimePicker format="hh:mm" onChange={(val) => setTime(dayjs(val).format("hh:mm"))}/>
          </div>
          <button className="btn btn-primary btn-sm mt-2 w-100" onClick={checkAvailability}>Check Availability</button>
          <button className="btn btn-danger btn-sm mt-2 w-100" onClick={bookNow}>BOOK NOW</button>
        </div>
      )}
    </DashboardLayout>
  );
}
