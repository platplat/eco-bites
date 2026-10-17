import React, { useState } from "react";
import "../styles.css";
import ecobites_logo from "../assets/ecobites_full_logo.png";
import spice_coders_logo from "../assets/spicecoders_icon.png";


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

export default ProviderView;
