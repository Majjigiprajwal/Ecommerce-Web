// SignUp.js

import React, { useState } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
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
    if (formData.name.trim() === '') {
      newErrors.name = 'Name is required';
    }
    if (formData.email.trim() === '') {
      newErrors.email = 'Email is required';
    }
    if (formData.password === '') {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(newErrors).length === 0) {
      // If no errors, the data is correct
      alert('Sign-up successful!');
      // You can send the data to your backend or perform further actions here
    } else {
      // If there are errors, update the state to display error messages
      setErrors(newErrors);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
    <div className=" w-3/12 mx-auto p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.name && <span className="text-xs text-red-500">{errors.name}</span>}
        </div>

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

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.password && <span className="text-xs text-red-500">{errors.password}</span>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.confirmPassword && (
            <span className="text-xs text-red-500">{errors.confirmPassword}</span>
          )}
        </div>

        <button
          type="submit"
          className="bg-black w-full text-white py-2 px-4 rounded hover:bg-gray-800"
        >
          Sign Up
        </button>
      </form>
    </div>
    </div>
  );
};

export default SignUp;
