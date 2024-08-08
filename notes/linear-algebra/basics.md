---
order: 2000
layout: default
toc: true
---

# The Basics

## Properties of Real Numbers ($\mathbb{R}$)

The set of real numbers, denoted as $\mathbb{R}$, includes all the numbers on the continuous number line, encompassing both rational and irrational numbers.

**Field Properties**

- **Addition and Multiplication**: For any two real numbers $a$ and $b$, the sum ($a+b$) and product ($ab$) are also real numbers.
- **Associativity**: Addition and multiplication of real numbers are associative.
  - $(a + b) + c = a + (b + c)$
  - $(ab)c = a(bc)$
- **Commutativity**: Both addition and multiplication of real numbers are commutative.
  - $a + b = b + a$
  - $ab = ba$
- **Identity Elements**:
  - The additive identity is 0, meaning $a + 0 = a$.
  - The multiplicative identity is 1, meaning $a \cdot 1 = a$.
- **Additive Inverses**: Every real number $a$ has an additive inverse $-a$ such that $a + (-a) = 0$.
- **Multiplicative Inverses**: Every non-zero real number $a$ has a multiplicative inverse $\frac{1}{a}$ such that $a \cdot \frac{1}{a} = 1$.
- **Distributive Law**: Multiplication distributes over addition.
  - $a(b + c) = ab + ac$

## Linear Equations

A linear equation in the field of real numbers is an equation that involves linear combinations of variables, each multiplied by a real number, equating to a real number.

**Example**

The linear equation $4x = 2$ has a solution in real numbers which can be found as follows:
- Solving for $x$ gives $x = \frac{2}{4} = 0.5$.

This example demonstrates the closure properties of the field of real numbers under operations necessary for solving linear equations.

**Properties Applied**

These properties allow for the operation of basic algebraic techniques used in solving equations and manipulating expressions. For instance, the equation $ax + b = 0$ can be solved by applying the field properties to isolate $x$


---


## Vectors in ($\mathbb{R}^2$)

Vectors are fundamental in mathematics and physics as they describe both magnitude and direction. In the plane $\mathbb{R}^2$, vectors are used to represent quantities like displacement, velocity, and force.

**Representing Vectors**

A vector in $\mathbb{R}^2$ can be represented as an ordered pair of real numbers $(x, y)$, which correspond to the vector's horizontal and vertical components, respectively. This representation is often visualized as an arrow pointing from the origin (0, 0) to the point $(x, y)$ in the Cartesian plane.


---

## Vector Operations


Vector operations are fundamental in various scientific and engineering disciplines, allowing for the manipulation and analysis of quantities that have both magnitude and direction. Below is a detailed list of common vector operations:

**Vector Addition:**
Adding two vectors component-wise:
- **Formula**: For vectors $\vec{v} = (a, b)$,  $\vec{w} = (c, d)$, the vector sum is:
  $\vec{v} + \vec{w} = (a+c, b+d)$

**Scalar Multiplication:**
Multiplying a vector by a scalar to scale its magnitude:
- **Formula**: For a vector $\vec{v} = (x, y)$ and scalar $t$, scalar multiplication is:
  $t\vec{v} = (tx, ty)$

**Vector Negation:**
Reversing the direction of a vector:
- **Formula**: For $\vec{v} = (a, b)$, the negation is:
  $-\vec{v} = (-a, -b)$

**Vector Subtraction:**
Subtracting one vector from another to find the vector difference:
- **Formula**: For $\vec{v} = (a, b)$ and $\vec{w} = (c, d)$, the vector difference is:
  $\vec{v} - \vec{w} = (a-c, b-d)$

**Dot Product:**
Calculating the dot product of two vectors, which measures the angle between them and determines orthogonality:
- **Formula**: For vectors $\vec{v}$ and $\vec{w}$ with components $\vec{v} = (v_1, v_2, ..., v_n)$ and $\vec{w} = (w_1, w_2, ..., w_n)$, the dot product is:
  $\vec{v} \cdot \vec{w} = v_1w_1 + v_2w_2 + ... + v_nw_n$

**Orthogonality:**
Determining if two vectors are orthogonal (perpendicular) based on their dot product:
- **Condition**: Two vectors are orthogonal if:
  $\vec{v} \cdot \vec{w} = 0$



## Matrices and Systems of Linear Equations

Matrices are rectangular arrays of numbers, symbols, or expressions arranged in rows and columns, vital for representing and solving systems of linear equations.

Basic Matrix Operations

- **Addition**: Summing two matrices by adding corresponding elements.
- **Scalar Multiplication**: Multiplying each element of the matrix by a scalar.
- **Matrix Multiplication**: Computing the product by taking the dot product of rows of the first matrix with columns of the second.
  
---

### Gaussian Elimination

Gaussian elimination, also known as row reduction, is a method for solving systems of linear equations. It transforms the matrix into an echelon form using elementary row operations, making the system easier to solve.

**Steps in Gaussian Elimination**

1. **Form the Augmented Matrix**: Combine the coefficient matrix with the constants into an augmented matrix.
2. **Row Reduction**: Perform row operations to achieve upper triangular form.
3. **Back Substitution**: Solve for the unknowns from the bottom row up.

 Example: Solving a System of Equations

Consider the system of linear equations given by:

$$
\begin{align*}
x + 2y + 3z &= 9 \\
x + 3y + z &= 8 \\
2x + y + 2z &= 7
\end{align*}
$$

**Step 1: Form the Augmented Matrix**

The augmented matrix for this system is:

$$
\begin{bmatrix}
1 & 2 & 3 & | & 9 \\
1 & 3 & 1 & | & 8 \\
2 & 1 & 2 & | & 7
\end{bmatrix}
$$

**Step 2: Row Reduction**

Perform row operations to achieve an upper triangular form:

- Subtract row 1 from row 2
- Subtract 2 times row 1 from row 3

Resulting matrix:

$$
\begin{bmatrix}
1 & 2 & 3 & | & 9 \\
0 & 1 & -2 & | & -1 \\
0 & -3 & -4 & | & -11
\end{bmatrix}
$$

- Add 3 times row 2 to row 3

Resulting matrix:

$$
\begin{bmatrix}
1 & 2 & 3 & | & 9 \\
0 & 1 & -2 & | & -1 \\
0 & 0 & -10 & | & -14
\end{bmatrix}
$$

**Step 3: Back Substitution**

- From row 3: $ z = \frac{-14}{-10} = 1.4 $
- From row 2: $ y + 2(1.4) = -1 \rightarrow y = -3.8 $
- From row 1: $ x + 2(-3.8) + 3(1.4) = 9 \rightarrow x = 8.2 $


---

Invertible Matrices

A matrix $A$ is called **invertible** if there exists a matrix $X$ such that:

$$ AX = XA = I $$

where $I$ is the identity matrix. This matrix $X$ is known as the **inverse** of $A$ and is denoted by $A^{-1}$.

### Properties of Invertible Matrices

- If $A$ is invertible, then $AX = B$ has a unique solution $X = A^{-1}B$.
- The inverse of an inverse is the original matrix: $(A^{-1})^{-1} = A$.
- The inverse of a matrix product is the product of their inverses in reverse order: $(AB)^{-1} = B^{-1}A^{-1}$.

 Example: Matrix Inversion

For the matrix

$$
A = \begin{bmatrix}
0 & 1 \\
1 & 0
\end{bmatrix}
$$

its inverse is found by switching the off-diagonal elements, giving us

$$
A^{-1} = \begin{bmatrix}
0 & 1 \\
1 & 0
\end{bmatrix}
$$

and verifying $AA^{-1} = I$:

$$
\begin{bmatrix}
0 & 1 \\
1 & 0
\end{bmatrix}
\begin{bmatrix}
0 & 1 \\
1 & 0
\end{bmatrix} =
\begin{bmatrix}
1 & 0 \\
0 & 1
\end{bmatrix} = I
$$

---

**Determinants**

The **determinant** of a matrix is a scalar that provides useful information about the matrix, such as whether it is invertible. A matrix $A$ is invertible if and only if its determinant is non-zero.

### Properties of Determinants:

- The determinant of a product is the product of the determinants: $\det(AB) = \det(A)\det(B)$.
- Elementary row operations affect the determinant in specific ways, e.g., swapping two rows changes the sign of the determinant.



 Example: Calculating a Determinant

Consider a $3 \times 3$ matrix:

$$
A = \begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{bmatrix}
$$

The determinant of $A$, denoted $\det(A)$, can be calculated using cofactor expansion:

$$
\det(A) = 1 \det\begin{bmatrix}
5 & 6 \\
8 & 9
\end{bmatrix} - 2 \det\begin{bmatrix}
4 & 6 \\
7 & 9
\end{bmatrix} + 3 \det\begin{bmatrix}
4 & 5 \\
7 & 8
\end{bmatrix}
$$

Evaluating further gives the determinant as a scalar value, which indicates whether $A$ is invertible.


## Spaces

**Vector Spaces**
A vector space includes not just a set of vectors, but also the operations of vector addition and scalar multiplication satisfying specific properties, such as commutativity, associativity, and distributivity. The vector space is structured around these operations to form a mathematical framework that supports linear algebra.

### Span, Basis, and Dimension
- **Span**: The set of all linear combinations that can be formed with a set of vectors. It essentially describes all the vectors that can be reached or generated by scaling and adding a given set of vectors.
- **Basis**: A minimal set of vectors that can generate the entire vector space through their linear combinations. The basis of a vector space can vary in size but always has enough vectors to span the whole space without any redundancy.
- **Dimension**: The number of vectors in a basis of the vector space, indicating its 'size' or the number of degrees of freedom within the space.

## Subspaces
A subspace is any subset of a vector space that itself fulfills the properties required to be a vector space. This includes being closed under addition and scalar multiplication and containing the zero vector.

### Column/Null Spaces
- **Column Space (Range)**: Consists of all linear combinations of the column vectors of a matrix. It represents all possible outputs of a matrix when used as a transformation.
- **Null Space (Kernel)**: Consists of all the solutions to the homogeneous linear equation $Ax = 0$, where $A$ is a matrix. The null space contains all vectors that when multiplied by $A$ result in the zero vector, showing which inputs lead to no change when transformed by $A$.

**Properties of Vector Spaces and Subspaces**
- **Closure**: Subspaces remain within themselves under the operations of addition and scalar multiplication.
- **Non-emptiness**: By definition, subspaces contain at least the zero vector.
- **Independence and Span**: A subspace is often characterized by its basis, which can independently span the entire subspace without any extraneous vectors.

**Example: Standard Basis in $\mathbb{R}^n$**
The standard basis for $\mathbb{R}^n$ consists of vectors that are all zeroes except for a single one at each position. This basis directly supports the structure and dimensionality of the space, showing clear, independent axes of movement.




