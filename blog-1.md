# Title: TypeScript: `any` vs `unknown` এবং Type Narrowing

এই Blog-1 তে আমরা বুঝব কেন `any` কে “type safety hole” বলা হয়, কেন `unknown` বেশি নিরাপদ, এবং Type Narrowing কীভাবে কাজ করে।

---

## Overview

TypeScript এর মূল উদ্দেশ্য হলো **compile-time type safety** নিশ্চিত করা। কিন্তু `any` ব্যবহার করলে এই safety পুরোপুরি bypass হয়ে যায়। অন্যদিকে `unknown` আপনাকে বাধ্য করে আগে যাচাই (check) করতে।

---

## কেন `any` কে Type Safety Hole বলা হয়

`any` মানে TypeScript আর কোনো টাইপ চেক করে না।

### উদাহরণ:

```ts
let data: any = "hello";

data.toFixed(); // কোনো error নেই
```

## Unknown মানে:“আমি জানি না এর টাইপ কী, তাই ব্যবহার করার আগে যাচাই করতে হবে।” unknown বাধ্য করে আগে check করতে

```ts
let data: unknown = "hello";

data.toUpperCase(); // ❌ Error
```

## Type Narrowing হলো এমন একটি process যেখানে TypeScript runtime check দেখে বুঝতে পারে একটি ভ্যারিয়েবলের আসল টাইপ কী।

```ts
let data: unknown = "hello";

if (typeof data === "string") {
  console.log(data.toUpperCase());
}
```
