---
title: "JavaScript'te Shallow Copy ve Deep Copy: Temel Farklar ve Örnekler"
description: "JavaScript'te shallow copy ile deep copy arasındaki temel farkları öğrenin. Bu yazı, her yöntemin ne zaman kullanılacağını anlamanıza ve JavaScript object'lerini kopyalarken sık karşılaşılan sorunlardan kaçınmanıza yardımcı olacak açık açıklamalar ve örnekler sunuyor."
---

JavaScript'te object'lerle çalışırken kodunuzdaki istenmeyen yan etkilerden kaçınmak için shallow copy ve deep copy kavramlarını anlamak kritik öneme sahiptir. Bu iki kopyalama yöntemi, iç içe object'leri (object içindeki object'leri) ele alış biçimleri açısından önemli ölçüde farklılık gösterir. Bu yazıda shallow copy ile deep copy arasındaki farkları, her kavramı açıklayan net örneklerle inceleyeceğiz.

### Shallow Copy Nedir?

Shallow copy, orijinal object'in kopyası olan yeni bir object oluşturur. Ancak orijinal object içindeki iç içe object veya array'lerde object'lerin kendileri yerine bu iç içe object'lerin referansları kopyalanır. Bu, kopyalanan object'teki iç içe object'lerde yapılan değişikliklerin orijinal object'i de etkileyeceği ve bunun tersinin de geçerli olduğu anlamına gelir.

**Shallow Copy Örneği:**

Aşağıdaki kodu ele alalım:

```
let original = { a: 1, b: { c: 2 } };
let shallowCopy = Object.assign({}, original);

shallowCopy.b.c = 3;
console.log(original.b.c); // Outputs: 3
console.log(shallowCopy.b.c); // Outputs: 3
```

Bu örnekte **shallowCopy**, **original** object'inin property'lerini kopyalayan yeni bir object'tir. Ancak iç içe **b** object'i hâlâ orijinal **b** object'ine referans verir. Bu nedenle **shallowCopy.b.c** değiştirildiğinde **original.b.c** de değişir.

### Deep Copy Nedir?

Deep copy, yeni bir object oluşturur ve tüm iç içe object'leri recursive olarak kopyalayarak yeni object'i orijinalden tamamen bağımsız hâle getirir. Kopyalanan object içindeki iç içe object'lerde yapılan değişiklikler orijinal object'i etkilemez.

**Deep Copy Örneği:**

Deep copy oluşturmanın yaygın ancak sınırlı bir yolu olan JSON method'larını kullanan bir örnek:

```
let original = { a: 1, b: { c: 2 } };
let deepCopy1 = JSON.parse(JSON.stringify(original));

deepCopy1.b.c = 3;
console.log(original.b.c); // Outputs: 2
console.log(deepCopy1.b.c); // Outputs: 3
```

Bu örnekte **deepCopy1**, **original** object'inin tamamen bağımsız bir kopyasıdır. **deepCopy1.b.c** üzerinde yapılan değişiklikler **original.b.c**'yi etkilemez.

Daha karmaşık object'lerde veya JSON method'larının yetersiz kaldığı senaryolarda (örneğin fonksiyonlar, undefined değerler ya da circular reference'larla çalışırken) alternatif olarak recursive bir fonksiyon kullanılabilir:

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

Bu özel fonksiyon, iç içe array ve object'ler dâhil olmak üzere object'lerin deep copy işlemini gerçekleştirir.

### Shallow Copy ile Deep Copy Arasındaki Temel Farklar

1. **Kopyaların Bağımsızlığı:**

- **Shallow Copy:** Kopyalanan object ile orijinal object, iç içe object'leri paylaşır. Bu iç içe object'lerde yapılan değişiklikler hem orijinal hem de kopyalanan object'e yansır.
- **Deep Copy:** Kopyalanan object ile orijinal object birbirinden tamamen bağımsızdır. Kopyalanan object'in herhangi bir bölümünde yapılan değişiklikler orijinali etkilemez.

2. **Kopyalama Yöntemi:**

- **Shallow Copy:** Genellikle **Object.assign()** veya spread operator **(...)** kullanılır.
- **Deep Copy:** Basit object'ler için JSON method'ları (**JSON.parse(JSON.stringify())**), daha karmaşık durumlar için recursive fonksiyonlar ya da Lodash'in **\_.cloneDeep** metodu gibi daha güçlü yöntemler kullanılabilir.

3. **Kullanım Alanları:**

- **Shallow Copy:** Basit, düz object'ler veya iç içe object referanslarını bilinçli olarak paylaşmak istediğiniz durumlar için uygundur.
- **Deep Copy:** Kopyalanan object'teki değişikliklerin orijinali etkilememesi gereken iç içe yapılara sahip karmaşık object'lerde gereklidir.

### Sonuç

JavaScript'te shallow copy ile deep copy arasındaki farkı anlamak, object'leri etkili biçimde manipüle etmek için gereklidir. Uygulamanızın gereksinimlerine göre uygun kopyalama yöntemini seçerek istenmeyen yan etkilerden kaçınabilir ve veri yapılarınız üzerinde daha iyi kontrol sağlayabilirsiniz. İster düz object'ler için basit bir shallow copy'ye ister karmaşık, iç içe object'ler için deep copy'ye ihtiyaç duyun, JavaScript verilerinizi etkili biçimde yönetmek için gereken araçları sunar.
