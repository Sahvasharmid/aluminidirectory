import React from 'react'

const AluminiCard = ({currentMembers,cardColors}) => {

  return (

    <>
    
      {/* Non-Admin Card View */}
              <div className="row mt-3">
                {currentMembers.length > 0 ? (
                  currentMembers.map((member,index) => (
                    
                    <div key={member._id} className="col-md-4 mb-3">
                      <div className="card h-100" >
                       <div className='img1'>
                       <div
                          style={{height:"100px",width:"100%",   backgroundColor: cardColors[index % cardColors.length],
     }}
    
                        />
                       </div>
                        <div className='text-center img2'>
    
                        <img
                          src={`https://aluminidirectorybackend.onrender.com/members/photo/${member._id}`}
                          className="card-img-top"
                          alt={member.name}
                          style={{ height: "125px", width:"125px", objectFit: "cover",borderRadius:"50%",border:"5px solid white",position:"relative" ,marginLeft:"auto",marginRight:"auto",zIndex:"1",marginTop:"-60px"}}  /></div>
                        <div className="card-body" style={{backgroundColor:"white"}}>
                          <h5 className="card-title text-center">{member.name}</h5>
                          <p className="card-text">
                            Qualification: {member.qualification}
                          </p>
                          <p className="card-text">
                            Year: {member.passoutyear}
                          </p>
                          <p className="card-text">
                            Phone: {member.phoneno}
                          </p>
                          <p className="card-text">
                            Address: {member.address}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-12 text-center">
                    <p>No results found</p>
                  </div>
                )}
              </div>
            </>
    
  )}


export default AluminiCard