import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("getting user DAta", event.target.name.value);
  };
  return (
    <div className="container">
      <div className="reg-form d-flex justify-content-center align-items-center vh-100">
        <Form
          onSubmit={handleSubmit}
          className="w-50 border border-2 border-success p-4 rounded"
        >
          <h2 className="text-center text-success text-decoration-underline">
            Login
          </h2>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
            />
          </Form.Group>
          <Button variant="success" type="submit">
            Login
          </Button>
          <div>
            <p className="mt-2">
              Haven't Registered?<Link to="/register" className="text-success">Register Here</Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}
