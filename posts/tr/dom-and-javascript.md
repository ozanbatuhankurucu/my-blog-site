---
title: "DOM ve JavaScript"
description: "JavaScript'in HTML ve XML dokümanlarını değiştirmek, web sayfalarını dinamik ve interaktif hâle getirmek için Document Object Model'den (DOM) nasıl yararlandığını öğrenin. DOM'un hiyerarşik yapısını, method ve property'lerini inceleyin; JavaScript'in element'leri nasıl oluşturabildiğini, değiştirebildiğini ve kaldırabildiğini, ayrıca kullanıcı etkileşimlerini nasıl yönetebildiğini keşfedin. DOM'un web dokümanlarının statik yapısıyla JavaScript'in dinamik yetenekleri arasında nasıl köprü kurduğunu ve ilgi çekici web deneyimlerinin geliştirilmesini nasıl sağladığını öğrenin."
---

### DOM ve JavaScript

![HTML DOM yapısı](https://res.cloudinary.com/dvejo6xq5/image/upload/v1674469119/HTML_DOM_1_025c723025.webp)

Document Object Model (DOM), HTML ve XML dokümanları için bir programlama interface'idir. Bir dokümanın yapısını node'lardan oluşan bir tree olarak temsil eder; her node dokümandaki bir element'i, attribute'u veya metin içeriğini temsil eder. JavaScript, bir web sayfasının içeriğini ve yapısını değiştirmek için DOM'u kullanarak sayfayı dinamik ve interaktif hâle getirebilir. DOM, World Wide Web Consortium (W3C) standardıdır ve tüm modern web tarayıcıları tarafından desteklenir.

JavaScript'in bir HTML dokümanını değiştirmek için DOM'u nasıl kullanabileceğine dair bir örnek:

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

Bu örnekte button'a tıklandığında JavaScript'teki `changeText()` function'ı çağrılır. Function, ID'si `"myHeading"` olan element'i (`<h1>` elementi) bulmak için DOM'un `getElementById()` method'unu kullanır ve ardından bu element'in `innerHTML` property'sini `"Hello DOM"` olarak değiştirir. Sonuç olarak button'a tıklandığında başlık metni `"Hello World"` yerine `"Hello DOM"` olur.

Bu yalnızca basit bir örnektir. DOM, element'lerle etkileşime geçmek için çok daha fazla method ve property sağlar:

- document.createElement()
- document.appendChild()
- document.removeChild()
- element.getAttribute()
- element.setAttribute()
- vb.

### Yararlı kaynaklar

- [Document Object Model - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
