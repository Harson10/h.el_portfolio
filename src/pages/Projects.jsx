import { useState } from 'react';
import { Github, ExternalLink, Search, Tags } from 'lucide-react';

export default function Projects() {

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

    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const filteredProjects = projectsData.filter(project => {
        const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
        const descriptionText = project.description.join(' ').toLowerCase();
        const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            descriptionText.includes(searchQuery.toLowerCase()) ||
            project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#293556] to-[#1a2544] text-white pt-24 pb-12">

            {/* Mobile View */}
            <div className="md:hidden px-4">
                <div className="flex flex-col space-y-6">
                    <div className="text-center">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 flex items-center justify-center border-2 border-white mx-auto mb-4">
                            <img src="/Logo_H_Eloïc.png" alt="Logo" className="w-full h-full object-cover" />
                        </div>
                        <h1 className="text-2xl font-bold mb-2">My Projects</h1>
                        <p className="text-gray-300">Discover my achievements and experiences</p>
                    </div>

                    <button
                        onClick={() => setIsSearchVisible(!isSearchVisible)}
                        className="w-full flex items-center justify-center gap-2 bg-[#1a2544] p-3 rounded-lg"
                    >
                        <Search size={20} />
                        <span>Search</span>
                    </button>

                    {isSearchVisible && (
                        <input
                            type="text"
                            placeholder="Search a project..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-[#1a2544] p-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFA600]"
                        />
                    )}

                    <div className="flex flex-wrap gap-2">
                        {categories.map(category => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-3 py-1 rounded-full text-sm ${selectedCategory === category.id
                                    ? 'bg-[#FFA600] text-black'
                                    : 'bg-[#1a2544] text-white'
                                    }`}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        {filteredProjects.map(project => (
                            <div
                                key={project.id}
                                className="bg-[#1a2544] rounded-xl overflow-hidden border border-gray-500 border-1"
                            >
                                <div className="relative aspect-video">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-4">
                                        {project.githubLink && (
                                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                                                className="p-2 bg-white rounded-full text-black hover:bg-[#FFA600] transition-colors">
                                                <Github size={24} />
                                            </a>
                                        )}
                                        {project.liveLink && project.hasDemo && (
                                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                                                className="p-2 bg-white rounded-full text-black hover:bg-[#FFA600] transition-colors">
                                                <ExternalLink size={24} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-bold mb-2">{project.title}</h3>
                                    <p className="text-sm text-gray-300 mb-3">
                                        {project.description.map((line, index) => (
                                            <span key={index}>{line}<br /></span>
                                        ))}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-2 py-1 bg-[#293556] rounded-full text-xs"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Desktop View */}
            <div className="hidden md:block">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">

                        <div className="flex justify-between items-center mb-12">
                            <div>
                                <h1 className="text-3xl font-bold mb-2">My Projects</h1>
                                <p className="text-gray-300">Discover my achievements and experiences</p>
                            </div>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    placeholder="Search a project..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="bg-[#1a2544] pl-10 pr-4 py-2 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFA600]"
                                />
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-3 mb-8">
                            {categories.map(category => (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`px-4 py-2 rounded-full transition-colors ${selectedCategory === category.id
                                        ? 'bg-[#FFA600] text-black'
                                        : 'bg-[#1a2544] text-white hover:bg-[#FFA600] hover:text-black'
                                        }`}
                                >
                                    {category.label}
                                </button>
                            ))}
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            {filteredProjects.map(project => (
                                <div
                                    key={project.id}
                                    className="bg-[#1a2544] rounded-xl overflow-hidden hover:shadow-lg transition-shadow group  border border-gray-500 border-1"
                                >
                                    <div className="relative aspect-video">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                            {project.githubLink && (
                                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                                                    className="p-2 bg-white rounded-full text-black hover:bg-[#FFA600] transition-colors">
                                                    <Github size={24} />
                                                </a>
                                            )}
                                            {project.liveLink && project.hasDemo && (
                                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                                                    className="p-2 bg-white rounded-full text-black hover:bg-[#FFA600] transition-colors">
                                                    <ExternalLink size={24} />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                        <p className="text-gray-300 mb-4">
                                            {project.description.map((line, index) => (
                                                <span key={index}>{line}<br /></span>
                                            ))}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 bg-[#293556] rounded-full text-sm"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {filteredProjects.length === 0 && (
                            <div className="text-center py-12">
                                <Tags className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                                <h3 className="text-xl font-bold mb-2">No project found</h3>
                                <p className="text-gray-400">
                                    Try modifying your filters or your search
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </div>
    );
}