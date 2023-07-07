---
title: 'What means pass-by-value in JavaScript?'
date: '2022-01-10'
img: '/images/carbon1.png'
category: 'JavaScript'
---

JavaScript is always pass-by-value. It is obvious to see that primitive variables are passed with values.

```
function square(x) {
  x = x * x
  return x
}

var y = 10
var result = square(y)

console.log(y) // 10 -- no change
console.log(result) // 100
```

But this is not the case for Objects. As seen in the example below, if we assign the firstObj variable to secondObj, they both reference to the same value in memory. Therefore, when we modify firstObj or secondObj, since we are modifying the same reference, we are changing both and show the same value. This should be considered when using the Object.

```
let firstObj = { a: 3 }
const increaseFirstObj = (obj) => {
  obj.a++
  return obj
}

let secondObj = increaseFirstObj(firstObj)

console.log(firstObj) // { a:4 }
console.log(secondObj) // { a:4 }
console.log(firstObj === secondObj) // true

firstObj = { a: 7, b: 9 }

console.log(firstObj) // { a:7, b:9 }
console.log(secondObj) // { a:4 }
console.log(firstObj === secondObj) //  false
```

### Helpful resources

- [Is JavaScript pass-by-value or pass-by-reference?](https://www.30secondsofcode.org/articles/s/javascript-pass-by-reference-or-pass-by-value)
- [Understanding JavaScript Pass By Value](https://www.javascripttutorial.net/javascript-pass-by-value/)
