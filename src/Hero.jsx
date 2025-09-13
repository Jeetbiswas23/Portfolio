import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Hero.css";
import myPhoto from "./assets/jeet.jpeg";
import logo from "./assets/logo.png";
import trevguide from "./assets/trevguide.png";
import promptverse from "./assets/promptverse.png";
import fastvoicer from "./assets/fastvoicer.png";

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

</div>

      </section>

      {/* PROJECTS SECTION */}
<section id="projects" className="projects-section d-flex flex-column justify-content-center">
  <div className="projects-container mb-4"> {/* Added mb-4 class */}
    <h4 className="projects-small-heading">
      🏎️ From the Starting Grid to the Chequered Flag.
    </h4>
    <h1 className="projects-main-heading">Projects.</h1>
    <p className="projects-subtitle">
      Fasten your seat belts and get ready for a high-speed tour through my coding circuits. 
      This is where the rubber meets the road, and each repository is a thrilling lap of ingenuity. 
      From the starting grid of initial commits to the checkered flag of final deployments, here you will find 
      the engineering behind my race for excellence. <br /><br />
      Fuel up on my GitHub repositories, where you can take a pit stop at the code that fuels my journey. 
      Whether it’s a sprint race of a quick weekend project or a full-send endurance of a long-term development, 
      every repo is a story of challenges tackled at high speeds. 🛠️ <br /><br />
      Now, switch to mode push and send it into the main straight of projects!
    </p>
  </div>

  <div className="projects-cards d-flex flex-wrap justify-content-around">
  {/* Project 1 */}
  <div className="project-card">
    <img src={promptverse} alt="PromptVerse" className="project-image" />
    <h3 className="project-title">PromptVerse</h3>
    <p className="project-desc">
      A prompt marketplace to explore and optimize prompts.
    </p>
    <div className="project-buttons">
      <a href="https://prompt-verse-sandy.vercel.app/" target="_blank" rel="noreferrer" className="btn btn-visit">Visit Website</a>
      <a href="https://github.com/Jeetbiswas23/PromptVerse-FINAL-" target="_blank" rel="noreferrer" className="btn btn-code">View Code</a>
    </div>
  </div>

  {/* Project 2 */}
  <div className="project-card">
    <img src={trevguide} alt="TrevGuide" className="project-image" />
    <h3 className="project-title">TrevGuide</h3>
    <p className="project-desc">
      A travel website where you can learn the basics of travel with blogs.
    </p>
    <div className="project-buttons">
      <a href="https://trev-guide.vercel.app/" target="_blank" rel="noreferrer" className="btn btn-visit">Visit Website</a>
      <a href="https://github.com/Jeetbiswas23/TrevGuide-Starting-" target="_blank" rel="noreferrer" className="btn btn-code">View Code</a>
    </div>
  </div>

  {/* Project 3 */}
  <div className="project-card">
    <img src={fastvoicer} alt="FastVoicer" className="project-image" />
    <h3 className="project-title">FastVoicer</h3>
    <p className="project-desc">
      An invoice creator where you can create invoices to send payments through blockchain.
    </p>
    <div className="project-buttons">
      <a href="https://fast-voicer.vercel.app/" target="_blank" rel="noreferrer" className="btn btn-visit">Visit Website</a>
      <a href="https://github.com/Jeetbiswas23/FastVoicer" target="_blank" rel="noreferrer" className="btn btn-code">View Code</a>
    </div>
  </div>
</div>
</section>
    </>
  );
};

export default Hero;
