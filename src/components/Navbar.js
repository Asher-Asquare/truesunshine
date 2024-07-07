import React from 'react';
import './Navbar.css';
import my_logo from '../assets/my_logo_short.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={my_logo} alt='Logo' className='logo' />
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search..." />
        <div className="search-icon-container">
          <i className="fas fa-search"></i>
        </div>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <div className="dropdown-toggle">
              <i class="fa-solid fa-book-open"></i>
              <span>Education</span>
            </div>
          </li>
          <li>
            <div className="dropdown-toggle">
              <i class="fa-solid fa-user-tie"></i>
              <span>Teacher</span>
            </div>
          </li>
          <li>
            <div className="dropdown-toggle">
              <i class="fa-regular fa-images"></i>
              <span>Gallery</span>
            </div>
          </li>
          <li>
            <div className="dropdown-toggle">
              <i class="fa-solid fa-id-card"></i>
              <span>Contact</span>
            </div>
          </li>
          <li className="dropdown">
            <div className="dropdown-toggle">
              <i className="fas fa-user"></i>
              <span>Sign In</span>
            </div>
            <div className="dropdown-content">
              <a href="/login">Login</a>
              <a href="/register">Register</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
