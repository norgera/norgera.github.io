---
order: 2008
layout: default
toc: true
---

# Shell & Makefiles

# Shell Environments

Remember that the shell is an interface between the users and the kernel, which manages hardware for you


Shell is about the lowest you can go in the computer

## Variables

The shell environment is the place where you interact with the kernel, with a set of variables and values that allow the user to actually do anything

Ex. PATH determines the file that the shell looks at for your command and SHELL indicates the type of shell you're using

You can also define new variables and changes other variables' values, much like you can in C

You use shell variables by putting a $ in front of the names, many of which are define in .bash_profile and .bashrc

```c
% echo $HOME
```

Two kinds of variables exist: environment variables (available to the current shell and the programs invoked from the shell) and regular shell variables (not available in programs invoked from the shell)

In bash, regular variables are defined with the following

```c
varname=varvalue //no spaces allowed!!
```

For an environment variable, you do this instead

```c
MYENVVAR="env value"
export MYENVVAR
//or
export MYENVVAR="env value"
```

- This is also called exporting for obvious reasons

For example, let's say you run the following commands

```c
% export MYENVVAR="foo"
% myregvar="bar"
% bash //here we enter a new shell
% echo $MYENVVAR
foo //has scope for the all shells
% echo $myregvar
bash: myregvar: unbound variables //has scope for only the shell it was defined in
//the above result only occurs when you have set -u in .bashrc, otherwise it's blank
% echo $SHLVL //shows the level of shell you're on
```

For csh/tsch, setting regular variables is a bit different

```c
set varname=varvalue
unset varname //unsets the variable
```

Environment variables is also different

```c
setenv MYENVVAR "env var"
unsetenv MYENVVAR //unsets the variable
```

The following are some common shell variables

- SHELL: the name of the shell being used
- PATH: where to find executables to execute
- LANG: the locale you are using
- LIBRARY_PATH: where libraries for executables are found at run time
- USER: the user name of the user logged in
- HOME: the user’s home directory
- TERM: the kind of terminal the user is using
- DISPLAY: where X program windows are shown
- HOSTNAME: the name of the host logged on to

But how does Unix actually find these commands?

## Finding Commands

If you specify a pathname, the shell looks into that path for the executable

If you specify a filename (i.e. w/o / in the name), the shell looks for it in the search path

- Note that the shell doesn't look for executables in your current directory unless you specify it explicitly (ex. ./a.out)

Sometimes there's multiple versions of a command with the same name, so the shell will search in each directory of $PATH in left to right order and execute the first version

- If you wish to write the other version, you have to explicitly call the pathname

## Startup

When bash is executed, it runs two config files: .bash_profile (runs once when you log in, sets up terminal) and .bashrc (runs each time a bash process runs, sets variables and aliases)

- Other shells use different files

DO NOT ALTER THESE UNLESS YOU KNOW EXACTLY WHAT YOU'RE DOING

- Something you can do if you want to alter these is have a backup in case you screw something up

## alias

You can also use the shell to set aliases for commands

```c
% alias alias_name='real-command input'
//for example
% alias rm='rm -i' //good safety switch
```

You can put these in your .bashrc to set them up as soon as you log in

## Quotes

You may notice I used single quotes instead of double quotes above

This is because different quotes mean different things in Unix

If you use double quotes, shell variables are expanded, but with single quotes, they're simply treated as text

```c
% echo "Welcome $HOME"
Welcome /home/user
% echo 'Welcome $HOME'
Welcome $HOME
```

With back quotes, the quotes are replaced with the return value of the execution of the command

```c
% PS1=`hostname`
//below is a more standard way
% PS1=$(hostname)
```

## History

If you have some commands that you're repeating a bunch of times, you can repeat the last shell command you ran with !!

- If you add a command suffix, you can return the last command beginning with that command (ex. !gcc runs the last gcc command)
- This can also be a number (ex. !5 runs the 5th command in the history list)

You can also call your history with the history command

When you're in bash, you can also use the arrow keys

If you want a longer history list, you can change HISTSIZE in your .bashrc file

## Completion

You can let the shell complete a long command name by typing the prefix and hitting TAB

- The shell can also complete file names the same way

## Some Useful Commands

bash and tcsh (for tcsh set autolist)

- tab completion will show a list of possibilities when the completion choice is ambiguous

export PATH=$PATH:$HOME/bin:.

- if you want to add ~/bin and . to your PATH

export TERM=xterm

- if your terminal is not working properly, i.e. some system does not know xterm-256color

printenv or env

- show the current values of all your environment variables

# Shell Scripts

Much like you can make files of C code, you can make files of shell commands that are executed procedurally

These scripts usually begin with a #! and a shell name

```c
#!/bin/sh
```

- The users current shell will be used by default

Any command in Unix can go into a shell script, which are then executed in the same order as they are in C

Every shell will use a different control structure, which is what makes the #! line very important

- We'll use Bourne shell (sh) for this class (not to be confused with Bourne Again Shell aka BASH)

You can use this scripts to avoid repetitive tasks and to automate long tasks that are difficult to remember

For example, you can "encrypt a file with the following command

```c
% tr abcdefghijklmnopqrstuvwxyz thequickbrownfxjmpsvalzydg < file1 > file2
```

This command is hard to remember, so we can take this and put it into a shell script

For example, an encrypting script will look like this

```c
#!/bin/sh
tr abcdefghijklmnopqrstuvwxyz \ //the \ just means that the script goes to the next line
thequickbrownfxjmpsvalzydg
```

And a decrypting script will look like this

```c
#!/bin/sh
tr thequickbrownfxjmpsvalzydg \
abcdefghijklmnopqrstuvwxyz
```

You can make these text files into executables with the chmod command

```c
% chmod u+x encrypt decrypt
```

From here, you can run them like normal commands with ./ in front

```c
% ./encrypt < file1 > file2
% ./decrypt < file2 > file2
% diff file1 file3
//no difference found
```

Shell variables work like they do in bash

```c
% PATH=$PATH:$HOME/bin
% HA=$1
% PHRASE="House on the hill"
% export PHRASE
```

You can also use backquotes the same way you can in bash

```c
#!/bin/sh
files=`ls`
echo $files
```

If you run this, you get the same result as just doing the ls command

You can also do calculations on integers with the expr command

```c
#!/bin/sh
count=5
count=`expr $count + 1`
echo $count
```

You then get 6 as an output

expr also supports the following operators

- Arithmetic operators: +, -, *, /, %
- Comparison operators: <, <=, =, !=, >=, >
- Boolean/Logical operators: &, |
- Parentheses: (, )

- Precedence is the same as it is in C and Java

## Control

You also have access to all the same control statements that you do in C

### For loop

```c
#!/bin/sh
for var in val1 val2
do
	command_set //command_set is executed w/ each value of var (val1, val2...) in order
done
```

For example, you can print the numbers from 1 to 5 like so

```c
#!/bin/sh
# prints from 1 to 5 //this is a comment in a shell script
for i in 1 2 3 4 5
do
	echo "$i"
done
```

Typing out each value gets cumbersome, so you can use (()) to do for loops like normal C

- This is called a bash construct

```c
#!/bin/sh
for ((i=1; i<4; i++)); do
	for ((j=1; j<4; j++)); do
		(( value = i*j )) //(()) also allows for calculation without expr
		echo -n "$value " //-n echoes with no newline
	done
	echo
done
```

Bash constructs basically allow for C statements

The following is a good use case of a for loop, which just gets all the filenames in the current directory

```c
#!/bin/sh
files=`ls`
for i in $files
do
	echo " $i"
	grep $i $i
done
```

You can also do this instead for the same result

```c
#!/bin/sh
for i in *; do
	echo " $i"
	grep $i $i
done
```

### Conditional

You can also use conditionals much like C, the only difference is that conditionals can only test whether or not a command is successful

Well-behaved commands always return back a return code (0 for a success, anything else for a failure [it's actually just 1-255])

```c
#!/bin/sh
if command_1
then
	command_set_1
fi //we use a different codeword to finish the conditional
```

For example

```c
#!/bin/sh
//grep returns 0 if something is found and non-zero otherwise
//redurecting to /dev/null makes sure that no intermediate results get printed
if grep unix myfile >/dev/null
then
	echo "It's there"
else //else works the same way it does in C
	echo "It's not there"
fi
```

You can also have else if like so

```c
#!/bin/sh
if grep "UNIX" myfile >/dev/null
then
	echo "UNIX occurs in file"
elif grep "DOS" myfile >/dev/null
then
	echo "Unix does not occur, but DOS does"
else
	echo "Nobody is there"
fi
```

### Semicolons and Colons

Semicolons separate statements when you want separate statements on the same line, much like they do in C

```c
#!/bin/sh
if grep "UNIX" myfile; then echo "Got it"; fi
```

You can also do the same thing on the command line

```c
% ls; cd ..; ls
```

You can use the colon as a dummy command, which means it does nothing

```c
#!/bin/sh
if grep "UNIX" myfile >/dev/null
then
	:
else
	echo "Nobody is there"
fi
```

### While

While loops have the same conditional rules as if statements, with all the looping of a for loop

For example, the following script sums the numbers from 1 to 100

```c
#!/bin/sh
i=1
sum=0
while [ $i -le 100 ]; do
	sum=`expr $sum + $i`
	i=`expr $i + 1`
done
echo The sum is $sum.
```

The until loop is basically the same, except it stops the execution when the command is successful

- This in particular echoes all numbers less than 3

```c
#!/bin/sh
x=1
until [ $x -gt 3 ]; do
	echo x = $x
	x=`expr $x + 1`
done
```

### Case

Case works a lot like a switch in Java

```c
#!/bin/sh
echo -n 'Choose command [1-4] > '
read reply
echo
case $reply in //format is case string in
	"1") date ;; //format is pattern) result_command ;;
	"2"|"3") pwd ;; //| is used as a logical or here
	"4") ls ;;
	*) echo Illegal choice! ;; //*) is the default case
esac //escaping the case
```

## Test

If you want to actually use booleans like you do in C, you have to use the test command

Let's see this in action with a simple example

```c
count=0
for i in *; do
	if test –x $i; then //tests if the file is executable
		count=`expr $count + 1`
	fi
done
echo "Total of $count files executable."
```

The following are some file switches you can use

- `test -f file` does file exist and is a regular file?
- `test -d file` does file exist and is a directory?
- `test -x file` does file exist and is executable?
- `test -s file` does file exist and is longer than 0 bytes?

There's also a set of string switch you can use:

- `test -z string` is string of length 0?
- `test string1 = string2` does string1 equal string2?
- `test string1 != string2` not equal?

For example

```c
if test -z $REMOTEHOST
then
	:
else
	DISPLAY="$REMOTEHOST:0"
	export DISPLAY
fi
//creates an environment variable with the remote host if it exists
```

Integers can also be compares with test with the following switches

-eq (=), -ne (≠), -lt (<), -le (≤), -gt (>), -ge (≥)

For example, the following script finds the smallest number in a list

```c
#!/bin/sh
smallest=10000
for i in 5 8 19 8 7 3; do
	if test $i -lt $smallest; then
		smallest=$i
	fi
done
echo $smallest
```

You can also use [] as an alias for test

- Note that you must have inner spaces!!

```c
#!/bin/sh
smallest=10000
for i in 5 8 19 8 7 3; do
	if [ $i -lt $smallest ]; then
		smallest=$i
	fi
done
echo $smallest
```

## Passing Input

You can pass in command line input with $1, $2 up to $9 for each input in the same order

For example, $3 would be the third input passed in

- This is limited to 9 inputs

For example, the following script gets a particular line in a file

```c
#!/bin/sh
//gets everything from the start to the line number and pipes that into the tail
//tail then gets the last element of that block, which is the line at the number
head -$1 $2 | tail -1
```

You can call it like so

```c
% getfilenum filenum file
```

Other input variables go as follows

- $0 is the name of the command running
- $\* and $@ are all the arguments (even if there's more than 9)
- $# is the number of arguments

You can also use the shift command to shift all arguments to the left

- The first argument will be lost in the process

For example, the following shell script prints the n oldest files in the directory

```c
% oldestfiles n dir
#!/bin/sh
N=$1
shift
//does ls with the list sorted in descending order of time of modification
//takes that output and pipes into tail
//tail then removes the first line and pipes into another tail
//that tail then gives the block of N
ls -lt $* | tail -n + 2 | tail -$N
```

## Special Variables

There's a set of special variables available to us in Bourne Shell as well

We've seen a few, like $_ and $_, but there's also:

- $$ (process ID of the current shell)
- $? return value of the last foreground process to finish

Note that $@ and $\* are different when the arguments contain spaces

You can read through all the special variables with the following

```c
% man sh
```

## Read

The read command reads one line of input from the standard input

```c
% read var1 var2 var3
//for example
% read X Y Z
Here is input
% echo $X
Here
% echo $Z
input
```

Because this is a Unix command, you can use this in a shell script as well

## Redirection

Redirection in shell works similarly to the way it does in Unix

You can use command << word to input into command up to, but not including, word beginning with word

For example, the following only displays lines with the word hello in it

```c
#!/bin/sh
grep 'hello' << EOF //EOF stands for end of file
This is some sample text.
Here is a line with hello in it.
Here is another line with hello.
No more lines with that word.
EOF
```

For another example, let's say you have a file marks.txt which some student information

```c
091286899 90 H. White
197920499 80 J. Brown
899268899 75 A. Green
```

If you want to compute the average, you can do the following

```c
#!/bin/sh
# statistics
sum=0; countfail=0; count=0;
//takes the student info from each line until we hit an error
while read studentnum grade name; do //name includes the rest of the args on the line
	sum=`expr $sum + $grade`
	count=`expr $count + 1`
	if [ $grade -lt 50 ]; then //executes when grade < 50
		countfail=`expr $countfail + 1`
	fi
done
echo The average is `expr $sum / $count`.
echo $countfail students failed.
```

You can execute this script on marks.txt by doing the following

```c
% statistics < marks.txt
```

# Makefiles

We've covered modularity in C with simple examples

However, when your code gets larger and larger, managing all these C files and header files manually is impossible

This is where makefiles come in

Makefiles are a way to automatically group together your disparate modules into one clear executable, which is especially useful for large projects such as the Mars Rover (which is ~1 million lines of C code)

For example, let's say you use my_stat.h, my_stat.c and sample.c in your program

These are all the command you'll have to run to compile the program

```c
% cc -c my_stat.c
% cc -c sample.c
% cc -o sample same.o my_stat.o
```

You can put all this into a makefile using any text editor

```c
# Makefile for sample //this is a comment
sample: sample.o my_stat.o //target: dependency1 dependency2...
	cc -o sample sample.o my_stat.o //execute command here
sample.o: sample.c my_stat.h //header file is also a dependency
	cc -c sample.c //btw these indents have to be tabs
my_stat.o: my_stat.c my_stat.h
	cc -c my_stat.c
clean: //removes all .o files and the executable
	rm sample *.o core
```

You then save this file with the name "Makefile" or "makefile" and execute

```c
% make
```

This way, you don't need to recompile everything in case you need to change one of your files

For example, if I were to change sample.c, only the commands for sample.o and sample would run

You can also clear every generated file with the clean command

```c
% make clean
```

If you want to recompile everything, you can do this

```c
% make clean; make
```

You can also do the following for the same effect

```c
% touch my_stat.h //changes the time stamp of my_stat.h
% make
```

## Separate Directories

You can also use makefiles with several directories, which you might need for larger programs, if you know what you're doing with your architecture

If you store all the .c files related to each module in its own directory and all the .h files in a separate directory, you can have one makefile for each major module

The makefile for the main program will direct the creation of the final executable and makefiles for each module will create the .o bytecode files

For example, let's say you had the following files:

StackTypes.h,
StackInterface.h,
QueueTypes.h,
QueueInterface.h,
StackImplementation.c,
QueueImplementation.c,
Main.c

You'll want 4 subdirectories: Stack, Queue, Main and Include (which will store ALL of your header files)

Your makefile might look something like this for Stack

```c
export: StackImplementation.o //exports the module
StackImplementation.o: StackImplementation.c \
												../Include/StackTypes.h \
												../Include/StackInterface.h
//-I lets us specify the path ../Include to look for .h files
	gcc -I../Include -c StackImplementation.c
# substitute a print command of your choice for lpr below
print:
	lpr StackImplementation.c
clean:
	rm -f *.o
```

Queue will follow the same form

For Main, it's just a matter of collecting everything

```c
export: Main
Main: Main.o StackDir QueueDir
	gcc -o Main Main.o ../Stack/StackImplementation.o \
											../Queue/QueueImplementation.o
Main.o: Main.c ../Include/*.h
	gcc -I../Include -c Main.c
StackDir:
// parentheses makes a subprocess, letting us cd into Stack without having to cd back
	(cd ../Stack; make export)
QueueDir:
	(cd ../Queue; make export)
print:
	lpr Main.c
printall:
	lpr Main.c
	(cd ../Stack; make print)
	(cd ../Queue; make print)
clean:
	rm -f *.o Main core
cleanall:
	rm -f *.o Main core
	(cd ../Stack; make clean)
	(cd ../Queue; make clean)
```

## Macros

Much like in header files, macros can be used in makefiles to shorten long pieces of text

For example, our stack makefile will look like this

```c
CC = gcc
HDIR = ../Include
INCPATH = -I$(HDIR) //general form for using a macro is $(MACRO_NAME)
DEPH = $(HDIR)/StackTypes.h
$(HDIR)/StackInterface.h
SOURCE = StackImplementation

export: $(SOURCE).o
$(SOURCE).o: $(SOURCE).c $(DEPH)
	$(CC) $(INCPATH) -c $(SOURCE).c
print:
	lpr $(SOURCE).c
clean:
	rm -f *.o
```

gmake allows for more complex makefiles as well, which can include loops and conditionals

- This is outside the scope of this course
