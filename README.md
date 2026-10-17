![EcoBites logo](./src/assets/ecobites_full_logo.png)

> **Connecting campus food providers with hungry students to help eliminate food waste.**

---

## 📌 Project Overview

**EcoBites** is a mobile-responsive React web application built for **CS385 Mobile Application Development**. Developed under the theme of **"A Sustainable Environment,"** EcoBites bridges the gap between campus food providers (canteens, catering, event organizers) with surplus food and students seeking affordable or free meals.

By facilitating real-time food drop discovery, location details, and listings, EcoBites aims to reduce campus food waste while supporting student food accessibility.

---

## ✨ Current Features & Architecture

- 🔀 **Single-Page View Routing:** Top-level conditional rendering in `App.js` using `useState` and short-circuit evaluation (`&&`) to swap complete page views (`LandingPage`, `StudentView`, `ProviderView`) cleanly without external routing libraries.
- 🔄 **Unidirectional Data Flow:** React props and callback handlers (`onNavigate`, `onGoHome`) pass state updates between parent and child components.

---

## 🗺️ Project Roadmap

- [x] **Phase 1: Core Architecture (Completed ✅)**
  - [x] **Single-Page View Routing:** Top-level conditional rendering in `App.js` using `useState` to swap between views
  - [x] **Custom Branding Integration:** Asset integration featuring custom PNG graphical branding
  - [x] **Automated CI/CD Pipeline:** Continuous deployment via GitHub Actions (`.github/workflows/deploy.yml`) that automatically builds and deploys updates to GitHub Pages

- [ ] **Phase 2: Student View (In Progress 🏗️)**
  - [ ] **Search Bar:** Controlled input filtering `foodDrops` by title or location using `.filter()`.
  - [ ] **Dynamic Card Grid:** Rendering filtered items using `.map()` with unique `key` props.
  - [ ] **Category Pills/Filters:** Quick filter buttons (`All`, `Vegan`, `Vegetarian`, `Gluten-Free`).
  - [ ] **Claim Action & State Update:** "Claim" button that reduces available quantity in state and displays a pickup confirmation pass

- [ ] **Phase 3: Provider View (Planned 🔮)**
  - [ ] **Controlled Form:** Input fields for Title, Location, Quantity, Expiry, and Tag checkboxes.
  - [ ] **Validation:** Ensuring empty submissions are prevented.
  - [ ] **Submission Handler**

- [ ] **Phase 4: Sustainability Impact (Future 🚀)**
  - [ ] **Student Impact Dashboard:** Analytics view displaying total meals saved, estimated CO₂ offset, and personal claim history
  - [ ] **Sustainability Badges:** Achievement milestones for active campus food savers
  - [ ] **Provider Analytics:** Waste reduction summary metrics for campus food vendors

---

## 🛠️ Tech Stack

- **Framework / Library:** React.js
- **Language:** JavaScript, HTML, CSS

---

## 📁 Directory Structure

```text
ecobites/
├── .github/
│ ├── workflows/
│ └── deploy.yml
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── ecobites_full_logo.png
│   │   ├── ecobites_icon.png
│   │   └── spicecoders_icon.png
│   ├── components/
│   │   ├── LandingPage.js      # Main entry screen
│   │   ├── ProviderView.js     # Provider portal
│   │   └── StudentView.js      # Student portal
│   ├── App.js                  # Top-level view router
│   ├── index.js
│   └── styles.css
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have Node.js (v14 or higher) and npm installed on your machine.

### Local Setup & Execution

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

## 👥 Development Team

Built with ❤️ by **SpiceCoders** for **CS385 Mobile Application Development**:
- **Course Theme:** A Sustainable Environment
- **Project Name:** EcoBites

---

## 📄 License

This project is created for educational purposes as part of the CS385 curriculum.
