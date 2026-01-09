import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin, Code} from "lucide-react";


const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.6,
            ease: "easeOut",
        },
    }),
};

const XIcon = ({ size = 20 }: { size?: number }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

const ContactPage: React.FC = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="min-h-screen flex flex-col px-4 pt-24 pb-10 max-w-2xl mx-auto text-gray-100 font-mono"
        >
            <div className="flex flex-col flex-grow">
                <h1 className="text-3xl font-bold mb-6">Get in Touch</h1>
                <p className="text-base text-gray-400 mb-10">
                    I'm always open to discussing new projects & creative ideas!
                </p>

                <div className="flex justify-center items-center mb-10">
                    <img
                        src="/photos/7.jpeg"
                        alt="Hugo Puybareau"
                        className="w-[250px] h-[250px] rounded-full object-cover shadow-lg border-4 border-transparent bg-gradient-to-r from-ocean-400 to-ocean-600 p-1"
                    />
                </div>

                <ul className="space-y-6 text-base leading-relaxed">
                    <li className="flex items-start gap-3">
                        <MapPin size={18} className="text-ocean-400 mt-1" />
                        <span className="text-gray-300">
                            Paris/Bordeaux, France – open to remote or hybrid opportunities
                        </span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Mail size={18} className="text-ocean-400 mt-1" />
                        <a
                            href="mailto:hugo.puybareau@etu.ec-lyon.fr"
                            className="text-gray-300 hover:text-ocean-400 transition-colors"
                        >
                            hugo.puybareau@etu.ec-lyon.fr
                        </a>
                    </li>
                    <li className="flex items-start gap-3">
                        <Phone size={18} className="text-ocean-400 mt-1" />
                        <a
                            href="tel:+33612345678"
                            className="text-gray-300 hover:text-ocean-400 transition-colors"
                        >
                            +33 6 19 75 37 04
                        </a>
                    </li>
                </ul>

                <motion.div
                    className="flex flex-col sm:flex-row gap-4 mt-10"
                    variants={fadeIn}
                >
                    <a
                        href="/resume_PUYBAREAU.pdf"
                        className="relative inline-flex items-center gap-2 text-ocean-400 hover:text-ocean-200 transition-colors before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r from-ocean-400 to-ocean-600 hover:before:w-full before:transition-all before:duration-300 before:rounded-full"
                    >
                        → view my resume
                    </a>
                </motion.div>
            </div>

            <motion.footer
                className="text-sm text-gray-500 mt-20 border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between"
                variants={fadeIn}
            >
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-ocean-400 to-ocean-600">
                    © 2025 Hugo Puybareau
                </div>

                <div className="mt-2 sm:mt-0 flex gap-4">
                    {[
                        {
                            icon: <Github size={20} />,
                            href: "https://github.com/hugopuybareau",
                        },
                        {
                            icon: <Linkedin size={20} />,
                            href: "https://www.linkedin.com/in/hugopuybareau/",
                        },
                        {
                            icon: <XIcon size={20} />,
                            href: "https://x.com/hugopuybareau",
                        },
                        {
                            icon: <Mail size={20} />,
                            href: "mailto:hugo [dot] puybareau [at] gmail [dot] com",
                        },
                        {
                            icon: <Code size={20} />,
                            href: "https://github.com/hugopuybareau/portfolio",
                        }, // repo
                    ].map(({ icon, href }, idx) => (
                        <a
                            key={idx}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative text-gray-400 hover:text-ocean-400 transition duration-300 before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-0 before:bg-gradient-to-r from-ocean-400 to-ocean-600 hover:before:w-full before:transition-all before:duration-300"
                        >
                            {icon}
                        </a>
                    ))}
                </div>
            </motion.footer>
        </motion.div>
    );
};

export default ContactPage;
