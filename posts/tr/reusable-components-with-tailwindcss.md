---
title: "React'te TailwindCSS ve TypeScript ile Yeniden Kullanılabilir Component'ler Oluşturmak"
description: "React'te TailwindCSS ve TypeScript kullanarak yeniden kullanılabilir component'lerin nasıl oluşturulacağını öğrenin. Bu rehber button, card, modal, form input ve alert gibi temel component'leri ele alıyor. Web projelerinde verimliliği ve sürdürülebilirliği artırmak isteyen geliştiriciler için idealdir. Uygulamalı örnekler ve en iyi pratiklerle web geliştirme becerilerinizi ilerletin."
---

Yeniden kullanılabilir component'ler oluşturmak, verimliliği ve sürdürülebilirliği artırdığı için modern web geliştirmede kritik bir pratiktir. Bu yazıda React'te TailwindCSS ve TypeScript kullanarak yeniden kullanılabilir component'lerin nasıl geliştirileceğini inceleyeceğiz. Button, card, modal, form input ve alert olmak üzere birkaç temel component'in oluşturulmasını adım adım ele alacağız.

### 1. Button Component

Çok yönlü bir button component'i farklı style'lar, boyutlar ve state'lerle (örneğin disabled, loading) özelleştirilebilir.

**Özellikler:**

- Farklı variant'lar (primary, secondary, outline)
- Boyutlar (small, medium, large)
- Spinner içeren loading state'i

**Örnek Kod:**

```
import React from 'react';
import classNames from 'classnames';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  loading = false,
  disabled = false,
  onClick,
  children,
}) => {
  const baseStyles = 'px-4 py-2 rounded focus:outline-none';
  const variantStyles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    outline: 'bg-transparent border border-gray-500 text-gray-500 hover:bg-gray-100',
  };
  const sizeStyles = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
  };

  const classes = classNames(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    { 'opacity-50 cursor-not-allowed': loading || disabled },
  );

  return (
    <button className={classes} onClick={onClick} disabled={loading || disabled}>
      {loading ? <span className="spinner"></span> : children}
    </button>
  );
};

export default Button;

```

### 2. Card Component

Bir card component; görsel, başlık, açıklama ve action'lar dâhil olmak üzere içeriği yapılandırılmış biçimde göstermek için kullanılabilir.

**Özellikler:**

- Görsel header
- Başlık ve açıklama
- Action button'ları

**Örnek Kod:**

```
import React from 'react';

type CardProps = {
  image: string;
  title: string;
  description: string;
  actions?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ image, title, description, actions }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-700 mt-2">{description}</p>
        {actions && <div className="mt-4">{actions}</div>}
      </div>
    </div>
  );
};

export default Card;

```

### 3. Modal Component

Bir modal dialog component'i, farklı boyutları yöneterek ve header, body ile footer bölümleri sunarak içeriği pop-up pencerede göstermek için kullanılabilir.

**Özellikler:**

- Farklı boyutlar (small, medium, large)
- Header, body ve footer bölümleri
- Kapatma button'ı

```
import React from 'react';
import ReactDOM from 'react-dom';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  size?: 'small' | 'medium' | 'large';
  title: string;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, size = 'medium', title, children }) => {
  if (!isOpen) return null;

  const sizeClasses = {
    small: 'max-w-sm',
    medium: 'max-w-md',
    large: 'max-w-lg',
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className={`bg-white rounded-lg overflow-hidden shadow-lg ${sizeClasses[size]}`}>
        <div className="p-4 border-b">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button onClick={onClose} className="absolute top-4 right-4">
            &times;
          </button>
        </div>
        <div className="p-4">{children}</div>
        <div className="p-4 border-t">
          <button onClick={onClose} className="bg-blue-500 text-white px-4 py-2 rounded">
            Close
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;

```

### 4. Form Input Component

Bir form input component'i farklı input türlerini (text, email, password) yönetebilir; validation ve hata mesajlarını içerebilir.

**Özellikler:**

- Input türleri (text, email, password)
- Validation ve hata yönetimi

**Örnek Kod:**

```
import React from 'react';

type InputProps = {
  type: 'text' | 'email' | 'password';
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

const Input: React.FC<InputProps> = ({ type, label, value, onChange, error }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      {error && <p className="text-red-500 text-xs italic">{error}</p>}
    </div>
  );
};

export default Input;

```

### 5. Alert Component

Bir alert component'i farklı türlerde mesajları (success, error, warning, info) göstermek için kullanılabilir.

**Özellikler:**

- Alert türleri (success, error, warning, info)
- Kapatılabilir alert'ler

**Örnek Kod:**

```
import React from 'react';
import classNames from 'classnames';

type AlertProps = {
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  onClose?: () => void;
};

const Alert: React.FC<AlertProps> = ({ type, message, onClose }) => {
  const typeClasses = {
    success: 'bg-green-100 border-green-500 text-green-700',
    error: 'bg-red-100 border-red-500 text-red-700',
    warning: 'bg-yellow-100 border-yellow-500 text-yellow-700',
    info: 'bg-blue-100 border-blue-500 text-blue-700',
  };

  return (
    <div className={classNames('border-l-4 p-4', typeClasses[type])}>
      <div className="flex justify-between items-center">
        <p>{message}</p>
        {onClose && (
          <button onClick={onClose} className="text-lg font-bold">
            &times;
          </button>
        )}
      </div>
    </div>
  );
};

export default Alert;

```

Bu component'ler uygulamalarınızın yapı taşları olarak kullanılabilir; tutarlı bir tasarımı korumanıza ve kodun yeniden kullanılabilirliğini artırmanıza yardımcı olur. TailwindCSS az çabayla güzel ve responsive tasarımlar oluşturmanızı sağlarken TypeScript kodunuzun güçlü ve bakımı kolay olmasını güvence altına alır.
