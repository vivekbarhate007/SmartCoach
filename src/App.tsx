import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LandingPage } from './pages/LandingPage';
import { SportsSelectionPage } from './pages/SportsSelectionPage';
import { SportDetailPage } from './pages/SportDetailPage';
import { CoachSimulatorPage } from './pages/CoachSimulatorPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Routes>
          {/* Routes that include Navbar and Footer */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <main className="flex-grow">
                  <LandingPage />
                </main>
                <Footer />
              </>
            }
          />
          <Route
            path="/sports"
            element={
              <>
                <Navbar />
                <main className="flex-grow">
                  <SportsSelectionPage />
                </main>
                <Footer />
              </>
            }
          />
          <Route
            path="/sports/:sportId"
            element={
              <>
                <Navbar />
                <main className="flex-grow">
                  <SportDetailPage />
                </main>
                <Footer />
              </>
            }
          />
          
          {/* Simulator route - usually full screen/no global nav */}
          <Route
            path="/sports/:sportId/coach"
            element={<CoachSimulatorPage />}
          />
        </Routes>
      </div>
    </Router>
  );
}
