import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Navbar = () => {
  return (
    <div>
      <header className="header">
        <div className="logo">RH Counselling</div>
        <nav className="nav">
          <Link className="navLink" to="/">Home</Link>
          <Link className="navLink" to="/about">About</Link>
          <Link className="navLink" to="/services">Services & Rates</Link>
          <Link className="navLink" to="/contact">Contact</Link>
          <Link className="navLink" to="/book-online">Book Online</Link>
        </nav>
      </header>
      </div>
  );
}


export default Navbar;
