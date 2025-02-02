import { Link, useLocation } from 'react-router-dom';
import { Home, User, Grid } from 'lucide-react';
import "../../App.css"

export default function Navbar() {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <nav className="navigation-grad fixed top-0 w-full py-3 px-4 z-50">
            <div className="max-w-7xl mx-auto">
                {/* Mobile Navigation */}
                <div className="md:hidden flex justify-center items-center space-x-4">
                    <div className="bg-[#293556] flex  rounded-full px-4 py-2 border border-white border-2">
                        <Link to="/">
                            <div className={`font-bold p-2 rounded-full ${isActive('/') ? 'bg-[#FFA600] text-black' : 'bg-[#2a2b36] text-white'}`}>
                                <Home size={20} />
                            </div>
                        </Link>
                        <Link to="/profile">
                            <div className={`font-bold p-2 mx-4 rounded-full ${isActive('/profile') ? 'bg-[#FFA600] text-black' : 'bg-[#2a2b36] text-white'}`}>
                                <User size={20} />
                            </div>
                        </Link>
                        <Link to="/projects">
                            <div className={`font-bold p-2 rounded-full ${isActive('/projects') ? 'bg-[#FFA600] text-black' : 'bg-[#2a2b36] text-white'}`}>
                                <Grid size={20} />
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Tablet & Desktop Navigation */}
                <div className="hidden md:flex justify-between items-center">
                    <div className="w-auto h-4 mt-2 ml-8">
                        <Link to="/" className="flex items-center">
                            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 flex items-center justify-center border border-white- border-2">
                                <img
                                    src="/Logo_H_Eloïc.png"
                                    alt="Profile"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </Link>
                    </div>
                    <div className="w-full flex justify-center items-center space-x-4">
                        <div className="bg-[#293556] rounded-full px-2 py-3 border border-white border-2">
                            <Link to="/" className={`font-bold px-6 py-2 rounded-full ${isActive('/') ? 'bg-[#FFA600] text-black' : 'text-white'}`}>
                                Accueil
                            </Link>
                            <Link to="/profile" className={`font-bold mx-4 px-6 py-2 rounded-full ${isActive('/profile') ? 'bg-[#FFA600] text-black' : 'text-white'}`}>
                                Profile
                            </Link>
                            <Link to="/projects" className={`font-bold px-6 py-2 rounded-full ${isActive('/projects') ? 'bg-[#FFA600] text-black' : 'text-white'}`}>
                                Projets
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
