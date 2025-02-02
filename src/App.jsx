import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#293556] text-white">
        <Navbar className="z-50 w-full" />
        <div className="custom-scrollbar h-screen overflow-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}