---
title: "Babel JSX İçin Neden Önemlidir?"
description: "Bu yazıda Babel'ın JSX syntax'ını işlemedeki önemini keşfedin. React'te kullanılan bir JavaScript uzantısı olan JSX, geliştiricilerin JavaScript kodu içinde tag tabanlı syntax ile React element'leri tanımlamasını sağlar ancak tarayıcılar tarafından doğrudan yorumlanamaz. JavaScript compiler'ı Babel, JSX syntax'ını uyumlu JavaScript koduna dönüştürerek farklı ortamlar arasında uyumluluk sağlar ve geliştiricilerin modern JavaScript özelliklerinden yararlanmasına imkân tanır."
---

JSX uzantısı olmadan uygulamamıza React.createElement() API'sini kullanarak element ekleyebiliriz. JSX, JavaScript ile XML'i birleştirir. JavaScript kodumuz içinde tag tabanlı syntax kullanarak React element'leri tanımlamamızı sağlayan bir JavaScript uzantısıdır.

```
// ReactElement

React.createElement(TodosList,{todos:[...]});

// JSX

<TodosList todos={[...]} />
```

JSX temiz ve okunabilir görünebilir ancak tarayıcı tarafından yorumlanamaz. Bu nedenle Babel, tüm JSX syntax'ını createElement() çağrılarına dönüştürür.

### Babel (JavaScript Compiler)

JavaScript yorumlanan bir dildir. Tüm tarayıcılar en yeni JavaScript özelliklerini ve syntax'ını desteklemez; ayrıca hiçbir tarayıcı JSX syntax'ını desteklemez. Bu nedenle en yeni JavaScript özelliklerini JSX ile kullanabilmek için source code'u dönüştürüp tarayıcının yorumlayabileceği hâle getiren bir araca (Babel) ihtiyaç duyarız. Bu işleme compilation denir ve Babel tam olarak bu amaçla tasarlanmıştır.

### Yararlı Kaynaklar

- [Yorumlanan ve Derlenen Programlama Dilleri](https://www.freecodecamp.org/news/compiled-versus-interpreted-languages/)
