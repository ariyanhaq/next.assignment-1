# Type Narrowing in TypeScript

## Introduction
In TypeScript, working with union types like `string | number` allows variables to accept multiple types. However, you cannot call methods that do not exist across all members. To safely access type-specific operations, you must perform **type narrowing**. Narrowing lets TypeScript examine runtime checks and deduce a specific type inside each branch.

## Practical Narrowing Guards

### 1. Using typeof for Primitives
The `typeof` operator is ideal for primitives like strings and numbers.

```ts
function format(val: string | number): void {
  if (typeof val === "string") {
    console.log(val.toUpperCase());
  } else {
    console.log(val.toFixed(2));
  }
}
```
Inside the `if` block, TypeScript treats `val` as a string. In the `else` block, it knows `val` must be a number.

### 2. Using instanceof for Classes
Non-primitive objects return `"object"` with `typeof`. For instances like `Date`, use `instanceof` to check prototypes:

```ts
function parse(input: Date | string): string {
  if (input instanceof Date) {
    return input.toISOString();
  }
  return input.trim();
}
```
TypeScript safely identifies `input` as a `Date` instance.

### 3. Using the in Operator for Objects
For plain objects where `instanceof` cannot be used, `in` checks for property existence:

```ts
type Admin = { permissions: string[] };
type User = { email: string };

function check(u: Admin | User): void {
  if ("permissions" in u) {
    console.log(u.permissions);
  } else {
    console.log(u.email);
  }
}
```
Checking `"permissions"` narrows `u` to `Admin`. The alternative branch treats `u` as `User`.

## Conclusion
Type narrowing is essential for reliable TypeScript code. Using `typeof`, `instanceof`, and `in` lets you write standard defensive JavaScript. You avoid unsafe type assertions while keeping code completely type-safe.
