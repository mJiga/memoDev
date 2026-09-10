# memo.dev

Personal portfolio for **Guillermo Jimenez Garcia** — software engineer and
pianist. Live at **https://mjiga.github.io/memoDev/**.

## Stack

React 18 · TypeScript · Vite 5 · Tailwind CSS · Framer Motion · React Router

## Getting started

```bash
npm ci
npm run dev      # local dev server
npm run build    # typecheck + production build to dist/
npm run preview  # serve the production build
npm run lint     # eslint
```

## Structure

```
src/
  data/resume.ts        Single source of truth for all resume content
  data/navigation.ts    Section ids + nav labels
  pages/                One file per page section (Home, Experience, …)
  components/           Header, Hero, Footer
  components/ui/        Reusable animation and layout primitives
  hooks/                useActiveSection (scroll spy)
```

### Updating content

Almost everything on the page — roles, bullet points, metrics, skills,
education, contact details — is driven by `src/data/resume.ts`. Editing that
file is usually all that's needed; the sections render from it.

To swap the downloadable resume, replace
`src/assets/Guillermo_Jimenez_Resume.pdf`.

To add photos, drop the image into `src/assets`, import it in
`src/pages/Experience.tsx` (or `Interests.tsx`) and add an entry to that
file's `gallery` array. Each entry accepts an optional `position`
(CSS `object-position`, for framing the crop) and `caption`.

### Animation primitives

| Component        | Purpose                                              |
| ---------------- | ---------------------------------------------------- |
| `Reveal`         | Scroll-triggered fade / slide / blur entrance        |
| `TextReveal`     | Headline that unrolls word by word behind a mask     |
| `RoleRotator`    | Cycling job descriptors with a masked vertical slide |
| `Magnetic`       | Control that leans toward the cursor                 |
| `SpotlightCard`  | Pointer-tracking tilt + highlight card               |
| `Counter`        | Number that counts up when scrolled into view        |
| `Marquee`        | Seamless looping ticker                              |
| `Timeline`       | Experience rail whose fill tracks scroll position    |
| `ScrollProgress` | Hairline reading-progress bar                        |
| `Aurora`         | Drifting background colour fields                    |

Every one of these degrades to a plain fade (or no motion at all) under
`prefers-reduced-motion: reduce`.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which lints,
builds, and publishes `dist/` to the `gh-pages` branch. The workflow can also
be run manually from the Actions tab.

Vite's `base` is set to `/memoDev/` in `vite.config.ts` to match the GitHub
Pages subpath.
