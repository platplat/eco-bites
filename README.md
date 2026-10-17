# 🌿 EcoBites

> **Connecting campus food providers with hungry students to help eliminate food waste.**

---

## 📌 Project Overview

**EcoBites** is a mobile-responsive React web application built for **CS385 Mobile Application Development**. Developed under the theme of **"A Sustainable Environment,"** EcoBites bridges the gap between campus food providers (canteens, catering, event organizers) with surplus food and students seeking affordable or free meals.

By facilitating real-time food drop discovery, location details, and listings, EcoBites aims to reduce campus food waste while supporting student food accessibility.

---

## ✨ Key Features & Architecture

- 🔀 **Single-Page View Routing:** Top-level conditional rendering in `App.js` using `useState` and short-circuit evaluation (`&&`) to swap complete page views (`LandingPage`, `StudentView`, `ProviderView`) cleanly without external routing libraries.
- 🔄 **Unidirectional Data Flow:** React props and callback handlers (`onNavigate`, `onGoHome`) pass state updates between parent and child components.

---

## 🛠️ Tech Stack

- **Framework / Library:** React.js
- **Language:** JavaScript, HTML, CSS

---

## 📁 Directory Structure

```text
ecobites/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── ecobites_full_logo.png
│   │   ├── ecobites_icon.png
│   │   └── spicecoders_icon.png
│   ├── components/
│   │   ├── LandingPage.js      # Main entry screen
│   │   ├── StudentView.js      # Student portal
│   │   └── ProviderView.js     # Provider portal
│   ├── App.js                  # Top-level view router
│   ├── styles.css
│   └── index.js
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have Node.js (v14 or higher) and npm installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/platplat/eco-bites.git
   cd eco-bites
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm start
   ```

4. **Open in browser:**
   Navigate to `http://localhost:3000` to view the application in action.

---

## 👥 Development Team — SpiceCoders

Built with ❤️ by **SpiceCoders** for **CS385 Mobile Application Development**:
- **Course Theme:** A Sustainable Environment
- **Project Name:** EcoBites

---

## 📄 License

This project is created for educational purposes as part of the CS385 curriculum.
