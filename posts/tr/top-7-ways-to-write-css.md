---
title: "React veya Next.js Uygulamanızda CSS Yazmanın En İyi 7 Yolu"
description: "Uzman rehberimizle CSS'i React veya Next.js uygulamalarınıza entegre etmenin en iyi 7 yöntemini keşfedin. Responsive ve görsel açıdan etkileyici web siteleri oluşturmak için geleneksel stil dosyaları, CSS Modules, styled-components ve daha fazlası hakkında bilgi edinin. Stil oluşturma sürecini kolaylaştırmak ve web geliştirme becerilerini ilerletmek isteyen geliştiriciler için ideal olan bu rehberde her yaklaşımın ayrıntılarını, best practice'leri ve front-end iş akışınızı optimize edecek ipuçlarını inceleyin."
---

### 1. Global CSS

Global CSS, tek tek elementlere veya component'lere uygulanmak yerine bir web sitesinin ya da uygulamanın tamamına genel olarak uygulanan CSS (Cascading Style Sheets) kurallarını ifade eder. Başka bir deyişle, global bir CSS kuralı tanımladığınızda bu kural, belirtilen selector'ların eşleştiği web sitenizin her bölümünü etkiler.

Örneğin tüm `<p>` (paragraf) elementlerinin font boyutunu 16 piksel yapan global bir CSS kuralı belirlerseniz, daha spesifik kurallar veya inline stiller tarafından override edilmediği sürece web sitenizdeki her paragraf bu stili devralır.

Global CSS genellikle HTML dokümanlarınızın `head` bölümünde bağlantısı verilen ana stil dosyasında tanımlanır. Web tasarımı ve geliştirmenin temel unsurlarından biridir ve bir web sitesinin farklı sayfa ve bölümlerinde tutarlı stiller kullanılmasını sağlar. Ancak özellikle büyük ve karmaşık projelerde çakışmaları ve istenmeyen yan etkileri önlemek için global stiller dikkatle yönetilmelidir. Bu ihtiyaç, global CSS kaynaklı sorunları daha kapsamı sınırlandırılmış ve modüler stil yaklaşımlarıyla azaltmayı amaçlayan BEM (Block Element Modifier) gibi metodolojilerin ve CSS-in-JS kütüphanelerinin geliştirilmesine yol açmıştır.

**styles.css**

```
/* Global CSS to style the body element */
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}

/* Global CSS to style all h1 elements */
h1 {
  color: #333;
  font-size: 2em; /* 2 times the size of the default font size */
}

/* Global CSS to style all paragraph elements */
p {
  font-size: 16px;
  line-height: 1.6;
  color: #666;
}

/* Global CSS for links */
a {
  color: #1a0dab;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* Global CSS for a class that can be applied to any element */
.box-shadow {
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

/* Utility class for padding that can be applied to any element */
.padding-20 {
  padding: 20px;
}
```

### 2. CSS Modules

CSS Modules, stillerin global yerine varsayılan olarak yerel kapsamda oluşturulduğu bir tekniktir. Bu, bir CSS dosyasında tanımlanan class'ların ve identifier'ların o dosyaya/module'e özgü bir biçime dönüştürüldüğü anlamına gelir. Söz konusu CSS Module'ü bir JavaScript component'ine import ettiğinizde (React, Vue veya Angular gibi framework'lerde yaygın bir kullanımdır), bu stilleri uygulamanızın diğer bölümlerindeki class veya identifier'larla çakışmasından endişe etmeden kullanabilirsiniz.

![CSS Modules görseli](https://www.ozanbatuhankurucu.com/images/css-modules.png)

CSS Modules kullanımının nasıl görünebileceğine dair basit bir örnek:

**styles.module.css:**

```
/* This is a local style sheet */
.title {
  color: red;
  font-size: 24px;
}

.description {
  font-size: 14px;
  color: gray;
}
```

**Component.js**

```
// Import the styles from the CSS module
import styles from './styles.module.css';

function Component() {
  // Use imported styles
  return (
    <div>
      <h1 className={styles.title}>This is a title</h1>
      <p className={styles.description}>This is a description.</p>
    </div>
  );
}

export default Component;
```

Bu örnekte **styles.module.css** içindeki **.title** ve **.description** class'larının kapsamı, import edildikleri **Component** ile sınırlıdır. Uygulamayı build ettiğinizde elementlere uygulanan gerçek class adları, otomatik olarak oluşturulan ve uygulamanın tamamında benzersiz olan **title_1fgh23** ve **description_2jk34** gibi değerler olur. Böylece global CSS'te yaşanabilen, bir component'in stillerinin başka bir component'e sızması sorunu önlenir.

CSS Modules, CSS'in kendi özelliği değil; modern front-end pipeline'larında yer alan bir build adımıdır. Genellikle CSS Modules'ün kapsamlandırılması ve import edilmesi işlemlerini yöneten Webpack, Rollup veya Parcel gibi bundler'lar aracılığıyla uygulanır.

### 3. Preprocessor

CSS preprocessor, CSS'in varsayılan yeteneklerini genişleten bir script dilidir. Geliştiricilerin saf CSS'te bulunmayan değişkenler, nesting, mixin'ler, inheritance ve CSS yazmayı daha kolay ve sürdürülebilir hâle getiren diğer güçlü özellikleri kullanmasına olanak tanır.

Tarayıcıların yorumlayabilmesi için preprocessor'ların kodunuzu standart CSS'e compile etmesi gerekir. Bu compile işlemi sunucudaki bir build sürecinde veya geliştirme ortamında anlık olarak gerçekleşebilir.

![Preprocessor görseli](https://www.ozanbatuhankurucu.com/images/preprocessor.png)

En popüler CSS preprocessor'larından bazıları şunlardır:

- **Sass (Syntactically Awesome Stylesheets):** **.scss** veya **.sass** dosya uzantısını kullanır. En yaygın kullanılan preprocessor syntax'ıdır. SCSS syntax'ı CSS'e benzer, ancak Sass özelliklerinin gücünü de sunar.
- **LESS:** Leaner Style Sheets ifadesinin kısaltmasıdır. SCSS'in oluşturulmasına ilham vermiştir; CSS'e benzer bir syntax ve **.less** dosya uzantısıyla değişkenleri, nesting'i ve benzeri özellikleri destekler.
- **Stylus:** Sass ve LESS'e benzer, ancak hem katı hem de esnek kullanıma izin veren daha uyarlanabilir bir syntax sunarak geliştiricilerin tercih ettikleri stili seçmelerini sağlar.

Bu araçlar üretkenliği büyük ölçüde artırabilir ve büyük stil dosyalarını daha küçük, yönetilebilir parçalara bölerek düzenlemeye yardımcı olabilir. Örneğin değişkenler, bir rengi veya font grubunu bir kez tanımlayıp stil dosyasının tamamında kullanmanızı sağlar; böylece tutarlılığı korumak ve tema değişikliklerini uygulamak kolaylaşır.

### 4. CSS-in-JS

CSS-in-JS, CSS'in JavaScript dosyaları içinde oluşturulduğu bir pattern'ı ifade eder. Bu yaklaşım, geliştiricilerin doğrudan JavaScript component'lerine bağlı CSS yazmasına imkân tanıyarak React gibi component tabanlı framework ve kütüphanelerde stil oluşturmayı daha bütünleşik hâle getirir.

CSS-in-JS'in öne çıkan bazı özellikleri ve avantajları şunlardır:

1. **Yerel Kapsam:** CSS-in-JS dosyasında tanımlanan stiller, CSS Modules'e benzer şekilde yerel olarak component kapsamında kalır. Böylece stillerin uygulamanın diğer bölümlerindekilerle çakışma olasılığı azalır.
2. **Dinamik Stiller:** Stiller JavaScript ile yazıldığı için geliştiriciler bunları component'in state veya props değerlerine göre kolayca değiştirebilir; bu da dinamik stil uygulamayı kolaylaştırır.
3. **Bir Arada Tutma:** CSS-in-JS, bir component'i etkileyen stillerin component koduyla aynı dosyada tutulmasını sağlar; böylece component'i anlamak ve bakımını yapmak kolaylaşabilir.
4. **Kullanılmayan Kodun Elenmesi:** Build araçlarının dead code elimination uygulayarak kullanılmayan CSS'i son bundle'dan kaldırması kolaylaşır.
5. **Tema Desteği:** Birçok CSS-in-JS kütüphanesi yerleşik tema yetenekleri sunarak uygulamadaki tüm component'lere tema uygulamayı kolaylaştırır.

CSS-in-JS kütüphanelerine şu örnekler verilebilir:

- **Styled-components:** JavaScript dosyalarında component'lerinizi stillendirmek için gerçek CSS kodu yazmanıza olanak tanır.
- **Emotion:** Styled-components'e benzer bir API'yi farklı özellikler ve optimizasyonlarla sunar.
- **JSS:** Stilleri temsil etmek için JavaScript object'leri kullanan, CSS-in-JS'e yönelik daha açık bir yaklaşımdır.

Aşağıda bir React uygulamasında styled-components kullanılan basit bir örnek yer alıyor:

```
import styled from 'styled-components';

// This creates a new component that renders a button with the applied styles
const StyledButton = styled.button`
  background-color: blue;
  color: white;
  font-size: 1em;
  padding: 0.25em 1em;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: darkblue;
  }
`;

function App() {
  return <StyledButton>Click me</StyledButton>;
}
```

Bu örnekte **StyledButton**, stilleri doğrudan kendisine eklenmiş bir React component'idir. Bu stiller yalnızca söz konusu component kapsamında kalır ve hover state'i doğrudan component tanımı içinde stillendirilir.

CSS-in-JS, geliştirme topluluğunda tartışma konusu olmuştur. Destekleyenler esnekliğine ve component kapsamlı yaklaşımına değer verirken karşı çıkanlar olası performans sorunlarına ve web geliştirmedeki geleneksel sorumlulukların ayrılması ilkesinden (yapı, görünüm ve davranışın çoğunlukla ayrı tutulmasından) uzaklaşmasına dikkat çeker.

### 5. Utility Class'lar

CSS bağlamında helper class olarak da bilinen utility class'lar, tek ve belirli bir amaca hizmet eden kısa, yeniden kullanılabilir class'lardır. Her element veya component için yeni custom CSS yazmak yerine birden fazla atomik class'ı birleştirerek elementin stillerini oluşturmayı teşvik eden functional CSS paradigmasının temel parçalarından biridir.

![Utility class görseli](https://www.ozanbatuhankurucu.com/images/utility-classes.png)

Utility class'ları tanımlayan özellikler şunlardır:

1. **Tek Sorumluluk:** Her utility class belirli bir stili veya birbiriyle ilişkili küçük bir stil grubunu uygular. Örneğin bir utility class margin ekleyebilir, metin rengini değiştirebilir ya da bir `display` özelliği belirleyebilir; ancak üçünü birden yapmaz.
2. **Yeniden Kullanılabilirlik:** Utility class'lar, belirli bir stile ihtiyaç duyulan her yerde HTML boyunca yeniden kullanılmak üzere tasarlanır.
3. **Birleştirilebilirlik:** Custom CSS yazmadan istediğiniz görünümü elde etmek için birden fazla utility class'ı bir araya getirebilirsiniz.
4. **Tutarlılık:** Utility class kullanımı, tanımlı utility class stil kümesiyle sınırlı olduğunuz için tasarım genelinde tutarlılık sağlar.

Birkaç utility class örneği:

- **.text-center**, **text-align: center;** uygulayabilir.
- **.mt-4**, **margin-top: 1rem;** uygulayabilir (4 değerinin 1rem'e eşit olduğu bir boşluk ölçeği varsayıldığında).
- **.bg-primary**, stil rehberinizde primary renk olarak belirlenmiş arka plan rengini uygulayabilir.
- **.d-block**, **display: block;** ayarlamak için kullanılabilir.

Tailwind CSS, Bootstrap ve Tachyons gibi pek çok popüler CSS framework'ü utility-first CSS yaklaşımını öne çıkarır ve stil ihtiyaçlarının çoğunu karşılayan geniş bir utility class yelpazesi sunar.

Utility class yaklaşımının hem destekçileri hem de eleştirmenleri vardır. Bazı geliştiriciler fazla custom CSS yazmadan arayüz oluşturmanın hızını ve kolaylığını takdir ederken bazıları bunun gereğinden uzun HTML'e ve olası okunabilirlik sorunlarına yol açtığını düşünür. Tercih, kişisel yaklaşıma ve proje gereksinimlerine bağlıdır.

### 6. CSS Framework

CSS framework, bir web sitesinin geliştirilmesine başlarken temel olarak kullanılmak üzere önceden hazırlanmış bir kütüphanedir. Genellikle tasarım sürecini standartlaştıran, responsive yapıyı ve tarayıcılar arası uyumluluğu sağlamaya yardımcı olan bir grid sistemi, yeniden kullanılabilir component'ler ve utility class'lar sunar.

Bir CSS framework'ünün temel özellikleri şunları içerebilir:

1. **Grid Sistemi:** İçeriğinizi barındıran satır ve sütunlar aracılığıyla sayfa layout'ları oluşturmanıza yardımcı olur.
2. **Önceden Tanımlanmış Stiller:** Tipografi, form, button, table, navigation bar ve diğer arayüz component'leri için kullanıma hazır stillerle gelir.
3. **Responsive Tasarım:** Framework'lerin çoğu mobile-first bir yaklaşım benimser ve tasarımın responsive ve mobil uyumlu olmasını sağlamak için farklı ekran boyutlarına yönelik media query'ler içerir.
4. **Tarayıcılar Arası Uyumluluk:** Tarayıcıların sunduğu varsayılan stillerden kaynaklanabilen tutarsızlıkları azaltmak için farklı tarayıcılarda normalize edilmiş stiller içerir.
5. **Özelleştirme:** Genellikle geliştiricilerin varsayılan stilleri override etmesine ve framework özelliklerini sitenin kendine özgü tasarımıyla bütünleştirmesine olanak tanır.
6. **Utility Class'lar:** Element'leri gizleme, metin hizalamasını değiştirme veya padding ve margin ayarlama gibi yaygın görevler için utility class'lar sağlar.
7. **JavaScript Entegrasyonu:** Bazı framework'ler modal, dropdown ve tab gibi elementlere işlev kazandırmak için JavaScript component'leriyle birlikte gelir.

Popüler CSS framework'leri şunlardır:

- **Bootstrap:** Geniş bir topluluğa, kapsamlı dokümantasyona ve çok çeşitli component'lere sahip en popüler framework'lerden biridir.
- **Foundation:** Profesyonel ve esnek tasarım yetenekleri sunan enterprise seviyesinde bir framework olmaya odaklanır.
- **Tailwind CSS:** Tasarımları doğrudan markup içinde oluşturmak için düşük seviyeli utility class'lar sağlayan utility-first bir framework'tür.
- **Bulma:** Flexbox tabanlı, sadeliği ve kullanım kolaylığıyla bilinen modern bir framework'tür.
- **Materialize:** Google'ın Material Design yönergelerine uygun component'ler ve animasyonlar sunan, Material Design ilkelerini temel alan bir framework'tür.

CSS framework'leri, temel tasarım yapısını kurarken zaman ve emek kazandırabildikleri için hızlı geliştirme ve prototipleme açısından büyük avantaj sağlar. Bununla birlikte öğrenme eğrileri olabilir ve dikkatli kullanılmadıklarında bazı durumlarda gereğinden büyük codebase'lere yol açabilirler. Geliştiricilerin artıları ve eksileri değerlendirerek projenin ihtiyaçlarına en uygun framework'ü seçmesi önemlidir.

### 7. Component Kütüphanesi

Component kütüphanesi, web veya mobil uygulamalar için yeniden kullanılabilir component'lerden oluşan bir koleksiyondur. Bu component'ler button ve input gibi basit elementlerden date picker, modal ve data grid gibi karmaşık UI yapılarına kadar uzanabilir. Component kütüphanesinin amacı, geliştiricilerin kullanıcı arayüzlerini daha verimli şekilde oluşturmak için kullanabileceği tutarlı bir yapı taşı seti sunmaktır.

Component kütüphanelerinin temel yönleri şunlardır:

1. **Yeniden Kullanılabilirlik:** Component'ler, bir uygulamanın farklı bölümlerinde ve hatta farklı projelerde yeniden kullanılmak üzere tasarlanır.
2. **Tutarlılık:** Aynı kütüphanedeki component'leri kullanarak uygulamanız genelinde tutarlı bir görünüm ve deneyim sağlarsınız; bu, kullanıcı deneyimi ve marka kimliği açısından önemlidir.
3. **Verimlilik:** Geliştiriciler yaygın UI elementlerini sıfırdan yazmak zorunda kalmadıkları için zaman kazanır.
4. **Bakım Kolaylığı:** Stil veya davranış güncellemeleri tek bir yerde yapılabilir ve değişiklikler component'in kullanıldığı her yere yansır.
5. **Dokümantasyon:** Component kütüphaneleri genellikle component'lerin nasıl kullanılacağını ve hangi property'leri kabul ettiğini açıklayan dokümantasyonla birlikte gelir.
6. **Özelleştirme:** Birçok component kütüphanesi, projenizin tasarım ve işlev ihtiyaçlarına uyum sağlamak için kapsamlı özelleştirme seçenekleri sunar.

Component kütüphaneleri genel amaçlı veya belirli bir alana özel olabilir:

- Material-UI, Ant Design ve Bootstrap'in React component'leri gibi **Genel Amaçlı Kütüphaneler**, web uygulamaları oluştururken genel kullanıma yönelik geniş bir element yelpazesi sunar.
- **Belirli Bir Alana Özel Kütüphaneler**, konum tabanlı uygulamalara yönelik bir harita UI kütüphanesi gibi belirli sektör veya uygulamalara uyarlanmış component'ler sağlar.

React, Vue ve Angular gibi birçok modern front-end framework'ünün kendi component kütüphanesi ekosistemi vardır. Bu kütüphaneler framework'ün ilkelerine uyar ve framework'ü kullanan projelere sorunsuz biçimde entegre olacak şekilde tasarlanır.

Bir component kütüphanesi kullanmak geliştirme sürecini önemli ölçüde hızlandırabilir. Ancak geliştirme başladıktan sonra kütüphane değiştirmek zor olabileceği için proje ihtiyaçlarıyla uyumlu olanı seçmek önemlidir.
