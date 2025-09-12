import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Hero.css'; // custom styles
import myPhoto from './assets/jeet.jpeg';
import logo from './assets/logo.png'; // <-- import logo

const Hero = () => {
  const [dynamicText, setDynamicText] = useState("| Web Developer");
  const roles = ["| Web Developer", "| Java Developer", "| Software Engineer", "| Director", "| Musician"];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % roles.length;
      setDynamicText(roles[index]);
    }, 1000); // Change every second
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="hero-container d-flex flex-column">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
        <div className="container-fluid">
          <a className="navbar-brand custom-brand d-flex align-items-center" href="#">
            <img 
              src={logo} 
              alt="Logo" 
              className="navbar-logo"
            />
            <span id="dynamic-text" className="ms-2 dynamic-text">{dynamicText}</span>
          </a>

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

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto custom-nav">
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
              <li className="nav-item"><a className="nav-link" href="#tech-stack">Tech Stack</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
              <li className="nav-item"><a className="nav-link" href="#resume">Resume</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section (Full Screen & Full Width) */}
      <div className="container-fluid hero-content flex-grow-1 d-flex align-items-center justify-content-center">
        <div className="row w-100">
          {/* Text Section */}
          <div className="col-lg-6 d-flex flex-column justify-content-center text-center text-lg-start">
            <div className="hero-text">
              <h1>Hi, I'm Jeet.</h1>
              <p>
                Passionate about Web Development,<br />
                Driven by Java,<br />
                Focused on Solving Real-World Software Problems.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="col-lg-6 d-flex justify-content-center">
            <div className="hero-image">
              <img 
                src={myPhoto} 
                alt="Jeet Biswas" 
                className="img-fluid rounded-circle shadow-lg" 
                style={{ maxWidth: "300px", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Animation */}
      <div className="scroll-down text-center mb-3">
        <a href="#next-section" className="scroll-link">
          <span className="scroll-text">Scroll Down</span>
          <i className="bi bi-chevron-down"></i>
        </a>
      </div>
    </div>
  );
};

export default Hero;
