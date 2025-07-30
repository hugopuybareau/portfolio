# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Hugo Puybareau's personal portfolio website - a React + TypeScript SPA built with Vite, showcasing AI/ML engineering projects and professional experience. The site features a dark theme with custom animations using Framer Motion and TailwindCSS.

## Development Commands

```bash
# Development server (runs on port 4173)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Architecture

**Tech Stack:**
- React 18 + TypeScript
- Vite (build tool)
- React Router DOM (client-side routing)
- TailwindCSS (styling with custom theme)
- Framer Motion (animations)
- Lucide React (icons)

**Project Structure:**
```
src/
├── App.tsx           # Main app component with routing
├── main.tsx          # Entry point
├── index.css         # Global styles and custom animations
├── components/       # Reusable components
│   ├── Header.tsx    # Navigation with responsive mobile menu
│   └── Signature.tsx # Signature component
└── pages/           # Route components
    ├── HomePage.tsx    # Landing page with profile info
    ├── ProjectsPage.tsx # Project showcase
    ├── AboutPage.tsx   # About page
    └── ContactPage.tsx # Contact information
```

**Key Design Patterns:**
- Single-page application with client-side routing
- Responsive design (mobile-first with responsive breakpoints)
- Custom TailwindCSS theme with `dark` and `ocean` color palettes
- Framer Motion animations with staggered fade-in effects
- Hover effects and transitions throughout the UI

**Static Assets:**
- Company/organization logos in `/public/icons/`
- Personal photos and project images in `/public/photos/`
- Resume PDF in `/public/`

## Custom Styling

The project uses a custom TailwindCSS configuration with:
- Extended color palette (`dark-*` and `ocean-*` shades)
- Custom animations (`wave`, `spin-slow`, `ping-slow`)
- Dotted background pattern utility class
- Custom drop shadows and gradients
- Monospace font family (`ui-monospace`, `SFMono-Regular`, `Menlo`)

**CSS Classes to Note:**
- `.dot-grid` - Dotted background pattern
- Custom gradient backgrounds and text effects
- Hover animations with `translate-x` transforms

## Development Notes

- Vite dev server configured to run on port 4173
- ESLint configured with React and TypeScript support
- lucide-react is excluded from Vite's dependency optimization
- All external links open in new tabs with proper security attributes
- Uses React strict mode in development