# TicoAutomate

Bilingual consulting and mentoring website.

- **/** — Services: automation and RPA, AI implementation, websites, integrations.
- **/learn** — Private online, one-to-one technical mentoring inquiries.
- **/learn?lang=es** and **/learn?lang=en** — Landing links for language-targeted ads.

## Business model

This project is now a **public marketing website only**. There is **no account registration, student portal, LMS, course enrollment, authentication, paid-content hosting, or online payments**.

Students contact us through the Learn inquiry form. Scheduling, meeting links (e.g., Microsoft Teams), materials, exercises, and payments are arranged directly by email, outside the website.

## Development

```sh
npm ci
npm run build
npm run dev
```

Stack: React, TypeScript, Vite, Tailwind CSS, deployed using Netlify. No Supabase credentials or environment variables are needed for the public site.

## Contact forms

Two forms are defined:
- `consultation` for services (static HTML definition in `index.html`)
- `mentoring-inquiry` for Learn (static HTML definition in `public/__forms.html`)

Both are submitted with URL-encoded POST requests to Netlify Forms. In the Netlify project dashboard, **enable Form detection**, redeploy, then submit a real test entry to verify it appears under Forms. Configure email notifications for each form. A successful build alone does not prove form submissions or notification email delivery.

Learn campaign source, medium and campaign parameters are sent as hidden fields, if present.

## Old site

The previous course and Supabase sources were intentionally removed from the active codebase. Git history may retain earlier versions; do not store private training documents or secrets in the public repository.
