import { Button, Col, Form, Input, Row, TimePicker } from 'antd';
import dayjs from 'dayjs';
import moment from 'moment';
import React from 'react';

export default function TherapistForm({onFinish,initialValues}) {
  return (
    <div>
      <Form
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          ...initialValues,
          ...(initialValues && {
            timing: [
              dayjs(initialValues.timing[0], "HH:mm"),
              dayjs(initialValues.timing[1], "HH:mm"),
            ],
          }),
        }}
      >
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
            <Form.Item label="Phone" name="phone" rules={[{ required: true }]}>
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
              <TimePicker.RangePicker format="HH:mm" />
            </Form.Item>
          </Col>
        </Row>
        <div>
          <Button type="primary" htmlType="submit">
            Apply
          </Button>
        </div>
      </Form>
    </div>
  );
}
