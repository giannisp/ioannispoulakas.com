---
template: 'post'
path: '/2020/10/16/using-the-new-jsx-transform-with-latest-react/'
title: 'Using the new JSX transform with latest React'
date: '2020-10-16'
---

### New JSX transform

React has recently introduced the [new JSX transform](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html) version.

What's so cool about it?  
You can now use JSX on your components without importing React!

```
import React from 'react'; // no longer required!
```

Of course if you are using hooks, or other React features, you would still need to import those.

Also depending on the project, the compiled output bundle size might be reduced.

### Supported React versions

Initially the new JSX transform has been announced for the forthcoming React 17 version. However, in a surprisingly move, React team has backported the new JSX transform to React 16.14.0, 15.7.0, and 0.14.10 versions!

### Enable the new JSX tranform with babel/preset-react

The new JSX transform can be enabled on babel/preset-react (v7) by simply setting the `runtime` property to `automatic`:

```
{
  "presets": [
    [
      "@babel/preset-react",
      {
        "runtime": "automatic"
      }
    ]
  ]
}
```

### Enable the new JSX transform on Gatsby

Gatsby since version 2.24.5 does support the new JSX transform.  
It can be enabled via the custom Babel configuration file by setting the `reactRuntime` property to `automatic`:

```
{
  "presets": [
    [
      "babel-preset-gatsby",
      {
        "reactRuntime": "automatic",
      }
    ]
  ]
}
```

### Keeping ESLint happy

Good old ESLint will still complain if you try to use JSX on your components without importing React, so you would just have to turn off the following rule:

```
"react/react-in-jsx-scope": "off"
```
