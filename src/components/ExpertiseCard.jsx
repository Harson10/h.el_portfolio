import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export default function ExpertiseCard({ title, description, icon: Icon }) {

    ExpertiseCard.propTypes = {
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        icon: PropTypes.elementType.isRequired,
    };

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-[#1a2544]/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
        >
            <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#293556] rounded-lg">
                    <Icon className="w-6 h-6 text-[#70C8F2]" />
                </div>
                <h3 className="text-xl font-bold text-white">{title}</h3>
            </div>
            <p className="text-gray-300">{description}</p>
        </motion.div>
    );
}