---
title: "Building Reusable Components with TailwindCSS and TypeScript in React"
date: "2024-05-26"
img: "/images/reusablecompswithtailwindcss.webp"
category: "Featured Article"
description: "Learn how to create reusable components in React using TailwindCSS and TypeScript. This guide covers essential components like buttons, cards, modals, form inputs, and alerts. Perfect for developers looking to improve efficiency and maintainability in their web projects. Enhance your web development skills with practical examples and best practices."
---

Creating reusable components is a crucial practice in modern web development, as it enhances efficiency and maintainability. In this article, we will explore how to build reusable components using TailwindCSS and TypeScript in React. We'll walk through the creation of a few essential components: a button, a card, a modal, a form input, and an alert.

### 1. Button Component

A versatile button component can be customized with different styles, sizes, and states (e.g., disabled, loading).

**Features:**

- Different variants (primary, secondary, outline)
- Sizes (small, medium, large)
- Loading state with spinner

**Example Code:**

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

A card component can be used to display content in a structured manner, including an image, title, description, and actions.

**Features:**

- Image header
- Title and description
- Action buttons

**Example Code:**

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

A modal dialog component can be used to display content in a pop-up window, handling different sizes and including a header, body, and footer.

**Features:**

- Different sizes (small, medium, large)
- Header, body, and footer sections
- Close button

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

A form input component can handle different input types (text, email, password) and include validation and error messages.

**Features:**

- Input types (text, email, password)
- Validation and error handling

**Example Code:**

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

An alert component can be used to display different types of messages (success, error, warning, info).

**Features:**

- Alert types (success, error, warning, info)
- Dismissible alerts

**Example Code:**

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

These components can serve as the building blocks for your applications, helping you maintain a consistent design and improving code reusability. TailwindCSS allows you to create beautiful, responsive designs with minimal effort, while TypeScript ensures your code is robust and maintainable.
