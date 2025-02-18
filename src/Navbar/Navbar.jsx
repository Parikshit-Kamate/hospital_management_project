import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Logo from '../Static/Logo.png';

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: '#f8f6f4', position: 'relative', zIndex: 1000 }}
      >
        <div className="container-fluid">

          <NavLink
            to="/"
            className="navbar-brand d-flex align-items-center"
            style={{ position: 'relative', zIndex: 1001 }}
          >
            <img
              src={Logo}
              alt="medical healthcare"
              height={70}
              width={170}
              style={{
                position: 'relative',
                zIndex: 1001
              }}
            />
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse w-50 me-4" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink
                  to="/home"
                  aria-current="page"
                  className="nav-link me-4"
                  style={{ color: '#5e5548' }}
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/appointment"
                  className="nav-link me-4"
                  style={{ color: '#5e5548' }}
                >
                  Appointment
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/doctors"
                  className="nav-link me-4"
                  style={{ color: '#5e5548' }}
                >
                  Doctors
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/about"
                  className="nav-link me-4"
                  style={{ color: '#5e5548' }}
                >
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className="nav-link me-4"
                  style={{ color: '#5e5548' }}
                >
                  Contact
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/services"
                  className="nav-link me-4"
                  style={{ color: '#5e5548' }}
                >
                  Services
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/administration"
                  className="nav-link me-4"
                  style={{ color: '#5e5548' }}
                >
                  Administration
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/enquiry"
                  className="nav-link me-4"
                  style={{ color: '#5e5548' }}
                >
                  Enquiry
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/enquirypatientdata"
                  className="nav-link me-4"
                  style={{ color: '#5e5548' }}
                >
                  Patient Enquiry
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </div>
  );
};

export default Navbar;
