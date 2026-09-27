# 💪 FitLog — Workout Library

**FitLog** is a dark, no-nonsense gym companion built with Next.js. Browse a
library of workouts, dive into detailed instructions for each lift, and build
up a daily training plan that tracks itself as you go.

Pick a lift → lock it into today's plan → watch the numbers add up.

---

## 📖 Description

FitLog fetches its workout catalogue from a remote API (with an automatic
fallback to a secondary API if the primary one is unreachable), and lets the
user:

- Browse all 12 workouts in a fully responsive card grid
- Open a detail page for any workout with full instructions and key specs
- Add a workout to **Today's Plan** (capped at 5 lifts) or **Save for later**
- Track live totals for exercises, minutes, and calories as the plan changes
- Sort their plan/saved list by Duration, Calories, or Rating
- Search their library and plan by workout name or muscle-group tag
- Mark a planned workout as done, or remove it entirely
- Get toast feedback for every action, with the whole plan persisted in
  `localStorage` so it survives a page refresh
- Land on a clean custom 404 page for any invalid route

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **Next.js 14** (App Router) | Routing, server-side data fetching, `loading.js` / `not-found.js` conventions |
| **React 18** | Client-side interactivity via the Context API |
| **Tailwind CSS** | Utility-first styling and full responsiveness |
| **daisyUI** | Themed component primitives on top of Tailwind |
| **lucide-react** | Icon set used throughout the UI |
| **Browser `localStorage`** | Persisting the plan/saved lists across reloads |

---

## ✨ 5 Key Features

1. **Live workout library** — 12 lifts fetched from the FitLog API on the
   server, with an automatic fallback API if the primary source fails.
2. **Dynamic detail pages** — `/workouts/[id]` renders a full specs table,
   category tags, and step-by-step instructions for any workout.
3. **Smart "My Plan" page** — a 5-lift daily cap, live Exercises / Minutes /
   Calories metrics, and separate Today's Plan / Saved tabs.
4. **Sort & search** — reorder any list by Duration, Calories, or Rating, and
   filter the library or plan by name or muscle-group tag in real time.
5. **Persistent, guided UX** — plan/saved state survives a refresh via
   `localStorage`, every action confirms itself with an icon-based toast, and
   unknown routes land on a styled 404 page instead of an error screen.

---

## 🚀 Getting Started

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd fitlog

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## 📁 Project Structure

```
fitlog/
├── app/
│   ├── layout.js            # Root layout — Navbar, Footer, context providers
│   ├── page.js               # Home page (Hero + Library)
│   ├── loading.js            # Loading state for the home page fetch
│   ├── not-found.js          # Custom 404 page
│   ├── my-plan/page.js       # My Plan page (tabs, sort, search, metrics)
│   └── workouts/[id]/page.js # Dynamic workout detail page
├── components/
│   ├── Navbar.js
│   ├── Hero.js
│   ├── Library.js            # Library grid + search
│   ├── WorkoutCard.js
│   ├── WorkoutActions.js     # Add to plan / Save for later buttons
│   └── Footer.js
├── context/
│   ├── PlanContext.js        # Plan/saved state + localStorage persistence
│   └── ToastContext.js       # Toast notifications
├── lib/
│   └── api.js                # Fetch helpers with fallback API support
└── assets/                   # Logo and hero banner images
```

---

## 🔌 API

Workout data is served from:

- **Primary:** `https://api.abcz.workers.dev/api/fitlog`
- **Fallback:** `https://api.api-store.workers.dev/api/fitlog`

No API key or environment variables are required — both endpoints are public.


---

## 📄 License

Built for the B14-A6-Fit-Log assignment. Free to use as a learning reference.
