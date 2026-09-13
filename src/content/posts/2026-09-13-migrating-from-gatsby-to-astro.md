---
template: 'post'
path: '/2026/09/13/migrating-from-gatsby-to-astro/'
title: 'Migrating from Gatsby to Astro'
date: '2026-09-13'
---

Back in 2019 I [migrated this website from Jekyll to Gatsby](/2019/08/30/migrating-from-jekyll-to-gatsby/).

Seven years later, this website is now powered by [Astro](https://astro.build). This post describes why, and how it went.

## Why leave Gatsby

Netlify acquired Gatsby in 2023, and most of the core team moved on shortly after. Gatsby still ships compatibility releases, but no new features are planned, and most of the plugin ecosystem hasn't been updated in years.

Nothing was broken. But every dependency update felt like maintaining something that nobody else was maintaining anymore.

## What this website actually needs

Looking at the codebase with fresh eyes, the list is short:

- Markdown pages and posts.
- A layout with a sidebar.
- Posts pagination.
- An RSS feed and an XML sitemap.
- A custom 404 page.
- Deploying to GitHub Pages.

No database, no user input, nothing interactive.

Yet the Gatsby version was running GraphQL queries at build time, and shipping React and a client-side router to every visitor, just to render static text. None of it was wrong in 2019, but today Astro can do the same with a lot less.

## Why Astro

Astro is built for exactly this kind of website: content first, static output, and zero JavaScript sent to the browser by default. Components are written as `.astro` files, which look a lot like JSX but only run at build time.

There is still an option to add React (or other UI frameworks) on a single interactive component if needed, while the rest of the website stays pure HTML and CSS.

## Migration planning

Same plan as last time: keep the markdown content as is, preserve the layout, and keep every existing URL, so that search rankings and RSS subscriptions remain unaffected.

One difference though. Last time, plugins were carefully picked one by one. This time, the goal was to stick with Astro defaults as much as possible, and only add something if the website would otherwise look or behave differently.

### Gatsby to Astro mapping

- `gatsby-source-filesystem` + `gatsby-transformer-remark` + GraphQL: Astro [content collections](https://docs.astro.build/en/guides/content-collections/).
- `gatsby-node` page creation: a single `[...slug].astro` route, built from the `path` frontmatter of each page and post.
- Posts archive pagination: `index.astro` and `page/[page].astro`.
- `gatsby-plugin-feed`: [@astrojs/rss](https://docs.astro.build/en/recipes/rss/).
- `gatsby-plugin-sitemap`: [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/).
- `gatsby-plugin-manifest`: a static `manifest.webmanifest` and icons in the `public` folder.
- `react-fontawesome`: Font Awesome SVG paths rendered inline, no React needed.
- `static` folder: renamed to `public`.

### Tailwind 3 to 4

In the process, Tailwind was also upgraded from version 3 to 4, which moved the theme configuration into CSS and removed the need for PostCSS and `tailwind.config.js`.

With Tailwind 3, the theme was defined in JavaScript:

```js
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,md}'],
  theme: {
    extend: {
      colors: {
        'theme-blue': '#2574a9',
        'typography-red': '#bf616a',
      },
      spacing: {
        84: '21rem',
        88: '22rem',
        92: '23rem',
      },
    },
    fontFamily: {
      title: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      body: ['"PT Sans"', 'Helvetica', 'Arial', 'sans-serif'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
```

With Tailwind 4, the same theme lives in the main CSS file:

```css
/* global.css */
@import 'tailwindcss';
@plugin '@tailwindcss/typography';

@theme {
  --color-theme-blue: #2574a9;
  --color-typography-red: #bf616a;

  --font-title: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  --font-body: 'PT Sans', Helvetica, Arial, sans-serif;
}
```

Classes like `bg-theme-blue` and `font-body` work exactly as before. The custom spacing values are gone too, since Tailwind 4 supports any spacing number out of the box, e.g. `w-92`. There is no need to list content files either, Tailwind 4 detects them automatically.

Tailwind 3 also ran as a PostCSS plugin, which required `postcss.config.js`, `gatsby-plugin-postcss`, `postcss` and `autoprefixer`. Tailwind 4 comes with its own engine and plugs directly into Vite, the build tool behind Astro:

```js
// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
```

### Before and after

|                                 | Gatsby  | Astro |
| ------------------------------- | ------- | ----- |
| Packages in `package-lock.json` | 1,709   | 563   |
| Direct dependencies             | 35      | 17    |
| JavaScript on the home page     | ~207 KB | 0     |
| Production build (clean)        | ~16.7s  | ~1.8s |
| Dev server ready                | ~6.5s   | ~1.7s |

The website looks the same, the URLs are the same, and the RSS feed is the same. It just depends on a lot less, and the whole feedback loop is faster: a production build now takes under 2 seconds, and the dev server is ready almost instantly.

## Good to know

A couple of small things I came across along the way:

- **GitHub Pages and Jekyll.** Astro outputs its CSS in an `_astro` folder, and GitHub Pages ignores folders starting with an underscore, unless Jekyll processing is disabled. The deploy command needs the `--nojekyll` flag:

  ```bash
  astro build && gh-pages -d dist --nojekyll
  ```

- **The sitemap only exists after a build.** Visiting `/sitemap-index.xml` on `astro dev` returns a 404, use `astro build && astro preview` instead.

## How this was done

I did this migration together with an AI coding agent, in a single afternoon. It went through the Gatsby codebase, proposed a plan, did the migration, and compared screenshots of the old and new builds side by side to make sure nothing changed visually. My part was mostly making decisions and reviewing.

For a small website like this one, it turned a "someday" project into an afternoon.

## Conclusion

The migration was smooth, and the result is a simpler and faster website that is easier to maintain. Astro has been a pleasure to work with, and I am looking forward to building more with it.

Feel free to browse the updated [source code](https://github.com/giannisp/ioannispoulakas.com).
