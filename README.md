# William Hao-Cheng Huang Research Website

A maintainable academic research website built with Vue 3 and Vite.

## Edit Content

All site data lives in `src/content/`.

- `profile.js`: name, bio, research interests, CV path
- `education.js`: education timeline
- `experiences.js`: research, teaching, and work history
- `publications.js`: paper list rendered by year
- `projects.js`: portfolio items
- `awards.js`: awards and honors
- `links.js`: email, CV, and research summary links
- `sections.js`: enable or disable page sections

## Add a Profile Photo

Place your image at `public/images/profile.jpg`, then update `avatar` in
`src/content/profile.js` to `images/profile.jpg`.

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The output will be generated in `dist/`.

## Add a CV PDF

The current CV and research summary are stored at:

- `public/docs/William_Huang_CV.pdf`
- `public/docs/William_Huang_Research_Summary.pdf`

Update `cvUrl` or `researchSummaryUrl` in `src/content/profile.js` if the file
names change.

## GitHub Pages

This project uses `base: "./"` in `vite.config.js`, so the built files can be
hosted from a GitHub Pages project site without additional route configuration.

The included GitHub Actions workflow builds and deploys automatically when you
push to `main` or `master`. In GitHub, set Pages source to **GitHub Actions**.
