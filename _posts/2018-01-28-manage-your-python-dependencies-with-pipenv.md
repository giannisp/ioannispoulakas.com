---
layout: post
title: How to manage your Python dependencies with Pipenv
---

Python developers rejoice!  
[Pipenv](http://pipenv.readthedocs.io/en/latest/) is a dependency manager for Python projects.  
It works similarly to other popular dependency managers, like npm for NodeJS, or bundler for Ruby.  
Pipenv combines and streamlines the use of `pip` and `virtualenv`.

### Getting started

Pipenv can be installed via pip:  
`pip install --user pipenv`  

If on macOS, I'd recommend installing Pipenv via brew:  
`brew install pipenv`

### Initialize a pipenv environment for any Python project

Initialize a Pipenv environment with Python 2.x:  
`pipenv --two`

Initialize a Pipenv environment with Python 3.x:  
`pipenv --three`  

Notice that a new file will be created named `Pipfile`.  
This file is similar to a `Gemfile` or `package.json` on Ruby and NodeJS respectively.
`Pipfile` lists all top level dependencies grouped into `packages` and `dev-packages`.

### Installing Python dependencies

Let's suppose that the popular library `requests` is a requirement.

Install the latest `requests` version:  
`pipenv install requests`

or install a specific `requests` version:  
`pipenv install requests==2.18.4`  

or install a package for dev purposes:  
`pipenv install nosetests --dev`

In all cases the `Pipfile` will get updated, with either a `*` version, or the specific requested version.  
In addition to the `Pipfile`, a new file named `Pipfile.lock` will be created.  
This file is similar to `Gemfile.lock` or `package-lock.json` on Ruby and NodeJS respectively.  
`Pipfile.lock` lists all top level dependencies as well as any sub-dependencies.  

It's very important to commit and keep both `Pipfile` and `Pipfile.lock` files under version control, as these will be used to re-create the virtualenv by fellow contributors or via a deployment script etc.

### Displaying Python dependencies

Apart from inspecting `Pipfile` and `Pipfile.lock` files, there is a handy Pipenv feature:  
`pipenv graph`  

### Running Python commands

The only downside of Pipenv, is that all Python commands need to be prefixed by `pipenv run`, for example:  
`pipenv run python --version`

or  
`pipenv run python app.py`

### Virtualenv shell shortcut

Pipenv has a nice little feature that spawns a bash shell within the virtualenv:  
`pipenv shell`

Running `python` on the spawned bash shell, will start a Python shell within the virtualenv.  
If for example `requests` package was installed, `import requests` will just work.  

### Uninstalling Python dependencies

Uninstall a specific package:  
`pipenv uninstall requests`

or uninstall all packages:  
`pipenv uninstall --all`

### Remove a Pipenv virtualenv

Clean up a virtualenv:  
`pipenv --rm`

### Re-create a Pipenv virtualenv from Pipfile/Pipfile.lock

Create a Pipenv virtualenv and install all dependencies is as simple as:  
`pipenv install`

### Is pyenv still relevant?

Pipenv is just a dependency manager, `pyenv` is still relevant for managing different Python versions.  
Moreover Pipenv supports installing Python versions with `pyenv` when needed.

### Conclusion

Pipenv is a great tool, something that was really missing from the Python ecosystem. I am already using it in production, and I highly recommend it.
