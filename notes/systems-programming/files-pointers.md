---
order: 2004
layout: default
toc: true
---

# Files & Pointers

# Files

## File Types

Before we talk about file types, we have to address what a file actually is

In UNIX, a file is a persistent container for data that is accessible by name, meaning that if we turn the computer off and on, we can still access the same information by the same name

Much like variables, we have files stored in addresses in memory, which file names are associated with

Devices are also counted as files in UNIX, meaning that they are persistent containers for data that are accessible by name

- Basically, everything is a file, including normal ones, directories, devices, links, etc.

UNIX files are identified by a name and a directory which is used to resolve things like hard name/number, among other information

- All of this is abstracted away from you by the OS, which is nice

### Regular Files

These are the types of files that you normally think of as files, which are sequences of bytes that can be accessed in order

Text files contain only printable characters and line feed (LF) or newline characters, while binary files contain character from the entire ASCII range of 0-255

### Directory Files

This is a file containing name and pointer pairs for files and subdirectories

- Think of folders in Windows/Mac

### Device Files

These files act as drivers for a device (soundcards, mouse, keyboard, etc.)

This is also the reason why you can use any keyboard for any computer, since their associated files are readable by any machine

### Links

Links are files that bring you to other, already existing files

These are divided into 2 types: hard links and soft links

Hard links are another name for a file that is directly attached, while soft links act as pointers to other files

- Soft links act a lot like shortcuts in Windows

### FIFO

FIFO are pipes that can be used to transfer data from one place to another without creating intermediary files (we'll cover pipes later on)

There's also several other types of files that we won't cover right now

### Getting a File Type

To get file information, we can run the following

```c
% ls -F
```

We'll get a return that looks something like this

```c
tmp/ // / = directory
a.out* // * = executable
smit.script //no indicator = regular file
cs2211@ // @ = link
```

To make our lives easier, we can do the following

```c
% ls --color=auto //different file types have different colours
```

We can also do the same with the first letter indicating file types

```c
% ls -l
```

## File System

The UNIX file system is organized like an upside down tree, with the top being referred to as the **root** (you may remember this from 1027 when we talked about tree applications)

We write this root with a lone slash /

- This Is NOT A BLACKSLASH (opposite of MS-DOS)

The lone slash also refers to our home directory, which we can access with the following command

```c
% cd /
```


/ - the root \\
/bin - binaries (executables) \\
/dev - devices (peripherals) \\
/devices - where the devices really live \\
/etc - startup and control files \\
/lib - libraries (really in /usr) \\
/opt - optional software packages \\
/proc - access to processes \\
/sbin - standalone binaries \\
/tmp - place for temporary files \\
/gaul/ - where home directories are mounted \\
s0...s9 - different places for users \\


/usr - user stuff \\
/usr/bin - binaries again (user) \\
/usr/include - include files for compilers \\
/usr/lib - libraries of functions etc. \\
/usr/local - local stuff \\
/usr/local/bin - local binaries \\
/usr/local/lib - local libraries \\
/usr/openwin - X11 stuff \\
/usr/sbin - sysadmin stuff \\
/usr/tmp - place for more temporary files \\
/usr/ucb - UCB binaries \\
/var - variable stuff \\
/var/mail - the mail spool \\


## File Systems in UNIX

To get more in depth...

### /bin

This contains small executable programs (binaries) which are often considered to be part of the operating system itself, but really aren't

For instance, when you type the following...

```c
% ls
```

Linux executes the Is program that is located in the /bin directory

- This is kinda like the C:\Windows directory in Windows

### /sbin

This contains executable system programs (binaries) that are only used by the administrator and by Linux when the system is booting up or performing system recovery operations

For example, the clock program that maintains the system time when Linux is running is located in the /sbin directory

- Think C:\Windows\system directory in Windows.

### /lib

This contains binary library files which are used by the executable programs in the /bin and /sbin directories

These shared libraries are particularly important for booting the system and executing commands within the root file system

- They are roughly equivalent to the DLL libraries in Windows, the difference being that they are not scattered around the system

Having a specific directory for support libraries avoids the common problem in Windows when multiple libraries have been installed and the system becomes confused about which one to use

- UNIX 1, Windows 0

### /dev

This contains special file system entries which represent devices that are attached to the system

These allow programs access to the device drivers which are essential for the system to function properly, although the actual driver files are located elsewhere

- For instance, typically the entry /dev/fdO represents the floppy drive and the entry /dev/cdromO represents the CD drive

### /boot

This contains the Linux kernel, the heart of the operating system

Many people incorrectly use the term “operating system” to refer to the Linux environment but, strictly speaking, the kernel is the operating system

It is the program that controls access to all the hardware devices your computer supports and allows multiple programs to run concurrently and share that hardware

Typically the program is called “vmlinuz” with other programs complementing the kernel being located in the /bin and /sbin directories

### /etc

This contains system configuration files storing information about everything from user passwords to screen resolution settings

All these are plain text files that can be viewed in any text editor, such as gedit

- There should never be any binary files in this directory, and if there are...you have problems

They control all configuration settings which are not user-specific

- These roughly equivalent to the .ini files found in the Windows operating system.

### /proc

This contains special files that relay information to and from the kernel

The hierarchy of “virtual” files within this directory represent the current state of the kernel, allowing applications and users to peer into the kernels view of the system

For instance, at a command prompt type the following...

```c
% more /proc/cpuinfo
```

...to see information about your computers processor/s

Similarly, typing the command...

```c
% more /proc/meminfo
```

...reveals information about your system’s current memory usage

Unlike binary and text files, most virtual files are listed as zero bytes in size and are time stamped with the current date and time

- This reflects the notion that they are constantly updating

### /mnt

This contains sub-directories that act as gateways to temporarily mounted file systems

- This is the default location where most distros attach mounted file systems to the Linux directory tree

Typically when peripheral drives have been mounted, the /mnt/cdrom directory lets you access files on a CD-ROM loaded in the CD drive

On systems that dual-boot with Windows, /mnt/windows can reveal files on the Windows partition, although accessibility can be restricted on NTFS file systems

### /usr

This contains sub-directories storing programs that can be run by any user of that system

- For example, games, word processors and media players, roughly equivalent to the C:\Program Files directory in Windows

The /usr/local sub-directory is intended for use by the system administrator, when installing software locally, to prevent it being overwritten when the system software is updated

### /var

This contains variable data files that store information about ongoing system status, particularly logs of system activity

The system administrator can type the following command at a root prompt to see the record of system activity messages

```c
% more /var/log/messages
```

### /home

This contains a sub-directory for each user account to store personal data files

If there is a user account named “fred” there will be a /home/fred directory where that user can store personal files

- Other users cannot save files there

This directory is where you store all your working documents, images and media files and
is the rough equivalent of the My Documents directory in Windows

### /tmp

This contains, as you might expect, temporary files that have been created by running programs

Mostly these are deleted when the program gets closed but some do get left behind

- Periodically, these should be deleted

This directory is roughly equivalent to the C:\Windows\Temp directory in Windows

### /root

This is the home directory for the admin

- For security reasons regular users cannot access this directory

If you login to Linux as root and open that account’s home directory it’s at /root, rather than a sub-directory of /home like regular users

### /initrd

This contains only a text file warning that this directory should not be deleted

It is used during the boot process to mount the Linux file system itself

Removing this directory will leave the computer unable to boot Linux, generating a “kernel panic”
error message instead

- Think of this like system32 in Windows

### /opt

This contains nothing initially, but it provides a special area where large static application software packages can be installed

A package placing files in /opt creates a sub-directory bearing the same name as the package

This sub-directory contains files that would otherwise be scattered around the file system, giving the system admin an easy way to determine the role of each file

For instance, if “example” is the name of a particular software package in the /opt directory, then all its files could be placed within sub-directories of the /opt/example directory

- Binaries in /opt/example/bin, manual pages in /opt/example/man, and so on

The entire application can be easily removed by deleting the /opt/example directory, along with all its subdirectories and files

It's worth noting that normal UNIX file systems span many disks and parts of the file systems may be from another system through networks, which you can view from the following command

```c
% df
```

- You don't need to worry about this right now, just remember the tree structure

## Pathnames

Recall that in file systems, directories may contain other directories, so the question is how do we represent this complicated maze?

The answer is **pathnames**

There's 2 ways to make a pathname: **absolute path** and **relative path**

### Absolute Path

Absolute path combines the directories together leading to the target file, joined by slashes

- For example, the absolute path to your courses directory would be /home/your_username/courses

Notice that we list everything from the root down to the target file

To see the absolute path to the directory you're in with UNIX, do the following

```c
% pwd
```

Your home directory is also in an environment variable called HOME, which you can access like so

```c
% echo $HOME
```

You can also use this to go back to your home directory quickly...

```c
% cd $HOME
```

...or you can simply call the function by itself, since it returns you home by default

```c
% cd
```

- Note that ~ or ~user can be used in place of $HOME in some shells (ex. bash)

### Relative Path

Opposed to absolute path, relative path gives a path relative to our current directory (starting at the current directory)

- For example, if you're in your home directory and you want to access courses, you can just use /courses/

For most commands which require a pathname, you can use either relative or absolute paths

If you start at home/your_username, the following are equivalent

```c
"/home/your_username/cs2211/readme.txt" //absolute
"~/cs2211/readme.txt" //absolute with ~ notation
"cs2211/readme.txt" //relative
```

We can also use these paths when making and removing directories

Let's say for a second that you have an empty directory 'courses' that's in 'cs2211' and you want to remove it while staying in your home directory

You can then do the following

```c
% rmdir cs2211/courses
```

This applies to our other file modifying commands as well (mv, cd, mkdir, etc.)

## Links

Whenever we create a file, it has one hard link to it

If you want to create an additional link, you can add it to a file like so

```c
% ln file_name link_name
```

- This is what's known as a hard link

Each hard link acts like a pointer to a file, which makes it indistinguishable to the real thing

Removing one hard link doesn't impact the file, but removing every hard link will remove all the contents from the hard disk

- Note that only admins can create hard links for directories and that hard links must point to files in the same UNIX file system

Symbolic links, by contrast, are indirect pointer to another file, taking the form of a pathname

In order to create one, you add an -s switch to ln

- If you want to cd into a symbolic link, you need to add the -P switch

A symbolic link acts as an entry to the real name, so if you remove it, the file isn't impacted

However, if you remove the original file, all contents will be removed

- Think of these kinda like shortcuts in Windows

Another way you can think of this is in terms of McDonalds

You can think of the hard links as McDonalds franchises, the data in the file as a McFlurry and the soft links as the McDonalds parking lots

You can get rid of McDonalds as you wish, including the original, but you need at least 1 to get the McFlurry

If you get rid of all the McDonalds, this means that even if you have the parking lots still intact, there's no McFlurries being served

## Find

With all these links and files, sorting through files using cd and ls gets tedious, which is where **find** comes in

Find acts as a search function to find certain files

The basic syntax goes as follows

```c
% find PATH EXPRESSION
```

PATH refers to the starting directory while the express refers to any switches and search terms

You can use -name to find the name of a file

```c
% find . -name "readme.txt" //starts from the current directory and searches through
//to find readme.txt
% find . -name ".c" //you can also use this to find ertain extensions
```

The -type operator exists as well to find certain file types

```c
% find ~ -type f -name "frick" //find all regular files named "frick"
//starting from the user home directory
% find ~ -type d -name "frick" //do the same but for directories
```

### More File Commands

For finding hidden files, you can use the -a switch with ls

For getting the top n lines of a file, use head -n

- Replace tail with head for the bottom n lines

## File Names

Because of the way UNIX files are set up, their names come with rules

Almost any character is valid in a file name, with the exception of /

- However, the characters "? \* “ ” ’ ( ) & : ; !" and control characters are discouraged from appearing in any part and "– ~" are discouraged from being included at the start

Upper and lower case letters are treated differently, so A.txt and a.txt are separate files

Unlike Windows, UNIX has no forced extensions, meaning that you can place a . anywhere in a file name

- Files beginning with . are hidden, however, so be careful where you put them (you can still see these files with the -a switch in ls)

Even though this is the case, it's still best practice to not include . except for in file extensions (.jpg, .txt, etc.)

Some applications may enforce their own extensions (.c for C program files, .cpp for C++ program files, .h for C/C++ header files, etc.)

With executables, these usually don't have extensions in UNIX like they do in Windows, which can make telling them apart from data files difficult

You can, however, easily tell the type of a file with the following

```c
% file filename
```

These filenames are limited by length as well, with 255 for the file name and 4096 for the path most of the time

- Note on commands: you can use '—' to indicate that there are no more options

### Wildcarding

You can also search for sequences of characters with some 'special' characters

-

* Matches a sequence of 0 or more characters
* Ex. _.c_ matches abc.c, sdhghsjkd.cpp, etc.

?

- Matches any single character
- Ex. ?.c will match a.c and b.c, but not bc.c

[...]

- Matches any one character between the braces
- Ex. b[aei]t matches bat, bet, or bit, but not baet
- You can also use - in between to match a range of characters (ex. [a-z])

These special characters can be combined in any order, but they cannot cross '/' boundaries

You can stop interpretation of some special characters by putting the file name in double quotes (ex. extra spaces will be matched exactly, but not $HOME)

- Single quotes will not interpret $HOME and other variable expansions

Back quotes `...` will execute commands and return results

We can use backslashes to cancel out the functionality of a quote

- Ex. \' b \' won't be counted as b, but as 'b' the literal

## Permissions

For permissions, UNIX divides users into 3 categories

User

- The owner of the file

Group users

- In a specific group set up by admin

Others

- Everyone else



```c
- rw- r-x r--
- //file type
rw- //user perms: read and write only
r-x //group perms: read and execute only
r-- //other perms: read only
```

You can change these permissions with the chmod command, which has two syntaxes

```c
% chmod DDD file [file...]
```

DDD here is a set of octal numbers (0-7) representing bits of protection

- You can think of rwx as 111 and —- as 000 in binary

Something like rw-r—r— (110100100) would be 644 in chmod and entered in accordingly

There's also a symbolic method

```c
% chmod [ugoa][+-=][rwx] file [...]
```

Let's break this down, shall we?

[ugoa] refers to the user group

- u - user
- g - group
- o - others
- a - all

[+-=] refers to what you want to do with the perms

- - to add on
- - to remove
- = to make equivalent to (ex. g=r will make sure groups have read perms and nothing else)

[rwx] refers to the perms themselves, which we already went over

You can append these symbolic modes with commas

- Ex: u=rwx,a=r

You can also use the -R switch to run through directories and give all files the same perms

Here's the comprehensive explanation about handling files in C, formatted as requested:

```markdown
# Files
In C, the `FILE` data type exists as a way to access non-C files, which is defined in `stdio.h`.
Here's an example of files in action:
```c
#include <stdio.h>
int main() {
    FILE *fp; // create a file pointer
    fp = fopen("tmp.txt", "w"); // open tmp.txt in write mode
    fprintf(fp,"This is a test\n"); // prints the text to the file
    fclose(fp); // closes the file (handles all memory management)
    return 0;
}
```

## Opening
For opening a file, you use the following command:
```c
#include <stdio.h>
FILE * fopen (const char * filename, const char * mode);
```
This returns a pointer to the FILE structure type, or NULL if `fopen()` fails.
`filename` is the name of the file and `mode` is the opening mode.
Opening modes should be enclosed in double quotes like a string.
The following are a collection of possible modes:
- `r` : open the file for reading (NULL if it doesn’t exist)
- `w` : create for writing. destroy old if file exists
- `a` : open for writing. create if not there. start at the end-of-file
- `r+` : open for update (r/w). create if not there. start at the beginning.
- `w+` : create for r/w. destroy old if there
- `a+` : open for r/w. create if not there. start at the end-of-file
There's also `b` for binary modes, but they're not covered in this course.

## Default Files
Every C program has three files as default: `stdin` (for reading), `stdout` (for writing) and `stderr` (for errors).
```c
fprintf(stdout, "Hello there!\n"); // This is the same as printf("Hello there!\n");
fscanf(stdin, "%d", &int_var); // This is the same as scanf("%d", &int_var);
fprintf(stderr, "An error has occurred!\n");
```

## Reading and Writing
There's 4 ways to read and write: formatted file IO, get and put a character, get and put a line, or block read and write.
Formatted file IO is what we did above:
```c
fprintf(stdout, "Hello there!\n"); // This is the same as printf("Hello there!\n");
fscanf(stdin, "%d", &int_var); // This is the same as scanf("%d", &int_var);
```

Get and put a character is done with `fgetc()` and `fputc()`, respectively:
```c
#include <stdio.h>
int fgetc(FILE * fp); // returns the character read, converted to int
int fputc(int c, FILE * fp); // returns c on success, EOF otherwise
```

Get and put a line is a similar process:
```c
#include <stdio.h>
// fgets reads an entire line into the parameter s, up to n-1 character in length
char *fgets(char *s, int n, FILE * fp); // returns pointer s on success, NULL otherwise
int fputs(char *s, FILE * fp); // returns # characters written on success, EOF otherwise
```

If you want to read and write binary, you can use `fread()` and `fwrite()`:
```c
#include <stdio.h>
// buf is a pointer to a region/address in memory to be written/read
// size is the size in bytes of each data item
// count is the number of items to be read
// fp is the file to be written to/read from
// fwrite returns count on success and something else otherwise
int fwrite (void *buf, int size, int count, FILE *fp);
int fread (void *buf, int size, int count, FILE *fp);
```

As an example, you can write an array of 100 integers to file pointer fp like so:
```c
fwrite(buf, sizeof(int), 100, fp);
```

Finally, for memory management, we use `fclose()` to close the file.
If you want to just close the buffer but not the overall connection, you can use `fflush()` instead:
```c
#include <stdio.h>
int fclose (FILE * fp); // returns 0 on success, -1 on fail
int fflush (FILE * fp); // "                              "
```

Without these, your updates might not go through.

## Sequential and Random Access
Whenever you read or write, the position you're at (a long type variable in FILE) moves forward.
Here is the continuation of your C programming guide on file handling and related topics, formatted as requested:

```markdown
If you want to go back to the beginning, you can use `rewind()`:
```c
void rewind (FILE * fp);
```

To get the position, use `ftell()`:
```c
long ftell(FILE * fp); // returns 0 if at the first byte and -1 upon failure
```

If you want to jump a few bytes, you can use `fseek()`:
```c
int fseek (FILE * fp, long offset, int origin);
```

We have three constants predefined for origin; `SEEK_SET` (move offset bytes from the beginning), `SEEK_CUR` (move offset bytes from the current position) and `SEEK_END` (move offset bytes from the end).

## EOF
If you're at the end of a file, functions you call will return `EOF`. For a text mode file, it looks like this:
```c
while ( (c = fgetc (fp) ) != EOF )
```

The problem with this is that the byte of data read might be the same as `EOF`. If you want to detect whether or not an error occurred as a result of being `EOF`, you can use `feof`:
```c
int feof (FILE * fp); // realizes only after reading
```

## Modifying Files
To remove a file, do `remove()`, and to change the name, do `rename()`:
```c
int remove (const char * filename); // 0 if success, -1 upon fail
int rename (const char * oldname, const char * newname); // same as above
```

## Temporary Files
You can make a temporary file that only exists for the duration of the program:
```c
char *tmpnam(char *s); // creates a valid filename that does not conflict
```

This doesn't create the file itself, just the name. You can then go open this file and write to it, since C will create the file if it doesn't exist. The resulting written file will continue to exist just like a normal file.

## Exit
The `exit()` function allows you to exit a program at any time before the normal exit location. You can pass it a status (int) indicating either an error or normal behaviour:
```c
#include <stdlib.h>
if( (fp=fopen("a.txt","r")) == NULL){
    fprintf(stderr, "Cannot open file a.txt!\n");
    exit(1); // error status
}
```


# Pointers

We mentioned pointers earlier in the course, but what actually are they?

A pointer is nothing more than a mechanism to utilize computer memory

All it really is is a variable and an address in memory

- This is kinda like a variable, except it stores a memory address instead of a value

We declare pointers with a \* in front of the pointer/variable name which returns what the address points to in memory

- This is different from a &, which simply returns the address itself

All pointer variables are the same size since the address sizes have a maximum according to the OS (we'll assume a 32-bit architecture for this class)

- This means that every address will be 4 bytes

When we declare a pointer like so...

```c
int *p;
```

...we will set aside 4 bytes in memory to store the full address

- If we were in 64-bit architecture like most modern OS, we'd set aside 8 bytes

You may ask why we don't have a pointer variable type, the reason for this is that we need to know what data type the pointer points to in order to do pointer arithmetic (we'll cover this later)

If we want to assign this, we must set it equal to the address of another variable of the same type

```c
char c;
char *cp;
cp = &c // remember that & refers to the address of c
```


Now, if we want to make an assignment to our character, we can do it through our pointer

```c
*cp = 37; // *cp is an alias of c
```

- Remember that no asterisk accesses the value (the address) whereas asterisk accesses the value of the variable that we're pointing to


- Remember that the size of the pointer is dependant on the architecture and not the type of the pointer

Applying & to a variable produces a pointer to the variable, whereas applying \* to a pointer takes us back to the original variable

Let's see this in action with some code

```c
int i, *ip;
ip = &i;
i = 42;
int j = *&i;
```

Let's assume i is at address 405; in this case, we can break this down

We know that the address is 405, so if we break that up, we get...

```c
int j = *405;
```

The \* then points us to the value of the original variable given the address, which is 42

So now j = 42;

With this, we know the following 2 lines are equivalent

```c
int j = *&i;
int j = i;
```

## Safety Precautions

Note that we have to make sure that we assign a pointer to a variable before we do anything to it to prevent undefined behaviour

```c
int *ip; //uninitialized
printf("%d", *ip); //hijinks now ensue
printf("%d", &ip); //this, however, is fine since we have an address for ip
```

Something else that can cause even worse problems is assigning a pointer to an actual value

```c
int *ip;
ip = 137;
*ip = 42; //hijinks ensue
```

The issue that comes up here is that we have no idea where 137 points to, so if we fiddle around with this...it can cause problems (cough cough blue screen of death cough cough)

## Pointers and Arrays

Just like we can have pointers to variables, we can have pointers to arrays as well

```c
char ca[3];
char *cp;
cp = &(ca[0]); // the brackets are prefered here
```

These can then be accessed as normal

```c
*cp = 7;
printf("%d", ca[0]); // 7
```

However, we can do something unique when we have a pointer to an array

Remember how array elements are sequential in memory? We can use this to our advantage

What would happen if we added to cp?

```c
*(cp+2) = 8;
```

What would happen here? Well, we go two steps down in memory (since cp is of type char, we'd go down two bytes)

Since arrays are sequential and we start from 0, we're going two steps down in the array as well, leading us to ca[2]

```c
printf("%d", ca[2]); // 8
```

What would happen if we did this with a larger type?

```c
int b[3];
int *bp;
bp = &(b[0]);
*(bp+2) = 34;
```

In this case, we'd still go two steps in memory, but since bp is of type int, each step would be 4 bytes, so we'd go down 8 bytes to b[2]

```c
printf("%d", b[2]); // 34
```

## Void Pointers

Remember void? That works for pointers as well

These are also called **generic pointers** as they have no associated data type, allowing us to cast the same data as multiple types and use multiple variable types on the same pointer

Because it's generic, it must be type-casted in order to be used

An example of its use in C goes as follows

```c
char c;
void *vp;
c = 'k';
vp = &c; // assignment works as normal
printf("%c", *((char*) vp)); // k
// general form is *((type*) pointer_name)
int d = 49;
vp = &d; // since vp is generic, this is allowed
printf("%d", *((int*) vp)); // 49
// we still have to cast properly
```

- Note that we should really be careful that our type-casting is compatible with the address that the pointer points to, or else hijinks will ensue

All this talking about pointers leads us to the real question

## Why Would We Ever Need This?

There's lots of reasons why you would need a pointer, one of which is passing values to and from functions

Let's say we want a function to manipulate multiple values

```c
void my_func (int x, int y) {
	x = x * 2;
	y += 3;
}

int main (int argc, char *argv[]) {
	int x, y;
	x = 2;
	y = 2;
	printf("%d\n", x); // 2
	printf("%d\n\n", y); // 2
	my_func(x, y);
	printf("%d\n", x); // 2 (we want this to be 4)
	printf("%d\n\n", y); // 2 (we want this to be 5)
}
```

How would we manipulate x and y from inside a function? We just point to the memory address

Remember that we can manipulate memory data directly using a pointer, so we pass in pointers for my_func and point to the addresses of x and y

Modifying our code, we get the following

```c
void my_func (int *x, int *y) { // taking pointers
	x = x * 2;
	y += 3;
}

int main (int argc, char *argv[]) {
	int x, y;
	x = 2;
	y = 2;
	printf("%d\n", x); // 2
	printf("%d\n\n", y); // 2
	my_func(&x, &y); // passing addresses
	printf("%d\n", x); // 4
	printf("%d\n\n", y); // 5
}
```

- We'll get into greater detail of this concept later on
