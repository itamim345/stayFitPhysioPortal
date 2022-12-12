import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../Components/DashboardLayout';
import TherapistForm from '../../Components/TherapistForm';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { hideLoading, showLoading } from "../../Redux/alertReducers";
import axios from "axios";
import toast from "react-hot-toast";

export default function Profile() {
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams()
    const [therapist, setTherapist] = useState(null) 
    const handleSubmit = async (values) => {
      try {
        dispatch(showLoading());
        //sending form value using axios post method
        const response = await axios.post(
          "/api/user/apply-therapist-account",
          {
            ...values,
            userId: user._id,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        dispatch(hideLoading());
        if (response.data.success) {
          toast.success(response.data.message);
          //navigating to Dashboard
          navigate("/dashboard");
        } else {
          dispatch(hideLoading());
          toast.error(response.data.message);
        }
      } catch (error) {
        dispatch(hideLoading());
        toast.error("Something Went Wrong!");
      }
    };

    const getTherapistData = async () => {
      try {
        dispatch(showLoading())
        const response = await axios.post(
          "/api/therapist/get-therapist-info-by-user-id",
          {
            userId: params.therapistId,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        dispatch(hideLoading())
        if (response.data.success) {
            setTherapist(response.data.data)
        }
      } catch (error) {
        console.log(error)
        dispatch(hideLoading())
      }
    };

    useEffect(() => {
      getTherapistData();
    }, []);

  return (
    <DashboardLayout>
      <h5 className="text-center text-primary">Therapist Profile</h5>
      <hr></hr>
      {therapist && <TherapistForm onFinish={handleSubmit} initialValues={therapist} />}
    </DashboardLayout>
  );
}
