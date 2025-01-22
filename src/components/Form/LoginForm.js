import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContextProvider } from '../../utils/AuthContext';
import style from './Joinus.module.css'; // Import the same CSS module for consistent styling

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const { setAuth } = useContext(AuthContextProvider);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://aluminidirectorybackend.onrender.com/login', formData);
      console.log('Login response:', response);

      if (response.status === 200) {
        console.log('Sign-in successful');

        // Set Auth context
        setAuth({ user: response.data.loginresult, token: response.data.token });

        // Store token and user in localStorage
        localStorage.setItem('auth', JSON.stringify(response.data));

        // Set authorization header for future requests
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        const role = response.data.loginresult.role; // Assuming role is part of the response
        if (role === "admin") {
          navigate("aluminidirectory/admindashboard/admin", { replace: true });
        } else {
          navigate("aluminidirectory/dashboard/user", { replace: true });
        }
      }
    } catch (error) {
      console.error('Login error:', error);
      
      setError(error.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  return (
    <>
         {error && <div className="alert alert-danger text-center">{error}</div>}
    <div className="d-flex justify-content-center align-items-center  mb-3" style={{ height: '60vh' }}>
        
      <form onSubmit={handleSubmit} style={{width:"25rem"}}>
        <div className="mb-3">
        <label htmlFor="Email" className="form-label">
              Email
              </label>
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
     

            {/* Password Input */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className={`form-control ${style.pillinput}`} // Apply the pill shape style
                id="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {/* Submit Button */}
            <div className="d-grid">
               <button
                       type="submit"
                       className="btn primarybtn"
                       style={{
                         width: '100%',
                         backgroundColor: 'var(--secondary-color)',
                         borderRadius: '50px',
                       }}
                     >
                       Login
                     </button>
            </div>
          </form>
     
          </div>
      
    </>
  
  );
};

export default LoginForm;
