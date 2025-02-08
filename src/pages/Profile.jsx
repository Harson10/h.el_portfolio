/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from 'react';
import { Code, Brain, Facebook, Github, Linkedin, } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "../components/ui/tooltip";
import PropTypes from 'prop-types';
import AcademicTimeline from '../components/AcademicTimeline';

// Extracted components for better organization
const SocialLink = ({ href, icon: Icon, label }) => (
    <TooltipProvider>
        <Tooltip>
            <TooltipTrigger asChild>
                <motion.a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="text-gray-300 hover:text-[#FFA600] transition-colors"
                >
                    <Icon className="w-6 h-6" />
                </motion.a>
            </TooltipTrigger>
            <TooltipContent>
                <p>{label}</p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
);

SocialLink.propTypes = {
    href: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    label: PropTypes.string.isRequired,
};

const ProfileSection = ({ title, icon: Icon, children, className = "", delay = 0 }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className={`bg-[#1a2544]/80 backdrop-blur-sm rounded-xl p-6 border border-transparent hover:border-[#FFA600]/30 transition-colors ${className}`}
        >
            <motion.div
                className="flex items-center gap-3 mb-4"
                animate={{ x: isHovered ? 10 : 0 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <motion.div
                    animate={{ rotate: isHovered ? 360 : 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                >
                    <Icon className="text-[#FFA600] w-6 h-6" />
                </motion.div>
                <h2 className="text-xl font-bold text-[#FFA600]">{title}</h2>
            </motion.div>
            <AnimatePresence>
                <motion.div
                    initial={false}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </motion.div>
    );
};

ProfileSection.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    delay: PropTypes.number, // Add this line to validate the delay prop
};

const SkillTag = ({ children, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        onHoverStart={() => setIsHovered(true)}
                        onHoverEnd={() => setIsHovered(false)}
                        className="bg-[#293556] px-4 py-2 rounded-full text-sm font-medium inline-block relative overflow-hidden group"
                    >
                        <motion.div
                            className="absolute inset-0 bg-[#FFA600]/10"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: isHovered ? 1 : 0 }}
                            transition={{ duration: 0.3 }}
                            style={{ transformOrigin: "left" }}
                        />
                        {children}
                    </motion.span>
                </TooltipTrigger>
            </Tooltip>
        </TooltipProvider>
    );
};

SkillTag.propTypes = {
    children: PropTypes.node.isRequired,
    index: PropTypes.number.isRequired,
};

export default function Profile() {

    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const checkTheme = () => {
            setIsDark(document.documentElement.classList.contains('dark'));
        };
        checkTheme();
        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });
        return () => observer.disconnect();
    }, []);


    const hardSkills = {
        frontend: [
            { name: 'React' },
            { name: 'HTML5' },
            { name: 'CSS3' },
            { name: 'JavaScript' },
            { name: 'Figma' }
        ],
        backend: [
            { name: 'Node.js' },
            { name: 'Python' },
            { name: 'Express' },
            { name: 'MySQL' },
            { name: 'PostgreSQL' }
        ],
        teamwork_project: [
            { name: 'Trello' },
            { name: "GitHub" }
        ]
    };

    return (
        <div className={`min-h-screen transition-colors duration-300 ${isDark
            ? 'bg-gradient-to-b from-[#293556] to-[#1a2544] text-white'
            : 'bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 text-gray-900'
            }`}>
            <div className="container mx-auto px-4 py-32">
                <div className="max-w-5xl mx-auto">
                    {/* Header Section with improved animations */}
                    <motion.div
                        className="flex flex-col justify-between items-center"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
                            <motion.div className={`w-48 h-48 relative rounded-full border-2 ${isDark ? 'border-white' : 'border-gray-800'
                                } overflow-hidden`}>
                                <motion.div className={`absolute inset-0 bg-gradient-to-r ${isDark
                                    ? 'from-blue-400 to-blue-500'
                                    : 'from-blue-300 to-blue-400'
                                    } rounded-full`}
                                    animate={{ rotate: [0, 360] }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                />
                                <img src="/Eloïc.jpg" alt="Profile" className="w-full h-full object-cover rounded-full relative" />
                            </motion.div>

                            <div className="flex-1 text-center md:text-left">
                                <motion.div
                                    className="flex flex-col items-center md:items-start gap-4"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                >
                                    <h1 className="text-4xl font-bold">HARENARISOA Eloïc</h1>
                                    <h2 className="text-xl font-semibold text-[#70C8F2]">
                                        Software Engineer / Fullstack Web Developer / UI-UX Designer
                                    </h2>
                                    <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'
                                        } max-w-2xl text-justify mt-4`}>
                                        I blend technical expertise with artistic sensibility to create functional and visually appealing solutions. Committed to continuous learning, I stay ahead of industry trends to deliver cutting-edge solutions that meet evolving market needs.
                                    </p>


                                    {/* Social Links */}
                                    <div className="flex gap-4 mt-4">
                                        <SocialLink href="https://github.com/eloic" icon={Github} />
                                        <SocialLink href="https://linkedin.com/in/eloic" icon={Linkedin} />
                                        <SocialLink href="https://github.com/eloic" icon={Facebook} />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Main Content with Grid Layout */}
                    <div className="grid md:grid-cols-1 gap-16">
                        <div className="space-y-8">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="text-4xl md:text-5xl font-bold text-center mb-16"
                            >
                                <span className="bg-gradient-to-r from-[#70C8F2] to-[#FFA600] bg-clip-text text-transparent">
                                    Academic and professional background
                                </span>
                            </motion.h2>
                            <AcademicTimeline isDark={isDark} />
                        </div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-5xl font-bold text-center mb-8 mt-8"
                        >
                            <span className="bg-gradient-to-r from-[#70C8F2] to-[#FFA600] bg-clip-text text-transparent">
                                My skills
                            </span>
                        </motion.h2>
                        <div className="grid md:grid-cols-2 gap-16">
                            <div className="space-y-8">
                                <ProfileSection
                                    title="Hard skills"
                                    icon={Code}
                                    delay={0.6}
                                    isDark={isDark}
                                    className={`${isDark
                                        ? 'bg-[#1a2544]/80 backdrop-blur-sm border-[#FFA600]/30'
                                        : 'bg-white/90 backdrop-blur-sm border-gray-200 shadow-lg'
                                        } rounded-xl p-6 border transition-colors duration-300`}
                                >
                                    <div className="space-y-6">
                                        {Object.entries(hardSkills).map(([category, skills]) => (
                                            <motion.div
                                                key={category}
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                viewport={{ once: true }}
                                            >
                                                <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-3">
                                                    {category.replace('_', ' ')}
                                                </h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {skills.map((skill, index) => (
                                                        <SkillTag
                                                            key={index}
                                                            index={index}
                                                            proficiency={skill.proficiency}
                                                            className={
                                                                `${isDark ?
                                                                    'bg-[#293556]' :
                                                                    'bg-gray-200'
                                                                } px-4 py-2 rounded-full text-sm`
                                                            }
                                                        >
                                                            {skill.name}
                                                        </SkillTag>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </ProfileSection>


                            </div>
                            <div className="space-y-8">
                                <ProfileSection
                                    title="Soft skills"
                                    icon={Brain}
                                    delay={0.8}
                                >
                                    <ul className="space-y-3">
                                        {[
                                            "Strong communication and interpersonal skills",
                                            "Excellent problem-solving abilities",
                                            "Creative thinking and innovation",
                                            "Project management and organization",
                                            "Attention to detail and quality assurance",
                                            "Adaptability and quick learning",
                                            "Team collaboration and leadership"
                                        ].map((skill, index) => (
                                            <motion.li
                                                key={index}
                                                className="flex items-start gap-3"
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1 }}
                                            >
                                                <span className="w-2 h-2 bg-[#FFA600] rounded-full mt-2"></span>
                                                <span className="text-gray-300">{skill}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </ProfileSection>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}