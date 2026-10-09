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

## Resume

The Download CV button uses `public/Jegede_Adeola_James_Resume-1.docx`. To use a different file, add it to `public/` and set `NEXT_PUBLIC_RESUME_URL` to its URL (for example, `/resume.pdf`) in your local and hosting environments, then rebuild.

## Before sharing with employers or clients

- Personal contact links are configured in `content/profile.js`.
- Your Word resume is connected to Download CV. Keep it up to date and verify the download on your deployed site.
- Add `repositoryUrl` and/or `liveUrl` to each relevant project in `content/projects.js`, or use the matching fields in Sanity Studio. Only link repositories you can share publicly.
- Confirm that the case studies, project counts and experience descriptions reflect work you actually completed. For employment, include your real employers/clients, dates and contributions where appropriate.
- The contact form uses FormSubmit. Send a test from the deployed site yourself, activate the recipient address using the confirmation email if required, then confirm delivery. The direct email link is also available.
- Run `npm run build` and check the homepage, case studies and mobile menu before sharing.

## Deployment

Deploy this repository with a Next.js-compatible host using `npm run build` as the build command. Copy the optional Sanity and CV environment settings to the hosting environment. No CMS configuration is needed if you prefer the local project content.

After deployment, test the public URL on your phone and confirm that the CV and any project links open correctly. If using Sanity Studio, add the deployed origin to your Sanity project's CORS settings.

To verify production while a development server is running, use a separate output folder. In PowerShell, run `$env:PORTFOLIO_BUILD_DIR=".next-verify"` before `npm.cmd run build` and `npm.cmd run start`. Use the same value for both commands; omit the variable for a normal deployment.
