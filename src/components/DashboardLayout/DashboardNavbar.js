import React from 'react';
import { Link } from 'react-router-dom';
import {  AuthContextProvider } from '../../utils/AuthContext';
import style from './DashbarNavbar.module.css';
import Offcanvas from '../Offcanvas';
import { useContext } from 'react';
const DashboardNavbar = ({link,profilelink,members}) => {
  const { logout ,auth} = useContext(AuthContextProvider);

  return (
    <nav className={`navbar navbar-expand-lg`}>
      <div className={`container-fluid ${style.navcontainer} p-2`}>
        {/* Offcanvas Toggle Button */}
        <button
  className="navbar-toggler me-2"
  type="button"
  data-bs-toggle="offcanvas"
  data-bs-target="#offcanvasExample"
  aria-controls="offcanvasExample"
  aria-label="Toggle navigation"
>
<span className="navbar-toggler-icon" style={{ backgroundImage: `url("data:image/svg+xml;charset=UTF8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba%280, 0, 0, 0.5%29' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E")` }}></span>

</button>


        {/* Logo */}
        <Link to={auth?.user.role=== 'admin' ? '/admindashboard/admin' : '/dashboard/user'} className={`navbar-brand`}>
    <img
      src="https://mesalumni.org/wp-content/uploads/2021/09/mesalumni_white@4x.png"
      alt="Logo"
      style={{ height: '40px' }}
    />
  </Link>

        {/* Spacer for alignment */}
        <div className="flex-grow-1"></div>

        {/* Navbar Buttons */}
        <div className="logout">
        
          <button onClick={logout} className="btn btn-danger">
            Logout
          </button>
        </div>
      </div>

      {/* Offcanvas Sidebar */}
      <Offcanvas members={members} link={link} profilelink={profilelink} />
    </nav>
  );
};

export default DashboardNavbar;
