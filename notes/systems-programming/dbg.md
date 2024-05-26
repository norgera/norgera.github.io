---
order: 2007
layout: default
toc: true
---

# Debuggers

As you may recall from 1027, debuggers are programs that allow you to execute programs line by line, letting you check for bugs much easier

Unix has these as well, including **gbd**, a text based debugger that can:

- Start your program
- Stop your program according to specified conditions
- Examine what happened when your program stopped
- Change your program so you can experiment with correcting one bug to learn about another

The most common way to start is with a program file

```c
% gbd program
```

You can also include either a core file or a process ID as another argument, if you want to debug a running process

```c
% gbd [program] [core|procID]
```

You can also use your compiler for debugging with the -g switch, which is better most of the time

```c
% gcc -o name -g file1.c file2.c ...
```

You should also use the -wall option for all the warnings

The following is a list of common gbd commands:

- b(reak) [file:]function Set a breakpoint at function (in file).
- b(reak) [file:]line_num Set a breakpoint at line_num (in file).

- r(un) [arglist] Start program (with arglist, if specified).

- bt or where Backtrace: display the program stack; especially useful to find where your program crashed or dumped core.

- print expr Display the value of an expression.

- display expr Display the value of an expression each time the program stops.

- x address_expr Examine the memory at address_expr.

- c Continue running your program (after stopping, e.g. at a breakpoint).

- n(ext) Execute next program line (after stopping); step over any function calls in the line.

- s(tep) Execute next program line (after stopping); step into any function calls in the line.

- l(ist) [file:]line_num print the source code at line_num (in file).

- l(ist) [file:]function print the source code of function (in file).

- f(rame) [num] Select and print a stack frame.

- help [name] Show information about GDB command name, or general information about using GDB.

- q(uit) Exit from GDB.

For the x command, this is the general form

```c
% gbd x/FMT ADDRESS
```

ADDRESS is an expression of a memory address, while FMT is a three letter code

- F - a repeat count
- M - a format letter (x(hex), t(binary), d(decimal), u(unsigned decimal), f(float), c(char), s(string))
- T - a size letter

For example, suppose i is an integer

- x/1dw &i will print the decimal number stored at &i
- x/4tb &i will print the 4 bytes of the binary representation of the number stored at &i

# Structures

Structures are kind of like objects in Java, with a constructor looking like this

```c
struct person {
	char first[32];
	char last[32];
	int year;
	double ppg;
	}; //don't forget the ; !!!
```

- Note that this code does not create a variable like objects in OOP do, instead being a template for a variable declaration

We can then create a person variable

```c
int i;
struct person teacher;
```

In our memory map, the structure will take up space for however many elements are in the parameters, with the first element being the label of the structure


We can access components much like we can in Java

```c
teacher.year = 2005;
```

We can also assign structure of the same type to other structures, which creates a byte-by-byte copy

```c
struct person mailman;
mailman = teacher;
```

We can also include structures into other structure definitions, creating **nested structures**

```c
struct name {
	char first[30];
	char last[30];
};
struct person {
	int age;
	float ppg;
	struct name title;
};
```

Structures can also be made into arrays or pointers, behaving just like other variables

```c
struct fraction {
	int wP;
	int fP;
};
struct fraction f[3], *g;

f[0].wP= 3;
f[0].fP= 7;
g = &(f[0]);
```


- We're assuming a 32 bit architecture

For pointer arithmetic and array, each structure is treated as one variable, which gives you the following

```c
g++;
	/* g now
	contains
	400 + 8
	408 */
```


We also have 2 ways of assigning values to pointed structures

```c
(*g).wP = 5;
g->fP = 11;
```


You can also fit a variable into a structure definition

```c
struct fraction {
	int wP;
	int fP;
	} fract; //fract is a fraction structure

struct fraction newNum; //this creates a new fraction structure
```

With this, you can create aliases with typedef

```c
typedef struct fraction {
	int wP;
	int fP;
	} fract;

fract newNum; //this creates a new fraction structure
```

- Recognize the difference between these because it will come up on the quiz

Dynamic memory also works as normal

```c
//8 bytes taken (4 bytes per int * 2 ints)
g = (struct fraction *) malloc(sizeof(struct fraction));
```

## Unions

Unions work exactly like structures, except for the fact that you can only use one element at a time

As a result, the memory taken up by a union is equal to the size of its largest element and not the total size of all the elements

```c
union demographics {
	int age /* 1st field is person’s age */
	float salary; /* 2nd field is monthly pay */
	double emplevel; /* 3rd field is rating scale */
	char Owing; /* 4th field is office wing */
	} employee; /* ending ; */
```


If I were to set age equal to something, we'd get the following result

```c
employee.age = 24;
```


But if I were to set another element equal to something, it would overwrite whatever we assigned previously

```c
employee.Owing = 'D';
```


## realloc

- Don't ask me why this was in week 8 because I couldn't tell you

realloc() is a way of resizing allocated memory

For example, let's take the following pointer

```c
int *a;
a = (int *) malloc(5 * sizeof(int));
a[0] = 4;
```

If I wanted to make the pointer size 9 instead of 5, I can do the following

```c
a = (int *) realloc(a, 9 * sizeof(int));
printf("%d", a[0]); //4
```

This way, none of my original values are changed

The same applies if I want to decrease the space to size 3

```c
a = (int *) realloc(a, 3 * sizeof(int));
```

The way this is done is simply extending the allocated memory down by the amount required

For our above example, this would mean extending down by ((9-5)*4) = 16 bytes