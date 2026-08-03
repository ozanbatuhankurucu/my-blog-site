---
title: "Memoization Büyüsü: useMemo ve useCallback ile React Component'lerinizi Bir Üst Seviyeye Taşıyın!"
description: "Component performansını optimize etmek ve genel verimliliği artırmak için React'teki useMemo ve useCallback hook'larının gücünü keşfedin. Bu kapsamlı rehber; son derece hızlı React uygulamaları geliştirmek amacıyla memoization tekniklerinden nasıl yararlanacağınızı, hesaplamaları nasıl cache'leyeceğinizi ve callback fonksiyonlarını nasıl memoize edeceğinizi açıklıyor. React geliştirme deneyiminizi iyileştirmek ve kesintisiz bir kullanıcı deneyimi oluşturmak için en iyi pratikleri ve uygulamalı örnekleri öğrenin. Becerilerini bir üst seviyeye taşımak ve yüksek performanslı uygulamalar sunmak isteyen React geliştiricileri için bu önemli kaynağı kaçırmayın!"
---

## React'te useMemo ve useCallback Hook'larını Anlamak

React, kullanıcı arayüzleri oluşturmak için kullanılan popüler bir JavaScript kütüphanesidir ve geliştiricilerin state'i yönetmesini ve performansı optimize etmesini sağlayan güçlü bir hook setiyle birlikte gelir. Bu hook'lar arasında useMemo ve useCallback, React component'lerinin verimliliğini artıran kritik araçlar olarak öne çıkar.

### React Hook'larını Anlamak

useMemo ve useCallback'i ayrıntılı biçimde incelemeden önce React hook kavramını kısaca hatırlayalım. React 16.8 ile sunulan hook'lar, geliştiricilerin class component'lere ihtiyaç duymadan functional component'lerde state ve diğer React özelliklerini kullanmasını sağlar.

Hook'lar; React tarafından sunulan useState, useEffect veya diğer yerleşik hook fonksiyonlarını kullanan fonksiyonlardır. Functional component'lerde daha iyi kod organizasyonu, yeniden kullanılabilirlik ve birleştirilebilirlik sağlarlar.

### useMemo Nedir?

`useMemo`, bir hesaplamanın sonucunu memoize etmek için kullanılan bir React hook'udur. Basitçe ifade etmek gerekirse bir fonksiyonun dönüş değerini cache'lemenize olanak tanır ve fonksiyonun yalnızca dependency'ler değiştiğinde yeniden hesaplanmasını sağlar. Bu optimizasyon, özellikle bir component içindeki maliyetli hesaplamalar veya karmaşık veri dönüşümleriyle çalışırken yararlıdır.

useMemo'nun syntax'ı şöyledir:

```
const memoizedValue = useMemo(() => {
  // Expensive computation or data transformation
  return result;
}, [dependency1, dependency2]);
```

Burada useMemo iki argüman alır: ilki hesaplamayı yapan fonksiyon, ikincisi ise bir dependency array'dir. Array'deki dependency'lerden herhangi biri değiştiğinde fonksiyon yeniden çalıştırılır ve yeni sonuç döndürülür. Dependency'ler değişmezse cache'lenmiş sonuç döndürülerek gereksiz hesaplamalardan kaçınılır.

### useMemo Ne Zaman Kullanılmalı?

Her hesaplama memoization'dan fayda sağlamadığı için useMemo'yu yerinde kullanmak önemlidir. Aşağıdaki senaryolarda useMemo kullanmayı değerlendirin:

1.  **Maliyetli hesaplamalar:** Bir fonksiyon yoğun hesaplamalar veya karmaşık algoritmalar içeriyorsa memoization, tekrarlanan hesaplamaları önleyerek performansı önemli ölçüde artırabilir.

2.  **Türetilmiş veriler:** Bir component prop'lardan veya state'ten türetilen verilere dayanıyorsa useMemo bu verileri saklamak ve her render'da yeniden hesaplanmalarını önlemek için kullanılabilir.

3.  **Child component rendering'ini optimize etme:** Child component'lere veri aktarırken parent'ın yeniden render edilmesi nedeniyle child component'lerin gereksiz yere yeniden render edilmesini önlemek için useMemo kullanın.

### useCallback Nedir?

useMemo bir hesaplamanın sonucunu memoize etmek için kullanılırken useCallback fonksiyonun kendisini memoize etmek için kullanılır. Dependency array'indeki dependency'lerden biri değişmedikçe değişmeyen, memoize edilmiş bir callback fonksiyonu sürümü döndürür.

useCallback'in syntax'ı şöyledir:

```
const memoizedCallback = useCallback(() => {
  // Function logic
}, [dependency1, dependency2]);
```

useCallback, useMemo'ya benzer biçimde çalışır ancak bir değeri değil, bir fonksiyonu memoize eder. Dependency'ler aynı kaldığı sürece sonraki render'larda aynı fonksiyon instance'ının döndürülmesini sağlar.

### useCallback Ne Zaman Kullanılmalı?

useCallback'in temel kullanım alanı, callback'ler child component'lere aktarılırken performansı optimize etmektir. Bir parent component render edildiğinde varsayılan olarak child'larına callback fonksiyonlarının yeni instance'larını iletir. Ancak child component'ler callback fonksiyonunun kimliğine dayanıyorsa (örneğin React.memo içindeki karşılaştırma için) bu durum gereksiz yeniden render'lara yol açabilir.

Parent component, useCallback kullanarak callback fonksiyonlarını memoize edebilir; böylece render'lar arasında tutarlı fonksiyon instance'ları sağlar ve child component'lerdeki gereksiz yeniden render'ları azaltır.

## useMemo ve useCallback Hook'larını Kullanırken Yapılan Yaygın Hatalar

useMemo ve useCallback hook'ları önemli performans avantajları sunsa da yanlış kullanılabilir veya yanlış anlaşılabilir; bu da beklenmeyen davranışlara ya da performans kazanımlarının azalmasına yol açabilir. Bu hook'larla çalışırken kaçınılması gereken bazı yaygın hataları inceleyelim:

### 1. Basit Hesaplamalarda useMemo'yu Gereğinden Fazla Kullanmak

```
// Bad Example: Unnecessarily using useMemo for a trivial calculation
import React, { useMemo } from 'react';

const Component = () => {
  const data = [1, 2, 3, 4, 5];

  // Unnecessary use of useMemo for a trivial calculation
  const totalSum = useMemo(() => {
    return data.reduce((acc, curr) => acc + curr, 0);
  }, [data]); // This useMemo is not needed for such a simple calculation

  return <div>{totalSum}</div>;
};
```

Bu örnekte, bir sayı array'inin toplamını hesaplamak için useMemo kullanıyoruz. Ancak bu hesaplama basittir ve memoization gerektirmez. Buradaki doğru yaklaşım, toplamı useMemo olmadan doğrudan hesaplamak olacaktır.

### 2. Hatalı Dependency Array'leri

```
// Bad Example: Incorrect dependency array in useMemo
import React, { useMemo, useState } from 'react';

const Component = () => {
  const [count, setCount] = useState(0);

  const factorial = useMemo(() => {
    let result = 1;
    for (let i = 1; i <= count; i++) {
      result *= i;
    }
    return result;
  }, []); // Incorrect dependency array, should include 'count'

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Factorial of {count} is {factorial}</p>
    </div>
  );
};
```

Bu örnekte useMemo kullanarak count state'inin faktöriyelini hesaplamak istiyoruz. Ancak count'u yanlışlıkla dependency array'den çıkardığımız için faktöriyel yalnızca bir kez hesaplanıyor ve count değiştiğinde güncellenmiyor.

### 3. useCallback'i Gereksiz Kullanmak

```
// Bad Example: Unnecessarily using useCallback for a simple callback
import React, { useCallback } from 'react';

const Component = () => {
  // Unnecessarily using useCallback for a simple onClick handler
  const handleClick = useCallback(() => {
    alert('Button Clicked!');
  }, []); // useCallback is not needed for this case

  return <button onClick={handleClick}>Click Me</button>;
};
```

Bu örnekte herhangi bir harici veriye bağlı olmayan basit bir handleClick fonksiyonu için useCallback kullanıyoruz. Bu durumda useCallback gerekli değildir; bunun yerine normal bir fonksiyon kullanabiliriz.

### 4. useMemo ve useCallback'i Yanlış Yerde Kullanmak

```
// Bad Example: Incorrect placement of useMemo
import React, { useState, useMemo } from 'react';

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  // Incorrect placement of useMemo; should be inside ChildComponent
  const factorial = useMemo(() => {
    let result = 1;
    for (let i = 1; i <= count; i++) {
      result *= i;
    }
    return result;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent factorial={factorial} />
    </div>
  );
};

const ChildComponent = ({ factorial }) => {
  return <p>Factorial: {factorial}</p>;
};
```

Bu örnekte count'un faktöriyelini hesaplayan useMemo'yu ParentComponent içine yerleştirdik. Ancak faktöriyel ChildComponent içinde kullanıldığı için parent'ın yeniden render edilmesi sırasında gereksiz hesaplamaları önlemek adına ChildComponent içine yerleştirilmelidir.

### 5. Performans Profili Çıkarmayı İhmal Etmek

```
// Bad Example: Neglecting performance profiling
import React, { useMemo, useState } from 'react';

const Component = () => {
  const [data, setData] = useState(/* ... */);

  // Neglecting performance profiling; using useMemo without data-driven approach
  const processedData = useMemo(() => {
    // Expensive data processing logic based on 'data'
    // ...
    return processedData;
  }, [data]);

  return (
    <div>
      {/* ... */}
    </div>
  );
};
```

Bu örnekte uygun bir performans profili çıkarmadan, maliyetli bir veri işleme süreci için useMemo kullanıyoruz. Her hesaplamanın memoize edilmesi gerektiğini varsaymak yerine, veri odaklı bir analizle kod tabanınızın memoization'dan gerçekten yararlanacak bölümlerini belirlemek önemlidir.

Bu yaygın hatalardan kaçınarak useMemo ve useCallback hook'larını optimize edilmiş biçimde kullanabilir, daha iyi React component performansı ve gelişmiş kullanıcı deneyimleri elde edebilirsiniz.

### Sonuç

Sonuç olarak useMemo ve useCallback, doğru kullanıldıklarında component performansını önemli ölçüde artırabilen güçlü React hook'larıdır. Ancak geliştiricilerin bilmesi gereken kendilerine özgü zorlukları ve yaygın hataları da vardır.

Tehlikeleri ve en iyi pratikleri anlayarak aşağıdaki yaygın hatalardan kaçınabilirsiniz:

1.  **Basit Hesaplamalarda useMemo'yu Gereğinden Fazla Kullanmak:** Memoization, maliyetli hesaplamalar veya türetilmiş veriler için ayrılmalıdır. Kayda değer bir performans maliyeti oluşturmayan basit hesaplamalarda useMemo kullanmaktan kaçının.

2.  **Hatalı Dependency Array'leri:** Doğru memoization sağlamak için useMemo ve useCallback dependency array'lerini doğru tanımlayın. Dependency'leri atlamak veya hatalı belirtmek eski verilere ya da yanlış güncellemelere yol açabilir.

3.  **useCallback'i Gereksiz Kullanmak:** useCallback'i yalnızca gerektiğinde, özellikle child component'lere iletilen callback fonksiyonlarıyla çalışırken kullanın. Her callback'in memoization'a ihtiyacı yoktur ve gereksiz kullanımı fazladan karmaşıklık yaratabilir.

4.  **useMemo ve useCallback'i Yanlış Yerde Kullanmak:** İstenmeyen yeniden hesaplamalara neden olmadan performans kazanımlarını en üst düzeye çıkarmak için useMemo ve useCallback'i component ağacında uygun seviyeye yerleştirin.

5.  **Performans Profili Çıkarmayı İhmal Etmek:** Kod tabanınızda memoization'dan gerçekten yararlanacak alanları belirlemek için performans profili çıkarın. Yalnızca sezgilere güvenmek, useMemo ve useCallback'in optimum olmayan biçimde kullanılmasına yol açabilir.

Bu tehlikelerden kaçınıp yazıda ele alınan yönergeleri izleyerek React'teki useMemo ve useCallback hook'larının gerçek potansiyelinden yararlanabilirsiniz. Bu hook'lar component'lerinizi optimize etmenize, gereksiz yeniden render'ları azaltmanıza ve kesintisiz, hızlı yanıt veren bir kullanıcı deneyimi sunmanıza olanak tanır.

Hesaplama açısından maliyetli görevler ve türetilmiş veriler için useMemo'yu; child component'lere aktarılan callback fonksiyonlarını memoize etmek için ise useCallback'i kullanmayı unutmayın. Ayrıca performans üzerindeki gerçek etkiyi her zaman değerlendirin ve bilinçli optimizasyon kararları vermek için uygulamanızın profilini çıkarın.

Doğru bilgi ve bilinçli kullanımla useMemo ve useCallback, performanslı ve verimli uygulamalar geliştirerek kullanıcılarınızı memnun etmenizi sağlayan React geliştirme araçlarınızın vazgeçilmez parçaları hâline gelebilir.
