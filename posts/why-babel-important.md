---
title: 'Why is Babel important for JSX?'
date: '2022-12-12'
img: '/images/carbon.png'
category: 'Featured Article'
---

Without the JSX extension, we can add elements to our application using the React.createElement() api. JSX combines JavaScript and XML. JSX is a JavaScript extension that allows us to define React elements inside our JavaScript code using tag-based syntax.

```
// ReactElement

React.createElement(TodosList,{todos:[...]});

// JSX

<TodosList todos={[...]} />
```

JSX may look clean and readable, but cannot be interpreted by the browser. So with Babel, all JSX syntax is converted to createElement() calls.

### Babel(JavaScript Compiler)

JavaScript is an interpreted language. Not all browsers support the latest JavaScript features and syntax. And no browser supports the JSX syntax. Therefore, in order to use the latest JavaScript features with JSX, we need a tool (Babel) that converts our source code and makes it interpretable by the browser. This process is called compiling, which is what Babel was designed for.

### Helpful resources

- [Interpreted vs Compiled Programming Languages](https://www.freecodecamp.org/news/compiled-versus-interpreted-languages/)
