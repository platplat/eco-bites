import React, { useState } from "react";
import "../styles.css";
import ecobites_logo from "../assets/ecobites_full_logo.png";
 
function StudentView(props) {
  
  return (
  <div className="app-container">
    <img className="header-logo" src={ecobites_logo} alt="EcoBites logo" />
    <h2>Welcome, Student!</h2>
      
    <nav className="nav-menu">

      <button 
          className="nav-button"
          onClick={() => props.onGoHome()}
        >
      📲 Logout
      </button>

    </nav>

  </div>
  );
}

export default StudentView;
