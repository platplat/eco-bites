import React, { useState } from "react";
import "../styles.css";
import ecobites_logo from "../assets/ecobites_full_logo.png";
import spice_coders_logo from "../assets/spicecoders_icon.png";
import FoodCard from "./FoodCard";


function StudentView(props) {
  const [drops] = useState([
    {
      id: 1,
      title: "Vegetable Pasta",
      providerName: "Central Canteen",
      location: "Building A, 2nd Floor",
      quantity: 5,
      dietaryTags: ["Vegetarian", "Nut-free"]
    },
    {
      id: 2,
      title: "Chicken Sandwich",
      providerName: "Blue Cafe",
      location: "Library Plaza",
      quantity: 3,
      dietaryTags: ["Halal"]
    },
    {
      id: 3,
      title: "Fresh Fruit Bowl",
      providerName: "Green Deli",
      location: "Student Union",
      quantity: 8,
      dietaryTags: ["Vegan", "Gluten-free"]
    }
  ]);

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

    <main className="main-content">
      <div className="food-list">
        {drops.map((drop) => (
          <FoodCard key={drop.id} drop={drop} />
        ))}
      </div>
    </main>

    <footer className="footer">
      <img className="spice-coders-logo" src={spice_coders_logo} alt="SpiceCoders logo"/>
      SpiceCoders
    </footer>

  </div>
  );
}

export default StudentView;
