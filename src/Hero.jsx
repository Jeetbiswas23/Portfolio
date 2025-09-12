import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Hero.css";
import myPhoto from "./assets/jeet.jpeg";
import logo from "./assets/logo.png";

const Hero = () => {
  const [dynamicText, setDynamicText] = useState("| Web Developer");
  const roles = ["| Web Developer", "| Java Developer", "| Software Engineer", "| Director", "| Musician"];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % roles.length;
      setDynamicText(roles[index]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Optional: fade-in animation for Overview when in view
  useEffect(() => {
    const overview = document.querySelector("#overview");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          overview.classList.add("fade-in");
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(overview);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <div className="hero-container d-flex flex-column">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
          <div className="container-fluid">
            <a className="navbar-brand custom-brand d-flex align-items-center" href="#">
              <img src={logo} alt="Logo" className="navbar-logo" />
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
                <li className="nav-item">
                  <a 
                    className="nav-link" 
                    href="#overview"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector("#overview").scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Overview
                  </a>
                </li>
                <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
                <li className="nav-item"><a className="nav-link" href="#tech-stack">Tech Stack</a></li>
                <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                <li className="nav-item"><a className="nav-link" href="#resume">Resume</a></li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="container-fluid hero-content flex-grow-1 d-flex align-items-center justify-content-center">
          <div className="row w-100">
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
            <div className="col-lg-6 d-flex justify-content-center">
              <div className="hero-image">
                <img src={myPhoto} alt="Jeet Biswas" className="img-fluid rounded-circle shadow-lg" style={{ maxWidth: "300px", height: "auto" }} />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-down text-center mb-3">
          <a 
            href="#overview"
            className="scroll-link"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#overview").scrollIntoView({ behavior: "smooth" });
            }}
          >
            <div className="scroll-track">
              <div className="scroll-orb"></div>
            </div>
          </a>
        </div>
      </div>

      {/* OVERVIEW SECTION */}
      <section id="overview" className="overview-section d-flex flex-column justify-content-center">
        <div className="overview-container">
          <h4 className="overview-small-heading">🏁 It's lights out and away we go!</h4>
          <h1 className="overview-main-heading">Overview.</h1>
          <p className="overview-subtitle">
            I am Jeet, a passionate and driven software developer. With a strong foundation in DSA and core subjects like CN, OS, DBMS, and System Design, I am equipped to tackle complex problems and work confidently across both software and hardware domains. I thrive in learning new technologies and applying them to build efficient, high-quality solutions.
            <br /><br />
            Over time, I have led multiple projects, honing my teamwork and leadership skills—organizing tasks, coordinating with teammates, and ensuring smooth execution. My key strengths—self-belief, resilience, and a never-give-up attitude—push me to take on challenges and consistently deliver results.
          </p>
              </div>
              
              
              <div className="overview-cards d-flex flex-wrap justify-content-around mt-5">

{/* Card 1 - Web Development */}
<div className="flip-card-wrapper">
  <span className="flip-label">Flip to know</span>
  <div className="flip-card">
    <div className="flip-card-inner">
      <div className="flip-card-front">
        <h3>Web Development</h3>
      </div>
      <div className="flip-card-back">
        <p>
          I create interactive and responsive websites with React, HTML, CSS, and JS.  
          
        </p>
      </div>
    </div>
  </div>
</div>

{/* Card 2 - Java Development */}
<div className="flip-card-wrapper">
  <span className="flip-label">Flip to know</span>
  <div className="flip-card">
    <div className="flip-card-inner">
      <div className="flip-card-front">
        <h3>Java Development</h3>
      </div>
      <div className="flip-card-back">
        <p>
          Building efficient Java applications with strong OOP and problem-solving skills.  
        </p>
      </div>
    </div>
  </div>
</div>

{/* Card 3 - DSA */}
<div className="flip-card-wrapper">
  <span className="flip-label">Flip to know</span>
  <div className="flip-card">
    <div className="flip-card-inner">
      <div className="flip-card-front">
        <h3>DSA</h3>
      </div>
      <div className="flip-card-back">
        <p>
          Strong foundation in Data Structures & Algorithms, solving complex problems efficiently.  
        </p>
      </div>
    </div>
  </div>
</div>

</div>

      </section>
    </>
  );
};

export default Hero;
