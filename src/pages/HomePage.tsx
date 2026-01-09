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
            className="min-h-screen px-4 pt-24 pb-10 sm:pt-30 max-w-2xl mx-auto text-gray-100 font-mono"
        >
            {/* Intro Section */}
            <motion.div variants={fadeIn} custom={0} className="mb-6">
                <p className="text-sm sm:text-base text-gray-100 mb-3 leading-relaxed">
                    🏄 AI/ML engineer, student, and builder of intelligent products.
                </p>
                <p className="text-xs sm:text-sm text-gray-300">
                    🎓 CS & eng @{" "}
                    <span className="inline-flex flex-wrap items-baseline gap-1">
                        <img
                            src={CentraleLyonLogo}
                            alt="Centrale Lyon"
                            className="w-5 h-5 object-contain self-end mb-1"
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
                </p>
            </motion.div>

            {/* Recent Projects Section */}
            <motion.section
                variants={fadeIn}
                custom={2}
                className="mb-5 border-l-2 border-ocean-500/30 pl-4 py-2"
            >
                <h2 className="text-xs uppercase tracking-wider text-ocean-400 mb-4 font-semibold">
                    Recently
                </h2>
                <ul className="space-y-3 text-xs sm:text-sm">
                    <li className="text-gray-300 hover:translate-x-1 transition-transform duration-200">
                        ↳ built an agent that cuts developer setup time @{" "}
                        <span className="inline-flex items-baseline self-end gap-1">
                            <img
                                src={silveragentsLogo}
                                alt="Silver Agents Logo"
                                className="w-5 h-5 object-contain self-end"
                            />
                            <a
                                href="https://www.silveragents.ai"
                                className="relative text-gray-100 hover:text-ocean-400 transition duration-200 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r from-ocean-400 to-ocean-600 hover:before:w-full before:transition-all before:duration-300"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                silveragents.ai
                            </a>
                        </span>
                    </li>
                    <li className="text-gray-300 hover:translate-x-1 transition-transform duration-200">
                        ↳ built a funny{" "}
                        <a
                            href="https://x.com/hugopuybareau/status/1988311235218334119?s=20"
                            className="relative text-gray-100 hover:text-ocean-400 transition duration-200 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r from-ocean-400 to-ocean-600 hover:before:w-full before:transition-all before:duration-300"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            agentic trading platform on Jade
                        </a>
                    </li>
                    <li className="text-gray-300 hover:translate-x-1 transition-transform duration-200">
                        ↳ took part in{" "}
                        <span className="inline-flex items-baseline gap-1">
                            <img
                                src={techEuropeLogo}
                                alt="Tech Europe Logo"
                                className="w-5 h-5 object-contain self-end mb-1"
                            />
                            <Link
                                to="/projects"
                                className="relative text-gray-100 hover:text-ocean-400 transition duration-200 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r from-ocean-400 to-ocean-600 hover:before:w-full before:transition-all before:duration-300"
                            >
                                Tech Europe's Berlin Hackathon
                            </Link>
                        </span>
                    </li>
                    <li className="text-gray-300 hover:translate-x-1 transition-transform duration-200">
                        ↳ 4th @{" "}
                        <span className="inline-flex items-baseline gap-1">
                            <img
                                src={QRTLogo}
                                alt="QRT Logo"
                                className="w-5 h-5 object-contain self-end mb-1"
                            />
                            <a
                                href="https://challengedata.ens.fr/challenges/143"
                                className="relative text-gray-100 hover:text-ocean-400 transition duration-200 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r from-ocean-400 to-ocean-600 hover:before:w-full before:transition-all before:duration-300"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                QRT Data Challenge 2024
                            </a>
                        </span>
                    </li>
                    <li className="text-gray-300 hover:translate-x-1 transition-transform duration-200">
                        ↳ built a fact-checking chatbot (RAG + French politics)
                    </li>
                </ul>
            </motion.section>

            {/* Work Experience Section */}
            <motion.section
                variants={fadeIn}
                custom={4}
                className="mb-5 border-l-2 border-ocean-500/30 pl-4 py-2"
            >
                <h2 className="text-xs uppercase tracking-wider text-ocean-400 mb-4 font-semibold">
                    Work Experience
                </h2>
                <div className="space-y-6 text-xs sm:text-sm">
                    {/* BearingPoint */}
                    <div className="group">
                        <div className="flex flex-wrap items-baseline gap-1 mb-2 hover:translate-x-1 transition-transform duration-200">
                            <span className="text-gray-100">💼 AI engineer @</span>
                            <img
                                src={DemandsensLogo}
                                alt="Demandsens Logo"
                                className="w-5 h-5 object-contain self-end mb-1"
                            />
                            <a
                                href="https://demandsens.ai/en/"
                                className="text-gray-100 hover:text-ocean-400 transition duration-200 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r from-ocean-400 to-ocean-600 hover:before:w-full before:transition-all before:duration-300 relative"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                BearingPoint
                            </a>
                            <span className="text-gray-400 text-xs">(Mar - Aug 2025)</span>
                        </div>
                        <ul className="space-y-1 ml-4 text-gray-400">
                            <li className="hover:translate-x-1 transition-transform duration-200">
                                • built an LLM-powered SaaS to analyze book manuscripts
                            </li>
                            <li className="hover:translate-x-1 transition-transform duration-200">
                                • designed a complex RAG architecture and an asynchronous job management
                            </li>
                        </ul>
                    </div>

                    {/* BNP Paribas */}
                    <div className="group">
                        <div className="flex flex-wrap items-baseline gap-1 mb-2 hover:translate-x-1 transition-transform duration-200">
                            <span className="text-gray-100">💼 Data scientist @</span>
                            <img
                                src={BNPLogo}
                                alt="BNP Paribas Logo"
                                className="w-5 h-5 object-contain self-end mb-1"
                            />
                            <a
                                href="https://group.bnpparibas/"
                                className="text-gray-100 hover:text-ocean-400 transition duration-200 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r from-ocean-400 to-ocean-600 hover:before:w-full before:transition-all before:duration-300 relative"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                BNP Paribas
                            </a>
                            <span className="text-gray-400 text-xs">(Sep 2024 – Feb 2025)</span>
                        </div>
                        <ul className="space-y-1 ml-4 text-gray-400">
                            <li className="hover:translate-x-1 transition-transform duration-200">
                                • built ML models (XGBoost, KNN, Random Forest) on open data
                            </li>
                            <li className="hover:translate-x-1 transition-transform duration-200">
                                • delivered dashboards for non-technical business stakeholders
                            </li>
                        </ul>
                    </div>
                </div>
            </motion.section>

            {/* Personal Section */}
            <motion.section
                variants={fadeIn}
                custom={6}
                className="mb-5 border-l-2 border-ocean-500/30 pl-4 py-2"
            >
                <h2 className="text-xs uppercase tracking-wider text-ocean-400 mb-4 font-semibold">
                    Beyond Work
                </h2>
                <p className="text-xs sm:text-sm text-gray-300 hover:translate-x-1 transition-transform duration-200">
                    🥋 Training BJJ @{" "}
                    <span className="inline-flex items-baseline gap-1">
                        <img
                            src={GracieBarraLogo}
                            alt="Gracie Barra Logo"
                            className="w-5 h-5 object-contain self-end mb-1"
                        />
                        <a
                            href="https://graciebarra75.com/"
                            className="text-gray-100 hover:text-ocean-400 transition duration-200 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r from-ocean-400 to-ocean-600 hover:before:w-full before:transition-all before:duration-300 relative"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Gracie Barra Paris
                        </a>
                    </span>
                    , surfed across NZ, rugby national finalist with my school team
                </p>
            </motion.section>

            {/* CTA Buttons */}
            <motion.div
                className="flex flex-col sm:flex-row gap-4 mt-12"
                variants={fadeIn}
                custom={8}
            >
                <Link
                    to="/projects"
                    className="group relative overflow-hidden bg-ocean-500 text-white px-6 py-3 rounded-md inline-flex items-center justify-center gap-2 transition-all duration-300 hover:bg-ocean-600 hover:shadow-lg hover:shadow-ocean-500/20"
                >
                    <span className="relative z-10 font-medium">see what I've built</span>
                    <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform duration-300 z-10"
                    />
                </Link>

                <a
                    href="/resume_PUYBAREAU.pdf"
                    className="relative inline-flex items-center justify-center gap-2 text-ocean-400 hover:text-ocean-300 transition-colors px-6 py-3 border border-ocean-500/30 rounded-md hover:border-ocean-400/50 hover:bg-ocean-500/5"
                >
                    → view my resume
                </a>
            </motion.div>

            {/* Footer */}
            <motion.footer
                className="text-sm text-gray-500 mt-20 border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between"
                variants={fadeIn}
                custom={10}
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
