import { Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import DashboardLayout from '../../Components/DashboardLayout';
import { hideLoading, showLoading } from '../../Redux/alertReducers';
import {toast} from "react-hot-toast"
import "../../OurCss/common.css"

export default function TherapistList() {
  const dispatch = useDispatch();
  const [therapist, setTherapist] = useState([]); //Use State
  //useEfftect
  useEffect(() => {
    getTherapistInfo();
  }, []);

  const getTherapistInfo = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.get("/api/admin/get-all-therapists", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      dispatch(hideLoading());
      if (response.data.success) {
        setTherapist(response.data.data);
      }
    } catch (error) {
      dispatch(hideLoading());
    }
  };

  const changeTherapistStatus = async (record, status) => {
    try {
      dispatch(showLoading());
      const response = await axios.post("/api/admin/change-therapist-status",
       {therapistId : record._id, userId : record.userId, status: status},
       {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        getTherapistInfo()
      }
    } catch (error) {
      toast.error("Error in status changing")
      dispatch(hideLoading());
    }
  };

  const columns = [
    {
      title: "name",
      dataIndex: "name",
      render: (text, record) => <p>{record.firstName}</p>,
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => (
        <div className="d-flex">
          {record.status === "Pending" && <em className='cp-link' onClick={() => changeTherapistStatus(record, "Approved")}>Approve</em>}
          {record.status === "Approved" && <em className='cp-link' onClick={() => changeTherapistStatus(record, "Blocked")}>Block</em>}
        </div>
      ),
    },
  ];
  return (
    <DashboardLayout>
      <Table columns={columns} dataSource={therapist} />
    </DashboardLayout>
  );
}
