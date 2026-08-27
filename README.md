# JA Portfolio — Next.js + React

This version uses Next.js, React and plain JavaScript/JSX. No TypeScript.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Project CMS

Projects have full case-study pages at `/projects/[slug]`. The site uses the
content in `content/projects.js` until Sanity is connected, so it can be run and
deployed immediately.

To enable the CMS:

1. Create a free project at https://www.sanity.io/manage.
2. Copy `.env.example` to `.env.local` and add your Sanity project ID.
3. Add `http://localhost:3000` (and your production domain) to the project's
   CORS origins in Sanity Manage.
4. Restart the app and open http://localhost:3000/studio.

The first published CMS document with a matching slug overrides its local
project. This lets you move projects into the CMS one at a time without making
the existing portfolio disappear.

## Components

- `components/Navbar.jsx`
- `components/Hero.jsx`
- `components/ShaderBackground.jsx`
- `components/TechObject.jsx`
- `components/TechStrip.jsx`
- `components/About.jsx`
- `components/Skills.jsx`
- `components/Projects.jsx`
- `components/Services.jsx`
- `components/Experience.jsx`
- `components/Contact.jsx`
- `components/Footer.jsx`
- `components/Reveal.jsx`

## Add your CV

Place your CV at:

`public/resume.pdf`

## Update before launch

Replace:
- `your@email.com`
- GitHub links
- LinkedIn links
- Project links
- Project descriptions if needed
