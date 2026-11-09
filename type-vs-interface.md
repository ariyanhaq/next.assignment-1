# Type vs Interface in TypeScript

## Introduction
When starting with TypeScript, choosing between `type` and `interface` is a common dilemma. Both define object shapes cleanly. However, each has distinct features suited for specific use cases.

## The Overlap
For standard object structures, both approaches work identically:

```ts
interface User {
  name: string;
  age: number;
}

type UserType = {
  name: string;
  age: number;
};
```
Either style types objects, props, and parameters cleanly. You can pick whichever your team prefers.

## Key Differences
The practical differences appear when you need advanced typing:

1. **Unions and Primitives:** A `type` alias can represent unions, tuples, and primitives. Interfaces cannot do this:
```ts
type Status = "pending" | "success" | "error";
type ID = string | number;
```

2. **Declaration Merging:** Multiple interfaces with the same name automatically merge. This is very helpful when extending library types:
```ts
interface Cart {
  itemCount: number;
}
interface Cart {
  totalPrice: number;
}
```
Attempting this with `type` throws a duplicate identifier error.

3. **Extending:** Interfaces use `extends` for clean inheritance. Types combine shapes using intersection (`&`) operators.

## Conclusion
Use `interface` when defining object shapes, component props, or class contracts with `implements`. Reach for `type` when working with unions, primitives, tuples, or complex utilities. Following this balance keeps your TypeScript code clean and maintainable.
