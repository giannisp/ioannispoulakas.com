---
layout: post
title: My Visual Studio Code setup
---

A few months ago I have been blogging about [My Atom setup](/2017/01/15/my-atom-setup/).  
I have always kept an eye on the progress of [Visual Studio Code](https://code.visualstudio.com/) though, having it installed, checking new features and extensions.  

Last month, after quite some dissapointments with Atom (like broken expand/collapse, split screen issues due to minimap), I decided to give VS Code a better chance, and code with it on my current projects.  

During the first couple of days I had to get used to doing some things differently (like search results on the sidebar), customize user preferences here and there, as well as find suitable extensions.  

Well, I got to admit that the result was totally worth the effort, as I have been feeling a lot more productive while coding on VS Code. And it's not just the blazing fast performance of the editor, there are little features everywhere that contribute to the overall great experience. I will try to list as many of them as I can think of.

Here is my VS Code setup:

## Theme

Color Theme: [One Dark Pro](https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme)  
File Icon Theme: [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)

## Keyboard Shortcuts

I am using the official [Atom Keymap extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode.atom-keybindings).  
VS Code team has done a great job providing extensions for both Atom and Sublime so that developers can get productive without having to learn yet another new set of shortcuts.

## Packages

### The Essential

[EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

Editorconfig helps developers to maintain consistent coding styles between different editors and platforms.

[Open in GitHub](https://marketplace.visualstudio.com/items?itemName=sysoev.vscode-open-in-github)

Provides commands to quickly open the current file on GitHub (History / Blame / File views).  
You may also want to check [Git Lens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) for in-editor views.

[Docker](https://marketplace.visualstudio.com/items?itemName=PeterJausovec.vscode-docker)

Everything you need if you are working with Docker on your repos.

### JavaScript

[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

Integrates [ESLint](https://eslint.org/) into VS Code.

[jshint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.jshint)

Integrates [JSHint](http://jshint.com/) into VS Code.

[Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)

Debug your JS code in the Google Chrome browser, using breakpoints, watches and more.

[Document This](https://marketplace.visualstudio.com/items?itemName=joelday.docthis)  

An extension that helps you autogenerate and write JS code documentation.  

### Python

[Python](https://marketplace.visualstudio.com/items?itemName=donjayamanne.python)

An awesome Python extension providing linting (using Pylint, pep8 or other linters), intellisense, debugging support and more.  

### Ruby

[Ruby](https://marketplace.visualstudio.com/items?itemName=rebornix.Ruby)

A Ruby extension that provides linting, debugging support and more.

### CSS

[StyleLint](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint)  

Lint CSS files using [stylelint](https://stylelint.io/).

### Other

[Sort lines](https://marketplace.visualstudio.com/items?itemName=Tyriar.sort-lines)

A simple extension for sorting lines with multiple options.

### Settings (User Preferences)

Initially I was thinking about listing my own settings, however since they are highly opinionated, I will advise you to go through preferences/settings and customize them according to your needs. They are intuitively separated into sections, there is documentation and a quick search.

## Things I love on VS Code

- It's fast, amazingly fast! Scrolling through code, typing, intellisense, quick looking for files, expanding/collapsing code, file explorer actions. There isn't a single task that makes it feel slow (even though it's an Electron app, ie not native).  
- Search is also fast, you just need to configure it to exclude git ignored files.
- It remembers everything while restarting the editor. Opened files, collapsed sections, even search excluded paths.
- As you have noticed, I didn't have to install a large number of extensions to get basic support for preferred languages.
- I don't need a mini-map, there's the default Enhanced Scrollbar that's marking code changes, search result occurrences, cursor position, errors. The Enhanced Scrollbar has an absolute height, so that means on long files you don't have to scroll down to figure out if there are marked search results.
- Markdown support is included. Markdown Preview (side-by-side or different tab). While on side-by-side preview mode, editor/preview panes are autoscrolling to reveal the selected content on either one of them!
- Enabling/disabling extensions per workspace.
- JavaScript jump to definition, smart intellisense based on actual code, path autocomplete on requires.
- Built-in JSON file lint support.

## VS Code has something for everyone

If you enjoy using an integrated terminal or source control within your editor, VS Code does that. I prefer to keep the best apps for each task, so for example I am working with [iTerm2](https://www.iterm2.com/) and [GitHub Desktop](https://desktop.github.com/).

Apart from the JS, Python, Ruby related extensions that I have listed, there is also support for Java, PHP and other programming languages.  

And similarly to Atom, you can find almost every extension you may need on the [Marketplace](https://marketplace.visualstudio.com/). 


