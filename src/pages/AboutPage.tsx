import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code } from "lucide-react";

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

const AboutPage: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="min-h-screen px-4 pt-24 pb-10 max-w-2xl mx-auto text-gray-100 font-mono"
    >
      <h1 className="text-3xl font-bold mb-6">About Me</h1>

      <ul className="space-y-6 text-base leading-relaxed">
        <li>
          💻 I'm a machine learning engineer and product-focused developer with
          a passion for building intelligent tools. I studied engineering at
          Centrale de Lyon and developed hands-on expertise in NLP, GenAI, and
          full-stack product development.
        </li>
        <li>
          I've built and deployed my first AI-powered SaaS during my last
          internship at BearingPoint. I also produced predictive modeling
          systems using machine learning algorithms for BNP Paribas. I enjoy
          crafting elegant UIs or building scalable backends. Even if I have a
          statistical background made for Data Science, I try to get better as a
          full stack dev.
        </li>
        <li>
          🏄 Outside of tech, I train Brazilian Jiu-Jitsu at Gracie Barra Paris,
          enjoy skiing with family & friends, surfed around New Zealand and the
          Philippines in 2025, and played on my school’s rugby team (XV and 7s).
        </li>
      </ul>

      <div className="flex items-center justify-center gap-4 my-12">
        <div className="flex-1 h-px bg-gray-700" />
        <span className="text-ocean-400 text-sm font-mono">≋</span>
        <div className="flex-1 h-px bg-gray-700" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mb-8">
        <img
          src="/photos/BJJ.png"
          alt="BJJ"
          className="rounded-xl shadow-md object-cover h-64 w-full"
        />
        <img
          src="/photos/nogi-2.png"
          alt="Surfing"
          className="rounded-xl shadow-md object-cover h-64 w-full"
        />
        <img
          src="/photos/nogi.png"
          alt="Rugby"
          className="rounded-xl shadow-md object-cover h-64 w-full"
        />
      </div>

      <div className="flex items-center justify-center gap-4 my-12">
        <div className="flex-1 h-px bg-gray-700" />
        <span className="text-ocean-400 text-sm font-mono">≋</span>
        <div className="flex-1 h-px bg-gray-700" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mb-16">
        <img
          src="/photos/nz2.png"
          alt="Skiing"
          className="rounded-xl shadow-md object-cover h-64 w-full"
        />
        <img
          src="/photos/nz.png"
          alt="Philippines"
          className="rounded-xl shadow-md object-cover h-64 w-full"
        />
        <img
          src="/photos/rugby.png"
          alt="Dev"
          className="rounded-xl shadow-md object-cover h-64 w-full"
        />
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
              icon: <Mail size={20} />,
              href: "mailto:hugo.puybareau@etu.ec-lyon.fr",
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

export default AboutPage;
