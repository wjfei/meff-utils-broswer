# meff-storage

> meff: More Effective

## 🔨 Usage

### localStorage 


```js 
import { local } from '@ists/storage';

local.set("key", "value");
local.get("key");
local.remove("key");
```

### sessionStorage 

```js 
import { session } from '@ists/storage'

session.set("key", "value");
session.get("key");
session.remove("key");
```

### cookie

```js 
import { cookie } from '@ists/storage'

cookie.set("key", "value"); 
cookie.get("key");
cookie.remove("key");
```

## 📦 Installation

Install this module individually:

```sh
npm install meff-storage
```