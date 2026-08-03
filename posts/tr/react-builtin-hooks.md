---
title: "React'in Yerleşik Hook'ları İçin Kapsamlı Rehber"
description: "DOM manipülasyonu için useRef'ten kontrollü API'ler için useImperativeHandle'a kadar React'in gelişmiş yerleşik hook'larını keşfedin. Verimli ve güçlü component'ler oluşturmak için araç setinizi genişleten useLayoutEffect ve useDebugValue gibi özel React hook'larını ayrıntılı biçimde inceleyin."
---

Kullanıcı arayüzleri oluşturmak için kullanılan popüler JavaScript kütüphanesi React, functional component'lerin state ve lifecycle yönetebilmesini sağlamak amacıyla React 16.8 ile hook'ları kullanıma sundu. Hook'lar o zamandan beri React geliştirmenin vazgeçilmez bir parçası hâline geldi ve component mantığını yönetmek için daha özlü ve ifade gücü yüksek bir yaklaşım sundu. Bu yazıda React'in yerleşik hook'larını temel ve ek hook'lar olarak sınıflandıracak, geliştiricilerin dinamik ve verimli uygulamalar oluşturmasına nasıl yardımcı olduklarını inceleyeceğiz.

## React Hook'larını Anlamak

Belirli hook'lara geçmeden önce React hook'larıyla ilgili bazı temel kuralları ve kavramları anlamak önemlidir:

**1. Functional Component'lerde Hook Kullanımı:** React hook'ları yalnızca functional component'ler veya custom hook'lar içinde kullanılabilir. Bunları sıradan JavaScript fonksiyonlarından ya da class component'lerden çağıramazsınız.

**2. "use" Ön Eki:** Hook'lar her zaman "use" sözcüğüyle başlar ve ardından hook'un adı gelir; bu da önemlerini ve amaçlarını belirtir.

Şimdi React'in sunduğu temel yerleşik hook'ları inceleyelim.

### Temel Hook'lar

**1. useState**

`useState`, React'teki en önemli hook'lardan biridir. Functional component'lerde state yönetmenizi sağlar. `useState` çağrıldığında state içeren bir değer ve bu değeri güncelleyen bir fonksiyon döndürür.

```
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

**2. useEffect**

`useEffect`; veri getirme, DOM manipülasyonu veya harici event'lere abone olma gibi side effect'leri component'lerinizde gerçekleştirmenizi sağlar. Bir dependency array vererek bu effect'in ne zaman çalışacağını kontrol edebilirsiniz.

```
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count was changed to ${count}`);
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

**3. useContext**

`useContext`, component'ler arasında publish-subscribe modeliyle veri paylaşılmasını sağlayan React Context API ile çalışmayı kolaylaştırır. Bir context nesnesi verirsiniz ve en yakın provider'daki değer döndürülür.

```
import React, { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

function App() {
  const [user, setUser] = useState({ username: 'loading...' });

  useEffect(() => {
    fetchUser().then((userData) => setUser({ username: userData.username }));
  }, []);

  return (
    <UserContext.Provider value={user}>
      {/* Other components */}
    </UserContext.Provider>
  );
}

function UserProfile() {
  const user = useContext(UserContext);

  return <p>Hello, {user.username}</p>;
}
```

### Ek Hook'lar

**4. useReducer**

`useReducer`, gelişmiş state yönetimi için kullanılan bir hook'tur. Redux kalıbını izleyerek bir sonraki state'i hesaplayan reducer fonksiyonunu tetikleyen action'lar dispatch etmenizi sağlar.

![Redux kalıbı](https://www.ozanbatuhankurucu.com/images/redux-pattern.webp)

```
import React, { useReducer } from 'react';

function countReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
}

function Counter() {
  const [count, dispatch] = useReducer(countReducer, 0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}
```

**5. useCallback**

Bir React component'i içinde tanımlanan fonksiyonlar her render'da yeniden oluşturulur. `useCallback`, fonksiyonları memoize ederek gereksiz yere yeniden oluşturulmalarını önlemeye yardımcı olur.

```
const alertCounter = useCallback(() => {
  alert(`Counter is set to: ${count}`);
}, [count]);
```

**6. useMemo**

`useMemo`, maliyetli hesaplamaların sonucunu cache'leyerek ve yalnızca belirtilen dependency'ler değiştiğinde yeniden hesaplayarak bu işlemleri optimize eder.

```
import React, { useMemo, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const computation = useMemo(() => expensiveComputation(count), [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>Computation: {computation}</p>
    </div>
  );
}
```

**7. useRef**

`useRef` hook'u React'te kendine özgü bir amaca hizmet eder. Render'lar arasında aynı referansı koruyan mutable bir nesne oluşturmanızı sağlar. `useRef` ile oluşturulan mutable nesnelerdeki değişikliklerin yeniden render'ı tetiklemeyeceğini unutmamak önemlidir.

**Yaygın Kullanım Alanı: Imperative DOM Erişimi**

`useRef`in başlıca kullanım alanlarından biri DOM element'lerine imperative biçimde erişmektir. İşte bir örnek:

```
import React, { useRef } from 'react';

function TextInputWithFocusButton() {
  const inputEl = useRef(null);

  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```

Bu örnekte `inputEl` ref'i, input element'ine erişmek ve butona tıklandığında programatik olarak ona focus vermek için kullanılır.

**Veri Saklamayla İlgili Uyarı**

`useRef` kullanırken yapılan yaygın hatalardan biri, onu component içinde veri saklamak için kullanmaya çalışmaktır. Bir `useRef` nesnesini değiştirdiğinizde yeniden render'ın tetiklenmediğini unutmayın. Bunu gösteren bir örnek:

```
import React, { useRef } from 'react';

function App() {
  const count = useRef(0);

  return (
    <div>
      <p>You clicked {count.current} times</p>
      <button onClick={() => count.current++}>
        Click me
      </button>
    </div>
  );
}
// Don't use useRef for data storage
```

Bu kod parçasında `count` güncellense de component'in yeniden render edilmesine yol açmaz. Yeniden render'ı tetiklemesi gereken verileri saklayıp güncellemeniz gerekiyorsa `useState` veya `useReducer` daha uygun seçeneklerdir.

**8. useImperativeHandle**

`useImperativeHandle` daha az kullanılan bir hook'tur ancak belirli senaryolarda yararlı olabilir. Bir component ref ile kullanıldığında dışarıya açılan değeri özelleştirmenizi sağlar. Genellikle parent component'e daha kontrollü veya sınırlı bir API sunmanız gerektiğinde kullanılır.

**Örnek: Dışarıya Açılan Metotları Özelleştirme**

Aşağıdaki örnekte child component'ten bir `setState` metodunu dışarıya açmak için `useImperativeHandle` kullanılır. Bu metot, parent component'in child'ın state'iyle etkileşime girmesini sağlar.

```
import React, { useState, forwardRef, useImperativeHandle, useRef } from 'react';

const Child = forwardRef((props, ref) => {
  const [count, setCount] = useState(10);

  // Expose the `setState` method via `useImperativeHandle`
  useImperativeHandle(ref, () => ({
    setState: setCount,
  }));

  return <p>{`Count: ${count}`}</p>;
});

function App() {
  const ref = useRef(null);

  return (
    <div>
      <button onClick={() => ref?.current?.setState(0)}>Clear</button>
      <Child ref={ref} />
    </div>
  );
}
```

Bu örnekte `Child` component'i, `useImperativeHandle` aracılığıyla bir `setState` metodunu dışarıya açar. Böylece parent component (`App`), "Clear" butonuna tıklandığında child'ın state'ini sıfırlayabilir.

**9. useLayoutEffect**

`useLayoutEffect` hook'u bazı yönlerden `useEffect`e benzer, ancak kritik bir farkı vardır. `useEffect`, render ekrana commit edildikten sonra çalışırken `useLayoutEffect`, render'dan sonra fakat tarayıcının paint aşamasından önce çalışır. Bu, React'in ekranı güncellemeden önce `useLayoutEffect` fonksiyonunun tamamlanmasını beklediği anlamına gelir; dolayısıyla görsel güncellemeler gerçekleşmeden önce DOM ile etkileşim gerektiren görevler için uygundur.

**10. useDebugValue**

`useDebugValue`, custom hook'larda debugging için kullanılan bir hook'tur. Özellikle React Developer Tools ile incelemek istediğiniz karmaşık custom hook'larla çalışırken kullanışlıdır.

Aşağıdaki örnekte custom `useData` hook'unun state'i hakkında bilgi sağlamak için `useDebugValue` kullanılır:

```
import React, { useDebugValue, useEffect, useState } from 'react';

const fetchData = () => new Promise((res) => res('data'));

function useData() {
  const [value, setValue] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchData()
      .then(setValue)
      .catch((err) => setError(err.message));
  }, []);

  // Use `useDebugValue` to provide debugging information
  useDebugValue({ value: value ?? 'loading...', error });

  return value;
}

function App() {
  const data = useData();

  return (
    <div className="App">
      {data}
    </div>
  );
}
```

Bu örnekte `useDebugValue`, custom hook'un state'i hakkında bilgi sunarak hook'un davranışını debug etmeyi ve anlamayı kolaylaştırır.

### Sonuç

Bu gelişmiş yerleşik hook'lar, güçlü ve verimli React component'leri oluşturmak için kullanabileceğiniz araçları genişletir. Temel hook'lar kadar sık kullanılmasalar da imperative DOM manipülasyonu, dışarıya açılan metotlar üzerinde ayrıntılı kontrol ve side effect'lerin zamanlamasını hassas biçimde ayarlama gibi belirli kullanım alanlarında paha biçilmezdirler. React deneyiminiz arttıkça bu hook'ların değerini ve yüksek kaliteli uygulamalar geliştirmedeki rollerini daha iyi anlayacaksınız.
