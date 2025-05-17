import React from 'react';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const ContactPage: React.FC = () => {
    return (
        <div className="pt-24 pb-16 px-4 md:px-6 min-h-screen">
            <div className="container mx-auto max-w-4xl">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Get in Touch</h1>
                    <p className="text-lg text-gray-600 max-w-2xl">
                        I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
                    {/* Contact Form */}
                    <div className="md:col-span-3">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                                        placeholder="Your name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                                        placeholder="Your email"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                                    placeholder="Subject"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                                    placeholder="Your message"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors rounded-md"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="md:col-span-2">
                        <div className="bg-gray-50 p-6 rounded-lg h-full">
                            <h2 className="text-xl font-bold mb-6">Contact Information</h2>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="text-gray-800 mr-4">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-medium">Location</h3>
                                        <p className="text-gray-600">New York, NY, United States</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="text-gray-800 mr-4">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-medium">Email</h3>
                                        <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-black transition-colors">
                                            your.email@example.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="text-gray-800 mr-4">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-medium">Phone</h3>
                                        <a href="tel:+1234567890" className="text-gray-600 hover:text-black transition-colors">
                                            +1 (234) 567-890
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h3 className="font-medium mb-4">Connect With Me</h3>
                                <div className="flex space-x-4">
                                    <a
                                        href="https://github.com"
                                        className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-800 hover:bg-gray-200 transition-colors"
                                        aria-label="GitHub"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Github size={20} />
                                    </a>
                                    <a
                                        href="https://linkedin.com"
                                        className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-800 hover:bg-gray-200 transition-colors"
                                        aria-label="LinkedIn"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Linkedin size={20} />
                                    </a>
                                    <a
                                        href="mailto:your.email@example.com"
                                        className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-800 hover:bg-gray-200 transition-colors"
                                        aria-label="Email"
                                    >
                                        <Mail size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;