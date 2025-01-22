import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DashboardLayout from '../../../components/DashboardLayout/DashboardLayout';
import style from './EventList.module.css';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch events when the component mounts
    const fetchEvents = async () => {
      try {
        const response = await axios.get('https://aluminidirectorybackend.onrender.com/getevents'); // Adjust the URL to your backend
        setEvents(response.data); // Set the events in state
        setLoading(false); // Stop loading
      } catch (err) {
        setError('Error fetching events');
        setLoading(false);
      }
    };

    fetchEvents();
  }, []); // Empty dependency array means this runs only once when the component mounts

  if (loading) {
    return <div>Loading events...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const cardColors = ["#534aaa", "#a8a3ce"]; // Colors to alternate between

  // Find the latest event by date
  const latestEvent = events.reduce((latest, event) => {
    const latestDate = latest ? new Date(latest.date) : new Date(0);
    const currentEventDate = new Date(event.date);
    return currentEventDate > latestDate ? event : latest;
  }, null);

  // Move the latest event to the top
  const reorderedEvents = latestEvent
    ? [latestEvent, ...events.filter((event) => event._id !== latestEvent._id)]
    : events;

  return (
    <DashboardLayout>
      <div className="container-fluid">
        <div className={`container pt-5 ${style.paddingcontainer}`}>
          <h4 className="text-center">Event List</h4>
          <div className={`row ${style.row}`}>
            {reorderedEvents.map((event, index) => (
              <div key={event._id} className={`col-md-4 mb-4 ${style.colmd}`}>
                <div
                  className={`card ${style.card}`}
                  style={{
                    backgroundColor: cardColors[index % cardColors.length], // Switch colors
                    color: "#fff", // Text color for contrast
                  }}
                >
                  {event._id === latestEvent?._id && (
                    <div
                      style={{
                        backgroundColor: "#FFD700",
                        color: "#000",
                        padding: "5px 10px",
                        fontWeight: "bold",
                        textAlign: "center",
                        position: "absolute",
                        top: "-10px",
                        left: "10px",
                        borderRadius: "4px",
                        fontSize: "14px",
                      }}
                    >
                      Latest
                    </div>
                  )}
                  <div className="card-body">
                    <h5 className="card-title">{event.title}</h5>
                    <p className="card-text">{event.description}</p>
                    <p className="card-text">
                      <strong>Location:</strong> {event.location}
                    </p>
                    <p className="card-text">
                      <strong>Date:</strong>{" "}
                      {new Date(event.date).toLocaleString()}
                    </p>
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

export default EventList;
