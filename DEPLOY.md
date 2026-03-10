# Deployment Plan — victorthuo.com

## Overview
Push this Astro site to GitHub, connect to Cloudflare Pages, and configure the custom domain.
Domain transfer from Wix to Cloudflare is COMPLETE. Domain is fully on Cloudflare Registrar with DNS active.

---

## Step 1: Verify the build works locally

```bash
cd ~/Downloads/Portfolio/victorthuo
rm -rf node_modules package-lock.json
npm install
npm run build
```

The build output goes to `dist/`. Fix any errors before proceeding.
If the dev server (`npm run dev`) is already running clean, the build should work too.

---

## Step 2: Initialize git and push to GitHub

```bash
cd ~/Downloads/Portfolio/victorthuo
git init
git add .
git commit -m "Initial commit: victorthuo.com portfolio site"
```

Create the GitHub repo and push:

```bash
gh repo create victorthuo.com --public --source=. --remote=origin --push
```

If `gh` CLI isn't authenticated, the user can create the repo manually on github.com and then:

```bash
git remote add origin https://github.com/victorthuo/victorthuo.com.git
git branch -M main
git push -u origin main
```

---

## Step 3: Connect to Cloudflare Pages

This must be done in the Cloudflare dashboard (not via CLI):

1. Go to https://dash.cloudflare.com → Workers & Pages → Create → Pages → Connect to Git
2. Select the `victorthuo.com` repository
3. Configure build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node.js version:** Add environment variable `NODE_VERSION` = `20`
4. Click "Save and Deploy"
5. Wait for the first build to complete — Cloudflare will assign a `*.pages.dev` URL

---

## Step 4: Configure custom domain

1. In Cloudflare Pages project settings → Custom domains
2. Add `victorthuo.com`
3. Add `www.victorthuo.com` (redirects to apex)
4. Cloudflare auto-provisions SSL and configures DNS records since the domain is already on Cloudflare DNS

---

## Step 5: Verify everything works

- [ ] Visit https://victorthuo.com — site loads with SSL
- [ ] Visit https://www.victorthuo.com — redirects to apex
- [ ] Check all pages: /, /work, /perspectives, /photography, /about, /now
- [ ] Check a case study: /work/gen-ai-platform
- [ ] Check an article: /perspectives/apples-liquid-glass
- [ ] Verify /robots.txt and /llms.txt are accessible
- [ ] Verify /sitemap-index.xml is generated
- [ ] Test dark mode toggle if implemented
- [ ] Test on mobile

---

## Step 6: Post-deploy

- [ ] Submit sitemap to Google Search Console (https://search.google.com/search-console)
  - Add property for victorthuo.com
  - Verify via DNS (Cloudflare makes this easy)
  - Submit sitemap URL: https://victorthuo.com/sitemap-index.xml
- [ ] Cancel Wix subscription (once site is confirmed live and working)
- [ ] Enable auto-renew on Cloudflare domain registration

---

## Key details

| Setting | Value |
|---------|-------|
| Framework | Astro 5.7 |
| Build command | `npm run build` |
| Output directory | `dist` |
| Node version | 20 |
| Site URL in config | `https://victorthuo.com` |
| DNS | Cloudflare (konnor.ns.cloudflare.com / mira.ns.cloudflare.com) |
| Domain transfer | ✅ Complete — fully on Cloudflare Registrar |
