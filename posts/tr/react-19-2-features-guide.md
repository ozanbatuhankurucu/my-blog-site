---
title: "React 19.2 Güncellemesi: Yeni Özellikler ve Performans İyileştirmeleri"
description: "React 19.2 ile gelen yeni özellikleri, performans optimizasyonlarını ve SSR iyileştirmelerini keşfedin. Activity component, useEffectEvent hook, cacheSignal ve Partial Pre-rendering (PPR) hakkında bilgi edinin. Bu kapsamlı rehberle React uygulamalarınızı güncelleyin."
---

Ekim 2025'te yayımlanan React 19.2, React 19.0 ve 19.1'in ardından gelen üçüncü büyük sürümdür. Bu güncelleme; performans geliştirmelerine, geliştirici deneyimini iyileştiren yeni hook'lara ve Server-Side Rendering (SSR) optimizasyonlarına odaklanır. Bu yazıda React 19.2'nin en önemli özelliklerini ve bunları uygulamalarınıza nasıl entegre edebileceğinizi inceleyeceğiz.

## Hızlı Özet: React 19.2'nin Temel Özellikleri

React 19.2 ile sunulan en dikkat çekici özellikler şunlardır:

- **Activity Component**: Uygulamanızın belirli bölümlerini ön planda veya arka planda çalışacak şekilde yapılandırın
- **useEffectEvent Hook**: Event mantığını useEffect'ten ayırın ve gereksiz işlemleri önleyin
- **cacheSignal**: React Server Components ile cache yaşam döngüsünü yönetin
- **Performance Tracks**: Chrome DevTools'ta yeni performans analiz araçları
- **Partial Pre-rendering (PPR)**: Statik kabuğu önceden render edin, dinamik içeriği daha sonra stream edin
- **SSR İyileştirmeleri**: Web Streams ve Node Streams desteğiyle streaming performansını artırın

## Activity Component: UI Bölümlerinizi Akıllıca Yönetin

React'in yeni `<Activity />` component'i, uygulamanızı mantıksal "activity" bölümlerine ayırmanıza ve her bölümün ne zaman, nasıl çalışacağını kontrol etmenize olanak tanır.

### Activity'nin İki Temel Modu

Activity component iki farklı modda çalışabilir:

**visible**: Component ve tüm child'ları render edilir, effect'ler çalışır ve state güncellemeleri normal biçimde işlenir.

**hidden**: Component render edilir ancak child'ları gösterilmez, effect'ler unmount edilir ve state güncellemeleri arka plana ertelenir.

### Activity Component'in Pratik Kullanımı

```
import { Activity } from 'react';

export function ProductPane({ isOpen }) {
  return (
    <Activity mode={isOpen ? 'visible' : 'hidden'}>
      <Filters />
      <Results />
    </Activity>
  );
}
```

Bu yapıda `ProductPane` gizlendiğinde child component'lerinin effect'leri unmount edilir ve gereksiz API çağrıları önlenir. Sayfaya geri döndüğünüzde cache'lenmiş veriler kullanılarak anında geçiş sağlanır.

### Activity Kullanmanın Avantajları

- **Anında Geçişler**: Sekmeler arasında geçiş yaparken state korunur, yeniden başlatılmaz
- **Arka Planda Hazırlık**: Gizli component'ler gerekli işlemleri arka planda gerçekleştirebilir
- **Performans**: Gereksiz render ve effect'ler önlenir

## useEffectEvent: Event Mantığınızı Saf Tutun

`useEffectEvent` hook, event tabanlı mantığınızı `useEffect`'ten ayırmanıza olanak tanır. Böylece dependency array'inizi kontrol altında tutarken her zaman en güncel prop veya state değerlerine erişebilirsiniz.

### useEffectEvent Neden Önemlidir?

Geleneksel `useEffect` kullanılırken prop veya state dependency'lerindeki değişiklikler effect'inizi yeniden çalıştırabilir. Bazen kodun yalnızca belirli event'lere yanıt olarak çalışmasını istersiniz.

```
import { useEffectEvent } from 'react';

function ChatRoom({ roomId, theme }) {
  const onConnected = useEffectEvent(() => {
    showNotification('Connected', theme);
  });

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.on('connected', onConnected);
    
    return () => connection.disconnect();
  }, [roomId]); // theme is not here, but onConnected always sees the latest theme
}
```

Bu örnekte `theme` değiştiğinde bağlantı yeniden kurulmaz; yalnızca bildirim yeni tema ile gösterilir.

### useEffectEvent İçin Temel Kurallar

- Event fonksiyonları closure'larındaki reactive değerlere erişebilir
- Effect event'lerini effect dependency'lerinize eklemeyin (linter bunu zorunlu kılar)
- Event fonksiyonları component'lerin içinden çağrılabilir veya effect'ler tarafından kullanılabilir

## cacheSignal: RSC ile Cache Yönetimi

React Server Components kullanırken `cacheSignal` fonksiyonu cache yaşam döngüsü üzerinde kontrol sağlar. Sunucunun, cache'lenmiş bir işleme artık ihtiyaç duyulmadığını belirtmesine olanak tanır.

```
import { cache, cacheSignal } from 'react';

const dedupedFetch = cache(fetch);

async function Component() {
  const { signal } = cacheSignal();
  await dedupedFetch(url, { signal: cacheSignal() });
}
```

Bu özellik özellikle CDN ve streaming hydration senaryolarında değerlidir. Ağ isteklerini iptal edebilir veya özel async görevleri temizleyebilirsiniz.

## Performance Tracks: Ayrıntılı Performans Analizi

Chrome DevTools'taki yeni "Performance Tracks" özelliği, React'in dahili olarak nasıl çalıştığını görselleştirmenize yardımcı olur:

### React Scheduler Track
- Görev önceliği seviyeleri ("blocking", "transition")
- Render işleminin ne zaman ve neden başladığı
- Hangi React component'inin hangi işlemi tetiklediği

### React Components Track
- Component'lerin ne zaman mount/unmount edildiği
- Effect'lerin ne zaman çalıştığı
- State güncellemelerinin nereden kaynaklandığı

Bu araçlar, uygulamanızın neden yavaş hissettirdiğini keşfetmek için mükemmel bir başlangıç noktasıdır.

## Partial Pre-rendering (PPR): SSR'ı Bir Üst Seviyeye Taşıyın

React DOM, statik bir kabuğu önceden render etmek ve daha sonra devam ettirmek için yeni primitive'ler sunar; CDN'ler ve streaming hydration için idealdir.

### Pre-render

```
const { prelude, postponed } = await prerender(<App />, {
  signal: controller.signal,
});

await savePostponedState(postponed);
```

Pre-render, uygulamanızın statik kabuğunu yakalar ve ertelenen state'i daha sonra devam ettirmek üzere kaydeder.

### SSR Stream'ine Devam Etme (Web Streams)

```
const postponed = await getPostponedState(request);
const resumeStream = await resumeAndPrerender(<App />, postponed);

// stream to client
```

Kaydedilmiş ertelenen state'i alın ve uygulamayı bir Web Stream olarak client'a göndermeye devam edin.

### Devam Etme + Statik HTML Üretme (SSG)

```
const postponed = await getPostponedState(request);
const { prelude } = await resumeAndPrerender(<App />, postponed);

// upload prelude to CDN
```

Devam ettirilen render'dan statik HTML üretin ve optimum performans için bir CDN'e yükleyin.

### İncelenmesi Gereken API'ler

**Web Streams için:**
- `react-dom/server: resume` (Web Streams), `resumeToPipeableStream` (Node Streams)

**Statik Üretim için:**
- `react-dom/static: resumeAndPrerender` (Web Streams), `resumeAndPrerendererToNodeStream` (Node Streams)

**Önemli Not**: prerender API'leri artık resume API'lerine ileteceğiniz bir **postpone state** döndürüyor.

## Dikkat Çeken Değişiklikler

### 1. Suspense Boundary Batching (SSR)

Streaming SSR'da içeriklerin birlikte görünmesi için açığa çıkarma işlemleri bir miktar geciktirilerek client ve SSR davranışları uyumlu hâle getirilir.

### 2. Web Streams (Node.js)

`renderToReadableStream`, `prerender` ve `resumeAndPrerender` gibi API'ler artık Node.js'te kullanılabilir. Bu, Deno ve diğer runtime'larla uyumluluk sağlar.

**Node Tercihleri:**
- `renderToNodeStream`
- `renderToPipeableStream`
- `resumeAndPrerender`

### 3. eslint-plugin-react-hooks v6

- Flat config desteği
- React Compiler destekli öneriler
- Eski davranış için `plugin:react-hooks/recommended-legacy` kullanın

### 4. useId Prefix Değişikliği

Prefix, React 19.0'daki `_` değerinden React 19.1'de `_r_` değerine değiştirildi. Bu değişiklik, View Transition CSS selector'ları ve XML 1.0 adlandırma kurallarıyla uyumluluk sağlar.

## React 19.2 Geçiş Kontrol Listesi

React 19.2'ye başarılı bir geçiş için bu kontrol listesini izleyin:

### Uygulamalar İçin

- [ ] **Activity Component'i Benimseyin**: Sekmeleri, yan panelleri veya sonraki sayfaları önceden render edin
- [ ] **useEffectEvent'e Refactor Edin**: Event mantığının effect'lerin sürekli yeniden çalışmasına neden olduğu yerleri belirleyin
- [ ] **RSC'nizi Cache'leyin**: Ağ isteklerini `cacheSignal` ile yönetin
- [ ] **Performance Tracks ile Profil Çıkarın**: Chrome DevTools'ta hangi işlemlerin "blocking" olduğunu kontrol edin
- [ ] **SSR Pipeline'ınızı Yapılandırın**: Web Streams ile Node Streams arasında seçim yapın

### Araçlar İçin

- [ ] **ESLint Kurallarını Güncelleyin**: `eslint-plugin-react-hooks@6.1` veya sonraki bir sürümü yükleyip `recommended` ya da `recommended-legacy` preset'lerinden birini seçin
- [ ] **useId CSS Selector'larını Doğrulayın**: Prefix'lerin `_r_` formatında olduğundan emin olun

## Sonuç

React 19.2, performans ve geliştirici deneyimi açısından önemli bir ilerlemeyi temsil ediyor. Activity component akıllı UI bölümlemeyi mümkün kılıyor, useEffectEvent event mantığını saf tutuyor ve Partial Pre-rendering SSR'ı optimize ederek React uygulamalarını daha hızlı ve akıcı hâle getiriyor.

Bu yeni özellikleri uygulamalarınıza kademeli olarak entegre ederek modern web uygulamalarının performans ve kullanıcı deneyimi beklentilerini karşılayabilirsiniz. React 19.2 ile web uygulamalarının geleceği daha da iyi performans, daha düşük bant genişliği kullanımı ve kesintisiz kullanıcı etkileşimleri vadediyor.
