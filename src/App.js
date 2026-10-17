import React, { useState } from "react";

// Import child components
import LandingPage from "./components/LandingPage.js";
 
function App() {
  // Top-level states managed by App.js
  const [currentView, setCurrentView] = useState("landing");
  
  return (
  <div className="app">
    {currentView === "landing" && (
      <LandingPage onNavigate={(view) => setCurrentView(view)} />
    )}
  </div>
  );
}

export default App;