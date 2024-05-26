---
order: 2000
layout: default
toc: true
---

# Intro to Programming Languages

# Why So Many?

Programming languages are everywhere, so it makes sense that we’ll need to program things differently

As the devices evolve, the amount we can do with our programming evolves as well

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ac49748f-61bb-4e3f-84f3-fc4a9d0d447e/Untitled.png)

But still, you could argue that we could create some “universal” programming language that could run on anything

- We tried this with Java. It didn’t work.

The reason we evolve languages is for a number of reasons, including developer preference, features, compilers, availability, marketing and special purposes

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c66687a0-74d3-4214-8ea8-d1ba87f4e696/Untitled.png)

All of these programs, however, are fundamentally ways of thinking and expressing algorithms

They also abstract a virtual machine, specifying what your hardware should do without manipulating wires

Ultimately, we want implementation efficiency and conceptual clarity, with the most successful languages being…

- Easy to learn (BASIC, Pascal, etc.)
- Powerful (C, Perl, etc.)
- Easy to implement (Fortran)
- Fast (C)
- Backed by a powerful sponsor (Visual Basic, COBOL)
- Widely disseminated (Java)

There’s two main types of languages:

1. Imperative (dictating how a computer should do things)
    1. von Neumann (C, Fortran, etc.)
    2. OOP (C++, Java, etc.)
    3. Scripting (Python, JS, etc.)
2. Declarative (dictating what the computer does)
    1. Functional (Scheme, Lisp, etc.)
    2. Logic (Prolog)

Overall, imperative languages dominate, but declarative languages are higher-level, which makes them much safer

### Evolution

We started with machine languages, going to assembly to abstract things and make them somewhat readable

From there, we get to the first actual programming language, known as Fortran

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6e189fe2-c146-4a33-bc32-b45e50c1d6be/Untitled.png)

From there, we evolve into more modern imperative languages

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/57e48bed-1536-462a-989d-d3c4e5fb551a/Untitled.png)

However, our declarative languages look much freakier

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/065a8405-0cd5-4f74-aa3f-81de92f19d48/Untitled.png)

Let’s break this down a little bit

With Scheme, all your code is in the form (function arguments)

With define, we define the function gcd, specifying the arguments with lambda, so the first two lines define gcd as a function ($\lambda$) of two arguments (a,b)

The third line defines a condition, with (zero? b) asking if b is zero, return a if its

If b isn’t zero, it goes to the else case, where it executes gcd with parameters (b, mod_a b)

With Prolog, we only have one real code word, which is :-, meaning ‘if’ in the strictly logical sense (you should know what I mean from 2209)

At its core, the distinction between languages is the ability to control complexity, with function, objects and other features to abstract away the underlying systems

## Compilation vs Interpretation

You may have heard of the distinction, but what does it actually mean?

With a compiled language, we compile everything into bytecode before running anything

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f58ed1ba-db06-482b-a8fc-0a7d5444a773/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fc428253-26a2-42bf-89a7-3bbbd4a0f701/Untitled.png)

With interpreted languages on the other hand, we have an interpreter throughout the program’s runtime translating each instruction into bytecode as it goes along

With compilation, we get better performance since we don’t have the bloat of an interpreter, but interpretation gives us greater flexibility and better diagnostics

- For example, Prolog can write new pieces and execute them on the fly

These aren’t mutually exclusive, however; you can have a system where we compile and then interpret

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3e43509e-2137-4ad9-a423-e460bc535b08/Untitled.png)

To put things more specifically, compilation is translation from one language into another, with full analysis of the meaning of the input

This entails semantic understanding of what is being processed, while pre-processing simply removes comments and white space while grouping characters into tokens, expanding abbreviations and maybe identifying loops or subroutines

- Preprocessors are more common for interpreted languages, but they also exist in C/C++

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bd2c3fd8-44a7-43f2-a668-098434e77e64/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/409f6654-2350-4969-8f4c-3881a54051ab/Untitled.png)

We can also use a linker to merge libraries of subroutines (ex. math functions like log) into the final program

We can also compile languages that are considered ‘interpreted’ since interpretation/compilation is actually a property of implementation

The compiler, in this case, will generate code that makes assumptions and runs very fast if the assumptions are valid

- If they aren’t valid, we can dynamically check with an interpreter

Another more modern way of approaching things is Just-In-Time (JIT) compilation, where we delay compilation until the last second

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/404362d0-65bb-40a0-943f-530e8306d920/Untitled.png)

Some more unconventional compilers include text formatters that compile high-level document (Latex) and query language processors that translate into primitive operations on files (SQL)

- There’s also tools in IDEs that are separate from this, including debuggers, version management and profilers for performance analysis

### Compilation/Interpretation Phases

Compilation is handled in several steps

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/77269407-83c7-4c60-9cdd-3cc13992208f/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a572d10e-1cd6-4e10-b8d4-b270b19a488a/Untitled.png)

For interpretation, things are cut short a little bit

In the scanner, we divide the program into token, which are the smallest meaningful units, saving time since char-by-char is very slow

- This is done using a deterministic finite automata (DFA)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ad5e08e0-64a7-405e-a50b-aedddc2e1593/Untitled.png)

On parsing, we check the syntax of the program to make sure the grammar is being adhered to, which is done via a pushdown automata (PDA)

This parsing organizes tokens into a parse tree as defined by a context free grammar (CFG)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2002c5e7-01cf-4a53-9463-a14424c860a1/Untitled.png)

From here, our previous GCD example can be split up into a parse tree

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/be9d324a-3167-4c54-abf5-0f57b44437eb/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e20fc87b-b06b-4eba-afec-77773d06121f/Untitled.png)

- You can go through the leaves left-first to read out the entire program

With semantic analysis, we discover the meaning in the program, detecting multiple occurrences of the same identifier and tracking the types of identifiers and expressions

From here, we can build and maintain a symbol table mapping each identifier to its information (type, scope, structure, etc.)

The compiler can only handle static semantic analysis, since dynamic semantics must be checked at run time

- These dynamic checks are pretty slow, so we need to make a trade off between safety and speed (this is what makes C so fast; dynamic checks are few and far in between)

This semantic analysis produces a syntax tree, removing some of the more “useless” internal nodes that are present in the parse tree and annotates the remaining nodes with attributes

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/71c4522b-1a26-4eb4-b0b8-1a126c03fdf7/Untitled.png)

Finally, we have code generation which uses interpreters to run the syntax tree and target code generation which then produces assembly

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e3cea77d-e7e2-4ef8-8295-bc07af8579f3/Untitled.png)

This is a bit of a naive solution that can definitely be approved upon, so our final step is to find these optimizations to either do things faster or take less space

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e3cea77d-e7e2-4ef8-8295-bc07af8579f3/Untitled.png)
