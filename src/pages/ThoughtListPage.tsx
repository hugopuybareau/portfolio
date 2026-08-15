import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
          <li
            key={thought.slug}
            className="group hover:translate-x-1 transition-transform duration-200"
          >
            <Link
              to={`/thoughts/${thought.slug}`}
              className="block group-hover:text-ocean-400 transition-colors"
            >
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
          © 2025 Hugo Puybareau
        </div>
        <div className="mt-2 sm:mt-0 flex gap-4">
          {[
            { icon: <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>, href: "https://x.com/hugopuybareau" },
            { icon: <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387 5.523 1.074-.207 3.974-.207 3.974 4.289 1.105 6.456 5.533 6.177 8.725 1.105 3.22 2.382 4.725 4.271 5.225 1.902.506 3.273 1.546 3.273 1.546 2.119 0 3.794-1.55 3.794-3.794 0-1.533-0.575-2.91-1.488-3.715 0 0-1.045-0.335-2.336-1.402-1.045-0.772-1.488-1.878-1.488-3.146 0-2.802 2.332-5.14 5.14-5.14 2.802 0 5.14 2.338 5.14 5.14 0 2.802-2.338 5.14-5.14 5.14-1.105 0-2.072-0.392-2.754-0.928 0 0-0.262 0.472-0.262 1.402 0 1.402 0.262 2.634 0.762 3.522 0.5 0.888 1.066 1.374 1.69 1.374 0.778 0 1.402-0.55 1.926-1.22 0.472-0.612 0.818-1.5 0.818-2.5 0-2.22-1.78-4-4-4s-4 1.78-4 4c0 1 0.366 1.872 0.84 2.494 0.475 0.622 1.008 1.12 1.59 1.12 0.65 0 1.222-0.484 1.71-1.182 0.554-.78 0.762-1.756 0.762-2.94 0-1.916-1.352-3.476-3.2-3.476-2.426 0-3.94 1.64-3.94 3.84 0 1.406 0.556 2.62 1.486 3.446 0.48 0.434 1.04 0.67 1.644 0.67 0.526 0 1.004-0.174 1.42-0.454 0.372-0.254 0.68-0.628 0.89-1.072 0.242-0.512 0.35-1.126 0.35-1.78 0-1.43-1.158-2.588-2.588-2.588-1.49 0-2.74 1.008-2.74 2.47 0 0.59 0.166 1.134 0.43 1.602 0.272 0.48 0.622 0.89 1.014 1.204 0.42 0.34 0.89 0.59 1.41 0.59 0.46 0 0.89-0.166 1.26-0.45 0.37-0.284 0.62-0.688 0.73-1.156 0.12-0.514 0.17-1.1 0.17-1.72 0-1.22-0.82-2.24-2.02-2.24-1.2 0-2.2 0.84-2.2 2.04 0 0.186 0.03 0.372 0.084 0.556 0.054 0.184 0.12 0.37 0.2 0.554 0.08 0.184 0.18 0.37 0.3 0.546 0.12 0.176 0.26 0.32 0.42 0.42 0.16.1 0.34.16 0.54.16h1.8c0.22 0 0.42-.062 0.58-.188 0.16-.128 0.28-.326 0.34-.586 0.06-.26 0.08-.56 0.08-.9 0-.74-.24-1.38-.66-1.89-.42-.51-1.02-0.78-1.78-0.78-0.72 0-1.34.27-1.78.78-0.42.51-0.66 1.15-0.66 1.89 0 0.34.02.64.06.9.06.254.18.452.34.58 0.16.126.36.188.58.188h1.4c0.16 0 0.32-.03 0.48-.09 0.16-.06 0.28-.16 0.36-.3 0.08-.14 0.12-.3 0.12-.48 0-.34-.16-.62-.42-.82-.26-.2-.6-.28-.98-.28-0.82 0-1.5.44-1.92 1.18-0.42.74-0.6 1.62-0.5 2.58 0.1 0.96.58 1.72 1.36 2.04.78.32 1.62.48 2.5.48 0.82 0 1.6-.16 2.32-.48 0.72-.32 1.26-.78 1.6-1.4 0.34-.62.5-1.34.5-2.12 0-0.66-.04-1.3-.14-1.9-.1-.6-.26-1.12-.52-1.56-.26-.44-.6-.76-1.04-0.98-.44-.22-.96-.32-1.54-.32-1.02 0-1.9.44-2.54 1.18-0.64.74-0.96 1.7-0.96 2.8 0 1.1.24 2.04.7 2.82.46.78 1.18 1.36 2.06 1.76.88.4 1.8.6 2.76.6 0.96 0 1.86-.2 2.66-.6 0.8-.4 1.4-.96 1.8-1.68.4-.72.6-1.56.6-2.5 0-0.94-.16-1.86-.46-2.7-.3-.84-.7-1.54-1.2-2.04-.5-.5-1.1-0.82-1.8-0.98-.7-.16-1.44-.24-2.2-.24-0.72 0-1.42.08-2.08.24-0.66.16-1.26.44-1.78.82-0.52.38-0.92.86-1.18 1.44-.26.58-.38 1.24-.38 1.96 0 0.72.12 1.4.34 2.04.22.64.54 1.2.96 1.68.42.48.94.88 1.54 1.2 0.6.32 1.28.54 2 .54.72 0 1.4-.08 2.04-.24.64-.16 1.24-.44 1.78-.82.54-.38 1.02-.86 1.4-1.44.38-.58.56-1.26.56-2 0-0.74-.18-1.4-.54-2-.36-.6-.84-1.04-1.44-1.3-.6-.26-1.3-.38-2.04-.38-0.72 0-1.42.12-2.08.36-0.66.24-1.26.6-1.78 1.08-0.52.48-0.94 1.06-1.24 1.74-.3.68-.44 1.44-.44 2.26 0 0.82.14 1.6.42 2.32.28.72.64 1.34 1.1 1.86.46.52 1.02.86 1.66 1.02.64.16 1.3.24 2 .24.68 0 1.34-.08 1.96-.24.62-.16 1.2-.44 1.72-.82.52-.38 1.02-.86 1.42-1.44.4-.58.6-1.26.6-2 0-0.72-.12-1.4-.34-2.04-.22-.64-.54-1.2-.96-1.68-.42-.48-.94-.86-1.54-1.06-.6-.2-1.28-.3-1.98-.3z"/></svg>, href: "https://github.com/hugopuybareau/portfolio" },
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
