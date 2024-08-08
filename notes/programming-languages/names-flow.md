---
order: 2004
layout: default
toc: true
---

# Names and Flow


When designing a new language, ease of programming is almost always the main driving force

One of the core issues with language design is names, since they’re something that machines aren’t very good at handling: abstractions

As we get higher in levels and farther from the hardware, our languages become much more abstract to manage complexity of modern programs, but this is also a double edged sword since it makes it harder for machines to handle

We can divide these semantics into three parts:

1. Names: a character string abstracting some data
2. Binding: association between a name and the thing it names
3. Scope: the part of the program where a binding is active

## Binding

Binding can be static (bound before run time) or dynamic (bound at run time), which gives you either better efficiency or better flexibility, respectively

- Compiled languages tend to have early binding times, while interpreted languages do this later

The lifetime of this binding is the time between it’s creating and distruction, while its scope is the textual region where it’s active

There’s many ways to store this, either statically (absolute address), stack (for subroutine calls and returns), and the heap (dynamically allocated memory)

Static allocation is used for stuff that is very explicit, such as global variables, instructions, explicit constants or static variables, such as in C++

With stack-based allocation, we take all our parameter, local variables and temporaries and throw them into a frame, which represents a subroutine call (this should be review from 2208)


Heap allocation throws data into our RAM, allowing for us to expand our variables at will

Allocating these variables with a first-fit algorithm is $O(n)$, but we can use pool allocation instead for $O(1)$ time

Pool allocation uses a free list of blocks of different sizes, either with a buddy system with blocks of size $2^k$ or a Fibonacci heap with Fibonacci-sized numbers

The issue with the heap is deallocation since it’s throwin into RAM, which is either done through explicit deallocation (C, C++, other low level languages) or implicit deallication/garbade collection (Python, Java)

Explicit allication is usually simpler to implement and faster, but this comes with some problems for the programmer: deallocate too soon and you get a dangling reference, but if you don’t deallocate at the end of lifetime, you get a memory leak

## Scope

The scope, as we’ve mentioned, is the textual region of the program for which the binding is active

A subroutine will usually create a new scope where we create local bindings and destroy them once the subroutine is exited, restoring the bindings for global variables

Almost all languages employ static scoping, where scope is determined at compile time

For subroutine, we might have nested subroutines, for which we will use the closest nested rule such as in Python and Scheme, but these don’t exist in languages such as C, C++ or Java

Sometimes we might have a scope resolution operator for variables that are non-local


### Dynamic Scoping

Something that’s (luckily) not used anymore is dynamic scoping, where binding depends on the flow at run time, which is easier to implement (just a stack), but its harder to understand

How this works is that, when we enter a new scope, we overwrite bindings by putting them on the stack


This comes with its own problems, where the wrong variable is used in some functions


### Referencing Environment

The reference environment is the set of active binding, handled by lexical nesting in static scope and order of declarations at run time in dynamic scope

The scope rules are applied wither when a routine is called (shallow binding, default in dynamic scoping) or when a reference is created (deep binding, default in static scoping)

Deep binding is implemented through subroutine closure, which is an explicit representation of a reference environment

The binding time matters since the running program may have two instances of some object for ones that are neither local or global

This doesn’t matter for some languages, but for others, it’s very important