---
title: 'Frontend Geliştirmede Clean Code: İlkeler, Pattern’lar ve Pratik React Örnekleri'
description: "Frontend geliştirmeye uygulanan Clean Code ilkelerini derinlemesine inceleyin. Component tasarımı, custom hook'lar, type safety, error handling ve ekiplerin production'da gerçekten kullandığı mimari pattern'ları kapsayan pratik örneklerle okunabilir, bakımı yapılabilir ve ölçeklenebilir React uygulamalarının nasıl yazılacağını öğrenin."
---

Her frontend codebase'i temiz başlar. İlk component zariftir, klasör yapısı düzenlidir ve abstraction'lar tam yerinde görünür. Ardından ürün büyür. Ekibe yeni engineer'lar katılır. Teslim süreleri kısalır. Altı ay sonra kendinizi veri getiren, üç farklı local state'i yöneten, form validation'ını gerçekleştiren ve bir modal render eden 400 satırlık bir component'e bakarken bulursunuz; üstelik bunların hepsi tek dosyadadır.

Bu, yetenek eksikliği değildir. Disiplin eksikliğidir ve Clean Code bunu önleyen disiplindir.

Bu yazı, Robert C. Martin'in _Clean Code_ kitabının JSX'e uyarlanmış bir tekrarı değildir. Bunun yerine büyük frontend codebase'lerini sağlıklı tutan pattern'lara, sınırlara ve trade-off'lara yönelik, özellikle React ve TypeScript kullanan engineer'lar için yazılmış pratik bir rehberdir.

## Clean Code Frontend'de Neden Daha Önemlidir?

Backend service'lerinde modülerliği zorunlu kılan doğal unsurlar vardır: API'lerin contract'ları, database'lerin schema'ları ve service'lerin sınırları bulunur. Frontend varsayılan olarak bunların hiçbirine sahip değildir. Bir React component'i tek bir fonksiyon içinde _her şeyi_ yapabilir: veri getirebilir, state yönetebilir, routing side effect'lerini işleyebilir, UI render edebilir ve animasyonları koordine edebilir. Bu esneklik React'in hem en büyük gücü hem de en büyük riskidir.

Frontend'de Clean Code özünde, aşağıdaki koşulların bulunduğu **UI katmanındaki karmaşıklığı yönetmekle** ilgilidir:

- **Gereksinimler sürekli değişir.** "Basit bir card component"; genişletilebilir bölümlere, inline editing'e, drag-and-drop sıralamaya ve skeleton loading state'lerine sahip bir card'a dönüşür.
- **Aynı alanlara birçok engineer dokunur.** Ortak bir `Button` component'i 200 yerde import edilmiş olabilir. Dikkatsiz bir değişiklik her yeri etkiler.
- **Kullanıcı deneyimi ürünün kendisidir.** Özensiz kod, tutarsız boşluklar, bozuk focus yönetimi ve takılan transition'lar gibi özensiz bir UX'e yol açar.

Clean Code estetikle ilgili değildir. **Değişikliğin maliyetini azaltmakla** ilgilidir.

## İlke 1: Component'ler Tek Bir İşi İyi Yapmalıdır

Single Responsibility Principle, React codebase'lerinde en çok anılan ve en çok ihlal edilen ilkedir. Veri getiren, onu dönüştüren, UI state'ini yöneten ve markup render eden bir component'in değişmesi için dört farklı neden vardır. Bu alanlardan herhangi biri geliştiğinde diğerlerini bozma riski ortaya çıkar.

**Önce — çok fazla iş yapan bir component:**

```tsx
const UserDashboard = () => {
  const [user, setUser] = useState<User | null>(null)
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'posts' | 'settings'>('posts')

  useEffect(() => {
    const load = async () => {
      try {
        const [userData, postData] = await Promise.all([fetchUser(), fetchPosts()])
        setUser(userData)
        setPosts(postData)
      } catch (e) {
        setError('Failed to load dashboard')
      } finally {
        setIsLoading(false)
      }
    }
    load()
  }, [])

  if (isLoading) return <Spinner />
  if (error) return <ErrorBanner message={error} />
  if (!user) return null

  return (
    <div>
      <header>
        <h1>{user.name}</h1>
        <p>{user.email}</p>
      </header>
      <nav>
        <button onClick={() => setActiveTab('posts')}>Posts</button>
        <button onClick={() => setActiveTab('settings')}>Settings</button>
      </nav>
      {activeTab === 'posts' ? (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body.slice(0, 120)}...</p>
              <span>{new Date(post.createdAt).toLocaleDateString()}</span>
            </li>
          ))}
        </ul>
      ) : (
        <SettingsForm user={user} />
      )}
    </div>
  )
}
```

Bu kod ilk gün tek bir developer için okunabilirdir. Ancak post'lara pagination eklemeniz, veri katmanını REST'ten GraphQL'e geçirmeniz veya üçüncü bir tab eklemeniz gerektiğinde ne olacağını düşünün. Her değişiklik bu tek dosyaya dokunur.

**Sonra — sorumluluklar ayrılmış:**

```tsx
const UserDashboard = () => {
  const { user, posts, isLoading, error } = useDashboardData()
  const [activeTab, setActiveTab] = useState<'posts' | 'settings'>('posts')

  if (isLoading) return <Spinner />
  if (error) return <ErrorBanner message={error} />
  if (!user) return null

  return (
    <div>
      <UserHeader user={user} />
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      {activeTab === 'posts' ? <PostList posts={posts} /> : <SettingsForm user={user} />}
    </div>
  )
}
```

`UserDashboard` artık bir içindekiler tablosu gibi okunur. Veri getirme işlemi `useDashboardData` içinde; presentation ise `UserHeader`, `PostList` ve `SettingsForm` içinde yer alır. Navigation mantığı `TabNavigation`da izole edilmiştir. Her parça birbirinden bağımsız olarak test edilebilir, değiştirilebilir ve yeniden kullanılabilir.

## İlke 2: Öğeleri Yazan İçin Değil, Okuyan İçin Adlandırın

Adlandırma, temiz frontend kodunun değeri en çok göz ardı edilen yönüdür. İyi adlandırılmış bir component, hook veya variable yorum ihtiyacını ortadan kaldırır ve code review'ları hızlandırır.

**Implementasyonu okumaya zorlayan zayıf adlar:**

```tsx
const data = useQuery('stuff')
const handleClick = () => {
  /* ... */
}
const flag = user.role === 'admin'
const Comp = ({ items }: Props) => {
  /* ... */
}
```

**Amacı açıklayan güçlü adlar:**

```tsx
const { data: analyticsReport } = useAnalyticsReport(dateRange)
const handleInvoiceDownload = () => {
  /* ... */
}
const canAccessAdminPanel = user.role === 'admin'
const TransactionHistoryTable = ({ transactions }: Props) => {
  /* ... */
}
```

Pratikte güvenilirliğini koruyan birkaç adlandırma ilkesi:

- **Boolean variable'lar** evet/hayır soruları gibi okunmalıdır: `isLoading`, `hasPermission`, `canEdit`, `shouldRedirect`.
- **Event handler'lar** tetikleyiciyi değil eylemi açıklamalıdır: `handleClick` yerine `handleInvoiceDownload`, `handleButtonPress` yerine `handleFilterReset`.
- **Custom hook'lar** ne sağladıklarını açıklamalıdır: `useAuthStatus`, `usePaginatedProducts`, `useDebounce`.
- **Component'ler** ne render ettiklerini açıklamalıdır: `InvoiceLineItemRow`, `EmptySearchResults`, `CollapsibleSidebar`.

## İlke 3: Custom Hook'lar Birincil Abstraction Aracınızdır

React'te custom hook'lar, state içeren mantığı çıkarıp paylaşmanın en temiz yoludur. Birleştirilebilir, test edilebilir ve framework'ün doğal bir parçasıdırlar. Bir component'in doğrudan render ile ilgili olmayan mantık biriktirdiğini fark ettiğinizde doğru çıkarım neredeyse her zaman custom hook'tur.

**Veri getirme işlemini bir hook'a çıkarmak:**

```tsx
function useDashboardData() {
  const [user, setUser] = useState<User | null>(null)
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    const load = async () => {
      try {
        const [userData, postData] = await Promise.all([
          fetchUser({ signal: controller.signal }),
          fetchPosts({ signal: controller.signal })
        ])
        setUser(userData)
        setPosts(postData)
      } catch (e) {
        if (!controller.signal.aborted) {
          setError('Failed to load dashboard')
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false)
        }
      }
    }

    load()
    return () => controller.abort()
  }, [])

  return { user, posts, isLoading, error }
}
```

Burada `AbortController` iki amaca hizmet eder: component unmount olduğunda devam eden network request'lerini iptal eder ve cleanup sonrasında state güncellemelerini önler. Bu, eski codebase'lerde görmüş olabileceğiniz `let cancelled = false` boolean pattern'ının modern karşılığıdır. `AbortController`, `fetch` API ile doğal olarak çalışır ve yalnızca response'ları yok saymak yerine request'i gerçekten iptal eder.

Pratikte uygulamanız **React Query** veya **SWR** gibi bir server state kütüphanesi kullanıyorsa bu tür bir hook'u nadiren elle yazmanız gerekir. Bu kütüphaneler request iptalini, caching'i, deduplication'ı ve stale-while-revalidate stratejilerini doğrudan yönetir. Yukarıdaki manuel yaklaşımı anlamak yine de değerlidir; temel mekanizmayı öğretir. Ancak veri getirme ihtiyaçlarınız tek bir endpoint'in ötesine geçtiğinde özel bir kütüphane kullanın.

**Yeniden kullanılabilir davranışı çıkarmak:**

```tsx
function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    const stored = localStorage.getItem(key)
    return stored ? JSON.parse(stored) : initialValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue] as const
}
```

```tsx
const [theme, setTheme] = useLocalStorage('theme', 'dark')
const [sidebarOpen, setSidebarOpen] = useLocalStorage('sidebar', true)
```

### Behavior Hook'ları ve Feature Hook'ları

Tüm custom hook'lar aynı değildir. Aralarındaki farkı görmek, nerede yer almaları gerektiğine karar vermenize yardımcı olur.

**Behavior hook'ları**, belirli bir business domain'den bağımsız, genel ve yeniden kullanılabilir bir pattern'ı kapsüller. `useDebounce`, `useLocalStorage`, `useMediaQuery` ve `useOnClickOutside` behavior hook'larıdır. Ortak bir `hooks/` dizininde veya özel bir utility kütüphanesinde yer alırlar; herhangi bir ekip veya feature bunları import edebilir.

**Feature hook'ları**, belirli bir feature'a veya domain'e özgü mantığı kapsüller. `useDashboardData`, `useInvoiceFilters` ve `useCheckoutFlow` feature hook'larıdır. Behavior hook'larını, API çağrılarını ve domain'e özgü dönüşümleri bütünlüklü bir birim hâlinde birleştirirler. Bu hook'lar hizmet ettikleri feature ile aynı yerde, feature'ın klasörü içinde bulunmalıdır; ortak bir `hooks/` dizininde değil.

Temel kural şudur: **Hook'u bir business kavramından söz etmeden açıklayabiliyorsanız bu bir behavior hook'udur ve ortak kodda yer alır. Hook'un adı bir domain entity'sine referans veriyorsa bu bir feature hook'udur ve o feature ile birlikte bulunur.**

## İlke 4: İç Detayları Değil, Sınırları Type'layın

TypeScript en çok sisteminizin sınırlarında değerlidir: component prop'ları, API response'ları, ortak utility signature'ları ve context değerleri. Local implementasyon detaylarını gereğinden fazla type'lamak, güvenliği anlamlı biçimde iyileştirmeden gürültü yaratır.

**Gereğinden fazla type'lanmış — her local variable annotation içeriyor:**

```tsx
const UserCard = ({ user }: UserCardProps) => {
  const fullName: string = `${user.firstName} ${user.lastName}`
  const initials: string = fullName
    .split(' ')
    .map((n: string) => n[0])
    .join('')
  const isActive: boolean = user.status === 'active'

  return (
    <div>
      <Avatar initials={initials} />
      <span>{fullName}</span>
      {isActive && <Badge label='Active' />}
    </div>
  )
}
```

**Doğru type'lanmış — sınırlar katı, iç detaylar inference'a bırakılmış:**

```tsx
interface UserCardProps {
  user: User
}

const UserCard = ({ user }: UserCardProps) => {
  const fullName = `${user.firstName} ${user.lastName}`
  const initials = fullName
    .split(' ')
    .map((n) => n[0])
    .join('')
  const isActive = user.status === 'active'

  return (
    <div>
      <Avatar initials={initials} />
      <span>{fullName}</span>
      {isActive && <Badge label='Active' />}
    </div>
  )
}
```

TypeScript'in inference özelliği local variable'ları kusursuz biçimde yönetir. Enerjinizi prop interface'lerine, API response type'larına ve module'ler arasındaki contract'lara ayırmanız daha doğrudur; type uyuşmazlığının gerçek bug'lara yol açtığı yerler buralardır.

**API katmanınızı katı biçimde type'layın:**

```tsx
interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  pageSize: number
}

interface Product {
  id: string
  name: string
  price: number
  category: string
  inStock: boolean
}

async function fetchProducts(page: number, pageSize: number): Promise<PaginatedResponse<Product>> {
  const res = await fetch(`/api/products?page=${page}&pageSize=${pageSize}`)
  if (!res.ok) throw new Error('Failed to fetch products')
  return res.json()
}
```

API contract'ı değiştiğinde TypeScript etkilenen her call site'ı ortaya çıkarır. Bu, `const count: number = 0` şeklinde annotation eklemekten çok daha değerlidir.

## İlke 5: Conditional Rendering'i Düzleştirin

Derinlemesine iç içe ternary'ler, JSX'te okunabilirliği en sık bozan unsurlardan biridir. Bir component'in farklı state'leri (loading, error, empty, success) render etmesi gerektiğinde mantığı early return'lerle düzleştirin.

**Takibi zor — iç içe ternary'ler:**

```tsx
return (
  <div>
    {isLoading ? (
      <Spinner />
    ) : error ? (
      <ErrorBanner message={error} />
    ) : data.length === 0 ? (
      <EmptyState />
    ) : (
      <DataTable rows={data} />
    )}
  </div>
)
```

**Net — early return'ler:**

```tsx
if (isLoading) return <Spinner />
if (error) return <ErrorBanner message={error} />
if (data.length === 0) return <EmptyState />

return <DataTable rows={data} />
```

Early return'ler, component'in davranışının yukarıdan aşağıya kolayca taranmasını sağlar. Her state açıkça ele alınır ve iç içe branch'leri zihninizde ayrıştırmanız gerekmez.

## İlke 6: Birlikte Değişenleri Aynı Yerde Tutun

Yaygın bir içgüdü, kodu teknik role göre düzenlemektir: tüm hook'lar `hooks/`, tüm type'lar `types/`, tüm utility'ler `utils/` klasöründe. Bu yaklaşım küçük ölçekte çalışır ancak codebase büyüdükçe sürtüşme yaratır; çünkü tek bir feature değişikliği birçok dizinde düzenleme gerektirir.

**Teknik role göre düzenlenmiş (büyük ölçekte kırılgan):**

```
src/
  components/
    InvoiceTable.tsx
    InvoiceRow.tsx
    InvoiceFilters.tsx
  hooks/
    useInvoices.ts
  types/
    invoice.ts
  utils/
    formatCurrency.ts
```

**Feature'a göre aynı yerde tutulmuş (daha iyi ölçeklenir):**

```
src/
  features/
    invoices/
      InvoiceTable.tsx
      InvoiceRow.tsx
      InvoiceFilters.tsx
      useInvoices.ts
      invoice.types.ts
      formatCurrency.ts
      index.ts
```

`index.ts` barrel dosyası yalnızca feature'ın public API'sini export eder. İç detaylar private kalır. Birinin invoice davranışını değiştirmesi gerektiğinde her şey tek bir yerdedir. Feature silindiğinde tek bir klasör temiz biçimde ortadan kalkar.

Bu, hiçbir zaman ortak `hooks/` veya `utils/` dizinleriniz olmamalı anlamına gelmez. Gerçekten farklı alanları etkileyen `useDebounce`, `formatDate`, `cn` (class name birleştirme utility'si) gibi öğeler ortak module'lerde yer alır. Test basittir: **Yalnızca tek bir feature'a hizmet ediyorsa o feature ile aynı yerde tutun.**

## İlke 7: Error Handling'i Birinci Sınıf Bir Konu Olarak Ele Alın

Frontend kodunda error handling çoğu zaman sonradan düşünülür; console'a log yazan veya genel bir toast gösteren tek bir `catch` block'undan ibaret kalır. Temiz frontend kodu, her katmanda error'ları bilinçli biçimde ele alır.

**Component seviyesinde error boundary'ler:**

```tsx
import { Component, type ReactNode, type ErrorInfo } from 'react'

interface Props {
  children: ReactNode
  fallback: ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    reportErrorToService(error, info)
  }

  render() {
    if (this.state.hasError) return this.props.fallback
    return this.props.children
  }
}
```

```tsx
<ErrorBoundary fallback={<p>Something went wrong in the chart.</p>}>
  <RevenueChart data={revenueData} />
</ErrorBoundary>
```

Error boundary'leri uygulamanın tamamı yerine UI'ınızın **bölümleri** etrafına sarın. Revenue chart çökerse dashboard'un geri kalanı çalışmaya devam etmelidir.

**Veri katmanlarında type'lanmış error handling:**

```tsx
type Result<T> = { status: 'success'; data: T } | { status: 'error'; error: string }

async function fetchUser(id: string): Promise<Result<User>> {
  try {
    const res = await fetch(`/api/users/${id}`)
    if (!res.ok) return { status: 'error', error: `HTTP ${res.status}` }
    const data = await res.json()
    return { status: 'success', data }
  } catch {
    return { status: 'error', error: 'Network request failed' }
  }
}
```

Bu pattern, consumer'ı her iki durumu da ele almaya zorlar. Type system, `data`ya erişmeden önce `status` kontrolünü gerektirdiği için bir error'ı yanlışlıkla yok sayamazsınız.

Şunu belirtmekte fayda var: React uygulamalarının çoğunda **React Query veya SWR gibi server state kütüphaneleri**, döndürdükleri değerler (`isLoading`, `isError`, `data`, `error`) üzerinden loading, error ve success state'lerini zaten yönetir. `Result<T>` pattern'ı en çok alt seviye utility function'larda, SDK wrapper'larında veya veri getirme kütüphanesi kullanmadığınız senaryolarda; örneğin form submission, file upload ya da HTTP dışı async işlemlerde yararlıdır. Araçtan bağımsız olarak ilke aynıdır: error state'lerinin yok sayılmasını imkânsız hâle getirin.

## İlke 8: Side Effect'leri Sınırlarda Tutun

API çağrıları, analytics event'leri, localStorage read işlemleri ve DOM mutation'ları gibi side effect'ler component ağacınızın her yerine dağılmak yerine sınırlarında bulunmalıdır. Ağacın derinlerindeki component'ler pure olmalıdır: Aynı prop'lar verildiğinde aynı çıktıyı render etmelidirler.

**Dağınık side effect'ler (takibi zor):**

```tsx
const ProductCard = ({ product }: Props) => {
  useEffect(() => {
    trackImpression(product.id) // analytics buried in a leaf node
  }, [product.id])

  const handleAddToCart = () => {
    addToCart(product)
    trackEvent('add_to_cart', { productId: product.id })
    toast.success('Added to cart')
  }

  return (
    <div>
      <h3>{product.name}</h3>
      <p>{formatCurrency(product.price)}</p>
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  )
}
```

**Yukarı taşınmış side effect'ler (üzerinde düşünmek daha kolay):**

```tsx
const ProductCard = ({ product, onAddToCart }: Props) => (
  <div>
    <h3>{product.name}</h3>
    <p>{formatCurrency(product.price)}</p>
    <button onClick={() => onAddToCart(product)}>Add to cart</button>
  </div>
)
```

```tsx
const ProductGrid = ({ products }: Props) => {
  const handleAddToCart = (product: Product) => {
    addToCart(product)
    trackEvent('add_to_cart', { productId: product.id })
    toast.success('Added to cart')
  }

  return (
    <div>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onAddToCart={handleAddToCart} />
      ))}
    </div>
  )
}
```

`ProductCard` artık pure bir presentation component'tir. Kolayca test edilebilir, farklı bağlamlarda yeniden kullanılabilir (örneğin sepete ekleme özelliğinin bulunmadığı "son görüntülenenler" bölümü) ve beklenmeyen side effect'ler üretmez.

## İlke 9: State Management Sınırları

Bir React uygulamasındaki en önemli mimari kararlardan biri state'in nerede bulunduğudur. Clean Code, farklı state kategorileri arasında net sınırlar ve her kategoriyi uygun scope'ta tutacak disiplin gerektirir.

**Local state** tek bir component'e aittir. Bir modal'ın açık/kapalı durumu, form field'ın mevcut değeri veya dropdown'ın genişletilmiş state'i, bunların sahibi olan component içinde `useState`te kalmalıdır. Bunları "belki gerekir" düşüncesiyle yukarı taşımak, parent component'leri yönetmemeleri gereken konularla kirletir.

**Ortak UI state'i**, birbiriyle ilişkili birkaç component'i koordine eder: dashboard'daki active tab veya table-detail düzenindeki seçili row. Bu state, en yakın ortak ancestor'da veya dar kapsamlı bir context'te bulunmalıdır.

**Server state'in**, yani API'lerden getirilen verilerin; loading, caching, revalidation ve background refresh gibi kendine özgü bir lifecycle'ı vardır. React Query ve SWR gibi kütüphaneler, server state'in UI state'i gibi davranmaması ve aynı araçlarla yönetilmemesi gerektiği için vardır.

**Global application state** (mevcut kullanıcı, tema, feature flag'ler, locale) en dar kategoridir ve bu şekilde ele alınmalıdır. Burada context veya hafif bir store uygundur; ancak bir öğeyi global state'e koyma eşiği yüksek olmalıdır.

En yaygın hata **global state'e çok erken yönelmektir**. Bir state component'te, custom hook'ta veya feature scope'lu context'te bulunabilecekken onu global store'a koymak, hiçbir fayda sağlamadan dolaylılık ve coupling ekler. Yararlı bir yaklaşım:

```
Component state → Shared parent state → Feature context → Global store
```

Soldan başlayın. Yalnızca mevcut scope gerçekten yetersiz kaldığında sağa ilerleyin.

**Pratik bir örnek — feature scope'lu context:**

```tsx
interface InvoiceFilterState {
  status: 'all' | 'paid' | 'pending' | 'overdue'
  dateRange: [Date, Date] | null
  searchQuery: string
}

const InvoiceFilterContext = createContext<{
  filters: InvoiceFilterState
  setFilters: Dispatch<SetStateAction<InvoiceFilterState>>
} | null>(null)

const InvoiceFilterProvider = ({ children }: { children: ReactNode }) => {
  const [filters, setFilters] = useState<InvoiceFilterState>({
    status: 'all',
    dateRange: null,
    searchQuery: ''
  })

  return <InvoiceFilterContext.Provider value={{ filters, setFilters }}>{children}</InvoiceFilterContext.Provider>
}
```

Bu context yalnızca invoices feature'ını sarar. Uygulamanın geri kalanı ona erişemez ve context değiştiğinde yeniden render olmak için bir nedeni yoktur. Önemli olan bu sınırdır.

## İlke 10: Performans ve Render Disiplini

React'te performans optimizasyonuna çoğu zaman sonradan akla gelen bir konu gibi yaklaşılır; uygulama yavaş hissedildiğinde her yere `React.memo` ve `useMemo` serpiştirilir. Clean Code daha disiplinli bir yaklaşım benimser: render modelini anlayın, yaygın hatalardan varsayılan olarak kaçının ve yalnızca ölçümler haklı çıkardığında hedefe yönelik optimizasyon yapın.

**Yeniden render'ı neyin tetiklediğini anlayın.** Bir component state'i değiştiğinde, parent'ı yeniden render olduğunda veya kullandığı context değiştiğinde yeniden render olur. Bu doğası gereği maliyetli değildir; React'in reconciliation süreci hızlıdır. Sorunlar, yeniden render'lar büyük subtree'lerde gereksiz yere zincirleme yayıldığında veya maliyetli hesaplamalar her render'da çalıştığında ortaya çıkar.

**Prop olarak aktarılırken her render'da yeni referanslar oluşturmaktan kaçının:**

```tsx
const ProductGrid = ({ products }: Props) => {
  return (
    <div>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={() => addToCart(product.id)}
          style={{ marginBottom: 16 }}
        />
      ))}
    </div>
  )
}
```

`ProductCard`, `React.memo` ile sarmalanmışsa bu inline referanslar memoization'ı tamamen etkisiz hâle getirir. Çözüm basittir:

```tsx
const cardStyle = { marginBottom: 16 }

const ProductGrid = ({ products }: Props) => {
  const handleAddToCart = useCallback((productId: string) => {
    addToCart(productId)
  }, [])

  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} style={cardStyle} />
      ))}
    </div>
  )
}
```

**Ancak düşünmeden memoize etmeyin.** `React.memo`, `useMemo` ve `useCallback` bedelsiz değildir; memory tüketir, zihinsel yük ekler ve daha derin yapısal sorunları gizleyebilir. Şu durumlarda kullanın:

- Bir component sık sık render oluyor ve subtree'si maliyetliyse.
- Profiling (React DevTools ile), yeniden render'ın bottleneck olduğunu doğruluyorsa.
- Memoize edilen değer başka hook'lara dependency veya memoize edilmiş child'lara prop olarak aktarılıyorsa.

Bir component'in render maliyeti düşükse onu `React.memo` ile sarmalamak anlamlı bir fayda sağlamadan karmaşıklık ekler. **Önce ölçün, sonra optimize edin.**

**Route seviyesinde code splitting için lazy loading**, sonradan tepki olarak değil varsayılan biçimde uygulanması gereken bir optimizasyondur:

```tsx
import { lazy, Suspense } from 'react'

const InvoiceDashboard = lazy(() => import('./features/invoices/InvoiceDashboard'))
const SettingsPage = lazy(() => import('./features/settings/SettingsPage'))

const App = () => (
  <Suspense fallback={<PageSkeleton />}>
    <Routes>
      <Route path='/invoices' element={<InvoiceDashboard />} />
      <Route path='/settings' element={<SettingsPage />} />
    </Routes>
  </Suspense>
)
```

Bu, kullanıcıların yalnızca ziyaret ettikleri sayfa için gereken kodu indirmelerini sağlar. Memoization'ın aksine lazy loading'in neredeyse hiçbir dezavantajı yoktur ve birden fazla route'u olan her uygulamada standart uygulama olmalıdır.

## İlke 11: Erken Abstraction'dan Kaçının

DRY ilkesi frontend kodunda sık sık yanlış uygulanır. Bugün benzer görünen iki component yarın farklılaşabilir. Bunları giderek büyüyen bir prop ve condition kümesine sahip tek bir "esnek" component'te erken birleştirmek, bazen **yanlış abstraction** olarak adlandırılan yapıyı oluşturur; amaçladığı tekrarın kendisinden daha zor kullanılan bir component.

Bu risk özellikle UI kodunda daha büyüktür. Ürün gereksinimleri sık değişir: Bir stakeholder bir sayfada farklı bir layout, başka bir sayfada yeni bir interaction pattern, mobil içinse yeniden tasarlanmış bir flow ister. İki component aynı abstraction'ı paylaşırken birinin farklılaşması gerektiğinde hoş olmayan bir seçimle karşılaşırsınız: Ortak component'e yeni bir prop daha eklemek veya abstraction'ı parçalamak. Her iki seçenek de tekrarın yaratacağı maliyetten daha pahalıdır.

**Dikkat edilmesi gereken bir örnek:**

```tsx
interface CardProps {
  variant: 'user' | 'product' | 'order'
  title: string
  subtitle?: string
  image?: string
  badge?: string
  actions?: ReactNode
  onClick?: () => void
  isCompact?: boolean
  showBorder?: boolean
  headerSlot?: ReactNode
  footerSlot?: ReactNode
}
```

Bu component tek bir interface üzerinden üç farklı domain'e hizmet etmeye çalışır. Bir variant her yeni davranışa ihtiyaç duyduğunda yeni bir prop ve yeni bir conditional branch eklersiniz. Component, kimsenin dokunmak istemediği bir bakım yüküne dönüşür.

**Daha iyi yaklaşım — composition'ı tercih edin:**

```tsx
const Card = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={cn('rounded-lg border bg-white p-4 shadow-sm', className)}>{children}</div>
)

const UserCard = ({ user }: { user: User }) => (
  <Card>
    <Avatar src={user.avatar} />
    <h3>{user.name}</h3>
    <p>{user.role}</p>
  </Card>
)

const ProductCard = ({ product }: { product: Product }) => (
  <Card>
    <img src={product.image} alt={product.name} />
    <h3>{product.name}</h3>
    <span>{formatCurrency(product.price)}</span>
  </Card>
)
```

`Card` ortak stilleri sağlar. `UserCard` ve `ProductCard`, domain'lerine özgü render işleminin sahibi olur. Yarın `ProductCard` bir "indirim" badge'ine ihtiyaç duyarsa bunu `UserCard`ı etkilemeden ekleyebilirsiniz. Abstraction sınırı doğru yerdedir.

**Temel kural:** Gerçek ortak pattern'ı bulana kadar tekrara izin verin. İki örnek tesadüftür. Üç örnek pattern'dır.

## İlke 12: Implementasyonu Değil, Davranışı Açıklayan Test'ler Yazın

Temiz test'ler, temiz production kodu kadar önemlidir. Hangi hook'ların çağrıldığı, bir component'in kaç kez yeniden render olduğu veya internal state'in biçimi gibi implementasyon detaylarını doğrulayan test'ler her refactor'da bozulur ve çok az güven sağlar.

**Implementasyona bağlı test (kırılgan):**

```tsx
it('calls setCount when button is clicked', () => {
  const setState = jest.fn()
  jest.spyOn(React, 'useState').mockReturnValue([0, setState])
  render(<Counter />)
  fireEvent.click(screen.getByText('Increment'))
  expect(setState).toHaveBeenCalledWith(1)
})
```

**Davranış odaklı test (dayanıklı):**

```tsx
import userEvent from '@testing-library/user-event'

it('increments the displayed count when the user clicks the button', async () => {
  const user = userEvent.setup()
  render(<Counter />)
  expect(screen.getByText('Count: 0')).toBeInTheDocument()

  await user.click(screen.getByRole('button', { name: 'Increment' }))
  expect(screen.getByText('Count: 1')).toBeInTheDocument()
})
```

İkinci test, `fireEvent` yerine `userEvent` kullanır. Bu bilinçli bir seçimdir: `userEvent` gerçek tarayıcı etkileşimlerini (focus, pointer ve keyboard event'lerinin doğru sırada çalışması dâhil) simüle ederken `fireEvent` sentetik event'leri doğrudan dispatch eder. Sonuçta kullanıcıların uygulamanızla nasıl etkileşime girdiğini daha doğru yansıtan test'ler elde edilir. API seçiminin ötesinde test, kullanıcının ne gördüğünü ve ne yaptığını açıklar. `useState`ten `useReducer`a, local counter'dan context'in sağladığı counter'a veya butondan keyboard shortcut'a yapılan refactor sonrasında çalışmaya devam eder. Bağlantıları değil, contract'ı test eder.

## Frontend Code Smell'leri

Code smell'ler bug değildir; daha derin sorunlara işaret eden yapısal pattern'lardır. Bunları hızla fark etmeyi öğrenmek code review'ları daha verimli kılar ve küçük sorunların birleşerek mimari borca dönüşmesini önler.

**God Component.** 200–300 satırı aşan bir component neredeyse kesin olarak çok fazla iş yapıyordur. Bir component'in ne yaptığını anlamak için sürekli scroll etmeniz gerekiyorsa parçalara ayrılması gerekir.

**Boolean prop patlamaları.** Bir component `isCompact`, `showBorder`, `hideHeader`, `isInline` ve `withShadow` gibi prop'lar biriktirdiğinde conditional branch'ler üzerinden çok fazla bağlama hizmet etmeye çalışıyordur. Bu, ayrı component'lere veya composition tabanlı bir yaklaşıma ihtiyaç duyduğunuzun işaretidir.

**İki seviyeyi aşan prop drilling.** Aynı prop bir grandparent'tan parent üzerinden child'a değiştirilmeden aktarılıyorsa bu, state'in kullanıldığı yerden fazla uzakta bulunduğunun işaretidir. Context veya component composition (children aktarmak) daha temiz bir çözümdür.

**State synchronization aracı olarak `useEffect`.** Bir state parçasını izleyip başka bir state parçasını set eden effect, genellikle effect döngüsüyle senkronize edilmek yerine inline veya `useMemo` ile hesaplanması gereken derived value'dur.

```tsx
// Smell: effect-based state sync
const [items, setItems] = useState<Item[]>([])
const [total, setTotal] = useState(0)

useEffect(() => {
  setTotal(items.reduce((sum, item) => sum + item.price, 0))
}, [items])

// Clean: derived value
const [items, setItems] = useState<Item[]>([])
const total = items.reduce((sum, item) => sum + item.price, 0)
```

**Her şeyi içeren utility dosyaları.** 200 satırı aşan ve `formatDate`, `debounce`, `parseQueryString`, `calculateTax` gibi ilgisiz fonksiyonları içeren `utils.ts` bir çöplüktür. Bunu odaklanmış module'lere ayırın: `date.utils.ts`, `url.utils.ts`, `pricing.utils.ts`.

**Küçük farklarla kopyalanıp yapıştırılmış component'ler.** İki component küçük farklar dışında yapılarının %80'ini paylaşıyorsa extraction için adaydır; ancak yalnızca ortak pattern istikrarlıysa. Component'ler hâlâ birbirinden bağımsız gelişiyorsa net bir abstraction ortaya çıkana kadar tekrara izin verin.

**Tutarsız adlandırma kuralları.** Bazı component'ler event handler'larda `handleX`, bazıları `onX` kullandığında; bazı hook'lar net bir neden olmadan array, bazıları object döndürdüğünde; component dışındaki bazı dosyalar `camelCase`, bazıları `PascalCase` kullandığında bu tutarsızlıklar codebase'e duyulan güveni zedeler. Kuralları erken belirleyin ve lint kurallarıyla uygulayın.

## Hepsini Bir Araya Getirmek: Feature Checklist'i

Bir feature geliştirirken veya incelerken şu soruları pratik bir checklist olarak kullanabilirsiniz:

- **Sorumluluk:** Her component'in tek ve net bir amacı var mı?
- **Adlandırma:** Ekibe yeni katılan biri yalnızca adından bunun ne yaptığını anlayabilir mi?
- **Hook'lar:** State içeren mantık custom hook'lara çıkarılmış mı? Behavior hook'ları feature hook'larından ayrılmış mı?
- **Type'lar:** Sınırlar (prop'lar, API response'ları, context) katı biçimde type'lanmış mı?
- **Condition'lar:** Render branch'leri düz ve kolay taranabilir mi?
- **Colocation:** Bu feature ile ilgili her şey tek bir yerde mi?
- **Error'lar:** Failure state'leri her katmanda açıkça ele alınıyor mu?
- **Side effect'ler:** Side effect'ler sınırlara taşınmış mı?
- **State sınırları:** Her state parçası işe yarayan en dar scope'ta mı?
- **Render:** Aşırı memoization yapmadan gereksiz yeniden render'lar önlenmiş mi?
- **Abstraction:** Bu abstraction hak edilmiş mi, yoksa erken mi yapılmış?
- **Test'ler:** Test'ler gerçekçi etkileşimlerle kullanıcının gördüğü davranışı açıklıyor mu?
- **Code smell'ler:** God Component, boolean prop patlaması veya effect tabanlı state synchronization var mı?

## Sonuç

Frontend geliştirmede Clean Code, bir dizi kuralı mekanik biçimde uygulamakla ilgili değildir. Zaman içinde kodu anlamanın ve değiştirmenin maliyetini azaltan bilinçli seçimler yapmakla ilgilidir. Bir React codebase'inde bu; component'leri odaklanmış tutmak, öğeleri hassas biçimde adlandırmak, davranışı hook'lara çıkarmak, sınırları type'lamak ve çok erken abstraction yapma isteğine direnmek anlamına gelir.

En iyi frontend codebase'leri en akıllıca abstraction'lara sahip olanlar değildir. Ekipteki herhangi bir engineer'ın bir dosyayı açıp 30 saniye içinde ne yaptığını anlayabildiği, güvenle değişiklik yapabildiği ve yoluna devam edebildiği codebase'lerdir. Clean Code'un sağladığı budur: mükemmellik değil, **sürdürülebilir hız**.
