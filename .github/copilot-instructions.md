# Copilot Instructions for portfolio-hamouda

## Project Overview
Portfolio professionnel d'Ingénieur DevOps & Cloud développé avec React 19.2, Vite (rolldown-vite 7.2.2), Tailwind CSS 4.1, et Lucide React pour les icônes. Application single-page optimisée pour la performance et le SEO, déployée sur Netlify.

## Architecture & Stack

### Build System
- **Vite with Rolldown**: Uses `npm:rolldown-vite@7.2.2` as Vite replacement (see `package.json` overrides) for Rust-based bundling performance
- **Fast Refresh**: Powered by `@vitejs/plugin-react` using Babel (or oxc in rolldown mode)
- **Production Build**: Outputs to `dist/` directory configured in `netlify.toml`

### Styling & UI
- **Tailwind CSS v4.1**: Configured via `@import "tailwindcss"` in `src/index.css` - uses new v4 syntax without config file
- **Utility-First Design**: All components use Tailwind utility classes (no custom CSS files except global styles)
- **Color Palette**: Primary blue-600, secondary indigo-600, gradients for visual hierarchy
- **Responsive Design**: Mobile-first with breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Icons**: Lucide React library for all icons (Menu, X, Mail, Github, etc.)

### Component Architecture
Single-page application with component-based structure in `src/components/`:
- **Navbar.jsx**: Fixed navigation with scroll detection, mobile menu, smooth scroll links
- **Hero.jsx**: Landing section with profile, CTA buttons, social links
- **About.jsx**: Professional profile with expertise cards
- **Skills.jsx**: Technical skills organized by category (Cloud, Containers, CI/CD, Monitoring, Dev, Security) with progress bars
- **Projects.jsx**: Portfolio grid with project cards (images from Unsplash placeholders)
- **Contact.jsx**: Contact form integrated with Netlify Forms + contact info
- **Footer.jsx**: Copyright and tech stack mention

### Code Quality
- **ESLint 9.x**: Flat config (`eslint.config.js`) with `defineConfig` API
- **React Hooks**: `eslint-plugin-react-hooks` flat config enabled
- **React Refresh**: `eslint-plugin-react-refresh` for HMR validation
- **Custom Rules**: `no-unused-vars` ignores uppercase constants (pattern: `^[A-Z_]`)
- **Ignored**: `dist/` folder excluded from linting

## Development Workflows

### Commands
```bash
npm run dev      # Dev server at localhost:5173 with HMR
npm run build    # Production build to dist/
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Local Development
- Vite dev server with HMR on port 5173
- Changes auto-reload in browser
- Smooth scroll behavior enabled via CSS (`scroll-behavior: smooth`)

### Netlify Deployment
**Configuration**: `netlify.toml` defines:
- Build command: `npm run build`
- Publish directory: `dist`
- SPA redirects: `/*` → `/index.html` (status 200)
- Node version: 20

**Deployment Options**:
1. **Git Integration** (recommended): Push to GitHub/GitLab, connect in Netlify dashboard
2. **Netlify CLI**: `netlify init` then `netlify deploy --prod`
3. **Manual**: Drag/drop `dist/` folder to netlify.com/drop

**Netlify Forms**: Contact form uses `data-netlify="true"` attribute - submissions appear in Netlify dashboard automatically

## Project Conventions

### File Structure
```
src/
├── components/       # All React components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── App.jsx          # Main component importing all sections
├── main.jsx         # Entry point with React 18+ createRoot
└── index.css        # Global styles + Tailwind import
```

### Component Patterns
- **Functional components only**: Use hooks (`useState`, `useEffect`)
- **Default exports**: All components use default export
- **Props destructuring**: When applicable
- **StrictMode**: Enabled in `main.jsx`

### Import Conventions
```jsx
// React imports - named imports
import { useState, useEffect } from 'react'

// Icons - named imports from lucide-react
import { Menu, X, Github, Linkedin } from 'lucide-react'

// Components - default imports with .jsx extension
import Navbar from './components/Navbar.jsx'
```

### Styling Patterns
- **Gradients**: `bg-gradient-to-br from-blue-50 to-indigo-100`
- **Hover effects**: `hover:shadow-xl hover:-translate-y-2 transition-all duration-300`
- **Cards**: `rounded-xl shadow-lg p-6` pattern throughout
- **Buttons**: Primary (blue gradient) and secondary (white with border)
- **Responsive utilities**: `hidden md:flex`, `text-4xl md:text-5xl`, etc.

### Navigation & UX
- **Hash-based routing**: Links use `#home`, `#about`, `#skills`, etc.
- **Smooth scroll**: CSS-based, works with anchor links
- **Mobile menu**: Toggle state with Lucide icons (Menu/X)
- **Scroll detection**: Navbar background changes on scroll (`isScrolled` state)

## Content Customization

### Personalization Points
1. **Hero section**: Update name, title, location, contact info, social links
2. **Skills**: Modify skill categories and levels in `Skills.jsx` arrays
3. **Projects**: Replace placeholder images (Unsplash URLs) with real project screenshots
4. **Contact form**: Update email, phone in `Contact.jsx` and `Hero.jsx`
5. **Meta tags**: Edit SEO info in `index.html` (description, keywords, title)

### Adding New Sections
1. Create component in `src/components/`
2. Import in `App.jsx`
3. Add navigation link in `Navbar.jsx` `navItems` array
4. Use consistent Tailwind patterns from existing sections

## Technology Notes
- **React 19.2**: Latest stable - uses concurrent features, automatic batching
- **Rolldown Vite**: Faster than standard Vite, drop-in replacement with Rust performance
- **Tailwind v4**: New import syntax, no config file needed for defaults
- **No TypeScript**: JavaScript-only project - can add JSDoc for type hints if needed
- **No Router**: Single-page with hash navigation (can add react-router-dom if multi-page needed)

## Production Checklist
- [ ] Update personal information (name, email, phone)
- [ ] Replace social media links with real profiles
- [ ] Add real project images and descriptions
- [ ] Test Netlify Forms submission after deployment
- [ ] Configure custom domain in Netlify dashboard
- [ ] Verify SEO meta tags and Open Graph tags
- [ ] Test responsive design on multiple devices
- [ ] Check performance with Lighthouse
