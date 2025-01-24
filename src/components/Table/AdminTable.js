import React from 'react'
import style from './Table.module.css'

const AdminTable = ({currentMembers,handleDeleteAlumni,handleEditAlumni,handleVerificationToggle}) => {
  return (
    <>
       <div className={` ${style.tableresponsive}`}>
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Photo</th>
                      <th>Name</th>
                      <th>Qualification</th>
                      <th>Year</th>
                      <th>Phone No</th>
                      <th>Address</th>
                      <th>Actions</th>
                      <th>Verify</th>
                     
                    </tr>
                  </thead>
                  <tbody>
                    {currentMembers.length > 0 ? (
                      currentMembers.map((member) => (
                        <tr key={member._id}>
                          <td>
                            <img
                              src={`https://aluminidirectorybackend.onrender.com/members/photo/${member._id}`}
                              className={style.photoround}
                              alt="Member"
                              
                            />
                          </td>
                          <td>{member.name}</td>
                          <td>{member.qualification}</td>
                          <td>{member.passoutyear}</td>
                          <td>{member.phoneno}</td>
                          <td>{member.address}</td>
                        
                          <td>
                            <button
                              className={`btn ${member.isVerified ? 'btn-success' : 'btn-warning'}`}
                              onClick={() => handleVerificationToggle(member._id, !member.isVerified)}
                            >
                              {member.isVerified ? 'Verified' : 'Unverified'}
                            </button>
                          </td>
                          <td>
    
    <button
      className="btn btn-info btn-sm"
      onClick={() => handleEditAlumni(member._id)}
      style={{marginRight:"5px",padding:"8px 20px"}}
    >
      Edit
    </button>
    <button
      className="btn btn-danger btn-sm"
      onClick={() => handleDeleteAlumni(member._id)}
      style={{marginRight:"5px",padding:"8px 20px"}}
    >
      Delete
    </button>
    </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="8" className="text-center">
                          No results found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
    </>
  )
}

export default AdminTable