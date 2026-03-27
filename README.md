# ScrapeSafe Landing Page

Navigation app for slammed and stanced cars. Avoid scrapes, find safe routes, connect with the community.

## Files

- `index.html` - Main landing page
- `privacy.html` - Privacy policy page
- `car-illustration.png` - Slammed 350Z illustration
- `SETUP_GUIDE.md` - Supabase setup instructions

## Setup

### 1. Supabase Database

Run this SQL in your Supabase project:

```sql
CREATE TABLE waitlist_scrapesafe (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_waitlist_scrapesafe_email ON waitlist_scrapesafe(email);

ALTER TABLE waitlist_scrapesafe ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert" ON waitlist_scrapesafe
FOR INSERT
TO public
WITH CHECK (true);
```

### 2. Add Supabase Credentials

In `index.html`, replace these values (around line 520):

```javascript
const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';
```

Get these from: Supabase Project Settings → API

### 3. Deploy

#### Option A: GitHub Pages
1. Push to GitHub
2. Go to Settings → Pages
3. Source: Deploy from main branch
4. Your site will be live at `yourusername.github.io/repo-name`

#### Option B: Custom Domain
1. Add a `CNAME` file with your domain (e.g., `scrapesafe.app`)
2. Configure DNS to point to GitHub Pages
3. Enable HTTPS in GitHub Pages settings

## Features

- ✅ Waitlist signup (Supabase)
- ✅ No email confirmation needed
- ✅ Duplicate email protection
- ✅ Privacy policy page
- ✅ Mobile responsive
- ✅ Clean, editorial design

## Stack

- Vanilla HTML/CSS/JavaScript
- Supabase for database
- GitHub Pages for hosting

## License

© 2024 ScrapeSafe. Made for the low life.
