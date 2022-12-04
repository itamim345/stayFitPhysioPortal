import axios from "axios";
import React from "react";
import { Button, Form } from "react-bootstrap";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const name = event.target.name.value;
      const email = event.target.email.value;
      const password = event.target.password.value;
      const regObj = {
        name: name,
        email: email,
        password: password,
      };

      //sending form value using axios post method
      const response = await axios.post("/api/user/login", regObj);
      if (response.data.success) {
        toast.success(response.data.message);
        event.target.reset();
        //navigating to login
        toast.success("Redirecting to Home Page");
        localStorage.setItem("token", response.data.data);
        navigate("/login");
      }
    } catch (error) {
      toast.error("Something Went Wrong!");
    }
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
