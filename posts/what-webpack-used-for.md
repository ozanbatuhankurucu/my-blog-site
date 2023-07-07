---
title: 'What is Webpack used for and what are the benefits of bundling?'
date: '2021-12-20'
img: '/images/webpackusedfor.png'
category: 'JavaScript'
---

Webpack is a module bundler. Its task is to take all our different files (JS, CSS, JSX, LESS, PNG and more) and turn them into a single file. Packaging has two important benefits. These are modularity and network performance.

Modularity allows us to break down our source code into parts or modules, which makes the work of those working in the team easier.

We only need to load one dependency on our browser to improve network performance, so we collect our files in one bundle. Each script tag makes an HTTP request, and there is a certain latency panelty that happens with each request. So, bundling our modules into one bundle allows us to loading everything in one request and avoid additional latency.

### Apart from bundling, what does Webpack provide us?

**Code Splitting : ** It allows us to break down our code into parts.

**Minification : ** Removes whitespaces, line breaks, unnecessary codes, long variable names and reduces file size.

**Hot Module Replacement :** It only replaces the updated modules, following the changes in the source code.

**Speed :** Bundling the application's modules and dependencies into a single package increases the loading speed.

**Modularity :** It allows us to use modules in different parts of the project by using the export/import structure by separating the project into modules.

**Composition :** With modules we can create and compose small reusable and easily testable components in our application.

**Feature Flagging :** Sends code to one or more environments when testing out features.

**Consistency :** You can compile and use the latest JavaScript features from Webpack as it supports the Babel ESNext syntax.

### Helpful resources

- [Learning React, 2nd Edition](https://www.oreilly.com/library/view/learning-react-2nd/9781492051718/)
- [Webpack Official Website](https://webpack.js.org/)
- [An intro to Webpack: what it is and how to use it](https://www.freecodecamp.org/news/an-intro-to-webpack-what-it-is-and-how-to-use-it-8304ecdc3c60/)
