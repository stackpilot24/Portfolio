# Portfolio

A personal portfolio site that syncs your pinned projects live from GitHub —
stars, language, and last-updated all pull automatically, while you keep full
control over what shows up and in what order.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Make it yours

Everything you'll want to change lives in two files — no need to touch any
component code.

### `data/profile.config.ts`

Your name, title, bio, location, links, profile photos, and accent color.
Set `githubUsername` here — that's what makes the Projects section sync live.

### `data/repos.config.ts`

Controls which repos show and in what order:

- **`pinned`** — list repo names (exact, case-sensitive) in the order you
  want them to appear first. Whatever you put first here shows up first on
  the site, regardless of GitHub's own sort order.
- **`hidden`** — repo names to leave off the site entirely (e.g. forks,
  scratch repos, private experiments you made public by accident).
- **`overrides`** — per-repo custom display name, description, icon
  (emoji or image path), or a `featured` badge — without editing GitHub
  itself.
- **`sortBy`** / **`limit`** — how everything *not* pinned is ordered, and
  the max number of repos shown.

The rest of the data (stars, forks, language, last updated) is always pulled
live from the GitHub API, cached for an hour, so it stays current without a
redeploy.

> Optional: set a `GITHUB_TOKEN` environment variable (a GitHub personal
> access token with no special scopes needed) to raise the API rate limit.
> Not required for normal personal use.

### Profile photos

Drop your own images into `public/images/` as `avatar-front` and
`avatar-back` (or update the paths in `profile.config.ts`). Clicking your
photo on the live site does a 3D flip from the front photo to the back one
— a nice spot for a more candid/fun photo as the "back."

### Theme

A light/dark toggle is built in (top right). The accent color used for
highlights across the whole site comes from `accentColor` in
`profile.config.ts`.

## How people will see it

Once deployed (see below), you get a public URL you can share anywhere —
on your resume, LinkedIn, email signature, etc. Every time you push a
change to this repo, the live site rebuilds automatically. Your GitHub
repos themselves don't need redeploys to show up — they sync on their own
via the hourly refresh.

## Deploying

**Vercel (recommended, free):**

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Deploy — you'll get a `your-project.vercel.app` URL immediately, with a
   free custom domain option if you have one.

**GitHub Pages:** also works, but requires a static export
(`next.config.ts` → `output: "export"`) since GitHub Pages can't run the
server-side GitHub sync on its own — ask if you'd like this set up instead.
