import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className="brand-container">
                <Link className="brand-logo" to="/">
                    {/* <img src={Logo} alt="Logo" /> */}
                    YourBlogCoach
                </Link>
            </div>
            <div className="navbar-container">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/service">Services</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
