import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code, ArrowRight } from 'lucide-react';

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.6,
            ease: 'easeOut',
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

const HackerNewsIcon = ({ size = 20 }: { size?: number }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M0 24V0h24v24H0zM6.951 5.896l4.112 7.708v5.064h1.583v-5.064l4.3-7.708h-1.4l-3.5 6.5-3.5-6.5H6.951z" />
    </svg>
);

const projects = [
    {
        title: 'Agentic Trading Platform on Jade',
        date: 'November 2025',
        video: 'https://github.com/user-attachments/assets/552750d6-e83a-4985-b2d4-5b4412cbb4aa',
        description:
            'What happens when you let autonomous agents trade against each other? This project we did for school simulates a complete stock market where AI agents with different personalities and strategies compete for profit. Watch as market bubbles form, crashes unfold, and emergent behaviors arise from simple interactions.',
        bullets: [
            'full Java orchestration on Jade multi-agent platform',
            'runs with 60x time acceleration',
        ],
        github: "https://github.com/hugopuybareau/Agentic-Trading-Platform",
        xPost: "https://x.com/hugopuybareau/status/1988311235218334119?s=20",
        linkedinPost: null,
        hackerNewsPost: "https://news.ycombinator.com/item?id=45890841",
    },
    {
        title: "Tech Europe's Berlin Hackathon submission",
        date: 'October 2025',
        images: [
            '/photos/projects/hackathon_1.JPG',
            '/photos/projects/hackathon_2.JPG',
        ],
        description: "We entered the Wild Card track and built the first MVP of silveragents — an AI overlay that streamlines developer onboarding. It automatically generates a customized onboarding template based on your project's stack, architecture, and docs.",
        bullets: [
            'overlay running on rust backend with Tauri + React frontend',
            'n8n workflow for repo ingestion + sandboxing',
        ],
        github: null,
        xPost: null,
        linkedinPost: "https://www.linkedin.com/posts/hugopuybareau_this-weekend-maxence-rossignol-and-i-had-activity-7384468281514049536-1Qk2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD2cL-wB1XsPIhgnTqqOqL_lL3NdXksXaqc",
        hackerNewsPost: "https://news.ycombinator.com/item?id=45594964",
    },
    {
        title: 'LLM-powered SaaS for Manuscript Analysis',
        date: 'Mar – Aug 2025',
        images: [
            '/photos/projects/pleiade_9.jpeg',
            '/photos/projects/pleiade.jpeg',
            '/photos/projects/pleiade_1.jpeg',
            '/photos/projects/pleiade_2.jpeg',
            '/photos/projects/pleiade_3.jpeg',
            '/photos/projects/pleiade_4.jpeg',
            '/photos/projects/pleiade_5.jpeg',
            '/photos/projects/pleiade_6.jpeg',
            '/photos/projects/pleiade_7.jpeg',
            '/photos/projects/pleiade_8.jpeg',
        ],
        description:
            'Designed and built an end-to-end GenAI-powered SaaS platform to assist publishers in analyzing raw manuscripts...',
        bullets: [
            'React + TypeScript + Vite frontend, FastAPI backend',
            'Complex RAG pipeline: prompt refinement, intent detection, reranking',
            'Qdrant dynamic setup, SSE streaming, chat history handling',
            'Asynchronous job management with BullMQ and Redis',
            'Book cover analysis/generation module with gpt-image-1',
        ],
        github: null,
        xPost: null,
        linkedinPost: "https://www.linkedin.com/posts/hugopuybareau_excited-to-announce-that-maxence-rossignol-activity-7371152514609627156-860X?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD2cL-wB1XsPIhgnTqqOqL_lL3NdXksXaqc",
        hackerNewsPost: null,
    },
    {
        title: 'QRT Data Challenge 2024',
        date: '2024',
        images: ['/photos/projects/certificate.jpeg'],
        description:
            'Developed ML algorithms to predict outcomes of football matches...',
        bullets: [
            'Aggregated player stats by team and groups of position',
            'Handled missing data by quantiles (median, prediction, suppression)',
            'Got best score by stacking models + Bayes search',
            'Used a stratified K-Fold CV for robust evaluation',
        ],
        github: 'https://github.com/hugopuybareau/QRT_DATA_CHALLENGE',
        xPost: null,
        linkedinPost: null,
        hackerNewsPost: null,
    },
    {
        title: 'Embedding Analysis Search & Semantic Search Engine',
        date: 'Jan 2025',
        images: [
            '/photos/projects/embedding.jpeg',
            '/photos/projects/visualization.jpeg',
        ],
        description:
            'Built a semantic search engine powered by FastAPI and Sentence-BERT...',
        bullets: [
            'Sentence-BERT + FastAPI backend with real-time search API',
            'React frontend with smooth animations and query interface',
            'Compared TF-IDF, CBOW/Skip-gram, and SBERT embeddings',
            'Detailed markdowns on embedding analysis of similarities and visualization',
        ],
        github: 'https://github.com/hugopuybareau/Embedding-Analysis-Search',
        xPost: null,
        linkedinPost: null,
        hackerNewsPost: null,
    },
    {
        title: 'Tech article writer: web scraping + BART fine-tuning',
        date: 'Oct 2024',
        images: ['/photos/projects/finetuning.jpeg'],
        description:
            'Built a pipeline to scrape tech headlines and fine-tune a BART model...',
        bullets: [
            'Scraped Financial Times headlines with BeautifulSoup & newspaper3k',
            'Created dataset: title → article text pairs for model training',
            'Used HuggingFace BART and Google Colab for fine-tuning',
            'Possible improvements: scale dataset, test T5/GPT-2...',
        ],
        github: 'https://github.com/hugopuybareau/Web-Scraping_NLP-Fine-Tuning',
        xPost: null,
        linkedinPost: null,
        hackerNewsPost: null,
    },
];

const ProjectsPage: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState<number[]>([]);

    useEffect(() => {
        setCurrentImageIndex(new Array(projects.length).fill(0));

        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndexes) =>
                prevIndexes.map((current, i) => {
                    const imagesLength = projects[i].images?.length || 1;
                    return (current + 1) % imagesLength;
                })
            );
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="min-h-screen px-4 pt-24 pb-10 max-w-2xl mx-auto text-gray-100 font-mono"
        >
            <h1 className="text-3xl font-bold mb-6">My Projects</h1>

            <ul className="grid gap-6">
                {projects.map((project, i) => (
                    <React.Fragment key={project.title}>
                        <li className="group hover:translate-x-1 transition-transform duration-200">
                            <div className="flex flex-col gap-3">
                                <div className="relative w-full h-48 rounded-lg overflow-hidden">
                                    {project.video ? (
                                        <video
                                            src={project.video}
                                            className="w-full h-full object-contain rounded-lg bg-dark-800"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                        />
                                    ) : (
                                        Array.isArray(project.images) &&
                                        project.images.map((src, index) => (
                                            <img
                                                key={src}
                                                src={src}
                                                alt={`Screenshot ${index + 1}`}
                                                className={`absolute top-0 left-0 w-full h-full object-cover rounded-lg transition-all duration-700 ease-in-out ${
                                                    currentImageIndex[i] ===
                                                    index
                                                        ? 'opacity-100 translate-x-0 z-10'
                                                        : 'opacity-0 -translate-x-full z-0'
                                                }`}
                                            />
                                        ))
                                    )}
                                </div>

                                <div className="flex justify-between items-center">
                                    <h2 className="text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-ocean-400 to-ocean-600">
                                        {project.title}
                                    </h2>

                                    <span className="text-xs text-gray-500 font-mono whitespace-nowrap">
                                        {project.date}
                                    </span>
                                </div>

                                <p className="text-gray-300 text-sm">
                                    {project.description}
                                </p>

                                <ul className="text-gray-400 text-sm list-disc pl-4 space-y-1">
                                    {project.bullets.map((point) => (
                                        <li key={point}>{point}</li>
                                    ))}
                                </ul>

                                {(project.github || project.xPost || project.linkedinPost || project.hackerNewsPost) && (
                                    <div className="flex flex-wrap items-center gap-3 mt-2">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center text-sm text-ocean-400 hover:text-ocean-300 transition-all before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r from-ocean-400 to-ocean-600 hover:before:w-full before:transition-all before:duration-300 relative"
                                            >
                                                <Github size={14} className="mr-1" />
                                                View GitHub
                                                <ArrowRight
                                                    size={14}
                                                    className="ml-1 transition-transform group-hover:translate-x-1"
                                                />
                                            </a>
                                        )}
                                        {project.xPost && (
                                            <a
                                                href={project.xPost}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center text-sm text-ocean-400 hover:text-ocean-300 transition-all before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r from-ocean-400 to-ocean-600 hover:before:w-full before:transition-all before:duration-300 relative"
                                            >
                                                <XIcon size={14} />
                                                <span className="ml-1">post</span>
                                                <ArrowRight
                                                    size={14}
                                                    className="ml-1 transition-transform group-hover:translate-x-1"
                                                />
                                            </a>
                                        )}
                                        {project.linkedinPost && (
                                            <a
                                                href={project.linkedinPost}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center text-sm text-ocean-400 hover:text-ocean-300 transition-all before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r from-ocean-400 to-ocean-600 hover:before:w-full before:transition-all before:duration-300 relative"
                                            >
                                                <Linkedin size={14} className="mr-1" />
                                                LinkedIn post
                                                <ArrowRight
                                                    size={14}
                                                    className="ml-1 transition-transform group-hover:translate-x-1"
                                                />
                                            </a>
                                        )}
                                        {project.hackerNewsPost && (
                                            <a
                                                href={project.hackerNewsPost}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center text-sm text-ocean-400 hover:text-ocean-300 transition-all before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r from-ocean-400 to-ocean-600 hover:before:w-full before:transition-all before:duration-300 relative"
                                            >
                                                <HackerNewsIcon size={14} />
                                                <span className="ml-1">HackerNews page</span>
                                                <ArrowRight
                                                    size={14}
                                                    className="ml-1 transition-transform group-hover:translate-x-1"
                                                />
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                        </li>

                        {i < projects.length - 1 && (
                            <div className="flex items-center justify-center gap-4 my-6">
                                <div className="flex-1 h-px bg-gray-700" />
                                <span className="text-ocean-400 text-sm font-mono">
                                    ≋
                                </span>
                                <div className="flex-1 h-px bg-gray-700" />
                            </div>
                        )}
                    </React.Fragment>
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
                        {
                            icon: <Github size={20} />,
                            href: 'https://github.com/hugopuybareau',
                        },
                        {
                            icon: <Linkedin size={20} />,
                            href: 'https://www.linkedin.com/in/hugopuybareau/',
                        },
                        {
                            icon: <XIcon size={20} />,
                            href: 'https://x.com/hugopuybareau',
                        },
                        {
                            icon: <Mail size={20} />,
                            href: 'mailto:hugo.puybareau@etu.ec-lyon.fr',
                        },
                        {
                            icon: <Code size={20} />,
                            href: 'https://github.com/hugopuybareau/portfolio',
                        },
                    ].map(({ icon, href }) => (
                        <a
                            key={href}
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

export default ProjectsPage;
