---
title: 'Next.js Klasör Yapısı (Bölüm 2): Sınırları Uygulama, State ve Ölçeklendirme'
description: "Next.js klasör yapısı rehberinin 2. bölümü. Feature tabanlı bir yapı kurduktan sonra bu yapıyı sağlıklı tutmayı öğrenin: feature public API'leri, path alias'ları ve zorunlu import sınırları, state ve provider yerleşimi, monorepo'lar, adlandırma kuralları, yaygın hatalar ve ölçekler arası geçiş yolu."
---

Bu yazı, frontend mimarisi ve Next.js klasör yapısını ele alan iki bölümlük serinin **ikinci bölümüdür**. [1. Bölümde](/tr/posts/nextjs-folder-structure-for-small-medium-large-projects) temel ilkeleri, App Router özel dosyalarını ve küçük, orta ve büyük projeler için somut klasör düzenlerini ele almış; büyük ve birden fazla ekibin çalıştığı uygulamalar için feature tabanlı bir yapıyla yazıyı tamamlamıştık.

Bu yapıyı tanımlamak işin yalnızca yarısıdır. Kimsenin kurallarını uygulamadığı büyük bir klasör ağacı zamanla sessizce çürür: feature'lar birbirlerinin iç detaylarını import etmeye başlar, "global" state dağınık hâle gelir ve adlandırmalar hiçbir şeyin öngörülebilir olmadığı noktaya kadar ayrışır. Bu yazı, 1. Bölümün kaldığı yerden devam ediyor ve büyük bir Next.js codebase'ini zaman içinde sağlıklı tutan uygulamalara odaklanıyor.

> Henüz okumadıysanız [Next.js Klasör Yapısı (Bölüm 1): Küçük, Orta ve Büyük Projeler İçin Düzenler](/tr/posts/nextjs-folder-structure-for-small-medium-large-projects) ile başlayın. Aşağıdaki örnekler, orada tanıtılan feature tabanlı yapıyı esas alır.

## Her Feature'a Bir Public API Verin

Açıkça tanımlanmış bir public API'si olmayan feature klasörü yalnızca bir namespace'tir; başka bir feature'ın onun iç detaylarına erişip private olması amaçlanan dosyalara bağımlı hâle gelmesini hiçbir şey engellemez. Çözüm, feature'ın giriş kapısı görevi gören bir barrel `index.ts` dosyasıdır:

```typescript
// features/billing/index.ts
export { InvoiceTable } from './components/InvoiceTable'
export { useInvoices } from './hooks/useInvoices'
export type { Invoice, Plan } from './domain/types'
// Note: api/, utils/, and other internals are intentionally NOT exported.
```

Artık uygulamanın geri kalanı `from '@/features/billing'` ile import eder ve yalnızca sizin dışarıya açmayı seçtiklerinizi görür. Bu barrel'ın arkasındaki her şeyi tek bir consumer'ı bile bozmadan refactor edebilirsiniz. Bu, iyi tasarlanmış bir npm paketinin kullandığı encapsulation fikrinin kendi repository'nize uygulanmış hâlidir.

Bilmekte fayda olan bir nokta var: büyük barrel dosyaları aşırı kullanıldığında tree-shaking'e zarar verebilir ve istemeden circular dependency'ler oluşturabilir. Barrel'ları her alt klasörde değil, feature sınırında tutun (feature başına bir tane) ve bir feature'ın kendi içinden yine o feature'ın barrel dosyasını asla import etmeyin.

## Path Alias'ları ve Zorunlu Sınırlar

Büyük ölçekte `../../../shared/ui/Button` gibi relative import'lar okunamaz hâle gelir ve bir dosyayı her taşıdığınızda bozulur. TypeScript path alias'larını `tsconfig.json` içinde bir kez yapılandırın:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@features/*": ["./src/features/*"],
      "@shared/*": ["./src/shared/*"]
    }
  }
}
```

Ancak alias'lar tek başına yalnızca kolaylık sağlar. Asıl kazanç, mimarinizi linter'ın uygulayabildiği kurallara dönüştürmektir; böylece teslim tarihi baskısı altında bile sınırlar korunur. ESLint'in `no-restricted-imports` kuralıyla (veya `dependency-cruiser` gibi bir araçla) geçersiz dependency'lerin CI'da hata vermesini sağlayabilirsiniz:

```javascript
// eslint.config.js — forbid reaching into a feature's internals
'no-restricted-imports': ['error', {
  patterns: [{
    group: ['@features/*/*'],
    message: 'Import from a feature\'s public API (@features/x), not its internals.',
  }],
}]
```

"Feature'lar birbirlerini doğrudan import edemez", "hiçbir şey `app/` içinden import edemez" ve "`domain/` React'i import edemez" gibi kurallar, büyük bir codebase'in sessizce karmaşık ve bağımlılıklarla örülü bir yapıya dönüşmesini engeller. Uygulanmayan yapı yalnızca bir öneridir.

## State Yönetimi ve Provider'lar

Global state, klasör yapısında kafa karışıklığı yaratan klasik kaynaklardan biridir. İyi ölçeklenen bazı yönergeler:

- **Server state** (backend'inizden gelen veriler) "global state" değildir. Bunu App Router'ın caching mekanizmasıyla, client tarafında ise TanStack Query veya SWR gibi bir kütüphaneyle yönetin. API verilerini global store'a doldurmayın.
- **Gerçek anlamda global client state** (tema, mevcut kullanıcı, feature flag'ler) provider'larda yer alır. Provider'ı kendi mantığıyla aynı yerde tutun (`shared/providers/ThemeProvider.tsx`) ve bunları root `layout.tsx`in render ettiği tek bir `app/providers.tsx` Client Component'i içinde birleştirin.
- **Feature'a özgü local state** feature'ın içinde kalır. Yalnızca billing tarafından kullanılan bir Zustand store, üst seviye `store/` klasöründe değil `features/billing/store.ts` konumunda bulunur.

```tsx
// app/providers.tsx
'use client'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </QueryProvider>
  )
}
```

Bu yaklaşım, client-side context'lerin tamamını tek ve öngörülebilir bir yerde izole ederken root `layout.tsx`i Server Component olarak tutar.

## Monorepo Konusunda Dikkate Alınması Gerekenler

Çok büyük ürünlerde tek bir Next.js uygulaması eninde sonunda ortak design system, type'lar ve client'lar kullanan birden fazla uygulamaya (web, admin, pazarlama sitesi) ayrılır. Bu noktada monorepo (Turborepo veya Nx ile pnpm workspace'leri) genellikle bir sonraki adımdır:

```
repo/
├── apps/
│   ├── web/        (Next.js)
│   ├── admin/      (Next.js)
│   └── marketing/  (Next.js)
├── packages/
│   ├── ui/             (design system)
│   ├── config/         (eslint, tsconfig, tailwind presets)
│   ├── api-client/
│   └── types/
└── turbo.json
```

İlk günden bir monorepo'ya ihtiyacınız yoktur; ancak projeler arasında component veya type kopyalayıp yapıştırıyorsanız zamanı gelmiş demektir.

## Adlandırma Kuralları ve `src/` Dizini

Tutarlılık, seçtiğiniz belirli kuraldan daha önemlidir; ancak bir kural seçin ve onu lint kuralına dönüştürün. Yaygın kullanılan ve az sürtüşme yaratan bir kural seti şöyledir:

| Tür                          | Kural                    | Örnek                    |
| ---------------------------- | ------------------------ | ------------------------ |
| React component'leri         | PascalCase               | `InvoiceTable.tsx`       |
| Hook'lar                     | camelCase, `use` ön eki  | `useInvoices.ts`         |
| Utility / component dışı TS  | camelCase                | `formatAmount.ts`        |
| Route segment klasörleri     | kebab-case               | `app/reset-password/`    |
| Type'lar / interface'ler     | PascalCase               | `type Invoice = { ... }` |
| Sabitler                     | UPPER_SNAKE_CASE         | `MAX_RETRY_COUNT`        |

İki pratik karar daha:

- **Küçük ölçeği aşan her projede `src/` dizinini kullanın.** `app/`, `features/` ve `shared/` klasörlerini `src/` altına taşımak, uygulama kodunu root'u kalabalıklaştıran config dosyalarından (`next.config.js`, `tailwind.config.js`, `package.json`) temiz biçimde ayırır. Next.js bunu doğrudan destekler.
- **Component ve utility'lerde default export yerine named export'ları tercih edin.** Named export'lar yeniden adlandırmayı güvenli, autocomplete'i güvenilir ve barrel dosyalarını kolay hâle getirir. Tek istisna, Next.js'in default export gerektirdiği `page.tsx`, `layout.tsx` ve diğer özel dosyalardır.

## Yaygın Hatalar

Boyut ne olursa olsun aynı hatalar tekrar tekrar karşımıza çıkar:

- **Her şeyin atıldığı klasörler:** Birer çöplüğe dönüşen `utils/`, `helpers/` veya `common/` klasörleri. Bunları amacına göre (`format/`, `dom/`, `string/`) ayırın ya da öğeleri sahibi olan feature'a taşıyın.
- **Gereksiz derin iç içe yapı:** `components/feature/section/sub/widget/inner/`. Bir path beş seviye derindeyse klasörler yanlış işi yapıyor demektir.
- **Server ve client mantığını karıştırmak:** Bir Client Component'ten database client import etmek veya server utility'den React hook'ları kullanmak. Sınırı belirgin hâle getirin.
- **Feature'lar arası circular dependency:** A feature'ı B feature'ından, B feature'ı da A feature'ından import eder. Bu genellikle ortak bölümün `shared/` içine veya yeni bir feature'a taşınması gerektiğinin işaretidir.
- **Tutarsız adlandırma:** Aynı klasörde `userProfile.tsx`, `UserCard.tsx`, `user-settings.tsx`. Tek bir kural seçin (component'ler için PascalCase, React'te en yaygın olandır) ve bunu lint kurallarıyla uygulayın.
- **Erken abstraction:** Yalnızca tek bir `home` feature'ı içeren `features/` klasörü gürültüden ibarettir. Yapının yerini hak etmesini bekleyin.

## Basit Bir Karar Checklist'i

Projenizin bugün hangi yapıya ihtiyaç duyduğuna karar verirken bunu kullanın:

- **Küçük** — şu durumlarda seçin: bir veya iki developer, yaklaşık 20'den az route, gerçek bir domain mantığı yok, aylarla ölçülen kullanım ömrü.
- **Orta** — şu durumlarda seçin: küçük bir ekip, birden fazla bölüm (pazarlama + auth + ürün), gerçek form'lar ve API'ler, yıllarla ölçülen kullanım ömrü.
- **Büyük** — şu durumlarda seçin: birden fazla ekip, birden fazla bounded context, uzun ömürlü birkaç business domain'den fazlası veya farklı alanları etkileyen değişikliklerin acısını şimdiden hissediyorsunuz.

Kararsız kaldığınızda düşündüğünüzden bir boyut küçüğünü seçin. Bir klasörü üst seviyeye taşımak, onu silmekten çok daha kolaydır.

### Üç Ölçeğe Genel Bakış

| Boyut                  | Küçük               | Orta                                  | Büyük                                               |
| ---------------------- | ------------------- | ------------------------------------- | --------------------------------------------------- |
| Üst seviye gruplama    | Türe göre           | Türe göre, route group'larla          | Feature'a göre (`features/`)                        |
| `src/` dizini          | İsteğe bağlı        | Önerilir                              | Evet                                                |
| Component'ler          | Düz `components/`   | `ui/` + `shared/`                     | `shared/ui/` + feature başına `components/`         |
| Veri / mantık katmanı  | `lib/`              | Sorumluluğa göre ayrılmış `lib/`      | Feature başına `api/` + `domain/` + `infrastructure/` |
| Sınırların uygulanması | Gerekmez            | Path alias'ları                       | Path alias'ları + lint kuralları + feature public API'leri |
| State                  | Local / URL         | Provider'lar + server state kütüphanesi | Katmanlı: server, global ve feature'a özgü local   |
| Ekip büyüklüğü         | 1–2                 | Tek ve küçük ekip                     | Birden fazla ekip                                   |

### Yapılar Arasında Geçiş

Nadiren sıfırdan yeniden geliştirirsiniz; bunun yerine yapıyı evrimleştirirsiniz. İyi haber şu ki her adım bir yeniden yazım değil, mevcut yapıya ekleme niteliğindedir:

1. **Küçükten ortaya:** `src/` yapısını ekleyin, `app/` içine route group'lar koyun, `components/` klasörünü `ui/` ve `shared/` olarak ayırın, tek `lib/` klasörünü odaklanmış alt klasörlere bölün. Henüz hiçbir feature kodunun taşınması gerekmez.
2. **Ortadan büyüğe:** Her seferinde bir domain olacak şekilde `features/` yapısını çıkarın. Bir feature'ın component'lerini, hook'larını ve API çağrılarını `features/<name>/` içine taşıyın; bir `index.ts` public API'si ekleyin, import'ları güncelleyin ve ardından sınırı korumak için lint kuralı ekleyin. Önce en çok değişen, en fazla gürültü yaratan feature'ı taşıyın; en büyük rahatlamayı o sağlar.

Codebase'in her adımda yayınlanabilir kalması için bunu her pull request'te bir feature olacak şekilde, aşamalı olarak yapın.

## Sonuç

Next.js'te klasör yapısı bir template'i takip etmekle ilgili değildir; kodunuzun biçimini ürününüzün biçimiyle eşleştirmekle ilgilidir. [1. Bölümde](/tr/posts/nextjs-folder-structure-for-small-medium-large-projects) küçük projeler için düz bir düzenle başlayıp orta ölçekli projeler için route group'lar ve daha zengin bir `lib/` ekledik, büyük projelerdeyse feature tabanlı ve katmanlı bir mimariye geçtik. Bu bölümde, bu büyük yapının bozulmasını önlemek için gerekenleri gördük: açık feature API'leri, zorunlu import sınırları, bilinçli state yerleşimi ve tutarlı kurallar.

Aynı kurallar her ölçekte geçerlidir: birlikte değişenleri aynı yerde tutun, bağımsız değişenleri ayırın ve yapının gerçek kodun önüne geçmesine asla izin vermeyin. İyi bir klasör yapısı neredeyse görünmez olmalıdır; projeyi açtığınızda düzenlemeniz gereken bir sonraki dosyayı tam beklediğiniz yerde bulmalısınız.
