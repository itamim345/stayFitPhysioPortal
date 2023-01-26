import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import DashboardLayout from "../../Components/DashboardLayout";
import { hideLoading, showLoading } from "../../Redux/alertReducers";
import { toast } from "react-hot-toast";
import "../../OurCss/common.css";
import dayjs from "dayjs";

export default function TherapistAppointments() {
  const dispatch = useDispatch();
  const [appointments, setAppointments] = useState([]);

  const getAppointmentsInfo = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.get(
        "/api/therapist/get-appointments-by-therapist-id",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (response.data.success) {
        setAppointments(response.data.data);
      }
    } catch (error) {
      dispatch(hideLoading());
    }
  };

  const changeAppointmentStatus = async (record, status) => {
    try {
      dispatch(showLoading());
      const response = await axios.post(
        "/api/therapist/change-appointment-status",
        { appointmentId: record._id, status: status },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        getAppointmentsInfo();
      }
    } catch (error) {
      toast.error("Error in status changing");
      dispatch(hideLoading());
    }
  };

  //useEfftect
  useEffect(() => {
    getAppointmentsInfo();
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
    },
    {
      title: "Patients",
      dataIndex: "name",
      render: (text, record) => <p>{record.userInfo.name}</p>,
    },
    {
      title: "Phone",
      dataIndex: "phone",
      render: (text, record) => <p>{record.therapistInfo.phone}</p>,
    },
    {
      title: "Date & Time",
      dataIndex: "createdAt",
      render: (text, record) => (
        <p>
          {dayjs(record.date).format("DD-MM-YYYY")}{" "}
          {dayjs(record.time).format("hh:mm")}
        </p>
      ),
    },
    {
      title: "status",
      dataIndex: "status",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => (
        <div className="d-flex">
          {record.status === "pending" && (
            <em
              className="cp-link"
              onClick={() => changeAppointmentStatus(record, "approved")}
            >
              Approve
            </em>
          )}
            <em
              className="cp-link"
              onClick={() => changeAppointmentStatus(record, "rejected")}
            >
              Reject
            </em>   
        </div>
      ),
    },
  ];

  return (
    <DashboardLayout>
      <h1>Appointments</h1>
      <Table columns={columns} dataSource={appointments} />
    </DashboardLayout>
  );
}
