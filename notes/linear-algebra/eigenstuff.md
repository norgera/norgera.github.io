---
order: 2002
layout: default
toc: true
---
# Eigenvalues and Eigenvectors

### Eigenvalues


Given a square matrix $A$, an eigenvalue $\lambda$ and an eigenvector $v$ satisfy the equation:

$$ A v = \lambda v $$

This can be rearranged to:

$$ (A - \lambda I) v = 0 $$

where $I$ is the identity matrix. For non-trivial solutions (where $v$ is not the zero vector), the determinant of $(A - \lambda I)$ must be zero:

$$ \det(A - \lambda I) = 0 $$

Solving this characteristic equation will yield the eigenvalues. Substituting each eigenvalue back into the equation $(A - \lambda I) v = 0$ allows for solving the corresponding eigenvectors.

**Example: Calculating Eigenvalues**

For the matrix:

$$
A = \begin{bmatrix}
2 & 1 \\
1 & 2
\end{bmatrix}
$$

The characteristic equation is:

$$ \det \left( \begin{bmatrix}
2 - \lambda & 1 \\
1 & 2 - \lambda
\end{bmatrix} \right) = 0 $$

which simplifies to:

$$ (2-\lambda)^2 - 1 = \lambda^2 - 4\lambda + 3 = 0 $$

The solutions are $\lambda = 1$ and $\lambda = 3$. Substituting these back into the eigenvector equation provides the corresponding eigenvectors.

### Eigenvectors
**Example: Calculating Eigenvectors**

Given the matrix $A$:

$$
A = \begin{bmatrix}
2 & 1 \\
1 & 2
\end{bmatrix}
$$

We found the eigenvalues $\lambda = 1$ and $\lambda = 3$. Now, we'll calculate the eigenvectors corresponding to each eigenvalue.

**Eigenvector for $\lambda = 1$**

Substitute $\lambda = 1$ into the equation $(A - \lambda I)v = 0$:

$$
\begin{bmatrix}
2 - 1 & 1 \\
1 & 2 - 1
\end{bmatrix} \begin{bmatrix}
x \\
y
\end{bmatrix} = \begin{bmatrix}
0 \\
0
\end{bmatrix}
$$

This simplifies to:

$$
\begin{bmatrix}
1 & 1 \\
1 & 1
\end{bmatrix} \begin{bmatrix}
x \\
y
\end{bmatrix} = \begin{bmatrix}
0 \\
0
\end{bmatrix}
$$

Which further reduces to $x + y = 0$. Solving for $y$, we have $y = -x$. Thus, the eigenvectors are any scalar multiple of:

$$
\begin{bmatrix}
1 \\
-1
\end{bmatrix}
$$

 **Eigenvector for $\lambda = 3$**

Substitute $\lambda = 3$ into the equation $(A - \lambda I)v = 0$:

$$
\begin{bmatrix}
2 - 3 & 1 \\
1 & 2 - 3
\end{bmatrix} \begin{bmatrix}
x \\
y
\end{bmatrix} = \begin{bmatrix}
0 \\
0
\end{bmatrix}
$$

This simplifies to:

$$
\begin{bmatrix}
-1 & 1 \\
1 & -1
\end{bmatrix} \begin{bmatrix}
x \\
y
\end{bmatrix} = \begin{bmatrix}
0 \\
0
\end{bmatrix}
$$

Which reduces to $-x + y = 0$. Solving for $y$, we have $y = x$. Thus, the eigenvectors are any scalar multiple of:

$$
\begin{bmatrix}
1 \\
1
\end{bmatrix}
$$


For the matrix $A$, the eigenvectors corresponding to $\lambda = 1$ are any scalar multiples of $\begin{bmatrix} 1 \\ -1 \end{bmatrix}$, and for $\lambda = 3$, they are any scalar multiples of $\begin{bmatrix} 1 \\ 1 \end{bmatrix}$. These vectors indicate the directions in which the matrix $A$ stretches the space by the factors $1$ and $3$, respectively.


### Examples

Consider the matrix $B$:

$$
B = \begin{bmatrix}
3 & 2 & 4 \\
2 & 0 & 2 \\
4 & 2 & 3
\end{bmatrix}
$$

**Step 1: Find the Eigenvalues**

First, we need to determine the eigenvalues by solving the characteristic equation derived from $\det(B - \lambda I) = 0$.

$$
\det \left( \begin{bmatrix}
3 - \lambda & 2 & 4 \\
2 & -\lambda & 2 \\
4 & 2 & 3 - \lambda
\end{bmatrix} \right) = 0
$$

Expanding this determinant:

$$
(3-\lambda)\left((-\lambda)(3-\lambda) - 4\right) - 2\left(2(3-\lambda) - 8\right) + 4\left(4 - 2\lambda\right) = 0
$$

Simplifying, we find:

$$
-\lambda^3 + 6\lambda^2 + 8\lambda - 48 = 0
$$

The eigenvalues are found to be $\lambda_1 = 8$, $\lambda_2 = 4$, and $\lambda_3 = -4$.

**Step 2: Find the Eigenvectors**

**For $\lambda_1 = 8$**:

Substitute $\lambda = 8$ back into the equation $(B - 8I)v = 0$:

$$
\begin{bmatrix}
-5 & 2 & 4 \\
2 & -8 & 2 \\
4 & 2 & -5
\end{bmatrix} \begin{bmatrix}
x \\
y \\
z
\end{bmatrix} = \begin{bmatrix}
0 \\
0 \\
0
\end{bmatrix}
$$

Solving this system (e.g., using row reduction), we find the eigenvector:

$$
\begin{bmatrix}
x \\
y \\
z
\end{bmatrix} = t \begin{bmatrix}
2 \\
1 \\
-2
\end{bmatrix}, \quad t \in \mathbb{R}
$$

**For $\lambda_2 = 4$**:

Substitute $\lambda = 4$ into $(B - 4I)v = 0$:

$$
\begin{bmatrix}
-1 & 2 & 4 \\
2 & -4 & 2 \\
4 & 2 & -1
\end{bmatrix} \begin{bmatrix}
x \\
y \\
z
\end{bmatrix} = \begin{bmatrix}
0 \\
0 \\
0
\end{bmatrix}
$$

Solving this, we find the eigenvector:

$$
\begin{bmatrix}
x \\
y \\
z
\end{bmatrix} = s \begin{bmatrix}
2 \\
0 \\
1
\end{bmatrix}, \quad s \in \mathbb{R}
$$

**For $\lambda_3 = -4$**:

Substitute $\lambda = -4$ into $(B - (-4)I)v = 0$:

$$
\begin{bmatrix}
7 & 2 & 4 \\
2 & 4 & 2 \\
4 & 2 & 7
\end{bmatrix} \begin{bmatrix}
x \\
y \\
z
\end{bmatrix} = \begin{bmatrix}
0 \\
0 \\
0
\end{bmatrix}
$$

Solving this, we find the eigenvector:

$$
\begin{bmatrix}
x \\
y \\
z
\end{bmatrix} = u \begin{bmatrix}
2 \\
-5 \\
2
\end{bmatrix}, \quad u \in \mathbb{R}
$$


---



#### Complex Example

Consider a matrix $A$ defined as:

$$
A = \begin{bmatrix}
1 & -2 \\
1 & 3
\end{bmatrix}
$$

**Finding Complex Eigenvalues**

First, we determine the eigenvalues by setting up and solving the characteristic equation derived from $\text{det}(A - \lambda I) = 0$.

The characteristic polynomial is calculated as:
$$
(1-\lambda)(3-\lambda) + 2 = \lambda^2 - 4\lambda + 5 = 0
$$

Solving this using the quadratic formula yields:
$$
\lambda = \frac{4 \pm \sqrt{16 - 20}}{2} = \frac{4 \pm \sqrt{-4}}{2} = 2 \pm i
$$

**Finding the Corresponding Eigenvectors**

For $\lambda = 2 + i$:
Substitute $\lambda = 2 + i$ into $(A - \lambda I)v = 0$:

$$
\begin{bmatrix}
-1 - i & -2 \\
1 & 1 - i
\end{bmatrix}
$$

Through row reduction and simplification, we find that an eigenvector corresponding to $\lambda = 2 + i$ is:

$$
v_1 = \begin{bmatrix}
-1 + i \\
1
\end{bmatrix}
$$

For $\lambda = 2 - i$:
Similarly, substituting $\lambda = 2 - i$ yields another eigenvector:

$$
v_2 = \begin{bmatrix}
-1 - i \\
1
\end{bmatrix}
$$
