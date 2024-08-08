---
order: 2000
layout: default
toc: true
---

# Unix Basics

## Logging Into UNIX

You'll need:

- Internet access
- An ssh client program (ssh, slogin if on linux or windows 10 or PuTTY on Windows)
- PuTTY is better for windows than command prompt and maybe better than powershell

What you do:

### At Home

For UNIX, Mac and Linux:

1. Open a terminal
2. Use ssh in the terminal

For Windows 10:

1. Open PowerShell
2. Use ssh in the PowerShell

For Windows w/o ssh client, use PuTTY

Command:

```jsx
ssh [UWO_username]@compute.gaul.csd.uwo.ca
```

From here, you can enter your password and access GAUL

Notes:

- Don't delete any files created by yourself
- You can't change your login through GAUL
- E-mail isn't configured
- Make sure you log out by typing the command _exit_

## Some Commands

_who_

- Displays who is currently logged in

_whoami_

- Displays who you are

_pwd_

- Prints the current working directory, or cwd
- Note: cwd is the file you're in (ex. when you open a file in your computer's file manager, that's your cwd)
- When you log in, this is your home directory by default

_ls_

- Displays the files in your cwd
- Note: add _-l_ to show permission information

_cd_ _[name_of_directory]_

- Navigates the file system (cd = change directory)
- You can only cd into a directory if it's directly connected to your cwd (parent/child)
- _cd .._ goes back one directory

_cat [name_of_text_file]_

- Displays the content of a text file in the cwd
- You can use the _more_ or _less_ commands to show more or less of the current text file

_mkdir_ _[new_directory_name]_

- Makes a new directory inside the cwd

_mv [file_name] [new_directory_path]_

- Moves files from one directory to another

_cp [name_of_file] [path_to_file]_

- Copies files from cwd to the desired directory (cwd if path_to_file is blank)

_rm [name_of_file]_

- Removes a file from the cwd
- Adding _-i_ gives you a prompt before removal as a safety measure (this should be used in most cases)
- _rmdir_ does the same thing but for a directory

_man [command]_

- Shows the manual page for a command (how to use the command, what the command does, etc.)
- _xman_ gives a graphical X-Windows version

_sftp_

- Allows for the transfer of files between GAUL and your home computer
- SFTP = Secure File Transfer Protocol
- Steps go as follows:

```jsx
% sftp user_name@compute.gail.csd.uwo.ca
password: [enter your password]
// use lls, lpwd and lcd to navigate through the home file system
// once you get to the file you want:
get [name_of_remote_file] //to download from GAUL to home
put [name_of_local_file] //to upload from home to GAUL
quit //make sure you do this when you're done!!
```

### Other Notes

- UNIX is case sensitive
- Ctrl-c (^C) interrupts the current task

## UNIX Editors

Editors come in 2 types:

Modal:

- Generally have an input mode and a command mode
- Input mode allows entry of text
- Command mode allows positioning within the file and more complex text mods
- Examples: ed and vi

Modeless:

- Text mod/positioning is done my key sequences (ex. arrow keys)
- Examples: emacs and pico

### ed

- The original line editor
- One of the most powerful, allowing for massive changes with one command
- Doesn't give a "local" or screen picture of what's in your file
- Powered by regular expressions (we'll look at this later)
- A lot of its capabilities have been taken for vi and emacs
- Still used for some shell scripts

### vi/vim

- Comes in all UNIX versions
- Steep learning curve but very fast once you're experienced
- Has 3 modes: command mode, input mode and colon command mode

Starting, you do

```jsx
vi [name_of_file] //new or existing
```

- If it exists, you will see the first page of the file
- If it's new, you have a blank screen that you can type into
- File name is in the bottom left
- Line/column numbers can also be at the bottom

Basic commands:

- arrow keys: move the cursor
- i: change to input mode
- esc: change to command move
- x: delete the current character (3x for 3)
- dd: delete the current line (3dd for 3)
- u: undo
- /: search for text following the

Colon command mode:

- :w: write to file
- :wq: save and quit
- :q: quit (if no change)
- :q!: exit without saving

### emacs

- Has versions for UNIX, Windows and other systems
- Menu and mouse driven under X-Windows (to avoid this, do emacs -nw
- Uses special keys ESC and CTRL to do editor functions other than input
- Contains a complete programming language, meaning you can do **anything**

Starting

```jsx
% emacs -nw [name_of_file] //new or existing
```

- If it exists, you will see the first page of the file
- If it's new, you have a blank screen that you can type into
- File name is in the bottom left

Commands:

- ^\_ or ^X u: undo
- ^G: backs you out of whatever mode you're in
- ^X ^S: save
- ^X ^C: exit emacs
- ^X ^W: save to a different file (you get prompted for a name)
- ^S: search (you get prompted for a string)

To cut and paste:

1. Move cursor to start
2. Do ^@
3. Move cursor to end
4. Either ^W to cut or ESCW to copy
5. Move cursor to new location
6. Do ^y to paste

### pico

- Modeless like emacs
- Use in the pine email program

Commands:

- ^g: help
- ^r: reads
- ^o: writes a file
- ^x: exits pico


# Command IO and Redirection

Recall that each Unix process has three streams opened upon start; input, output and diagnostic/error messages

Input is represented as **stdin** and has a file descriptor of 0, output is **stdout** and 1, and error is **stderr** and 2

For your terminal, stdin is the keyboard, while stdout and stderr is the display

- For example, whoami echoes your username to the display (stdout) after being entered into your keyboard (stdin)

This is all well and good, but what if you wanted to change where this outputted? What about input?

## Redirection

Luckily, this is quite simple

< to redirect standard output (or 0<)

> to redirect standard input (or 1>)

2> to redirect standard error

For example, if we want to output the following command to a text file...

```c
% whoami
```

...we can modify it like so

```c
% whoami > file1
```

Just like normal file usage, file1 is created if it's not there

However, depending on your bash setup, Unix can sometimes get mad at you if file1 already exists

So what can you do? You can force the overwrite (or **clobber**) the file

```c
% whoami >| file1
```

You can also append the output to file1

```c
% whoami >> file1
```

- Note that this will cause warnings if file1 doesn't exist

You can also use this method to separate output and error messages

```c
% whoami > file1 2> file_error
```

You can also direct them to the same place like so

```c
% whoami &> file1
```

A more general way goes as follows

```c
% whoami > file1 2>&1 //stdout goes to file1 and stderr goes to where stdout is
```

For redirecting input, there's a very good use case with the command **tr**

```c
% tr string1 string2 text
```

This command will do the following

1. Take each character in text
2. If it matches a character n of string1, translate it to character n of string2
3. Output the result

Usually this outputs to the terminal, but we can change this with our redirections

For example, if we want to do a translation on our file1 and put it into file2, we can do so like this

```c
% tr aeio 4310 < file1 > file2
```

Using this type of command, we can also do encoding, somewhat like a cypher

We can also put in regular expressions (which we will cover in a bit)

```c
% tr a-z A-Z < file1 > file2
```

For an application of error redirection, let's say you don't want to display error messages for whatever reason

Recalling /dev/null, the directory that makes files disappear, we can set out error output to this directory to discard them

```c
% tr a-z A-Z < file1 > file2 2> /dev/null
```

This tr command is an example of what we call a **filter**

## Filters

Filters are simply programs that

- Read from stdin
- Modify it (or do nothing)
- Write the results to stdout

Although these filters can take user input, they don't need it thanks to our redirection capabilities

The command tr is an example of a filter command, as well as others, such as:

grep pattern

This reads stdin and writes any lines containing the regex pattern in the argument

```c
% grep a-z < file1 > file2
```

wc

Counts the # of chars/words/lines on stdin and writes the result to stdout

sort

Sorts input lines in alphabetical order and writes to stdout

## Pipes

Something we can also do is use take the output of a command and use it as the input for another

```c
% command1 | command2 | command3 | ... | command_n
```

You can also pipe any error messages that you get

```c
% command1 |& command2
```

If we run into a scenario where we want to pipe to a file AND our terminal, we can use the **tee** command

```c
% command1 | tee file1
```

# Job Control

Recall that Unix is a multi-tasking operating system and not all tasks are controlled by you, either by other users or in the background

- Ex. your inbox listening for mail

When you run a task (ls, vi, etc.) it executes in the foreground of your shell, meaning that it has control over your screen and keyboard

But what if you want a task in the background? This can be easily done with the & symbol

```c
% command &
```

This is especially useful for heavy tasks that you don't want to take over your computer, leaving you to do other things while you wait

Any output, once finished, will immediately output to your screen, which can be a bit confusing

When input is required, the process prints a message and stops

Upon completion, a message is printed

Explicitly calling background jobs aren't needed as much for windowing systems (eg. Windows) since you can just go to another window and run the command, but for terminal-based systems (Unix) this is very useful

You also (fortunately) have a lot of control over your jobs in Unix

## Managing Jobs

While you can terminate a job in the foreground with Ctrl-C, you can also temporarily pause a job with Ctrl-Z

Doing this, the job can be either taken into the foreground, taken into the background or killed

To see which jobs are running/stopped, you can check using the jobs command

```c
% jobs
```

This will pull up a list of jobs that have either stopped or are still running

If you wish to move a job into the background you can do the following

```c
% bg %n //brings the nth job into the background
```

- Use fg to bring jobs into the foreground

You can also kill jobs using the kill command, much like Ctrl-C

```c
% kill %n
% kill -KILL %n //use this if the above command doesn't work
```

This kill command can also have the same functionality as Ctrl-Z with the following switch

```c
% kill -STOP %n
```

## More Job Commands

Jobs are simply a special type of Unix process that are started by Unix shells, so if you want to see every current process, you must use the ps command

```c
% ps
```

This can take many options depending on which ps command you use

-l

Gives a long list of what's going on

-u login_id

Shows info about login_id's processes

You can use the following command to see more options

```c
% man ps
```

If you want to kill any process, you can do the following

```c
% kill process_id
```

The ulimit command is also quite useful, setting and reporting file-size writing limits on files written by the shell or child processes

While any user can decrease the limit, you need certain privileges to increase it

This also comes with some switches you can use

-a

Prints all limits

-n

Max number of open file descriptors

-u

Max number of processes available

# Regular Expressions

Sometimes we want to search for certain patterns, which is perfectly done by a regular expressions, special strings that define a search pattern for matching text

These are used in many Unix utilities (grep, vi, etc.) as well as outside of Unix in other programming languages, which then interpret these strings

These strings can be regular text...

```c
% grep unix file //matches only unix in file
```

...or they can be special text

```c
% grep '[uU]nix' file //matches unix and Unix
```

- Note that these are different from name expansions, which are interpreted by the shell

```c
% grep [uU]nix file //filename expansion
```

With special modifications, you can match a wide array of strings

## Wildcards

.

Matches any single character

Ex. a.b matches axb and a$b but not axxb

-

Matches zero of more occurrences of the previous single character pattern

Ex. a\*b matches b, ab, and aab, but not axb

- This can be combined with . to make .\*, which matches any string of characters

*

Matches one or more occurrences of the previous single character pattern

Ex. a\+b matches ab and aab, but not b or axb

?

Matches zero or one occurrences of the previous single character pattern

Ex. a\?b matches b and ab, but not aab or axb

- Notice that + and ? are escaped with \, which is necessary for them to have any special meaning
- You can use \(string\) if what you want to match isn't just a single character

## Sets

You can represent sets of characters with [...] (ex. [wxyz] matches w, x, y or z)

This can also match ranges of characters (ex. [a-z] matches anything from a to z)

- Wildcards can be applied to both of these as well

It is also worth noting that wildcards lose any meaning once they're in these brackets

## Parts

You can also match specific parts of lines or words using regular expressions

^

Matches the beginning of a line

ex. ^TITLE

$

Matches the end of a line

ex. FINI$

- Note that $ only has special meaning at the end of an expression

\<

Match beginning of a word

\>

Match the end of a word

## More

You can match the opposite of a set with ^

ex. [^aeiou] matches any non-vowel

You can also escape the special meaning of character with \

ex. \* will only match asterisks

You can refer to the most recent match with \(...\)

Recall the remembered portion with \n, where n is 1-9

ex. '\([a-z]\)\1' matches any pair of duplicate letters

X\{m,n\}

Matches m -- n repeats of the one character regular expression X

X\{m\}

Matches exactly m repeats of the one character regular expression X

X\{m,\}

Matches at least m repeats of the one character regular expression X

## Switches

-c

Count the number of matches

-i

Ignore case distinction

-v

Select non-matching lines

## Extended Regular Expressions

If you were to use a utility like egrep or grep -E, you can make use of an extended set of wildcards and other mechanisms

-

Works like before, except you don't need a backslash

- Same applies to ?

r1|r2

Acts as a logical or operator between two regular expressions

(...)

Allows for single character wildcards to apply to an entire encased regular expression

- Recall currently doesn't work on GAUL

Some character classes are predefined, including [:lower:] (a-z), [:upper:] (A-Z), [:alpha:] (A-Za-z), [:digit:] (0-9) and [:alnum:] (A-Za-z0-9)
