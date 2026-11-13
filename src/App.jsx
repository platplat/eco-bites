import React, { useState } from "react";

// Import child components
import LandingPage from "./components/LandingPage.jsx";
import StudentView from "./components/StudentView.jsx";
import ProviderView from "./components/ProviderView.jsx";
 
function App() {
  // Top-level states managed by App.js
  const [currentView, setCurrentView] = useState("landing");
  
  return (
  <div className="app">
    {currentView === "landing" && (
      <LandingPage onNavigate={(view) => setCurrentView(view)} />
    )}
    {currentView === "student" && (
      <StudentView onGoHome={() => setCurrentView("landing")} />
    )}
    {currentView === "provider" && (
      <ProviderView onGoHome={() => setCurrentView("landing")} />
    )}
  </div>
  );
}

export default App;