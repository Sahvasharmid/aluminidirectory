import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DashboardLayout from '../../../components/DashboardLayout/DashboardLayout';
import style from "./EventList.module.css"
const CourseList = () => {
  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch events when the component mounts
    const fetchCourse = async () => {
      try {
        const response = await axios.get('https://aluminidirectorybackend.onrender.com/getcourse'); // Adjust the URL to your backend
        setCourse(response.data); // Set the events in state
        setLoading(false); // Stop loading
        console.log(course)
      } catch (err) {
        setError('Error fetching events');
        setLoading(false);
      }
    };

    fetchCourse();
  }, []); // Empty dependency array means this runs only once when the component mounts

  if (loading) {
    return <div>Loading events...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <DashboardLayout>
   <div className="container-fluid">
  <div className={`container pt-5 ${style.paddingcontainer}`}>
    <h4 className="text-center">Course List</h4>
    <div className="row">
      {course.map((course) => (
        <div key={course._id} className="col-md-4 mb-4">
          <div className={`card ${style.card}`}>
           
            <div className="card-body">
              <h5 className="card-title">{course.title}</h5>
              <p className="card-text">{course.description}</p>
              <p className="card-text"><strong>Duration:</strong> {course.duration}</p>
              <p className="card-text"><strong>instructor:</strong> {course.instructor}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

    </DashboardLayout>
  );
};

export default CourseList;
