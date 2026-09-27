# 💪 FitLog — Workout Library

A dark, no-nonsense gym companion built with Next.js. Browse a library of
workouts, drill into detailed instructions for each lift, and build up
"Today's Plan" and a "Saved for later" list that persists across reloads.

## Description

FitLog fetches its workout catalogue from a remote API (with an automatic
fallback API if the primary one is unreachable), and lets the user:

- Browse all workouts in a responsive card grid
- Open a detail page for any workout with full instructions and specs
- Add a workout to "Today's Plan" (capped at 5 lifts) or "Save for later"
- Track live totals for exercises, minutes, and calories
- Sort their plan/saved list by Duration, Calories, or Rating
- Mark a planned workout as done, or remove it
- See toast notifications for every action, with data persisted in
  `localStorage` so the plan survives a page refresh

## Technologies used

- **Next.js 14** (App Router) — routing, server-side data fetching, `loading.js`/`not-found.js` conventions
- **React 18** — client components for interactive state (Context API)
- **Tailwind CSS + daisyui** — styling, theming, and responsiveness
- **lucide-react** — icon set
- **Browser `localStorage`** — persisting the plan/saved lists

## 5 key features

1. Responsive workout library (12 lifts) fetched live from the FitLog API, with an automatic fallback API on failure
2. Dynamic workout detail pages (`/workouts/[id]`) with specs table and step-by-step instructions
3. "My Plan" page with a 5-lift cap, live Exercises/Minutes/Calories metrics, and Today's Plan / Saved tabs
4. Sortable lists (Duration, Calories, Rating) and Mark-as-Done / Remove actions with toast feedback
5. Persistent state via `localStorage`, a custom loading state, and a styled 404 page for unknown routes

## Getting started locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Deployment

Deploy on Vercel, Netlify, or Cloudflare Pages by connecting the GitHub repo —
no environment variables are required since the API endpoints are public.

- Live Link:
- GitHub Repository Link:
