---
title: "React Component'leri Tasarlamak: Temiz ve Verimli Kod İçin Pattern'ler"
description: "Geliştiricilerin daha verimli, modüler ve bakımı kolay uygulamalar oluşturmasını sağlayan temel React component tasarım pattern'lerini keşfedin. Esnek Render Props Pattern'den güçlü Higher Order Component (HOC) Pattern'e ve düzenli Container and Presentational Components Pattern'e kadar optimum performans ve yeniden kullanılabilirlik için React kodunuzu nasıl yapılandıracağınızı öğrenin. Her pattern'in avantajlarını gösteren uygulamalı örnekleri inceleyin ve günümüzün rekabetçi geliştirme dünyasında öne çıkan uygulamalar geliştirmek için React becerilerinizi ileri taşıyın."
---

Kullanıcı arayüzleri oluşturmaya yönelik popüler bir JavaScript kütüphanesi olan React, geliştiricilere etkileşimli ve dinamik uygulamalar oluşturmak için güçlü bir araç seti sundu. Component tabanlı mimarisiyle React, kodu daha verimli ve bakımı kolay biçimde düzenleyip yapılandırmak için tasarım pattern'lerinin kullanımını teşvik eder. Bu yazıda yaygın üç React component tasarım pattern'ini ayrıntılı biçimde inceleyeceğiz: Render Props Pattern, Higher Order Component (HOC) Pattern ve Container and Presentational Components Pattern. Her pattern'in amacını ve uygulanışını ele alacak, kullanımlarını göstermek için örnekler sunacağız.

## 1. Render Props Pattern

Render Props Pattern, bir fonksiyonun prop olarak iletilmesi yoluyla component'lerin diğer component'lerle işlevsellik paylaşmasına olanak tanıyan esnek bir yaklaşımdır. Bu pattern, prop'u kullanan component'in söz konusu fonksiyon tarafından belirlenen içeriği render etmesini sağlar. Pattern'in temel avantajı, component'lerin implementasyonlarını sıkı biçimde birbirine bağlamadan aralarında davranış paylaşabilmesidir.

### Uygulama:

Bir Tooltip component'i örneğini ele alalım. Button veya link gibi farklı component'ler tarafından tetiklenebilen bir Tooltip oluşturmak istiyoruz. Tooltip'in görünümünü kod içine sabitlemek yerine, tetikleyen component'e göre Tooltip içeriğini özelleştirmek için Render Props Pattern'i kullanacağız.

```
// Tooltip.js
import React from 'react';

const Tooltip = ({ text, children }) => (
  <div className="tooltip">
    {children}
    <span className="tooltip-text">{text}</span>
  </div>
);

export default Tooltip;

// Usage
import React from 'react';
import Tooltip from './Tooltip';

const App = () => (
  <div>
    <Tooltip text="Click me!">
      <button>Button</button>
    </Tooltip>
    <Tooltip text="Visit the website">
      <a href="/">Website</a>
    </Tooltip>
  </div>
);

export default App;
```

## 2. Higher Order Component (HOC) Pattern

Higher Order Component (HOC) Pattern, component'leri higher-order function'larla sarmalayarak component mantığının yeniden kullanılmasını sağlayan güçlü bir React yaklaşımıdır. Bu fonksiyonlar bir component'i argüman olarak alır ve ek işlevlere sahip, geliştirilmiş bir sürümünü döndürür. HOC'ler özellikle authentication, veri getirme ve kodun yeniden kullanılabilirliği gibi birden fazla alanı ilgilendiren konularda yararlıdır.

### Açıklama:

Belirli içerikleri render etmeden önce authentication gerektiren çeşitli component'lere sahip bir uygulama geliştirdiğinizi düşünün. Authentication mantığını her component'te tekrarlamak yerine, authentication'ı yöneten ve orijinal component'i sarmalayan bir higher-order component oluşturabilirsiniz. Böylece authentication mantığını merkezîleştirir ve uygulamanız genelinde tutarlılık sağlarsınız.

### Uygulama:

Authentication senaryosunu kullanan daha ayrıntılı bir örneği ele alalım. Önce parametre olarak bir component alan ve render işleminden önce authentication durumunu kontrol ederek bu component'in geliştirilmiş bir sürümünü döndüren `withAuth` adlı bir HOC oluşturursunuz.

```
// withAuth.js
import React from 'react';

const withAuth = (WrappedComponent) => {
  return class WithAuth extends React.Component {
    render() {
      if (this.props.isAuthenticated) {
        return <WrappedComponent {...this.props} />;
      } else {
        return <div>Please log in to view this content.</div>;
      }
    }
  };
};

export default withAuth;
```

Ardından `withAuth` HOC'yi korumalı bir profil sayfası gibi authentication gerektiren bir component'e uygularsınız:

```
// Profile.js
import React from 'react';

const Profile = ({ username }) => (
  <div>
    <h2>Welcome, {username}!</h2>
    <p>This is your profile page.</p>
  </div>
);

export default Profile;

// Usage
import React from 'react';
import withAuth from './withAuth';
import Profile from './Profile';

const AuthenticatedProfile = withAuth(Profile);

const App = () => (
  <div>
    <AuthenticatedProfile isAuthenticated={true} username="user123" />
  </div>
);

export default App;
```

Bu örnekte `AuthenticatedProfile` component'i, `withAuth` HOC'nin `Profile` component'ine uygulanmasıyla oluşturulur. HOC, authentication durumunu kontrol edip uygun içeriği render etme sorumluluğunu üstlenir.

Higher Order Component Pattern, karmaşık mantığı kapsülleyip birden fazla component arasında paylaşmanın bir yolunu sunarak kodun yeniden kullanılabilirliğini artırır ve uygulamanız genelinde tutarlı bir kullanıcı deneyimi sağlar.

## 3. Container and Presentational Components Pattern

Container and Presentational Components Pattern, React uygulamalarında sorumlulukların ayrılmasını vurgular. Component'leri iki kategoriye ayırır: container component'ler ve presentational component'ler. Container component'ler veri mantığını, state yönetimini ve harici servislerle etkileşimleri ele alırken presentational component'ler yalnızca UI öğelerini render etmeye odaklanır.

### Uygulama:

Bir container component'in API'den kullanıcı verilerini getirdiği ve render etmesi için bir presentational component'e aktardığı basit bir örnek oluşturalım.

```
// UserContainer.js
import React, { Component } from 'react';
import UserData from './UserData'; // Presentational component

class UserContainer extends Component {
  state = {
    user: null,
  };

  componentDidMount() {
    // Simulate API call
    fetch('/api/user')
      .then((response) => response.json())
      .then((data) => this.setState({ user: data }));
  }

  render() {
    return <UserData user={this.state.user} />;
  }
}

export default UserContainer;

// UserData.js (Presentational component)
import React from 'react';

const UserData = ({ user }) => (
  <div>
    <h2>User Profile</h2>
    {user ? (
      <div>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
    ) : (
      <p>Loading user data...</p>
    )}
  </div>
);

export default UserData;

// Usage
import React from 'react';
import UserContainer from './UserContainer';

const App = () => (
  <div>
    <UserContainer />
  </div>
);

export default App;
```

Bu örnekte `UserContainer` component'i veri getirme işlemini ve state'i yönetirken `UserData` component'i yalnızca kullanıcı profil verilerini render etmeye odaklanır. Bu ayrım, component'lerin birbirinden bağımsız biçimde bakımını, test edilmesini ve yeniden kullanılmasını kolaylaştırır.

### Sonuç

React component tasarım pattern'leri, component geliştirme sırasında karşılaşılan yaygın zorluklara pratik çözümler sunar. Render Props Pattern, Higher Order Component Pattern ve Container and Presentational Components Pattern; React uygulamalarınızı daha kolay bakım ve yeniden kullanım için nasıl yapılandırabileceğinizi gösteren örneklerden yalnızca birkaçıdır. Bu pattern'leri anlayıp uygun biçimde uygulayarak geliştirmesi, bakımı ve genişletilmesi daha kolay, daha verimli ve düzenli React uygulamaları oluşturabilirsiniz.
