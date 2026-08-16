import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { XIcon, Code } from "lucide-react";
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

const ThoughtListPage: React.FC = () => {
  const sorted = [...thoughts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="min-h-screen px-4 pt-24 pb-10 max-w-2xl mx-auto text-gray-100 font-mono"
    >
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-4">Thoughts</h1>
        <p className="text-sm sm:text-base text-gray-400 max-w-xl leading-relaxed">
          Short writings, half-baked ideas, and things worth remembering.
        </p>
      </div>

      <ul className="space-y-10">
        {sorted.map((thought) => (
          <li key={thought.slug} className="group hover:translate-x-1 transition-transform duration-200">
            <Link to={`/thoughts/${thought.slug}`} className="block group-hover:text-ocean-400 transition-colors">
              <div className="flex items-baseline justify-between gap-4 mb-2">
                <h2 className="text-lg font-semibold text-gray-100 group-hover:text-ocean-400 transition-colors">
                  {thought.title}
                </h2>
                <time className="text-xs text-gray-500 font-mono whitespace-nowrap">
                  {new Date(thought.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                </time>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">
                {thought.content.replace(/[#`[*]_]/g, "").slice(0, 180)}{thought.content.length > 180 ? "…" : ""}
              </p>
            </Link>
          </li>
        ))}
      </ul>

      <motion.footer
        className="text-sm text-gray-500 mt-20 border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between"
        variants={fadeIn}
      >
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-ocean-400 to-ocean-600">
          © 2026 Hugo Puybareau
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

export default ThoughtListPage;
