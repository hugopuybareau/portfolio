import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, XIcon, Code } from "lucide-react";
import { Link } from "react-router-dom";
import { marked } from "marked";
import { thoughts } from "../data/thoughts";

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

const ThoughtPage: React.FC = () => {
  const [html, setHtml] = useState<string>("");

  const thought = thoughts.find((t) => t.slug === window.location.pathname.split("/").pop()) ?? thoughts[0];

  if (!html) {
    marked.parse(thought.content, (err, result) => {
      if (!err && result) setHtml(result.toString());
    });
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="min-h-screen px-4 pt-24 pb-10 max-w-2xl mx-auto text-gray-100 font-mono"
    >
      <Link
        to="/thoughts"
        className="inline-flex items-center gap-1 text-gray-400 hover:text-ocean-400 transition-colors mb-6 before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-0 before:bg-gradient-to-r from-ocean-400 to-ocean-600 hover:before:w-full before:transition-all before:duration-300"
      >
        <ArrowLeft size={14} />
        all thoughts
      </Link>

      <div className="mb-4">
        <h1 className="text-3xl font-bold mb-2">{thought.title}</h1>
        <p className="text-xs text-gray-500 font-mono">{thought.date}</p>
      </div>

      <div
        className="text-sm sm:text-base text-gray-300 leading-relaxed space-y-4 prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      <motion.footer
        className="text-sm text-gray-500 mt-20 border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between"
        variants={fadeIn}
      >
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-ocean-400 to-ocean-600">
          © 2025 Hugo Puybareau
        </div>
        <div className="mt-2 sm:mt-0 flex gap-4">
          {[
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

export default ThoughtPage;
