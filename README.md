# ScrapeSafe marketing site

Premium, static-first landing for [scrapesafe.app](https://scrapesafe.app), aligned with the ScrapeSafe mobile app (dark UI, neon accent).

## Files

| Path | Purpose |
|------|---------|
| `index.html` | Home: hero, carousel, business, features, community, safety, FAQ, **waitlist**, download |
| `css/site.css` | Design tokens, layout, components |
| `js/site-config.js` | Store URLs, support email, **optional Supabase keys** for waitlist |
| `js/main.js` | Play store buttons, carousel, mailto |
| `js/waitlist.js` | Waitlist form → Supabase insert |
| `privacy.html` | Privacy policy (URL preserved for the app) |
| `terms.html` | Terms of service |
| `web/auth-bridge.html` | App open bridge (unchanged) |
| `CNAME` | Custom domain |
| `screens/` | Screenshot exports (see `screens/README.md`) |
| `og-image.png` | Add at repo root for social cards (optional until added) |

## Deploy

**GitHub Pages** (or any static host): push the repo root; ensure `CNAME` points your domain. HTTPS as usual.

## Configure store links

Edit `js/site-config.js`:

```js
window.SCRAPESAFE_SITE = {
  appStoreUrl: "https://apps.apple.com/...",
  playStoreUrl: "https://play.google.com/store/apps/details?id=...",
  supportEmail: "hello@scrapesafe.app",
};
```

Empty strings show in-page hints and keep buttons anchored to `#download` until you fill in URLs.

## Waitlist (Supabase)

The homepage includes a **Waitlist** section that inserts into Supabase when configured.

1. In the Supabase SQL editor, create the table (name must match `waitlistTable` in config, default `waitlist_scrapesafe`):

```sql
CREATE TABLE waitlist_scrapesafe (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_waitlist_scrapesafe_email ON waitlist_scrapesafe(email);

ALTER TABLE waitlist_scrapesafe ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert" ON waitlist_scrapesafe
  FOR INSERT TO public WITH CHECK (true);
```

2. In `js/site-config.js`, set **anon** credentials (safe for public pages with RLS like above):

```js
  supabaseUrl: "https://YOUR_PROJECT.supabase.co",
  supabaseAnonKey: "YOUR_ANON_KEY",
  waitlistTable: "waitlist_scrapesafe",
```

Leave `supabaseUrl` and `supabaseAnonKey` empty to disable the form (the button stays off and a short setup note appears).

The page loads [`@supabase/supabase-js`](https://cdn.jsdelivr.net/npm/@supabase/supabase-js) from jsDelivr.

## License

© 2026 ScrapeSafe.
