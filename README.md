# Okudo Fabrications — Premium Architectural Steel & Aluminium Solutions

![Okudo Engineering](public/images/Okudo%20logo.jpeg)

> **Live Site:** [okudofabrications.vercel.app](https://okudofabrications.vercel.app/)

A high-performance brand website for **Okudo Engineering**, a Nairobi-based leader in premium architectural steel and aluminium fabrication. Built with React, TypeScript, and Tailwind CSS, this site showcases the company's portfolio, engineering process, and service capabilities for residential, commercial, and hospitality developments.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [License](#license)

---

## Overview

Okudo Fabrications delivers world-class architectural metal solutions across Kenya, including:

- **Architectural Entrance Systems** — Custom gates, doors, and access solutions
- **Façade & Glazing Solutions** — High-performance building envelopes
- **Security & Access Solutions** — Integrated security with architectural elegance
- **Outdoor Lifestyle Structures** — Pergolas, canopies, and shade structures
- **Safety Systems** — Balustrades, railings, and safety barriers
- **Shelter & Shade Solutions** — Modern canopy and shade structures

The website serves as a digital storefront to build credibility, showcase signature projects, and generate qualified leads through a built-in consultation request form.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | UI component library |
| **TypeScript** | Type-safe development |
| **Vite 8** | Lightning-fast build tool & dev server |
| **Tailwind CSS 4** | Utility-first CSS framework |
| **Framer Motion** | Production-ready animations |
| **Oxlint** | Rust-based linter |
| **Vercel** | Hosting & deployment |

---

## Features

- 🎨 **Asymmetrical layout design** — Modern, editorial-style grid system
- 🖼️ **Dynamic hero carousel** — Auto-advancing background image transitions
- 📊 **Animated statistics counters** — Scroll-triggered number animations
- 📱 **Fully responsive** — Optimised for mobile, tablet, and desktop
- ⚡ **Optimised images** — `.webp` and `.jpeg` support with lazy loading
- 📝 **Contact form** — Consultation request form with WhatsApp integration
- 🎭 **Scroll animations** — Smooth entrance animations using Framer Motion
- ♿ **Accessible** — Semantic HTML, ARIA labels, and keyboard navigation
- 🔍 **SEO-optimised** — Open Graph, Twitter Card, LD+JSON structured data

---

## Getting Started

### Prerequisites

- **Node.js** >= 18.x
- **npm** >= 9.x (or **bun**, **pnpm**, **yarn**)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/okudo-website.git
cd okudo-website

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## Project Structure

```
okudo-website/
├── public/
│   ├── favicon/              # Favicon assets (SVG, PNG variants)
│   ├── images/               # Project & gallery images (.webp & .jpeg)
│   ├── robots.txt
│   ├── sitemap.xml
│   └── site.webmanifest
├── src/
│   ├── components/
│   │   ├── layout/           # Navbar, Footer
│   │   ├── sections/         # Hero, Credibility, FeaturedDevelopments, etc.
│   │   └── ui/               # Button, Container, ProjectImage, etc.
│   ├── data/
│   │   └── siteData.ts       # All content (projects, stats, testimonials, etc.)
│   ├── hooks/
│   │   └── useAnimations.ts  # Custom scroll & counter animation hooks
│   ├── lib/
│   │   └── utils.ts          # Utility functions (cn, formatImagePath)
│   ├── types/
│   │   └── index.ts          # TypeScript interfaces
│   ├── App.tsx               # Root component
│   ├── App.css               # Global styles
│   ├── index.css             # Tailwind CSS imports
│   └── main.tsx              # Entry point
├── index.html                # HTML shell with SEO metadata
├── vite.config.ts            # Vite configuration
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── package.json
```

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Type-check & production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run Oxlint for code quality |

---

## Deployment

The site is deployed on **Vercel**. Any push to the `main` branch triggers an automatic redeployment.

To deploy manually:

```bash
npm run build
npx vercel --prod
```

---

## Customisation

### Updating Content

All site content is managed in a single file:

```bash
src/data/siteData.ts
```

Edit the `projects`, `solutions`, `industries`, `testimonials`, `stats`, and `processSteps` arrays to update the portfolio, services, and company information.

### Adding Images

1. Add `.webp` and `.jpeg` versions of your image to `public/images/`
2. Reference the filename (with extension) in `src/data/siteData.ts`
3. The `formatImagePath()` utility handles URL encoding automatically

### Brand Colours

Brand colours are defined in `src/index.css` using Tailwind CSS v4's `@theme` directive:

```css
@theme {
  --color-luxury-dark: #0B1120;
  --color-luxury-gold: #B68D40;
  --color-luxury-text: #1A1A2E;
  --color-luxury-bg: #F5F2ED;
}
```

---

## Contact

**Okudo Engineering**

- 📍 Nairobi, Kenya
- 📞 [+254 799 544 879](tel:+254799544879)
- ✉️ [alusteel.ok@gmail.com](mailto:alusteel.ok@gmail.com)
- 💬 [WhatsApp](https://wa.me/254799544879)

---

## License

This project is proprietary software owned by Okudo Engineering.
