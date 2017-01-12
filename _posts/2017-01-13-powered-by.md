---
layout: post
title: Powered by
---

This post is dedicated to the technologies and code that are powering up the site.  

The site is hosted on [GitHub Pages](https://pages.github.com/).  
GitHub Pages is designed to host a static site directly from a GitHub repository.  

[Jekyll](https://github.com/jekyll/jekyll), a Ruby gem, is the library that does all the magic, generating the static content pages and blogs posts.  
The two-columns responsive theme that is currently running is a customized version of the excellent [Hyde](https://github.com/poole/hyde) theme.  

Here's how you can easily get started:  

- Start a new repository on GitHub ([check how it should be named and branch details](https://help.github.com/articles/user-organization-and-project-pages/))
- Create a new RVM or rbenv environment using Ruby >=2.x.
- Init a new local git repository
- Start a new Gemfile including at least `github-pages` ([example](https://github.com/giannisp/giannisp.github.io/blob/master/Gemfile)).
- `gem install bundler`
- `bundle install`

Now you can select a preferred theme, like Hyde, and place it inside the repo.
GitHub Pages is currently using Jekyll 3.x, so you may need to customize the `_config.yml` for compatibility ([example](https://github.com/giannisp/giannisp.github.io/blob/master/_config.yml)).

Running and viewing the site locally:

- Do `jekyll serve`
- Visit http://localhost:4000 on your browser

After customizing the look and feel, and adding some content, you should be ready to publish it!  
Simply push to the appropriate branch on the remote GitHub repository.

You can also use a custom domain with GitHub Pages, which is really cool and [easy to accomplish](https://help.github.com/articles/using-a-custom-domain-with-github-pages/).

The full source code of this site is available at [giannisp/giannisp.github.io](https://github.com/giannisp/giannisp.github.io).
