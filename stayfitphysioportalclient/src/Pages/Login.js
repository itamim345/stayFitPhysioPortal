import axios from "axios";
import React from "react";
import { Button, Form } from "react-bootstrap";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { hideLoading, showLoading } from "../Redux/alertReducers";

export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      dispatch(showLoading())
      const name = event.target.name.value;
      const email = event.target.email.value;
      const password = event.target.password.value;
      const regObj = {
        name: name,
        email: email,
        pass: password,
      };

      //sending form value using axios post method
      const response = await axios.post("/api/user/login", regObj);
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        event.target.reset();
        //navigating to login
        toast.success("Redirecting dashboard");
        localStorage.setItem("token", response.data.data);
        navigate("/dashboard");
      }else{
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading()); 
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
            <Form.Control type="email" placeholder="Enter email" name="email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              required
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
