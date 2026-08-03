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

## Netlify preview deployment

1. Connect the repository to Netlify.
2. Use build command `npm run build` and publish directory `.next` (also defined in `netlify.toml`).
3. Add environment variables in the Netlify UI; do not commit secrets.
4. Create a Deploy Preview and check every route, the mobile menu, form registration/submission, metadata, redirects, and Cloudinary assets.
5. Do not promote the deploy to production until the preview is approved.

The legacy WordPress article URLs and selected current paths redirect through `netlify.toml`.
