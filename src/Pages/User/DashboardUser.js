import React, { useState, useEffect } from "react";
import DashboardLayout from "../../components/DashboardLayout/DashboardLayout";
import { Link } from "react-router-dom";
import style from './DashboardUser.module.css';

const DashboardUser = () => {
  const [cardsData, setCardsData] = useState([]);

  // Simulating a backend API call to fetch data
  useEffect(() => {
    const fetchData = async () => {
      setCardsData([
        {
          title: "Upcoming Events",
          content: "Explore upcoming webinars, meetups, and reunions.",
          buttonLabel: "View All Events",
          link: "events",
        },
        {
          title: "Featured Courses",
          content: "Browse trending courses and enhance your skills.",
          buttonLabel: "Explore Courses",
          link: "course",
        },
        {
          title: "Job Opportunities",
          content: "Will post later, currently unavailable",
        },
        {
          title: "Alumni Requests",
          content: "Will post later, currently unavailable",
        },
        {
          title: "Recent News",
          content: " Browse trending jobs and enhance your skills,Will post later, currently unavailable",
        },
        {
          title: "Notable Achievements",
          content: "Will post later, currently unavailable",
        },
      ]);
    };

    fetchData();
  }, []);

  const cardColors = [
    "#FFD700", 
    "#FF5733", 
    "#28B463",
    "#5DADE2", 
    "#AF7AC5", 
    "#F39C12", 
  ];

  return (
    <DashboardLayout>
      <div className={`container-fluid pt-5 ${style.paddingcontainer}`}>
        <h2 className="mb-4 text-center mt-3">Alumni Dashboard</h2>
        <div className="row">
          {cardsData.map((card, index) => (
            <div className="col-md-4 mb-4 col-12" key={index}>
              <div
                className="card shadow-sm h-100"
                style={{
                  backgroundColor: cardColors[index % cardColors.length], // Assign color dynamically
                  color: "#fff", // Set text color to white for better contrast
                }}
              >
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.content}</p>
                  {/* Conditionally render the Link component */}
                  {card.link && (
                    <Link to={`/dashboard/user/${card.link}`}>Click to view</Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardUser;
