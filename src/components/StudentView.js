import React, { useState } from "react";
import "../styles.css";
 
export default function StudentView(props) {
  
  return (
  <div className="app-container">
    <h1>EcoBites</h1>
    <h3>Less waste, more taste!</h3>
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
