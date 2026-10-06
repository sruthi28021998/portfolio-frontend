# Portfolio Frontend

The public-facing portfolio website. Fetches all content dynamically from the custom CMS backend — no content is hardcoded.

## Tech Stack
- Next.js 14 (App Router)
- Tailwind CSS v4
- Server-side data fetching (no client-side loading spinners needed on first load)

## Pages
| Route | Description |
|---|---|
| `/` | Home — About summary + featured projects |
| `/about` | Full bio, skills, experience, testimonials |
| `/projects` | All projects |
| `/blog` | Published blog posts |
| `/blog/[slug]` | Single blog post |
| `/contact` | Contact form → posts to backend `/contact` |

## Project Structure

app/ → page routes (App Router)
components/ → Navbar, Footer
lib/ → api.js (fetch helpers for backend communication)


## Setup

```bash
npm install
cp .env .env local
```

Fill in `.env.local`:
NEXT_PUBLIC_API_URL=http://localhost:5000


Run it:
```bash
npm run dev
```

Visit `http://localhost:3000`.

## How Content Gets Here
All content (About, Skills, Projects, Blogs, Experience, Testimonials) is entered through the [portfolio-admin-panel](https://github.com/<your-username>/portfolio-admin-panel) — this app only displays it. There is no admin login or content editing here.

## Deployment
Deployed on [Vercel](https://vercel.com).

- **Environment variable:** `NEXT_PUBLIC_API_URL` set to the live backend URL

Live URL: `https://portfolio-frontend-rho-ashen.vercel.app`

## Related Repos
- [portfolio-backend-cms](https://github.com/sruthi28021998/portfolio-backend-cms.git) — API and database
- [portfolio-admin-panel](https://github.com/sruthi28021998/portfolio-admin-panel.git) — CMS admin dashboard
