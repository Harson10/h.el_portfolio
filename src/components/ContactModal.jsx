import { X, Linkedin, Github, Send } from 'lucide-react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import emailjs from '@emailjs/browser';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-[#1a2544] rounded-xl max-w-md w-full relative">
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-gray-400 hover:text-white"
                >
                    <X size={24} />
                </button>
                {children}
            </div>
        </div>
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

const ContactModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState({
        sending: false,
        success: false,
        error: null
    });

    const validateForm = () => {
        const { name, email, message } = formData;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name.trim()) return "The name is required";
        if (!email.trim() || !emailRegex.test(email)) return "Please enter a valid email address";
        if (!message.trim()) return "The message is required";
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
                    message: formData.message,
                    to_email: 'h.eloic.pro@gmail.com'
                },
                'aph7GV8UxmJINktis'
            );

            setStatus({ sending: false, success: true, error: null });
            setFormData({ name: '', email: '', message: '' });
            setTimeout(onClose, 2000);
        } catch (error) {
            setStatus({
                sending: false,
                success: false,
                error: "Error sending the message: " + error
            });
        }
    };

    const socialLinks = [
        {
            icon: <Linkedin size={24} />,
            url: "https://linkedin.com/in/votre-profil",
            label: "LinkedIn"
        },
        {
            icon: <Github size={24} />,
            url: "https://github.com/votre-profil",
            label: "GitHub"
        }
    ];

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="p-6">
                <h2 className="text-2xl font-bold mb-6">Contactez-moi</h2>

                <div className="flex justify-center gap-4 mb-6">
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-[#293556] rounded-full hover:bg-[#FFA600] transition-colors"
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>

                {status.error && (
                    <div className="bg-red-500/20 text-red-400 p-3 rounded-lg mb-4 text-center">
                        {status.error}
                    </div>
                )}

                {status.success && (
                    <div className="bg-green-500/20 text-green-400 p-3 rounded-lg mb-4 text-center">
                        Message sent successfully !
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm mb-1">Full name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full bg-[#293556] rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#FFA600]"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full bg-[#293556] rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#FFA600]"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm mb-1">Message</label>
                        <textarea
                            id="message"
                            rows="4"
                            className="w-full bg-[#293556] rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#FFA600]"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={status.sending}
                        className={`w-full text-black font-bold py-2 rounded-lg transition-colors flex items-center justify-center gap-2 ${status.sending
                            ? 'bg-[#FF8C00] cursor-not-allowed'
                            : 'bg-[#FFA600] hover:bg-[#FF8C00]'
                            }`}
                    >
                        {status.sending ? 'Envoi en cours...' : (
                            <>
                                <Send size={20} />
                                Send
                            </>
                        )}
                    </button>
                </form>
            </div>
        </Modal>
    );
};

ContactModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default ContactModal;