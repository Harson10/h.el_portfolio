/* eslint-disable react/no-unescaped-entities */

import { useState, useEffect } from 'react';
import { Code, Palette, Database, ArrowDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Parallax } from 'react-parallax';
import TypedText from '../components/TypedText';
import ExpertiseCard from '../components/ExpertiseCard';
import ContactForm from '../components/ContactForm';

export default function Home() {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const [isDark, setIsDark] = useState(true);

    // Watch for theme changes
    useEffect(() => {
        const checkTheme = () => {
            setIsDark(document.documentElement.classList.contains('dark'));
        };

        // Initial check
        checkTheme();

        // Create observer to watch for class changes on html element
        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });

        return () => observer.disconnect();
    }, []);

    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = '/CV_Eloic_2024.pdf';
        link.download = 'CV_Eloic_2024.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleScrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const expertiseData = [
        {
            icon: Code,
            title: "Full Stack Development",
            description: "Experienced in building complete web applications using modern technologies like React, Node.js, and TypeScript.",
            gradient: isDark ? "from-[#70C8F2] to-[#474394]" : "from-[#3b82f6] to-[#1e40af]"
        },
        {
            icon: Database,
            title: "Backend Architecture",
            description: "Skilled in designing robust backend systems with focus on scalability, security, and performance.",
            gradient: isDark ? "from-[#474394] to-[#70C8F2]" : "from-[#1e40af] to-[#3b82f6]"
        },
        {
            icon: Palette,
            title: "UI/UX Design",
            description: "Creating intuitive and beautiful user interfaces with attention to detail and user experience.",
            gradient: isDark ? "from-[#70C8F2] to-[#474394]" : "from-[#3b82f6] to-[#1e40af]"
        }
    ];

    const buttonVariants = {
        hover: {
            scale: 1.05,
            boxShadow: "0px 5px 15px rgba(255, 166, 0, 0.3)",
        },
        tap: { scale: 0.95 }
    };

    const imageVariants = {
        initial: { scale: 1, rotate: 0 },
        animate: {
            scale: [1, 1.02, 1],
            rotate: [0, 1, -1, 0],
            transition: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <div className={`min-h-screen ${isDark ? 'bg-gradient-to-b from-[#1a2544] via-[#1a2544]/80 to-[#1a2544]' : 'bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100'} transition-colors duration-300`}>
            {/* Hero Section */}
            <Parallax
                blur={0}
                bgImageAlt="hero background"
                strength={200}
                className="min-h-screen relative"
                renderLayer={percentage => (
                    <div
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            background: isDark
                                ? `radial-gradient(circle, rgba(26,37,68,${percentage * 0.5}) 0%, rgba(26,37,68,${percentage}) 100%)`
                                : `radial-gradient(circle, rgba(248,250,252,${percentage * 0.5}) 0%, rgba(248,250,252,${percentage}) 100%)`
                        }}
                    />
                )}
            >
                <div className="container mx-auto px-4 min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 py-20">
                    <div className="flex flex-col justify-center items-center text-center w-full md:w-2/3 space-y-8">
                        <motion.h1
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className={`text-5xl md:text-7xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}
                        >
                            Hello, I'm{" "}
                            <span className="bg-gradient-to-r from-[#70C8F2] to-[#FFA600] bg-clip-text text-transparent">
                                Eloïc
                            </span>
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className={`text-2xl md:text-3xl font-light ${isDark ? 'text-white' : 'text-gray-800'}`}
                        >
                            I am a{" "}
                            <TypedText
                                strings={[
                                    "fullstack web developer",
                                    "software engineer",
                                    "UI/UX designer"
                                ]}
                                className="text-[#FFA600] font-medium"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-wrap gap-4"
                        >
                            <motion.button
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                                onClick={handleDownloadCV}
                                className="bg-gradient-to-r from-[#FFA600] to-[#FFA600]/80 text-white px-8 py-3 rounded-xl font-medium shadow-lg backdrop-blur-sm transition-all duration-300"
                            >
                                Download CV
                            </motion.button>
                            <motion.button
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                                onClick={handleScrollToContact}
                                className={`border-2 border-[#FFA600] px-8 py-3 rounded-xl font-medium ${isDark ? 'bg-[#1a2544]' : 'bg-white'} hover:bg-[#FFA600] transition-all duration-300 ${isDark ? 'text-white hover:text-white' : 'text-gray-800 hover:text-white'}`}
                            >
                                Let's Connect
                            </motion.button>
                        </motion.div>
                    </div>
                    <motion.div
                        className="relative w-80 md:w-1/3 h-[40vh] md:h-[60vh] rounded-3xl overflow-hidden border border-white"
                        variants={imageVariants}
                        initial="initial"
                        animate="animate"
                    >
                        <img
                            src="/Eloïc--.jpeg"
                            alt="Profile"
                            className="object-cover w-full md:h-30vw] rounded-3xl shadow-2xl 
                                     transition-transform duration-300 hover:scale-105"
                        />
                    </motion.div>
                </div>

                <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    style={{ opacity }}
                    animate={{
                        y: [0, 10, 0],
                        opacity: [1, 0.6, 1]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <ArrowDown className={`w-8 h-8 text-[#FFA600]`} />
                </motion.div>
            </Parallax>

            {/* Expertise Section */}
            <div className="relative py-32">
                <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-[#1a2544]/50 to-[#1a2544] opacity-10' : 'bg-gradient-to-b from-[#f8fafc]/50 to-[#f8fafc]  opacity-20'}`} />
                <div className="container mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-bold text-center mb-16"
                    >
                        <span className="bg-gradient-to-r from-[#70C8F2] to-[#FFA600] bg-clip-text text-transparent">
                            My Expertise
                        </span>
                    </motion.h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {expertiseData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                            >
                                <ExpertiseCard {...item} isDark={isDark} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div id="contact" className={`relative ${isDark ? 'bg-[#1a2544]' : 'bg-gray-100'}`}>
                <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-black/20' : 'from-gray-200/20'} to-transparent`} />
                <div className="container mx-auto px-4 py-32">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-bold text-center mb-16"
                    >
                        <span className="bg-gradient-to-r from-[#FFA600] to-[#70C8F2] bg-clip-text text-transparent">
                            Get in Touch
                        </span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <ContactForm isDark={isDark} />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
