import { Button, Col, Form, Input, Row, TimePicker} from 'antd';
import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from './DashboardLayout';
import { useSelector } from "react-redux";
import { hideLoading, showLoading } from "../Redux/alertReducers";
import TherapistForm from './TherapistForm';
import moment from 'moment';

export default function ApplyTherapist() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    try {
      dispatch(showLoading())
      //sending form value using axios post method
      const response = await axios.post("/api/user/apply-therapist-account", {
        ...values,
        userId: user._id,
        timing: [
              moment(values.timing[0]).format("HH:mm"),
              moment(values.timing[1]).format("HH:mm")
            ]
      },
      {
        headers : {
          Authorization : `Bearer ${localStorage.getItem("token")}`
        }
      });
      dispatch(hideLoading())
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
    return (
      <div>
        <DashboardLayout>
          <div>
            <h4 className="text-center mb-3 text-primary">
              Apply as a Therapist
            </h4>
            <hr className="hr-divider" />
          </div>
          <TherapistForm onFinish={handleSubmit} />
        </DashboardLayout>
      </div>
    );
}
