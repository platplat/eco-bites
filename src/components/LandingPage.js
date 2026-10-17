import React, { useState } from "react";
import "../styles.css";
import ecobites_logo from "../assets/ecobites_full_logo.png";
 
function LandingPage(props) {
  
  return (
  <div className="app-container">
    <img className="header-logo" src={ecobites_logo} alt="EcoBites logo" />

    <h2>Welcome!</h2>
      
    <nav className="nav-menu">
      <p>Are you a:</p>

      <button 
          className="nav-button"
          onClick={() => props.onNavigate("student")}
        >
      🎓 Student
      </button>

      <p>or</p>
        
      <button 
          className="nav-button"
          onClick={() => props.onNavigate("provider")}
        >
      🥗 Provider
      </button>

    </nav>
  </div>
  );
}

export default LandingPage;
