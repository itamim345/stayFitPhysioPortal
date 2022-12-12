import React from 'react';
import axios from "axios";
import { useEffect } from 'react';
import DashboardLayout from '../Components/DashboardLayout';

export default function Dashboard() {

  const getData = async()=>{
    try {
      const response = await axios.get("/api/user/get-all-approved-therapists", {
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
      
    </DashboardLayout>
}
