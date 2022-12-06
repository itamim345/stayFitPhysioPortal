import { Button, Col, Form, Input, Row, TimePicker} from 'antd';
import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from './DashboardLayout';
import { useSelector } from "react-redux";
import { hideLoading, showLoading } from "../Redux/alertReducers";

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
        userId: user._id
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
          <Form layout="vertical" onFinish={handleSubmit}>
            <h6>
              <i className="text-decoration-underline">Personal Info:</i>
            </h6>
            <Row gutter={20}>
              <Col span="8">
                <Form.Item
                  label="First Name"
                  name="firstName"
                  rules={[{ required: true }]}
                >
                  <Input placeholder="First Name..." />
                </Form.Item>
              </Col>
              <Col span="8">
                <Form.Item
                  label="Last Name"
                  name="lastName"
                  rules={[{ required: true }]}
                >
                  <Input placeholder="Last Name..." />
                </Form.Item>
              </Col>
              <Col span="8">
                <Form.Item
                  label="Language"
                  name="language"
                  rules={[{ required: true }]}
                >
                  <Input placeholder="Language..." />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span="8">
                <Form.Item
                  label="Phone"
                  name="phone"
                  rules={[{ required: true }]}
                >
                  <Input placeholder="Phone Number..." />
                </Form.Item>
              </Col>
              <Col span="8">
                <Form.Item
                  label="Address"
                  name="address"
                  rules={[{ required: true }]}
                >
                  <Input placeholder="Address..." />
                </Form.Item>
              </Col>
              <Col span="8">
                <Form.Item
                  label="Experience"
                  name="experience"
                  rules={[{ required: true }]}
                >
                  <Input placeholder="Experience Year..." />
                </Form.Item>
              </Col>
            </Row>
            <hr className="hr-divider" />
            <h6>
              <i className="text-decoration-underline">Professional Info:</i>
            </h6>
            <Row gutter={20}>
              <Col span="8">
                <Form.Item
                  label="Specialization"
                  name="specialization"
                  rules={[{ required: true }]}
                >
                  <Input placeholder="Ex- Orthopedic, Pediatric, etc" />
                </Form.Item>
              </Col>
              <Col span="8">
                <Form.Item
                  label="Fees"
                  name="consaltancyFees"
                  rules={[{ required: true }]}
                >
                  <Input placeholder="consultancyFees" />
                </Form.Item>
              </Col>
              <Col span="8">
                <Form.Item
                  label="Timing"
                  name="timing"
                  rules={[{ required: true }]}
                >
                  <TimePicker.RangePicker />
                </Form.Item>
              </Col>
            </Row>
            <div>
              <Button type="primary" htmlType="submit">
                Apply
              </Button>
            </div>
          </Form>
        </DashboardLayout>
      </div>
    );
}
