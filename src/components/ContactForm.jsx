/* eslint-disable react/no-unescaped-entities */

import { useState } from 'react';
import { Send } from 'lucide-react';
import { FaMailBulk, FaUserCircle, FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export default function ContactForm({ isDark = true }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsapp: '',
        message: ''
    });
    const [status, setStatus] = useState({
        sending: false,
        success: false,
        error: null
    });

    const validateForm = () => {
        const { name, email, whatsapp, message } = formData;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;

        if (!name.trim()) return "Your full name is required";
        if (!email.trim() || !emailRegex.test(email)) return "Please enter a valid email address";
        if (whatsapp && !phoneRegex.test(whatsapp)) return "Please enter a valid WhatsApp number";
        if (!message.trim()) return "Your message is important to me. Please share your thoughts.";
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationError = validateForm();
        if (validationError) {
            setStatus({ sending: false, success: false, error: validationError });
            return;
        }

        setStatus({ sending: true, success: false, error: null });

        try {
            await emailjs.send(
                'service_f4swcdq',
                'template_fo5jx3b',
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    from_whatsapp: formData.whatsapp,
                    message: formData.message,
                    to_email: 'h.eloic.pro@gmail.com'
                },
                'aph7GV8UxmJINktis'
            );

            setStatus({ sending: false, success: true, error: null });
            setFormData({ name: '', email: '', whatsapp: '', message: '' });
        } catch (error) {
            setStatus({
                sending: false,
                success: false,
                error: "Error sending the message. Please try again." + error
            });
        }
    };

    const inputClasses = `w-full ${isDark ? 'bg-[#293556]/50 border-white/10 placeholder:text-white/30' : 'bg-gray-50/50 border-gray-200 placeholder:text-gray-400'} 
        rounded-lg p-3 border focus:outline-none focus:ring-2 focus:ring-[#FFA600]/50 focus:border-transparent transition-all duration-300`;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`w-full max-w-4xl mx-auto ${isDark ? 'bg-[#1a2544]/50 border-white/10' : 'bg-white/50 border-gray-200'} 
                backdrop-blur-sm rounded-2xl p-4 shadow-xl border transition-colors duration-300`}
        >
            <div className="md:flex">
                <div className="md:w-1/2 p-6 md:p-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#70C8F2] to-[#FFA600] bg-clip-text text-transparent">
                            Let's Talk
                        </h2>
                        <p className={`${isDark ? 'text-white/60' : 'text-gray-600'} text-sm mb-6 transition-colors duration-300`}>
                            Have a project in mind? Want to collaborate?
                            I'm just a message away. Fill out the form below.
                        </p>
                    </motion.div>

                    {status.error && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded-lg mb-4 text-sm"
                        >
                            {status.error}
                        </motion.div>
                    )}

                    {status.success && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-green-500/10 border border-green-500/20 text-green-400 p-3 rounded-lg mb-4 text-sm"
                        >
                            Message sent successfully! I'll get back to you soon.
                        </motion.div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className={`block text-sm ${isDark ? 'text-white/60' : 'text-gray-600'} mb-1.5 transition-colors duration-300`}>
                                Full Name
                            </label>
                            <div className="relative">
                                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                    <FaUserCircle className="text-green-500" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="How should I address you?"
                                    className={`${inputClasses} pl-10`}
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                        </div>

                        <div>
                            <label className={`block text-sm ${isDark ? 'text-white/60' : 'text-gray-600'} mb-1.5 transition-colors duration-300`}>
                                Email
                            </label>
                            <div className="relative">
                                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                    <FaMailBulk className="text-green-500" />
                                </div>
                                <input
                                    type="email"
                                    placeholder="Your preferred contact email"
                                    className={`${inputClasses} pl-10`}
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                        </div>

                        <div>
                            <label className={`block text-sm ${isDark ? 'text-white/60' : 'text-gray-600'} mb-1.5 transition-colors duration-300`}>
                                WhatsApp (Optional)
                            </label>
                            <div className="relative">
                                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                    <FaWhatsapp className="text-green-500" />
                                </div>
                                <input
                                    type="tel"
                                    placeholder="+1234567890 (with country code)"
                                    className={`${inputClasses} pl-10`}
                                    value={formData.whatsapp}
                                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                                />
                            </div>
                        </div>

                        <div>
                            <label className={`block text-sm ${isDark ? 'text-white/60' : 'text-gray-600'} mb-1.5 transition-colors duration-300`}>
                                Message
                            </label>
                            <textarea
                                rows="4"
                                placeholder="What's on your mind? Share your project ideas, questions, or just say hello!"
                                className={`${inputClasses} resize-none`}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                        </div>

                        <motion.button
                            type="submit"
                            disabled={status.sending}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`w-full font-medium py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${status.sending
                                ? 'bg-[#FFA600]/50 cursor-not-allowed'
                                : 'bg-gradient-to-r from-[#FFA600] to-[#FF8C00] hover:shadow-lg hover:shadow-[#FFA600]/20'
                                } text-white`}
                        >
                            {status.sending ? (
                                'Sending...'
                            ) : (
                                <>
                                    <Send size={18} />
                                    <span>Send Message</span>
                                </>
                            )}
                        </motion.button>
                    </form>
                </div>

                <div className={`hidden md:flex md:w-1/2 ${isDark ? 'bg-gradient-to-br from-[#293556]/50 to-[#1a2544]/50' : 'bg-gradient-to-br from-gray-50/50 to-white/50'} 
                    items-center justify-center p-8 transition-colors duration-300`}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 0.7, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="relative w-64 h-64"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#70C8F2]/20 to-[#FFA600]/20 rounded-full blur-2xl" />
                        <img
                            src="/Logo_H_Eloïc.png"
                            alt="Logo"
                            className="w-full h-full object-contain relative z-10"
                        />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}

ContactForm.propTypes = {
    isDark: PropTypes.bool,
};

// import { useState } from 'react';
// import { Send } from 'lucide-react';
// import { FaMailBulk, FaUserCircle, FaWhatsapp } from 'react-icons/fa';
// import emailjs from '@emailjs/browser';
// import { motion } from 'framer-motion';

// export default function ContactForm() {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         whatsapp: '',
//         message: ''
//     });
//     const [status, setStatus] = useState({
//         sending: false,
//         success: false,
//         error: null
//     });

//     const validateForm = () => {
//         const { name, email, whatsapp, message } = formData;
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;

//         if (!name.trim()) return "Your full name is required";
//         if (!email.trim() || !emailRegex.test(email)) return "Please enter a valid email address";
//         if (whatsapp && !phoneRegex.test(whatsapp)) return "Please enter a valid WhatsApp number";
//         if (!message.trim()) return "Your message is important to me. Please share your thoughts.";
//         return null;
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const validationError = validateForm();
//         if (validationError) {
//             setStatus({ sending: false, success: false, error: validationError });
//             return;
//         }

//         setStatus({ sending: true, success: false, error: null });

//         try {
//             await emailjs.send(
//                 'service_f4swcdq',
//                 'template_fo5jx3b',
//                 {
//                     from_name: formData.name,
//                     from_email: formData.email,
//                     from_whatsapp: formData.whatsapp,
//                     message: formData.message,
//                     to_email: 'h.eloic.pro@gmail.com'
//                 },
//                 'aph7GV8UxmJINktis'
//             );

//             setStatus({ sending: false, success: true, error: null });
//             setFormData({ name: '', email: '', whatsapp: '', message: '' });
//         } catch (error) {
//             setStatus({
//                 sending: false,
//                 success: false,
//                 error: "Error sending the message. Please try again." + error
//             });
//         }
//     };

//     const inputClasses = "w-full bg-[#293556]/50 rounded-lg p-3 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#FFA600]/50 focus:border-transparent transition-all duration-300 placeholder:text-white/30";

//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="w-full max-w-4xl mx-auto bg-[#1a2544]/50 backdrop-blur-sm bg-white/5 rounded-2xl p-4 shadow-xl border border-white/10"

//         >
//             <div className="md:flex">
//                 <div className="md:w-1/2 p-6 md:p-8">
//                     <motion.div
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ delay: 0.2 }}
//                     >
//                         <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#70C8F2] to-[#FFA600] bg-clip-text text-transparent">
//                             Let's Talk
//                         </h2>
//                         <p className="text-white/60 text-sm mb-6">
//                             Have a project in mind? Want to collaborate?
//                             I'm just a message away. Fill out the form below.
//                         </p>
//                     </motion.div>

//                     {status.error && (
//                         <motion.div
//                             initial={{ opacity: 0, y: -10 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             className="bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded-lg mb-4 text-sm"
//                         >
//                             {status.error}
//                         </motion.div>
//                     )}

//                     {status.success && (
//                         <motion.div
//                             initial={{ opacity: 0, y: -10 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             className="bg-green-500/10 border border-green-500/20 text-green-400 p-3 rounded-lg mb-4 text-sm"
//                         >
//                             Message sent successfully! I'll get back to you soon.
//                         </motion.div>
//                     )}

//                     <form onSubmit={handleSubmit} className="space-y-4">
//                         <div>
//                             <label className="block text-sm text-white/60 mb-1.5">Full Name</label>
//                             <div className="relative">
//                                 <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
//                                     <FaUserCircle className="text-green-500" />
//                                 </div>
//                                 <input
//                                     type="text"
//                                     placeholder="How should I address you?"
//                                     className={`${inputClasses} pl-10`}
//                                     value={formData.name}
//                                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                                 />
//                             </div>
//                         </div>

//                         <div>
//                             <label className="block text-sm text-white/60 mb-1.5">Email</label>
//                             <div className="relative">
//                                 <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
//                                     <FaMailBulk className="text-green-500" />
//                                 </div>
//                                 <input
//                                     type="email"
//                                     placeholder="Your preferred contact email"
//                                     className={`${inputClasses} pl-10`}
//                                     value={formData.email}
//                                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                                 />
//                             </div>
//                         </div>

//                         <div>
//                             <label className="block text-sm text-white/60 mb-1.5">WhatsApp (Optional)</label>
//                             <div className="relative">
//                                 <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
//                                     <FaWhatsapp className="text-green-500" />
//                                 </div>
//                                 <input
//                                     type="tel"
//                                     placeholder="+1234567890 (with country code)"
//                                     className={`${inputClasses} pl-10`}
//                                     value={formData.whatsapp}
//                                     onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
//                                 />
//                             </div>
//                         </div>

//                         <div>
//                             <label className="block text-sm text-white/60 mb-1.5">Message</label>
//                             <textarea
//                                 rows="4"
//                                 placeholder="What's on your mind? Share your project ideas, questions, or just say hello!"
//                                 className={`${inputClasses} resize-none`}
//                                 value={formData.message}
//                                 onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                             />
//                         </div>

//                         <motion.button
//                             type="submit"
//                             disabled={status.sending}
//                             whileHover={{ scale: 1.02 }}
//                             whileTap={{ scale: 0.98 }}
//                             className={`w-full font-medium py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${status.sending
//                                 ? 'bg-[#FFA600]/50 cursor-not-allowed'
//                                 : 'bg-gradient-to-r from-[#FFA600] to-[#FF8C00] hover:shadow-lg hover:shadow-[#FFA600]/20'
//                                 }`}
//                         >
//                             {status.sending ? (
//                                 'Sending...'
//                             ) : (
//                                 <>
//                                     <Send size={18} />
//                                     <span>Send Message</span>
//                                 </>
//                             )}
//                         </motion.button>
//                     </form>
//                 </div>

//                 <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-[#293556]/50 to-[#1a2544]/50 items-center justify-center p-8">
//                     <motion.div
//                         initial={{ opacity: 0, scale: 0.5 }}
//                         animate={{ opacity: 0.7, scale: 1 }}
//                         transition={{ delay: 0.3, duration: 0.5 }}
//                         className="relative w-64 h-64"
//                     >
//                         <div className="absolute inset-0 bg-gradient-to-br from-[#70C8F2]/20 to-[#FFA600]/20 rounded-full blur-2xl" />
//                         <img
//                             src="/Logo_H_Eloïc.png"
//                             alt="Logo"
//                             className="w-full h-full object-contain relative z-10"
//                         />
//                     </motion.div>
//                 </div>
//             </div>
//         </motion.div>
//     );
// }