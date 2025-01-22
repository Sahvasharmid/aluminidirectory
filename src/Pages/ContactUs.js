import React from 'react'
import Layout from '../components/Layout/Layout'
import { useState } from 'react';
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
    console.log(formData);
  };

  return (
    <div>
        <Layout>
      <div className='container-fluid' style={{paddingTop:"5rem"}}>
        <div className='container'>
        

    <div className="container my-4" style={{width:"50%"}}>
      <h2 className="text-center mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            id="message"
            rows="4"
            placeholder="Enter your message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn w-100 mt-5" style={{backgroundColor:"var(--secondary-color)"}}>
          Submit
        </button>
      </form>
    
           </div></div></div>
</Layout>
</div>
    
  )}
export default ContactUs