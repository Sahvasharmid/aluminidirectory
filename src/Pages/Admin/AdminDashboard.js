import React, { useState, useEffect } from "react";


import EventManagement from "./CreateEvent";
import RegisteredUsersCount from "./UserCount";
import  style from './AdminDash.module.css'
import CourseManagement from "./CreateCourse";
import DashboardLayout from "../../components/DashboardLayout/DashboardLayout";
const AdminDashboard = () => {
  const [cardsData, setCardsData] = useState([]);

  // Simulating a backend API call to fetch data
  useEffect(() => {
    const fetchData = async () => {
    
        setCardsData([
          {
            title: "Upcoming Events",
            content: "Explore upcoming webinars, meetups, and reunions.",
            buttonLabel: "View All Events",
           link:"events"
          },
          {
            title: "Featured Courses",
            content: "Browse trending courses and enhance your skills.",
            buttonLabel: "Explore Courses",
            link: "course",
          },
          {
            title: "Job Opportunities",
            content: "Find job postings and apply for exciting positions.",
            buttonLabel: "Browse Jobs",
            buttonLink: "#",
          },
          {
            title: "Alumni Requests",
            content: "Support fellow alumni through mentorship or collaboration.",
            buttonLabel: "View Requests",
            buttonLink: "#",
          },
          {
            title: "Recent News",
            content: "Stay updated with the latest news and announcements.",
            buttonLabel: "Read All News",
            buttonLink: "#",
          },
          {
            title: "Notable Achievements",
            content: "Celebrate the accomplishments of our alumni community.",
            buttonLabel: "View Achievements",
            buttonLink: "#",
          },
        ]);
      
    };

    fetchData();
  }, []);

  return (
    <DashboardLayout>
     
    <div className={`container-fluid pt-5  ${style.paddingcontainer}`}>
      <h2 className="mb-4 text-center mt-3">Admin Dashboard</h2>
      <div className="row">
        <RegisteredUsersCount></RegisteredUsersCount>
      <EventManagement></EventManagement>
      <CourseManagement></CourseManagement>
      </div>
    </div>
  </DashboardLayout>
  );
};

export default AdminDashboard;
