---
template: 'post'
path: '/2019/12/26/manage-your-python-dependencies-with-poetry/'
title: 'How to manage your Python dependencies with Poetry'
date: '2019-12-26'
---

In the recent past I was excited blogging about [Pipenv](/2018/01/28/manage-your-python-dependencies-with-pipenv/).  
Today I decided to try out [Poetry](https://python-poetry.org/) since it reached version 1.0 this month and there is a lot of hype around it.

Poetry is a tool for managing Python dependencies as well as virtual environments.

### Getting started

Poetry can be installed by running:

```
curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py | python
```

Installation will add Poetry on the home directory and make it automatically available on bash:

```
export PATH="$HOME/.poetry/bin:$PATH"
```

### Installing Python dependencies

Poetry is using the standardized file format [pyproject.toml](https://www.python.org/dev/peps/pep-0518/).  
The `pyproject.toml` file can be created by simply running `poetry init` and following the on-screen instructions.

With the `pyproject.toml` file in place, let's try to install the popular library `requests`:

```
poetry add requests
```

Poetry will automagically:

- Create a new virtualenv if it doesn't already exist
- Install `requests` on the virtualenv
- Update `pyproject.toml` with the `requests` entry
- Create or update `poetry.lock` that holds the dependency tree.

Note: make sure both `pyproject.toml` and `poetry.lock` are under version control.

Dev dependencies can be installed by using the `--dev` flag, for example:

```
poetry add nose --dev
```

### Uninstalling Python dependencies

Poetry can uninstall a dependency by running:

```
poetry remove requests
```

### Running commands on the virtualenv

Any command can be run on the created virtualenv by using `poetry run`, for example:

```
poetry run python --version
```

Alternatively a shell can be spawned by running `poetry shell` to avoid prefixing every command.

### Managing Python virtual environments for a project

Let's suppose that a project has to be run specifically on Python version 3.7.5.
Poetry can make use of pyenv environments or even python executables that are available on the path.

Using `pyenv` to get Python 3.7.5:

```
pyenv install 3.7.5
pyenv local 3.7.5
```

Update Python version at `pyproject.toml`:

```
[tool.poetry.dependencies]
python = "^3.7.5"
```

Re-install dependencies for Python 3.7.5:

```
poetry install
```

List all existing virtual environments for a project:

```
poetry env list
```

Switch a virtual environment:

```
poetry env use <env-name>
```

Remove a virtual environment:

```
poetry env remove <env-name>
```

### Other useful Poetry functionalities

Poetry can `build` and `publish` packages using the respective commands, something that is missing from Pipenv.  
Poetry lock file can be exported to other formats like `requirements.txt` by using the `export` command.  
Poetry can display package info by using the `search` command.

### Docker

Deploying dependencies on Docker containers should not require installing them under a virtualenv.  
Poetry is providing a handy command for disabling the default behaviour:

```
RUN poetry config virtualenvs.create false \
  && poetry install --no-dev --no-interaction --no-ansi
```

### Conclusion

Poetry is an awesome tool, it builds upon previous Pipenv features while at the same time is simplifying the virtual environments handling. Since version 1.0 is out it can be considered pretty stable and ready for production.
