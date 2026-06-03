# Peter Mwei — Portfolio

Dark-mode editorial portfolio built with React + Vite + Tailwind CSS + Framer Motion.

## Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI |
| Vite 5 | Dev server & bundler |
| Tailwind CSS 3 | Utility styling |
| Framer Motion 11 | Minimal animations |
| Google Fonts | Bebas Neue + DM Serif Display + DM Sans |

## Project Structure

```
src/
├── App.jsx                      # Root layout — imports all sections
├── main.jsx                     # React entry point
├── index.css                    # Tailwind directives + global resets
├── data/
│   └── portfolio.js             # ← ALL content lives here (projects, skills, contact)
├── hooks/
│   └── useScrollReveal.js       # Reusable InView hook
└── components/
    ├── Navbar.jsx               # Fixed nav, scroll-aware, mobile menu
    ├── SectionLabel.jsx         # Eyebrow label + divider line
    ├── ProjectCard.jsx          # Individual project card with hover animations
    └── sections/
        ├── Hero.jsx             # Name, tagline, CTAs
        ├── Work.jsx             # Project grid
        ├── About.jsx            # Bio + detail rows
        ├── Skills.jsx           # 4-column skill groups
        ├── Journey.jsx          # Timeline milestones
        └── Contact.jsx          # Links + footer
```

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

## Customising Content

All content is in `src/data/portfolio.js` — one file, no hunting through components.

- **Projects**: Edit the `projects` array. Each has `name`, `description`, `stack`, `impact`, `links`.
- **Skills**: Edit `skillGroups` — each group has a `label` and `skills` array.
- **Timeline**: Edit `milestones` — `year`, `title`, `desc`.
- **Contact**: Edit the `contact` object — `email`, `phone`, `github`, `linkedin`, `website`.

## Animation Philosophy

Framer Motion is used like a scalpel:

1. **Hero** — staggered fade-up on load (0.65s, `easeOut`), 5 elements with small delays
2. **Sections** — `whileInView` fade-up triggered once via `useScrollReveal` hook
3. **ProjectCard** — subtle background darken + left accent bar draw on hover
4. **Contact links** — border colour transition on hover

Nothing loops. Nothing bounces. Nothing draws attention to itself.

## Deployment

Works on any static host. Recommended: **Vercel** or **Netlify**.

```bash
npm run build
# Deploy the `dist/` folder
```

For Vercel: connect the GitHub repo and it auto-deploys on push.
