import React from 'react'

const EventTable = ({handleDeleteEvent,handleEditEvent,events}) => {
  return (
    <>
   
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Location</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={event._id}>
              <th scope="row">{index + 1}</th>
              <td>{event.title}</td>
              <td>{event.description}</td>
              <td>{event.location}</td>
              <td style={{display:"flex"}}>
                <button className="btn btn-warning btn-sm" onClick={() => handleEditEvent(event)}>
                  Edit
                </button>
                <button className="btn btn-danger btn-sm ms-2" onClick={() => handleDeleteEvent(event._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </>
  )
}

export default EventTable