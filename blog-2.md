# TypeScript Generics — Reusable & Strictly Typed Code

Generics কী?

TypeScript এ Generics এমন একটি feature যা দিয়ে আমরা এমন function, class, interface বা component তৈরি করতে পারি যেগুলো বিভিন্ন ধরনের data নিয়ে কাজ করতে পারে — কিন্তু type safety নষ্ট হয় না।

সহজভাবে বললে:

“একই logic, different data type এর জন্য reuse করা যায়।”

---

---

## কেন Generics দরকার?

ধরো তুমি একটা function বানালে যা শুধু string return করে।

### উদাহরণ:

```ts
function identity(value: string): string {
  return value;
}
```

এখন number পাঠালে error দিবে।

```ts
identity(10); // Error
```

তাহলে number, boolean, object — সব কিছুর জন্য আলাদা function লিখতে হবে।
এখানেই Generics কাজে আসে।

Generic Function

```ts
function identity<T>(value: T): T {
  return value;
}
```

এখানে:

T = Type Variable
যেই type যাবে, সেই type-ই return হবে

```ts
identity<string>("Hello");
identity<number>(100);
identity<boolean>(true);
```

এখানে function একই, কিন্তু type আলাদা।
