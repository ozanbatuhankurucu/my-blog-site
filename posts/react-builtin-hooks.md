---
title: "A Comprehensive Guide to React Built-in Hooks"
date: "2023-09-16"
img: "/images/react-hooks.webp"
category: "ReactJS"
description: "Explore React's Advanced Built-In Hooks - From useRef for DOM manipulation to useImperativeHandle for controlled APIs, delve into specialized React hooks like useLayoutEffect and useDebugValue, expanding your toolkit for creating efficient and powerful components."
---

React, the popular JavaScript library for building user interfaces, introduced hooks with React 16.8 to enable functional components to manage state and lifecycle. Hooks have since become an essential part of React development, offering a more concise and expressive way to handle component logic. In this article, we'll delve into React's built-in hooks, categorized into basic and additional hooks, and explore how they empower developers to create dynamic and efficient applications.

## Understanding React Hooks

Before we dive into specific hooks, it's essential to grasp some fundamental rules and concepts related to React hooks:

**1. Hooks in Functional Components :** React hooks can only be used within functional components or custom hooks. You cannot call them from regular JavaScript functions or class components.

**2. "use" Prefix :** Hooks always start with the word "use" followed by the hook's name, indicating their significance and purpose.

Now, let's explore the core built-in hooks provided by React.

### Basic Hooks

**1. useState**

`useState` is arguably the most crucial hook in React. It enables you to manage state within functional components. When you call `useState`, it returns a stateful value and a function to update that value.

```
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

**2. useEffect**

`useEffect` allows you to perform side effects in your components, such as data fetching, DOM manipulation, or subscribing to external events. You can control when this effect runs by providing a dependency array.

```
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count was changed to ${count}`);
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

**3. useContext**

`useContext` facilitates working with the React Context API, which enables data sharing between components through a publish-subscribe model. You provide a context object, and it returns the value from the nearest provider.

```
import React, { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

function App() {
  const [user, setUser] = useState({ username: 'loading...' });

  useEffect(() => {
    fetchUser().then((userData) => setUser({ username: userData.username }));
  }, []);

  return (
    <UserContext.Provider value={user}>
      {/* Other components */}
    </UserContext.Provider>
  );
}

function UserProfile() {
  const user = useContext(UserContext);

  return <p>Hello, {user.username}</p>;
}
```

### Additional Hooks

**4. useReducer**

`useReducer` is a hook for advanced state management. It follows the Redux pattern, allowing you to dispatch actions that trigger a reducer function to compute the next state.

![redux-pattern.webp](https://www.ozanbatuhankurucu.com/images/redux-pattern.webp)

```
import React, { useReducer } from 'react';

function countReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
}

function Counter() {
  const [count, dispatch] = useReducer(countReducer, 0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}
```

**5. useCallback**

Functions defined inside a React component are recreated on each render. `useCallback` memoizes functions, helping to prevent unnecessary re-creations.

```
const alertCounter = useCallback(() => {
  alert(`Counter is set to: ${count}`);
}, [count]);
```

**6. useMemo**

`useMemo` optimizes costly computations by caching the result and recalculating it only when specified dependencies change.

```
import React, { useMemo, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const computation = useMemo(() => expensiveComputation(count), [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>Computation: {computation}</p>
    </div>
  );
}
```

**7. useRef**

The `useRef` hook serves a unique purpose in React. It allows you to create a mutable object that maintains the same reference between renders. It's important to note that changes to mutable objects created with `useRef` won't trigger a re-render.

**Common Use Case: Imperative DOM Access**

One of the primary use cases for `useRef` is to access DOM elements imperatively. Here's an example:

```
import React, { useRef } from 'react';

function TextInputWithFocusButton() {
  const inputEl = useRef(null);

  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```

In this example, the `inputEl` ref is used to gain access to the input element and programmatically focus on it when the button is clicked.

**Data Storage Caveat**

A common mistake when using `useRef` is trying to use it for data storage within the component. Keep in mind that when you modify a `useRef` object, it doesn't trigger a re-render. Here's an example to illustrate this:

```
import React, { useRef } from 'react';

function App() {
  const count = useRef(0);

  return (
    <div>
      <p>You clicked {count.current} times</p>
      <button onClick={() => count.current++}>
        Click me
      </button>
    </div>
  );
}
// Don't use useRef for data storage
```

In this code snippet, even though `count` is updated, it won't cause the component to re-render. If you need to store and update data that should trigger re-renders, `useState` or `useReducer` would be more appropriate choices.

**8. useImperativeHandle**

`useImperativeHandle` is a less commonly used hook, but it can be helpful in specific scenarios. This hook allows you to customize the value exposed by a component when it's used with a ref. It's often used when you need to provide a more controlled or limited API to the parent component.

**Example: Customizing Exposed Methods**

In the following example, `useImperativeHandle` is used to expose a `setState` method from a child component. This method allows the parent component to interact with the child's state.

```
import React, { useState, forwardRef, useImperativeHandle, useRef } from 'react';

const Child = forwardRef((props, ref) => {
  const [count, setCount] = useState(10);

  // Expose the `setState` method via `useImperativeHandle`
  useImperativeHandle(ref, () => ({
    setState: setCount,
  }));

  return <p>{`Count: ${count}`}</p>;
});

function App() {
  const ref = useRef(null);

  return (
    <div>
      <button onClick={() => ref?.current?.setState(0)}>Clear</button>
      <Child ref={ref} />
    </div>
  );
}
```

In this example, the `Child` component exposes a `setState` method via `useImperativeHandle`, allowing the parent component (`App`) to reset the child's state when the "Clear" button is clicked.

**9. useLayoutEffect**

The `useLayoutEffect` hook is somewhat similar to `useEffect`, but it has a crucial difference. While `useEffect` runs after the render is committed to the screen, `useLayoutEffect` runs after rendering but before the browser's paint phase. This means React waits for the `useLayoutEffect` function to finish before updating the screen, making it suitable for tasks that require interaction with the DOM before visual updates occur.

**10. useDebugValue**

`useDebugValue` is a hook used for debugging custom hooks, and it's particularly handy when working with complex custom hooks that you want to inspect using React Developer Tools.

In the following example, `useDebugValue` is used to provide information about the state of a custom `useData` hook:

```
import React, { useDebugValue, useEffect, useState } from 'react';

const fetchData = () => new Promise((res) => res('data'));

function useData() {
  const [value, setValue] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchData()
      .then(setValue)
      .catch((err) => setError(err.message));
  }, []);

  // Use `useDebugValue` to provide debugging information
  useDebugValue({ value: value ?? 'loading...', error });

  return value;
}

function App() {
  const data = useData();

  return (
    <div className="App">
      {data}
    </div>
  );
}
```

In this example, `useDebugValue` provides insights into the state of the custom hook, making it easier to debug and understand how the hook behaves.

### Conclusion

These advanced built-in hooks expand your toolbox for creating powerful and efficient React components. While they may not be used as frequently as the basic hooks, they are invaluable for specific use cases, such as imperative DOM manipulation, fine-grained control over exposed methods, and precise timing of side effects. As you gain more experience with React, you'll have a deeper appreciation for these hooks and their role in crafting high-quality applications.
