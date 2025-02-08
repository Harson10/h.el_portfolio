import { useState, useEffect } from 'react';
import { Github, ExternalLink, Search, Tags } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

const ProjectCard = ({ project, isDark }) => (

    <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        whileHover={{ y: -5 }}
        className="bg-[#1a2544] rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group border border-gray-500"
    >
        <div className="relative aspect-video overflow-hidden">
            <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
            />
            <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center gap-4"
            >
                {project.githubLink && (
                    <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, backgroundColor: '#FFA600' }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 bg-white rounded-full text-black transition-colors"
                    >
                        <Github size={24} />
                    </motion.a>
                )}
                {project.liveLink && project.hasDemo && (
                    <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, backgroundColor: '#FFA600' }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 bg-white rounded-full text-black transition-colors"
                    >
                        <ExternalLink size={24} />
                    </motion.a>
                )}
            </motion.div>
        </div>
        <motion.div className="p-6">
            <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'
                }`}>
                {project.title}
            </h3>
            <div className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                {project.description}
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech, index) => (
                    <motion.span
                        key={index}
                        className={`px-3 py-1 rounded-full text-sm ${isDark
                            ? 'bg-[#293556] text-white'
                            : 'bg-gray-100 text-gray-800'
                            }`}
                    >
                        {tech}
                    </motion.span>
                ))}
            </div>
        </motion.div>
    </motion.div>
);

ProjectCard.propTypes = {
    project: PropTypes.object.isRequired,
    isDark: PropTypes.bool.isRequired
};

const CategoryButton = ({ category, isSelected, onClick }) => (
    <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className={`px-4 py-2 rounded-full transition-all duration-300 ${isSelected
            ? 'bg-[#FFA600] text-black'
            : 'bg-[#1a2544] text-white hover:bg-[#FFA600] hover:text-black'
            }`}
    >
        {category.label}
    </motion.button>
);

CategoryButton.propTypes = {
    category: PropTypes.object.isRequired,
    isSelected: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default function Projects() {

    const [isDark, setIsDark] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchVisible, setIsSearchVisible] = useState(false);

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



    const projectsData = [
        {
            id: 1,
            title: "LearningPro module 1 (Frontend)",
            hasDemo: true,
            description: [
                "- For a company",
                "- Actor : Administrator, Trainer, Participant.",
                "- Features : Registration, three-level authentication, training and access management.",
                "- Note : Module 1 ~ 'training and monitoring' / Module 2 ~ 'test and evaluation'"
            ],
            image: "/projects/learning_pro_frontend.png",
            technologies: ["React", "TypeScript", "Tailwind CSS", "Axios"],
            category: "frontend",
            githubLink: "https://github.com/Harson10/LearningPro_mod1_frontend",
            liveLink: "https://github.com/Harson10/LearningPro_mod1_frontend",
            featured: true
        },
        {
            id: 2,
            title: "LearningPro module 1 (Backend)",
            hasDemo: false,
            description: [
                "- For a company",
                "- Actor: Administrator, Trainer, Participant.",
                "- Features: Endpoint security, model implementation, and API configuration.",
                "- Note: Module 1 ~ 'training and monitoring' / Module 2 ~ 'test and evaluation'"
            ],
            image: "/projects/learning_pro_backend.png",
            technologies: ["Node.js", "Express", "TypeScript", "PostgreSQL", "Sequelize", "Swagger", "Axios"],
            category: "backend",
            githubLink: "https://github.com/Harson10/LearningPro_mod1_backend",
            liveLink: "",
            featured: true
        },
    ];

    const categories = [
        { id: 'all', label: 'All' },
        { id: 'fullstack', label: 'Full Stack' },
        { id: 'frontend', label: 'Frontend' },
        { id: 'backend', label: 'Backend' },
        { id: 'mobile', label: 'Mobile' },
    ];


    const filteredProjects = projectsData.filter(project => {
        const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
        const descriptionText = project.description.join(' ').toLowerCase();
        const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            descriptionText.includes(searchQuery.toLowerCase()) ||
            project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`min-h-screen transition-colors duration-300  pt-24 pb-12 ${isDark
                ? 'bg-gradient-to-b from-[#293556] to-[#1a2544] text-white'
                : 'bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 text-gray-900'
                }`}
        >
            {/* Mobile View */}
            <motion.div
                className="md:hidden px-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="flex flex-col space-y-6">
                    <motion.div
                        className="text-center"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                    >
                        <motion.div
                            className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 flex items-center justify-center border-2 border-white mx-auto mb-4"
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                            <img src="/Logo_H_Eloïc.png" alt="Logo" className="w-full h-full object-cover" />
                        </motion.div>
                        <motion.h1 className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'
                            }`}>
                            My Projects
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className={isDark ? 'text-gray-300' : 'text-gray-600'}
                        >
                            Discover my achievements and experiences
                        </motion.p>
                    </motion.div>

                    {/* Search and Categories */}
                    <motion.div className="space-y-4">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setIsSearchVisible(!isSearchVisible)}
                            className="w-full flex items-center justify-center gap-2 bg-[#1a2544] p-3 rounded-lg"
                        >
                            <Search size={20} />
                            <span>Search</span>
                        </motion.button>

                        <AnimatePresence>
                            {isSearchVisible && (
                                <motion.input
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    type="text"
                                    placeholder="Search a project..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-[#1a2544] p-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFA600]"
                                />
                            )}
                        </AnimatePresence>

                        <motion.div className="flex flex-wrap gap-3 mb-8">
                            {categories.map((category) => (
                                <CategoryButton
                                    key={category.id}
                                    category={category}
                                    isSelected={selectedCategory === category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    isDark={isDark}
                                    className={`
                                    ${category.isSelected
                                            ? 'bg-[#FFA600] text-white'
                                            : isDark
                                                ? 'bg-[#1a2544] text-white hover:bg-[#FFA600] hover:text-white'
                                                : 'bg-white text-gray-900 hover:bg-[#FFA600] hover:text-white'
                                        }
                                    px-4 py-2 rounded-full transition-colors duration-300
                                `}
                                />
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Projects Grid */}
                    <AnimatePresence mode="wait">
                        <motion.div className="grid grid-cols-1 gap-4">
                            {filteredProjects.map(project => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                    className={`
                                        ${isDark
                                            ? 'bg-[#1a2544]'
                                            : 'bg-white'
                                        } rounded-xl overflow-hidden hover:shadow-lg`
                                    }
                                />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </motion.div >

            {/* Desktop View */}
            < motion.div
                className="hidden md:block"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="container mx-auto px-4">
                    <motion.div className="max-w-5xl mx-auto">
                        <motion.div
                            className="flex justify-between items-center mb-12"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            <div>
                                <motion.h1
                                    className="text-3xl font-bold mb-2"
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    My Projects
                                </motion.h1>
                                <motion.p
                                    className="text-gray-300"
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    Discover my achievements and experiences
                                </motion.p>
                            </div>
                            <motion.div
                                className="relative"
                                initial={{ x: 20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                <motion.input
                                    whileFocus={{ scale: 1.02 }}
                                    type="text"
                                    placeholder="Search a project..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="bg-[#1a2544] pl-10 pr-4 py-2 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFA600] transition-all duration-300"
                                />
                            </motion.div>
                        </motion.div>

                        <motion.div className="flex flex-wrap gap-3 mb-8">
                            {categories.map((category) => (
                                <CategoryButton
                                    key={category.id}
                                    category={category}
                                    isSelected={selectedCategory === category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    isDark={isDark}
                                    className={`
                                    ${category.isSelected
                                            ? 'bg-[#FFA600] text-white'
                                            : isDark
                                                ? 'bg-[#1a2544] text-white hover:bg-[#FFA600] hover:text-white'
                                                : 'bg-white text-gray-900 hover:bg-[#FFA600] hover:text-white'
                                        }
                                    px-4 py-2 rounded-full transition-colors duration-300
                                `}
                                />
                            ))}
                        </motion.div>

                        <AnimatePresence mode="wait">
                            {filteredProjects.length > 0 ? (
                                <motion.div
                                    className="grid grid-cols-2 gap-6"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    {filteredProjects.map(project => (
                                        <ProjectCard key={project.id} project={project} />
                                    ))}
                                </motion.div>
                            ) : (
                                <motion.div
                                    className="text-center py-12"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                >
                                    <motion.div
                                        animate={{
                                            rotate: [0, 10, -10, 0],
                                            scale: [1, 1.1, 0.9, 1]
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            repeatType: "reverse"
                                        }}
                                    >
                                        <Tags className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                                    </motion.div>
                                    <h3 className="text-xl font-bold mb-2">No project found</h3>
                                    <p className="text-gray-400">
                                        Try modifying your filters or your search
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </motion.div >
        </motion.div >
    );
}