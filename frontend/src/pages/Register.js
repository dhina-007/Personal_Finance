import React, { useState, useEffect } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import "../index.css";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitHandler = async (values) => {
    setLoading(true);

    // Mock registration logic
    setTimeout(() => {
      setLoading(false);
      message.success("Registration successful");

      // Store mock user data
      const mockUser = { name: values.name, email: values.email };
      localStorage.setItem("user", JSON.stringify(mockUser));

      // Redirect to the login page
      navigate("/login");
    }, 1000);
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="register-page">
      <h1 className="page-heading">Expense Tracker</h1>
      {loading && <Spinner />}
      <Form layout="vertical" onFinish={submitHandler} className="register-form">
        <h1>Register Form</h1>
        <Form.Item label="Name" name="name" rules={[{ required: true, message: "Please enter your name" }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Email" name="email" rules={[{ required: true, message: "Please enter your email" }]}>
          <Input type="email" />
        </Form.Item>
        <Form.Item label="Password" name="password" rules={[{ required: true, message: "Please enter your password" }]}>
          <Input type="password" />
        </Form.Item>
        <button className="btn btn-primary" type="submit">
          Register
        </button>
        <Link to="/login" className="link">
          Already Registered? Click here to Login
        </Link>
      </Form>
    </div>
  );
};

export default Register;
