import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code, ArrowRight } from "lucide-react";

import CentraleLyonLogo from "/icons/centraleLyonLogo.png";
import BNPLogo from "/icons/bnpParibas.png";
import DemandsensLogo from "/icons/demandsens.png";
import GracieBarraLogo from "/icons/gracieBarra.png";
import QRTLogo from "/icons/qrtLogo.png";

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

const HomePage: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="min-h-screen px-4 pt-24 pb-10 max-w-2xl mx-auto text-gray-100 font-mono"
    >
      <ul className="grid gap-1 text-base">
        <li className="group flex items-start gap-4 pl-4 relative hover:translate-x-1 transition-transform duration-200 leading-relaxed">
          <span>🏄 AI/ML engineer, student, and builder of intelligent products.</span>
        </li>

        <li className="group flex items-start gap-4 pl-4 relative hover:translate-x-1 transition-transform duration-200">
          <span className="text-gray-300">
            🎓 CS & engineering @{" "}
            <span className="inline-flex items-center gap-1">
              <img
                src={CentraleLyonLogo}
                alt="Centrale Lyon"
                className="w-4 h-4 object-contain relative top-[3px]"
              />
              <a
                href="https://www.ec-lyon.fr/formation/ingenieur-generaliste"
                className="relative left-[4px] top-[3px] hover:text-ocean-400 transition duration-200 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r from-ocean-400 to-ocean-600 hover:before:w-full before:transition-all before:duration-300"
              >
                École Centrale de Lyon
              </a>
            </span>
          </span>
        </li>

        <li className="group flex items-start gap-4 pl-4 relative italic text-gray-400">
          recently:
        </li>

        {[
          {
            label: (
              <>
                ↳ finalist @{" "}
                <span className="inline-flex items-center gap-1">
                  <img
                    src={QRTLogo}
                    alt="QRT Logo"
                    className="w-4 h-4 object-contain relative top-[3px]"
                  />
                  <a
                    href="https://challengedata.ens.fr/challenges/143"
                    className="relative left-[4px] top-[3px] text-gray-300 hover:text-ocean-400 transition duration-200 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r from-ocean-400 to-ocean-600 hover:before:w-full before:transition-all before:duration-300"
                  >
                    QRT Data Challenge 2024
                  </a>
                  <a className="relative left-[4px] top-[3px]">(4th/800)</a>
                </span>{" "}
              </>
            ),
          },
          { label: "↳ built a baby semantic search engine w/ FastAPI & FAISS" },
          { label: "↳ explored embedding models & visualization" },
          { label: "↳ built a fact-checking chatbot (RAG + French politics)" },
        ].map(({ label }, i) => (
          <li
            key={i}
            className="group flex items-start gap-4 pl-8 relative hover:translate-x-1 transition-transform duration-200"
          >
            <span className="text-gray-300">{label}</span>
          </li>
        ))}

        <li className="group flex items-start gap-4 pl-4 pt-4 relative hover:translate-x-1 transition-transform duration-200">
          <span>
            💼 MLE intern @{" "}
            <span className="inline-flex items-center gap-1">
              <img
                src={DemandsensLogo}
                alt="Demandsens Logo"
                className="w-4 h-4 object-contain relative top-[3px]"
              />
              <a
                href="https://demandsens.ai/en/"
                className="relative top-[3px] left-[4px] text-gray-300 hover:text-ocean-400 transition duration-200 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r from-ocean-400 to-ocean-600 hover:before:w-full before:transition-all before:duration-300"
              >
                BearingPoint
              </a>{" "}
              <span className="text-gray-400 relative top-[3px] left-[4px]">
                (Mar 2025 – Present)
              </span>
            </span>
          </span>
        </li>
        <li className="ml-8 text-gray-400 hover:translate-x-1 transition-transform duration-200">
          • built an LLM-powered SaaS with Azure OpenAI + LangChain
        </li>
        <li className="ml-8 text-gray-400 hover:translate-x-1 transition-transform duration-200">
          • built a chatbot (RAG, reranking, intent detection, prompt refinement, sse streaming)
        </li>

        <li className="group flex items-start gap-4 pl-4 pt-4 relative hover:translate-x-1 transition-transform duration-200">
          <span>
            <span className="inline-flex items-center gap-1">
              💼 Data science intern @{" "}
              <img
                src={BNPLogo}
                alt="BNP Paribas Logo"
                className="w-4 h-4 object-contain relative left-[5px]"
              />
              <a
                href="https://group.bnpparibas/"
                className="relative left-[10px] text-gray-300 hover:text-ocean-400 transition duration-200 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r from-ocean-400 to-ocean-600 hover:before:w-full before:transition-all before:duration-300"
              >
                BNP Paribas
              </a>{" "}
              <span className="text-gray-400 relative left-[10px]">(Sep 2024 – Feb 2025)</span>
            </span>
          </span>
        </li>
        <li className="ml-8 text-gray-400 hover:translate-x-1 transition-transform duration-200">
          • built ML models (XGBoost, KNN, Random Forest) on open data
        </li>
        <li className="ml-8 text-gray-400 hover:translate-x-1 transition-transform duration-200">
          • delivered dashboards for non-technical business stakeholders
        </li>

        <li className="group flex items-start gap-4 pl-4 pt-4 relative hover:translate-x-1 transition-transform duration-200">
          <span className="text-gray-300">
            <span className="inline-flex items-center gap-1">
              <a className="relative left-[-4px]">🥋 Training BJJ @</a>
              <img
                src={GracieBarraLogo}
                alt="Gracie Barra Logo"
                className="w-4 h-4 object-contain align-middle"
              />
              <a
                href="https://graciebarra75.com/"
                className="relative left-[4px] text-gray-300 hover:text-ocean-400 transition duration-200 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r from-ocean-400 to-ocean-600 hover:before:w-full before:transition-all before:duration-300 font-medium"
              >
                Gracie Barra Paris
              </a>
            </span>
            , surfed across NZ, rugby national finalist with my school team
          </span>
        </li>
      </ul>

      <motion.div
        className="flex flex-col sm:flex-row gap-4 mt-10"
        variants={fadeIn}
        custom={20}
      >
        <Link
          to="/projects"
          className="group relative overflow-hidden bg-ocean-500 text-white px-6 py-2 rounded-md inline-flex items-center gap-2 transition-all duration-300 hover:bg-ocean-600"
        >
          <span className="relative z-10">see what I’ve built</span>
          <ArrowRight
            size={16}
            className="ml-1 group-hover:translate-x-1 group-hover:rotate-12 transition-transform duration-300 z-10"
          />
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-ocean-400 to-ocean-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </Link>

        <a
          href="/resume_PUYBAREAU.pdf"
          className="relative inline-flex items-center gap-2 text-ocean-400 hover:text-ocean-200 transition-colors before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r from-ocean-400 to-ocean-600 hover:before:w-full before:transition-all before:duration-300 before:rounded-full"
        >
          → view my resume
        </a>
      </motion.div>

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

export default HomePage;
