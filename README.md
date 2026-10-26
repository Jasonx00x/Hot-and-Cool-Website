# Hot & Cool Services website

Production-ready public marketing site for Hot & Cool Services, built with Next.js 15, TypeScript, Tailwind CSS, and the App Router for Netlify.

## Local preview

1. Install dependencies: `npm install`
2. Copy `.env.example` to `.env.local` and add optional values.
3. Start the site: `npm run dev`
4. Open `http://localhost:3000`

For a production check, run `npm run build` followed by `npm start`.

## Content and images

Services, projects, blog posts, and service areas are stored in the `data/` directory. Cloudinary URLs are centralized in `data/site.ts`; replace the placeholder URLs there with the approved Hot & Cool Services assets.

## Forms

The request form uses Netlify Forms. `public/__forms.html` provides the static form skeleton required for Next.js detection. In Netlify, enable form detection before testing submissions. Local form posts are not expected to create Netlify submissions.

## Analytics

Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in Netlify environment variables to enable Google Analytics. The analytics component renders nothing when the variable is missing.

Conversion events are `phone_click` for a telephone link click and `generate_lead` only after a service-request POST succeeds. A telephone click does not establish that a call connected or became a qualified lead. Events contain the contact method, the form name where applicable, and the page pathname; they do not include contact details, form text, or URL queries. A failed or blocked analytics script must not interrupt the service request.

After adding the GA4 ID, check both events in DebugView/Realtime and mark `generate_lead` as a key event. Keep phone clicks separate from submitted enquiries. Evaluate lead quality and booked work using the actual service records. Do not treat GA4's automatic form interaction events as confirmed submissions.

### Search Console baseline, October 26, 2026

The uploaded web-search exports contain June 2–October 24, 2026: 26 clicks, 10,140 impressions, 0.256% CTR, and an impression-weighted average position of approximately 54.6. September 27–October 24 contains 8 clicks and 2,731 impressions. Query rows omit most clicks, so they cannot establish a complete branded/nonbranded split. Compare subsequent equal 28-day periods and prioritize US traffic to service and location pages, together with actual enquiries. Search Console's connected account currently reports `siteUnverifiedUser`; owner verification is required before using it for direct inspection and indexing requests.

## Netlify preview deployment

1. Connect the repository to Netlify.
2. Use build command `npm run build` and publish directory `.next` (also defined in `netlify.toml`).
3. Add environment variables in the Netlify UI; do not commit secrets.
4. Create a Deploy Preview and check every route, the mobile menu, form registration/submission, metadata, redirects, and Cloudinary assets.
5. Do not promote the deploy to production until the preview is approved.

The legacy WordPress article URLs and selected current paths redirect through `netlify.toml`.
