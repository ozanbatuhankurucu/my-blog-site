---
title: "2024'te TypeScript Nasıl Öğrenilir?"
description: "Bu kapsamlı, adım adım rehberle 2024'te TypeScript'te nasıl uzmanlaşacağınızı öğrenin. Verimli ve type-safe JavaScript yazmak için temel kavramları, uygulamalı örnekleri ve en iyi pratikleri keşfedin. İster yeni başlayan ister deneyimli bir geliştirici olun, bu rehber TypeScript becerilerinizi geliştirmenize ve kariyerinizi ilerletmenize yardımcı olacak."
---

TypeScript, modern JavaScript yazmak için hızla tercih edilen dil hâline geldi. Günümüz iş piyasasında bir JavaScript pozisyonunu hedefliyorsanız TypeScript bilmek artık isteğe bağlı değil, zorunludur.

Ancak TypeScript'in geniş özellik yelpazesi öğrenme sürecini bunaltıcı hissettirebilir ve bitmek bilmeyen eğitimlerde takılıp kalmak kolaydır.

Bu rehber süreci basitleştirecek. Özenle yapılandırılmış adımlar sayesinde, uygulamalı örnekler ve kaynaklarla desteklenen en önemli TypeScript temel kavramlarına odaklanacaksınız.

Rehberin sonunda TypeScript'i verimli biçimde yazacak ve bu becerinizle işe girecek özgüvene sahip olacaksınız.

### Siz Kimsiniz?

Yaklaşık 5 yıldır Arena Physica'da front-end engineer olarak çalışıyorum.

## Rehber

### Temel Bilgiler

### 1. TypeScript Nedir?

TypeScript, JavaScript geliştirme deneyimini iyileştirmek için tasarlanmış güçlü bir araç setidir. Static type'lar ekleyerek JavaScript kodu yazmayı, okumayı ve sürdürmeyi daha keyifli ve sağlam hâle getirir.

TypeScript'in temel bileşenleri şunlardır:

- JavaScript'e type eklemek için **.ts** ve **.tsx** uzantılı dosyaları kullanan **TypeScript Dili**.
- TypeScript kodunu herhangi bir tarayıcıda veya JavaScript ortamında çalışabilen standart JavaScript dosyalarına dönüştüren **TypeScript Compiler** (tsc).
- IDE'nizle entegre olarak verimliliği artırmak üzere gerçek zamanlı geri bildirim, hata kontrolü ve otomatik tamamlama sunan **TypeScript Language Server**.

Bu araçların birleşimi, geliştiricilerin düz JavaScript ile uyumluluğu korurken daha güvenli ve sürdürülebilir kod yazmasına yardımcı olur.

### 2. TypeScript Kullanmak İçin Neler Yüklemelisiniz?

TypeScript'ten en iyi şekilde yararlanmak için Node.js yüklemeniz gerekir. Daha iyi kararlılık ve destek için LTS (Long Term Support) sürümünü indirdiğinizden emin olun.

Ayrıca güçlü bir kod editörüne sahip olmak önemlidir. IntelliSense, otomatik tamamlama ve gerçek zamanlı hata kontrolü gibi özelliklerle sunduğu kapsamlı TypeScript desteği sayesinde Visual Studio Code (VSCode) özellikle önerilir.

### 3. Neden JavaScript Yerine TypeScript Tercih Edilmeli?

TypeScript, kodlama deneyiminizi daha akıcı ve verimli hâle getiren çeşitli özellikler sunar. TypeScript ile IDE'niz; otomatik tamamlama, gerçek zamanlı hata tespiti ve gelişmiş kod navigasyonu sağlayan güçlü bir yardımcıya dönüşür.

Örneğin bir nesnede bulunmayan bir property'ye erişmeye çalışırsanız TypeScript, kodunuz daha çalışmadan hatayı yakalar:

```
const user = {
  firstName: "Angela",
  lastName: "Davis",
  role: "Professor",
};

console.log(user.name);
```

Bu durumda TypeScript şu hatayı işaretler: **Property 'name' does not exist on type '{ firstName: string; lastName: string; role: string; }'**. Hataların bu kadar erken tespit edilmesi, aksi hâlde production'a ulaşabilecek bug'lardan sizi koruyabilir.

TypeScript kullanmak production kodundaki sorunları önemli ölçüde azaltabilir. Örneğin Airbnb, 2019 yılında production'a ulaşan bug'ların %38'inin TypeScript ile önlenebileceğini tespit etti.

### 4. TypeScript Tarayıcıda Çalışır mı?

TypeScript, type keyword'ü gibi native JavaScript'in parçası olmayan syntax ve özellikler içerir. Bu farklılıklar nedeniyle tarayıcılar TypeScript dosyalarını doğrudan çalıştıramaz.

TypeScript'i web'de kullanmak için önce TypeScript kodunuzu düz JavaScript'e compile etmelisiniz. Bu dönüşüm, tarayıcıların kodunuzu diğer JavaScript dosyaları gibi anlayıp çalıştırmasını sağlar.

### 5. TypeScript Dosyalarını JavaScript'e Nasıl Dönüştürürsünüz?

TypeScript dosyalarını JavaScript'e dönüştürmek için tsc command-line interface'ini kullanabilirsiniz. Başlamak için şu adımları izleyin:

1. TypeScript'i npm ile global olarak yükleyin.
2. TypeScript'in kodunuzu nasıl compile edeceğini yapılandırmak için projenizde bir tsconfig.json dosyası oluşturun.
3. TypeScript dosyalarınızı JavaScript'e compile etmek için tsc komutunu çalıştırın.

Daha ayrıntılı bir anlatım için bu [VSCode rehberi](https://code.visualstudio.com/docs/typescript/typescript-compiling) her şeyi sorunsuz biçimde yapılandırmanıza yardımcı olabilir.

### 6. Modern Frontend Uygulamaları Oluştururken TypeScript Nasıl Kullanılır?

Bir frontend uygulaması geliştirirken modern bir framework kullanmak önemlidir ve günümüzde çoğu framework kutudan çıktığı hâliyle TypeScript desteği sunar.

Hangi framework ile başlayacağınızdan emin değilseniz **Vite** mükemmel bir seçimdir. Vite, geliştirme sürecini kolaylaştıran pek çok başka işlemin yanı sıra **.ts** dosyalarını **.js** dosyalarına compile etmeyi de üstlenir.

Vite kullanırken her değişiklik için **tsc** komutunu manuel olarak çalıştırmanız gerekmez; compilation işlemini otomatik olarak gerçekleştirir. Daha fazla bilgi için Vite'ın [başlangıç rehberine](https://vite.dev/guide/) göz atın.

### 7. TypeScript CI ile Nasıl Kullanılır?

TypeScript'i Continuous Integration (CI) pipeline'ınıza dâhil etmek, projenizin type kaynaklı bug'lardan uzak kalmasını sağlamanın etkili bir yoludur. Yapılandırmanın ardından kodda herhangi bir TypeScript hatası tespit edilirse CI otomatik olarak başarısız olur.

Bunu yapılandırmak için [GitHub Actions](https://docs.github.com/en/actions/writing-workflows) harika bir başlangıç noktasıdır. Bununla birlikte TypeScript kontrollerini Linux, Windows veya macOS tabanlı olması fark etmeksizin Node.js destekleyen herhangi bir CI platformunda çalıştırabilirsiniz.

### Temel Type'lar

TypeScript'in type sisteminin ayrıntılarına geçmeden önce temel kavramları öğrenmek önemlidir. Bu temel type'lar, TypeScript anlayışınızın temelini oluşturacaktır.

Devam etmeden önce sağlam bir giriş için TypeScript Handbook'un [Temel Bilgiler bölümünü](https://www.typescriptlang.org/docs/handbook/2/basic-types.html) incelemenizi öneririm. Bu bölüm, sırada ele alacağımız type'lar için yararlı bir bağlam sağlayacaktır.

### 8. Bir Fonksiyonun Parametrelerine Nasıl Type Eklersiniz?

TypeScript öğrenmenin önemli adımlarından biri, fonksiyon parametrelerinin nasıl type'lanacağını anlamaktır. Bu, fonksiyonlarınızın yalnızca doğru türde veriyi kabul etmesini sağlar.

Örneğin **greet** fonksiyonuna bir type ekleyerek argüman olarak yalnızca **string** kabul etmesini belirtebilirsiniz:

```
function greet(name: string) {
  console.log(
    "Hello, " + name.toUpperCase() + "!!"
  );
}
```

Bu type annotation ile **greet** fonksiyonu yalnızca **string** input kabul eder:

```
greet(42); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
```

Daha fazla bilgi için TypeScript Handbook'taki [Parameter Type Annotations](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#parameter-type-annotations) bölümüne göz atın.

### 9. TypeScript'in Temel Type'ları Nelerdir?

TypeScript, JavaScript'in primitive type'larına karşılık gelen birkaç temel type içerir: [**string**, **number**, **boolean**](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#the-primitives-string-number-and-boolean) ve **symbol**. Bu type'lar, TypeScript'in type sisteminin temelini oluşturur ve variable'larınızın yalnızca taşımaları gereken verileri tutmasını sağlamaya yardımcı olur.

Örneğin:

```
let example1: string = "Hello World!";
let example2: number = 42;
let example3: boolean = true;
let example4: symbol = Symbol();
```

Bu örnekte TypeScript, **example1**'in yalnızca string, **example2**'nin yalnızca number ve diğerlerinin de kendi type'larına uygun değerler tutması kuralını uygular. Bu variable'lara farklı bir type atamaya çalışırsanız TypeScript hata verir:

```
example1 = 42; // Error: Type 'number' is not assignable to type 'string'.
```

Bu temel type'lar hakkında daha fazla bilgi için TypeScript Handbook'a başvurabilirsiniz. **symbol** type'ına aşina değilseniz [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) üzerinden daha fazla bilgi edinebilirsiniz.

### 10. Bir Fonksiyonun Dönüş Değerini Nasıl Type'larsınız?

TypeScript'te bir fonksiyonun her zaman beklenen değeri döndürmesini sağlamak için return type'ını da tanımlayabilirsiniz. Örneğin aşağıdaki **greet** fonksiyonu her zaman **string** döndürecek biçimde type'lanmıştır:

```
function greet(name: string): string {
  return "Hello, " + name.toUpperCase() + "!!";
}
```

Bu, **greet** fonksiyonunun her zaman **string** döndürmesini garanti eder. Farklı bir type döndürmeye çalışırsanız TypeScript hata verir:

```
function greet(name: string): string {
  return 123; // Error: Type 'number' is not assignable to type 'string'.
}
```

Return type'ları tanımlayarak kodunuzu daha öngörülebilir ve bakımı daha kolay hâle getirebilirsiniz.

### 11. Object'leri Nasıl Type'larsınız?

TypeScript'te object type'larını kullanarak bir object'in şeklini tanımlayabilirsiniz. Bu, object'in sahip olması gereken her property'nin yapısını ve type'ını açıklamanıza olanak tanır.

Örneğin aşağıdaki **printCoord** fonksiyonu, her ikisi de number olan **x** ve **y** adlı iki property içeren bir object alır:

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

Bu, **printCoord** fonksiyonunun yalnızca bu şekle uyan object'leri kabul etmesini sağlayarak runtime'daki hataları önlemeye yardımcı olur.

Daha fazla ayrıntı için [TypeScript Handbook'a](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#object-types) göz atın ve öğrenme sürecinizin bir parçası olarak [object property'lerini optional hâle getirmeyi](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#optional-properties) inceleyin.

### 12. Yeniden Kullanılabilir Bir Type Nasıl Oluşturulur?

"Birden fazla yerde kullanmam gereken bir type varsa ne olacak? Her seferinde yeniden mi tanımlamam gerekiyor?" diye düşünüyor olabilirsiniz.

Neyse ki TypeScript, **type** keyword'ünü kullanarak [yeniden kullanılabilir type'lar](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases) oluşturmanıza olanak tanır:

```
type Point = {
  x: number;
  y: number;
};

function printCoord(pt: Point) {
  // Function body here
}
```

Bu kod, aynı yapıya ihtiyaç duyduğunuz her yerde yeniden kullanılabilen Point adlı bir type alias tanımlar. Kodunuzu basitleştirir ve projenizin genelinde tutarlılık sağlar.

### 13. Array'leri Nasıl Type'larsınız?

TypeScript'te bir array'in type'ını iki şekilde tanımlayabilirsiniz:

İlk yöntem, köşeli parantez **[]** syntax'ını kullanmaktır:

```
let example1: string[] = ["Hello World!"];
let example2: number[] = [42];
```

Alternatif olarak **Array<>** syntax'ını kullanabilirsiniz:

```
let example1: Array<string> = ["Hello World!"];
let example2: Array<number> = [42];
```

Her iki yaklaşım da aynı şekilde çalışır; hangi stili tercih edeceğiniz size bağlıdır. Daha fazla ayrıntı için [TypeScript Handbook'a](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays) başvurabilirsiniz.

### 14. Tuple'ları Nasıl Type'larsınız?

Tuple'lar, TypeScript'te uzunluğu sabit ve her elemanı belirli bir type'a sahip olan özel bir array türüdür. Bir tuple'ın nasıl tanımlanacağına ilişkin örnek:

```
let example1: [string, number] = [
  "Hello World!",
  42,
];
```

Bu durumda **example1** yalnızca ardından bir **number** gelen bir **string** içerebilir ve TypeScript bu sıralamayı ve type'ları zorunlu kılar.

Tuple'lar hakkında daha fazla bilgi için [TypeScript Handbook'a](https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types) göz atabilirsiniz.

### 15. Fonksiyonları Nasıl Type'larsınız?

TypeScript'te fonksiyonların type'larını **() => Type** syntax'ını kullanarak tanımlayabilirsiniz. Bu, bir fonksiyonun hangi type'ı döndüreceğini belirtmenize olanak tanır:

```
type MyFunction = () => string;

let example1: MyFunction = () => "Hello World!";
```

Bu yöntem özellikle başka fonksiyonlara iletilen callback'leri type'larken kullanışlıdır. Örneğin:

```
function addEventListener(
  event: string,
  callback: () => void
) {
  document.addEventListener(event, callback);
}
```

Bu durumda **callback** parametresi, hiç argüman almayan ve **void** döndüren bir fonksiyon olarak type'lanmıştır.

Fonksiyonları type'lama hakkında daha fazla ayrıntı için [TypeScript Handbook'a](https://www.typescriptlang.org/docs/handbook/2/functions.html#function-type-expressions) göz atın.

### 16. Set ve Map'leri Nasıl Type'larsınız?

TypeScript'te Set<Type1> ve Map<KeyType, ValueType> syntax'ını kullanarak set ve map'leri type'layabilirsiniz.

Örneğin:

```
let example1 = new Set<string>();
example1.add(42); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

let example2 = new Map<string, number>();
example2.set("id", "abc"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
```

Bu syntax, set ve map'lerin yalnızca doğru type'taki değerleri tutmasını sağlayacak biçimde type'larını belirtmenize olanak tanır. Bu type'lar olmadan **Set** ve **Map** her türlü değeri kabul ederek olası sorunlara yol açabilir:

```
let example1 = new Set();
// No error!
example1.add(42);
example1.add("abc");

let example2 = new Map();
// No error!
example2.set("id", "abc");
```

Set ve map'leri doğru biçimde type'lamak hataları önlemeye yardımcı olur ve kodunuzu daha öngörülebilir ve sürdürülebilir kılar.

### 17. Async Fonksiyonları Nasıl Type'larsınız?

TypeScript'te async fonksiyonları, fonksiyonun belirli bir type'a resolve olan promise döndürdüğünü belirtmek için **Promise<T>** syntax'ını kullanarak type'layabilirsiniz.

Örneğin:

```
async function getGreeting(): Promise<string> {
  return "Hello World!";
}
```

**Promise** kullanmazsanız async fonksiyonların her zaman promise döndürmesi gerektiği için TypeScript hata verir:

```
async function getGreeting(): string {
  // Error: The return type of an async function or method must be the global Promise<T> type.
  return "Hello World!";
}
```

Bu, TypeScript'in async fonksiyonların return type'ını doğru biçimde anlamasını sağlar.
