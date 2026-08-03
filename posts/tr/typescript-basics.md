---
title: "TypeScript Temelleri"
description: "Bu kapsamlı yazıyla TypeScript'in temellerini öğrenin. JavaScript'in bir superset'i olan TypeScript, ek syntax ve type desteği sunar. TypeScript kodunun herhangi bir JavaScript ortamında çalıştırılmak üzere düz JavaScript'e compile edildiği süreci keşfedin. Number, string, boolean ve any gibi temel type'ların yanı sıra array, tuple, union ve enum yapılarını inceleyin. Interface ve class konularına derinlemesine girerek erişim belirleyicileri ve inheritance kavramlarını anlayın. Generic'ler, function interface'leri ve TypeScript'in React ile entegrasyonu hakkında bilgi edinin. TypeScript bilginizi daha da geliştirmek için GitHub kaynak kodlarına, video eğitimlerine ve bilgilendirici yazılara ulaşın."
---

### Kısa Giriş

TypeScript, JavaScript'in bir superset'idir ve JavaScript'in üzerine inşa edilmiştir. Önce TypeScript kodunu yazarsınız. Ardından bir TypeScript compiler kullanarak TypeScript kodunu düz JavaScript koduna compile edersiniz. Düz JavaScript kodunu elde ettiğinizde, JavaScript'in çalıştığı herhangi bir ortama deploy edebilirsiniz.

TypeScript dosyaları, JavaScript dosyalarının .js uzantısı yerine .ts uzantısını kullanır.

![TypeScript compiler'ın çalışma biçimi](https://res.cloudinary.com/dvejo6xq5/image/upload/v1643294165/what_is_typescript_compiler_cad3d4be53.png)

TypeScript, JavaScript syntax'ını kullanır ve type desteği sağlamak için ek syntax'lar sunar.

### Temel Type'lar

TypeScript'in temel primitive type'ları şunlardır: number, string, boolean, any.

```
let id: number = 1
let userName: string = 'John'
let isLoggedIn: boolean = true
let message: any = 'Hello' // any is a type that can be anything
```

### Array ve Tuple'lar

Array type'ları iki farklı biçimde yazılabilir: Array<T> ve T[].

```
let ids: Array<number> = [1, 2, 3]
let names: string[] = ['John', 'Jane']
```

TypeScript tuple'ları, sabit sayıda element içeren array'lerdir.

```
let person: [string, number] = ['John', 23]

// Tuple Array
let people: [string, number][] = [
  ['John', 23],
  ['Jane', 24]
]
```

### Union ve Enum

Union, içinde yer alan type'lardan herhangi biri olabilen bir type'tır.

```
let productID: number | string | boolean = 1
productID = '1'
```

Enum, adlandırılmış sabitlerden oluşan bir küme tanımlamanın yoludur. Üç enum türü vardır: Numeric, String ve Heterogeneous. Herhangi bir değer verilmediğinde değerler sırasıyla 0, 1, 2, 3 olarak atanır.

```
enum Direction1 {
  Up,
  Down,
  Left,
  Right
}

console.log(Direction1.Right) // 3

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
}

console.log(Direction2.Left) // Left
```

### Object'ler

Burada `type` yerine `interface` de kullanılabilir. Aralarında belirli farklar vardır ve gereksinime göre doğru olan tercih edilmelidir.

```
type User = {
  name: string
  age: number | null
  address?: string // ? means optional
}

let user: User = {
  name: 'John',
  age: null
}

```

### Type Assertion

Type Assertion, bir değerin belirli bir type'a sahip olduğunu compiler'a bildirmenin yoludur. TypeScript'i JSX ile kullanırken yalnızca `as` biçimindeki assertion'lara izin verilir.

```
let cid: any = 'a'
// let customerId = <number>customerId
let customerId = cid as number  //  customerId type is number anymore
```

### Function'lar

```
function add(a: number, b: number): number {
  return a + b
}

// Optional Parameters
function add2(a: number, b?: number): number {
  return a + (b || 0)
}

// Default Parameters
function add3(a: number, b: number = 0): number {
  return a + b
}

// Rest Parameters
// rest is a special type that represents an array of all the remaining arguments
function add4(a: number, b: number, ...rest: number[]): number {
  return a + b + rest.reduce((a, b) => a + b, 0)
}
add4(1, 2, 3, 4, 5) // 15

// Function Types
let add5: (a: number, b: number) => number

add5 = (a, b) => a + b

// Function Types with Union Types
let add6: (a: number, b: number) => number | string

add6 = (a, b) => a + b

// Function Types with Array Types
let add7: (a: number, b: number) => number[]

add7 = (a, b) => [a + b]

// Function Types with Tuple Types
let add8: (a: number, b: number) => [number, number]

add8 = (a, b) => [a + b, a - b]

// Function Types with Object Types
let add9: (a: number, b: number) => { a: number; b: number }

add9 = (a, b) => ({ a, b })

// Function Types with Function Types
let add10: (a: number, b: number) => (c: number) => number

add10 = (a, b) => (c) => a + b + c
```

### Interface'ler

Interface'ler, bir object'in yapısını tanımlamanın yoludur.

```
interface Person {
  name?: string
  readonly surname: string // readonly means that property cannot be changed
  age: number
}

const person1: Person = {
  surname: 'John',
  age: 23
}

person1.surname = 'Doe' // Error : Cannot assign to ‘surname’ because it is a read-only property.
```

### Function Interface'i

Function interface'leri, bir function'ın yapısını tanımlamak için kullanılır.

```
interface Calculation {
  (a: number, b: number): number
}

let addFn: Calculation = (a, b) => a + b
let subtractFn: Calculation = (a, b) => a - b
```

### Class'lar ve Erişim Belirleyicileri

Class'lar, bir object'i temsil eden type'ı tanımlamanın yoludur.
Erişim belirleyicileri, bir object'in verilerine erişimi düzenlemek için kullanılır.

```
class Person1 {
  protected name: string
  public surname: string
  private age: number

  constructor(name: string, surname: string, age: number) {
    this.name = name
    this.surname = surname
    this.age = age
  }

  greet(): string {
    return `Hello, that is ${this.name + this.surname} her/his age is ${this.age}`
  }
}

class Student extends Person1 {
  isGraduated: boolean

  constructor(name: string, surname: string, age: number, isGraduated: boolean) {
    super(name, surname, age)
    this.isGraduated = isGraduated
  }

  nameWithIsGraduated(): string {
    return `${this.name} ${this.surname} is ${this.isGraduated ? 'graduated' : 'not graduated'}`
  }
}

const person2 = new Person1('Furkan', 'Demirtaş', 25)
const person3 = new Person1('Ahmet', 'Uslu', 35)
const student1 = new Student('Erim', 'Tuzcuoglu', 28, false)
const student2 = new Student('Ozan Batuhan', 'Kurucu', 28, true)

student2.name = 'aa' // Error: Property 'name' is protected and only accessible within class 'Person1' and its subclasses.
student2.age = 5 // Error : Property 'age' is private and only accessible within class 'Person1'.
student2.surname = 'Özdemir' // Property 'surname' is public and can be accessed from outside of the class.
```

### Bir Class'ta Interface Uygulama

```
interface PersonInterface {
  name: string
  surname: string
  getName(): string
}

class PersonForInterface implements PersonInterface {
  name: string
  surname: string

  constructor(name: string, surname: string) {
    this.name = name
    this.surname = surname
  }

  getName(): string {
    return this.name + this.surname
  }
}
```

### Class'ları Genişletme (Subclass'lar)

```
class Employee extends PersonForInterface {
  department: string

  constructor(name: string, surname: string, department: string) {
    super(name, surname) // super is used to call the constructor of the parent class
    this.department = department
  }

  getDepartment(): string {
    return `Employee name is ${this.getName()} and department is ${this.department}`
  }
}

const employee = new Employee('Ozan Batuhan', 'Kurucu', 'Software Engineering')

employee.getDepartment() // Employee name is Ozan Batuhan Kurucu and department is Software Engineering
```

### Generic'ler

Generic'ler, bir object veya function'ın kabul ettiği verinin type'ını belirtmenin yoludur.

```
function getArray<T>(input: T[]): T[] {
  return input
}

const numbersArray = getArray<number>([1, 2, 3])
const namesArray = getArray<string>(['John', 'Jane'])

numbersArray.push('5') // Error:  Argument of type string is not assignable to parameter of type number[]
namesArray.push(5) // Error:  Argument of type number is not assignable to parameter of type string[]
```

Generic'lerle bir `useState()` function'ı oluşturma:

```
function useState<T>(initialState: T): [T, (newState: T) => void] {
  let state = initialState
  function setState(newState: T) {
    state = newState
  }
  return [state, setState]
}

const [count, setCount] = useState(0)

setCount('a') // Error: Type '"a"' is not assignable to type 'number'.
```

### React ile TypeScript

TypeScript kullanan yeni bir Create React App projesi başlatmak için şu komutu çalıştırabilirsiniz:

```
npx create-react-app my-app --template typescript

# or

yarn create react-app my-app --template typescript
```

./src/App.tsx

```
import { useState, ChangeEvent } from 'react'
import './App.css'
import Header from './Header'
interface User {
  name: string
  age: number
}

function App() {
  const [title, setTitle] = useState<string>('React')
  const [user, setUser] = useState<User>({ name: '', age: 0 })

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setUser((prevUser: User): User => ({ ...prevUser, [event.target.name]: event.target.value }))
  }

  return (
    <div className='App'>
      <Header title={title} fontSize={32} />
      <input
        type='text'
        value={title}
        placeholder='Change title'
        onChange={(event: ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)}
      />
      <input
        type='text'
        style={{ display: 'block', margin: '8px auto' }}
        placeholder='User name'
        name='name'
        value={user.name}
        onChange={handleChange}
      />
      <p>{`User: ${user.name}`}</p>
    </div>
  )
}

export default App
```

./src/Header.tsx

```
export interface HeaderProps {
  title: string
  color?: string
  fontSize?: number
}

const Header = ({ title, color = '#33D1F7', fontSize = 40 }: HeaderProps) => {
  return <h1 style={{ color, fontSize }}>{title}</h1>
}

export default Header
```

### Yararlı kaynaklar

- [TypeScript Temelleri GitHub Kaynak Kodu](https://github.com/ozanbatuhankurucu/TypeScript-Tutorial-Traversy-Media)
- [React ile TypeScript GitHub Kaynak Kodu](https://github.com/ozanbatuhankurucu/Create-React-App-With-TypeScript)
- [TypeScript Hızlandırılmış Kursu](https://www.youtube.com/watch?v=BCg4U1FzODs&ab_channel=freeCodeCamp.org)
- [TypeScript Nedir?](https://www.typescripttutorial.net/typescript-tutorial/what-is-typescript/)
- [TypeScript'te Type ve Interface Farkları](https://blog.logrocket.com/types-vs-interfaces-in-typescript/)
