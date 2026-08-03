---
title: 'GPT 5.6 Sol ve Fable 5: İki Öncü AI Modelinin Uygulamalı Karşılaştırması'
description: "OpenAI'ın GPT 5.6 Sol (Sol, Terra, Luna) modeliyle Anthropic'in Fable 5 modelinin derinlemesine ve uygulamalı karşılaştırması. Codex ve Claude Code içinde gerçek agentic geliştirmeler, doğrudan API testleri, maliyet ve token verimliliği analizleri, latency ölçümleri ve hangi modelin ne zaman tercih edilmesi gerektiğine dair pratik bir değerlendirme."
---

OpenAI sonunda **Sol**, **Terra** ve **Luna** modellerinden oluşan GPT 5.6 ailesini yayınladı; lansman benchmark'ları neredeyse gerçek olamayacak kadar iyi görünüyor. Pazarlama grafiklerine göre Sol, öne çıkan değerlendirmelerde yalnızca Opus 4.8 ve Fable 5'i geçmekle kalmıyor, bunu maliyetin çok küçük bir kısmıyla başarıyor. Ancak benchmark'lar hikâyenin yalnızca bir bölümünü anlatır. Asıl önemli olan, bir modelin günlük işlerinizi gerçekten yürütürken nasıl davrandığıdır: bir agent harness içinde kod yazmak, tek seferde API çağrıları yapmak, gece 02.00'de codebase'inizi refactor etmek ve prompt bilinçli olarak belirsiz bırakıldığında doğru kararları vermek.

Bu yazı, **GPT 5.6 Sol** (Codex üzerinden) ile **Fable 5** (Claude Code üzerinden) arasında bir tam gün boyunca yan yana yapılan testlerin ve çok sayıda hızlı, tek seferlik API karşılaştırmasının sonucudur. Amaç benchmark tablolarını yeniden üretmek değil; önemli olan tek soruya pratik ve kanıta dayalı bir yanıt vermektir: **Hangi modeli, ne için ve ne zaman kullanmalısınız?**

## Kadro: Aslında Neleri Karşılaştırıyoruz?

Sonuçlara geçmeden önce masadaki modelleri kısaca hatırlayalım:

- **GPT 5.6 Sol** — OpenAI'ın yeni 5.6 serisinin amiral gemisi modeli. Sol'a, sırasıyla daha düşük maliyeti ve daha düşük latency'yi hedefleyen iki küçük kardeşi **Terra** ve **Luna** eşlik ediyor. Sol, OpenAI'ın günlük kullanım için en yetenekli modeli olarak konumlandırılıyor.
- **Fable 5** — Anthropic'in mevcut nesil öncü modeli. Şirketin en yetenekli reasoning ve kodlama modeli olarak pazarlanıyor ve buna uygun biçimde fiyatlandırılıyor.
- **Opus 4.8** — Anthropic'in önceki amiral gemisi; burada bilinen bir referans noktası olarak kullanılıyor.
- **GPT 5.5** — OpenAI'ın yerini yeni seriye bırakan amiral gemisi; seviye karşılaştırması için anılıyor.

Başlangıçta önemli bir çerçeveleme notu: Sol, Fable 5 ile değil, yaklaşık **Opus 4.8** ile aynı fiyat seviyesinde. Bu gerçek, yazıdaki neredeyse her sonucu dolaylı olarak şekillendiriyor. Sol aslında bir Fable 5 katili olmaya çalışmıyor; kendi fiyat aralığındaki en iyi model olmayı hedefliyor. Sonuçları yorumlarken bu ayrım büyük önem taşıyor.

## Agentic Deney 1: Oynanabilir Bir Açık Dünya Bisiklet Oyunu Geliştirmek

İlk deney, iki modelin karşı karşıya geldiği agentic bir geliştirme çalışmasıydı. Her iki model de tamamen aynı prompt'u aldı:

> Tarayıcıda çalışan, gerçekten eğlenceli, oynanabilir, açık dünya bir bisiklet oyunu geliştir. Yaratıcılık konusunda tamamen özgürsün.

Fable 5, Claude Code içinde; GPT 5.6 Sol ise Codex içinde çalıştı.

### Ortaya Çıkan Sonuç

Sol; çalışan kontrolleri olan (WASD, bunny hop için boşluk, hareketler için Q/E, boost için shift), yukarıdan kuş bakışı görünen bir şehir üretti. Çarpışmalar işleniyor, coin'ler toplanabiliyor ve havadayken hareketler doğru biçimde çalışıyordu. İşlevsel olarak başarılıydı; ancak kamera sıkışık, dünya ise küçük hissettiriyordu.

Fable 5 belirgin biçimde farklı bir şey üretti: şehir içinde araç kullanma sandbox'ına ruhen daha yakın hissettiren, 3D ve neredeyse birinci şahıs bakış açısına sahip bir açık dünya sahnesi. Harita daha büyük hissettiriyor, rampalardaki fizik daha karakterli görünüyor ve genel “hissi”, çalışan bir prototipten çok gerçek bir oyuna yaklaşıyordu.

Hangisini oynamayı tercih edeceğinizi seçmeniz gerekseydi Fable 5 açık ara kazanırdı.

### Maliyet

| Metrik        | Fable 5     | GPT 5.6 Sol |
| ------------- | ----------- | ----------- |
| Süre          | 21 dk 37 sn | ~23 dk      |
| Output token  | ~90.000     | ~31.000     |
| Toplam maliyet | **~$14,22** | **~$4,50**  |

Sol **yaklaşık 3 kat daha ucuzdu**, **yaklaşık %65 daha az output token** harcadı ve işlevsel, oynanabilir bir prototip üretti. Fable 5 her şeyden çok daha fazla harcadı ve fark edilir derecede daha iyi bir oyun ortaya çıkardı. Bu durum tekrar eden bir temaya dönüşüyor: Sol çalışan bir şey sunuyor; Fable 5 ise etkileyici bir şey sunuyor.

## Agentic Deney 2: Kaydırmayı Durduran Web Sitesi

İkinci prompt bilinçli olarak ucu açık bırakıldı:

> Hayal edebileceğin en etkileyici, interaktif ve insanları kaydırırken durduracak web sitesini geliştir.

Her iki model de scroll odaklı, 3D, ses destekli bir anlatı sitesi sundu. Fable 5, “10 milyar yıllık” kozmik bir yolculuk geliştirdi: bulutlar yerini Big Bang'e, ilk ışığa, yıldızların çöküşüne ve süpernovaya bırakıyor; sonunda “size” ulaşıyordu. Mouse hareketlerine tepki veren arka planlar, ses tasarımı ve tempo gerçekten etkileyici bir an yarattı.

Sol, yapısal olarak çok benzer bir yaklaşımla “Vesper Archive” adlı bir çalışma geliştirdi: interaktif bir 3D arka plan, scroll ile tetiklenen anlatı ve ortam sesi. Başarılı ve hoştu; ancak aynı seviyede değildi.

### Maliyet

| Metrik        | Fable 5     | GPT 5.6 Sol |
| ------------- | ----------- | ----------- |
| Süre          | ~23 dk      | ~7 dk       |
| Output token  | ~80.000     | ~20.000     |
| Toplam maliyet | **~$19,24** | **~$1,00+** |

Ekonomik boyutun düşünmesi gerçekten rahatsız edici hâle geldiği nokta burası. Fable'ın çıktısı daha iyiydi; peki **20 kat daha mı iyiydi**? Neredeyse kesinlikle hayır. Sol'a daha uzun bir bütçe verip Fable kadar harcayana dek yineleme yapmasına izin verseydiniz sonuç çok daha yakın olabilirdi. Ancak varsayılan hâliyle, tek bir çalıştırmada Fable daha akılda kalıcı bir ürün ortaya koydu.

## Agentic Deney 3: Temelden Farklı Beş Görsel Öge

Üçüncü prompt, modelin estetik anlayışını ve çeşitliliğini zorlamak için tasarlandı:

> Benim için temelden farklı beş görsel öge tasarla. Bunlar oyun, sunum, web sitesi, simülasyon ya da istediğin herhangi bir şey olabilir.

Her model, birbiriyle ilişkili beş projeden oluşan bir galeri üretti.

**Fable 5'in galerisi (“Five Self-Contained Worlds”):**

1. _Singularity_ — soyut, interaktif bir uzay-zaman deneyimi.
2. _Terra_ — günün saatine göre değişen ve mouse ile yönlendirilen bir uçuş simülatörü.
3. _Orbit_ — arcade tarzı coin toplama/kaçınma oyunu (menu overlay bug'ı içeriyor).
4. _Inkflow_ — generative art karalama aracı.
5. _The Descent_ — basınç, sıcaklık ve ışığın değiştiği, scroll odaklı bir su altı yolculuğu.

**Sol'un galerisi (“Impossible Objects — Five Tiny Worlds, No Frameworks”):**

1. _Aurora Orchestra_ — kuzey ışıkları synthesizer'ı (oyun sırasında bazı paneller bozuldu).
2. _Atlas of Lost Echoes_ — beş gizli “yankıyı” toplayan bir keşif haritası.
3. _The Glyph Heist_ — yazma/yazmama üzerine kurulu bir mini oyun.
4. Beş slide'dan oluşan bir sunum — grubun görsel olarak en güçlü çalışması.
5. _Tide Pool_ — güneş ve yağmur kontrollerine sahip bir yaşam simülasyonu sandbox'ı.

Her iki galeri de ilgi çekiciydi ve ikisinde de bug'lar vardı. Sol'un çalışmaları **tematik açıdan daha çeşitli** hissettirdi: bir ses oyuncağı, keşif haritası, yazma oyunu, slide sunumu ve simülasyon gerçekten beş farklı kategori oluşturuyor. Fable'ın çalışmaları tek tek daha özenliydi, ancak ortak bir yaklaşım olarak büyük ölçüde “scroll odaklı interaktif deneyime” dayanıyordu.

Kazanan: Bilinçli olarak belirsiz bırakılmış brief'te daha geniş bir yelpaze sunduğu için az farkla **Sol**.

### Maliyet

| Metrik        | Fable 5     | GPT 5.6 Sol |
| ------------- | ----------- | ----------- |
| Süre          | ~15 dk      | ~7 dk       |
| Output token  | ~65.000     | ~22.000     |
| Toplam maliyet | **~$15,00** | **~$1,00+** |

Aynı pattern: Sol yaklaşık 15 kat daha ucuz ve 2 kat daha hızlıydı.

## Karşı Karşıya API Testi: 27 Hızlı ve Tek Seferlik Görev

Harness kullanan agentic loop'lar bir iş yüküdür. Diğeri ise — muhtemelen çoğu geliştiricinin gerçekten para ödediği iş yükü — kısa ve çoğunlukla stateless API çağrılarıdır: “İşte bir kod parçası, sorunun ne olduğunu söyle”, “Bunu özetle”, “Bunu dönüştür”, “Bana bu function'ı yaz.” Bu modu test etmek için iki model de ham API üzerinden 27 hızlı ve tek seferlik görevden oluşan bir grupta çalıştırıldı.

### Ham Puanlar

| Metrik                              | GPT 5.6 Sol | Fable 5 |
| ----------------------------------- | ----------- | ------- |
| Kazanılan görev                     | **24**      | 3       |
| Gerçekten yanıt verdiğindeki puan   | **0,98**    | 0,966   |
| Çalıştırmanın toplam API maliyeti   | **~$16**    | ~$63    |

İlk bakışta bu sonuç Sol için ezici bir zafer gibi görünüyor. İkinci satırı tekrar okuyun: **Fable 5 gerçekten bir yanıt döndürdüğünde iki modelin kalitesi neredeyse aynıydı**. Sol'un skor tablosundaki üstünlüğünün büyük bölümü, Fable 5'in kayda değer sayıda prompt'u reddetmesinden kaynaklanıyordu. Güvenlik ve ret guardrail'leri agresif biçimde ayarlanmıştı ve sınırda kalan isteklerde yanıt vermeyi doğrudan reddetti.

Dolayısıyla dürüst değerlendirme şu şekilde:

- **Yanıt verdiğindeki kalite açısından**: Sol ≈ Fable 5.
- **Yanıt verme isteği açısından**: Sol >> Fable 5.
- **Maliyet açısından**: Sol ≈ Fable 5'in %25'i.

Üst sınırın “dâhice reasoning” değil, “güvenilir biçimde yeterli bir yanıt üretmek” olduğu kısa ve düşük riskli görevlerde Sol, kaliteden fazla ödün vermeden birim ekonomide üstünlük sağlıyor.

### Token Verimliliği

Sol'un fiyat avantajı yalnızca token başına indirimden gelmiyor; model aynı zamanda **mutlak anlamda daha yüksek token verimliliğine** sahip. Sol, eşdeğer görevlerde hem input hem output tarafında tutarlı olarak Fable 5'in yaklaşık yarısı kadar token kullanıyor. İki model token başına aynı fiyatla sunulsaydı bile Sol yine anlamlı ölçüde daha ucuz olurdu. Bunun bir kısmı geçmişten beri Claude Code'a göre daha yalın olan Codex harness'tan, bir kısmı da modelin kendisinden kaynaklanıyor olabilir.

### Latency

| Latency metriği           | GPT 5.6 Sol | Fable 5 |
| ------------------------- | ----------- | ------- |
| **Median** API latency    | Daha hızlı  | Daha yavaş |
| **Ortalama** API latency  | Daha yavaş  | Daha hızlı |

Bu ayrım ilginç: Sol'un tipik yanıtı daha hızlı, ancak **en kötü senaryodaki** yanıtları belirgin biçimde daha uzun sürerek ortalamayı yükseltiyor. Fable 5 daha tutarlı; yaklaşık 20 saniye civarında kalıyor ve iki yönde de nadiren sürpriz yapıyor. Agentic geliştirmelerde Fable 5 genel olarak neredeyse her zaman daha yavaştı.

Ürününüz için p50 latency önemliyse Sol kazanır. p99 öngörülebilirliğini önemsiyorsanız Fable 5 kazanır.

## Maliyet: Rahatsız Edici Grafik

Agentic geliştirmeler ile API çalıştırmasını birlikte değerlendirdiğimizde net bir tablo ortaya çıkıyor:

- Ham API üzerindeki tek seferlik iş yüklerinde Sol yaklaşık $9, Fable ise yaklaşık $14 tuttu; Sol yaklaşık %35 daha ucuzdu.
- Codex ve Claude Code içindeki agentic, çok turlu ve araç kullanan geliştirmelerde fark çarpıcı ölçüde büyüdü; görev başına maliyette çoğu zaman Sol lehine **10–20 kat daha ucuzdu**.

Çıkarılacak ders: **İki model arasındaki fark API seviyesinde küçük, harness seviyesinde ise çok büyüktür**. Fable 5 bir agent loop içinde agresif, Sol ise tutumlu harcama yapıyor. Bu davranışlardan hangisinin “doğru” olduğu, daha fazla keşfin getirdiği marjinal kaliteye ne kadar değer verdiğinize tamamen bağlıdır.

## Kişilik: İki Model Gerçekte Nasıl Hissettiriyor?

Rakamlar “neyi” açıklar. Bu modellerle bütün gün çalışmak ise “nasılı” öğretir. Bir günlük uygulamalı kullanımın ardından tutarlı bir pattern ortaya çıktı.

### Fable 5 bir yönetici veya kurucu ortak gibi hissettiriyor

Fable 5 itiraz eder. Bir isteği okur, yaklaşımınızın bir bölümüne katılmadığına karar verir ve çalışmaya başlamadan önce bunu size söyler. Stajyer gibi değil, danışman gibi davranır. Bu çoğu zaman tam olarak istediğiniz şeydir: iş akışınıza yerleşik bir ikinci görüş kazandırır ve nihai ürün genellikle daha düşünülmüş olur. Bazen de can sıkıcıdır; kimi zaman yeniden müzakere edilmesini değil, işin yapılmasını istersiniz.

Fable 5'in öne çıktığı alanlar:

- Zor problemlerde **saf yetenek**.
- **Yaratıcı yazarlık** ve brainstorming.
- **Stratejik tavsiye** ve ürün değerlendirmesi.
- Uzun context'lerde **karmaşık reasoning**.
- **Over-engineering'den kaçınma** — daha az spekülatif test ve scaffolding yazar.
- Estetik anlayışın throughput'tan daha önemli olduğu **video uzunluğundaki yaratıcı çıktılar**.

### Sol son derece güçlü bir çalışan gibi hissettiriyor

Sol talimatınızı okur, uygular ve işi teslim eder. Editoryal yorum yapmaz. Daha hızlı, daha ucuz, daha tutarlı ve daha kelimesi kelimesine çalışan bir modeldir.

Sol'un öne çıktığı alanlar:

- **Fiyat** — fark büyük.
- **Computer use** ve tool calling — bir harness içinde belirgin biçimde daha güvenilir.
- Kendi kodunuza karşı **devil's advocate rolü üstlenme** — edge case'ler ve bug'lar konusunda dikkatlidir.
- **Doğrulama ve test yazma** — memnuniyetle çok sayıda test üretir (bazen gereğinden fazla).
- Tipik (median) latency'de **hız**.
- İyi tanımlanmış görevleri büyük ölçekte **uygulama**.

En net zihinsel model şu: **Fable 5 harika bir yönetici. Sol harika bir çalışan. Hayal edilen düzen ise Sol agent'larından oluşan bir filoyu yöneten Fable 5'tir.**

## Sol, Model Hiyerarşisinde Gerçekte Nerede Duruyor?

Bir günlük testin en dürüst değerlendirmesi:

```
Tier S    Fable 5
                    ← real, visible gap
Tier A    GPT 5.6 Sol   ≈   Opus 4.8
                    ← smaller gap
Tier B    GPT 5.5
```

Sol, GPT 5.5'a göre açık bir ilerleme. Opus 4.8 ile yaklaşık aynı seviyede. En zorlu reasoning ve yaratıcı görevlerde **Fable 5 seviyesinde değil**; dürüst olmak gerekirse olsaydı OpenAI onu buna uygun fiyatlandırırdı. Sol'un Opus 4.8 fiyat seviyesinde yer alması, OpenAI'ın şirket içinde onu nasıl sıraladığına dair başlı başına güçlü bir işaret.

Bu durum daha ilginç bir soruyu gündeme getiriyor: **Neden 6 değil de 5.6 olarak adlandırıldı?** Fable, 5'e ulaşmak için tam bir sürüm atladı. Sol gerçekten Opus 4.8 veya GPT 5.5'ın bir nesil ilerisinde olsaydı ona 5.6 adını vermek garip bir özdenetim olurdu. İsimlendirme, OpenAI'ın daha büyük bir modeli beklettiğini düşündürüyor. Fable 5'in asıl rakibi muhtemelen Sol değil, GPT 6 adıyla yayınlanacak modeldir.

## Pratik Öneriler: Hangi Model, Ne Zaman?

Deneylerden çıkarılan sonuçlar:

**Şu durumlarda Fable 5'i tercih edin:**

- Görev ucu açık ve estetik anlayışına dayalıysa (yaratıcı siteler, sunumlar, hikâye biçimindeki ürünler).
- Stratejik reasoning, ürün tavsiyesi veya uzun biçimli yazı gerekiyorsa.
- Kalite üst sınırı maliyetten daha önemliyse; tek seferlik, yüksek riskli işlerde.
- Uygulamaya geçmeden önce çerçevelemenizi sorgulayacak bir model istiyorsanız.
- “Kurucu ortak” sizseniz ve karşınızda da bir “kurucu ortak” istiyorsanız.

**Şu durumlarda GPT 5.6 Sol'u tercih edin:**

- Görev iyi tanımlanmışsa ve teslim edilmesini istiyorsanız.
- Bir agent loop çalıştırıyor, maliyet ve token kullanımını önemsiyorsanız.
- Computer use, tool calling veya dikkatli doğrulama gerekiyorsa.
- Interaktif UX için düşük median latency istiyorsanız.
- İş yükü yüksek hacimli, orta zorlukta ve fiyat hassasiyetine sahipse.
- Reddetmek yerine güvenilir biçimde yanıt veren bir modele ihtiyacınız varsa.

**Çok kabaca bir dağıtım kuralı:** Görevin zorluğu 5/10 ise onu 10/10'luk bir modele göndermeyin. 6/10 seviyesindeki Sol doğru araçtır. Fable 5'i, marjinal kalitenin marjinal maliyete değdiği 8/10 ve üzeri görevler için ayırın.

## Ana Ders: Benchmark'lar Ürünün Kendisi Değildir

Bu lansmanı yalnızca benchmark grafiklerine göre değerlendirseydiniz Sol'un Fable 5'i kesin biçimde geçtiği sonucuna varırdınız. Yalnızca agentic geliştirme kalitesine göre değerlendirseydiniz Fable 5'in başka bir gezegende olduğu sonucuna ulaşırdınız. Her iki değerlendirme de eksik.

Gerçek hikâye bir **portföy hikâyesidir**: Sol ve Fable 5; farklı kişiliklere, fiyat noktalarına ve karşılaştırmalı avantajlara sahip, birbirini tamamlayan araçlardır. Sol birim ekonomide, computer use alanında ve tutarlı uygulamada kazanır. Fable 5 ise yetenek üst sınırında, yaratıcı estetikte ve stratejik reasoning'de öne çıkar. Çoğu ekip için doğru yanıt “hangisi” değil, **“her ikisini de akıllıca yönlendirmek”**tir.

Şimdilik pratik kullanım planı basit: hacim ve uygulama için varsayılan olarak Sol'u kullanın, gerçekten önemli anlarda Fable 5'e yükseltin ve release note'ları takip edin. Bu ağırlık sınıfındaki bir sonraki gerçek mücadele GPT 5.6 ile Fable 5 arasında olmayacak. OpenAI'ın GPT 6 için sessizce beklettiği modelle yaşanacak.
