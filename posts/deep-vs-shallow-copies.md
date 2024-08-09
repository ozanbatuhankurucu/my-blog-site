---
title: "Understanding Shallow Copy vs Deep Copy in JavaScript: Key Differences and Examples"
date: "2024-08-10"
img: "/images/shallow-copy-vs-deep-copy.webp"
category: "Featured Article"
description: "Learn the key differences between shallow copy and deep copy in JavaScript. This article provides clear explanations and examples to help you understand when to use each method and how to avoid common pitfalls when copying objects in JavaScript."
---

When working with objects in JavaScript, understanding the concepts of shallow copy and deep copy is crucial for avoiding unintended side effects in your code. These two copying methods differ significantly in how they handle nested objects (objects within objects). This article will explore the differences between shallow and deep copy with clear examples to illustrate each concept.

### What is a Shallow Copy?

A shallow copy creates a new object that is a copy of the original. However, for any nested objects or arrays within the original object, the references to these nested objects are copied rather than the objects themselves. This means that changes to the nested objects in the copied object will affect the original object and vice versa.

**Example of Shallow Copy:**

Consider the following code:

```
let original = { a: 1, b: { c: 2 } };
let shallowCopy = Object.assign({}, original);

shallowCopy.b.c = 3;
console.log(original.b.c); // Outputs: 3
console.log(shallowCopy.b.c); // Outputs: 3
```

In this example, **shallowCopy** is a new object that copies the properties of **original**. However, the nested object **b** is still a reference to the original object **b**. Therefore, when **shallowCopy.b.c** is modified, it also modifies **original.b.c**.

### What is a Deep Copy?

A deep copy creates a new object and recursively copies all nested objects, making the new object completely independent of the original. Changes made to nested objects in the copied object do not affect the original object.

**Example of Deep Copy:**

Here’s an example using JSON methods, which is a common but limited way to perform a deep copy:

```
let original = { a: 1, b: { c: 2 } };
let deepCopy1 = JSON.parse(JSON.stringify(original));

deepCopy1.b.c = 3;
console.log(original.b.c); // Outputs: 2
console.log(deepCopy1.b.c); // Outputs: 3
```

In this example, **deepCopy1** is a completely independent copy of **original**. Changes to **deepCopy1.b.c** do not affect **original.b.c**.

Alternatively, for more complex objects or scenarios where JSON methods fall short (e.g., when dealing with functions, undefined values, or circular references), a recursive function can be used:

```
function deepCopy(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    let copy = [];
    obj.forEach((element, index) => {
      copy[index] = deepCopy(element);
    });
    return copy;
  }

  let copy = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }
  return copy;
}

let deepCopy2 = deepCopy(original);

deepCopy2.b.c = 3;
console.log(original.b.c); // Outputs: 2
console.log(deepCopy2.b.c); // Outputs: 3
```

This custom function handles deep copying of objects, including nested arrays and objects.

### Key Differences Between Shallow Copy and Deep Copy

1. **Independence of Copies:**

- **Shallow Copy:** The copied object and the original object share nested objects. Changes to these nested objects will be reflected in both the original and copied objects.
- **Deep Copy:** The copied object and the original object are completely independent. Changes to any part of the copied object do not affect the original object.

2. **Copying Method:**

- **Shallow Copy:** Typically uses **Object.assign()** or the spread operator **(...)**.
- **Deep Copy:** Can use JSON methods (**JSON.parse(JSON.stringify())**) for simple objects or more robust methods like recursive functions or libraries such as Lodash's **\_.cloneDeep**.

3. **Use Cases:**

- **Shallow Copy:** Suitable for simple, flat objects or when you intentionally want shared references to nested objects.
- **Deep Copy:** Necessary for complex objects with nested structures where changes in the copied object should not affect the original.

### Conclusion

Understanding the difference between shallow and deep copy in JavaScript is essential for effective object manipulation. By choosing the appropriate copying method based on your application's requirements, you can avoid unintended side effects and maintain better control over your data structures. Whether you need a simple shallow copy for flat objects or a deep copy for complex, nested objects, JavaScript provides the tools you need to manage your data effectively.
