# TypeScript & OOP - Assignment 1 (B8A1)

Hey there! This repository contains my solutions for **Assignment 1** of the Programming Hero course. The focus of this assignment is practicing core TypeScript fundamentals, strong typing, and Object-Oriented Programming (OOP) concepts.

## What is Inside

All problem solutions are implemented in `solutions.ts`, covering:

- Type annotations, optional parameters, and default values
- Readonly tuples & union types
- Practical type narrowing
- Generic functions (array flattening, plucking object values by key)
- Async handling with Promises
- OOP concepts: classes, inheritance, and access modifiers (`protected`, `private`)

## Blog Posts

As part of the assignment, I wrote two short articles breaking down key TypeScript topics:

1. [Type vs Interface in TypeScript](./type-vs-interface.md) – How they differ, declaration merging, and when I prefer one over the other.
2. [Type Narrowing in TypeScript](./type-narrowing.md) – A practical look at narrowing types using `typeof`, `instanceof`, and the `in` operator.

## Project Structure

```text
next.assignment-1/
├── solutions.ts            # Assignment problem solutions
├── type-vs-interface.md    # Blog post 1
├── type-narrowing.md       # Blog post 2
└── README.md
```

## Running the Code

To run the TypeScript file directly using `ts-node`:

```bash
npx ts-node solutions.ts
```
