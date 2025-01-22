import React from 'react';
import { Link } from 'react-router-dom';
import style from './Footer.module.css';
import { HashLink } from 'react-router-hash-link';
import {FaPhone,FaEnvelope,FaMapMarkerAlt} from 'react-icons/fa'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; 
const Footer = () => {
  const navLinks = [
    { name: 'Home', href: '/aluminidirectory/#home' },
    { name: 'About us', href: '/aluminidirectory/about/#about' },
    { name: 'aluminibenefits', href: '/aluminidirectory/#join' },
    { name: 'membership', href: '/aluminidirectory/membership/#membership' },
 
  ];

  const categories = [
    'Body Building',
    'Basic Yoga',
    'Strength Training',
    'Weight Loss',
    'Health Checkup',
    'Diet Plan',
  ];

  return (
    <div className={`${style.footer} container-fluid p-4`}>
      <div className="container">
        <div className="row">
          {/* Footer Brand */}
          <div className="col-12 col-md-3 d-flex flex-column align-items-start mb-4 mb-md-0">
            <div className="sec">
              <div className="image" style={{ height: '50px' }}>
                <Link to="/aluminidirectory/#home" className={`${style.footerbrand}`}>
                  <img
                    src="https://mesalumni.org/wp-content/uploads/2021/09/New-Image.png"
                    alt="Logo"
                  />
                </Link>
              </div>
              {/* Join Us Button */}
              <button
                type="button"
                className="btn primarybtn mt-3 ms-0"
                data-bs-toggle="modal"
                data-bs-target="#joinUsModal"
                style={{
                  backgroundColor: 'var(--secondary-color)',
                  color: 'white',
                  fontWeight: '700',
                  fontSize: '14px',
                  marginLeft: '0',
                }}
              >
                Join MES Alumni
              </button>
            </div>

            {/* Social Links */}
            
          
          </div>

          {/* Quick Links */}
          <div className="col-12 col-md-3 mb-4 mb-md-0">
            <h5 style={{ paddingBottom: '10px' }}>Quick Links</h5>
            <ul style={{ padding: 0 }}>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <HashLink smooth to={link.href}>
                    {link.name}
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>

          

          <div className="col-12 col-md-3  mb-4 mb-md-0">
      <h5 style={{ paddingBottom: '10px' }}>Contact Us</h5>
      
      {/* Contact Item 1 */}
      <div className="contactItem d-flex align-items-center mb-3">
        <FaPhone style={{ marginRight: '10px', fontSize: '15px' }} />
        <p className="mb-0" style={{ fontSize: '12px' }}>+1 234 567 890</p>
      </div>

      {/* Contact Item 2 */}
      <div className="contactItem d-flex align-items-center mb-3">
        <FaPhone style={{ marginRight: '10px', fontSize: '15px' }} />
        <p className="mb-0" style={{ fontSize: '12px' }}>+1 234 567 890</p>
      </div>

      {/* Contact Item 3 */}
      <div className="contactItem d-flex align-items-center mb-3">
        <FaEnvelope style={{ marginRight: '10px', fontSize: '15px' }} />
        <p className="mb-0" style={{ fontSize: '12px' }}>info@example.com</p>
      </div>

      {/* Contact Item 4 */}
      <div className="contactItem d-flex align-items-center">
        <FaMapMarkerAlt style={{ marginRight: '10px', fontSize: '15px' }} />
        <p className="mb-0" style={{ fontSize: '12px' }}>123 Main Street</p>
      </div>
    </div>
    {/* Categories */}
    <div className="col-12 col-md-3 mb-4 mb-md-0">
      <h5 style={{ paddingBottom: '10px' }}>Follow Us</h5>
      <ul style={{ padding: 0, listStyleType: 'none' }}>
        <li style={{ marginBottom: '10px' }}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black' }}>
            <FaFacebook size={24} style={{ marginRight: '10px' }} />
            Facebook
          </a>
        </li>
        <li style={{ marginBottom: '10px' }}>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black' }}>
            <FaTwitter size={24} style={{ marginRight: '10px' }} />
            Twitter
          </a>
        </li>
        <li style={{ marginBottom: '10px' }}>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black' }}>
            <FaInstagram size={24} style={{ marginRight: '10px' }} />
            Instagram
          </a>
        </li>
        <li style={{ marginBottom: '10px' }}>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black' }}>
            <FaLinkedin size={24} style={{ marginRight: '10px' }} />
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
    </div>
        <div className={style.divider}></div>
      </div>

      <p className="pt-3 pb-3 text-center">
        Copyright © 2024 www.mesalumini.com . All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
