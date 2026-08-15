import { motion } from "framer-motion";
import { Github, Linkedin, Code } from "lucide-react";

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
      className="min-h-screen px-4 pt-24 pb-10 max-w-2xl mx-auto text-gray-100 font-mono"
    >
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <p className="text-sm sm:text-base text-gray-400 max-w-xl leading-relaxed">
          Open to new projects and interesting conversations. Find me on the links below.
        </p>
      </div>

      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {[
          { icon: <Github size={18} />, href: "https://github.com/hugopuybareau", label: "GitHub" },
          { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/hugopuybareau/", label: "LinkedIn" },
          { icon: <XIcon size={18} />, href: "https://x.com/hugopuybareau", label: "X" },
          { icon: <Code size={18} />, href: "https://github.com/hugopuybareau/portfolio", label: "This repo" },
        ].map(({ icon, href, label }, idx) => (
          <a
            key={idx}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-700/50 text-gray-400 hover:text-ocean-400 hover:border-ocean-500/30 transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-0 before:bg-gradient-to-r from-ocean-400 to-ocean-600 hover:before:w-full before:transition-all before:duration-300"
          >
            {icon}
            <span className="text-sm">{label}</span>
          </a>
        ))}
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
            { icon: <Github size={20} />, href: "https://github.com/hugopuybareau" },
            { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/hugopuybareau/" },
            { icon: <XIcon size={20} />, href: "https://x.com/hugopuybareau" },
            { icon: <Code size={20} />, href: "https://github.com/hugopuybareau/portfolio" },
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
