# Sriraj Paruchuru — Portfolio

Live at **[sriraj-p.github.io](https://sriraj-p.github.io)** — an "AI systems lab" themed portfolio: near-black canvas, electric chartreuse accent, neural-mesh hero, scroll-driven project deck, live GitHub data, and a working terminal easter egg (press <kbd>`</kbd>).

## Stack

- **React 18** + **TypeScript** + **Vite**
- **Framer Motion** — scroll-driven card stack, kinetic type, entrance animations
- **Canvas 2D** — interactive neural-mesh hero (no WebGL dependency)
- **Tailwind CSS** + CSS custom properties for the design system

## Editing content

All copy lives in **`src/data/content.ts`** — identity, bio, projects, hackathon wins, experience, marquee. Edit that one file; no component changes needed.

## Adding the headshot

Drop a portrait photo at **`public/headshot.jpg`** (4:5 ratio works best). Until it exists, the About section shows a styled S/P monogram fallback.

## Commands

```bash
npm install        # install dependencies
npm run dev        # dev server at http://localhost:5173
npm run build      # type-check + production build to dist/
npm run deploy     # build and publish dist/ to the gh-pages branch
```

GitHub Pages serves the `gh-pages` branch, so `npm run deploy` is what updates the live site.

## Structure

```
src/
  data/content.ts        — ALL site copy (single source of truth)
  components/
    BootIntro.tsx        — terminal-style boot sequence (once per session)
    NeuralCanvas.tsx     — mouse-reactive particle mesh
    HeroSection.tsx      — kinetic name, role rotator, headline stats
    FloatingNav.tsx      — top rail with scroll progress bar
    Marquee.tsx          — angled chartreuse achievement ticker
    About.tsx            — headshot + bio + facts + stacks
    ProjectStack.tsx     — sticky deck-of-cards project showcase
    Recognition.tsx      — trophy cabinet, champion card
    GitHubLive.tsx       — live contribution heatmap + recent repos
    ExperienceLog.tsx    — timeline
    ContactSection.tsx   — CTA
    Terminal.tsx         — interactive shell (` key or button)
    MagneticCursor.tsx   — custom cursor (pointer devices only)
  pages/Portfolio.tsx    — assembles all sections
```

## Notes

- GitHub data is fetched client-side at runtime (github.com REST + jogruber contributions API) with graceful fallbacks — no tokens, no build step.
- `prefers-reduced-motion` is respected: boot intro skips, marquee and canvas animation stop.
- Custom cursor only activates on `pointer: fine` devices; touch gets the system default.
