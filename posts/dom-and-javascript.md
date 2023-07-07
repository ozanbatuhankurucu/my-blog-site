---
title: 'DOM and JavaScript'
date: '2023-01-23'
img: '/images/htmldom.webp'
category: 'HTML'
---

### DOM and JavaScript

![HTML-DOM-1.webp](https://res.cloudinary.com/dvejo6xq5/image/upload/v1674469119/HTML_DOM_1_025c723025.webp)

The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the structure of a document as a tree of nodes, with each node representing an element, attribute, or text content of the document. JavaScript can use the DOM to manipulate the content and structure of a web page, making it dynamic and interactive. The DOM is a standard of the World Wide Web Consortium (W3C) and is supported by all modern web browsers.

An example of how JavaScript can use the DOM to manipulate an HTML document:

```
<!DOCTYPE html>
<html>
<body>

<h1 id="myHeading">Hello World</h1>
<p>Click the button to change the text of the heading:</p>

<button onclick="changeText()">Click me</button>

<script>
function changeText() {
  var heading = document.getElementById("myHeading");
  heading.innerHTML = "Hello DOM";
}
</script>

</body>
</html>

```

In this example, the JavaScript function changeText() is called when the button is clicked. The function uses the DOM method getElementById() to find the element with the ID "myHeading" (which is the <h1> element), and then changes the innerHTML property of that element to "Hello DOM". As a result, when the button is clicked, the text of the heading changes from "Hello World" to "Hello DOM".

This is just a simple example, the DOM provides many more methods and properties to interact with the elements, such as:

- document.createElement()
- document.appendChild()
- document.removeChild()
- element.getAttribute()
- element.setAttribute()
- etc.

### Helpful resources

- [Document Object Model - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
