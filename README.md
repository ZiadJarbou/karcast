# KarCast Marketing Website

This repository contains the KarCast marketing website: a bilingual English/Arabic static site with a lightweight Node contact endpoint.

## Local Preview

```bash
npm run dev
```

The site runs at `http://localhost:4173` by default.

## Production Build

```bash
npm run build
```

The build copies the website into `dist/`. Serve `dist/` as static files and route `POST /api/contact` to `server/index.mjs` or an equivalent serverless function.

## Configuration

Editable launch values live in [public/config.js](D:/karcast/public/config.js). Update:

- Website URL.
- Monthly price and currency.
- Google Play listing URL.
- Responsyve URL.
- Contact addresses.
- Mailbox readiness.
- Product screenshots and demo video paths.
- Verified compatibility details.
- Legal readiness.

Copy [.env.example](D:/karcast/.env.example) to `.env` or configure the same variables in your deployment environment. Do not expose email secrets in browser code.

## Contact Form Email

The endpoint validates input server-side, limits message length, uses a honeypot field, applies basic IP rate limiting, restricts routing to configured KarCast recipient categories, and only reports success when the email provider accepts the message.

Current provider integration: Resend API.

Required environment variables:

- `EMAIL_API_KEY`
- `EMAIL_FROM`
- `ALLOWED_ORIGINS`

Until those are configured, the form returns a clear failure and the page provides direct email links instead.

## Launch Checklist

- Provision `info@karcast.app`, `support@karcast.app`, and `feedback@karcast.app`.
- Configure a verified email sender/domain and set the email environment variables.
- Add the real Google Play listing URL in `public/config.js`.
- Generate and add the QR code only after the real Google Play URL exists.
- Replace illustrative visuals with real KarCast screenshots and a real demo video.
- Add tested compatibility details for supported phones, Android versions, cars, and browsers.
- Replace legal placeholders with verified Privacy Policy and Terms of Use.
- Confirm production canonical URL, sitemap, and robots behavior for the final hosting environment.
