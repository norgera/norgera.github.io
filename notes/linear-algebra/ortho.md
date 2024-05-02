---
order: 2004
layout: default
toc: true
---


# Orthogonality and Least Squares

Orthogonality and least squares are crucial concepts in linear algebra, pivotal in many applications across statistics, engineering, and science. This section provides a detailed overview of these topics, explaining their theoretical bases and practical applications.

## Orthogonality in Vector Spaces

Orthogonality in vector spaces is a fundamental concept that facilitates understanding and solving problems in various areas of mathematics and physics.



**Orthogonality**: Two vectors are orthogonal if their dot product is zero. This relationship is a key aspect of vector spaces because it implies that the vectors are independent of each other in the space they span.


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



## Least Squares Approximation

Least squares approximation is a statistical method used to determine the best fit line or curve to a set of data points by minimizing the errors made in the predictions of the dependent variable.


#### Mathematical Formulation

Given data points $(x_i, y_i)$, find $m$ and $b$ such that the sum

$$
\sum_{i=1}^n (y_i - (mx_i + b))^2
$$

is minimized, where $m$ is the slope and $b$ is the y-intercept of the line.

### Example: Linear Regression

- **Linear Regression**: A common application of least squares fitting where a linear relationship between variables is assumed.

## Conclusion

Orthogonality and least squares are not only theoretical constructs but also provide practical tools in areas ranging from digital communication systems to economic forecasting. Understanding these concepts is crucial for professionals in STEM fields, as they underpin many of the computational and analytical methods used in practice.
