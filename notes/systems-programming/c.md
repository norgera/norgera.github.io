---
order: 2001
layout: default
toc: true
---

# C Fundamentals

Take a look at this:

```c
#include <stdio.h>

int main(void)
{
	printf("To C or not to C, that is the question.");
}
```

We'll name this file _pun.c_

- The name here doesn't matter (although there are standards that we'll get into later), but the extension is always _.c_
- What DOES matter is that there's no spaces in the name

This program can't be executed yet; there's 3 steps that must be taken:

1. **Preprocessing** - obeying commands that have a # (in this case, _#include <stdio.h>_
2. **Compiling** - translating the program into machine code
3. **Linking** - combines the machine code with anything else needed to make the program an executable (.exe)

- Note: the preprocessor is usually interlinked with the compiler

## On the Command Line

### CC

Let's compile _pun.c_. We can do this like so:

```c
% cc pun.c
```

- Note: the % is a UNIX prompt, you don't type it in
- Linking is automatic when using _cc_

After you do this, you get an executable with the name _a.out_ by default

The _-o_ option flag lets us pick a new name

Let's name this executable _pun_:

```c
% cc -o pun pun.c
```

- Note: order is important; the naming flag and new name goes first

### GCC

GCC is one of the most popular C compilers and the one we'll be using the most for this class

It's supplied with Linux but available on other platforms as well

We make calls with the same form as _cc_

```c
% gcc -o pun pun.c
```

## General Form

Let's look at _pun.c_ again:

```c
#include <stdio.h>

int main(void)
{
	printf("To C or not to C, that is the question.");
}
```

This is an example of the general form of a C program, with **directives** at the top (#include) and **statements** at the bottom (int main(void))

- C will execute its programs line by line, so order is important here

There's actually 3 key language features:

1. **Directives**
2. **Functions**
3. **Statements**

### Directives

These are what's processed by the preprocessor before anything else

You can easily tell where the directives are because they always start with a # character

```c
#include <stdio.h>
// this is an example
```

Other features include:

- Being one line long
- Having no special marker at the end (semicolon, etc.)

You'd use this when you want a certain part of your code to compile before anything

- For example, if you want to import something, you'll need to do that before anything else
- The example above is an import of a library

### Functions

These are series' of statements that have been grouped together and given a name

- These work a lot like methods in Java

Some functions are already provided with C, called **library functions**

- The above example is a standard library that's being imported, full of library functions

```c
printf("i need a drink bro");
scanf("fuck.txt");
//these are examples of library functions
```

We also use a **return** statement to return the result of a function

Also note that a **main function** is **MANDATORY!!**

- This is not unlike Java

Unlike Java, main in C returns a **status code**, with the value 0 indicating normal termination

If there's no return statement for this at the end of main, most compilers give a warning and throw a fit like your annoying cousin at the family reunion

- "Waaaaaah you need a return statement!!" "Waaaaaah auntie said I can play games on your phone!!!" SHUT THE FUCK UP DAWIT

...moving on

### Statements

A statement is a command to be executed when the program runs

- Examples include function calls, return statements and simple operations

```c
int x = 2;
x = x + 2;
printf(x);
return x;
//these are all statements
```

Notice that each statement ends with a semicolon, just like Java

- Note: directives are **not** statements, they are processed at different stages

### Comments

Comments are text in the code that are not compiled

```c
//this is a comment
/* This is
also a
comment */
```

These comments aren't turned into machine code and aren't in your executable, meaning no bloat (yay!)

They're detected by the preprocessor and thrown out before the compiler can reach it

- Note: if you use a multi line comment, **don't forget to terminate it (\*/)**
- Note 2: the single line comment (//) is part of C99, so your compiler **must support the C99 standard of C** (most do, so don't worry)

## Variables

Most programs need a way to store data to memory during execution, with the storage locations referred to as variables

A variable, in short, is a space in memory assigned for a specific purpose

Like Java, C is strict with its variables:

- Variables must be declared with a **type** (int, float, etc.)
- Variables can't change types on the fly (ex. you can't set an int variable to "Trevor")

This finnicky nature is called **static typing**

### Data Types

Data types (DTs) in C come in 3 forms:

1. Primary DT (char, float, int, void)
2. User-defined DT (enum, typedef, etc.)
3. Derived DT (pointers, arrays, structures, etc.)

DTs also have unsigned and signed variants, which we will get into later

Note that in C99, you don't have to make all of your declarations before your statements (except in the main method)

- You still have to declare a variable before you use it
- In older versions, this isn't the case

### Variable Initialization

Some variables are set to 0 by default when a program executes, **but most don't**

When you create a variable that doesn't have a default value and isn't assigned to anything, it's said to be **uninitialized** and, when you attempt to access it...things can go wrong

- Depending on your compiler and other factors, this can cause a crash

What happens is that, where the variable is stored, the program will just take whatever data was in its memory location last time

Now, when you do initialize a variable, the value you set it to is called the **initializer**

```c
int height = 8; //8 is the initializer
int length = 12, width = 10; /*you can also assign
multiple variables in one statement, just like Java*/
int height, length, width = 10; /*however, you must
assign each variable separately, so in this case, only
width is assigned*/
```

You can also give a value through an **assignment**

```c
height = 8; /*8 here is called a constant
```

- Note: when assigning floats, it's best practice to add an f to the end of the constant
- Otherwise, the compiler throws a fit (see cousin Dawit)
- Note 2: when assigning a variable to a value, that value is computed and reduced to a single value before being assigned

```c
int height = 8 * 10 * 12 //this computation has to finish first
```

You can also define a constant through a directive for readability purposes if you use it over and over again

- This is called a **macro definition**

```c
#define INCHES_PER_POUND 166
```

These macro definitions can also be an expression

```c
#define RECIPROCAL_OF_PI (1.0f / 3.14f)
```

### Identifiers

The names of variables and definitions are called **identifiers** and they come with some rules:

- They can only contain letters, numbers and underscores
- They cannot start with a number
- They CAN start with underscores, but it's not usually best practice since they have a special meaning

```c
get_next_char, times10 //legal
get-next-char, 10times //illegal
```

As mentioned before, these identifiers are case sensitive

```c
job != JOB
```

Because of this, most programmers just use lowercase letters in their identifiers, with underscores separating words

- Note: there is no maximum length

There are also several **keywords** that can't be used as an identifier, including _enum_, _break_ and _return_

### Layout

The amount of space between tokens doesn't matter to the compiler, but it's best practice to have legible spacing (I'm sure you know this already...at least I hope you do...)

What you cannot do however is put an entire C program on one line, since preprocessing directives require separate lines

- This isn't good practice anyway

## Compiling in Detail

We've mentioned before that C code must be compiled before it's executed, but what does that actually entail?

There are 6 steps to compiling a C program

### 1. Writing the Source Codes


We have to write the source codes (.c) and header files (.h) before we can compile them

### 2. Preprocess

Here, we run through the code quickly looking for directives and other things

Tasks controlled by the preprocessor include:

- Removing comments
- Processing macro definitions
- Read in included files
- And other advanced conditionals (#ifdef, #endif, etc.)

### 3. Compile

We then take the preprocessed code and compile it into object code (.obg or .o)

This is the machine code we talked about earlier and they're not meant for human consumption

Something like...

```c
int main(x) {
	return (x*x);
}
```

Gets turned into...

```c
0000000000000000 <main>:
0: 0011010101101011 push %rbp
1: 1101010101000110 mov %rsp,%rbp
4: 1001011010100011 mov %edi,-0x4(%rbp)
7: 1011110101001000 mov -0x4(%rbp),%eax // get x in reg. eax
a: 0011010110110011 imul -0x4(%rbp),%eax // (x*x)
e: 0101010110001101 leaveq
f: 11101110110101100 retq
```

- Note: left side is machine code in the .obj file and the right side is the resulting assembly instructions

### 4. Link

Here, we join the object code from our C code with library object codes (.lib or .a) and other object codes in the system to produce an executable (.exe)

We also assign (delineate) memory space for every variable

- Depending on the location of the variables, the linker will patch the old location with the new location

### 5. Load

We then load the executable code into memory, creating the .exe file with the help for shared libraries (.dll, .so)

### 6. Run

Now we have code that we can execute


# Flow of Control

Remember that C is a procedural language, meaning it goes one statement at a time

With our control statements, however, we can change the order in which the program reads statements

C has 3 types of control statements:

1. Selection (if and switch)
2. Iteration (while, do, for) (basically loops)
3. Jump (break, continue, goto, return)

Other C statements exist as well, including:

- Compound
- Null

## Selection

We have already covered if statements in other classes, so I won't go over it again here in these notes

Instead, I want to briefly talk about **switch statements**

### Switch

Now, examine this block of code:

```c
int main(int argc, char *argv[]) {
	int grade;
		if (grade == 3)
			printf("Good");
		else if (grade == 2)
			printf("Average");
		else if (grade == 1)
			printf("Poor");
		else if (grade == 0)
			printf("Failing");
		else
			printf("Illegal grade");
	return 0;
}
```

This is what's known as a **cascading if** and in some cases, it's actually the best option

Here, however, it isn't

In this case, the code is a bit hard to read at a glance

This can be improved with a switch statement

```c
int main (int argc, char *argv[]) {
	int grade;
		switch (grade) {
			case 3:
				printf("Good");
				break;
			case 2:
				printf("Average");
				break;
			case 1:
				printf("Poor");
				break;
			case 0:
				printf("Failing");
				break;
			default:
				printf("Illegal grade");
				break;
	return 0;
}
```

Here, the code is much cleaner and easier to read

- Note: the _break_ statements are a necessity here, **don't skip them.** If you don't, the compiler reads every single case statement, even if the condition has already been met

### Alternative Form

There's another alternative form of an if statement called a **conditional operator**

Let's look at this if statement

```c
int x = 0;
if (x < 10) {
	x += 1;
} else {
	x = 0;
}
```

We can condense this into a form like so

```c
int x = 0;
(x < 10) ? x += 1: x = 0;
// form:
// (conditional) ? trueExpression : falseExpression;
```

## Iteration

These are effectively the same loops we have already covered, so again, I won't go into detail

I just want to briefly mention the existence of **do-while loops**

### Do-while

Do-while loops are the same as while loops except for one quirk: they test the conditional after an iteration is complete

Why does this matter? It matters because **a do-while loop will run at least once**

The syntax is similar to a while loop

```c
int n = 0;
do {
 n += 1;
} while (n < 0);
```

This type of loop is often called a **post-test** loop, whereas while loops are called **pre-test** loops

### For

Now, I said I wasn't going to cover loops in detail, but I do wish to go over what's happening under the surface of a for loop

```c
for (a; b; c) {
	// do something
}
```

A for loop consists of three parts:

1. Initialization statement (i.e. int i = 0)
2. Test expression (i.e. i < 10)
3. Update statement (i.e. i++)

I also want to note that, despite for loops usually only having one variable, they can have multiple in C

```c
for (int i = 0, j = 20, k = 40; i < 10; i++, j--, k+=4) {
	//do something
}
```

In a for loop, the first iteration runs through a followed by b, with subsequent iterations running c followed by b until condition b fails or the loop is forcibly exited

Speaking of forcibly exited...

## Jump

Jump statements forcibly move the compiler from one line to another and they have lots of uses

Let's look at a few of them

### Continue

Let's look at this while loop:

```c
int n = 1;
while (n < 100) {
	if (n == 10) {
		continue;
	} else {
		n += 1;
	}
}
```

This loop seems like it would run 100 times, but it actually runs forever

This is because of the continue statement, which tells the compiler to skip to the start of the loop

### Break

Let's modify the while loop a bit:

```c
int n = 1;
while (n < 100) {
	if (n == 10) {
		break;
	} else {
		n += 1;
	}
}
```

Now this loop seems like it would run 100 times, but it actually runs 10 times

The break statement here automatically exits whatever construct it is in, meaning that the compiler thinks there's no more iterations and that it can move on to the next bit of code

You may recall earlier that this is part of what makes switch statements work as well

```c
int main (int argc, char *argv[]) {
	int grade;
		switch (grade) {
			case 3:
				printf("Good");
				break;
			case 2:
				printf("Average");
				break;
			case 1:
				printf("Poor");
				break;
			case 0:
				printf("Failing");
				break;
			default:
				printf("Illegal grade");
				break;
	return 0;
}
```

## Other Important Things

### Null

An important concept to learn right now is the **null** character, which is represented as '\0' in C

A null basically means that nothing is there

This can be past the end of a string, past the end of an array or something else

Let's that a look at this in action:

```c
#include <stdio.h>
int main (int argc, char *argv[]) {
	char string = “Something or Another”);
	{
		int i ; // i MUST be declared OUTSIDE the loop to survive ...
		for ( i = 0 ; string [ i ] != '\0' ; i++ ) //loop runs until the string hits a null character
			/* NULL STATEMENT! */ ;
		return i ; // … otherwise i is dereferenced before control passes back
	}
	return 0;
}
```

If you're inquisitive, you may notice that this is a character counter, which is one of many uses of the null character


