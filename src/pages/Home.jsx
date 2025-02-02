/* eslint-disable react/no-unescaped-entities */

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ContactModal from '../components/ContactModal';

export default function Home() {
    const navigate = useNavigate();
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const handleDownloadCV = () => {
        // Remplacez '/path-to-your-cv.pdf' par le chemin réel vers votre CV
        const link = document.createElement('a');
        link.href = '/CV_Eloic_2024.pdf';
        link.download = 'CV_Eloic_2024.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="min-h-screen bg-[#293556] text-white pt-16 overflow-hidden">
            <main className="container mx-auto px-4">
                {/* Mobile View */}
                <div className="md:hidden space-y-4">
                    <div className="flex flex-col items-center text-center space-y-4 mt-8">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 flex items-center justify-center border border-white- border-2">
                            <img
                                src="/Logo_H_Eloïc.png"
                                alt="Profile"
                                className="object-cover size-20"
                            />
                        </div>
                        <div className="flex justify-between w-full px-8">
                            <button
                                onClick={handleDownloadCV}
                                className="hover:text-[#FFA600] transition-colors"
                            >
                                Mon CV
                            </button>
                            <button
                                onClick={() => setIsContactModalOpen(true)}
                                className="hover:text-[#FFA600] transition-colors"
                            >
                                Contacts
                            </button>
                        </div>
                    </div>
                    <div className="relative aspect-[3/4] w-full h-[90vw] overflow-hidden p-4">
                        <div className='flex flex-row h-[85vw] items-center justify-center border-white border-2 border-2 overflow-hidden  rounded-[15%40%15%40%/40%15%40%15%]'>
                            <img
                                src="/Eloïc.jpeg"
                                alt="Profile"
                                className="object-cover w-full h-[100vw]"
                            />
                        </div>
                    </div>
                    <div className="text-center">
                        <p className="text-sm mb-1">Salut, je m'appelle Eloic</p>
                        <p className="text-sm">Je suis un développeur web fullstack</p>
                    </div>
                    <div className="text-center">
                        <button
                            onClick={() => navigate('/projects')}
                            className="text-blue-400 mb-8 hover:text-[#FFA600] transition-colors"
                        >
                            Mes projets →
                        </button>
                    </div>
                </div>

                {/* Desktop View */}
                <div className="hidden md:flex h-[80vh] items-center">
                    <div className="w-2/3">
                        <div className="flex flex-col justify-center items-center space-y-8">
                            <h1 className="text-4xl font-bold">
                                Hello, my name is <span className="text-[#70C8F2]">Eloïc</span><br />
                                <h2 className="text-xl font-bold">
                                    I'm a <span className="text-[#70C8F2]">fullstack web developer</span>
                                </h2>
                            </h1>
                            <div className="space-y-3">
                                <button
                                    onClick={handleDownloadCV}
                                    className="hover:text-[#FFA600] transition-colors block"
                                >
                                    Mon CV
                                </button>
                                <button
                                    onClick={() => setIsContactModalOpen(true)}
                                    className="hover:text-[#FFA600] transition-colors block"
                                >
                                    Contacts
                                </button>
                                <button
                                    onClick={() => navigate('/projects')}
                                    className="hover:text-[#FFA600] transition-colors block"
                                >
                                    Mes projets →
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3">
                        <div className="relative aspect-[1/1.5] max-w-auto ml-auto overflow-hidden pt-24">
                            <div className='w-auto h-[80%] rounded-[79%_27%_26%_85%/66%_58%_47%_34%] m-8 shadow-[0_20px_40px_-15px_rgba(112,200,242,0.3),0_25px_50px_-20px_rgba(71,67,148,0.2),0_-5px_15px_-8px_rgba(112,200,242,0.1)] border-white border-2 border-2 overflow-hidden'>
                                <img
                                    src="/Eloïc.jpeg"
                                    alt="Profile"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
        </div>
    );
}