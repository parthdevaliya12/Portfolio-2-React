# parth.dev — Frontend Developer Portfolio

A premium, fully responsive portfolio built with **React.js + Vite + Tailwind CSS**.

## Design concept

Built around a **code-editor aesthetic** instead of a generic gradient/SaaS template:
deep ink-navy background, amber accent (syntax-highlight color), teal secondary,
`Space Grotesk` for display type, `JetBrains Mono` for labels/eyebrows, `Inter` for body copy.
The hero is styled as a live code editor window with a typing animation; section eyebrows
use `// comments` instead of decorative numbered markers, fitting an actual developer's vernacular.

## Setup

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
```

## Project structure

```
src/
  components/
    Navbar.jsx      sticky glass nav, animated underline links, mobile menu
    Hero.jsx        signature editor-window hero with typewriter effect
    Education.jsx   git-log style vertical timeline
    Skills.jsx       categorized cards with animated progress bars
    Projects.jsx     repo-style project cards with tech tags
    Contact.jsx      functional form wired to Web3Forms
    Footer.jsx       socials + back-to-top
  hooks/
    useReveal.js     IntersectionObserver scroll-reveal hook (shared)
  index.css          fonts, scrollbar, focus states, reduced-motion support
  App.jsx            assembles all sections
tailwind.config.js   custom color/type/animation tokens
```

## Before you deploy — customize these

1. **Contact form**: In `src/components/Contact.jsx`, replace:

   ```js
   const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";
   ```

   Get a free key at [web3forms.com](https://web3forms.com) — no backend needed.

2. **Your info**: Update name, bio, roles array, and social links in `Hero.jsx`, `Footer.jsx`, and `Navbar.jsx`.

3. **Content**: Edit the data arrays at the top of `Education.jsx`, `Skills.jsx`, and `Projects.jsx`
   — each component is data-driven, so adding/removing entries just means editing the array.

4. **Colors**: All design tokens live in `tailwind.config.js` under `theme.extend.colors`
   (`ink`, `paper`, `amber`, `teal`) — change once, applies everywhere.

## Notes

- All animations respect `prefers-reduced-motion`.
- All interactive elements have visible keyboard focus states.
- Fully responsive: tested breakpoints at mobile, tablet, and desktop widths.
