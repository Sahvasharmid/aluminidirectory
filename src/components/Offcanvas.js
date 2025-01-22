import React from 'react'
import {Link} from 'react-router-dom'
import style from './Offcanvas.module.css'
const Offcanvas = ({link,profilelink,members}) => {
  return (
  
<div className="offcanvas offcanvas-start sidebar-nav" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style={{backgroundColor:"var(--card-color)"}}>
  <div className="offcanvas-header">
    <button type="button" className="btn-close text-reset  d-lg-none"  style={{
   
  }}   data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
          <ul className="list-unstyled">
            <li>
              <Link to={link} className={`d-block py-2 px-3 text-decoration-none ${style.Offcanvaslink}`}>
               Dashboard
              </Link>
            </li>

            <li>
              <Link to={members} className={`d-block py-2 px-3 text-decoration-none ${style.Offcanvaslink}`}>
                Members
              </Link>
            </li>
            <li>
              <Link to={profilelink} className={`d-block py-2 px-3 text-decoration-none ${style.Offcanvaslink}`}>
              settings
              </Link>
            </li>
          </ul>
        </div>
</div>
    
  )
}

export default Offcanvas