# ClearIt Landing Page Setup Guide

## What You'll Need
1. Supabase account (free tier works)
2. Resend account (free tier works)

## Step 1: Supabase Setup

1. Go to https://supabase.com and create a free account
2. Create a new project
3. Once created, go to the SQL Editor in the left sidebar
4. Run this SQL to create your waitlist table:

```sql
CREATE TABLE waitlist (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on email for faster lookups
CREATE INDEX idx_waitlist_email ON waitlist(email);
```

5. Go to Settings > API in your Supabase dashboard
6. Copy your Project URL and anon/public key

## Step 2: Resend Setup

1. Go to https://resend.com and sign up
2. Verify your email
3. Add and verify your domain (or use their test domain for development)
4. Go to API Keys and create a new API key
5. Copy the API key (it starts with "re_")

## Step 3: Configure the Landing Page

Open `landing-page.html` and replace these three values around line 365:

```javascript
const SUPABASE_URL = 'YOUR_SUPABASE_URL';  // From Supabase Settings > API
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';  // From Supabase Settings > API
const RESEND_API_KEY = 'YOUR_RESEND_API_KEY';  // From Resend dashboard
```

Also update the email sender around line 415:
```javascript
from: 'ClearIt <onboarding@yourdomain.com>'  // Use your verified domain
```

## Step 4: Row Level Security (Important!)

By default, Supabase has RLS enabled. You need to create a policy to allow insertions:

1. Go to Authentication > Policies in Supabase
2. Click "New Policy" on the waitlist table
3. Choose "Enable insert access for all users"
4. Or use this custom policy:

```sql
CREATE POLICY "Allow public insert" ON waitlist
FOR INSERT
TO public
WITH CHECK (true);

CREATE POLICY "Allow public read" ON waitlist
FOR SELECT
TO public
USING (true);
```

## Step 5: Test It!

1. Open the HTML file in your browser
2. Enter a name and email
3. Click "Join Waitlist"
4. Check your email for the confirmation
5. Check your Supabase table to see the entry

## Viewing Your Waitlist

You can view all signups in Supabase:
1. Go to Table Editor
2. Click on "waitlist" table
3. See all entries with names, emails, and timestamps

## Customization Ideas

- Change the app name from "ClearIt" to something else
- Modify the color scheme (search for #0066ff)
- Update the email template with your branding
- Add more fields to collect (car model, ride height, etc.)

## Troubleshooting

**"Already on the waitlist" error**: Email addresses are unique, so duplicate signups are blocked

**Email not sending**: Make sure you've verified your domain in Resend or are using their test domain

**Supabase errors**: Check that RLS policies are set up correctly

**CORS issues**: If testing locally, you may need to serve the file through a local server instead of opening directly

## Production Deployment

When you're ready to go live:
1. Consider using Supabase Edge Functions to hide your Resend API key (more secure)
2. Add Google Analytics or Plausible for tracking
3. Set up a custom domain
4. Add SSL certificate
5. Consider rate limiting on the backend

## Security Note

The current setup exposes your Resend API key in the frontend code. For production, you should:
1. Create a Supabase Edge Function
2. Move the Resend API call to the backend
3. Call the Edge Function from your frontend instead

Example Edge Function structure:
```
supabase/functions/send-confirmation/index.ts
```

Let me know if you need help setting that up!
