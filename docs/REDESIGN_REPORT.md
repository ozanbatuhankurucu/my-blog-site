# Blog Yeniden Tasarım Raporu

**Proje:** Ozan Batuhan Kurucu - Kişisel Blog  
**Tarih:** Ocak 2026  
**Yazar:** AI Asistanı (Claude)

---

## 📋 Özet

Bu rapor, kişisel blog sitesinin kapsamlı bir şekilde yeniden tasarlanması sürecinde yapılan tüm değişiklikleri detaylı olarak açıklamaktadır. Tasarım felsefesi olarak **"dark-first"** (koyu tema öncelikli), **"monospace-accent"** (monospace yazı tipi vurgulu) ve **"drawer"** (çekmece) etkileşim modeli benimsenmiştir.

---

## 🎨 Tasarım Sistemi

### 1. Renk Sistemi (Color Tokens)

`styles/globals.css` dosyasında tanımlanan semantik renk değişkenleri:

| Kategori | Değişken | Değer | Açıklama |
|----------|----------|-------|----------|
| **Arka Plan** | `--bg-base` | `#0a0a0b` | Ana arka plan |
| | `--bg-elevated` | `#141415` | Yükseltilmiş yüzeyler |
| | `--bg-surface` | `#1c1c1e` | Kart yüzeyleri |
| | `--bg-hover` | `#252527` | Hover durumu |
| **Metin** | `--text-primary` | `#fafafa` | Ana metin |
| | `--text-secondary` | `#a1a1a6` | İkincil metin |
| | `--text-muted` | `#6b6b70` | Soluk metin |
| **Vurgu** | `--accent` | `#f59e0b` | Ana vurgu (amber) |
| | `--accent-hover` | `#fbbf24` | Hover vurgusu |
| | `--accent-muted` | `rgba(245, 158, 11, 0.15)` | Soluk vurgu |
| **Kenarlık** | `--border-subtle` | `#2a2a2d` | İnce kenarlık |
| | `--border-default` | `#3a3a3d` | Varsayılan kenarlık |
| **Semantik** | `--success` | `#22c55e` | Başarı (yeşil) |
| | `--warning` | `#eab308` | Uyarı (sarı) |
| | `--error` | `#ef4444` | Hata (kırmızı) |

### 2. Tipografi Ölçeği

| Değişken | Değer | Kullanım |
|----------|-------|----------|
| `--text-xs` | `0.75rem` | Küçük etiketler |
| `--text-sm` | `0.875rem` | Meta bilgiler |
| `--text-base` | `1rem` | Gövde metni |
| `--text-lg` | `1.125rem` | Büyük gövde |
| `--text-xl` | `1.25rem` | Küçük başlıklar |
| `--text-2xl` | `1.5rem` | Orta başlıklar |
| `--text-3xl` | `1.875rem` | Büyük başlıklar |
| `--text-4xl` | `2.25rem` | Sayfa başlıkları |

**Yazı Tipleri:**
- **Başlıklar:** JetBrains Mono (monospace)
- **Gövde:** Geist (sans-serif)

### 3. Boşluk Ölçeği (4px tabanlı)

| Değişken | Değer |
|----------|-------|
| `--space-1` | `0.25rem` (4px) |
| `--space-2` | `0.5rem` (8px) |
| `--space-3` | `0.75rem` (12px) |
| `--space-4` | `1rem` (16px) |
| `--space-6` | `1.5rem` (24px) |
| `--space-8` | `2rem` (32px) |
| `--space-12` | `3rem` (48px) |
| `--space-16` | `4rem` (64px) |
| `--space-24` | `6rem` (96px) |

### 4. Hareket (Motion) Kuralları

| Değişken | Değer | Kullanım |
|----------|-------|----------|
| `--duration-fast` | `100ms` | Hızlı geçişler |
| `--duration-base` | `150ms` | Standart geçişler |
| `--duration-slow` | `250ms` | Yavaş animasyonlar |
| `--ease-out` | `cubic-bezier(0.33, 1, 0.68, 1)` | Çıkış easing |
| `--ease-in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` | Giriş-çıkış easing |

---

## 🧩 Bileşen Değişiklikleri

### 1. Button Bileşeni (Yeni)

**Dosya:** `components/Button.tsx`

**Özellikler:**
- **Varyantlar:** `primary`, `ghost`
- **Boyutlar:** `sm`, `md`, `lg`
- **Durumlar:** default, hover, focus, active, disabled

```tsx
<Button variant="primary" size="md">Buton Metni</Button>
<Button variant="ghost" size="sm">Hayalet Buton</Button>
```

### 2. Tag Bileşeni (Yeni)

**Dosya:** `components/Tag.tsx`

**Özellikler:**
- **Varyantlar:** `default`, `outline`, `status`
- **Boyutlar:** `sm`, `md`
- **Status Renkleri:** `success`, `warning`, `error`, `info`

```tsx
<Tag variant="default" size="sm">ReactJS</Tag>
<Tag variant="status" status="success" size="sm">Tamamlandı</Tag>
```

### 3. Drawer Bileşeni (Yeni)

**Dosya:** `components/Drawer.tsx`

**Özellikler:**
- Sağdan kayarak açılır
- `createPortal` ile DOM dışında render
- ESC tuşu ile kapatma
- Overlay tıklaması ile kapatma
- Focus yönetimi
- Body scroll kilidi

**Kullanım:**
```tsx
<Drawer isOpen={isOpen} onClose={handleClose} title="Başlık" width="480px">
  İçerik
</Drawer>
```

### 4. ArticleCard Bileşeni (Güncellendi)

**Dosya:** `components/ArticleCard.tsx`

**Değişiklikler:**
- Koyu tema renkleri uygulandı
- Kategori etiketi için Tag bileşeni entegre edildi
- Hover animasyonları eklendi
- Okuma süresi ve tarih meta bilgileri düzenlendi

### 5. ProjectCard Bileşeni (Yeniden Yazıldı)

**Dosya:** `components/ProjectCard.tsx`

**Değişiklikler:**
- Eski `Project.tsx` yerine tamamen yeni bileşen
- Status badge'i için Tag bileşeni kullanımı
- Tech stack etiketleri
- Tıklanabilir kart yapısı (drawer açma)
- Tutarlı içerik hizalaması

### 6. Header Bileşeni (Güncellendi)

**Dosya:** `components/Header.tsx`

**Değişiklikler:**
- Minimal tasarım
- `ozan.dev` metin logosu
- Koyu tema renkleri
- Mobil menü animasyonları
- Resume butonu için Button bileşeni

### 7. Footer Bileşeni (Güncellendi)

**Dosya:** `components/Footer.tsx`

**Değişiklikler:**
- Kategori bağlantıları kaldırıldı
- Sadeleştirilmiş navigasyon
- Sosyal medya ikonları (react-icons/lu)
- Telif hakkı ve "Built with" bilgisi
- `pt-12 pb-12 mt-8` padding düzeltmesi

### 8. Hero Bileşeni (Yeniden Yazıldı)

**Dosya:** `components/Hero.tsx`

**Değişiklikler:**
- Büyük illüstrasyon kaldırıldı
- Tipografi odaklı minimal tasarım
- İsim, ünvan ve kısa açıklama
- CTA butonları (View Projects, About Me)

---

## 📄 Sayfa Değişiklikleri

### 1. Ana Sayfa (`app/page.tsx`)

**Değişiklikler:**
- Yeni Hero bileşeni entegrasyonu
- "Featured Article" bölümü tamamen kaldırıldı
- "Latest Posts" grid düzeni (3 sütun)
- "All Posts" bölümü kategori filtresi ile
- `HomeContent` client bileşeni (filtreleme için)

### 2. Projeler Sayfası (`app/projects/page.tsx`)

**Değişiklikler:**
- Sayfa başlığı ve açıklaması
- "In Progress" ve "Completed" bölümleri
- ProjectCard grid düzeni
- Drawer ile proje detayları görüntüleme
- `ProjectsContent` client bileşeni

### 3. Hakkımda Sayfası (`app/aboutMe/page.tsx`)

**Değişiklikler:**
- Fotoğraflı hero bölümü
- Güncellenen tanıtım metni
- **Now** bölümü (güncel aktiviteler)
- **Philosophy** bölümü
- **Experience & Education** zaman çizelgesi:
  - Arena (2022 - Present) - Frontend Engineer
  - Bangkok Business Trip (2024)
  - OBSS (2021 - 2022) - Mobile Application Developer
  - PurpleBox, Inc. (2020 - 2021) - Frontend Developer
  - Ege University (2017 - 2021) - B.Sc. Computer Engineering
- **Moments** fotoğraf galerisi
- Sidebar: Stack, AI Tools, Connect, Outside Work

### 4. Blog Yazısı Sayfası (`app/posts/[slug]/page.tsx`)

**Değişiklikler:**
- Kategori etiketi (Tag bileşeni)
- Tarih ve okuma süresi formatı
- "Back to posts" navigasyon bağlantıları
- `prose-custom` sınıfı ile içerik stilleri

---

## 🐛 Hata Düzeltmeleri

### 1. Drawer Hydration Hatası

**Problem:** `createPortal` kullanımı server-side rendering sırasında hata veriyordu.

**Çözüm:** `mounted` state ile client-side mount sonrası render:
```tsx
const [mounted, setMounted] = useState(false)
useEffect(() => { setMounted(true) }, [])
if (!mounted) return null
```

### 2. Footer Padding Sorunu

**Problem:** `py-12` sınıfı container div'de çalışmıyordu.

**Çözüm:** Padding doğrudan `<footer>` elementine taşındı:
```tsx
<footer className="... pt-12 pb-12 mt-8">
```

### 3. "Featured Article" Kategori Kaldırma

**Problem:** "Featured Article" kategorisi artık kullanılmıyordu.

**Çözüm:**
- `components/types.ts` - CategoryType'dan kaldırıldı
- İlgili markdown dosyaları güncellendi:
  - `chatgpt-canvas.md` → "Artificial Intelligence"
  - `how-much-computer-science-do-frontend-developers-really-need.md` → "Self-improvement"
  - `how-to-learn-software-development-in-2025.md` → "Self-improvement"
  - `react-19-2-features-guide.md` → "ReactJS"

### 4. next.config.js Uyarısı

**Problem:** `experimental.appDir` deprecated uyarısı.

**Çözüm:** Bu seçenek kaldırıldı (Next.js 13+ varsayılan).

---

## 📁 Dosya Yapısı Değişiklikleri

### Yeni Eklenen Dosyalar

```
components/
├── Button.tsx          (Yeni)
├── Tag.tsx             (Yeni)
├── Drawer.tsx          (Yeni)
├── ProjectCard.tsx     (Yeni - Project.tsx yerine)
├── HomeContent.tsx     (Yeni - client bileşeni)
└── ProjectsContent.tsx (Yeni - client bileşeni)
```

### Güncellenen Dosyalar

```
styles/
└── globals.css         (Tasarım token'ları + base stiller)

tailwind.config.js      (Renk, font, animasyon genişletmeleri)

app/
├── layout.tsx          (Font importları)
├── page.tsx            (Ana sayfa yeniden yapılandırma)
├── projects/page.tsx   (Projeler sayfası)
├── aboutMe/page.tsx    (Hakkımda sayfası)
└── posts/[slug]/page.tsx (Blog yazısı)

components/
├── Header.tsx          (Minimal header)
├── Footer.tsx          (Sadeleştirilmiş footer)
├── Hero.tsx            (Tipografi odaklı hero)
├── ArticleCard.tsx     (Koyu tema kartlar)
├── types.ts            (CategoryType güncelleme)
└── utils.ts            (Değişiklik yok)

posts/
├── chatgpt-canvas.md                                    (Kategori güncelleme)
├── how-much-computer-science-do-frontend-developers-really-need.md
├── how-to-learn-software-development-in-2025.md
└── react-19-2-features-guide.md
```

---

## 🎯 Tasarım Kararları ve Gerekçeleri

| Karar | Gerekçe |
|-------|---------|
| **Dark-first tema** | Teknik/mühendis estetiği, göz yorgunluğunu azaltma |
| **JetBrains Mono başlıklar** | Kod editörü hissi, teknik kimlik vurgusu |
| **Amber accent rengi** | Koyu arka plana karşı sıcak kontrast |
| **Drawer etkileşimi** | Sayfa değiştirmeden detay görüntüleme |
| **Grid kart düzeni** | Taranabilirlik ve görsel denge |
| **Minimal hero** | İçerik odaklı, dikkat dağıtmayan giriş |
| **Timeline yapısı** | Kariyer yolculuğunun kronolojik sunumu |

---

## 📊 Teknik Detaylar

### Kullanılan Paketler

- `react-icons/lu` - Lucide ikonları
- `@tailwindcss/typography` - Prose stilleri
- `@fontsource/geist-sans` - Geist font
- `@fontsource/jetbrains-mono` - JetBrains Mono font
- `classnames` (cx) - Koşullu class birleştirme
- `lodash` - Utility fonksiyonları
- `moment` - Tarih formatlama

### Tailwind Konfigürasyonu

```javascript
// tailwind.config.js genişletmeleri
- Özel renk paletleri (CSS variable referansları)
- Font aileleri (mono, sans)
- Font boyutları
- Border radius değerleri
- Geçiş süreleri ve easing fonksiyonları
- Keyframe animasyonları (fadeIn, slideUp, slideInRight)
```

---

## ✅ Sonuç

Bu yeniden tasarım projesi ile:

1. **Tutarlı tasarım sistemi** oluşturuldu (token'lar, bileşenler)
2. **Koyu tema** profesyonel bir görünüm sağladı
3. **Bileşen kütüphanesi** genişletildi (Button, Tag, Drawer)
4. **Sayfa yapıları** modernize edildi
5. **Kullanıcı deneyimi** iyileştirildi (drawer, animasyonlar)
6. **Kod kalitesi** artırıldı (yeniden kullanılabilir bileşenler)

Tüm değişiklikler tasarım sistemi prensiplerine uygun olarak, minimum karmaşıklık ve maksimum tutarlılık hedeflenerek gerçekleştirilmiştir.

---

*Bu rapor, Cursor AI asistanı tarafından otomatik olarak oluşturulmuştur.*
