import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';
import logo from '../img/navbar_logo.png';

const Navbar = () => {
  return (
    <div>
      <header className="header">
        <div className="logo">
          {/* Use the imported 'logo' variable */}
          <img src={logo} alt="Logo" style={{ width: '100px', height: 'auto' }}/>
        </div>
        <nav className="nav">
          <Link className="navLink" to="/">Home</Link>
          <Link className="navLink" to="/about">About</Link>
          <Link className="navLink" to="/services">Services & Rates</Link>
          <Link className="navLink" to="/contact">Contact</Link>
          <Link className="navLink" to="https://neuralive.janeapp.com/locations/langford-bc-office/book#/staff_member/20">Book Online</Link>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;