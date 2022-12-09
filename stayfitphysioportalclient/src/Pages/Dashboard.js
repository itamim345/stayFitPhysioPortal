import React from 'react';
import axios from "axios";
import { useEffect } from 'react';
import DashboardLayout from '../Components/DashboardLayout';

export default function Dashboard() {

  const getData = async()=>{
    try {
      const response = await axios.post("/api/user/get-user-info-by-id", {}, {
        headers : {
          Authorization : 'Bearer ' + localStorage.getItem('token')
        }
      })
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return <DashboardLayout>
      <div className='text-center mt-3'>
        <img src="https://i.ibb.co/kc0yTB3/dashboard-img-removebg-preview.png" alt="dashboard-img" className='w-75 rounded' />
      </div>
    </DashboardLayout>
}
