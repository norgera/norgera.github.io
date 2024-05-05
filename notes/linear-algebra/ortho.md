---
order: 2004
layout: default
toc: false
---

## Orthogonality

**Suppose $A$ is symmetric.**

Given:
- $A x_1 = \lambda_1 x_1$
- $A x_2 = \lambda_2 x_2$
- $\lambda_1 \neq \lambda_2$

Then:
$$
x_1 \cdot x_2 = 0
$$

This states that eigenvectors corresponding to distinct eigenvalues of a symmetric matrix are orthogonal.

**Proof**

Start with the given conditions and use the properties of symmetric matrices and their eigenvectors:

$$
\begin{aligned}
(x_1^T A) x_2 &= x_1^T (A x_2) \\
&= x_1^T (\lambda_2 x_2) \\
&= \lambda_2 (x_1^T x_2) \\
(A^T x_1)^T x_2 &= (A x_1)^T x_2 \\
&= (\lambda_1 x_1)^T x_2 \\
&= \lambda_1 (x_1^T x_2)
\end{aligned}
$$

Since $A$ is symmetric, $A = A^T$, and from the above, we have:

$$
\lambda_1 (x_1^T x_2) = \lambda_2 (x_1^T x_2)
$$

Implying:

$$
(\lambda_1 - \lambda_2)(x_1^T x_2) = 0
$$

Since $\lambda_1 \neq \lambda_2$, it follows that:

$$
x_1^T x_2 = 0
$$

Thus, $x_1 \cdot x_2 = 0$, confirming that the vectors are orthogonal.



# Orthogonal Vectors

## Definition

Say $\mathbf{x}_1, \ldots, \mathbf{x}_m \in \mathbb{R}^n$ are orthogonal if $\mathbf{x}_i \cdot \mathbf{x}_j = 0$ for $i \neq j$ (each $\mathbf{x}_i$ is at a "right angle" to the other $\mathbf{x}_j$).

## Examples

- $\mathbf{x} \in \mathbb{R}^n \Longrightarrow 0 \cdot \mathbf{x} = 0 \Longrightarrow 0, \mathbf{x}$ are orthogonal.
- The standard basis $\underline{e_1, \ldots, e_n} \in \mathbb{R}^n$: Standard basis $\Longrightarrow e_i \cdot e_j = \begin{cases} 1 & i=j \\ 0 & i \neq j \end{cases} \Longrightarrow e_1, \ldots, e_n$ are orthogonal. Columns of $n \times n$ identity matrix.

## Exercise

Show the columns of a diagonal matrix are orthogonal.

## Example

$$\ 
A = \begin{bmatrix} 
1 & 1 \\ 
1 & -1 
\end{bmatrix} \Longrightarrow \mathbf{a}_1 = \begin{bmatrix} 
1 \\ 
1 
\end{bmatrix}, \mathbf{a}_2 = \begin{bmatrix} 
1 \\ 
-1 
\end{bmatrix}
$$

$$
\Longrightarrow \mathbf{a}_1 \cdot \mathbf{a}_2 = 1 - 1 = 0 
$$

$$
\Longrightarrow \text{Columns of } A \text{ are orthogonal} 
$$


(Notice $\text{Span}(\mathbf{a}_1) = \text{Line } y = x$, $\text{Span}(\mathbf{a}_2) = \text{Line } y = -x$ are orthogonal lines)

## Fact

If $\mathbf{x}_1, \ldots, \mathbf{x}_m \in \mathbb{R}^n$ are non-zero and orthogonal, then $\mathbf{x}_1, \ldots, \mathbf{x}_m$ are linearly independent.

## Proof

Suppose $a_1\mathbf{x}_1 + \cdots + a_m\mathbf{x}_m = 0$ (where $a_1, \ldots, a_m \in \mathbb{R}^n$)

- We want to show that $a_1 = \cdots = a_m = 0$

$$\
\begin{aligned}
\mathbf{x}_1, \ldots, \mathbf{x}_m \text{ are non-zero and orthogonal} \\
\Longrightarrow (a_1\mathbf{x}_1 + \cdots + a_m\mathbf{x}_m) = a_1\mathbf{x}_1 \cdot \mathbf{x}_j + \cdots + a_j\mathbf{x}_j \cdot \mathbf{x}_j + \cdots + a_m\mathbf{x}_m \cdot \mathbf{x}_j \\
= a_j\mathbf{x}_j \cdot \mathbf{x}_j \text{ since } \mathbf{x}_i \cdot \mathbf{x}_j \text{ for } i \neq j \\
\Longrightarrow a_j(\mathbf{x}_j \cdot \mathbf{x}_j) = 0 \text{ and } \mathbf{x}_j \cdot \mathbf{x}_j \neq 0 \text{ for every } j \\
\Longrightarrow a_j = 0 \text{ for every } j
\end{aligned}
$$\



**Theorem**

The following are equivalent:

1. $Q$ is orthogonal
2. $\Vert Q\mathbf{x}\Vert = \Vert \mathbf{x}\Vert$ for every $\mathbf{x} \in \mathbb{R}^{n}$ (multiplication by $Q$ preserves length)
3. $Q\mathbf{x} \cdot Q\mathbf{y} = \mathbf{x} \cdot \mathbf{y}$ for every $\mathbf{x}, \mathbf{y} \in \mathbb{R}^{n}$ (preserves length and angle)

**Partial Proof**

We'll show $1 \Longrightarrow 3 \Longrightarrow 2$

$$
\begin{aligned}
Suppose Q \text{ is orthogonal} & \Longrightarrow Q^T Q = I \Longrightarrow (Q\mathbf{x} \cdot Q\mathbf{y}) = (Q\mathbf{x})^T (Q\mathbf{y}) = \mathbf{x}^T Q^T Q \mathbf{y} = \mathbf{x}^T \mathbf{y} = \mathbf{x} \cdot \mathbf{y} \text{ for every } \mathbf{x}, \mathbf{y} \in \mathbb{R}^{n}
\end{aligned}
$$

$$
\begin{aligned}
\Longrightarrow & \Vert Q\mathbf{x}\Vert^2 = (Q\mathbf{x} \cdot Q\mathbf{x}) = \mathbf{x} \cdot \mathbf{x} = \Vert \mathbf{x}\Vert^2 \text{ for every } \mathbf{x}
\Longrightarrow & \Vert Q\mathbf{x}\Vert = \Vert \mathbf{x}\Vert \text{ for every } \mathbf{x}
\end{aligned}
$$

**Definition**

*Projection onto* $W$ is the transformation $\mathrm{proj}_W : \mathbb{R}^n \rightarrow W$ given by:

$$
\mathrm{proj}_W(\mathbf{x}) = (\mathbf{x} \cdot \mathbf{x}_1)\mathbf{x}_1 + \cdots + (\mathbf{x} \cdot \mathbf{x}_m)\mathbf{x}_m
$$

Linear combination of $\mathbf{x}_1, \dots, \mathbf{x}_m$ with coefficients given by dot products.

**Claim**

1. $\mathrm{proj}_W$ is a linear transformation.
2. $\mathrm{proj}_W(\mathbf{x}) = \mathbf{x}$ iff $\mathbf{x} \in W$.

**Example**

$$
\begin{aligned}
B &= \left\{ \mathbf{e}_1 = \begin{bmatrix} 1 \\ 0 \end{bmatrix} \right\} \subseteq \mathbb{R}^2 \\
& \Longrightarrow \mathrm{proj}_W \left( \begin{bmatrix} x \\ y \end{bmatrix} \right) = \left( \begin{bmatrix} x \\ y \end{bmatrix} \cdot \begin{bmatrix} 1 \\ 0 \end{bmatrix} \right) \mathbf{e}_1 = x \mathbf{e}_1 = \begin{bmatrix} x \\ 0 \end{bmatrix} \\
& \Longrightarrow \mathrm{proj}_W = \text{“Project onto the } x\text{-axis”}
\end{aligned}
$$

$$
\begin{aligned}
B &= \left\{ \mathbf{e}_1 = \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix}, \mathbf{e}_2 = \begin{bmatrix} 0 \\ 1 \\ 0 \end{bmatrix} \right\} \subseteq \mathbb{R}^3 \\
& \Longrightarrow \mathrm{proj}_W \left( \begin{bmatrix} x \\ y \\ z \end{bmatrix} \right) = x \mathbf{e}_1 + y \mathbf{e}_2 = \begin{bmatrix} x \\ y \\ 0 \end{bmatrix} \\
& \Longrightarrow \mathrm{proj}_W = \text{“Project onto } xy\text{-plane”}
\end{aligned}
$$



# Examples of Orthogonality and Orthonormality

## Zero Vector Example

Any vector $\mathbf{x}$ in $\mathbb{R}^n$ is orthogonal to the zero vector since the dot product of zero with any vector is zero:

$ 0 \cdot \mathbf{x} = 0 \$

Thus, $0$ and $\mathbf{x}$ are orthogonal.

## Standard Basis Example

The standard basis vectors $\mathbf{e}_1, \ldots, \mathbf{e}_n$ in $\mathbb{R}^n$ are orthogonal. This is expressed by:

$\mathbf{e}_i \cdot \mathbf{e}_j = \begin{cases} 
1 & \text{if } i = j \\
0 & \text{if } i \neq j 
\end{cases}$

This reflects the properties of the columns of an $n \times n$ identity matrix being orthogonal.

## Matrix Columns Example

For the matrix $A = \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix}$, the columns $\mathbf{a}_1 = \begin{bmatrix} 1 \\ 1 \end{bmatrix}$ and $\mathbf{a}_2 = \begin{bmatrix} 1 \\ -1 \end{bmatrix}$ are orthogonal because:

$\mathbf{a}_1 \cdot \mathbf{a}_2 = 1 \cdot 1 + 1 \cdot (-1) = 1 - 1 = 0$

This example also explains that the lines $y = x$ and $y = -x$, which are the spans of $\mathbf{a}_1$ and $\mathbf{a}_2$, are orthogonal.

## Orthonormal Basis Example

The standard basis $\{ \mathbf{e}_1, \ldots, \mathbf{e}_n \}$ is orthonormal in $\mathbb{R}^n$, and also a different basis \left \{ \begin{bmatrix} 1 \\ 1 \end{bmatrix}, \begin{bmatrix} 1 \\ -1 \end{bmatrix} \right\}$ is orthogonal but not orthonormal, highlighting the difference between these properties.

## Diagonal Matrix Example

An exercise is suggested to show that the columns of any diagonal matrix are orthogonal under certain conditions, relying on the student to work through the proof. This involves checking that the dot products of distinct columns yield zero, a characteristic of orthogonal vectors.


## Projection and the Gram-Schmidt Process

Projection techniques and the Gram-Schmidt process are methods used to decompose vector spaces in ways that simplify and clarify their structure.

### Projection

- **Projection**: The process of projecting one vector onto another or onto a subspace, commonly used in statistical regression and data fitting.
  
#### Formula for Projection onto a Vector

$$
\text{proj}_{\mathbf{u}}\mathbf{v} = \frac{\mathbf{u} \cdot \mathbf{v}}{\mathbf{u} \cdot \mathbf{u}} \mathbf{u}
$$

### Gram-Schmidt Process

- **Gram-Schmidt Process**: A method to orthogonalize a set of vectors in an inner product space, forming an orthogonal set that spans the same subspace.

#### Process Outline

1. **Start with Arbitrary Vectors**: $\mathbf{v}_1, \mathbf{v}_2, ..., \mathbf{v}_n$
2. **Orthogonalize**: Construct orthogonal vectors $\mathbf{u}_1, \mathbf{u}_2, ..., \mathbf{u}_n$ using:
   $$
   \mathbf{u}_k = \mathbf{v}_k - \sum_{j=1}^{k-1} \text{proj}_{\mathbf{u}_j}\mathbf{v}_k
   $$
3. **Normalize** (to form an orthonormal set):
   $$
   \mathbf{e}_k = \frac{\mathbf{u}_k}{\|\mathbf{u}_k\|}
   $$

**Example**
Turn an arbitrary basis $\{b_1, \dots, b_m\}$ of $W$ into:
- An orthogonal basis $\{w_1, \dots, w_m\}$ of $W$
- An orthonormal basis $\{u_1, \dots, u_m\}$ of $W$

$$
\begin{aligned}
w_1 &= v_1 \\
w_2 &= v_2 - \frac{v_2 \cdot w_1}{w_1 \cdot w_1} w_1 \\
&= v_2 - \text{proj}_{w_1}(v_2) \\
&\vdots \\
w_{i+1} &= v_{i+1} - \sum_{j=1}^i \frac{v_{i+1} \cdot w_j}{w_j \cdot w_j} w_j \\
&= v_{i+1} - \left(\frac{v_{i+1} \cdot w_1}{w_1 \cdot w_1} w_1 + \cdots + \frac{v_{i+1} \cdot w_i}{w_i \cdot w_i} w_i\right) \\
&= v_{i+1} - \sum_{j=1}^i \text{proj}_{w_j}(v_{i+1})
\end{aligned}
$$



