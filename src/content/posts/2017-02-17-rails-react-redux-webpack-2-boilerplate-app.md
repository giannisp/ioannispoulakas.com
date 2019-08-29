---
template: 'post'
path: '/2017/02/17/rails-react-redux-webpack-2-boilerplate-app/'
title: 'Ruby on Rails, React, Redux, Webpack 2 boilerplate app'
date: '2017-02-17'
---

> GitHub repo: <a href="https://github.com/giannisp/rails-react-boilerplate">giannisp/rails-react-boilerplate</a>

This is a pure [Ruby on Rails](http://rubyonrails.org/) / [React](https://facebook.github.io/react/) / [Redux](https://github.com/reactjs/redux) / [Webpack 2](https://webpack.github.io/) boilerplate app that I have built and open-sourced. Highlights include using the newly released Webpack 2, as well as making the frontend part independent of the Asset Pipeline.

## Features

- Ruby on Rails 5.x
- React 15.4.x
- Webpack 2.x
- Babel 6.x
- ESLint support
- SASS and StyleLint support
- Hashed filenames for production assets
- Separate app and vendor JS bundles
- Postgres compatibility
- Using Rails default gems and NPM packages only

## Exit Asset Pipeline, Enter Webpack

Why Webpack?

Webpack is a module bundler. It can bundle all JS files for usage in the browser, but can also transform / bundle / package any resource or frontend asset.

JavaScript community moves forward at a rapid pace, new frameworks and modules are being released every day. The [NPM](https://www.npmjs.com/) ecosystem is huge, and Webpack makes it available in the simplest way possible.

Webpack can support every modern JS app, using ES6 or CommonJS modules, or both, create a single or multiple bundles, and in general can be customized to accomplish any application requirement.

The frontend assets on this app are placed on a more accessible directory, at `/front/js` and `front/css`, rather than `app/assets/javascripts` and `app/assets/stylesheets`.

At any point, migration to a different backend (for example NodeJS) can be seamless since Webpack is running as a stand-alone bundler. There's absolutely no dependence to the Asset Pipeline or any other framework-specific module.
