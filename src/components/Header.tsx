import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { Link } from './Navigation';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'backdrop-blur bg-dark-950/60 border-b border-gray-800 py-3'
                    : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                <Link to="/" className="text-xl md:text-2xl font-bold tracking-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-ocean-400 to-ocean-600">
                        Hugo Puybareau
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6 text-sm font-mono">
                    {[
                        { label: 'home', to: '/' },
                        { label: 'projects', to: '/projects' },
                        { label: 'about', to: '/about' },
                        { label: 'contact', to: '/contact' },
                    ].map((item) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            className="relative text-gray-300 hover:text-ocean-400 transition duration-200 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r from-ocean-400 to-ocean-600 hover:before:w-full before:transition-all before:duration-300"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-300"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-dark-900 border-t border-gray-800 shadow-lg">
                    <div className="container mx-auto px-4 py-6 flex flex-col space-y-5 font-mono">
                        {[
                            { label: 'home', to: '/' },
                            { label: 'projects', to: '/projects' },
                            { label: 'about', to: '/about' },
                            { label: 'contact', to: '/contact' },
                        ].map((item) => (
                            <Link
                                key={item.to}
                                to={item.to}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-gray-300 hover:text-ocean-400 transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}

                        <div className="flex space-x-4 pt-2 text-gray-400">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors"
                                aria-label="GitHub"
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="mailto:your@email.com"
                                className="hover:text-white transition-colors"
                                aria-label="Email"
                            >
                                <Mail size={20} />
                            </a>
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors"
                                aria-label="Resume"
                            >
                                <FileText size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
