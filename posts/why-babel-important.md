---
title: 'Why is Babel important for JSX?'
date: '2022-12-12'
img: '/images/carbon.png'
category: 'Featured Article'
description: 'Discover the importance of Babel in handling JSX syntax in this insightful article. JSX, a JavaScript extension used in React, allows developers to define React elements using tag-based syntax within JavaScript code. However, JSX cannot be directly interpreted by browsers. This is where Babel, a JavaScript compiler, comes into play.

Babel serves the purpose of converting JSX syntax into compatible JavaScript code, making it interpretable by browsers. As JavaScript is an interpreted language and browsers have varying support for the latest JavaScript features and JSX syntax, Babel bridges the gap by transforming the source code to ensure compatibility across different environments. The compilation process carried out by Babel enables developers to leverage JSX syntax and utilize the latest JavaScript features.

In the article, you'll gain insights into how Babel acts as a JavaScript compiler and understand the significance of its role in enabling the use of JSX syntax in web development. Additionally, a helpful resource on the differences between compiled and interpreted programming languages is provided for further exploration.

Enhance your understanding of Babel and JSX, and learn how this powerful combination allows developers to write clean and expressive code while ensuring compatibility with browsers.'
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
