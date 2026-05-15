# Romantic Birthday Scrapbook

A fully responsive birthday website prototype built with Next.js, Tailwind CSS, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Structure

- `app/` - Next.js app router pages and global styles
- `components/` - reusable animated sections and UI pieces
- `data/site.ts` - editable dummy memories, notes, songs, and letter copy
- `lib/animations.ts` - shared Framer Motion animation presets
- `tailwind.config.ts` - custom scrapbook color palette, shadows, fonts, and keyframes

## Personalize

Replace the placeholder text in `data/site.ts` first. The visual placeholder cards are generated with CSS so the site works before real photos are added.
