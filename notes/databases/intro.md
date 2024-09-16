---
order: 2000
layout: default
toc: true
---

### Introduction to Databases

---

**Key Concepts**

- **Data**: Known facts that can be recorded and hold meaning.
- **Database**: A collection of related data.
- **Mini-World**: A model of a part of the real world that a database represents, e.g., a hospital, a library.
- **DBMS**: A software package/system to create and manage databases.

**Example**: In a university database, data could represent students, courses, professors, and grades. Each of these is part of the "mini-world" of the university that the database models.

### Advantages of DBMS over Flat Files

1. **Reduces Data Redundancy**: Ensures consistency by centralizing data management.
2. **Multiple User Interfaces**: Allows multiple types of users to interact with the data.
3. **Security, Integrity, and Backups**: Includes built-in tools for these processes.
4. **Improved Performance**: Centralized data reduces the complexity of queries.
5. **Enforce Standards**: Ensures data remains organized and consistent.

**Example**: Consider an **Actor performs in Movie** relationship. In a well-designed database, this would be represented as a many-to-many relationship where multiple actors can perform in multiple movies. Without a DBMS, ensuring data consistency across such complex relationships would be challenging.

---

### Roles in a Database Environment

1. **Database Administrator (DBA)**:
    - Manages database access.
    - Ensures backups and security.
    - Monitors performance and upgrades.
2. **Database Designer**:
    - Determines the data to be stored.
    - Creates models and structures for the database.
3. **System Analyst and Application Programmer**:
    - Understands user needs and implements database-driven applications.
4. **End Users**:
    - Access and manage the data, usually via an interface created by programmers.

**Example**: In the 3-Schema Architecture, end users typically interact with the **External Level**, which provides a view of the data tailored to their needs, hiding the complexities of the database.

---

### Three-Schema Architecture & Data Independence

- **Schema**: Describes the structure of the data but not the actual data.
    - *Schema vs. State*: Schema is static (like a blueprint), while the state changes as data is updated.
- **Three Levels**:
    1. **Internal Level**: Physical storage of data.
    2. **Conceptual Level**: Logical structure of the database.
    3. **External Level**: What end users interact with (views).
- **Data Independence**:
    - *Logical Data Independence*: Allows changes to the conceptual schema without affecting the external level.
    - *Physical Data Independence*: Allows changes to physical storage without affecting the logical organization.

**Example**: If we have the table `PLAYER` with `PlayerID`, `FirstName`, and `TeamID`, users may only see the names and teams through the **External Level**, while the actual `PlayerID` used to connect relationships might be hidden.

---

### Entity Relationship Diagrams (ERDs)

- **Entities and Attributes**:
    - *Entity*: A real-world object represented in the database (e.g., Employee).
    - *Attributes*: Properties of the entity (e.g., Name, Salary).
- **Keys**:
    - *Primary Key*: Uniquely identifies an entity.
    - *Foreign Key*: References primary keys in other tables, linking entities.
    - *Composite Key*: Uses multiple attributes to form a key.

**Example**: In the relationship **COURSE offers SECTION**, the **SECTION** would be a weak entity because its identification depends on the **COURSE** it belongs to. Each **SECTION** is identified by a combination of its section number and course, which is represented using a composite key.

- **Relationships**:
    - *One-to-One*, *One-to-Many*, *Many-to-Many* relationships represent how entities relate.
    - **Example**: In the relationship **Actor performs in Movie**, this would be a many-to-many relationship because multiple actors can perform in multiple movies.

---

### Participation and Weak Entities

- **Total vs. Partial Participation**:
    - *Total*: All entities must participate in the relationship.
    - *Partial*: Only some entities participate.
- **Weak Entities**:
    - Lacking a unique identifier, a *weak entity* depends on a related *strong entity* for identification.

**Example**: The relationship **COUNTRY has capital CITY** demonstrates **total participation** because every country must have a capital city. The **CITY** entity is not a weak entity in this case.

---

### Crow's Foot Notation

- This notation provides a clearer, standardized way to represent cardinality (the number of relationships between entities).
    - *One-to-One*, *One-to-Many*, *Many-to-Many* relationships are visually represented.

**Example**: If we model **Aunt has Niece**, this would be a many-to-many relationship, as an aunt can have multiple nieces, and a niece can have multiple aunts.

---

### Relational Models

1. **Hierarchical Model**:
    - Organizes data into a tree-like structure (parent-child relationships).
    - *Disadvantage*: Only handles 1:N relationships, and data redundancy becomes an issue.
2. **Network Model**:
    - More flexible than the hierarchical model, supports complex relationships but is harder to implement and maintain.
    - *Disadvantage*: Uses pointers and circular lists, making it complicated.
3. **Relational Model**:
    - Introduced by *Codd (1970)*. Data is organized into relations (tables), which consist of rows (tuples) and columns (attributes).
    - The relational model is the basis for modern DBMS.

**Example**: In the **COUNTRY has capital CITY** relationship, the relational model would represent this using two tables: one for `COUNTRY` and one for `CITY`, with a foreign key in the `CITY` table pointing back to the `COUNTRY`.

---

#### Keys in Relational Models

- **Primary Key**: Ensures unique rows in a table.
- **Super Key**: Any combination of attributes that guarantee uniqueness.
- **Candidate Key**: Minimal super key.
- **Foreign Key**: Enforces referential integrity by linking tables.

**Example**: In the relationship **PAINTER paints PAINTING**, the `PAINTING` table would have a foreign key that references the `PAINTER` table, ensuring that each painting is associated with an existing painter.

---

#### Properties of Relations

- Each table must have unique names, no duplicate rows (tuples), and the values in each column must come from the same domain.
- The order of tuples doesn’t matter in a relation, but each tuple must be distinct.

**Example**: If you have a table for `STUDENT` with attributes like `StudentNum`, `Name`, and `GPA`, each `StudentNum` must be unique, ensuring no two students have the same identifier.

---

#### Mapping ER Diagrams to Relational Models

- Entities become tables.
- Relationships are represented using foreign keys or join tables (for many-to-many).
- Weak entities and multi-valued attributes require special handling by combining keys or creating separate tables.

**Example**: In the relationship **AAA** to **BBB** via **RRR** (M:N), the primary key of the relationship table for `RRR` will be a composite key made up of the primary keys of both `AAA` (`A1`) and `BBB` (`B1`).

---

#### Constraints in Relational Models

1. **Key Constraints**: Ensure uniqueness (e.g., Primary Key).
2. **Referential Integrity**: Foreign keys must refer to valid entries in other tables.
3. **Semantic Integrity**: Data must make sense logically (e.g., salary cannot be negative).

**Example**: Deleting a row from the `PLAYER` table where `PlayerID = 111` would violate referential integrity if `CaptainPlayerID` in the `TEAM` table references `PlayerID = 111`.

---

### Attribute Terminology

1. **Multivalued Attribute**: An attribute that can have multiple values.
    - **Example**: **Mandarin** (Languages spoken by a student).
2. **Derived Attribute**: An attribute calculated from other data.
    - **Example**: **12** (Age of a student based on birthdate).
3. **Composite Attribute**: An attribute that consists of multiple components.
    - **Example**: **Homer Jay Simpson** (First, middle, and last name of a student).
4. **Key Attribute**: A unique attribute used to identify an entity.
    - **Example**: **hsimpson23** (UserID of a student).
5. **Relationship Attribute**: An attribute that describes a relationship between entities.
    - **Example**: **89%** (Grade given to a student for a course).

---

### Integrity and Constraints

- **Primary Key Constraint**: Every table must have a unique primary key.
- **Referential Integrity**: Foreign keys must match primary keys in the related table or be NULL.
- **Semantic Constraints**: Ensure logical consistency, like salaries being positive.

**Example**: Inserting a new player with `TeamID = 66` into the `PLAYER` table would violate referential integrity if `TeamID = 66` does not exist in the

`TEAM` table.

---