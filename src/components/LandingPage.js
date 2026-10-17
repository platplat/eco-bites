import React, { useState } from "react";
import "../styles.css";
import ecobites_logo from "../assets/ecobites_full_logo.png";
import spice_coders_logo from "../assets/spicecoders_icon.png";
 
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

    <main className="main-content">
      <p></p>
    </main>

    <footer className="footer">
      <img className="spice-coders-logo" src={spice_coders_logo} alt="SpiceCoders logo"/>
      SpiceCoders
    </footer>

  </div>
  );
}

export default LandingPage;
