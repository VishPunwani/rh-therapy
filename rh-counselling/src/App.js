import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar';
import Contact from './components/Contact';


function App() {
  return (
    <Router>
      <Navbar />  {/* Add Navbar here so it appears on every page */}
      <Routes>
       {/* <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
