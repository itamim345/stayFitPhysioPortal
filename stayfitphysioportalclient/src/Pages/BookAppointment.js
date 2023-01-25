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

export default function BookAppointment() {
    const {user} = useSelector((state) => state.user) 
    const [therapist, setTherapist] = useState(null)
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

    useEffect(() => {
      getTherapistData();
    }, []);
  return (
    <DashboardLayout>
      {therapist && (
        <div>
          <h3>{therapist.firstName}</h3>
        </div>
      )}
    </DashboardLayout>
  );
}
