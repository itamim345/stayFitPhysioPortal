import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import DashboardLayout from "../Components/DashboardLayout";
import { hideLoading, showLoading } from "../Redux/alertReducers";
import { toast } from "react-hot-toast";
import "../OurCss/common.css";
import dayjs from "dayjs";

export default function Appointments() {
      const dispatch = useDispatch();
      const [appointments, setAppointments] = useState([]);

        const getAppointmentsInfo = async () => {
          try {
            dispatch(showLoading());
            const response = await axios.get("/api/user/get-appointments-by-user-id", {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            });
            dispatch(hideLoading());
            if (response.data.success) {
              setAppointments(response.data.data);
            }
          } catch (error) {
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
      title: "Therapist",
      dataIndex: "name",
      render: (text, record) => (
        <p>
          {record.therapistInfo.firstName} {record.therapistInfo.lastName}
        </p>
      ),
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
          {dayjs(record.date).format("DD-MM-YYYY")} {dayjs(record.time).format("hh:mm")}
        </p>
      ),
    },
    {
        title: "status",
        dataIndex: "status",

    }
  ];

  
  return (
    <DashboardLayout>
    <h1>Appointments</h1>
      <Table columns={columns} dataSource={appointments} />
    </DashboardLayout>
  );
}
