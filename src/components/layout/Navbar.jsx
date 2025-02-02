import { Link, useLocation } from 'react-router-dom';
import { Home, User, Grid } from 'lucide-react';
import { motion } from 'framer-motion';
import "../../App.css";

export default function Navbar() {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <motion.nav
            className="navigation-grad fixed top-0 w-full py-3 px-4 z-50"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
        >
            <div className="max-w-7xl mx-auto">
                {/* Mobile Navigation */}
                <div className="md:hidden flex justify-center items-center space-x-4">
                    <div className="bg-[#293556] flex rounded-full px-4 py-2 border border-white border-2">
                        <Link to="/">
                            <motion.div
                                className={`font-bold p-2 rounded-full ${isActive('/') ? 'bg-[#FFA600] text-black' : 'bg-[#2a2b36] text-white'}`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Home size={20} />
                            </motion.div>
                        </Link>
                        <Link to="/profile">
                            <motion.div
                                className={`font-bold p-2 mx-4 rounded-full ${isActive('/profile') ? 'bg-[#FFA600] text-black' : 'bg-[#2a2b36] text-white'}`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <User size={20} />
                            </motion.div>
                        </Link>
                        <Link to="/projects">
                            <motion.div
                                className={`font-bold p-2 rounded-full ${isActive('/projects') ? 'bg-[#FFA600] text-black' : 'bg-[#2a2b36] text-white'}`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Grid size={20} />
                            </motion.div>
                        </Link>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex justify-between items-center">
                    <div className="w-auto h-4 mt-2 ml-8">
                        <Link to="/" className="flex items-center">
                            <motion.div
                                className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 flex items-center justify-center border border-white border-2"
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
                        <div className="bg-[#293556] rounded-full px-2 py-2 border border-white border-2">
                            <Link to="/">
                                <motion.span
                                    className={`font-bold px-6 py-2 mx-1 rounded-full inline-block ${isActive('/') ? 'bg-[#FFA600] text-black' : 'text-white'}`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Home
                                </motion.span>
                            </Link>
                            <Link to="/profile">
                                <motion.span
                                    className={`font-bold mx-4 px-6 py-2 rounded-full inline-block ${isActive('/profile') ? 'bg-[#FFA600] text-black' : 'text-white'}`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    About
                                </motion.span>
                            </Link>
                            <Link to="/projects">
                                <motion.span
                                    className={`font-bold px-6 py-2 mx-1 rounded-full inline-block ${isActive('/projects') ? 'bg-[#FFA600] text-black' : 'text-white'}`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Projects
                                </motion.span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}