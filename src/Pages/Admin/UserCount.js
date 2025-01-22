import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './Usercount.module.css';
import Card from '../../components/card/Card';

const RegisteredUsersCount = () => {
  const [userCount, setUserCount] = useState(null);
  const [verifiedUserCount, setVerifiedUserCount] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Call the API to get the number of registered users
    const getRegisteredUsersCount = async () => {
      try {
        const response = await axios.get('https://aluminidirectorybackend.onrender.com/getregistereduser');  // Adjust the URL to your backend API endpoint
        setUserCount(response.data.userCount);
        setVerifiedUserCount(response.data.verifiedUserCount);
      } catch (err) {
        setError('Error fetching user count');
        console.error('Error fetching user count:', err);
      }
    };

    getRegisteredUsersCount();
  }, []);  // Empty array ensures this runs once when the component mounts

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={`container mt-4 mb-4 d-flex justify-content-center align-items-center ${style.container}`} style={{ gap: "20px" }}>
      <Card title="Total Registered Users" count={userCount} />
      <Card title="Total Verified Users" count={verifiedUserCount} />
    </div>
  );
};

export default RegisteredUsersCount;
