---
template: 'post'
path: '/2019/08/30/migrating-from-jekyll-to-gatsby/'
title: 'Migrating from Jekyll to Gatsby'
date: '2019-08-30'
---

I have been following [Gatsby](https://gatsbyjs.org) for quite some time now, and I finally decided to give it a try on my personal website/blog! This post describes the journey of migrating from Jekyll to Gatsby.

## Why Gatsby

Gatsby is an awesome open source framework for building blazing fast static websites and apps. What I find most intriguing about Gatsby is that it is powered by technologies that I use on my everyday dev life: JS, React and GraphQL.

Gatsby is also backed by a vibrant community, providing open source plugins that aid on accomplishing common tasks in an easy manner.

## Migration planning

My plan for the Jekyll to Gatsby migration was pretty straight-forward, keep
the content markdown structure, as well as preserve the CSS layout.

Gatsby shines on both aspects:

- It fully supports automated markdown to HTML content format.
- It supports importing existing CSS files, and customizing components via CSS-in-JS.

Thus the main migration challenge was setting up Gatsby, and migrating the layout from the Jekyll template format to JSX.

Gatsby offers various project starter templates, and I have selected the most minimal one, which fits my principal of learning a new framework by building a new project from scratch.

My WordPress/Jekyll background has also driven me to separate content into two main categories, pages and blog posts, with different templates.

### Steps and resources for setting up Gatsby

Gatsby developers provide excellent [documentation](https://www.gatsbyjs.org/docs/) for getting started, so I am not going to list detailed steps for installing and using the gatsby-cli.

- Create a new Gatsby project using the [gatsby-starter-default](https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-default/) template.
- Setup `siteMetadata` and `gatsby-plugin-manifest` data on `gatsby-config`.
- Customize the React components to achieve the desired site layout.
- Setup [gatsby-source-filesystem](https://www.gatsbyjs.org/packages/gatsby-source-filesystem/) for markdown content.
- Setup page/post markdown meta. I am using the following variables: template (page or post), path, title, date (for posts only).
- Study documentation, [gatsby-starter-blog](https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/) and [gatsby-starter-lumen](https://www.gatsbyjs.org/starters/alxshelepenok/gatsby-starter-lumen/) starters on how to implement page/post templates, as well as posts pagination. Apply related concepts on `gatsby-node` file and create templates.
- Add custom 404 page.
- Setup HTML title, meta per content template, using `react-helmet`.
- Add `favicon.ico` on the `static` Gatsby folder.

### Essential Gatsby plugins

- [gatsby-plugin-feed](https://www.gatsbyjs.org/packages/gatsby-plugin-feed/): Add an RSS feed.
- [gatsby-plugin-sitemap](https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap/): Add an XML sitemap.
- [gatsby-plugin-google-analytics](https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/): Add Google Analytics support. Tracking code only runs in production mode, which is great as local development won't ruin stats.
- [gatsby-remark-external-links](https://www.gatsbyjs.org/packages/gatsby-remark-external-links/): Customize markdown links, allow opening the target url in a new window/tab.

### Optionally customize Prettier, ESLint, Babel configurations

Default configurations are pretty sane, but they can be customized to fit your personal preference.

- Prettier: Customize `.prettierrc` and `.prettierignore` files.
- ESLint: Use [gatsby-plugin-eslint](https://www.gatsbyjs.org/packages/gatsby-plugin-eslint/) and a custom `.eslintrc` to configure your ESLint setup. I prefer `eslint-config-airbnb` and a tight eslint/prettier configuration, failing compilation on errors.
- Babel: Add a custom `.babelrc` file that extends from [babel-preset-gatsby](https://www.npmjs.com/package/babel-preset-gatsby). For example you can add optional-chaining support or any other Babel plugin.

### Deploying to GitHub Pages using a custom domain

- Add the CNAME file both on repo root and on the `static` Gatsby folder so that it can get deployed to the special `gh-pages` branch.
- Install `gh-pages` from npm.
- Add a `deploy` command on `package.json` as follows:  
  `gatsby build && gh-pages -d public`
- Setup GitHub Pages on repository settings to be deploying from the `gh-pages` branch. Keep the `master` branch clean, for source code purposes only.
- `npm run deploy`

### Gatsby pitfalls

I didn't come across any major pitfall, other than the slight annoyance of sometimes having to clear the `.cache` folder and restart the development server.

### Conclusion

I really enjoyed the process of migrating to Gatsby. Step-by-step building the website from scratch, selecting the appropriate plugins, customizing code. Everything falling within the NodeJS and React ecosystem.  
Overall I would highly recommend Gatsby, and of course I am looking forward to using it again on new projects.  
Feel free to browse the updated [source code](https://github.com/giannisp/ioannispoulakas.com) and get inspired.
