This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Environment Variables

Create a `.env.local` at the repo root with the following keys:

| Variable | Purpose | Required |
| --- | --- | --- |
| `NEXT_PUBLIC_GOOGLE_ANALYTICS` | Google Analytics measurement id. | No |
| `NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID` | Google AdSense client id. | No |
| `GOOGLE_GEMINI_API_KEY` | Server-only API key used by the Article AI Toolkit (`/api/ai`). The toolkit calls the `gemini-flash-latest` alias, which currently resolves to Google's newest free-tier Flash model. Get a free key at [Google AI Studio](https://aistudio.google.com/app/apikey). | Yes for the AI toolkit |

### Deploying to AWS Amplify

Amplify only exposes environment variables at build time by default, so Next.js Route Handlers and Server Components cannot read `process.env.GOOGLE_GEMINI_API_KEY` at runtime unless it is written to `.env.production` during the build. The included [`amplify.yml`](amplify.yml) handles this automatically:

```yaml
build:
  commands:
    - env | grep -e GOOGLE_GEMINI_API_KEY >> .env.production
    - npm run build
```

Add the variable in **App settings → Environment variables** for the production branch and redeploy after saving. Do **not** prefix the key with `NEXT_PUBLIC_` — it must stay server-only.

[http://localhost:3000/api/hello](http://localhost:3000/api/hello) is an endpoint that uses [Route Handlers](https://beta.nextjs.org/docs/routing/route-handlers). This endpoint can be edited in `app/api/hello/route.ts`.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
