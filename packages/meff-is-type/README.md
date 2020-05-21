# meff-is-type

> meff: More Effective

## 🔨 Usage

### isArray 
判断参数是否为数组

```js 
import { isArray } from 'meff-is-type'
isArray([]) // true
isArray("") // false
```

### isObject 
判断参数是否为对象

```js 
import { isObject } from 'meff-is-type'
isObject({}) // true
isObject("") // false
```

### isBoolean 
判断参数是否为true或者false

```js 
import { isBoolean } from 'meff-is-type'
isBoolean(false) // true
isBoolean("") // false
```

### isFunction 
判断参数是否为一个function方法

```js
import { isFunction } from 'meff-is-type'
isFunction(function a(){}) // true
isFunction("") // false
```

### isString 
判断参数是否为字符串

```js
import { isString } from 'meff-is-type'
isString("") // true
isString(123) // false
```

### isNumber 
判断参数是否为数字

```js
import { isNumber } from 'meff-is-type'
isNumber(123) // true
isNumber("") // false
```

### isNaN 
判断参数是否为NaN

```js
import { isNaN } from 'meff-is-type'
isNaN(NaN) // true
isNaN(123) // false
```

### isEmpty 
判断参数是否非0的假值

```js
import { isEmpty } from 'meff-is-type'
isEmpty("") // true
isEmpty(0) // false
```

## 📦 Installation

Install this module individually:

```sh
npm install meff-is-type
```