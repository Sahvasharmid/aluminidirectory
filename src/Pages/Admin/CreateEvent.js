import React, { useState, useEffect } from "react";
import axios from "axios";
import style from './CreateEvent.module.css'
import EventTable from "../../components/Table/EventTable";
const EventManagement = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: "", description: "", location: "" });
  const [editEvent, setEditEvent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [editMode, setEditMode] = useState(false); // To distinguish between create and edit

  // Fetch events
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("https://aluminidirectorybackend.onrender.com/getevents");
        setEvents(response.data);
      } catch (err) {
        console.error("Error fetching events:", err);
      }
    };
    fetchEvents();
  }, []);

  // Handle create event
  const handleCreateEvent = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("https://aluminidirectorybackend.onrender.com/createevent", newEvent);
      setEvents([...events, response.data]);
      setNewEvent({ title: "", description: "", location: "" });
      setShowModal(false); // Close the modal after creating
    } catch (err) {
      console.error("Error creating event:", err);
    } finally {
      setLoading(false);
    }
  };

  // Handle edit event
  const handleEditEvent = (event) => {
    setEditEvent(event);
    setNewEvent({ title: event.title, description: event.description, location: event.location });
    setEditMode(true);
    setShowModal(true); // Open the modal in edit mode
  };

  // Handle update event
  const handleUpdateEvent = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.put(`https://aluminidirectorybackend.onrender.com/updateevent/${editEvent._id}`, newEvent);
      setEvents(events.map((event) => (event._id === editEvent._id ? response.data : event)));
      setEditEvent(null);
      setShowModal(false); // Close modal after update
    } catch (err) {
      console.error("Error updating event:", err);
    } finally {
      setLoading(false);
    }
  };

  // Handle delete event
  const handleDeleteEvent = async (eventId) => {
    setLoading(true);
    try {
      await axios.delete(`https://aluminidirectorybackend.onrender.com/deleteevent/${eventId}`);
      setEvents(events.filter((event) => event._id !== eventId));
    } catch (err) {
      console.error("Error deleting event:", err);
    } finally {
      setLoading(false);
    }
  };

  // Reset modal state for creating a new event
  const openCreateModal = () => {
    setNewEvent({ title: "", description: "", location: "" }); // Clear form fields
    setEditMode(false); // Set to create mode
    setShowModal(true); // Open the modal
  };

  return (
    <div className="container">
    

      {/* Button to open Create Event modal */}
      <button className="btn btn-primary" onClick={openCreateModal}>
        Create New Event
      </button>

      {/* Bootstrap Modal for Create/Edit Event */}
      <div
        className={`modal fade ${showModal ? "show" : ""}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden={!showModal}
        style={{ display: showModal ? "block" : "none" }} // Ensure modal is visible when state is true
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{editMode ? "Edit Event" : "Create Event"}</h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowModal(false)}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={editMode ? handleUpdateEvent : handleCreateEvent}>
                <div className="mb-3">
                  <label htmlFor="eventTitle" className="form-label">Event Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="eventTitle"
                    value={newEvent.title}
                    onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="eventDescription" className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    id="eventDescription"
                    rows="3"
                    value={newEvent.description}
                    onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                    required
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="eventLocation" className="form-label">Location</label>
                  <input
                    type="text"
                    className="form-control"
                    id="eventLocation"
                    value={newEvent.location}
                    onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                    required
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? "Saving..." : editMode ? "Update Event" : "Create Event"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Event List */}

      <div className="container mt-5">
  <h3>Event List</h3>
   <div className={`table-responsive ${style.tableresp}`}>
 <EventTable handleDeleteEvent={handleDeleteEvent} handleEditEvent={handleEditEvent} events={events}></EventTable>
  </div>
</div>

    </div>
  );
};

export default EventManagement;
