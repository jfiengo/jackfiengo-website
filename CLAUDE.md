# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal website built with React 19 and Vite 7. This is a standard Vite + React single-page application with Hot Module Replacement (HMR) enabled for development.

## Development Commands

- `npm run dev` - Start Vite development server with HMR
- `npm run build` - Build for production (outputs to `dist/`)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint on the codebase

## Project Structure

Standard Vite + React architecture:
- `index.html` - Entry HTML file (Vite serves this directly)
- `src/main.jsx` - React application entry point, renders App component into `#root` div
- `src/App.jsx` - Main application component
- `src/index.css` - Global styles
- `src/App.css` - Component-specific styles
- `public/` - Static assets served at root
- `vite.config.js` - Vite configuration with React plugin

## Tech Stack

- **React 19.1.1** - UI framework (using function components and hooks)
- **Vite 7.1.7** - Build tool and dev server
- **@vitejs/plugin-react** - Uses Babel for Fast Refresh (not SWC)
- **ESLint** - Linting with react-hooks and react-refresh plugins

## Important Notes

- React Compiler is NOT enabled (for performance reasons during dev/build)
- Project uses ES modules (`"type": "module"` in package.json)
- Entry point is `/src/main.jsx` which mounts the app using React 19's `createRoot`
