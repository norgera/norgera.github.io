---
order: 2005
layout: default
toc: true
---

# SQL

## MySQL

To start MySQL in linux, do the following command

```java
mysql -u root -ppassword
```

From here, you’re in and can use all your commands, including

```java
SHOW DATABASES; lists all databases
DROP DATABASE IF EXISTS vetdb; deletes the database
CREATE DATABASE vetdb; creates a database
USE vetdb; begins database usage
SHOW TABLES; shows the tables in the current database
DROP TABLE tablename; deletes the table
```

# SQL

SQL is the language that implements relational algebra in the digital world, being both a **DDL** (data definition language) and a **DML** (data manipulation language)

Initially, when you want to create a database, you do the following

```java
CREATE DATABASE name;
```
- This is usually the only time you need to create a database

- INFORMATION_SCHEMA, MYSQL AND PERFORMANCE_SCHEMA ARE CRITICAL, DELETING THEM WILL BREAK YOUR VM

When making tables in SQL, you need to set types for every attribute, with a list of available types here: https://www.w3resource.com/mysql/mysql-data-types.php

To create a table in a database, the command looks like this

```java
CREATE TABLE tableName (attr1 type NOT NULL, attr2 type, PRIMARY KEY (attr1));
CREATE TABLE owner (firstname VARCHAR(20), ownerid INT NOT NULL, PRIMARY KEY (ownerid));
```

- Note that you need to be in a database to do this, which you do with the following command

```java
USE dbname;
```

To drop a table, do the following

```java
DROP TABLE tableName;
```

To pipe commands, do the following

```c
sudo mysql --verbose -pyourpassword < script1.txt > outputscript1.txt 2>&1
```

You can also quit just by typing \q

## More Commands

For insert (which applies to all forms of SQL) is the following

```c
INSERT INTO tableName (attr1, attr2, attr3) VALUES (value1, value2, value3);
```

- If you’re adding a whole row in the same order as it is in the table, you can skip the attributes part

```c
INSERT INTO tableName VALUES (value1, value2, value3);
```

- This will be error checked based on the table being inserted into much like a DBMS, so don’t worry too much about screwing up your tables with this

You can also update values based on a certain condition

```c
UPDATE tableName SET attrName = 'value' WHERE condition;
```

Delete follows a similar format

```c
DELETE FROM tableName WHERE condition;
```

- Be careful with this because, if you forget to put a condition, it will delete every row in the table

Keep in mind that we still have access to all of our SHOW commands as well

```c
SHOW DATABASES;
SHOW TABLES;
SHOW COLUMNS IN tableName
```

## Queries

To do a query, we use the SELECT keyword

```c
SELECT attrname, attrname,... FROM tableName, tableName,... WHERE condition;
```

We can also select whole rows with *

```c
SELECT * from tableName, tableName,... WHERE condition;
```

Keep in mind that when we have multiple tables we’re doing a join (there’s lots of other ways to do joins which we’ll get into later)

- With a join, we can also specify which attribute we want from what table with tableName.attrName, although sometimes we don’t have to

We can also create **views** (query shortcuts) with SELECT as well

```c
CREATE VIEW viewName AS SELECT ...
```

We can then use this view in another query

```c
SELECT * FROM viewName;
```

Something else we might want to do is rename our attributes for the query

```c
SELECT attrName AS "newAttrName" FROM tableName;
```

- There’s also some situations that we talked about in relational algebra where you need to do this

In relational algebra we don’t show repeats at all, but we do sometimes in SQL, so to make SQL act like relational algebra in this respect we can use the DISTINCT keyword in our queries

```c
SELECT DISTINCT attrName FROM tableName;
```

Something to keep in mind is that SQL is case sensitive, so if you run into errors, check your capitalization
```