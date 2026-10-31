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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Project images

Edit `constant/card.ts` to manage portfolio projects. Add files under `public/projects/` and use an `images` array; its order is the gallery order. Each image needs descriptive alternative text:

```ts
images: [
  { src: '/projects/my-project-overview.png', alt: 'Dashboard overview' },
  { src: '/projects/my-project-details.png', alt: 'Account details screen' },
],
```

Imported assets also work as `src`. The first image is the cover. Existing `image` fields still work as a single-image fallback. Projects with a `video` retain the video player and can switch to screenshots. Multiple images expose thumbnails, previous/next controls, and arrow-key navigation when the gallery is focused. This is a code-managed portfolio; adding images is done in the project data, not through a public upload form.
