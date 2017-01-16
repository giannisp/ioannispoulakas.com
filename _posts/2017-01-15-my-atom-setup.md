---
layout: post
title: My Atom setup
---

I have switched to using [Atom](https://atom.io/) as my main code editor about 2 years ago and never looked back. Atom is open source, cross-platform - built on top of Electron, and can be highly customized.  

Here is my Atom setup:

## Theme

UI Theme: One Dark  
Syntax Theme: One Dark

This is the default theme on fresh Atom installations.  
In the past I have been using Atom Dark, and it was quite hard to get used to something new, however One Dark is a lot more pleasing to the eye.

## Packages

### The Essential

[editorconfig](https://atom.io/packages/editorconfig)  
`apm install editorconfig`

Editorconfig helps developers to maintain consistent coding styles between different editors and platforms. You can also generate a new .editorconfig file using the Command Palette.  
Hint: Disable Atom's default "whitespace" package to avoid possible conflicts.

[docblockr](https://atom.io/packages/docblockr)  
`apm install docblockr`

A powerful package that helps you writing code documentation.  
It can generate complete doc blocks, and makes it extremely fast to tab your way through filling-in the variable types and descriptions.  
Hint: make sure you check the Settings as it provides some neat customization options.

[highlight-selected](https://atom.io/packages/highlight-selected)  
`apm install highlight-selected`

Highlight the current selected word occurrences. Extremely useful for quickly checking variables, functions etc.

[file-icons](https://atom.io/packages/file-icons)  
`apm install file-icons`

Display file type specific icons everywhere (treeview, tabs, finder etc).  
Makes it a lot easier to quickly identifying opened files.

### Linter and related plugins

[linter](https://atom.io/packages/linter)  
`apm install linter`  

Linter is the base package that provides linting functionality for various file types via plugins. Should be the developer's first choice.

[linter-eslint](https://atom.io/packages/linter-eslint)  
`apm install linter-eslint`

Lint JavaScript using [eslint](http://eslint.org/)  
My favorite JS linter at the moment for NodeJS and React projects.  
Hint: Check "Disable when no ESLint config file is found" on Settings.

[linter-jshint](https://atom.io/packages/linter-jshint)  
`apm install linter-jshint`

Lint Javascript using [JSHint](http://jshint.com/)  
Still need it for some older projects that were setup with it.  
Hint: Check "Disable when no jshintrc file in path" on Settings.

[linter-jsonlint](https://atom.io/packages/linter-jsonlint)  
`apm install linter-jsonlint`

Lint JSON files using [jsonlint](https://github.com/zaach/jsonlint).

[linter-php](https://atom.io/packages/linter-php)  
`apm install linter-php`

Lint PHP files using the php binary.

[linter-pylint](https://atom.io/packages/linter-pylint)  
`apm install linter-pylint`

Lint Python files using [pylint](https://www.pylint.org/).

[linter-ruby](https://atom.io/packages/linter-ruby)  
`apm install linter-ruby`

Lint Ruby files using ruby binary.

[linter-xmllint](https://atom.io/packages/linter-xmllint)  
`apm install linter-xmllint`

Lint XML files using [xmllint](http://xmlsoft.org/xmllint.html).

### Minimap and related plugins

[minimap](https://atom.io/packages/minimap)  
`apm install minimap`  

Minimap provides a mini-preview of the full source code on every tab, and comes with a variety of useful plugins.

[minimap-cursorline](https://atom.io/packages/minimap-cursorline)  
`apm install minimap-cursorline`  

Display the location of the cursor position.  
Hint: you can customize the color via your stylesheet.

[minimap-find-and-replace](https://atom.io/packages/minimap-find-and-replace)  
`apm install minimap-find-and-replace`

Display the search matches.

[minimap-git-diff](https://atom.io/packages/minimap-git-diff)  
`apm install minimap-git-diff`

Display git diffs, possibly one of the most useful plugins along with the next one.

[minimap-highlight-selected](https://atom.io/packages/minimap-highlight-selected)  
`apm install minimap-highlight-selected`

Display the current selected word occurrences.

### For JavaScript development

[js-hyperclick](https://atom.io/packages/js-hyperclick)  
`apm install hyperclick js-hyperclick`

It lets you jump to where variables are defined, or even required files.  
Hint: there are plugins for other languages based on the hyperclick base package.

[autocomplete-paths](https://atom.io/packages/autocomplete-paths)
`apm install autocomplete-paths`

Provides autocomplete functionality for relative paths and files. Not just for JS of course, but extremely useful on your imports/requires.

### Tools

[atom-beautify](https://atom.io/packages/atom-beautify)
`apm install atom-beautify`

It can beautify a great variety of files, however I mainly use it to prettify JSON files.

[sort-lines](https://atom.io/packages/sort-lines)  
`apm install sort-lines`

Sort selected lines, or get unique lines. Nice to have.

### Other syntax support

[atom-jade](https://atom.io/packages/atom-jade)  
`apm install atom-jade`

Adds [Jade](https://pugjs.org/api/getting-started.html) template language support.

## Competition (VS Code)

You might be wondering why Atom and not [VS Code](https://code.visualstudio.com/). Especially when VS Code seems a lot faster (have you checked memory consumption though?).

Well at least for my needs, the above packages make me more productive. Some of them are not available on VS Code at all yet, or their respective ones are just not that powerful.

VS Code has some really cool features, like JS debugging with breakpoints that I am using sometimes. The integrated git and terminal support may also appeal a lot users, however I prefer to be using specific apps (like iTerm 2 and GitHub Desktop or SourceTree) that just do a lot more.
