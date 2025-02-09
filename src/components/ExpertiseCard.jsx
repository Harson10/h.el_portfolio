import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const ExpertiseCard = ({ icon: Icon, title, description, isDark = true }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className={`${isDark
                    ? 'bg-[#1a2544]/80 border-gray-700'
                    : 'bg-white/95 border-gray-200 shadow-lg'
                } backdrop-blur-sm p-6 rounded-xl border transition-colors duration-300`}
        >
            <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 ${isDark
                        ? 'bg-[#293556]'
                        : 'bg-blue-50'
                    } rounded-lg transition-colors duration-300`}>
                    <Icon className={`w-6 h-6 ${isDark
                            ? 'text-[#70C8F2]'
                            : 'text-blue-600'
                        } transition-colors duration-300`} />
                </div>
                <h3 className={`text-xl font-bold ${isDark
                        ? 'text-white'
                        : 'text-gray-800'
                    } transition-colors duration-300`}>
                    {title}
                </h3>
            </div>
            <p className={`${isDark
                    ? 'text-gray-300'
                    : 'text-gray-600'
                } transition-colors duration-300`}>
                {description}
            </p>
        </motion.div>
    );
};

ExpertiseCard.propTypes = {
    icon: PropTypes.elementType.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isDark: PropTypes.bool
};

export default ExpertiseCard;