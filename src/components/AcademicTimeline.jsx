import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Code } from 'lucide-react';

const SnakePathTimeline = () => {
    const timelineEvents = [
        {
            year: '2024',
            title: 'Freelance Developer',
            description: 'Bus reservation application with Next.js, MySQL, and Prisma',
            icon: Code,
            position: 'right'
        },
        {
            year: '2023',
            title: 'Web Development Internship',
            description: 'Training management app (PERN Stack) at Etablissement Ralaivao',
            icon: Briefcase,
            position: 'left'
        },
        {
            year: '2023',
            title: "Master's Degree",
            description: 'Software Engineering at ENI',
            icon: GraduationCap,
            position: 'right'
        },
        {
            year: '2022',
            title: 'Software Development Internship',
            description: 'EPI management application at Bionexx using PyQt5',
            icon: Briefcase,
            position: 'left'
        },
        {
            year: '2020-2023',
            title: "Bachelor's Degree",
            description: 'Computer Science at ENI',
            icon: GraduationCap,
            position: 'right'
        },
        {
            year: '2019',
            title: 'High School Diploma',
            description: 'Series D with honors',
            icon: GraduationCap,
            position: 'left'
        }
    ];

    return (
        <div className="relative w-full py-12">
            {/* Snake Path */}
            <div className="absolute left-1/2 top-0 w-2 h-full bg-gradient-to-b from-[#FFA600] to-[#293556] transform -translate-x-1/2" />

            {timelineEvents.map((event, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: event.position === 'left' ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`flex items-center gap-8 mb-16 ${event.position === 'left' ? 'flex-row-reverse' : ''
                        }`}
                >
                    {/* Timeline Node */}
                    <div className="absolute left-1/2 transform -translate-x-1/2">
                        <motion.div
                            className="w-6 h-6 bg-[#1a2544] border-2 border-[#FFA600] rounded-full"
                            whileHover={{ scale: 1.2 }}
                        />
                    </div>

                    {/* Content Card */}
                    <div className={`w-[calc(50%-2rem)] ${event.position === 'left' ? 'text-right' : 'text-left'
                        }`}>
                        <motion.div
                            className="bg-[#1a2544]/90 p-6 rounded-xl border border-[#FFA600]/30 backdrop-blur-sm hover:border-[#FFA600]"
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className={`flex items-center gap-3 mb-2 ${event.position === 'left' ? 'justify-end' : ''
                                }`}>
                                <event.icon className="w-6 h-6 text-[#FFA600]" />
                                <span className="text-[#FFA600] font-bold">{event.year}</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                            <p className="text-gray-300">{event.description}</p>
                        </motion.div>
                    </div>

                    {/* Empty div for spacing on the other side */}
                    <div className="w-[calc(50%-2rem)]" />
                </motion.div>
            ))}
        </div>
    );
};

export default SnakePathTimeline;