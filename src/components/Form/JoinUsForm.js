import React, { useState } from 'react';
import axios from 'axios'; // Add axios import
import style from './Joinus.module.css';

const AlumniRegisterForm = () => {
  const initialFormState = {
    name: '',
    email: '',
    phoneno: '',
    password: '',
    qualification: '',
    passoutyear: '',
    address: '',
  };
  // States to store form data
  const [formData, setFormData] = useState(initialFormState);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }; // Close the curly brace here

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://aluminidirectorybackend.onrender.com/register', formData);
    
      if (response.data.success) {
        alert('Registration successful!');
        setFormData(initialFormState); // Reset form after successful submission
      } else {
        alert(response.data.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An error occurred. Please try again.');
    }
  };


  return (
    <div className="container p-3">
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-4">
          <input
            type="text"
            className={`form-control ${style.pillinput}`}
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <input
            type="email"
            className={`form-control ${style.pillinput}`}
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <input
            type="text"
            className={`form-control ${style.pillinput}`}
            id="phoneno"
            name="phoneno"
            placeholder="Enter your phone number"
            value={formData.phoneno}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <input
            type="password"
            className={`form-control ${style.pillinput}`}
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {/* Qualification */}
        <div className="mb-4">
          <input
            type="text"
            className={`form-control ${style.pillinput}`}
            id="qualification"
            name="qualification"
            placeholder="Enter your qualification (e.g., B.Sc., M.Tech.)"
            value={formData.qualification}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            className={`form-control ${style.pillinput}`}
            id="address"
            name="address"
            placeholder="Enter your address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        {/* Pass-out Year */}
        <div className="mb-4">
          <select
            className={`form-select ${style.pillinput}`}
            id="passoutyear"
            name="passoutyear"
            value={formData.passoutyear}
            onChange={handleChange}
            required
          >
            <option value="">Select Pass-out Year</option>
            {Array.from({ length: 30 }, (_, i) => {
              const year = new Date().getFullYear() - i;
              return (
                <option key={year} value={year}>
                  {year}
                </option>
              );
            })}
          </select>
        </div>

        {/* Submit Button */}
        <div className="pt-3 pb-3">
          <button
            type="submit"
            className="btn primarybtn"
            style={{
              width: '100%',
              backgroundColor: 'var(--secondary-color)',
              borderRadius: '50px',
            }}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default AlumniRegisterForm;
