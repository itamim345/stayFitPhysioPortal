import { Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import DashboardLayout from '../../Components/DashboardLayout';
import { hideLoading, showLoading } from '../../Redux/alertReducers';
import "../../OurCss/common.css"

export default function TherapistList() {
  const dispatch = useDispatch();
  const [therapist, setTherapist] = useState([]); //Use State
  //useEfftect
  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
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
      title: "status",
      dataIndex: "status",
    },
    {
      title: "actions",
      dataIndex: "actions",
      render: (text, record) => (
        <div className="d-flex">
          {record.status === "pending" && <em>Approve</em>}
          {record.status === "approved" && <em>Block</em>}
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
