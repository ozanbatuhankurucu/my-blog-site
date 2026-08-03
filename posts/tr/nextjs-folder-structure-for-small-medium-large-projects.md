---
title: 'Next.js Klasör Yapısı (Bölüm 1): Küçük, Orta ve Büyük Projeler İçin Düzenler'
description: "Büyüyen Next.js (App Router) projelerini yapılandırmaya yönelik pratik rehberin 1. bölümü. Temel ilkeleri, App Router özel dosyalarını ve küçük prototipler, orta ölçekli SaaS uygulamaları ve büyük kurumsal codebase'ler için somut klasör yapılarını öğrenin."
---

Klasör yapısı, frontend mimarisinin en çok göz ardı edilen parçalarından biridir. Tarayıcıya tek bir byte göndermez; buna rağmen feature geliştirme hızınızı, yeni developer'ların projeye ne kadar kolay adapte olduğunu ve bug'ların ne kadar hızlı bulunabildiğini sessizce şekillendirir. Routing, Server Components, Client Components ve veri getirme işlemlerinin aynı ağaçta yer aldığı bir Next.js uygulamasında doğru yapıyı seçmek daha da önemli hâle gelir.

Evrensel olarak "en iyi" klasör yapısı yoktur. Doğru cevap projenin büyüklüğüne, ekibin boyutuna ve codebase'in ne kadar süre kullanılmasının beklendiğine bağlıdır. Bu yazıda bir Next.js (App Router) projesinin klasör yapısının küçük bir prototipten büyük bir kurumsal uygulamaya doğru nasıl gelişmesi gerektiğini ve bu süreçte her seçime hangi ilkelerin yön vermesi gerektiğini inceleyeceğiz.

> Bu yazı, iki bölümlük bir serinin **1. Bölümüdür**. Burada ilkeleri ve her ölçek için somut klasör yapılarını ele alıyoruz. [2. Bölüm](/tr/posts/nextjs-folder-structure-enforcing-boundaries-and-scaling), büyük bir yapıyı sağlıklı tutmaya odaklanarak kaldığımız yerden devam ediyor: sınırları uygulama, state organizasyonu, monorepo'lar, adlandırma kuralları, yaygın hatalar ve geçiş yolu.

## Klasör Yapısı Neden Önemlidir?

Örneklere geçmeden önce iyi bir klasör yapısının size ne sağlaması gerektiğini açıkça belirtmekte fayda var:

- **Bulunabilirlik:** Yeni bir developer, arama yapmadan bir dosyanın nerede olduğunu tahmin edebilmelidir.
- **Değişikliklerin aynı yerde kalması:** İlişkili kodlar birbirine yakın olmalı; böylece bir feature değişikliği tek bir yeri etkilemelidir.
- **Net sahiplik:** Module'ler ve feature'lar doğal biçimde ekiplere veya domain'lere karşılık gelmelidir.
- **Öngörülebilir ölçeklendirme:** Onuncu feature'ı eklemek, ikinciyi eklemekten daha zor olmamalıdır.
- **Düşük coupling, yüksek cohesion:** Bir klasördeki dosyalar birbiriyle ilişkili olmalı; klasörler birbirine mümkün olduğunca az bağımlı olmalıdır.

Mevcut yapınız bu özelliklerden herhangi birini zorlaştırıyorsa refactor sinyali budur; dosya sayısı değil.

## Her Ölçekte Geçerli Temel İlkeler

Projenizde 10 dosya da olsa 10.000 dosya da olsa şu ilkeler geçerlidir:

### 1. Colocation, Centralization'dan Daha İyidir

Dosyaları kullanıldıkları yere koyun. Yalnızca tek bir route'un kullandığı component, global `components/` klasöründe değil o route'un yanında bulunmalıdır. Yalnızca gerçekten paylaşılanları merkezi hâle getirin.

### 2. Belirli Bir Büyüklükten Sonra Type-First Değil Feature-First

Küçük projelerde türe göre organizasyon (`components/`, `hooks/`, `utils/`) uygundur. Proje büyüdükçe **feature'a göre** organizasyon (`features/billing/`, `features/auth/`) çok daha iyi ölçeklenir; çünkü çoğu değişiklik tek bir feature ile sınırlıdır.

### 3. Tek Bir Doğruluk Kaynağı

Paralel implementasyonlardan kaçının. Tek bir `Button`, tek bir `useUser`, tek bir `formatDate`. Tekrarlanan yapılar, codebase'in tutarlılığını bozmanın en hızlı yoludur.

### 4. Server/Client Sınırına Saygı Gösterin

App Router'da Server Components ve Client Components çok farklı yeteneklere sahiptir. Bu sınırı açık hâle getirin: client dosyalarını net biçimde adlandırın, gerçekten ihtiyaç duyan component'lerin en üstünde `"use client"` tutun ve yalnızca tarayıcıda çalışan kodların server module'lerine sızmasına izin vermeyin.

### 5. Katedrali Önceden İnşa Etmeyin

Basit başlayın. Klasörleri yalnızca onlara sahip olmamanın yarattığı zorluk ortaya çıktığında üst seviyeye taşıyın. Çok erken yapı eklemek, okuyuculara yardımcı olmaktan çok kafalarını karıştıran boş kategoriler oluşturur.

## Yapı Taşları: App Router Özel Dosyaları

Ölçekten söz etmeden önce `app/` dizininin kullandığı dili bilmeniz gerekir. Next.js, küçük bir dosya adı kümesine özel anlam yükler ve bunların her biri içinde bulunduğu klasör (route segment) kapsamında çalışır. Bunları anlamak, `app/` yapısını sade ve öngörülebilir tutmanızı sağlar.

| Dosya           | Amaç                                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------------------ |
| `page.tsx`      | Bir route'a özgü UI. Bir segment yalnızca bu dosyaya sahipse dışarıdan route olarak erişilebilir.             |
| `layout.tsx`    | Bir segment'i ve tüm child'larını saran ortak UI; navigation sırasında state'i korur.                         |
| `template.tsx`  | Layout gibidir ancak her navigation'da yeniden mount edilir (giriş animasyonları için kullanışlıdır).         |
| `loading.tsx`   | Segment stream edilirken Suspense boundary üzerinden gösterilen anlık loading UI.                            |
| `error.tsx`     | Segment ve child'ları için Client Component error boundary.                                                  |
| `not-found.tsx` | `notFound()` çağrıldığında veya eşleşmeyen bir URL'e gidildiğinde render edilen UI.                           |
| `route.ts`      | Server-side API endpoint'i (Route Handler). Aynı segment'te `page.tsx` ile birlikte bulunamaz.                |
| `default.tsx`   | Eşleşmeyen bir parallel route slot'u için fallback UI.                                                       |
| `middleware.ts` | Request tamamlanmadan önce edge'de çalışır. `app/` içinde değil, proje root'unda (veya `src/` içinde) bulunur. |

Temel zihinsel model şudur: **routing ile ilgili konular `app/` içinde yer alır, neredeyse başka hiçbir şey almaz.** İyi yapılandırılmış bir proje; layout'ları birleştirmek, `loading`/`error` boundary'lerini tanımlamak ve sayfaları feature koduna bağlamak için `app/` kullanır; gerçek UI ve mantık ise bunun dışında yaşar. Yazının geri kalanında bu dosyalardan yararlanacağız.

## Küçük Ölçekli Next.js Projesi

**Kullanım alanı:** Kişisel bloglar, landing page'ler, pazarlama siteleri, prototipler, hackathon projeleri.

Bu ölçekte birkaç route, küçük bir ortak component kümesi ve belki birkaç utility'niz vardır. Varsayılan Next.js düzeni fazlasıyla yeterlidir.

```
my-app/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── about/
│   │   └── page.tsx
│   └── blog/
│       ├── page.tsx
│       └── [slug]/
│           └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── PostCard.tsx
├── lib/
│   └── posts.ts
├── public/
│   └── images/
├── styles/
│   └── globals.css
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

### Hangi Kod Nerede Yer Alır?

- `app/` — yalnızca route'lar. Her URL segment'i için bir klasör.
- `components/` — ortak UI component'lerinin düz listesi.
- `lib/` — pure function'lar, veri erişimi (ör. markdown dosyalarını okuma), formatlama helper'ları.
- `public/` — olduğu gibi sunulan static asset'ler.
- `styles/` — global stil dosyaları ve Tailwind entry point'i.

### Bu Ölçekte Kaçınılması Gerekenler

- Henüz `features/`, `domain/` veya `infrastructure/` klasörleri eklemeyin. Bunlar boş ya da neredeyse boş olur ve gürültü yaratır.
- En az birkaç düzine component'iniz olana kadar `components/` klasörünü `ui/`, `shared/` ve `layout/` olarak ayırmayın.
- Gerçek bir nedeniniz yoksa state management kütüphanesi, custom hook klasörü veya `services/` katmanı eklemeyin.

Proje hiçbir zaman bu ölçeğin ötesine geçmezse korumanız gereken yapı budur.

### Pratikte Colocation

En küçük ölçekte bile bir alışkanlık anında karşılığını verir: bir component'le ilişkili dosyaları component'in yanında tutun. Component'in test'leri, story'leri ve stil dosyaları repository'nin öbür tarafındaki paralel bir `__tests__/` ağacında değil, component'in yanında yer almalıdır.

```
components/
└── PostCard/
    ├── PostCard.tsx
    ├── PostCard.test.tsx
    ├── PostCard.stories.tsx
    └── index.ts
```

Component'i sildiğinizde veya taşıdığınızda onunla ilgili her şey tek bir birim olarak hareket eder. `index.ts`, import'ların temiz kalması için component'i yeniden export eder (`import { PostCard } from '@/components/PostCard'`). Bu "klasör olarak component" pattern'ı, üç ölçeğin tamamında kullanılabilen en güçlü kuraldır.

## Orta Ölçekli Next.js Projesi

**Kullanım alanı:** SaaS dashboard'ları, birden fazla bölümlü pazarlama + ürün uygulamaları, internal tool'lar, e-ticaret siteleri.

Artık authenticated alanlarınız, herkese açık pazarlama sayfalarınız, gerçek bir API katmanınız, validation içeren form'larınız ve muhtemelen ortak design system primitive'leriniz vardır. Düz yapı zorlanmaya başlar. Genellikle route group'lar, daha zengin bir `lib/` ve UI primitive'leriyle feature component'leri arasında daha net bir ayrım eklersiniz.

```
my-app/
├── app/
│   ├── (marketing)/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── pricing/
│   │   │   └── page.tsx
│   │   └── blog/
│   │       └── page.tsx
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   └── register/
│   │       └── page.tsx
│   ├── (app)/
│   │   ├── layout.tsx
│   │   ├── dashboard/
│   │   │   ├── page.tsx
│   │   │   ├── loading.tsx
│   │   │   ├── error.tsx
│   │   │   └── _components/
│   │   │       └── DashboardStats.tsx
│   │   ├── settings/
│   │   │   ├── page.tsx
│   │   │   ├── actions.ts
│   │   │   └── _components/
│   │   │       └── ProfileForm.tsx
│   │   └── billing/
│   │       └── page.tsx
│   ├── api/
│   │   └── webhooks/
│   │       └── stripe/
│   │           └── route.ts
│   ├── providers.tsx
│   ├── layout.tsx
│   └── not-found.tsx
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Modal.tsx
│   │   └── Card.tsx
│   └── shared/
│       ├── Header.tsx
│       ├── Sidebar.tsx
│       └── Footer.tsx
├── lib/
│   ├── api/
│   │   ├── client.ts
│   │   └── endpoints.ts
│   ├── hooks/
│   │   ├── useUser.ts
│   │   └── useDebounce.ts
│   ├── utils/
│   │   ├── format.ts
│   │   └── cn.ts
│   └── validation/
│       └── schemas.ts
├── types/
│   ├── api.ts
│   └── domain.ts
├── constants/
│   └── routes.ts
├── config/
│   └── site.ts
├── public/
├── styles/
└── ...
```

### Dikkat Edilmesi Gereken Temel Pattern'lar

- **Route group'lar** (`(marketing)`, `(auth)`, `(app)`), URL'i etkilemeden bir bölüm genelinde ortak layout kullanmanızı sağlar. Herkese açık pazarlama sitesi, auth ekranları ve authenticated ürünün her biri kendi root layout'una sahip olabilir.
- Başında `_` bulunan **private klasörler** (`_components/` gibi) router tarafından yok sayılır. Bu, route'a özgü component'leri route olarak dışarıya açmadan aynı yerde tutmanın App Router'a özgü yoludur.
- **`components/ui/` ve `components/shared/` ayrımı** — `ui/`, design system primitive'lerini (butonlar, input'lar, modal'lar); `shared/` ise uygulamaya özgü, birleşik component'leri (header'lar, sidebar'lar) içerir.
- **`lib/` sorumluluğa göre ayrılır** — API client, hook'lar, utility'ler, validation schema'ları. Böylece sonunda ilgisiz 40 fonksiyonu barındıran korkutucu "god file" `utils.ts` yapısı önlenir.
- **`types/`, `constants/`, `config/`**, kendi üst seviye klasörlerini haklı çıkaracak kadar farklı alanları etkileyen öğeniz olduğunda ayrı klasörlere dönüşür.

### Server ve Client Components

Bu ölçekte server/client ayrımı gerçek bir mimari konu hâline gelir. İyi işleyen birkaç kural:

- Varsayılan olarak Server Components kullanın. `"use client"`ı yalnızca state, effect veya browser API'lerine ihtiyaç duyduğunuzda ekleyin.
- Client Components'ı küçük ve leaf benzeri tutun. Bunları tüm sayfanın değil, interaktif bölümün etrafına sarın.
- Veri getirme işlemini route'a mümkün olduğunca yakın bir yerde (page veya layout Server Component'inde) yapın; ardından plain data'yı Client Components'a aktarın.
- Server'a özgü module'leri (database client'ları, Node API'leri) Client Components'tan import etmekten kaçının. Bu module'lerin en üstündeki `server-only` import'u sızıntıları yakalamanıza yardımcı olur.

`server-only` paketi, yanlışlıkla yapılan bir import'u runtime güvenlik açığı yerine build-time hatasına dönüştürür:

```typescript
// lib/api/users.ts
import 'server-only'

import { db } from '@/lib/db'

export async function getUserById(id: string) {
  return db.user.findUnique({ where: { id } })
}
```

Herhangi bir Client Component bu dosyayı import ederse build başarısız olur. Ters durum için buna karşılık gelen bir `client-only` paketi vardır.

### Veri Getirme ve Mutation'lar Nerede Yer Alır?

App Router, backend'inizle iletişim kurmak için iki first-class yöntem sunar ve her birinin doğal bir yeri vardır:

- **Read işlemleri** Server Components içinde gerçekleşir. Gerçek query mantığını bir data access module'üne (bu ölçekte `lib/api/`, büyük ölçekteyse feature'ın `api/` klasörü) yerleştirin ve page'den çağırın. Test edilebilir ve cache'lenebilir kalmaları için `fetch`/ORM çağrılarını component'lerin dışında tutun.
- **Write işlemleri** Server Actions içinde gerçekleşir. Bunları kullanan route'un yanındaki bir `actions.ts` dosyasında veya sahibi olan feature'ın içinde aynı yerde tutun.

```typescript
// app/(app)/settings/actions.ts
'use server'

import { revalidatePath } from 'next/cache'
import { updateProfileSchema } from '@/lib/validation/schemas'
import { updateProfile } from '@/lib/api/users'

export async function saveProfile(formData: FormData) {
  const data = updateProfileSchema.parse(Object.fromEntries(formData))
  await updateProfile(data)
  revalidatePath('/settings')
}
```

Temel kural şudur: Bir component, raw `fetch` veya SQL string'i değil, iyi adlandırılmış bir fonksiyonu (`getUserById`, `saveProfile`) çağırmalıdır. Bu tek sınır, veri katmanınızın değiştirilebilir ve component'lerinizin sade kalmasını sağlar.

## Büyük Ölçekli Next.js Projesi

**Kullanım alanı:** Kurumsal uygulamalar, birden fazla ekibin çalıştığı ürünler, uzun ömürlü platformlar, çok sayıda bounded context'e (billing, identity, search, reporting, admin vb.) sahip uygulamalar.

Bu boyutta type tabanlı klasörler ölçeklenemez. Codebase, herkesin her şeyi bilemeyeceği kadar büyüktür; bu nedenle yapı, üst seviyede teknik katmanlar yerine **business domain'leri** yansıtmalıdır. Genellikle her feature içinde **katmanlı** bir yaklaşımla birleştirilen **feature tabanlı** bir organizasyon kullanılır.

```
my-app/
├── src/
│   ├── app/
│   │   ├── (marketing)/
│   │   ├── (auth)/
│   │   ├── (app)/
│   │   │   ├── layout.tsx
│   │   │   ├── @sidebar/
│   │   │   │   └── default.tsx
│   │   │   ├── @modal/
│   │   │   │   └── default.tsx
│   │   │   ├── billing/
│   │   │   │   ├── page.tsx
│   │   │   │   └── invoices/
│   │   │   │       ├── page.tsx
│   │   │   │       └── [id]/
│   │   │   │           └── page.tsx
│   │   │   └── reporting/
│   │   │       └── page.tsx
│   │   └── api/
│   ├── features/
│   │   ├── billing/
│   │   │   ├── components/
│   │   │   │   ├── InvoiceTable.tsx
│   │   │   │   └── PlanCard.tsx
│   │   │   ├── hooks/
│   │   │   │   └── useInvoices.ts
│   │   │   ├── api/
│   │   │   │   └── invoices.ts
│   │   │   ├── domain/
│   │   │   │   ├── types.ts
│   │   │   │   └── pricing.ts
│   │   │   ├── utils/
│   │   │   │   └── formatAmount.ts
│   │   │   ├── tests/
│   │   │   │   └── pricing.test.ts
│   │   │   └── index.ts
│   │   ├── auth/
│   │   ├── reporting/
│   │   ├── search/
│   │   └── admin/
│   ├── shared/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   └── Modal.tsx
│   │   ├── hooks/
│   │   │   └── useMediaQuery.ts
│   │   ├── utils/
│   │   │   └── cn.ts
│   │   └── types/
│   │       └── common.ts
│   ├── infrastructure/
│   │   ├── http/
│   │   │   └── client.ts
│   │   ├── auth/
│   │   │   └── session.ts
│   │   ├── analytics/
│   │   │   └── tracker.ts
│   │   └── logging/
│   │       └── logger.ts
│   ├── config/
│   │   ├── env.ts
│   │   ├── site.ts
│   │   └── feature-flags.ts
│   └── styles/
├── public/
├── tests/
│   └── e2e/
└── ...
```

### Her Feature İçindeki Katmanlı Görünüm

Bir feature klasörü esasen kendi başına küçük bir uygulamadır. Onu dört katmanlı düşünmek yararlı bir zihinsel model sunar:

- **Presentation** — component'ler, page'ler ve UI mantığı (`components/`).
- **Application** — hook'lar, view model'ler ve use case orchestration (`hooks/`).
- **Domain** — type'lar, business rule'lar, pure logic (`domain/`).
- **Infrastructure** — o feature için API client'ları ve adapter'lar (`api/`).

Önemli kural **dependency'lerin yönüdür**: Presentation application'a, application domain'e bağımlıdır; infrastructure ise sınırlardan sisteme bağlanır. Domain kodu React, Next.js veya HTTP client'larını asla import etmemelidir. Bu yaklaşım her feature'ın temelini kolayca test edilebilir ve taşınabilir kılar.

### Route Group'lar, Parallel Route'lar ve Intercepting Route'lar

App Router, büyük ölçekte fayda sağlayan çeşitli routing primitive'leri sunar:

- **Route group'lar** (`(app)`, `(marketing)`) — URL'leri etkilemeden ortak layout kullanır.
- **Parallel route'lar** (`@sidebar`, `@modal`) — tek bir layout içinde birden fazla bağımsız slot'u render eder. Kalıcı sidebar'lara ve global modal'lara sahip dashboard'lar için kullanışlıdır.
- **Intercepting route'lar** (`(.)photos/[id]`) — bir route'u başka bir route'un layout'u içinde gösterir (örneğin bir liste üzerinde detail view'ı modal olarak açmak).

`app/` yapısını sade tutmak için bunları kullanın: `app/` çoğunlukla layout ve page'leri koordine etmeli, gerçek iş ise `features/` içinde yer almalıdır.

### Ortak Kod: `shared/` ve `features/` Ayrımı

Yaygın bir hata, yüzlerce dosyaya ulaşana kadar tek bir `components/` klasörünü büyütmeye devam etmektir. Büyük ölçekte bunu açıkça ayırın:

- `shared/ui/` — birçok feature tarafından kullanılan design system primitive'leri.
- `shared/hooks/`, `shared/utils/`, `shared/types/` — genel ve feature'dan bağımsız helper'lar.
- `features/<feature>/` — bir business domain'e özgü her şey.

Bir kod parçası yalnızca tek bir feature tarafından kullanılıyorsa `shared/` içine ait değildir. Öğeleri ancak en az iki feature ihtiyaç duyduğunda `shared/` içine taşıyın.

## 2. Bölümde Devam Ediyor

Artık her ölçek için yapısal plana sahipsiniz: ilkeler, App Router özel dosyaları ve küçük, orta ve büyük projeler için somut klasör düzenleri. Ancak büyük bir yapı tanımlamak kolay kısımdır; zor olan, birden fazla kişi ve ekip her gün bu yapıda çalışırken onu sağlıklı tutmaktır.

Sonraki yazı tam olarak bunu ele alıyor. **[2. Bölüm: Sınırları Uygulama, State ve Ölçeklendirme](/tr/posts/nextjs-folder-structure-enforcing-boundaries-and-scaling)** ile şu konulardan devam ediyoruz:

- Her feature'a, iç detaylarını private tutacak bir public API vermek.
- Mimarinizin uygulanabilir sınırlara dönüşmesini sağlayan path alias'ları ve lint kuralları.
- State management ve provider'ların nerede yer alması gerektiği.
- Birden fazla uygulama içeren ürünler için monorepo'ya ilişkin konular.
- Adlandırma kuralları ve `src/` dizini kararı.
- Yaygın hatalar, bir karar checklist'i ve ölçekler arasında somut geçiş yolu.

[2. Bölümle](/tr/posts/nextjs-folder-structure-enforcing-boundaries-and-scaling) okumaya devam edin.
