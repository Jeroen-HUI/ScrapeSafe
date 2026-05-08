/**
 * Store URLs for the marketing site (edit before deploy).
 */
window.SCRAPESAFE_SITE = {
  appStoreUrl: "",
  // Add &pcampaignid=web_share when sharing from Play Console if you want campaign attribution.
  playStoreUrl:
    "https://play.google.com/store/apps/details?id=com.scrapesafe.app",
  supportEmail: "hello@scrapesafe.app",
  /** Supabase waitlist (leave empty to disable the form UI) */
  supabaseUrl: "https://axenorinmehkiuwifwly.supabase.co",
  supabaseAnonKey:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4ZW5vcmlubWVoa2l1d2lmd2x5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ1NDEzMDksImV4cCI6MjA5MDExNzMwOX0.4iHbBKtFlyzB7K1DPDsTunExMH2vkqC0QRBF9SJ5jvM",
  /** Must match a table with columns: name, email, created_at (optional) */
  waitlistTable: "waitlist_scrapesafe",
};
