---
order: 2000
layout: default
toc: true
---



## Derivatives

**A. What is a derivative?**
- **Geometric interpretation**
- **Physical interpretation**
- **Important for any measurement (economics, political science, finance, physics, etc.)**

**B. How to differentiate any function you know**
- Example: $\frac{d}{dx} e^x \arctan x$

Geometric Viewpoint on Derivatives

**Tangent Line and Secant Line**
The derivative is the slope of the line tangent to the graph of $f(x)$. But what is a tangent line, exactly?
- It is **NOT** just a line that meets the graph at one point.
- It is the limit of the secant line (a line drawn between two points on the graph) as the distance between the two points goes to zero.

Geometric Definition of the Derivative
Limit of slopes of secant lines $PQ$ as $Q \rightarrow P$ (with $P$ fixed). The slope of $PQ$:
$\text{Slope of PQ} = \frac{\Delta f}{\Delta x} = \frac{f(x_0 + \Delta x) - f(x_0)}{\Delta x}$

$\lim_{\Delta x \to 0} \frac{f(x_0 + \Delta x) - f(x_0)}{\Delta x} = f'(x_0)$
- This limit is called the **difference quotient**, and $f'(x_0)$ is the **derivative of $f$ at $x_0$**.

**Example 1:** $f(x) = \frac{1}{x}$

To find the derivative:
$\frac{\Delta f}{\Delta x} = \frac{\frac{1}{x_0 + \Delta x} - \frac{1}{x_0}}{\Delta x}$
$= \frac{x_0 - (x_0 + \Delta x)}{\Delta x \cdot x_0 \cdot (x_0 + \Delta x)} = \frac{-\Delta x}{\Delta x \cdot x_0 \cdot (x_0 + \Delta x)} = -\frac{1}{x_0^2}$
Taking the limit as $\Delta x \rightarrow 0$:
$\lim_{\Delta x \to 0} -\frac{1}{x_0^2} = -\frac{1}{x_0^2}$
Thus,
$f'(x_0) = -\frac{1}{x_0^2}$

**Finding the Tangent Line**
Using the equation for a line $y - y_0 = f'(x_0)(x - x_0)$:
$y - \frac{1}{x_0} = -\frac{1}{x_0^2}(x - x_0)$

**Area of the Triangle Formed by the Tangent Line**
- **X-intercept**: Where $y = 0$:
  $0 - \frac{1}{x_0} = -\frac{1}{x_0^2}(x - x_0)$
  $x = 2x_0$
- **Y-intercept**: By symmetry, $y = 2y_0 = 2 \cdot \frac{1}{x_0} = \frac{2}{x_0}$
- **Area**:
  $\text{Area} = \frac{1}{2} \cdot 2x_0 \cdot \frac{2}{x_0} = 2$

**Notations for the Derivative**

Since $y = f(x)$:
$\Delta y = \Delta f = f(x) - f(x_0) = f(x_0 + \Delta x) - f(x_0)$
$\frac{\Delta y}{\Delta x} = \frac{\Delta f}{\Delta x}$
Taking the limit as $\Delta x \to 0$:
$\frac{\Delta y}{\Delta x} \to \frac{dy}{dx} \quad \text{(Leibniz' notation)}$
$\frac{\Delta f}{\Delta x} \to f'(x_0) \quad \text{(Newton's notation)}$

Other notations for the derivative of a function $f$ include:
$\frac{df}{dx}, \ f', \ Df$

**Example 2:** $f(x) = x^n$ where $n = 1, 2, 3, \ldots$
Using the definition of the difference quotient:
$\frac{\Delta y}{\Delta x} = \frac{(x + \Delta x)^n - x^n}{\Delta x}$
Expanding using the binomial theorem:
$(x + \Delta x)^n = x^n + nx^{n-1}\Delta x + O((\Delta x)^2)$
$\frac{\Delta y}{\Delta x} = nx^{n-1} + O(\Delta x)$
Taking the limit:
$\lim_{\Delta x \to 0} nx^{n-1} = nx^{n-1}$
Thus,
$\frac{d}{dx} x^n = nx^{n-1}$

This result extends to polynomials. For example:
$\frac{d}{dx} (x^2 + 3x^{10}) = 2x + 30x^9$

Physical Interpretation of Derivatives
The derivative represents a rate of change (e.g., speed).

Example: Dropping a pumpkin from a 400-foot building:
$y = 400 - 16t^2$
Average speed when the pumpkin hits the ground ($y = 0$):
$400 - 16t^2 = 0 \implies t = 5 \ \text{seconds}$
$\text{Average speed} = \frac{400 \ \text{ft}}{5 \ \text{sec}} = 80 \ \text{ft/s}$

Instantaneous velocity at $t = 5$:


$y' = -32t \implies y'(5) = -160 \ \text{ft/s} \ (\text{about 110 mph})$


$y'$ is negative because the pumpkin is moving downward.



Here is the lecture material rewritten in a Markdown code block, including all math notations:


More about the "rate of change" interpretation of the derivative

$y = f(x)$
$
\Delta x \quad \Delta y
$
Figure 1: Graph of a generic function, with $\Delta x$ and $\Delta y$ marked on the graph

$
\frac{\Delta y}{\Delta x} \rightarrow \frac{dy}{dx} \text{ as } \Delta x \rightarrow 0
$
- Average rate of change \(\rightarrow\) Instantaneous rate of change

Examples
1. $q = \text{charge} \quad \frac{dq}{dt} = \text{electrical current}$
2. $s = \text{distance} \quad \frac{ds}{dt} = \text{speed}$
3. $T = \text{temperature gradient} \quad \frac{dT}{dx}$

Sensitivity of measurements
An example is carried out on Problem Set 1. In GPS, radio signals give us $h$ up to a certain measurement error. The question is how accurately we can measure $L$.

$\frac{\Delta L}{\Delta h} $

Figures
- **Figure 2**: The Global Positioning System Problem (GPS)
- **Figure 3**: On problem set 1, you will look at this simplified "flat earth" model

Limits and Continuity

Easy Limits
$\lim_{x \to 3} \frac{x^2 + x}{x + 1} = \frac{3^2 + 3}{3 + 1} = \frac{12}{4} = 3 $

With an easy limit, you can get a meaningful answer just by plugging in the limiting value.

$\lim_{\Delta x \to 0} \frac{f(x_0 + \Delta x) - f(x_0)}{\Delta x} $

is never an easy limit, because the denominator $\Delta x = 0$ is not allowed. (The limit $x \rightarrow x_0$ is computed under the implicit assumption that $x \neq x_0$).

Continuity
We say $f(x)$ is continuous at $x_0$ when:
$\lim_{x \to x_0} f(x) = f(x_0) $

Discontinuities
- **Figure 4**: Graph of a discontinuous function

$f(x) = \begin{cases} 
x + 1 & x > 0 \\
-x & x \ge 0 
\end{cases} $

For $x > 0$:
$\lim_{x \to 0} f(x) = 1 $
but $f(0) = 0$. (One can also say $f$ is continuous from the left at 0, not the right.)

1. **Removable Discontinuity**
- **Figure 5**: A removable discontinuity: function is continuous everywhere except for one point.

Right-hand limit: $\lim_{x \to x_0^+} f(x)$
Left-hand limit: $\lim_{x \to x_0^-} f(x)$

If $\lim_{x \to x_0} f(x)$ exists but is not $f(x_0)$, or if $f(x_0)$ is undefined, the discontinuity is removable.

For example, $\frac{\sin x}{x}$ is defined for $x \neq 0$. We will see later how to evaluate the limit as $x \to 0$.

2. **Jump Discontinuity**
- **Figure 6**: An example of a jump discontinuity.
  
$\lim_{x \to x_0^-} f(x) \text{ and } \lim_{x \to x_0^+} f(x) $
both exist, but are NOT equal.

3. **Infinite Discontinuity**
- **Figure 7**: An example of an infinite discontinuity.

$\lim_{x \to 0^+} \frac{1}{x} = \infty $
$\lim_{x \to 0^-} \frac{1}{x} = -\infty $

4. **Other (ugly) discontinuities**
- **Figure 8**: An example of an ugly discontinuity: a function that oscillates a lot as it approaches the origin.

This function doesn’t even go to $\pm \infty$ — it doesn’t make sense to say it goes to anything. For something like this, we say the limit does not exist.

Picturing the Derivative
- **Figure 9**: 
  - Top: graph of $f(x) = \frac{1}{x}$
  - Bottom: graph of $f'(x) = -\frac{1}{x^2}$

Notice that the graph of $f(x)$ does NOT look like the graph of $f'(x)$! (You might also notice that $f(x)$ is an odd function, while $f'(x)$ is an even function. The derivative of an odd function is always even, and vice versa.)

Pumpkin Drop, Part II
This time, someone throws a pumpkin over the tallest building on campus.
- **Figure 10**: $y = 400 - 16t^2, -5 \leq t \leq 5$
- **Figure 11**: 
  - Top: graph of $y(t) = 400 - 16t^2$
  - Bottom: the derivative, $y'(t)$

Two Trig Limits
Note: In the expressions below, $\theta$ is in radians— NOT degrees!

$\lim_{\theta \to 0} \frac{\sin \theta}{\theta} = 1 $
$\lim_{\theta \to 0} \frac{1 - \cos \theta}{\theta} = 0 $

Geometric Proof for the First Limit:
- **Figure 12**: A circle of radius 1 with an arc of angle $\theta$

$\frac{\sin \theta}{\theta} \rightarrow 1 \text{ as } \theta \rightarrow 0 $

Proof for the Second Limit:
- **Figure 14**: Same picture as Fig. 12 except that the horizontal distance between the edge of the triangle and the perimeter of the circle is marked.
- **Figure 15**: As $\theta \rightarrow 0$, the length $1 - \cos \theta$ of the short segment gets much smaller than the vertical distance $\theta$ along the arc.

Hence,
$\frac{1 - \cos \theta}{\theta} \rightarrow 0 $

Theorem: Differentiable Implies Continuous
If $f$ is differentiable at $x_0$, then $f$ is continuous at $x_0$.

**Proof**:
$\lim_{x \to x_0} (f(x) - f(x_0)) = \lim_{x \to x_0} \left( \frac{f(x) - f(x_0)}{x - x_0} \cdot (x - x_0) \right) = f'(x_0) \cdot 0 = 0 $

Remember: you can never divide by zero! The first step was to multiply by $\frac{x - x_0}{x - x_0}$. It looks as if this is illegal because when $x = x_0$, we are multiplying by $\frac{0}{0}$. But when computing the limit as $x \rightarrow x_0$ we always assume $x \neq x_0$. In other words $x - x_0 \neq 0$. So the proof is valid.


Here is the lecture material rewritten in a Markdown code block, with explanations included:


## Derivative Formulas

Types of Derivative Formulas

1. Specific Examples
- Example: $\frac{d}{dx} x^n$
- Example: $\frac{d}{dx} \frac{1}{x}$

2. General Examples
- $(u + v)' = u' + v'$
- $(cu)' = cu'$ (where $c$ is a constant)

A notational convention we will use today is:
- $(u + v)(x) = u(x) + v(x)$
- $(uv)(x) = u(x)v(x)$

Proof of $(u + v)' = u' + v'$ (General)
Start by using the definition of the derivative:
$(u + v)'(x) = \lim_{\Delta x \to 0} \frac{(u + v)(x + \Delta x) - (u + v)(x)}{\Delta x}$
$= \lim_{\Delta x \to 0} \frac{u(x + \Delta x) + v(x + \Delta x) - u(x) - v(x)}{\Delta x}$
$= \lim_{\Delta x \to 0} \left( \frac{u(x + \Delta x) - u(x)}{\Delta x} + \frac{v(x + \Delta x) - v(x)}{\Delta x} \right)$
$(u + v)'(x) = u'(x) + v'(x)$

Follow the same procedure to prove that $(cu)' = cu'$.

Derivatives of $\sin x$ and $\cos x$ (Specific)
Using trigonometric limits:
$\lim_{x \to 0} \frac{\sin x}{x} = 1$

**Last time, we computed**


$$
\lim_{x \to 0} \frac{\sin x}{x} = 1
$$

$$
\left. \frac{d}{dx} (\sin x) \right|_{x=0} = \lim_{\Delta x \to 0} \frac{\sin(0 + \Delta x) - \sin(0)}{\Delta x} = \lim_{\Delta x \to 0} \frac{\sin(\Delta x)}{\Delta x} = 1
$$

$$
\left. \frac{d}{dx} (\cos x) \right|_{x=0} = \lim_{\Delta x \to 0} \frac{\cos(0 + \Delta x) - \cos(0)}{\Delta x} = \lim_{\Delta x \to 0} \frac{\cos(\Delta x) - 1}{\Delta x} = 0
$$

So, we know the value of $\frac{d}{dx} \sin x$ and $\frac{d}{dx} \cos x$ at $x = 0$. Let us find these for arbitrary $x$.

$$
\frac{d}{dx} \sin x = \lim_{\Delta x \to 0} \frac{\sin(x + \Delta x) - \sin(x)}{\Delta x}
$$

So, we know the value of $\frac{d}{dx} \sin x$ and $\frac{d}{dx} \cos x$ at $x = 0$. Let us find these for arbitrary $x$.

$
\frac{d}{dx} \sin x = \lim_{\Delta x \to 0} \frac{\sin(x + \Delta x) - \sin(x)}{\Delta x}
$



Recall:
$ \sin(a + b) = \sin(a) \cos(b) + \sin(b) \cos(a) $

So,
$ \frac{d}{dx} \sin x = \lim_{\Delta x \to 0} \frac{\sin x \cos \Delta x + \cos x \sin \Delta x - \sin(x)}{\Delta x} $
$ = \lim_{\Delta x \to 0} \left[ \sin x \left( \frac{\cos \Delta x - 1}{\Delta x} \right) + \cos x \left( \frac{\sin \Delta x}{\Delta x} \right) \right] $
$ = \lim_{\Delta x \to 0} \sin x \left( \frac{\cos \Delta x - 1}{\Delta x} \right) + \lim_{\Delta x \to 0} \cos x \left( \frac{\sin \Delta x}{\Delta x} \right) $

Since
$ \frac{\cos \Delta x - 1}{\Delta x} \to 0 $
and
$ \frac{\sin \Delta x}{\Delta x} \to 1 $
the equation above simplifies to:
$ \frac{d}{dx} \sin x = \cos x $

A similar calculation gives:
$ \frac{d}{dx} \cos x = -\sin x $


Product Formula (General)
$(uv)' = u'v + uv'$

Proof:
$(uv)' = \lim_{\Delta x \to 0} \frac{(uv)(x + \Delta x) - (uv)(x)}{\Delta x}$
$= \lim_{\Delta x \to 0} \frac{u(x + \Delta x)v(x + \Delta x) - u(x)v(x)}{\Delta x}$

By adding and subtracting $u(x + \Delta x)v(x)$:
$(uv)' = \lim_{\Delta x \to 0} \frac{u(x + \Delta x)v(x + \Delta x) - u(x + \Delta x)v(x) + u(x + \Delta x)v(x) - u(x)v(x)}{\Delta x}$
$= \lim_{\Delta x \to 0} \left( \frac{u(x + \Delta x) - u(x)}{\Delta x}\right) v(x) + u(x + \Delta x) \left( \frac{v(x + \Delta x) - v(x)}{\Delta x} \right)$

The limit of a sum is the sum of the limits.
$$
\left[ \lim_{\Delta x \to 0} \frac{u(x + \Delta x) - u(x)}{\Delta x} \right] v(x) + \lim_{\Delta x \to 0} \left( u(x + \Delta x) \left[ \frac{v(x + \Delta x) - v(x)}{\Delta x} \right] \right)
$$

$= u'(x)v(x) + u(x)v'(x)$

This proof assumes that $u$ and $v$ have derivatives, which implies both functions are continuous.

**Quotient Formula (General)**
To calculate the derivative of $\frac{u}{v}$, use the same notations for $\Delta u$ and $\Delta v$:

$\frac{u(x + \Delta x)}{v(x + \Delta x)} - \frac{u(x)}{v(x)} = \frac{(u + \Delta u)v - u(v + \Delta v)}{(v + \Delta v)v} = \frac{(\Delta u)v - u(\Delta v)}{(v + \Delta v)v}$

Divide by $\Delta x$ and take the limit as $\Delta x \to 0$:
$\frac{\Delta u}{\Delta x} v - u \frac{\Delta v}{\Delta x} = \frac{u'v - uv'}{v^2}$

Therefore,
$\left( \frac{u}{v} \right)' = \frac{u'v - uv'}{v^2}$


Here is the lecture material rewritten in a Markdown code block, with explanations included:


## Chain Rule and Higher Derivatives

Chain Rule
We've covered differentiation procedures for addition, subtraction, and multiplication. Now, we'll discuss the differentiation of compositions of functions.

**Example 1:**
Given:
$y = f(x) = \sin x, \quad x = g(t) = t^2$
So,
$y = f(g(t)) = \sin(t^2)$

To find $\frac{dy}{dt}$:
$t = t_0 + \Delta t$
$x = x_0 + \Delta x$
$y = y_0 + \Delta y$
$\frac{\Delta y}{\Delta t} = \frac{\Delta y}{\Delta x} \cdot \frac{\Delta x}{\Delta t}$

As $\Delta t \rightarrow 0$, $\Delta x \rightarrow 0$ due to continuity, thus:
$\frac{dy}{dt} = \frac{dy}{dx} \cdot \frac{dx}{dt}$

In this example:
$\frac{dx}{dt} = 2t$
$\frac{dy}{dx} = \cos x$

So,
$\frac{d}{dt} \left( \sin(t^2) \right) = \frac{dy}{dx} \cdot \frac{dx}{dt} = \cos(t^2) \cdot 2t$

Another notation for the chain rule:
$\frac{d}{dt} f(g(t)) = f'(g(t)) \cdot g'(t)$
or
$\frac{d}{dx} f(g(x)) = f'(g(x)) \cdot g'(x)$

Example 1 (continued):
Composition of functions:
$f(x) = \sin x$
$g(x) = x^2$
$(f \circ g)(x) = f(g(x)) = \sin(x^2)$
$(g \circ f)(x) = g(f(x)) = \sin^2(x)$

Note: $f \circ g \neq g \circ f$. Composition is not commutative.

**Example 2:**
$\frac{d}{dx} \cos \left( \frac{1}{x} \right)$

Let $u = \frac{1}{x}$,
$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$

$\frac{dy}{du} = -\sin(u)$
$\frac{du}{dx} = -\frac{1}{x^2}$

So,
$\frac{d}{dx} \cos \left( \frac{1}{x} \right) = -\sin \left( \frac{1}{x} \right) \cdot \left( -\frac{1}{x^2} \right) = \frac{\sin \left( \frac{1}{x} \right)}{x^2}$

Example 3:
$\frac{d}{dx} x^{-n}$

There are two ways to proceed:
$x^{-n} = \frac{1}{x^n}$

1. Using the power rule:
$\frac{d}{dx} x^{-n} = \frac{d}{dx} \left( \frac{1}{x^n} \right) = -nx^{-n-1}$

2. Using the chain rule:
$x^{-n} = \left( x^n \right)^{-1}$
$\frac{d}{dx} x^{-n} = \frac{d}{dx} \left( \left( x^n \right)^{-1} \right) = -n x^{-n-1}$

Higher Derivatives
Higher derivatives are derivatives of derivatives. For instance, if $g = f'$, then $h = g'$ is the second derivative of $f$. We write $h = (f')' = f''$.

Notations:
- $f'(x)$
- $f''(x)$
- $f'''(x)$
- $f^{(n)}(x)$
- $Df$
- $D^2 f$
- $D^3 f$
- $D^n f$
- $\frac{df}{dx}$
- $\frac{d^2 f}{dx^2}$
- $\frac{d^3 f}{dx^3}$
- $\frac{d^n f}{dx^n}$

Higher derivatives are straightforward: keep taking the derivative.

Example:
$D^n x = ?$

Start small and look for a pattern:
$D x = 1$
$D^2 x = D (2x) = 2$
$D^3 x = D^2 (3x^2) = D (6x) = 6$
$D^4 x = D^3 (4x^3) = D^2 (12x^2) = D (24x) = 24$

So,
$D^n x^n = n!$

The notation $n!$ (n factorial) is defined by $n! = n (n-1) \cdots 2 \cdot 1$.

Proof by Induction:
We've checked the base case ($n = 1$).

**Induction step**: Suppose we know $D^n x^n = n!$ (n-th case). Show it holds for the (n+1)-st case:
$D^{n+1} x^{n+1} = D^n (D x^{n+1}) = D^n ((n+1) x^n) = (n+1) D^n x^n = (n+1)(n!)$
So,
$D^{n+1} x^{n+1} = (n+1)!$

Proved!


Here is the lecture material rewritten in a Markdown code block, with explanations included:


## Implicit Differentiation and Inverses

Implicit Differentiation

**Example 1:**
To differentiate $x^a$:
$\frac{d}{dx} (x^a) = ax^{a-1}$

We proved this for $a = 0, 1, 2, \ldots$ and extended it to $a = -1, -2, \ldots$. Let's extend this to rational numbers as well:

$y = x^{m/n}$
To compute $\frac{dy}{dx}$:
$y^n = x^m$
$n y^{n-1} \frac{dy}{dx} = m x^{m-1}$
$\frac{dy}{dx} = \frac{m x^{m-1}}{n y^{n-1}}$

Since $y = x^{m/n}$:
$\frac{dy}{dx} = \frac{m x^{m-1}}{n x^{(m/n)(n-1)}} = \frac{m x^{m-1}}{n x^{m - m/n}} = \frac{m x^{m-1}}{n x^{m - m/n}} = \frac{m}{n} x^{m/n - 1}$

This is the same result we hoped to get.

**Example 2:**
Equation of a circle with radius 1: $x^2 + y^2 = 1$
$y^2 = 1 - x^2$
$y = \pm \sqrt{1 - x^2}$

For the positive case:
$y = \sqrt{1 - x^2}$
$\frac{dy}{dx} = \frac{1}{2}(1 - x^2)^{-1/2}(-2x) = -\frac{x}{\sqrt{1 - x^2}}$

Using implicit differentiation:
$x^2 + y^2 = 1$
Differentiating both sides:
$2x + 2y \frac{dy}{dx} = 0$
$2y \frac{dy}{dx} = -2x$
$\frac{dy}{dx} = -\frac{x}{y}$

Same answer!

Example 3:
$y^3 + xy^2 + 1 = 0$

Implicit differentiation:
$3y^2 \frac{dy}{dx} + y^2 + 2xy \frac{dy}{dx} = 0$
Solving for $\frac{dy}{dx}$:
$\frac{dy}{dx} (3y^2 + 2xy) = -y^2$
$\frac{dy}{dx} = \frac{-y^2}{3y^2 + 2xy}$

Inverse Functions
If $y = f(x)$ and $g(y) = x$, then $g$ is the inverse function of $f$, denoted $f^{-1}$:
$x = g(y) = f^{-1}(y)$

Using implicit differentiation to find the derivative of the inverse function:
$y = f(x)$
$f^{-1}(y) = x$
Differentiating both sides:
$\frac{d}{dx} (f^{-1}(y)) = \frac{d}{dx} (x) = 1$
By the chain rule:
$\frac{d}{dy} (f^{-1}(y)) \frac{dy}{dx} = 1$
So,
$\frac{d}{dy} (f^{-1}(y)) = \frac{1}{\frac{dx}{dy}}$

Example:
$y = \arctan(x)$
$\tan(y) = x$
Differentiating both sides:
$\frac{d}{dx} [\tan(y)] = \frac{d}{dx} (x) = 1$
$\sec^2(y) \frac{dy}{dx} = 1$
$\frac{dy}{dx} = \cos^2(y)$

Using geometry to simplify:
$\tan(y) = x$
$\sec^2(y) = 1 + \tan^2(y) = 1 + x^2$
$\cos^2(y) = \frac{1}{1 + x^2}$

Thus,
$\frac{dy}{dx} = \frac{1}{1 + x^2}$

Graphing an Inverse Function
If $y = f(x)$ and $g(y) = f^{-1}(y) = x$, to graph $g$ and $f$ together, we write $g$ as a function of $x$. Swapping the variables $x$ and $y$ illustrates the inverse relationship:
$f^{-1}(f(x)) = x$
$f(f^{-1}(x)) = x$

Visualize $f^{-1}$ as the graph of $f$ reflected about the line $y = x$.


Here is the lecture material rewritten in a Markdown code block, with explanations included:


## Exponential and Logarithmic Differentiation, Hyperbolic Functions

Taking the Derivatives of Exponentials and Logarithms

Background
We always assume the base $a$ is greater than 1.
$a^0 = 1; \quad a^1 = a; \quad a^2 = a \cdot a$
$a^{x_1 + x_2} = a^{x_1} a^{x_2}$
$(a^{x_1})^{x_2} = a^{x_1 x_2}$
$a^{\frac{p}{q}} = \sqrt[q]{a^p} \quad \text{(where p and q are integers)}$

To define $a^r$ for real numbers $r$, fill in by continuity.

Today's Main Task: Find $\frac{d}{dx} a^x$

We can write:
$\frac{d}{dx} a^x = \lim_{\Delta x \to 0} \frac{a^{x + \Delta x} - a^x}{\Delta x}$

We can factor out $a^x$:
$\frac{d}{dx} a^x = a^x \lim_{\Delta x \to 0} \frac{a^{\Delta x} - 1}{\Delta x}$

Let's call:
$M(a) \equiv \lim_{\Delta x \to 0} \frac{a^{\Delta x} - 1}{\Delta x}$

We don't yet know what $M(a)$ is, but we can say:
$\frac{d}{dx} a^x = M(a) a^x$

Two Descriptions of $M(a)$



1. Analytically
$M(a) = \left. \frac{d}{dx} a^x \right|_{x=0}$

Indeed, 
$M(a) = \lim_{\Delta x \to 0} \frac{a^{0 + \Delta x} - a^0}{\Delta x} = \left. \frac{d}{dx} a^x \right|_{x=0}$

2. Geometrically
$M(a)$ is the slope of the graph $y = a^x$ at $x = 0$.

The trick to figuring out $M(a)$ is to define $e$ as the number such that $M(e) = 1$.

We can estimate the slope $M(a)$ for $a = 2$ and $a = 4$:
- The secant line from \((0, 1)\) to \((1, 2)\) on the graph $y = 2^x$ has a slope less than 1, so $M(2) < 1$.
- The secant line from \((-1/2, 1/2)\) to \((1, 4)\) on the graph $y = 4^x$ has a slope greater than 1, so $M(4) > 1$.

Somewhere between 2 and 4, there is a base whose slope at $x = 0$ is 1.

Thus, we define $e$ as the unique number such that:
$M(e) = 1$
$\lim_{h \to 0} \frac{e^h - 1}{h} = 1$
$\left. \frac{d}{dx} e^x \right|_{x=0} = 1$

So:
$\frac{d}{dx} e^x = e^x$

Natural Logarithm (Inverse Function of $e^x$)
To understand $M(a)$ better, we study the natural log function $\ln(x)$. This function is defined as follows:
- If $y = e^x$, then $\ln(y) = x$
- If $w = \ln(x)$, then $e^w = x$

Note:
- $\ln(1) = 0$
- $\ln(x) < 0$ for $0 < x < 1$
- $\ln(x) > 0$ for $x > 1$
- $\ln(x_1 x_2) = \ln(x_1) + \ln(x_2)$

Use implicit differentiation to find $\frac{d}{dx} \ln(x)$:
$w = \ln(x)$
$e^w = x$
$\frac{d}{dx} (e^w) = \frac{d}{dx} (x)$
$e^w \frac{dw}{dx} = 1$
$\frac{dw}{dx} = \frac{1}{e^w} = \frac{1}{x}$

So:
$\frac{d}{dx} \ln(x) = \frac{1}{x}$

General Exponential Functions
Finally, what about $\frac{d}{dx} a^x$?

Method 1: Write in Base $e$ and Use Chain Rule
Rewrite $a$ as $e^{\ln(a)}$:
$a^x = (e^{\ln(a)})^x = e^{x \ln(a)}$

Using the chain rule:
$\frac{d}{dx} e^{x \ln(a)} = \ln(a) e^{x \ln(a)} = \ln(a) a^x$

Recall:
$\frac{d}{dx} a^x = M(a) a^x$
So $M(a) = \ln(a)$.

Even if starting with another base like 10, the natural logarithm appears:
$\frac{d}{dx} 10^x = (\ln 10) 10^x$

Method 2: Logarithmic Differentiation
The idea is to find $f(x)$ by finding $\ln(f(x))$:
$u = f(x)$
$\frac{d}{dx} \ln(u) = \frac{1}{u} \frac{du}{dx}$
$\frac{du}{dx} = u \frac{d}{dx} \ln(u)$

Apply this to $f(x) = a^x$:
$\ln(f(x)) = x \ln(a)$
$\frac{d}{dx} \ln(f(x)) = \ln(a)$

So:
$\frac{du}{dx} = f(x) \ln(a) = a^x \ln(a)$

**Example 1:**
$\frac{d}{dx} (x^x)$

Use logarithmic differentiation:
$f = x^x$
$\ln(f) = x \ln(x)$

Differentiate:
$\frac{d}{dx} \ln(f) = \frac{d}{dx} (x \ln(x)) = \ln(x) + 1$

So:
$\frac{du}{dx} = x^x (\ln(x) + 1)$

**Example 2:**
Evaluate $\lim_{k \to \infty} \left(1 + \frac{1}{k}\right)^k$

Find the limit of the logarithm:
$\lim_{k \to \infty} \ln \left(1 + \frac{1}{k}\right)^k = \lim_{k \to \infty} k \ln \left(1 + \frac{1}{k}\right)$

This expression has two parts:
- $k \to \infty$
- $\ln \left(1 + \frac{1}{k}\right) \to 0$

So:
$\lim_{k \to \infty} k \ln \left(1 + \frac{1}{k}\right) = \lim_{h \to 0} \frac{\ln(1 + h)}{h} = \left. \frac{d}{dx} \ln(x) \right|_{x=1} = 1$

Thus:
$\lim_{k \to \infty} \left(1 + \frac{1}{k}\right)^k = e$

Remarks:
1. We can use this limit formula to approximate $e$.
2. Logarithms are used in many sciences and finance. For instance, the stock market's percent change is more informative than the absolute point change.
