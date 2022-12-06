import { Col, Form, Input, Row, TimePicker} from 'antd';
import React from 'react';
import DashboardLayout from './DashboardLayout';

export default function ApplyTherapist() {
  const handleSubmit = async(event) => {
    event.preventDefault();
    const time = event.target.timing.value
    console.log("success",time);
  }
    return (
      <div>
        <DashboardLayout>
          <div>
            <h4 className="text-center mb-3 text-danger">
              Apply as a Therapist
            </h4>
            <hr />
          </div>
          <Form layout="vertical">
            <h6>Personal Info:</h6>
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
                  label="Email"
                  name="email"
                  rules={[{ required: true }]}
                >
                  <Input placeholder="First Name..." />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span="8">
                <Form.Item
                  label="Phone"
                  name="Phone"
                  rules={[{ required: true }]}
                >
                  <Input placeholder="Phone Number..." />
                </Form.Item>
              </Col>
              <Col span="8">
                <Form.Item
                  label="Address"
                  name="adress"
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
            <hr />
            <h6>Professional Info:</h6>
            <Row gutter={20}>
              <Col span="8">
                <Form.Item
                  label="Specialization"
                  name="Specialization"
                  rules={[{ required: true }]}
                >
                  <Input placeholder="..." />
                </Form.Item>
              </Col>
              <Col span="8">
                <Form.Item
                  label="Fees"
                  name="consultancyFees"
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
          </Form>
        </DashboardLayout>
      </div>
    );
}
