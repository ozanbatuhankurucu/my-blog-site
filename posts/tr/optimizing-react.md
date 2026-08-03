---
title: "React Uygulamalarını Optimize Etme: Re-render Sayısını Azaltma"
description: "Büyük ölçekli uygulamalarda bile son derece akıcı bir kullanıcı deneyimi sağlamak için React uygulamalarındaki gereksiz re-render işlemlerini azaltmaya yönelik çeşitli strateji ve teknikleri inceleyin. Basit memoization tekniklerinden immutable veri yapılarını benimsemek gibi daha gelişmiş stratejilere kadar ihtiyaç duyduğunuz her şeyi bu yazıda bulabilirsiniz."
---

Dinamik kullanıcı arayüzleri geliştirmek için kullanılan güçlü bir kütüphane olan React, verimli update ve re-render mekanizmalarıyla bilinir. Ancak uygulamalar karmaşıklaştıkça geliştiriciler gereksiz re-render işlemlerinden kaynaklanan performans sorunlarıyla karşılaşabilir. Rendering davranışını optimize etmek, akıcı bir kullanıcı deneyimini sürdürmek açısından kritik öneme sahiptir. Bu yazı, re-render işlemlerini azaltmak ve React uygulamalarınızın performansını artırmak için kullanabileceğiniz çeşitli teknikleri ele alıyor.

### 1. React.memo Kullanma

**React.memo**, bir component rendering'inin çıktısını memoize eden ve props değişmediği sürece gereksiz re-render işlemlerini önleyen bir higher-order component'tir.

```
const MyComponent = React.memo(function MyComponent(props) {
  // Your component code
});
```

### 2. shouldComponentUpdate Lifecycle Method'unu Uygulama

Class component'lerinde **shouldComponentUpdate**, mevcut ve sonraki props/state değerlerini karşılaştırarak component'in yeniden render edilip edilmemesi gerektiğini belirlemek için kullanılabilir.

```
class MyComponent extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.value !== this.props.value;
  }
  render() {
    // Your render code
  }
}
```

### 3. React.PureComponent'ten Kalıtım Alma

**React.PureComponent**, component'in props ve state değerleri üzerinde shallow comparison gerçekleştirir. Hiçbir şey değişmediyse re-render işlemini önler.

```
class MyComponent extends React.PureComponent {
  render() {
    // Your render code
  }
}
```

### 4. Functional Component'leri ve Hook'ları Benimseme

Functional component'ler ve hook'lar çoğu zaman daha öngörülebilir render işlemleri sağlar. Daha ileri optimizasyon için **React.memo** ile birlikte kullanılabilirler.

```
function MyComponent(props) {
  const [value, setValue] = React.useState(initialValue);
  // Your component code
}
```

### 5. React.useMemo ve React.useCallback Hook'larını Kullanma

Bu hook'lar sırasıyla değerleri ve function'ları memoize etmeye yardımcı olur; bu da gereksiz re-render işlemlerini önlemek açısından kritik olabilir.

```
function MyComponent({ list }) {
  const sortedList = React.useMemo(() => {
    return list.sort((a, b) => a - b);
  }, [list]);

  const handleClick = React.useCallback(() => {
    console.log('Item clicked');
  }, []);

  // ...
}
```

### 6. Immutable Veri Yapılarını Benimseme

Immutable veri yapıları, verilerin ne zaman değiştiğini belirlemeyi kolaylaştırarak gereksiz re-render işlemlerini önlemeye yardımcı olabilir.

### 7. Component'leri Bölme

Büyük component'leri daha küçük ve yönetilebilir parçalara ayırmak, rendering davranışını kontrol etmeye yardımcı olabilir ve daha verimli kod sağlar.

```
function List({ items }) {
  // ...
  function ListItem({ item }) {
    return <li>{item.name}</li>;
  }
}
```

### 8. Maliyetli Hesaplamaları Memoize Etme

Memoization, maliyetli hesaplamaların tekrarlanmasını önleyerek performansı optimize edebilir.

### 9. Render İçinde Inline Function Tanımlarından Kaçınma

Function'ları render method'unun dışında tanımlamak veya memoize etmek gereksiz re-render işlemlerini önleyebilir.

```
function MyComponent(props) {
  const handleClick = React.useCallback(() => {
    console.log('Button clicked');
  }, []);

  return <button onClick={handleClick}>Click me</button>;
}
```

### 10. Update'leri Gruplama

Birden fazla state update'ini gruplamak, re-render sayısını azaltabilir.

```
function MyComponent() {
  // ...
  const handleClick = () => {
    setState1(prevState => prevState + 1);
    setState2(prevState => prevState + 1);
  };

  // ...
}
```

### 11. Conditional Rendering'i Optimize Etme

Conditional rendering'in dikkatli kullanılması da gereksiz re-render işlemlerini önlemeye yardımcı olabilir.

```
function MyComponent({ shouldRender }) {
  return (
    <div>
      {shouldRender && <AnotherComponent />}
    </div>
  );
}
```

### 12. Üçüncü Taraf Kütüphanelerden Yararlanma

Redux için Reselect gibi kütüphaneler selector function'larını memoize etmeye yardımcı olarak re-render sayısını azaltabilir.

```
import { createSelector } from 'reselect';
// ...
const getFilteredItems = createSelector(
  [getItems],
  (items) => {
    return items.filter(item => item.active);
  }
);
```

### Sonuç

Rendering davranışını optimize etmek, yüksek performanslı React uygulamaları geliştirmenin kritik bir parçasıdır. Geliştiriciler bu yazıda açıklanan teknikleri bir arada kullanarak gereksiz re-render işlemlerini önemli ölçüde azaltabilir; böylece karmaşık ve büyük ölçekli uygulamalarda bile daha akıcı kullanıcı etkileşimleri ve genel olarak daha iyi bir kullanıcı deneyimi sağlayabilir. Her tekniğin kendine özgü kullanım alanları vardır ve bu stratejilerin birlikte uygulanması, React uygulamalarında rendering performansını optimize ederken en iyi sonuçları verebilir.
