---
order: 2003
layout: default
toc: true
---

# Matrices and Systems of Linear Equations

Matrices are rectangular arrays of numbers, symbols, or expressions arranged in rows and columns, vital for representing and solving systems of linear equations.

### Basic Matrix Operations

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

#### Example: Solving a System of Equations

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

### Invertible Matrices

A matrix $A$ is called **invertible** if there exists a matrix $X$ such that:

$$ AX = XA = I $$

where $I$ is the identity matrix. This matrix $X$ is known as the **inverse** of $A$ and is denoted by $A^{-1}$.

**Properties of Invertible Matrices**

- If $A$ is invertible, then $AX = B$ has a unique solution $X = A^{-1}B$.
- The inverse of an inverse is the original matrix: $(A^{-1})^{-1} = A$.
- The inverse of a matrix product is the product of their inverses in reverse order: $(AB)^{-1} = B^{-1}A^{-1}$.

#### Example: Matrix Inversion

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

### Determinants

The **determinant** of a matrix is a scalar that provides useful information about the matrix, such as whether it is invertible. A matrix $A$ is invertible if and only if its determinant is non-zero.

**Properties of Determinants:**

- The determinant of a product is the product of the determinants: $\det(AB) = \det(A)\det(B)$.
- Elementary row operations affect the determinant in specific ways, e.g., swapping two rows changes the sign of the determinant.



#### Example: Calculating a Determinant

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



### Practical Examples and Applications

- **Artificial Intelligence**: Employ matrices in machine learning algorithms for tasks such as image recognition, natural language processing, and neural network training, where they help manage and transform large datasets.
- **Quantum Computing**: Utilize matrices to represent quantum states and operations in computational models, facilitating the simulation and analysis of quantum systems and behaviors.
