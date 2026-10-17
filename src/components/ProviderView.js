import React, { useState } from "react";
import "../styles.css";
import ecobites_logo from "../assets/ecobites_full_logo.png";
 
function ProviderView(props) {
  
  return (
  <div className="app-container">
    <img className="header-logo" src={ecobites_logo} alt="EcoBites logo" />
    <h2>Welcome, Provider!</h2>
      
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

export default ProviderView;
