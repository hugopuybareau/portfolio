import React from 'react';
import { FileText } from 'lucide-react';

const AboutPage: React.FC = () => {
    const skills = [
        {
            category: 'Machine Learning',
            items: [
                'XGBoost, Random Forest',
                'Bayesian Optimization',
                'TabNet, KNN',
                'Cross-validation, feature engineering',
                'Model explainability',
            ],
        },
        {
            category: 'GenAI & NLP',
            items: [
                'Retrieval-Augmented Generation (RAG)',
                'Embedding models (SBERT, HuggingFace)',
                'Prompt engineering',
                'Fine-tuning (BART, T5)',
                'LangChain, FAISS, vLLM',
            ],
        },
        {
            category: 'Full-Stack & Infra',
            items: [
                'FastAPI, Node.js',
                'React, TypeScript, Tailwind',
                'AzureOpenAI, Ollama, Docker',
                'RESTful APIs & streaming (SSE)',
                'MLOps & local model deployment',
            ],
        },
        {
            category: 'Tooling & Soft Skills',
            items: [
                'Git, VS Code, Notion',
                'Data storytelling & dashboards',
                'UI/UX thinking + prototyping',
                'Agile teamwork',
                'Fluent English & French',
            ],
        },
    ];

    return (
        <div className="pt-24 pb-16 px-4 md:px-6 min-h-screen text-gray-100 font-mono leading-relaxed">
            <div className="container mx-auto max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">About Me</h1>

                <div className="mb-16 space-y-4 text-base">
                    <p>
                        💻 I'm a machine learning engineer and product-focused developer with a deep passion for building
                        intelligent, human-centered digital tools. I studied engineering at{' '}
                        <span className="font-medium underline decoration-ocean-500 underline-offset-4 hover:decoration-ocean-300 transition-colors">
                            École Centrale de Lyon
                        </span>{' '}
                        and developed hands-on expertise in NLP, GenAI, and full-stack product development.
                    </p>

                    <p>
                        I've built and deployed systems across the stack—from AI-powered publishing tools to
                        predictive modeling systems using machine learning algorithms. Whether it's crafting elegant UIs with React
                        or building scalable backends with FastAPI and LangChain, I thrive at the intersection of design, data,
                        and functionality.
                    </p>

                    <p>
                        🧠 I enjoy pushing boundaries through personal projects. I was a finalist in the{' '}
                        <span className="font-medium underline decoration-ocean-500 underline-offset-4 hover:decoration-ocean-300 transition-colors">
                            QRT Data Challenge 2024
                        </span>
                        , built a political fact-checking chatbot (powered by RAG & embeddings), and explored retrieval optimization
                        using FAISS and vector quantization.
                    </p>

                    <p>
                        🏄 Outside of tech, I train in Brazilian Jiu-Jitsu at{' '}
                        <span className="font-medium underline decoration-ocean-500 underline-offset-4 hover:decoration-ocean-300 transition-colors">
                            Gracie Barra Paris
                        </span>
                        , surfed around New Zealand in 2025, and played on my school’s rugby team (3rd place, national university
                        championship).
                    </p>

                    <a
                        href="/resume_PUYBAREAU.pdf"
                        className="mt-6 inline-flex items-center gap-2 text-ocean-400 hover:text-ocean-200 transition-colors text-sm border-b border-transparent hover:border-ocean-400 pb-0.5"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FileText size={16} />
                        Download Resume
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    <img
                        src="assets/photos/BJJ.png"
                        alt="BJJ"
                        className="rounded-xl shadow-md object-cover h-64 w-full"
                    />
                    <img
                        src="assets/photos/nz.png"
                        alt="Surfing"
                        className="rounded-xl shadow-md object-cover h-64 w-full"
                    />
                    <img
                        src="assets/photos/rugby.png"
                        alt="Rugby"
                        className="rounded-xl shadow-md object-cover h-64 w-full"
                    />
                </div>

                <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-8">My Skills</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {skills.map((skillGroup, index) => (
                            <div
                                key={index}
                                className="relative bg-gradient-to-br from-[#0ea5e9]/10 via-[#6366f1]/10 to-[#a855f7]/10 rounded-2xl p-[1px] shadow-lg transition-transform duration-500 hover:scale-[1.02]"
                            >
                                <div className="bg-[#1f2937] rounded-2xl p-6">
                                    <h3 className="text-xl font-semibold text-white mb-4 tracking-wide">
                                        {skillGroup.category}
                                    </h3>
                                    <ul className="space-y-3">
                                        {skillGroup.items.map((skill, skillIndex) => (
                                            <li
                                                key={skillIndex}
                                                className="flex items-center text-gray-200 hover:text-white transition duration-300"
                                            >
                                                <svg
                                                    className="w-3 h-3 mr-3 text-cyan-400 shrink-0"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <circle cx="10" cy="10" r="6" />
                                                </svg>
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
