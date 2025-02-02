/* eslint-disable react/no-unescaped-entities */

import { GraduationCap, Briefcase, Code, Brain } from 'lucide-react';
import PropTypes from 'prop-types';


const ProfileSection = ({ title, icon: Icon, children, className = "" }) => (
    <div className={`bg-[#1a2544]/80 backdrop-blur-sm rounded-xl p-6 ${className}`}>
        <div className="flex items-center gap-3 mb-4">
            <Icon className="text-[#FFA600] w-6 h-6" />
            <h2 className="text-xl font-bold text-[#FFA600]">{title}</h2>
        </div>
        {children}
    </div>
);

ProfileSection.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

ProfileSection.defaultProps = {
    className: ""
};

const SkillTag = ({ children }) => (
    <span className="bg-[#293556] px-4 py-2 rounded-full text-sm font-medium">
        {children}
    </span>
);

SkillTag.propTypes = {
    children: PropTypes.node.isRequired
};



export default function Profile() {

    const schoolCareer = [
        {
            period: "2023-2024",
            description: "First year of Master's training at ENI with a Bachelor's degree"
        },
        {
            period: "2020-2023",
            description: "Bachelor's degree training at ENI"
        },
        {
            period: "2019",
            description: "High school diploma, series D"
        }
    ];

    const hardSkills = {
        frontend: ['React', 'HTML5', 'CSS3', 'JavaScript'],
        backend: ['Node.js', 'Python', 'Express'],
        database: ['MySQL', 'PostgreSQL'],
        ui_ux: ['Figma'],
        project_management: ['Trello']
    };

    const softSkills = [
        "Interpersonal skills and communication",
        "Patience, understanding, and stress management",
        "Team spirit and adaptability",
        "Autonomy and versatility",
        "Result-oriented work mode",
        "Managing client expectations and requirements",
        "Passion for art and computing"
    ];



    return (
        <div className="min-h-screen bg-gradient-to-b from-[#293556] to-[#1a2544] text-white">
            <div className="container mx-auto px-4 py-32">
                <div className="max-w-5xl mx-auto">
                    {/* Header Section */}
                    <div className="flex flex-col justify-between items-center">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
                            <div className="w-48 h-48 relative rounded-full border-2 border-white">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full transform -rotate-6"></div>
                                <img
                                    src="/Eloïc.jpg"
                                    alt="Profile"
                                    className="w-full h-full object-cover rounded-full border-2 border-white relative"
                                />
                            </div>

                            <div className="flex-1 text-center md:text-left">
                                <div className="flex items-center justify-center md:justify-start gap-4 mb-2">
                                    <h1 className="text-4xl font-bold">HARENARISOA Eloïc</h1><br />
                                </div>
                                <h2 className="text-xl font-semibold mb-4">Software Engineer / Web Developer / UI-UX Designer </h2>
                                <p className="text-lg text-gray-300 max-w-2xl">
                                    With a few beginnings already in place, I am always looking for new challenges to grow in the professional field.
                                    Successfully completing fulfilling projects and ensuring client satisfaction are my main goals.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-8">
                            <ProfileSection title="Academic Background" icon={GraduationCap}>
                                <div className="space-y-4">
                                    {schoolCareer.map((item, index) => (
                                        <div key={index} className="border-l-2 border-[#FFA600] pl-4">
                                            <p className="font-bold text-[#FFA600]">{item.period}</p>
                                            <p className="text-gray-300">{item.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </ProfileSection>

                            <ProfileSection title="Expertise" icon={Briefcase}>
                                <p className="text-gray-300 text-justify m-2">
                                    I have always paid special attention to visual aspects,
                                    which has led me to a passion for drawing, design, and currently web development.
                                    I strive to perfect every detail. I don't limit myself to development;
                                    fulfillment lies in openness, and I regularly train to meet market needs.
                                </p>
                            </ProfileSection>
                        </div>

                        <div className="space-y-8">
                            <ProfileSection title="Hard Skills" icon={Code}>
                                <div className="space-y-6">
                                    {Object.entries(hardSkills).map(([category, skills]) => (
                                        <div key={category}>
                                            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-3">
                                                {category}
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {skills.map((skill, index) => (
                                                    <SkillTag key={index}>{skill}</SkillTag>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </ProfileSection>

                            <ProfileSection title="Soft Skills" icon={Brain}>
                                <ul className="space-y-3">
                                    {softSkills.map((skill, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <span className="w-2 h-2 bg-[#FFA600] rounded-full mt-2"></span>
                                            <span className="text-gray-300">{skill}</span>
                                        </li>
                                    ))}
                                </ul>
                            </ProfileSection>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}