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
  const [searchTherapistData, setSearchTherapistData] = useState();
  const dispatch = useDispatch();
  const getData = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.get(
        "/api/user/get-all-approved-therapists",
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      dispatch(hideLoading());
      if (response.data.success) {
        setTherapists(response.data.data);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
    }
  };

  // Filter form bye name
  const filterTherapistByPlace = (value) => {
    const lowerCaseValue = value.toLowerCase().trim();
    if (!lowerCaseValue) {
      setSearchTherapistData(therapists);
    } else {
      const filteredTherapistList = therapists?.filter((therapist) => {
        return therapist.address.toLowerCase().includes(lowerCaseValue);
      });
      setSearchTherapistData(filteredTherapistList);
    }
  };

  // Filter form bye name
  const filterTherapistBySpeciality = (value) => {
    const lowerCaseValue = value.toLowerCase().trim();
    if (!lowerCaseValue) {
      setSearchTherapistData(therapists);
    } else {
      const filteredTherapistList = therapists?.filter((therapist) => {
        return therapist.specialization.toLowerCase().includes(lowerCaseValue);
      });
      setSearchTherapistData(filteredTherapistList);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Update searchTherapistData data on Therapist list change
  useEffect(() => {
    if (therapists) setSearchTherapistData(therapists);
  }, [therapists]);

  return (
    <DashboardLayout>
      <h2 className='text-center'>Search Therapist</h2>
      <div className="d-flex w-50 mx-auto gap-4">
        {/* input-1 */}
        <div class="input-group mb-3">
          <div class="input-group-prepend"></div>
          <input
            type="text"
            className="form-control border border-2 border-warning"
            placeholder="Search By Location"
            aria-label=""
            aria-describedby="basic-addon1"
            onKeyUp={(e) => filterTherapistByPlace(e.target.value)}
          />
          {/* <button class="btn btn-info" type="button">Button</button> */}
        </div>
        {/* input-2 */}
        <div class="input-group mb-3">
          <div class="input-group-prepend"></div>
          <input
            type="text"
            className="form-control border border-2 border-warning"
            placeholder="Search By Specialization"
            aria-label=""
            aria-describedby="basic-addon1"
            onKeyUp={(e) => filterTherapistBySpeciality(e.target.value)}
          />
          {/* <button class="btn btn-outline-secondary" type="button">Button</button> */}
        </div>
      </div>
      <Row gutter={15}>
        {searchTherapistData &&
          searchTherapistData.map((therapist) => (
            <Col span={6}>
              <Therapist therapist={therapist} />
            </Col>
          ))}
      </Row>
    </DashboardLayout>
  );
}
