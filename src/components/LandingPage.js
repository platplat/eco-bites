import React, { useState } from "react";
import "../styles.css";
 
function LandingPage(props) {
  
  return (
  <div className="app-container">
    <h1>EcoBites</h1>
    <h3>Less waste, more taste!</h3>
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