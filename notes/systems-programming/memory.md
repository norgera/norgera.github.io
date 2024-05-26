---
order: 2003
layout: default
toc: true
---

# Memory & I/O
# Strings

With our arrays, we can do something special. Remember that we can have an array of characters in the same way as before. You may be quick to jump the gun and say that this is a string, but it isn't...unless we add a **terminating character**.

The `\0` is known as the **NULL** character and it's what tells the computer to stop reading the string. With this, we can create some new notation. Instead of declaring a string like any other variable, we can do this:

```c
char d[8] = "Magic";
```

The double quotes are important here, since single quotes signify individual characters. Here, we declare the array in memory and then start assigning values. We assign d[0-4] with the letters and d[5] as `\0` to signal the end of the string. But what about d[6-7]? Since they aren't assigned, we set them to 0 just like any other array.

## String Functions

Since strings are special, they have their own special functions. These are provided for us by the ANSI standard string library, which is included like so:

```c
#include <string.h>
```

### strlen

`strlen` returns the length of a NULL terminated string. For example, we were to have code like so:

```c
int count;
char d[8] = "Magic";
count = strlen(d);
```

...then count would now be equal to 5. In our memory map, we start from d[0] and count down until we hit a NULL, returning the number of characters we counted up to that point.

### strcpy

We can't just assign one string to another since all that does is make their addresses the same. Instead, we can use `strcpy` to make a copy of the source to the destination, with some caveats:

1. The source must be NULL terminated.
2. The destination must have enough room (is the same or greater size as the source).
3. The return value points to the destination.

In C, it looks something like this:

```c
#include <stdio.h>
#include <string.h>

int main() {
    char str1[20] = "C programming";
    char str2[20];
    
    //copying str1 to str2
    strcpy(str2, str1);

    puts(str2); //C programming

    return 0;
}
```

### strcat

With this, we can add two strings together. We append a copy of str2 onto str1 and a pointer equal to str1 is returned. Note: you should make sure that str1 has enough room to append str2 onto it.

```c
#include <stdio.h>
#include <string.h>

int main() {
    char str1[20] = "C ";
    char str2[20] = "programming";
    
    //adding str2 to str1
    strcat(str1, str2);

    puts(str1); //C programming

    return 0;
}
```

### strcmp

With this, we do an ASCII comparison of two strings one character at a time until a difference is found or the end of the strings are reached.

- `>0` if `str1 > str2`
- `0` if `str1 == str2`
- `<0` if `str1 < str2`

In C, it looks like this:

```c
int strcmp (str1, str2);
```

If we only want to compare part of the strings, we can use `strncmp`:

```c
int strncmp (str1, str2, n); //stops comparing at n characters or at a null, 
//whichever one happens first
```

### strchr

This function searches through a string `str` for a character `ch` until it is found or a NULL is found instead. If found, a pointer to `ch` is returned, else NULL is returned instead. You can determine its index by subtracting the value returned from the address at the start of the string. This is pointer arithmetic and we'll cover it later.

### Others

These are all conversion functions in `stdlib`:

```c
#include <stdlib.h>

double atof(const char *str); //converts the pointed string to a double
int atoi(const char *str); //same but for int
long int atol(const char *str); //same but for long int
```

- Note that the asterisk refers to a pointer to `str`...more on that later.

Now, we've been printing a lot in this course so far, so on that subject...how do they actually work?

# Simple I/O

These are all the functions that are included in our standard I/O (input/output) library.

Notice that this covers input AND output, so let's start with output.

## Output

Let's see a simple program under the hood to see how printing works:

```c
#include <stdio.h>

int main() {
    int a = 65;
    printf("Our character is: %d \n", a);
    printf("Our character is: %c \n", a);
}
```

In printing, C will view the content of the variable as a **generic** (untyped) sequence of bits, not caring about the actual data type, so we must tell the computer how to interpret the value.

We do this with a **formatting character**, which is a % followed by a character (or a sequence of characters) that dictate how the value is interpreted and printed.

### Formatting Characters ( % )

We have a lot of formatting characters to pick from, so let's list them all out.

Our syntax for `printf` looks like this:

```c
printf("format string", value1, value2,...);
```

Going back to our code, we can comment what each print statement prints out:

```c
#include <stdio.h>

int main() {
    int a = 65;
    printf("Our character is: %d \n", a); //65
    printf("Our character is: %c \n", a); //A
}
```

The compiler doesn't do any type checks in the `printf()` function call, so make sure the data types correspond to the formatting character, or else you run into problems.

We can also do some tricks with this by adding things into the formatting characters:

With a number in front of the character like %3d, we leave a minimum width of 3 spaces, which will be right justified.

If we want to left justify, we add a `-` character, as in `%-3d`.

Instead of spaces, we can also zero fill with `%03d`.

We can also make positive values with a `+` sign, as in `%+3d`.

These are all for integers, but we have some for floats as well:

With floats, we can also use `.` followed by a number to make our float go to that many decimal places, like `%.4f`, which will go to 4 decimal places.

- All our other additions can be included as well, like `%08.1f`, which will zero fill 8 wide and go to 1 decimal place.

### Formatting Characters ( \ )

There's also formatting characters that can format your string in different ways, marked by a `\` followed by a character.


# Strings

With strings, we have to print things differently since they're aggregate variables. Let's look at a program to see what's going on under the hood:

```c
char str[] = "Message";
printf("%s\n", str);
```

With this, we output characters going down the memory list until we hit a NULL, thereby stopping the output. This can make things go wrong very fast, though:

```c
char str[7] = "Message";
printf("%s\n", str);
```

Here, there's no room for a NULL character since we already have 7 in the string, so the computer reads through the 7 characters and then the rest of the memory until it happens to hit a null somewhere. This will still compile because C is dumb, but it will be a logic error that can break things...a lot of things.

We can also print out strings without the formatting character, which be counted as a pointer:

```c
printf(str);
```

If we have a % somewhere in the string with this approach, we'll either get a 1 or a % in its place depending on the compiler used. Our formatting characters work the same way, adding numbers to give space and a - to left justify. For printing strings, this is super complicated, so we can use puts instead:

```c
int puts(const char *str);
```

This is more efficient than printf() because you don't have to analyze the format string at runtime.

# Input

Reading in values inputted into the command line can be done using scanf() for all built-in data types in C. Our syntax is very similar to printf(), with the same formatting characters indicating types:

```c
scanf("%d", &x);
```

With this, the data entered into the command line is read in and stored in computer memory in the address of x as an integer. The & symbol refers to a pointer to the address of x, telling the computer where to store the data inputted (we'll cover this later). For strings, this is a little complicated since the reading will stop at a white space (space, tab, newline, etc.). Instead of %s for strings, we can also do %ns, which scans the next n characters or up to a white space, whichever comes first:

```c
scanf("%s%3s", s1, s2); //note that we don't use & because these are pointers
//more on that later
```

Since this is a bit complicated for strings, we can use gets() instead, which will take everything entered in and store it in a string:

```c
gets(str);
```

We need to be careful here since there's a risk of overflow, which can cause...problems (blue screen of death). This is all defined in the standard I/O library, which we can include like so:

```c
#include <stdio.h>
```




# Memory Maps

Understanding computer memory is the heart of understanding the C language, since we're so close to the system.

To understand this, we need to know about memory maps.

## The Basics

Imagine a grid of empty cells like this:

This will represent a set of transistors in memory with either a charge (1) or no charge (0).

We then group this into rows of 8 bits arbitrarily (bytes) and give them an address.

- Remember that this is a human representation and not what the computer actually does, computers are dumb.

This is a bit confusing, so we represent this as a **memory map**.

Here we give each address a type (the variable type), the label (the variable name), the address, and the value.

Given all this, the actual transistors in memory will switch on and off based on the value given.

- Remember that if no value is given, the value will be whatever was in memory before (for example, if I were to print out b, whatever is in address 401 would be printed.

Let's say we want to declare some variables...

```c
char a, b, c; //1 byte each
```

The computer will then look for addresses that aren't being used and fill in the blanks, blocking off whatever addresses are used.

- Note that these addresses are longer most of the time in the real world, we use small numbers to make representation easier.

It's also worth noting that memory taking isn't always contiguous, locations are assigned based on whether or not they're free and have a big enough size.

- This doesn't apply to arrays and multi-byte variables, which have to be contiguous.

When you assign a variable, its value is placed in the map, converted to binary and placed in the appropriate address (or addresses).

If we were to assign a variable as we declare it, it would have an unintuitive approach.

```c
char a = 7;
```

This is separated into 2 statements by the computer and processed separately.

```c
char a;
a = 7;
```

The variable declaration doesn't do anything to the transistors in memory, rather it simply sets aside what was already there to a type and label.

In the actual assignment, we then map our value and change the transistors to reflect it.

## Multi-Byte Variables

What if we need more than 1 byte? We have a process for this.

Let's say we want to declare an int.

```c
int b = -13; //4 bytes
```

For this, we must:

1. Find 4 contiguous bytes.
2. Map a type, label, and value for the first address.
3. Map binary for the rest of the addresses.

In our memory map, it would look something like this.

We would do this for however many bytes we need (2 for short, 4 for int, 8 for double, etc.).

This is also making our memory map a bit confusing to look at, so let's give a different representation.

- Note: c is a float and d is a double.

## Arrays

So far, we've only looked at **scalar** variables (able to keep only one item).

C also supports **aggregate** variables (storing collections of values).

In C, there are 2 types of aggregates: **arrays** and **structures**.

To declare an array, we specify the type and the number of elements (the type affects the whole array, since arrays are **homogenous**, meaning they share the same.

```c
int a[10];
```

You can also give initial values when declaring.

```c
int a[10] = {1,2,3,4,5,6,7,8,9,10};
```

What makes arrays the except is that when you initialize part of the array, the other part is initialized as 0.

```c
int a[10] = {1,2,3}; //positions 3-9 are set to 0.
```

Remember that arrays must be contiguous in order for them to work, so the memory map for them will look something like this.

The reason for this is simple: easy access to values.

Let's say we were to make a call for some index of d.

```c
printf("%c",d[2]);
```

Here, the array will jump to the first value of the array in memory and count from there based on the index given.

The computer will go to the address assigned to d[0] and then d[1] and then d[2], taking its value and using it to print.

- Assigning variables to indexes operates the same way.

But what if we go past the array bounds? Well, we run into some problems...

Let's say we make an assignment.

```c
a[2] = 14;
```
The computer will start at `a[0]` and climb through, 4 bytes at a time until it gets to where `a[2]` is supposed to be (which is actually `b[0]`). The computer will then overwrite whatever was there and... hijinks ensue.

The bad thing is that you could be overwriting anything, whether that be some random cache file or system32, since memory is non-contiguous.

If you go far enough, you can actually go out of range of physical memory and cause a crash...and by crash, I mean the blue screen of death.

Something that you can also do is skip the length in the declaration if you have an initializer:

```c
int a[] = {1,2,3}; //this will create an array of length 3
```

These lengths are also compiled at runtime, so you can declare an array with an expression:

```c
int n = 4;
int a[n+2]; //creates an array of length 6
```

This is all well and good for single-dimension arrays, but what about multiple?

### Multi-Dimensional

We can also declare multi-dimensional arrays in a similar way:

```c
int a[3][2]; //gives a table with 3 rows and 2 columns
//6 cells with 4 bytes each
```

It's also worth noting that C is **row-major order** with row 0 first, then row 1 and so forth.

With this, you can now access individual members of the array.

This can also extend past 2 dimensions.