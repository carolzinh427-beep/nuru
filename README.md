# Nuru Massage London

A discreet, elegant, and sophisticated web presence for **Nuru Massage London**, situated in Central London near Victoria Station.

Built with React 18, Vite 5, Tailwind CSS 3, GSAP 3 with ScrollTrigger, and React Three Fiber (Three.js). Designed for seamless deployment on Vercel.

## Visual Identity & Guidelines
- **Palette**: Deep Blue (`#102A43`), Slate Blue (`#486581`), Warm Beige (`#C7B79A`), Off-White (`#F7F5F0`), Text Dark (`#243B53`), Soft Line (`#D8D1C5`). Strictly zero gradients.
- **Typography**: Cormorant Garamond (Headings) and Inter (Body).
- **Tone**: Elegant, discreet, adult, non-explicit, editorial wellness aesthetic. No emojis.

## Tech Stack
- **Framework**: React 18 + Vite 5
- **Styling**: Tailwind CSS 3
- **3D Hero**: `@react-three/fiber` + `@react-three/drei` + `three` (with WebGL fallback and reduced motion support)
- **Animations**: `gsap` + `ScrollTrigger`
- **Internationalization**: Dual language support (British English & Portuguese) with context API

## Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Preview
```bash
npm run preview
```

## Vercel Deployment
This project is configured as a standard Vite single-page application.
Deploy directly by connecting the GitHub repository to [Vercel](https://vercel.com):
- Framework Preset: **Vite**
- Build Command: `npm run build`
- Output Directory: `dist`

