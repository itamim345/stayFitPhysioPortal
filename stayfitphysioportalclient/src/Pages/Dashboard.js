import React, { useState } from 'react';
import axios from "axios";
import { useEffect } from 'react';
import DashboardLayout from '../Components/DashboardLayout';
import { Col, Row } from 'antd';
import Therapist from '../Components/Therapist';
import { useDispatch, useSelector } from 'react-redux';
import {showLoading, hideLoading} from './../Redux/alertReducers'

export default function Dashboard() {
  const [therapists, setTherapists] = useState([]);
  const dispatch = useDispatch()
  const getData = async()=>{
    try {
      dispatch(showLoading())
      const response = await axios.get("/api/user/get-all-approved-therapists", {
        headers : {
          Authorization : 'Bearer ' + localStorage.getItem('token')
        }
      })
      dispatch(hideLoading())
      if(response.data.success){
        setTherapists(response.data.data)
      }
    } catch (error) {
      dispatch(hideLoading())
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return <DashboardLayout>
      <Row gutter={15}>
          {therapists.map((therapist) => (
            <Col span={6}>
              <Therapist therapist={therapist}/>
            </Col>
          ))}
      </Row>
    </DashboardLayout>
}
