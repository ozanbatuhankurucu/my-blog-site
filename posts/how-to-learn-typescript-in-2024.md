---
title: "How To Learn TypeScript In 2024"
date: "2024-10-27"
img: "/images/how-to-learn-ts-in-2024.webp"
category: "Featured Article"
description: "Learn how to master TypeScript in 2024 with this comprehensive step-by-step guide. Discover the essential concepts, practical examples, and best practices to write efficient, type-safe JavaScript. Whether you're a beginner or an experienced developer, this guide will help you build your TypeScript skills and boost your career."
---

TypeScript has quickly become the go-to language for writing modern JavaScript. In today’s job market, if you're aiming for a JavaScript role, knowing TypeScript is no longer optional it's essential.

However, learning TypeScript can feel overwhelming with its vast features, and it’s easy to get stuck in endless tutorials.

This guide will simplify the process. Through a carefully structured set of steps, you’ll focus on the core concepts of TypeScript that matter the most, backed by practical examples and resources.

By the end, you’ll have the confidence to write TypeScript productively and get hired for it.

### Who Are You?

I have been working at ArenaAI as a front-end engineer for about 3 years.

## The Guide

### Basics

### 1. What Is TypeScript?

TypeScript is a powerful set of tools designed to enhance the JavaScript development experience. By adding static types, it makes writing, reading, and maintaining JavaScript code more enjoyable and robust.

The key components of TypeScript include:

- **The TypeScript Language**, which uses files with **.ts** and **.tsx** extensions to add types to JavaScript.
- **The TypeScript Compiler** (tsc), which converts TypeScript code into standard JavaScript files that can run in any browser or JavaScript environment.
- **The TypeScript Language Server**, which integrates with your IDE, providing real-time feedback, error checking, and autocompletion to improve productivity.

This combination of tools helps developers write safer, more maintainable code while still maintaining compatibility with plain JavaScript.

### 2. What Do You Need to Install to Use TypeScript?

To get the most out of TypeScript, you'll need to install Node.js. Be sure to download the LTS (Long Term Support) version for better stability and support.

Additionally, having a robust code editor is essential. Visual Studio Code (VSCode) is highly recommended due to its strong TypeScript support, including features like IntelliSense, auto-completion, and real-time error checking.

### 3. Why Choose TypeScript Over JavaScript?

TypeScript offers a range of features that make your coding experience smoother and more efficient. With TypeScript, your IDE becomes a powerful ally, providing autocompletion, real-time error detection, and enhanced code navigation.

For example, if you try to access a property that doesn’t exist on an object, TypeScript will catch the mistake before your code even runs:

```
const user = {
  firstName: "Angela",
  lastName: "Davis",
  role: "Professor",
};

console.log(user.name);
```

In this case, TypeScript will flag the error: **Property 'name' does not exist on type '{ firstName: string; lastName: string; role: string; }'**. This early error detection can save you from bugs that might otherwise make it into production.

Using TypeScript can significantly reduce issues in production code. For instance, in 2019, Airbnb discovered that 38% of the bugs that reached production could have been prevented with TypeScript.

### 4. Does TypeScript Work in the Browser?

TypeScript includes syntax and features that aren’t part of native JavaScript, such as the type keyword. Because of these differences, browsers cannot directly run TypeScript files.

To use TypeScript on the web, you must first compile your TypeScript code into plain JavaScript. This conversion allows browsers to understand and execute your code just like any other JavaScript file.

### 5. How Do You Convert TypeScript Files into JavaScript?

To transform TypeScript files into JavaScript, you can use the tsc command-line interface. Here’s how to get started:

1. Install TypeScript globally using npm.
2. Create a tsconfig.json file in your project to configure how TypeScript should compile your code.
3. Run the tsc command to compile your TypeScript files into JavaScript.

For a more detailed walkthrough, this [VSCode guide](https://code.visualstudio.com/docs/typescript/typescript-compiling) can help you set everything up smoothly.

### 6. How Do You Use TypeScript to Build Modern Frontend Applications?

When building a frontend application, using a modern framework is essential, and most frameworks today come with TypeScript support out of the box.

If you’re unsure which framework to start with, **Vite** is an excellent choice. Vite takes care of compiling **.ts** files into **.js**, along with many other tasks that make development smoother.

With Vite, you don’t need to run **tsc** manually for each change—it handles the compilation automatically. For more information, check out Vite's [getting started guide](https://vite.dev/guide/).

### 7. How Do You Use TypeScript with CI?

Incorporating TypeScript into your Continuous Integration (CI) pipeline is an effective way to ensure your project remains free from type-related bugs. Once configured, your CI will automatically fail if any TypeScript errors are detected in the code.

A great starting point is using [GitHub Actions](https://docs.github.com/en/actions/writing-workflows) for setting this up. However, you can run TypeScript checks on any CI platform that supports Node.js, whether it's Linux, Windows, or macOS-based.

### Essential Types

Before diving into the details of TypeScript's type system, it's important to familiarize yourself with the fundamental concepts. These essential types will form the foundation of your understanding of TypeScript.

Before you proceed, I suggest reviewing the [Basics section](https://www.typescriptlang.org/docs/handbook/2/basic-types.html) of the TypeScript Handbook for a solid introduction. This will provide you with useful context for the types we’ll explore next.

### 8. How Do You Add Types to a Function’s Parameters?

A key step in learning TypeScript is understanding how to type function parameters. This ensures your functions only accept the right kind of data.

For example, by adding a type to the **greet** function, you can specify that it only accepts a **string** as its argument:

```
function greet(name: string) {
  console.log(
    "Hello, " + name.toUpperCase() + "!!"
  );
}
```

With this type annotation, the **greet** function will only accept a **string** input:

```
greet(42); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
```

To learn more, check out the [Parameter Type Annotations](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#parameter-type-annotations) section of the TypeScript Handbook.

### 9. What Are TypeScript's Basic Types?

TypeScript includes several basic types, which correspond to JavaScript's primitive types: [**string**, **number**, **boolean**](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#the-primitives-string-number-and-boolean), and **symbol**. These types are the foundation of TypeScript's type system and help ensure that your variables only hold the data they’re supposed to.

For example:

```
let example1: string = "Hello World!";
let example2: number = 42;
let example3: boolean = true;
let example4: symbol = Symbol();
```

In this example, TypeScript enforces the rule that **example1** can only hold a string, **example2** a number, and so on. If you try to assign a different type to these variables, TypeScript will throw an error:

```
example1 = 42; // Error: Type 'number' is not assignable to type 'string'.
```

For more information on these basic types, you can refer to the TypeScript Handbook. If you're unfamiliar with the **symbol** type, you can learn more on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol).

### 10. How Do You Type the Return Value of a Function?

In TypeScript, you can also define the return type of a function to ensure that it always returns the expected value. For example, the following **greet** function is typed to always return a **string**:

```
function greet(name: string): string {
  return "Hello, " + name.toUpperCase() + "!!";
}
```

This guarantees that **greet** will always return a **string**. If you attempt to return a different type, TypeScript will throw an error:

```
function greet(name: string): string {
  return 123; // Error: Type 'number' is not assignable to type 'string'.
}
```

By defining return types, you can make your code more predictable and easier to maintain.

### 11. How Do You Type Objects?

In TypeScript, you can define the shape of an object using object types. This allows you to describe the structure and type of each property an object should have.

For example, the following **printCoord** function takes an object with two properties, **x** and **y**, both of which are numbers:

```
function printCoord(pt: {
  x: number;
  y: number;
}) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 3, y: 7 });
```

This ensures that **printCoord** only accepts objects that match this shape, helping to prevent errors at runtime.

For more details, check out the [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#object-types), and consider exploring how to make [object properties optional](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#optional-properties) as part of your learning.

### 12. How Do You Create a Reusable Type?

You might wonder, "What if I have a type that I need to use in multiple places? Do I have to define it every single time?"

Thankfully, TypeScript allows you to create [reusable types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases) by using the **type** keyword:

```
type Point = {
  x: number;
  y: number;
};

function printCoord(pt: Point) {
  // Function body here
}
```

This defines a type alias called Point, which can be reused wherever you need the same structure. It simplifies your code and ensures consistency across your project.

### 13. How Do You Type Arrays?

In TypeScript, you can define the type of an array in two ways:

The first method is by using the square bracket **[]** syntax:

```
let example1: string[] = ["Hello World!"];
let example2: number[] = [42];
```

Alternatively, you can use the **Array<>** syntax:

```
let example1: Array<string> = ["Hello World!"];
let example2: Array<number> = [42];
```

Both approaches work the same way, and it's up to you which style you prefer. For more details, you can refer to the [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays).

### 14. How Do You Type Tuples?

Tuples are a special type of array in TypeScript where the length is fixed, and each element has a specific type. Here's an example of how to define a tuple:

```
let example1: [string, number] = [
  "Hello World!",
  42,
];
```

In this case, **example1** can only contain a **string** followed by a **number**, and TypeScript will enforce that order and type.

For more information on tuples, you can check out the [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types).

### 15. How Do You Type Functions?

You can define the types of functions in TypeScript using the **() => Type** syntax. This allows you to specify what type a function will return:

```
type MyFunction = () => string;

let example1: MyFunction = () => "Hello World!";
```

This is particularly useful when typing callbacks passed to other functions. For example:

```
function addEventListener(
  event: string,
  callback: () => void
) {
  document.addEventListener(event, callback);
}
```

In this case, the **callback** parameter is typed as a function that takes no arguments and returns **void**.

For more details on typing functions, check out the [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/2/functions.html#function-type-expressions).

### 16. How Do You Type Sets and Maps?

In TypeScript, you can type sets and maps by using the Set<Type1> and Map<KeyType, ValueType> syntax.

For example:

```
let example1 = new Set<string>();
example1.add(42); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

let example2 = new Map<string, number>();
example2.set("id", "abc"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
```

This syntax allows you to specify the types for sets and maps, ensuring that they only hold values of the correct type. Without these types, **Set** and **Map** would accept any values, leading to potential issues:

```
let example1 = new Set();
// No error!
example1.add(42);
example1.add("abc");

let example2 = new Map();
// No error!
example2.set("id", "abc");
```

Typing sets and maps properly helps avoid errors and makes your code more predictable and maintainable.

### 17. How Do You Type Async Functions?

You can type asynchronous functions in TypeScript by using the **Promise<T>** syntax to indicate that the function returns a promise that resolves to a specific type.

For example:

```
async function getGreeting(): Promise<string> {
  return "Hello World!";
}
```

If you don’t use **Promise**, TypeScript will raise an error, as async functions must always return a promise:

```
async function getGreeting(): string {
  // Error: The return type of an async function or method must be the global Promise<T> type.
  return "Hello World!";
}
```

This ensures that TypeScript correctly understands the return type of asynchronous functions.
