import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code, ArrowRight } from "lucide-react";

import CentraleLyonLogo from "/icons/centraleLyonLogo.png";
import BNPLogo from "/icons/bnpParibas.png";
import DemandsensLogo from "/icons/demandsens.png";
import GracieBarraLogo from "/icons/gracieBarra.png";
import QRTLogo from "/icons/qrtLogo.png";
import silveragentsLogo from "/icons/silveragents.png";
import techEuropeLogo from "/icons/techeurope.png";

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

const HomePage: React.FC = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="min-h-screen text-sm sm:text-base px-4 pt-16 sm:pt-24 pb-8 sm:pb-10 max-w-2xl mx-auto text-gray-100 font-mono"
        >
            <ul className="grid gap-1 text-sm sm:text-base">
                <li className="pl-4 relative hover:translate-x-1 transition-transform duration-200 leading-relaxed">
                    <span>🏄 AI/ML engineer, student, and builder of intelligent products.</span>
                </li>

                <li className="pl-4 relative hover:translate-x-1 transition-transform duration-200">
                    <span className="text-gray-300">
                        🎓 CS & eng @{" "}
                        <span className="inline-flex flex-wrap items-baseline gap-1">
                            <img
                                src={CentraleLyonLogo}
                                alt="Centrale Lyon"
                                className="w-6 h-6 object-contain self-end"
                            />
                            <a
                                href="https://www.ec-lyon.fr/formation/ingenieur-generaliste"
                                className="relative hover:text-ocean-400 transition duration-200 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r from-ocean-400 to-ocean-600 hover:before:w-full before:transition-all before:duration-300"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                École Centrale de Lyon
                            </a>
                        </span>
                    </span>
                </li>

                <li className="group pl-4 relative italic text-gray-400">
                    recently:
                </li>

                {[
                    {
                        label: (
                            <>
                                ↳ built an agent that cuts developer setup time @{" "}
                                <span className="inline-flex items-baseline gap-1">
                                    <img
                                        src={silveragentsLogo}
                                        alt="Silver Agents Logo"
                                        className="w-6 h-6 object-contain self-end"
                                    />
                                    <a
                                        href="https://www.silveragents.ai"
                                        className="relative text-gray-300 hover:text-ocean-400 transition duration-200 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r from-ocean-400 to-ocean-600 hover:before:w-full before:transition-all before:duration-300"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        silveragents.ai
                                    </a>
                                </span>
                            </>
                        ),
                    },
                    {
                        label: (
                            <>
                                ↳ built a funny {" "}
                                <span className="inline-flex items-baseline gap-1">
                                    <a
                                        href="https://x.com/hugopuybareau/status/1988311235218334119?s=20"
                                        className="relative text-gray-300 hover:text-ocean-400 transition duration-200 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r from-ocean-400 to-ocean-600 hover:before:w-full before:transition-all before:duration-300"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        agentic trading platform on Jade
                                    </a>
                                </span>
                            </>
                        ),
                    },
                    {
                        label: (
                            <>
                                ↳ took part in{" "}
                                <span className="inline-flex items-baseline gap-1">
                                    <img
                                        src={techEuropeLogo}
                                        alt="Tech Europe Logo"
                                        className="w-6 h-6 object-contain self-end"
                                    />
                                    <Link
                                        to="/projects"
                                        className="relative text-gray-300 hover:text-ocean-400 transition duration-200 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r from-ocean-400 to-ocean-600 hover:before:w-full before:transition-all before:duration-300"
                                    >
                                        {" "}Tech Europe's Berlin Hackathon
                                    </Link>
                                </span>
                            </>
                        ),
                    },
                    {
                        label: (
                            <>
                                ↳ 4th @{" "}
                                <span className="inline-flex items-baseline gap-1">
                                    <img
                                        src={QRTLogo}
                                        alt="QRT Logo"
                                        className="w-6 h-6 object-contain self-end"
                                    />
                                    <a
                                        href="https://challengedata.ens.fr/challenges/143"
                                        className="relative text-gray-300 hover:text-ocean-400 transition duration-200 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r from-ocean-400 to-ocean-600 hover:before:w-full before:transition-all before:duration-300"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        QRT Data Challenge 2024
                                    </a>
                                </span>
                            </>
                        ),
                    },
                    { label: "↳ built a fact-checking chatbot (RAG + French politics)" },
                ].map(({ label }, i) => (
                    <li
                        key={i}
                        className="group flex items-start gap-4 pl-4 relative hover:translate-x-1 transition-transform duration-200"
                    >
                        <span className="text-gray-300">{label}</span>
                    </li>
                ))}

                <li className="group pl-4 pt-4 relative hover:translate-x-1 transition-transform duration-200">
                    <span className="inline-flex items-baseline gap-1 flex-wrap text-gray-300">
                        💼 AI engineer @
                        <img
                            src={DemandsensLogo}
                            alt="Demandsens Logo"
                            className="w-6 h-6 object-contain self-end"
                        />
                        <a
                            href="https://demandsens.ai/en/"
                            className="text-gray-300 relative hover:text-ocean-400 transition duration-200 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r from-ocean-400 to-ocean-600 hover:before:w-full before:transition-all before:duration-300"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            BearingPoint
                        </a>
                        <span className="text-gray-400 relative left-[10px]">(Mar - Aug 2025)</span>
                    </span>
                </li>
                <li className="ml-8 text-gray-400 hover:translate-x-1 transition-transform duration-200">
                    • built an LLM-powered SaaS to analyze book manuscripts
                </li>
                <li className="ml-8 text-gray-400 hover:translate-x-1 transition-transform duration-200">
                    • designed a complex RAG architecture and an asynchronous job management
                </li>

                <li className="group flex items-start gap-4 pl-4 pt-4 relative hover:translate-x-1 transition-transform duration-200">
                    <span>
                        <span className="inline-flex flex-wrap items-baseline gap-1">
                            💼 Data scientist @{" "}
                            <img
                                src={BNPLogo}
                                alt="BNP Paribas Logo"
                                className="w-6 h-6 object-contain self-end"
                            />
                            <a
                                href="https://group.bnpparibas/"
                                className="relative text-gray-300 hover:text-ocean-400 transition duration-200 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r from-ocean-400 to-ocean-600 hover:before:w-full before:transition-all before:duration-300 font-medium"
                                rel="noopener noreferrer"
                                target="_blank"
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
                        <span className="inline-flex flex-wrap items-baseline gap-1">
                            <a className="relative left-[-4px]">🥋 Training BJJ @</a>
                            <img
                                src={GracieBarraLogo}
                                alt="Gracie Barra Logo"
                                className="w-6 h-6 object-contain self-end"
                            />
                            <a
                                href="https://graciebarra75.com/"
                                className="relative left-[4px] text-gray-300 hover:text-ocean-400 transition duration-200 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r from-ocean-400 to-ocean-600 hover:before:w-full before:transition-all before:duration-300 font-medium"
                                rel="noopener noreferrer"
                                target="_blank"
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
                            icon: <XIcon size={20} />,
                            href: "https://x.com/hugopuybareau",
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
