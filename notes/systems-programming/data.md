---
order: 2002
layout: default
toc: true
---

# Data Types in C

Remember that C is a heavily typed language, meaning that whatever the type of a variable is the the type that it is

Now...what even is a type and why do we need it?

For that, we need to look at binary

## Binary Representation

Remember that computers only know on and off, represented by ones and zeroes

The only thing your CPU can actually do is add two numbers together (yes, all your computer does is add numbers really quickly)

But what do the ones and zeroes actually represent? How does the computer know how to use this?

Remember that C is a heavily typed language, meaning memory is allocated and the computer is told to represent this set of on and offs as this type of variable

### Binary

Take our counting system in base 10; we have 10 symbols 0 1 2 3 4 5 6 7 8 9

If we were to take 10 and keep adding 1, we get 11, 12, 13...18, 19...

What do we do now?

Well, we reset the first digit back to 0 and increase the second digit to 2, giving us 20 and so on and so forth

We do the same thing for our ones and zeroes

For example, if we wanted to add to 1 to 0 in base 2, we add to the digit, giving us 1. If we want to add 1 again, we reset our first digit to 0 and create a second digit, 1, giving us 10. This keeps going as 11, 100, 101, 110, 111, 1000, 1001, 1010, 1011, etc.

But how can we go from this to decimal?

### Conversion

Let's say you have the binary number 11111101. How do we go about converting this?

The process is actually quite simple

1. Take the first digit. If it's 1, add 1 to our decimal and do nothing if it's 0
2. Take the second digit and do the same thing, but add double what you did last time to your decimal (for the second digit, you'd add 2. Third, you'd do 4. Fourth, you'd do 8, etc.)

For the above example, you'd get 1+0+4+8+16+32+64+128, giving you 253

Now, if you put a string of binary together, you'll get something like:

10010101010100100101010010010101

By itself, this is unintelligible both for us and the computer, so we have to chop this up somehow...

### And Here Comes the Byte

In order to actually do anything with this, we chop up the string of ones and zeroes into 8 digits, called a **byte**

- Note that dividing every 8 instead of every 15 or 10 is arbitrary, it's just what the CS gods decided on

If we separate our original string of ones and zeroes into bites, we get:

10010101 01010010 01010100 10010101

Now this is a lot more readable and can be thus be divided up

### ASCII

Now that we have our binary chopped up into bytes, we can do something special...

We can start assigning these to alphanumeric characters in a standard form called **ASCII**

- A link to the ASCII table can be found below, along with octal, decimal and hexadecimal numbering

![ASCII Conversion Chart.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c925e329-ebdf-4ce5-a01a-0130bc0358c4/ASCII_Conversion_Chart.gif)

You should also notice here that the capital letters and lowercase letters only differ in the third bit, which makes conversion from capital to lowercase much easier

Nowadays we use other encoding systems such as UTF-8, UTF-16 and UTF-32, but it's still nice to know ASCII

You may ask "How does the computer know when this is a character or a number?" Well for that, we need to look at **types**

## Forms

Before we talk about the types themselves, we need to talk about **forms**

Binary can be represented in many forms

### Magnitude Form

In this form, only positive integers can be shown (referred to as **unsigned** numbers)

For example, one byte in unsigned form can hold numbers 0-255

### Signed Magnitude Form

This is just like magnitude form except that now we can represent negatives (referred to as a **signed** number)

One byte in signed magnitude can hold the numbers -127 to 127

The way you can tell if a number is positive or negative in signed magnitude is looking at the first bit: if it's 1, it's positive and if it's 0, it's negative

This does come with a problem, which is that we have two forms of 0, making this form inefficient

There's more than one way to represent negative numbers, however, including...

### Ones Compliment

In ones compliment, we flip every bit to represent negative numbers, with the first significant bit representing a positive or a negative in the same way

This also has the same problem with two representations of 0, which eventually led to...

### Two's Compliment

Here, we do the same thing as the ones compliment, but add 1 (in decimal, not in binary)

Now if we take 0 and try to make it negative, it become 11111111, which we add 1 to, making it 00000000 (integer overflow)

Most computers will either represent numbers in magnitude form (for unsigned numbers) or two's compliment form (for signed numbers)

But what if there's a decimal? Well, in this case, we must look at...

### Fixed Point Form

Let's take the number 18.375 and divide it up into 2 parts: the whole number (18) and the fractional part (0.375)

Because we can represent fractional parts as the negative power of 2, we can do something special

We can do our normal division of binary, but start our bits at 2^-4 instead of 2^0

For example: 18.375 would be 16+2+0.25+0.125, giving us 10010011 as a representation in fixed point form

The first 5 bits (10010) are the whole number part, while the last 3 (011) are the fractional part

With this form, however, we are limited in our precision

What we CAN do, however, is a clever mathematical trick...

### Floating Point Form

Remember how we can represent numbers through scientific notation in decimal form? We can do the same thing for binary numbers

For example, 10010.011 can turn into 1.0010011 * 2^4

This offers us a greater degree of precision, but it's impossible to do in just 1 byte

So let's assume there's 4 bytes...

We can then save 8 bits for the exponent, 23 bits for the fractional and 1 extra for a sign (+/-)

The form goes sign → exponent → fractional

We can of course do better: with a double precision form, we spent 8 bytes, with 1 bit for sign, 11 bits for exponent and 52 for fractional

Now, that we know our forms, we can finally talk about...

## Types

Remember that all data is stored as a type in C, the type of which is decided by you because you're god

You may already know some of these from Java (1 byte char, 2 byte short, 4 byte int, 4 byte float, 8 byte double), but I want to go over some of these in detail

A **short** is a 2 byte integer, with values between -32768 and 32767

An **int** is the same, except it's 4 bytes with a wider range and **long** is the same with 8 bytes

A **float** is the precision float we talked about, while a **double** is our double precision float

Finally, **boolean** (known as _Bool in C) is either true (1) or false (0)

C also has other built in **unsigned** data types for char, short, int and long, which you get by adding "unsigned" to whatever type you wanted to use

- There's also something called a **reference type**, but we'll get into that later

Now we can talk about what the ones and zeroes mean

### The Gosh Darn Ones and Zeroes

Take this as your binary string

```c
01000010 00111110 01110011 01010001
```

This can take many forms, depending on what we tell the computer to represent this as

- Remember that we're god here

Let's try char first; the representation would be..

```c
'B', '?', 's', 'Q' //or
66, 63, 115, 81
```

We can also break it up into 16-bit sections, called **words**

```c
0100001000111110 0111001101010001
```

If we're to tell the computer that this is a short, it would look like...

```c
16959, 259521 //note that these are signed
//these are positive because they start with 0
```

We can also represent this in utf-16 as '㽂' and '关', respectively

If we join all of them into one part, we get what's called a **double word**

```c
01000010001111100111001101010001
//we can represent this as an integer
1111454545
//or as a float
47.862613677978515625
```

The next step up would be 64 bits or a **quad word** which would be for long or double, which I won't type here for space's sake

### In C

Let's take the following code to see what's going on here

```c
int main(int argc, char *argv[])
{
	char a; /* 1 byte */
	int b; /* 4 bytes */
	float c; /* 4 bytes */
	double d; /* 8 bytes */

	a = 'K';
	b = 37;
	c = 2.5;
	d = 75.3;

	printf( "1st value of a is : %c \n" , a );
	printf( "2nd value of b is : %d \n" , b );
	printf( "3rd value of c is : %f \n" , c );
	printf( "4rd value of d is : %lf \n" , d );

	return 0 ;
}
```

Here, we declare 4 variables, define them and print them

Remember that all data is stored in a type, so the computer will assign spaces in memory according to the type declared and give it the according label

- For char a, it would take up 1 byte, for int b it would be 4, etc.

In order to actually do the math on these, the variables must

- Have the same length
- Be stored in the same way

You can't just add a char and an int because they take up different amounts of space (neither can you do an int and a float because they're stored differently)

But what if we wanted to? Well, the compiler would have to convert one variable type to the other

In C, the more complex representation would be chosen for conversion (known as **variable promotion**)

For example, if you wanted to add a short and an int, the short would be converted into an int. If you wanted to add an int and a float, the int would be converted into a float

- Note that the compiler does this for you, which is known as **implicit conversion**

For a chart of which types take priority over others (top to bottom):

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fe542074-4955-4c99-a693-9fc83e8d2955/Untitled.png)

We can also force the compiler to convert things a certain way through **type casting**

- This is known as **explicit conversion**

The format of this goes as follows

```c
(data_type) variable
(int) x //example 
```

If we were adding a double and an int, we may want to cast the double as an int to get an int result

These type operators are called **unary operators** and have precedence over **binary operators** (division, addition, etc.)

This can also be used to avoid integer **overflow**

Now, we can also define other types if need be, using **type definitions**

# Compiler Directives

## Type Definitions

We can do this quite easily with a macro definition

```c
#define BOOL int
```

This makes the preprocessor tell the compiler to switch every instance of BOOL with int

But there's a better way...

```c
typedef int BOOL;
// remember the semicolon here!!
```

This is what's known as a **type definition** and it's much more readable in this case than a macro def

This also makes variables easy to change

Let's say I have a typedef for dollars, recorded in floats

```c
typedef float Dollars;
```

What if I wanted a double instead?

Well, that's simple; we just change float on this one line to a double

```c
typedef double Dollars;
```

This saves me a lot of time and a lot of errors than having to change every single variable relating to dollar amounts to a double

We can also have more complex macros defined the same way

```c
#define max(a,b) ((a)>(b)?(a):(b))
```

- Note that your parentheses matter here!!

This is a bit more efficient, but it can also be dangerous, which is why modern C compilers include...

## Inline Functions

Usually, when you make a function call, the compiler has to jump to the function and jump back, which can be inefficient at scale

What you can do instead is have an **inline function** if you have a small but often used function

```c
inline int max(int a, int b) {
	return a>b?a:b;
}
```

This has advantage over a regular function call because, instead of the compiler having to jump all over the place, it just puts whatever the function returns in place of the call, which can save some time

A caveat is that you have to define inlines before you use it, which result in them often being defined in header (.h) files

Another problem is that some debuggers get confused with inline, so it's best to save them for after you've debugged everything

## Conditional Compilation

We can also have preprocessor conditionals, which are only really useful for macro definitions

```c
#define ENGLAND 0
#define FRANCE 1
#define ITALY 0
#if ENGLAND
	#include "england.h"
#elif FRANCE
	#include "france.h"
#elif ITALY
	#include "italy.h"
#else
	#include "canada.h"
#endif //the endif is important here
```

This is pretty useful for including debug code to avoid debug printouts when you release your program

You can have such a system like this

```c
#define DEBUG 1
...
#if DEBUG
	printf("Debug reporting at function my_sort()!\n");
#endif
...
```

You can also do it like this

```c
#define DEBUG
#if defined ( DEBUG ) //only checks whether or not DEBUG has been defined at all
	printf("debug report at function my_sort() \n");
#endif
```

And you can undefine a macro as well

```c
#define DEBUG
...
#undef DEBUG
...
```

## Include

These work similarly to import statements in Java with a few quirks

You can use <> to tell the compiler to look at the standard include directories first and " " to treat it as a Unix filename imported from a specified path