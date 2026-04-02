# Sriraj Paruchuru — Portfolio

A high-fidelity personal portfolio site built with React, TypeScript, Framer Motion, and GSAP.

## Stack

- **React 18** + **TypeScript**
- **Vite** for dev/build
- **Framer Motion** for scroll animations and entrance effects
- **GSAP** for cursor glow tracking
- **Tailwind CSS** for utility styling
- **Wouter** for routing

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The site will be at `http://localhost:5173`

## Project Structure

```
src/
  components/
    HeroSection.tsx       — Shatter-text hero with mouse-tracked glow
    FloatingNav.tsx       — Fixed top nav with blur backdrop
    ProjectVault.tsx      — 5 projects with hover code previews
    CompetitiveEdge.tsx   — Hackathon cards + capabilities grid
    ExperienceLog.tsx     — Timeline: Norstella, UoB MSc, VIT
    ContactSection.tsx    — CTA + links
    MagneticCursor.tsx    — Custom cursor with magnetic ring
  hooks/
    useMagneticCursor.ts  — RAF-based cursor tracking logic
  pages/
    Portfolio.tsx         — Assembles all sections
  App.tsx
  main.tsx
  index.css              — Global styles, CSS custom properties
```

## Notes

- Custom cursor replaces the system cursor (`cursor: none` on body)
- All sections use `useInView` for scroll-triggered entrance animations
- The `data-magnetic` attribute on interactive elements triggers cursor ring expansion
- Google Fonts (Inter + JetBrains Mono) loaded via `index.html`
