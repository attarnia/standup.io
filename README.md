<div align="center">

# Standup.io

**Async standups for remote teams — no meetings required.**

Submit daily updates, track team activity across workspaces, and get AI-generated summaries automatically.

<!-- Replace with your own badges once CI/deployment is set up -->
<!-- ![Build](https://img.shields.io/github/actions/workflow/status/your-username/standup.io/ci.yml) -->
<!-- ![License](https://img.shields.io/github/license/your-username/standup.io) -->
<!-- ![Vercel](https://img.shields.io/badge/deployed-vercel-black) -->

</div>

---

## 📸 Preview

![StandUp Dashboard](public/image/StandUp.png)
---

## ✨ Features

- **Workspaces** — create or join multiple workspaces via a shareable invite link
- **Roles** — `OWNER` / `MEMBER` permissions, with ownership transfer support
- **Daily reports** — submit yesterday / today / blockers updates, one per person per day per workspace
- **AI summaries** — automatic team-standup summarization with provider fallback (Groq → Pollinations → Gemini)
- **Authentication** — email/password and Google OAuth via Supabase, with automatic account sync into the app's own database
- **Access control** — server-side permission checks on every mutation (not just hidden UI), workspace membership verified before any read or write

---

## 🛠️ Tech stack

| Layer        | Technology                                                                      |
| ------------ | ------------------------------------------------------------------------------- |
| Framework    | [Next.js](https://nextjs.org/) (App Router, Server Actions)                     |
| Language     | TypeScript                                                                      |
| Database     | PostgreSQL (hosted on [Supabase](https://supabase.com/))                        |
| ORM          | [Prisma](https://www.prisma.io/)                                                |
| Auth         | Supabase Auth (email/password + Google OAuth)                                   |
| Styling      | [Tailwind CSS](https://tailwindcss.com/) with a custom dark design token system |
| AI summaries | Groq, Pollinations, and Gemini APIs (fallback chain)                            |
| Icons        | Inline SVG                                                                      |

---

## 🚀 Getting started

### Prerequisites

- Node.js 18+
- A [Supabase](https://supabase.com/) project (free tier is enough to start)

### Setup

1. Clone the repo and install dependencies:

   ```bash
   git clone https://github.com/your-username/standup.io.git
   cd standup.io
   npm install
   ```

2. Copy the example environment file and fill in your credentials:

   ```bash
   cp .env.example .env
   ```

3. Run database migrations:

   ```bash
   npx prisma migrate dev
   ```

4. (Optional but recommended) Enable Supabase auth identity linking so the same email signing in via email/password and Google doesn't create duplicate accounts. Dashboard → Authentication → Sign In / Providers.

5. Start the dev server:

   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000)

---

## 🔑 Environment variables

| Variable                        | Description                                                                |
| ------------------------------- | -------------------------------------------------------------------------- |
| `DATABASE_URL`                  | Pooled Postgres connection string (Supabase transaction pooler, port 6543) |
| `DIRECT_URL`                    | Direct Postgres connection string (used for migrations, port 5432)         |
| `NEXT_PUBLIC_SUPABASE_URL`      | Supabase project URL                                                       |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon/public key                                                   |
| `SUPABASE_SERVICE_ROLE_KEY`     | Supabase service role key — **server-only, never expose to the client**    |
| `NEXT_PUBLIC_APP_URL`           | Base URL of the app (used to build invite links)                           |
| `GROQ_API_KEY`                  | Primary AI summary provider                                                |
| `POLLINATIONS_API_KEY`          | Fallback AI summary provider                                               |
| `GEMINI_API_KEY`                | Second fallback AI summary provider                                        |

> ⚠️ Never commit `.env` to version control. Rotate any credentials that have been exposed in commit history, chat logs, or screenshots.

---

## 📁 Project structure

```
┌ ƒ /
├ ○ /_not-found
├ ƒ /auth
├ ƒ /auth/callback
├ ƒ /dashboard
├ ƒ /dashboard/workspaces
├ ƒ /dashboard/workspaces/[workspaceId]/member
├ ƒ /dashboard/workspaces/[workspaceId]/reports
├ ○ /dashboard/workspaces/new
├ ƒ /email-password
├ ƒ /google-login
└ ƒ /join/[code]
```

---

## 🗺️ Roadmap

- [ ] AI summary generation job (scheduled/cron-triggered)
- [ ] Email notifications for missed daily reports
- [ ] Workspace-level settings (private/public, invite permissions)
- [ ] Report history and analytics view
- [ ] Mobile-responsive polish pass

---

## 🤝 Contributing

This is currently a solo portfolio project, but issues and PRs are welcome. Please open an issue before submitting a large PR to discuss the change first.

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).
