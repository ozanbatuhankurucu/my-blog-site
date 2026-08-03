---
title: "JavaScript'te pass-by-value ne anlama gelir?"
description: "Bu kapsamlı yazıyla JavaScript'teki pass-by-value kavramını keşfedin. Primitive değişkenlerin değerleriyle aktarıldığını, nesnelerin ise paylaşılan referanslar nedeniyle farklı davrandığını öğrenin. Nesneleri değiştirirken bu davranışın sonuçlarını netleştirin ve programlamada neden dikkate alınması gerektiğini anlayın. Primitive değerlerde pass-by-value, nesnelerde ise paylaşılan referans davranışını gösteren kod örneklerini inceleyin. Ayrıca JavaScript'in pass-by-value davranışını daha ayrıntılı keşfetmek için yararlı kaynaklara ulaşın. JavaScript'te pass-by-value konusunu ve bunun değişken atamalarıyla nesne değişiklikleri üzerindeki etkisini daha iyi anlayın."
---

JavaScript her zaman pass-by-value yaklaşımını kullanır. Primitive değişkenlerin değerleriyle aktarıldığını görmek oldukça kolaydır.

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

Ancak nesnelerde durum farklı görünür. Aşağıdaki örnekte görüldüğü gibi, `firstObj` değişkenini `secondObj` değişkenine atadığımızda ikisi de bellekteki aynı değere referans verir. Bu nedenle `firstObj` veya `secondObj` üzerinde değişiklik yaptığımızda aynı referansın işaret ettiği nesneyi değiştirmiş oluruz; dolayısıyla ikisi de aynı değeri gösterir. Nesnelerle çalışırken bu davranış dikkate alınmalıdır.

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

### Yararlı kaynaklar

- [JavaScript pass-by-value mı, pass-by-reference mı kullanır?](https://www.30secondsofcode.org/articles/s/javascript-pass-by-reference-or-pass-by-value)
- [JavaScript'te Pass By Value Kavramını Anlamak](https://www.javascripttutorial.net/javascript-pass-by-value/)
