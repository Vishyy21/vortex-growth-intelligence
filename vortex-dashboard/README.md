# Vortex — Growth Intelligence Operating System

> Premium dark SaaS dashboard · v3.2 · Production-Ready Architecture

---

## Folder Structure

```
vortex-dashboard/
│
├── index.html                  # Lightweight HTML shell (no inline CSS/JS)
│
├── assets/
│   ├── icons/                  # SVG icon assets (future)
│   ├── logos/                  # Brand logo files (future)
│   ├── images/                 # Static images (future)
│   ├── fonts/                  # Self-hosted fonts (future)
│   └── backgrounds/            # Background textures (future)
│
├── css/
│   ├── variables.css           # Design tokens: colors, spacing, easing, typography
│   ├── base.css                # Resets, body, global typography
│   ├── layout.css              # App shell, main, content grid
│   ├── sidebar.css             # Sidebar, nav items, active states
│   ├── topbar.css              # Topbar, icon buttons
│   ├── hero.css                # Hero section, editorial blocks
│   ├── cards.css               # Panels, KPI cards, buttons, chips, toasts
│   ├── charts.css              # Chart wrappers, progress bars
│   ├── tables.css              # Table typography overrides
│   ├── ai.css                  # AI search bar, signal modules
│   ├── animations.css          # Keyframes, fade-up, stagger delays, scroll reveal
│   ├── cursor.css              # Custom cursor + glow
│   ├── loader.css              # Startup loader
│   ├── pages.css               # Ambient orbs, particles, grain, vignette
│   └── responsive.css          # All media queries
│
├── js/
│   ├── app.js                  # Bootstrap entry point (DOMContentLoaded)
│   ├── data.js                 # VX_DATA: all datasets, KPI values, page metadata
│   ├── utils.js                # Shared renderers: renderKpi, renderBar, animateCounter…
│   ├── navigation.js           # SPA routing, navigateTo(), renderPage()
│   ├── theme.js                # Dark/light toggle, localStorage persistence
│   ├── cursor.js               # Custom cursor tracking
│   ├── animations.js           # Card 3D tilt / magnetic hover
│   ├── charts.js               # Chart.js init, sparklines, cinematicTooltip()
│   ├── particles.js            # Lightweight CSS particle generator
│   ├── loader.js               # Startup loader fade-out
│   ├── notifications.js        # Toast system, openCmd()
│   │
│   └── pages/
│       ├── dashboard.js        # Hero, KPI grid, revenue chart, channel bars
│       ├── campaigns.js        # Attribution doughnut, campaign table
│       ├── audience.js         # Radar chart, cohort retention bars
│       ├── roi.js              # Editorial block, forecast line chart
│       ├── ai.js               # 6-card signal stream grid
│       ├── reports.js          # Executive briefings table
│       └── settings.js         # Theme & preferences panel
│
└── README.md
```

---

## Script Load Order

Scripts must load in this order (all in `index.html` before `</body>`):

1. `data.js` — constants, no DOM deps
2. `utils.js` — pure render helpers, no DOM deps
3. Feature modules: `theme`, `cursor`, `particles`, `loader`, `notifications`, `animations`, `charts`
4. Page renderers: `pages/dashboard`, `campaigns`, `audience`, `roi`, `ai`, `reports`, `settings`
5. `navigation.js` — depends on page renderers
6. `app.js` — bootstrap, must be last

---

## Tech Stack

| Layer       | Technology                    |
|-------------|-------------------------------|
| Markup      | Semantic HTML5                |
| Styling     | Vanilla CSS, CSS Variables    |
| Charts      | Chart.js 4.4.1 (CDN)         |
| Typography  | Satoshi (Fontshare) + Instrument Serif (Google Fonts) |
| JS          | Vanilla ES6+, no framework   |

---

## Development

Open `index.html` directly in a browser — no build step required.

For live reload during development:
```bash
npx serve .
# or
python3 -m http.server 8080
```

---

## Deployment

Drop the entire `vortex-dashboard/` folder on any static host:
- Vercel, Netlify, GitHub Pages, Cloudflare Pages, AWS S3 + CloudFront

No build step. No dependencies to install.
