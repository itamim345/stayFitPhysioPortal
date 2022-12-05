import React from 'react';
import axios from "axios";
import { useEffect } from 'react';

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

  return (
    <div>
      <h2>Welcome to dashboard!</h2>
    </div>
  );
}
