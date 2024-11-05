// src/components/Navbar.js

import React from 'react';
import '../../src/Navbar.css'
import { FaLinkedin } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'


function Navbarnew() {
    return (
      <nav className="navbar">
        <div className="navbar-icons">
          <a href="https://www.linkedin.com/in/rajashree-nair-64a624185/"><FaLinkedin /></a>
          <FaGithub />
        </div>
        <ul className="navbar-list">
          <li className="navbar-item">
            <a href="#technologies" className="navbar-link">Skills</a>
          </li>
          <li className="navbar-item">
            <a href="#experience" className="navbar-link">Work Experience</a>
          </li>
          <li className="navbar-item">
            <a href="#Project" className="navbar-link">Project</a>
          </li>
          <li className="navbar-item">
            <a href="#contactme" className="navbar-link">Contact Me</a>
          </li>
        </ul>
      </nav>
    );
  }
  
  export default Navbarnew;
