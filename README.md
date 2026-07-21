# Elevra AI landing page — Netlify + Decap CMS setup

This folder is a complete, framework-free static site. The page renders from
`content/data.json`, and `/admin` gives you a form-based editor (Decap CMS)
for every field in that file — no HTML editing required once this is set up.

Because Netlify discontinued Netlify Identity (the login system Decap CMS
used to rely on), this setup uses **DecapBridge** instead — a free service
built specifically to replace it. You'll end up with three free accounts:
GitHub (stores the code), Netlify (hosting), and DecapBridge (login for
the `/admin` editor).

## 1. Put the code on GitHub

1. Create a new repository at github.com (public or private, either works).
2. Upload every file in this folder to that repo, preserving the folder
   structure (`css/`, `js/`, `content/`, `admin/` all need to stay where they are).

## 2. Connect it to Netlify

1. In Netlify, "Add new site" > "Import an existing project" > choose the
   GitHub repo you just created.
2. Build command: leave blank. Publish directory: `.` (the repo root).
   `netlify.toml` already has this configured, so Netlify should pick it
   up automatically.
3. Deploy. You'll get a `something.netlify.app` URL — confirm the page loads.
4. Site settings > Domain management > add your own custom domain if you
   have one (free on every Netlify plan).

## 3. Set up DecapBridge (the login for /admin)

1. Go to decapbridge.com and sign up as a site owner.
2. Connect the same GitHub repo.
3. DecapBridge will show you a `backend:` snippet with your repo name filled
   in. Copy it.
4. Open `admin/config.yml` in this repo and replace the placeholder
   `backend:` block at the top with the snippet DecapBridge gave you.
5. Commit and push that change (Netlify will auto-redeploy).

## 4. Edit the page

Visit `yoursite.netlify.app/admin`, log in through DecapBridge, and you'll
see a form for every section of the page — Nav, Hero, Trust Bar, Pain
Section, How It Works, Who It's For, Book Demo, Testimonials, FAQ, Final
CTA, Footer. Editing a field and clicking "Publish" commits the change to
GitHub, which triggers Netlify to rebuild the live site automatically —
usually live within a minute.

## What stays code-only

`css/site.css` (colors, layout, fonts) and `js/site.js` (how each section
is rendered) aren't exposed as CMS fields, the same as the HubSpot version.
That's intentional — it keeps the design consistent and stops an accidental
edit from breaking the layout. Ask if you'd like any specific style (e.g.
the gold accent color) exposed as an editable field too.
