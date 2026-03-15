# SmartCoach – Sports Decision Simulator

SmartCoach is an interactive sports learning platform designed to bridge the gap between knowing the rules and mastering game strategy. The application features a unique "Coach Mode" where users navigate real-game decision scenarios to test and improve their tactical awareness.

## 🚀 Overview

Whether you're a new player or an aspiring coach, SmartCoach helps you think faster and make better choices on the field. It provides beginner-friendly rulebooks for over eight major sports and a simulated environment to practice high-stakes decision-making.

## ✨ Key Features

- **Coach Simulator:** Interactive scenarios where you make the call. Get immediate feedback on your tactical choices.
- **Comprehensive Rulebooks:** Simplified guides for Basketball, Soccer, Football, Tennis, Baseball, Volleyball, Cricket, and Golf.
- **Visual Learning:** High-quality imagery and intuitive UI to help visualize field positioning and strategy.
- **Progress Tracking:** Real-time scoring and feedback based on the quality of your strategic decisions.
- **Responsive Design:** A polished, mobile-first experience that works across all devices.

## 📸 Screenshots

<div align="center">
  <img src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=1000" width="400" alt="Landing Page" />
  <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1000" width="400" alt="Sports Selection" />
</div>

*Note: Replace these with actual screenshots of your application.*

## 🛠️ Tech Stack

- **Frontend:** React 19, TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Routing:** React Router 7
- **Build Tool:** Vite 6

## 📂 File Structure

```text
.
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Footer.tsx       # Global footer
│   │   ├── HeroSection.tsx  # Landing page hero
│   │   ├── Navbar.tsx       # Global navigation
│   │   └── SportCard.tsx    # Individual sport display card
│   ├── data/                # Static data and content
│   │   ├── rulebooks.ts     # Detailed rules for each sport
│   │   ├── scenarios.ts     # Decision-making scenarios for simulator
│   │   └── sports.ts        # Sport metadata (names, icons, images)
│   ├── lib/                 # Utility libraries and shims
│   │   └── fetch-shim.ts    # Compatibility layer for window.fetch
│   ├── pages/               # Main application views
│   │   ├── CoachSimulatorPage.tsx  # Interactive simulation engine
│   │   ├── LandingPage.tsx         # Home page
│   │   ├── SportDetailPage.tsx     # Rulebook and sport overview
│   │   └── SportsSelectionPage.tsx # Browse all available sports
│   ├── App.tsx              # Main routing and layout configuration
│   ├── index.css            # Global styles and Tailwind imports
│   └── main.tsx             # Application entry point
├── public/                  # Static assets
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite build configuration
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/smartcoach.git
   ```

2. Navigate to the project directory:
   ```bash
   cd smartcoach
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000`

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

*Built with ❤️ for sports enthusiasts and strategists.*
