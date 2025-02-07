import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import PageTransition from './components/PageTransition';
import './App.css';

const AnimatedRoutes = () => {
  const location = useLocation();

  // Dans App.jsx, ajoutez ceci au début de votre composant App
  useEffect(() => {
    // Set initial theme class
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/profile"
          element={
            <PageTransition>
              <Profile />
            </PageTransition>
          }
        />
        <Route
          path="/projects"
          element={
            <PageTransition>
              <Projects />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#293556] text-white">
        <Navbar className="z-50 w-full" />
        <div className="custom-scrollbar h-screen overflow-auto">
          <AnimatedRoutes />
        </div>
      </div>
    </Router>
  );
}