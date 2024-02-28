// Login.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear error message when the user starts typing
    setErrors({
      ...errors,
      [e.target.name]: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    const newErrors = {};
    if (formData.email.trim() === '') {
      newErrors.email = 'Email is required';
    }
    if (formData.password === '') {
      newErrors.password = 'Password is required';
    }

    if (Object.keys(newErrors).length === 0) {
      // If no errors, the data is correct
      alert('Login successful!');
      // You can send the data to your backend or perform further actions here
    } else {
      // If there are errors, update the state to display error messages
      setErrors(newErrors);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-3/12 mx-auto p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.email && <span className="text-xs text-red-500">{errors.email}</span>}
          </div>

          <div className="mb-4 relative">
            <label className="block text-sm font-medium text-gray-600">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.password && <span className="text-xs text-red-500">{errors.password}</span>}
            <Link to="/forgot-password" className="absolute top-0 right-0  mr-2 text-sm text-blue-500">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="bg-black w-full text-white py-2 px-4 rounded hover:bg-gray-800"
          >
            Login
          </button>

          <div className="mt-4 text-sm text-gray-600">
            Don't have an account? <Link to="/signup" className="text-blue-500">Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
