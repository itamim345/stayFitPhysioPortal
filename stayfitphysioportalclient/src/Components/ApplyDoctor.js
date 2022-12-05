import { TimePicker } from 'antd';
import React from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import DashboardLayout from './DashboardLayout';

export default function ApplyDoctor() {
    return (
      <div>
        <DashboardLayout>
          <h2 className="text-center mb-3 text-danger">Apply as a Doctor</h2>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridFname">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First Name..."
                  size="sm"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLname">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last Name..."
                  size="sm"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email Address..."
                  size="sm"
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Phone Number..."
                  size="sm"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridAddress2">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  placeholder="Apartment, street, or floor"
                  size="sm"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridExperience">
                <Form.Label>Experience</Form.Label>
                <Form.Control placeholder="Experience Year" size="sm" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridSpeciality">
                <Form.Label>Specialization</Form.Label>
                <Form.Select defaultValue="Choose..." size="sm">
                  <option>Choose...</option>
                  <option>Neurological</option>
                  <option>Orthopedic</option>
                  <option>Pediatric</option>
                  <option>Geriatric</option>
                  <option>VRT Therapist</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridFees">
                <Form.Label>Fees</Form.Label>
                <Form.Control placeholder="Consultancy Fees" size="sm" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridTiming">
                <Form.Label>Timing</Form.Label>
                <TimePicker.RangePicker />
              </Form.Group>
            </Row>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </DashboardLayout>
      </div>
    );
}
