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

interface Playlist {
  id: string;
  name: string;
  description: string;
}

// Add your Spotify playlist IDs here
const playlists: Playlist[] = [
  {
    id: "6byKyWNaic991UCKmtKn2F",
    name: "make rain",
    description: "Musics I discovered through what my dad listens to. Great guitar solos basically",
  },
  {
    id: "0y2iRMCOHtSwqnlIRWDOpS",
    name: "make new",
    description: "\"New wave\" french rap I listen to when skiing or working out",
  },
  {
    id: "0KxApPmwgyo5VkR44tYqCu",
    name: "make bpm",
    description: "car music! its like electronic music (won't go into genres lol)",
  },
  {
    id: "3e1E2uMhX2pLHjPYXjBPJq",
    name: "make immortal",
    description: "this is mostly indie rock and pop. I was listening to this for hours when playing val",
  },
  {
    id: "56pefgU9KCaZQYjogw8xvh",
    name: "make insta",
    description: "cool jazz sounds to renew with my drummer self, cool for cooking",
  },
  {
    id: "1svhaYlmKATSEVwfrwMNW7",
    name: "make alone",
    description: "works great when you don't like your life this one",
  },
];

const PlaylistCard = ({ playlist, index }: { playlist: Playlist; index: number }) => {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="group relative bg-dark-900/50 rounded-2xl overflow-hidden border border-gray-800/50 hover:border-ocean-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(56,189,248,0.15)]"
    >
      {/* Spotify Embed */}
      <div className="relative overflow-hidden h-[80px] md:h-[152px]">
        <iframe
          src={`https://open.spotify.com/embed/playlist/${playlist.id}?utm_source=generator&theme=0`}
          width="100%"
          height="100%"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="block h-full"
        />
      </div>

      {/* Info Section */}
      <div className="p-5">
        <div className="text-lg font-semibold text-gray-100 mb-2 group-hover:text-ocean-400 transition-colors duration-300">
          {playlist.name}
        </div>
        <div className="text-xs sm:text-sm text-gray-400 leading-relaxed">
          {playlist.description}
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-t from-ocean-500/5 to-transparent" />
    </motion.div>
  );
};

const MusicPage: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="min-h-screen px-4 pt-24 pb-10 max-w-4xl mx-auto text-gray-100 font-mono"
    >
      <h1 className="text-3xl font-bold mb-3">Music</h1>
      <p className="text-sm sm:text-base text-gray-400 mb-10 max-w-xl">
        A few playlists I've built over time. Feel free to suggest new music!
      </p>

      {/* Playlist Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {playlists.map((playlist, index) => (
          <PlaylistCard key={playlist.id} playlist={playlist} index={index} />
        ))}
      </div>

      {/* Footer */}
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
              icon: <Code size={20} />,
              href: "https://github.com/hugopuybareau/portfolio",
            },
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

export default MusicPage;
