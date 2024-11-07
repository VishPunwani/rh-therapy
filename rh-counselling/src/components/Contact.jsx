import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';
import Navbar from './NavBar';

const ContactPage = () => {
  return (
    <div>

      <div className="container">
        <aside className="sidebar">
          <h3 className="sidebarTitle">Get in touch</h3>
          <p>We love to hear from you. Our friendly team is always here to chat.</p>
          <p><strong>I want to hear your story.</strong><br /> I am here to help.</p>
          <p><strong>Email:</strong><br /> rhiannonhardingcounselling@gmail.com</p>
          <p><strong>Office:</strong><br /> Come say hello at our office HQ.<br />Victoria, British Columbia, BC, Canada</p>
          <p><strong>Phone:</strong><br /> Mon-Fri from 9am to 5pm.<br /> +1(650) 822-7747</p>
          <div className="socialIcons">
            <span>🔗</span> <span>🔗</span> <span>🔗</span> <span>🔗</span>
          </div>
        </aside>

        <main className="contactForm">
          <h2 className="formTitle">Contact me</h2>
          <p>You can reach me anytime via <a href="mailto:rhiannonhardingcounselling@gmail.com" className="emailLink">rhiannonhardingcounselling@gmail.com</a></p>
          <form className="form">
            <label className="label" htmlFor="name">Name:</label>
            <input className="input" type="text" id="name" placeholder="Your name" required />

            <label className="label" htmlFor="email">Email:</label>
            <input className="input" type="email" id="email" placeholder="Your email" required />

            <label className="label" htmlFor="phone">Phone number:</label>
            <input className="input" type="tel" id="phone" placeholder="+1(555) 000-0000" />

            <label className="label" htmlFor="message">How can I help you?</label>
            <textarea className="textarea" id="message" placeholder="Tell me a little about yourself..." required></textarea>

            <button className="button" type="submit">Send</button>
          </form>
        </main>
      </div>
    </div>
  );
}

export default ContactPage;
