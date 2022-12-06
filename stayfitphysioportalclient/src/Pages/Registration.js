import React from 'react';
import {Button, Form} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { hideLoading, showLoading } from '../Redux/alertReducers';

export default function Registration() {
   const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = async(event) => {
      event.preventDefault();
      try {
        dispatch(showLoading());
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const regObj = {
          name: name,
          email: email,
          pass: password,
        };
        
        //sending form value using axios post method
        const response = await axios.post('/api/user/register', regObj);
        dispatch(hideLoading());
        if(response.data.success){
          toast.success(response.data.message);
          event.target.reset();
          //navigating to login
          toast.success("Redirecting to Login");
          navigate('/login');
        }else {
          dispatch(hideLoading());
          toast.error(response.data.message);
        }
      } catch (error) {
        dispatch(hideLoading());
        toast.error("Something Went Wrong!")
      }
    }
    return (
      <div className="container">
        <div className="reg-form d-flex justify-content-center align-items-center vh-100">
          <Form onSubmit={handleSubmit} className="w-50 border border-2 border-primary p-4 rounded">
            <h2 className="text-center text-primary text-decoration-underline">
              Registration
            </h2>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your Name" name="name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Register
            </Button>
            <div>
              <p className='mt-2'>
                Already Registered? <Link to="/login">Login Here</Link>
              </p>
            </div>
          </Form>
        </div>
      </div>
    );
}
