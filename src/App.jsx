import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import PageTransition from './components/PageTransition';
import { PropTypes } from 'prop-types';
import './App.css';

// Create a theme context to share isDark state
import { createContext } from 'react';
export const ThemeContext = createContext({ isDark: true, toggleTheme: () => { } });

const AnimatedRoutes = ({ isDark, toggleTheme }) => {
  const location = useLocation();

  useEffect(() => {
    // Set initial theme based on isDark value
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
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
    </ThemeContext.Provider>
  );
};


AnimatedRoutes.propTypes = {
  isDark: PropTypes.bool.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default function App() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-300 ${isDark
        ? 'bg-[#293556] text-white'
        : 'bg-gray-100 text-gray-900'
        }`}>
        <Navbar className="z-50 w-full" isDark={isDark} toggleTheme={toggleTheme} />
        <div className="custom-scrollbar h-screen overflow-auto">
          <AnimatedRoutes isDark={isDark} toggleTheme={toggleTheme} />
        </div>
      </div>
    </Router>
  );
}