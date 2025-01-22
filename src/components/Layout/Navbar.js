import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from './Navbar.module.css';
import JoinUsForm from '../Form/JoinUsForm';
import LoginForm from '../Form/LoginForm';
import BootstrapModal from '../Modal/Modal';
import { AuthContextProvider } from '../../utils/AuthContext';

const Navbar = () => {
  const {isRegistered, setIsRegistered} =useContext(AuthContextProvider) // Toggle between forms
  const navigate = useNavigate(); // For navigation after login

  const handleLogin = () => {
    setIsRegistered(true);
    navigate('/dashboard');
  };

  const navLinks = [
    { id: '/aluminidirectory', text: 'Home' },
    { id: '/about', text: 'About Us' },
    { id: '/membership', text: 'Membership' },
   
    { id: '/contact', text: 'Contact Us' },
  ];

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-light`}>
        <div className={`container-fluid ${style.navcontainer}`}>
          <Link
            to="#home"
            className={`navbar-brand flex-grow-1 ms-lg-5 ${style.navbarbrand} ${style.navbar}`}
          >
            <img
              src="https://mesalumni.org/wp-content/uploads/2021/09/mesalumni_white@4x.png"
              alt="Logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {navLinks.map((link) => (
                <li className="nav-item" key={link.id}>
                  <Link
                    to={`${link.id}`}
                    className={`nav-link active ${style.navlink}`}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="navbar-btn ms-lg-3">
              {/* Button to trigger modal */}
              <button
                type="button"
                className="btn primarybtn me-lg-5"
                data-bs-toggle="modal"
                data-bs-target="#joinUsModal"
                style={{
                  backgroundColor: 'var(--secondary-color)',
                  color: 'white',
                  fontWeight: '700',
                  fontSize: '14px',
                }}
              >
                Join MES Alumni
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Modal for Registration/Login */}
      <BootstrapModal
        id="joinUsModal"
        title={!isRegistered ? 'JOIN US' : 'LOGIN'}
      >
        {!isRegistered ? (
          <>
            <JoinUsForm />
            <div
              className="d-flex"
              style={{ justifyContent: 'center', gap: '10px' }}
            >
              Already registered?
              <Link
                to="#"
                className="text-primary"
                onClick={() => setIsRegistered(true)}
              >
                Login here
              </Link>
            </div>
          </>
        ) : (
          <>
            <LoginForm onSubmit={handleLogin} />
            <div
              className="d-flex"
              style={{ justifyContent: 'center', gap: '10px' }}
            >
              Not registered yet?
              <Link
                to="#"
                className="text-primary"
                onClick={() => setIsRegistered(false)}
              >
                Join us
              </Link>
            </div>
          </>
        )}
      </BootstrapModal>
    </>
  );
};

export default Navbar;
