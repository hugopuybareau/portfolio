/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './src/**/*.css'
    ],
    theme: {
        extend: {
            fontFamily: {
                mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
            },
            colors: {
                dark: {
                    '50': '#f6f6f7',
                    '100': '#e1e3e6',
                    '200': '#c2c5cb',
                    '300': '#9ca1ab',
                    '400': '#757b87',
                    '500': '#585f6d',
                    '600': '#444a57',
                    '700': '#363b46',
                    '800': '#2b2f38',
                    '900': '#24272f',
                    '950': '#1a1c22',
                },
                ocean: {
                    '50': '#f0fcff',
                    '100': '#e0f9ff',
                    '200': '#baf2ff',
                    '300': '#7de7ff',
                    '400': '#36d4ff',
                    '500': '#0cb8ff',
                    '600': '#0095ff',
                    '700': '#0077cc',
                    '800': '#0062a6',
                    '900': '#085285',
                    '950': '#06314d',
                },
            },
            animation: {
                'wave': 'wave 3s ease-in-out infinite',
                'spin-slow': 'spin 3s linear infinite',
                'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
            },
            keyframes: {
                wave: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
            },
            dropShadow: {
                glow: '0 0 15px rgba(14,165,233,0.4)',
            },
            backgroundImage: {
                'dotted': 'radial-gradient(#2c2c2c 1px, transparent 1px)',
            },
            backgroundSize: {
                'dotted': '20px 20px',
            },
        },
    },
    plugins: [],
}
