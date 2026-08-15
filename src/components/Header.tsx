import React, { useState, useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Menu, X, Github, Linkedin, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isPersonalOpen, setIsPersonalOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const personalDropdownRef = useRef<HTMLDivElement>(null);
    const mobilePersonalRef = useRef<HTMLDivElement>(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close dropdown when clicking outside (desktop only)
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;
            const isOutsideDesktop = personalDropdownRef.current && !personalDropdownRef.current.contains(target);
            const isOutsideMobile = mobilePersonalRef.current && !mobilePersonalRef.current.contains(target);

            // Only close if clicking outside both refs (or if ref doesn't exist)
            if (isOutsideDesktop && (!mobilePersonalRef.current || isOutsideMobile)) {
                setIsPersonalOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const navLinks = [
        { label: 'home', to: '/' },
        { label: 'projects', to: '/projects' },
        { label: 'thoughts', to: '/thoughts' },
        { label: 'contact', to: '/contact' },
    ];

    const personalLinks = [
        { label: 'about', to: '/about' },
        { label: 'music', to: '/music' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur bg-dark-950/60 border-b border-gray-800 py-3' : 'bg-transparent py-5'}`}
        >
            <div className="max-w-2xl mx-auto px-4 flex justify-between items-center">
                <Link to="/" className="text-xl md:text-2xl font-bold tracking-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-ocean-400 to-ocean-600">
                        Hugo Puybareau
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6 text-sm font-mono">
                    {navLinks.slice(0, 2).map((item) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            className={`relative transition duration-200 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:bg-gradient-to-r from-ocean-400 to-ocean-600 before:transition-all before:duration-300 ${location.pathname === item.to ? 'text-ocean-400 before:w-full' : 'text-gray-300 hover:text-ocean-400 before:w-0 hover:before:w-full'}`}
                        >
                            {item.label}
                        </Link>
                    ))}

                    {navLinks.slice(2).map((item) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            className={`relative transition duration-200 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:bg-gradient-to-r from-ocean-400 to-ocean-600 before:transition-all before:duration-300 ${location.pathname === item.to ? 'text-ocean-400 before:w-full' : 'text-gray-300 hover:text-ocean-400 before:w-0 hover:before:w-full'}`}
                        >
                            {item.label}
                        </Link>
                    ))}

                    {/* Personal Dropdown */}
                    <div className="relative" ref={personalDropdownRef}>
                        <button
                            onClick={() => setIsPersonalOpen(!isPersonalOpen)}
                            className={`flex items-center gap-1 relative transition duration-200 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:bg-gradient-to-r from-ocean-400 to-ocean-600 before:transition-all before:duration-300 ${personalLinks.some(link => location.pathname === link.to) ? 'text-ocean-400 before:w-full' : 'text-gray-300 hover:text-ocean-400 before:w-0 hover:before:w-full'}`}
                        >
                            personal
                            <ChevronDown
                                size={14}
                                className={`transition-transform duration-200 ${isPersonalOpen ? 'rotate-180' : ''}`}
                            />
                        </button>

                        {isPersonalOpen && (
                            <div className="absolute top-full right-0 mt-2 py-2 bg-dark-900 border border-gray-800 rounded-lg shadow-lg min-w-[120px]">
                                {personalLinks.map((item) => (
                                    <Link
                                        key={item.to}
                                        to={item.to}
                                        onClick={() => setIsPersonalOpen(false)}
                                        className={`block px-4 py-2 transition-colors ${location.pathname === item.to ? 'text-ocean-400 bg-dark-800' : 'text-gray-300 hover:text-ocean-400 hover:bg-dark-800'}`}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
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
                    <div className="max-w-2xl mx-auto px-4 py-6 flex flex-col space-y-5 font-mono">
                        {navLinks.slice(0, 2).map((item) => (
                            <Link
                                key={item.to}
                                to={item.to}
                                onClick={() => setIsMenuOpen(false)}
                                className={`transition-colors ${location.pathname === item.to ? 'text-ocean-400' : 'text-gray-300 hover:text-ocean-400'}`}
                            >
                                {item.label}
                            </Link>
                        ))}

                        {navLinks.slice(2).map((item) => (
                            <Link
                                key={item.to}
                                to={item.to}
                                onClick={() => setIsMenuOpen(false)}
                                className={`transition-colors ${location.pathname === item.to ? 'text-ocean-400' : 'text-gray-300 hover:text-ocean-400'}`}
                            >
                                {item.label}
                            </Link>
                        ))}

                        {/* Personal Section */}
                        <div ref={mobilePersonalRef}>
                            <button
                                onClick={() => setIsPersonalOpen(!isPersonalOpen)}
                                className={`flex items-center gap-1 transition-colors ${personalLinks.some(link => location.pathname === link.to) ? 'text-ocean-400' : 'text-gray-300 hover:text-ocean-400'}`}
                            >
                                personal
                                <ChevronDown
                                    size={14}
                                    className={`transition-transform duration-200 ${isPersonalOpen ? 'rotate-180' : ''}`}
                                />
                            </button>
                            {isPersonalOpen && (
                                <div className="mt-3 ml-4 flex flex-col space-y-3">
                                    {personalLinks.map((item) => (
                                        <Link
                                            key={item.to}
                                            to={item.to}
                                            onClick={() => {
                                                setIsMenuOpen(false);
                                                setIsPersonalOpen(false);
                                            }}
                                            className={`transition-colors ${location.pathname === item.to ? 'text-ocean-400' : 'text-gray-400 hover:text-ocean-400'}`}
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="flex space-x-4 pt-2 text-gray-400">
                            <a
                                href="https://github.com/hugopuybareau"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors"
                                aria-label="GitHub"
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/hugopuybareau/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
