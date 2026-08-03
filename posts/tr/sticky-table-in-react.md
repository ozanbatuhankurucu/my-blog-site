---
title: "React ve TailwindCSS ile Yeniden Kullanılabilir Sticky Table Component'i Geliştirmek"
description: "Çok yönlü ve kullanıcı dostu bir Sticky Table component'ini React ile kolayca geliştirin. Sticky Table component'i, büyük veri kümelerini rahatça sunmanıza olanak tanırken scroll sırasında yalnızca header satırını değil, belirlediğiniz sütunları da sabit tutmanızı sağlar. Bu esnek ve özelleştirilebilir çözüm, önemli veri noktalarını sürekli görünür tutarak kullanıcı deneyimini geliştirir. Finansal kayıtlar, kullanıcı bilgileri ve ürün stokları için ideal olan component'i projenizin gereksinimlerine göre uyarlayın. Güçlü ve uyarlanabilir Sticky Table component'iyle React uygulamalarınızı bugün bir üst seviyeye taşıyın!"
---

![Sticky Table component'i](https://www.ozanbatuhankurucu.com/images/stickyTable.png)

### Giriş

Web geliştirme dünyasında yeniden kullanılabilir component'ler geliştirmek, verimliliğin ve bakım kolaylığının temel göstergelerinden biridir. Çok sayıdaki yeniden kullanılabilir component arasında Sticky Table, büyük veri kümelerini düzenli ve kullanıcı dostu biçimde sunmak için önemli bir araç olarak öne çıkar. Bu yazıda stil oluşturmak için TailwindCSS, özelleştirme seçeneklerini artırmak için de inline style kullanarak React'te çok yönlü bir Sticky Table component'i geliştirme sürecini inceleyeceğiz.

### 1. Sticky Table Component'ine Neden İhtiyaç Duyulduğunu Anlamak

Uygulama ayrıntılarına geçmeden önce Sticky Table component'inin önemini anlayalım. Finansal kayıtlar veya ürün stokları gibi büyük veri kümeleri, doğru biçimde düzenlenmediğinde kullanıcıları zorlayabilir. Sticky Table; scroll sırasında header satırını ve belirlenen sütunları sabit tutarak bir çözüm sunar, böylece kullanıcıların context'i korumasına ve veri noktalarını kolayca tanımlamasına yardımcı olur.

### 2. Sticky Table Component'ini Tanıtma

Sticky Table component'imiz, kesintisiz bir kullanıcı deneyimi oluşturmak için React'in gücünden yararlanır. `headers`, `rows`, `stickyColumnsCount`, `groupHeaders` ve `headerHeight` dâhil olmak üzere çeşitli parametreleri kabul eder. TailwindCSS class'ları ve inline style kullanımı, özelleştirme ve uyarlanabilirlik sağlayarak component'i farklı projeler için uygun hâle getirir.

### 3. Temel Component'lerin İncelenmesi

Sticky Table'ımızın temel component'lerini inceleyelim:

**StickyTable:** Table'ın genel yapısını ve davranışını yöneten ana component'tir. Kullanıcının tanımladığı sticky sütunları ve header gruplarını yönetir.

**HeadersType:** Sütun başlıkları ve genişlikleri dâhil olmak üzere table header'larının yapısını tanımlar.

**GroupHeaders:** Daha iyi düzen ve sticky davranışı için kullanıcıların header'ları gruplamasına olanak tanır.

**RowType:** Veri kümesindeki her satırı temsil eder ve ilgili verileri içeren sütunları barındırır.

### 4. Stil Yaklaşımı: TailwindCSS ve Inline Style

TailwindCSS, stil oluşturma görevlerini kolaylaştıran utility-first bir CSS framework'üdür. Layout, boşluk ve border için sunduğu class'ları kullanarak custom CSS ihtiyacını önemli ölçüde azaltacağız. Ayrıca ayrıntılı ayarlamalar için inline style kullanarak geliştiricilere component'i projelerinin kendine özgü gereksinimlerine uyarlama esnekliği sağlayacağız.

### 5. Sticky Table Component'ini Uygulama

Sticky Table component'imizin öncelikli hedeflerinden biri yeniden kullanılabilirliktir. Farklı veri kümelerinin, header yapılarının ve stil tercihlerinin props aracılığıyla nasıl aktarılacağını göstererek geliştiricilerin component'i çeşitli projelere sorunsuz biçimde entegre etmesini sağlayacağız.

```
import StickyTable, {
  GroupHeaders,
  HeadersType,
  RowType
} from "../components/StickyTable"

const HomePage = () => {
  const stickyColumnsCount = 3
  const columnsCount = 15
  const rowsCount = 20

  const rows: RowType[] = Array.from({ length: rowsCount }, (_, index) => ({
    key: String(index),
    columns: Array.from({ length: columnsCount }, (_, index) => ({
      tableData: `Content ${index + 1}`,
      tableDataClassName: index === 2 ? "border-r" : undefined
    })),

    commonColumnClasses: "bg-white border-grey"
  }))

  const headers: HeadersType = {
    headersData: Array.from({ length: columnsCount }, (_, index) => ({
      columnWidth: 100,
      title: `Title: ${index + 1}`,
      className: index === 2 ? "border-r" : undefined
    })),
    commonHeaderClasses: "border-b border-grey !text-sm"
  }

  const groupHeaders: GroupHeaders[] = [
    {
      stickyColumnsCountData: 1,
      commonHeaderClasses: "border-b bg-white border-grey !text-sm",
      headersData: [
        {
          span: 3,
          title: "Group Header1",
          className: "border-r"
        },
        {
          span: 12,
          title: "Group Header2"
        }
      ]
    }
  ]

  return (
    <>
      <div className='max-w-[1250px] mx-auto border border-grey rounded-md p-2'>
        <StickyTable
          headerHeight={42}
          stickyColumnsCount={stickyColumnsCount}
          isDataEmpty={false}
          loading={false}
          rows={rows}
          headers={headers}
          groupHeaders={groupHeaders}
        />
      </div>
    </>
  )
}

export default HomePage
```

### Sonuç

React'te TailwindCSS ve inline style kullanarak yeniden kullanılabilir bir Sticky Table component'i geliştirmek, büyük veri kümelerini kolayca sunabilmeleri için geliştiricilere güçlü bir araç sağlar. Header satırlarını ve belirlenen sütunları scroll sırasında sabit tutarak kullanıcıların veriler arasında verimli biçimde gezinmesine ve context'i kolayca korumasına yardımcı olur. Bu component'in esnekliği ve özelleştirilebilirliği, onu farklı sektörlerdeki projeler için son derece değerli bir çözüm hâline getirir. Sticky Table component'ini React uygulamalarınıza bugünden eklemeye başlayın ve veri sunumunuzu yeni bir seviyeye taşıyın. Keyifli kodlamalar!

### Yararlı kaynaklar

- [Yeniden Kullanılabilir Sticky Table Component'i Kaynak Kodu](https://github.com/ozanbatuhankurucu/my-blog-site/commit/a98b26244a80550a3e1e7c977d5a9a8e0b1cfae2)
