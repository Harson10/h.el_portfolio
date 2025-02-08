import { Link, useLocation } from 'react-router-dom';
import { Home, User, Grid, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import "../../App.css";

export default function Navbar() {
    const location = useLocation();
    const [visible, setVisible] = useState(true);
    const [isDark, setIsDark] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const isActive = (path) => location.pathname === path;

    useEffect(() => {
        const updateNavVisibility = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY <= 0 || currentScrollY < lastScrollY) {
                setVisible(true);
            } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
                setVisible(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', updateNavVisibility);
        return () => window.removeEventListener('scroll', updateNavVisibility);
    }, [lastScrollY]);

    const toggleTheme = () => {
        setIsDark(!isDark);
        document.documentElement.classList.toggle('dark');
    };

    const navClasses = `
        navigation-grad fixed w-full py-3 px-4 z-50 transition-all duration-300
        ${visible ? 'top-0' : '-top-24'}
    `;

    const iconBgColor = isDark ? 'bg-[#2a2b36]' : 'bg-white border border-gray-300';
    const activeColor = 'bg-[#FFA600]';
    const textColor = isDark ? 'text-white' : 'text-gray-800';

    return (
        <motion.nav
            className={navClasses}
            initial={{ y: -100 }}
            animate={{ y: visible ? 0 : -100 }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
        >
            <div className="max-w-7xl mx-auto">
                {/* Mobile Navigation */}
                <div className="md:hidden flex justify-center items-center space-x-4">
                    <div className={`${isDark ? 'bg-[#293556]' : 'bg-gray-200'} flex rounded-full px-4 py-2 border-2 border-white`}>
                        <Link to="/">
                            <motion.div
                                className={`font-bold p-2 rounded-full ${isActive('/') ? activeColor + ' text-white' : iconBgColor + ' ' + textColor}`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Home size={20} />
                            </motion.div>
                        </Link>
                        <Link to="/profile">
                            <motion.div
                                className={`font-bold p-2 mx-4 rounded-full ${isActive('/profile') ? activeColor + ' text-white' : iconBgColor + ' ' + textColor}`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <User size={20} />
                            </motion.div>
                        </Link>
                        <Link to="/projects">
                            <motion.div
                                className={`font-bold p-2 rounded-full ${isActive('/projects') ? activeColor + ' text-white' : iconBgColor + ' ' + textColor}`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Grid size={20} />
                            </motion.div>
                        </Link>
                        <motion.div
                            className={`font-bold p-2 ml-4 rounded-full ${iconBgColor} ${textColor} cursor-pointer`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={toggleTheme}
                        >
                            {isDark ? <Sun size={20} /> : <Moon size={20} />}
                        </motion.div>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex justify-between items-center">
                    <div className="w-auto h-4 mt-2 ml-8">
                        <Link to="/" className="flex items-center">
                            <motion.div
                                className={`w-20 h-20 rounded-full bg-gradient-to-r ${isDark ? 'from-blue-400 to-blue-500' : 'from-blue-300 to-blue-400'} flex items-center justify-center border-2 border-white`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <img
                                    src="/Logo_H_Eloïc.png"
                                    alt="Profile"
                                    className="object-cover w-full h-full"
                                />
                            </motion.div>
                        </Link>
                    </div>
                    <div className="w-full flex justify-center items-center space-x-4">
                        <div className={`${isDark ? 'bg-[#293556]' : 'bg-gray-200'} rounded-full px-2 py-2 border-2 border-white flex items-center`}>
                            <Link to="/">
                                <motion.span
                                    className={`font-bold px-6 py-2 mx-1 rounded-full inline-block ${isActive('/') ? activeColor + ' text-white' : textColor}`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Home
                                </motion.span>
                            </Link>
                            <Link to="/profile">
                                <motion.span
                                    className={`font-bold mx-4 px-6 py-2 rounded-full inline-block ${isActive('/profile') ? activeColor + ' text-white' : textColor}`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    About
                                </motion.span>
                            </Link>
                            <Link to="/projects">
                                <motion.span
                                    className={`font-bold px-6 py-2 mx-1 rounded-full inline-block ${isActive('/projects') ? activeColor + ' text-white' : textColor}`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Projects
                                </motion.span>
                            </Link>
                            <motion.div
                                className={`font-bold p-2 ml-4 rounded-full ${iconBgColor} ${textColor} cursor-pointer`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={toggleTheme}
                            >
                                {isDark ? <Sun size={20} /> : <Moon size={20} />}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}