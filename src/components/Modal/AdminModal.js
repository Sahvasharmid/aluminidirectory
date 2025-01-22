import React from 'react'

const AdminModal = ({editAlumni,setShowModal,setEditAlumni,setNewAlumni,newAlumni,handleAddAlumni,handleSaveEdit}) => {
  return (
    <div>
         <div className="modal show" style={{ display: 'block' }}>
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">{editAlumni ? 'Edit Alumni' : 'Add New Alumni'}</h5>
                      <button className="close" onClick={() => setShowModal(false)}>
                        &times;
                      </button>
                    </div>
                    <div className="modal-body">
                      <div className="form-group">
                        <label>Name</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter name"
                          value={editAlumni ? editAlumni.name : newAlumni.name}
                          onChange={(e) =>
                            editAlumni
                              ? setEditAlumni({ ...editAlumni, name: e.target.value })
                              : setNewAlumni({ ...newAlumni, name: e.target.value })
                          }
                        />
                      </div>
                      <div className="form-group mt-2">
                        <label>Email</label>
                        <input
                          className="form-control"
                          type="email"
                          placeholder="Enter email"
                          value={editAlumni ? editAlumni.email : newAlumni.email}
                          onChange={(e) =>
                            editAlumni
                              ? setEditAlumni({ ...editAlumni, email: e.target.value })
                              : setNewAlumni({ ...newAlumni, email: e.target.value })
                          }
                        />
                      </div>
                      <div className="form-group mt-2">
                        <label>Graduation Year</label>
                        <input
                          className="form-control"
                          type="number"
                          placeholder="Enter graduation year"
                          value={editAlumni ? editAlumni.year : newAlumni.year}
                          onChange={(e) =>
                            editAlumni
                              ? setEditAlumni({ ...editAlumni, passoutyear: e.target.value })
                              : setNewAlumni({ ...newAlumni, passoutyear: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
                        Close
                      </button>
                      <button
                        className="btn btn-primary"
                        onClick={editAlumni ? handleSaveEdit : handleAddAlumni}
                      >
                        {editAlumni ? 'Save Changes' : 'Add Alumni'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default AdminModal