import React from 'react';
import {Button, Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

export default function Registration() {
    // const handleSubmit = (event) => {
    //   event.preventDefault();
    //   console.log("getting user DAta", event);
    // }
    const handleSubmit = async(event) => {
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
        const response = await axios.post('/api/user/register', regObj);
        if(response.data.success){
          toast.success(response.data.message)
        }
      } catch (error) {
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
