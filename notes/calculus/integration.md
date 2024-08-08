---
order: 2002
layout: default
toc: true
---

# Integration

### Definite Integrals

Integrals are used to calculate cumulative totals, averages, and areas.

**Area under a curve:**
1. Divide the region into rectangles.
2. Add up the areas of the rectangles.
3. Take the limit as the rectangles become thin.

**Example 1:** $f(x) = x^2$, $a = 0$, $b$ arbitrary
1. Divide into $n$ intervals.
   - Length $\frac{b}{n}$ = base of rectangle
2. Heights:
   - $x = \frac{b}{n}$, height = $\left( \frac{b}{n} \right)^2$
   - $x = \frac{2b}{n}$, height = $\left( \frac{2b}{n} \right)^2$
   - Sum of areas of rectangles:

    $$
    \left( \frac{b}{n} \right)^2 + \left( \frac{b}{n} \right)\left( \frac{2b}{n} \right)^2 + \left( \frac{b}{n} \right)\left( \frac{3b}{n} \right)^2 + \cdots + \left( \frac{b}{n} \right)\left( \frac{nb}{n} \right)^2 = \frac{b^3}{n^3}(1^2 + 2^2 + 3^2 + \cdots + n^2)
    $$


**Example 2:** $f(x) = x$; area under $x$ above $[0, b]$.
- Reasoning similar to Example 1, but easier, gives a sum of areas:
  $$
  \sum_{i=1}^n \left( \frac{ib}{n} \right) = \frac{b^2}{n^2} \sum_{i=1}^n i = \frac{b^2}{n^2} \cdot \frac{n(n+1)}{2} \approx \frac{b^2}{2}
  $$
  as $n \to \infty$.

**Pattern:**
$$
\frac{d}{db} \left( \frac{b^3}{3} \right) = b^2 \quad \text{and} \quad \frac{d}{db} \left( \frac{b^2}{2} \right) = b
$$
The area $A(b)$ under $f(x)$ should satisfy $A'(b) = f(b)$.

**General Picture:**
- Divide into $n$ equal pieces of length $\Delta x = \frac{b-a}{n}$.
- Pick any $c_i$ in the interval; use $f(c_i)$ as the height of the rectangle.
- Sum of areas: $\sum_{i=1}^n f(c_i) \Delta x$.

In summation notation: $\sum_{i=1}^n f(c_i) \Delta x$ is called a Riemann sum.

**Definition:**
$$
\lim_{n \to \infty} \sum_{i=1}^n f(c_i) \Delta x = \int_a^b f(x) \, dx \quad \text{(called a definite integral)}
$$
This definite integral represents the area under the curve $y = f(x)$ above $[a, b]$.

**Example 3:** (Integrals applied to quantities besides area.) Student borrows from parents.
- $P$ = principal in dollars, $t$ = time in years, $r$ = interest rate (e.g., 6% is $r = 0.06/\text{year}$).
- After time $t$, you owe $P(1 + rt) = P + Prt$.

The integral can be used to represent the total amount borrowed as follows. Consider a function $f(t)$, the "borrowing function" in dollars per year. For instance, if you borrow 1000/month, then $f(t)$ = 12,000/year. Allow $f$ to vary over time.
- Say $\Delta t = \frac{1}{12} \text{year} = 1 \text{month}$.
- $t_i = \frac{i}{12}$ for $i = 1, \ldots, 12$.
- $f(t_i)$ is the borrowing rate during the $i$-th month, so the amount borrowed is $f(t_i) \Delta t$. The total is:
  $$
  \sum_{i=1}^{12} f(t_i) \Delta t
  $$
- In the limit as $\Delta t \to 0$, we have:
  $$
  \int_0^1 f(t) \, dt
  $$
  which represents the total borrowed in one year in dollars per year.

The integral can also be used to represent the total amount owed. The amount owed depends on the interest rate. You owe:
$$
f(t_i)(1 + r(1 - t_i)) \Delta t
$$
for the amount borrowed at time $t_i$. The total owed for borrowing at the end of the year is:
$$
\int_0^1 f(t)(1 + r(1 - t)) \, dt
$$



### First Fundamental Theorem of Calculus

If $f(x)$ is continuous and $F'(x) = f(x)$, then:
$$\int_a^b f(x) \, dx = F(b) - F(a)$$

**Notation:**
$$F(x) \Big|_a^b = F(x) \Big|_{x=a}^{x=b} = F(b) - F(a)$$

**Example 1**
$$F(x) = \frac{x^3}{3}, \quad F'(x) = x^2; \quad \int_a^b x^2 dx = \left. \frac{x^3}{3} \right|_a^b = \frac{b^3}{3} - \frac{a^3}{3}$$

**Example 2**
Area under one hump of $\sin x$ (See Figure 1):
$$\int_0^\pi \sin x \, dx = \left. -\cos x \right|_0^\pi = -\cos \pi - (-\cos 0) = -(-1) - (-1) = 2$$

**Example 3:**
$$\int_0^1 x^5 \, dx = \left. \frac{x^6}{6} \right|_0^1 = \frac{1}{6} - 0 = \frac{1}{6}$$

**Intuitive Interpretation of FTC:**
- $x(t)$ is a position; $v(t) = x'(t)$ is the speed or rate of change of $x$.
$$\int_a^b v(t) \, dt = x(b) - x(a)$$
- The RHS is how far $x(t)$ went from time $t = a$ to time $t = b$ (difference between two odometer readings).
- The LHS represents speedometer readings.

**Example 4:**
$$\int_0^{2\pi} \sin x \, dx = \left. -\cos x \right|_0^{2\pi} = -\cos(2\pi) - (-\cos(0)) = 0$$
- The integral represents the sum of areas under the curve, above the x-axis minus the areas below the x-axis.

**Additive Property of Integrals:**
$$\int_a^b f(x) \, dx + \int_b^c f(x) \, dx = \int_a^c f(x) \, dx$$

**New Definition:**
$$\int_b^a f(x) \, dx = -\int_a^b f(x) \, dx$$
- This definition is used so that the fundamental theorem is valid no matter if $a < b$ or $b < a$. It also makes the additive property work for $a, b, c$ in any order.

**Estimation:**
$$\text{If } f(x) \leq g(x), \text{ then } \int_a^b f(x) \, dx \leq \int_a^b g(x) \, dx$$

**Example 5:**
$$\text{Estimation of } e^x$$
$$\text{Since } 1 \leq e^x \text{ for } x \geq 0,$$

$$\int_0^1 1 \, dx \leq \int_0^1 e^x \, dx$$

$$\int_0^1 e^x \, dx = \left. e^x \right|_0^1 = e^1 - e^0 = e - 1$$

$$\text{Thus, } 1 \leq e - 1 \text{ or } e \geq 2$$

**Example 6:**
$$\text{We showed earlier that } 1 + x \leq e^x.$$

$$\text{It follows that:}$$

$$\int_0^1 (1 + x) \, dx \leq \int_0^1 e^x \, dx = e - 1$$

$$\int_0^1 (1 + x) \, dx = \left. \left( x + \frac{x^2}{2} \right) \right|_0^1 = \frac{3}{2}$$

$$\text{Hence, } \frac{3}{2} \leq e - 1 \text{ or } e \geq \frac{5}{3}$$

**Change of Variable:**
- If $f(x) = g(u(x))$, then we write $du = u'(x) \, dx$ 

and:

$$\int g(u) \, du = \int g(u(x))u'(x) \, dx = \int f(x)u'(x) \, dx$$

**For definite integrals:**

$$\int_{x1}^{x2} f(x)u'(x) \, dx = \int_{u1}^{u2} g(u) \, du \text{ where } u1 = u(x1), u2 = u(x2)$$

**Example 7.**

$$\int_{1}^{2} (x^3 + 2)^4 x^2 dx$$

Let $u = x^3 + 2$. Then $du = 3x^2dx \implies x^2dx = \frac{du}{3}$;

$$x_1 = 1, x_2 = 2 \implies u_1 = 1^3 + 2 = 3, u_2 = 2^3 + 2 = 10, and$$

$$
\int_{1}^{2} (x^3 + 2)^4 x^2 dx = \int_{3}^{10} u^4 \frac{du}{3} = \frac{1}{3} \int_{3}^{10} u^4 du = \frac{u^5}{15} \Bigg|_{3}^{10} = \frac{10^5 - 3^5}{15}
$$


### Second Fundamental Theorem

Recall: First Fundamental Theorem of Calculus (FTC 1)
If $f$ is continuous and $F' = f$, then

$$
\int_a^b f(x)\,dx = F(b) - F(a)
$$

We can also write that as

$$
\int_a^b f(x)\,dx = \left[ F(x) \right]_a^b = F(b) - F(a)
$$

Do all continuous functions have antiderivatives? Yes. However...
What about a function like this?

$$
\int e^{-x^2}\,dx =??
$$

Yes, this antiderivative exists. No, it’s not a function we’ve met before: it’s a new function.
The new function is defined as an integral:

$$
F(x) = \int_0^x e^{-t^2}\,dt
$$

It will have the property that $F'(x) = e^{-x^2}$.

Other new functions include antiderivatives of $e^{-x^2}$, $x e^{-x^2}$, $\frac{\sin x}{x}$, $\sin(x^2)$, $\cos(x^2)$,...

## Second Fundamental Theorem of Calculus (FTC 2)

If $F(x) = \int_a^x f(t)\,dt$ and $f$ is continuous, then

$$
F'(x) = f(x)
$$

**Geometric Proof of FTC 2:** 

Use the area interpretation: $F(x)$ equals the area under the curve between $a$ and $x$.

$$
\Delta F = F(x + \Delta x) - F(x)
$$

$$
\Delta F \approx (\text{base})(\text{height}) \approx (\Delta x)f(x)
$$

$$
\frac{\Delta F}{\Delta x} \approx f(x)
$$

Hence 

$$
\lim_{\Delta x \to 0} \frac{\Delta F}{\Delta x} = f(x)
$$

But, by the definition of the derivative:

$$
\lim_{\Delta x \to 0} \frac{\Delta F}{\Delta x} = F'(x)
$$

Therefore,

$$
F'(x) = f(x)
$$

Another way to prove FTC 2 is as follows:

$$
\frac{\Delta F}{\Delta x} = \frac{1}{\Delta x} \left( \int_a^{x+\Delta x} f(t)\,dt - \int_a^x f(t)\,dt \right)
$$

$$
= \frac{1}{\Delta x} \int_x^{x+\Delta x} f(t)\,dt \quad 
$$

$\text{which is the “average value” of } f \text{ on the interval } x \leq t \leq x + \Delta x.$

As the length $\Delta x$ of the interval tends to 0, this average tends to $f(x)$.

## Proof of FTC 1 (using FTC 2)

Start with $F' = f$ (we assume that $f$ is continuous). Next, define $G(x) = \int_a^x f(t)\,dt$. By FTC2,

$$
G'(x) = f(x)
$$

Therefore, $(F - G)' = F' - G' = f - f = 0$. Thus, $F - G = \text{constant}$. (Recall we used the Mean Value Theorem to show this).
Hence, $F(x) = G(x) + c$. Finally, since $G(a) = 0$,

$$
\int_a^b f(t)\,dt = G(b) = G(b) - G(a) = [F(b) - c] - [F(a) - c] = F(b) - F(a)
$$

which is FTC 1.

## Examples of “new” functions

The error function, which is often used in statistics and probability, is defined as

$$
\text{erf}(x) = \frac{2}{\sqrt{\pi}} \int_0^x e^{-t^2}\,dt
$$

and 

$$
\lim_{x \to \infty} \text{erf}(x) = 1 
$$

Another “new” function of this type, called the logarithmic integral, is defined as

$$
\text{Li}(x) = \int_2^x \frac{dt}{\ln t}
$$

This function gives the approximate number of prime numbers less than $x$. 

## Bessel functions

Bessel functions often arise in problems with circular symmetry:

$$
J_0(x) = \frac{1}{\pi} \int_0^\pi \cos(x \sin \theta)\,d\theta
$$



$$
C'(x) = \cos(x^2)
$$

We will use FTC 2 to discuss the function $L(x) = \int_1^x \frac{dt}{t}$ from first principles.


### Applications to Logarithms and Geometry

The integral definition of functions like $C(x)$, $S(x)$ of Fresnel makes them nearly as easy to use as elementary functions. It is possible to draw their graphs and tabulate values. You are asked to carry out an example or two of this on your problem set. To get used to using definite integrals and FTC2, we will discuss in detail the simplest integral that gives rise to a relatively new function, namely the logarithm.

Recall that
$$\int x^n dx = \frac{x^{n+1}}{n+1} + c$$
except when $n = -1$. It follows that the antiderivative of $\frac{1}{x}$ is not a power, but something else. So let us define a function $L(x)$ by
$$L(x) = \int_1^x \frac{dt}{t}$$

(This function turns out to be the logarithm. But recall that our approach to the logarithm was fairly involved. We first analyzed $a^x$, and then defined the number $e$, and finally defined the logarithm as the inverse function to $e^x$. The direct approach using this integral formula will be easier.)

All the basic properties of $L(x)$ follow directly from its definition. Note that $L(x)$ is defined for $0 < x < \infty$. (We will not extend the definition past $x = 0$ because $\frac{1}{t}$ is infinite at $t = 0$.) Next, the fundamental theorem of calculus (FTC2) implies
$$L'(x) = \frac{1}{x}$$

Also, because we have started the integration with lower limit 1, we see that
$$L(1) = \int_1^1 \frac{dt}{t} = 0$$

Thus $L$ is increasing and crosses the x-axis at $x = 1$: $L(x) < 0$ for $0 < x < 1$ and $L(x) > 0$ for $x > 1$. Differentiating a second time,
$$L''(x) = -\frac{1}{x^2}$$

It follows that $L$ is concave down.

The key property of $L(x)$ (showing that it is, indeed, a logarithm) is that it converts multiplication into addition:

**Claim 1:** $L(ab) = L(a) + L(b)$

**Proof:** By definition of $L(ab)$ and $L(a)$,
$$L(ab) = \int_1^{ab} \frac{dt}{t} = \int_1^a \frac{dt}{t} + \int_a^{ab} \frac{dt}{t} = L(a) + \int_a^{ab} \frac{dt}{t}$$

To handle $\int_a^{ab} \frac{dt}{t}$, make the substitution $t = au$. Then,
$$dt = a\,du; \quad a < t < ab \quad \text{implies} \quad 1 < u < b$$

Therefore,
$$\int_a^{ab} \frac{dt}{t} = \int_1^b \frac{a\,du}{au} = \int_1^b \frac{du}{u} = L(b)$$

This confirms $L(ab) = L(a) + L(b)$.

Two more properties, the end values, complete the general picture of the graph.

**Claim 2:** $L(x) \to \infty$ as $x \to \infty$.

**Proof:** It suffices to show that $L(2^n) \to \infty$ as $n \to \infty$, because the fact that $L$ is increasing fills in all the values in between the powers of 2.

$$L(2^n) = L(2 \cdot 2^{n-1}) = L(2) + L(2^{n-1})$$
$$= L(2) + L(2) + \cdots + L(2) \quad (n \text{ times})$$

Consequently, $L(2^n) = nL(2) \to \infty$ as $n \to \infty$. (In more familiar notation, $\ln 2^n = n \ln 2$.)

**Claim 3:** $L(x) \to -\infty$ as $x \to 0^+$.

**Proof:** 
$$0 = L(1) = L\left( x \cdot \frac{1}{x} \right) = L(x) + L\left( \frac{1}{x} \right)$$

As $x \to 0^+$, $\frac{1}{x} \to +\infty$, so Claim 2 implies $L\left( \frac{1}{x} \right) \to \infty$. Hence,
$$L(x) = -L\left( \frac{1}{x} \right) \to -\infty \, \text{as}\, x \to 0^+$$

Thus $L(x)$, defined on $0 < x < \infty$, increases from $-\infty$ to $\infty$, crossing the x-axis at $x = 1$. It is concave down and its graph can be drawn as in Fig. 1.

This provides an alternative to our previous approach to the exponential and log functions. Starting from $L(x)$, we can define the log function by $\ln x = L(x)$, define $e$ as the number such that $L(e) = 1$, define $e^x$ as the inverse function of $L(x)$, and define $a^x = e^{xL(a)}$.

## Application of FTCs to Geometry (Volumes and Areas)
1. **Areas between two curves**

Find the crossing points $a$ and $b$. The area, $A$, between the curves is
$$A = \int_a^b (f(x) - g(x)) \, dx$$

**Example 1:** Find the area in the region between $x = y^2$ and $y = x - 2$.

$$x = y^2$$
$$y = x - 2$$

First, graph these functions and find the crossing points:
$$y + 2 = x = y^2$$
$$y^2 - y - 2 = 0$$
$$(y - 2)(y + 1) = 0$$

Crossing points at $y = -1$, $2$. Plug these back in to find the associated x values, $x = 1$ and $x = 4$. Thus the curves meet at $(1, -1)$ and $(4, 2)$.

There are two ways of finding the area between these two curves, a hard way and an easy way.

**Hard Way:** Vertical Slices

If we slice the region between the two curves vertically, we need to consider two different regions. Where $x > 1$, the region’s lower bound is the straight line. For $x < 1$, however, the region’s lower bound is the lower half of the sideways parabola. We find the area, $A$, between the two curves by integrating the difference between the top curve and the bottom curve in each region:
$$A = \int_0^1 (\sqrt{x} - (-\sqrt{x})) \, dx + \int_1^4 (\sqrt{x} - (x - 2)) \, dx = \int (\text{top curve} - \text{bottom curve}) \, dx$$

**Easy Way:** Horizontal Slices

Here, instead of subtracting the bottom curve from the top curve, we subtract the right curve from the left one.

$$
A = \int_{y=-1}^{2} (x_{\text{left}} - x_{\text{right}}) \, dy = \int_{y=-1}^{2} \left[ (y + 2) - y^2 \right] \, dx = \left( \frac{y^2}{2} + 2y - \frac{y^3}{3} \right) \bigg|_{-1}^{2} = \left[ \frac{4}{2} + 4 - \frac{8}{3} \right] - \left[ \frac{1}{2} - 2 + \frac{1}{3} \right] = 4 + 4 - \frac{8}{3} - \left( \frac{1}{2} - 2 + \frac{1}{3} \right) = \frac{9}{2}
$$


2. **Volumes of solids of revolution**

Rotate $f(x)$ about the x-axis, coming out of the page, to get:
$$dV = \pi y^2 dx \, \text{(for a solid of revolution around the x-axis)}$$

Integrate with respect to $x$ to find the total volume of the solid of revolution.

**Example 2:** Find the volume of a ball of radius $a$.

The equation for the upper half of the circle is:
$$y = \sqrt{a^2 - x^2}$$

If we spin the upper part of the curve about the x-axis,```markdown
Lecture 21: Applications to Logarithms and Geometry

## Application of FTC 2 to Logarithms
The integral definition of functions like $C(x)$, $S(x)$ of Fresnel makes them nearly as easy to use as elementary functions. It is possible to draw their graphs and tabulate values. You are asked to carry out an example or two of this on your problem set. To get used to using definite integrals and FTC2, we will discuss in detail the simplest integral that gives rise to a relatively new function, namely the logarithm.

Recall that
$$\int x^n \, dx = \frac{x^{n+1}}{n+1} + c$$
except when $n = -1$. It follows that the antiderivative of $\frac{1}{x}$ is not a power, but something else. So let us define a function $L(x)$ by
$$L(x) = \int_1^x \frac{dt}{t}$$

(This function turns out to be the logarithm. But recall that our approach to the logarithm was fairly involved. We first analyzed $a^x$, and then defined the number $e$, and finally defined the logarithm as the inverse function to $e^x$. The direct approach using this integral formula will be easier.)

All the basic properties of $L(x)$ follow directly from its definition. Note that $L(x)$ is defined for $0 < x < \infty$. (We will not extend the definition past $x = 0$ because $\frac{1}{t}$ is infinite at $t = 0$.) Next, the fundamental theorem of calculus (FTC2) implies
$$L'(x) = \frac{1}{x}$$

Also, because we have started the integration with lower limit 1, we see that
$$L(1) = \int_1^1 \frac{dt}{t} = 0$$

Thus $L$ is increasing and crosses the x-axis at $x = 1$: $L(x) < 0$ for $0 < x < 1$ and $L(x) > 0$ for $x > 1$. Differentiating a second time,
$$L''(x) = -\frac{1}{x^2}$$

It follows that $L$ is concave down.

The key property of $L(x)$ (showing that it is, indeed, a logarithm) is that it converts multiplication into addition:

**Claim 1:** $L(ab) = L(a) + L(b)$

**Proof:** By definition of $L(ab)$ and $L(a)$,
$$L(ab) = \int_1^{ab} \frac{dt}{t} = \int_1^a \frac{dt}{t} + \int_a^{ab} \frac{dt}{t} = L(a) + \int_a^{ab} \frac{dt}{t}$$

To handle $\int_a^{ab} \frac{dt}{t}$, make the substitution $t = au$. Then,
$$dt = a\,du; \quad a < t < ab \quad \text{implies} \quad 1 < u < b$$

Therefore,
$$\int_a^{ab} \frac{dt}{t} = \int_1^b \frac{a\,du}{au} = \int_1^b \frac{du}{u} = L(b)$$

This confirms $L(ab) = L(a) + L(b)$.

Two more properties, the end values, complete the general picture of the graph.

**Claim 2:** $L(x) \to \infty$ as $x \to \infty$.

**Proof:** It suffices to show that $L(2^n) \to \infty$ as $n \to \infty$, because the fact that $L$ is increasing fills in all the values in between the powers of 2.

$$L(2^n) = L(2 \cdot 2^{n-1}) = L(2) + L(2^{n-1})$$
$$= L(2) + L(2) + \cdots + L(2) \quad (n \text{ times})$$

Consequently, $L(2^n) = nL(2) \to \infty$ as $n \to \infty$. (In more familiar notation, $\ln 2^n = n \ln 2$.)

**Claim 3:** $L(x) \to -\infty$ as $x \to 0^+$.

**Proof:** 
$$0 = L(1) = L\left( x \cdot \frac{1}{x} \right) = L(x) + L\left( \frac{1}{x} \right)$$

As $x \to 0^+$, $\frac{1}{x} \to +\infty$, so Claim 2 implies $L\left( \frac{1}{x} \right) \to \infty$. Hence,
$$L(x) = -L\left( \frac{1}{x} \right) \to -\infty \, \text{as}\, x \to 0^+$$

Thus $L(x)$, defined on $0 < x < \infty$, increases from $-\infty$ to $\infty$, crossing the x-axis at $x = 1$. It is concave down and its graph can be drawn as in Fig. 1.

This provides an alternative to our previous approach to the exponential and log functions. Starting from $L(x)$, we can define the log function by $\ln x = L(x)$, define $e$ as the number such that $L(e) = 1$, define $e^x$ as the inverse function of $L(x)$, and define $a^x = e^{xL(a)}$.



### Volumes by Disks and Shells

**Disks**

$$
V = \int_{0}^{a} \pi x^2 \, dy \quad \text{(substitute } y = x^2 \text{)}
$$

$$
V = \int_{0}^{a} \pi y \, dy = \pi \frac{y^2}{2} \Bigg|_{0}^{a} = \frac{\pi a^2}{2}
$$


If $a = 1$ meter, then $V = \frac{\pi}{2} a^2$ gives

$$ 
V = \frac{\pi}{2} \text{m}^3 = \frac{\pi}{2} (100 \text{cm})^3 = \frac{\pi}{2} 10^6 \text{ cm}^3 \approx 1600 \text{ liters} \quad (\text{a huge cauldron})
$$

**Warning about units.**

If $a = 100 \text{cm}$, then

$$
V = \frac{\pi}{2}(100)^2 = \frac{\pi}{2} \cdot 10^4 \, \text{cm}^3 = \frac{\pi}{2} \cdot 10 \sim 16 \, \text{liters}
$$


Why is this answer different? The resolution of this paradox is in the equation.

Given $y = x^2$:
$$ 100 = x^2 $$
$$ x = 10 \, \text{cm} $$

Thus, the second cauldron has a different shape, as illustrated in Figure 3. When $a = 1$ m, the top is ten times wider:
$$ 1 = x^2 $$ or
$$ x = 1 \, \text{m} $$

The equation $y = x^2$ is not scale-invariant. The shape depends on the units used.


**Method 2: Shells**

This really should be called the cylinder method.

The thin shell/cylinder has height $a - x^2$, circumference $2\pi x$, and thickness $dx$.

$$dV = (a - x^2)(2\pi x)dx$$

$$V = \int_{x=0}^{x=\sqrt{a}} (a - x^2)(2\pi x)dx = 2\pi \int_{0}^{\sqrt{a}} (ax - x^3)dx$$

$$= 2\pi \left( \frac{a x^2}{2} - \frac{x^4}{4} \right) \Bigg|_{0}^{\sqrt{a}} = 2\pi \left( \frac{a^2}{2} - \frac{a^2}{4} \right) = 2\pi \left( \frac{a^2}{4} \right) = \frac{\pi a^2}{2}$$

(same as before)


**Example 2: The Boiling Cauldron**

Now, let’s fill this cauldron with water, and light a fire under it to get the water to boil (at $100^\circ C$). Let’s say it’s a cold day: the temperature of the air outside the cauldron is $0^\circ C$. How much energy does it take to boil this water, i.e. to raise the water’s temperature from $0^\circ C$ to $100^\circ C$? Assume the temperature decreases linearly between the top and the bottom ($y = 0$) of the cauldron:
$$ T = 100 - 30y \, (\text{degrees Celsius}) $$

Use the method of disks, because the water’s temperature is constant over each horizontal disk. The total heat required is:
$$
H = \int_{0}^{1} T(\pi x^2) dy \quad \text{(units are (degree)(cubic meters))}
$$

$$
= \int_{0}^{1} (100 - 30y) (\pi y) dy
$$

$$
= \pi \int_{0}^{1} (100y - 30y^2) dy = \pi (50y^2 - 10y^3) \Big|_{0}^{1} = 40\pi \, \text{(deg.})(m^3)
$$

How many calories is that?

$$
\text{# of calories} = \left( \frac{1 \, \text{cal}}{\text{cm}^3 \cdot \text{deg}} \right) \left( 40\pi \right) \left( \frac{100 \, \text{cm}}{1 \, \text{m}} \right)^3 = \left( 40\pi \right) (10^6) \, \text{cal} = 125 \times 10^3 \, \text{kcal}
$$

There are about 250 kcals in a candy bar, so there are about

$$
\text{# of calories} = \left( \frac{1}{2} \, \text{candy bar} \right) \times 10^3 \approx 500 \, \text{candy bars}
$$


So, it takes about 500 candy bars’ worth of energy to boil the water.


**Example 3. Pipe Flow**

Poiseuille was the first person to study fluid flow in pipes (arteries, capillaries). He figured out the velocity profile for fluid flowing in pipes is:
$$ v = c(R^2 - r^2) $$

The flow through the "annulus" (a.k.a ring) is (area of ring)(flow rate)
$$ \text{area of ring} = 2\pi r \, dr $$

Integrate with respect to $r$ to find the total flow through the pipe:

total flow through pipe = $$\int_{0}^{R} v(2\pi r dr) = c \int_{0}^{R} (R^2 - r^2) 2 \pi r dr$$
 
= 
$$
2\pi c \int_{0}^{R} (R^2 r - r^3) dr = 2 \pi c \left(\frac{R^2 r^2}{2} - \frac{r^4}{4}\right)\Bigg|_{0}^{R}
$$


flow through pipe = $\frac{\pi}{2} c R^4$

Notice that the flow is proportional to $R^4$. This means there’s a big advantage to having thick pipes.

**Example 4. Dart Board**

You aim for the center of the board, but your aim’s not always perfect. Your number of hits, $N$, at radius $r$ is proportional to $e^{-r^2}$.
$$ N = c e^{-r^2} $$

This looks like:
$$ y = c e^{-r^2} $$

The number of hits within a given ring with $r_1 < r < r_2$ is:
$$ \int_{r_1}^{r_2} c e^{-r^2} (2\pi r \, dr) $$

We will examine this problem more in the next lecture.


### Work, Average Value, Probability

## Application of Integration to Average Value

You already know how to take the average of a set of discrete numbers:

$$
\frac{a_1 + a_2}{2} \quad \text{or} \quad \frac{a_1 + a_2 + a_3}{3}
$$

Now, we want to find the average of a continuum.

$$
\text{Average} \approx \frac{y_1 + y_2 + \cdots + y_n}{n}
$$

where
$$
a = x_0 < x_1 < \cdots < x_n = b
$$
$$
y_0 = f(x_0), \, y_1 = f(x_1), \, \ldots, \, y_n = f(x_n)
$$

and
$$
n(\Delta x) = b - a \quad \Rightarrow \quad \Delta x = \frac{b - a}{n}
$$

The limit of the Riemann Sums is

$$
\lim_{n \to \infty} \left( \frac{y_1 + \cdots + y_n}{n} \right) = \frac{1}{b - a} \int_{a}^{b} f(x) \, dx
$$

## Example 1

Find the average of $y = \sqrt{1 - x^2}$ on the interval $[-1, 1]$.

$$
\text{Average height} = \frac{1}{2} \int_{-1}^{1} \sqrt{1 - x^2} \, dx = \frac{\pi}{4}
$$

## Example 2

The average of a constant is the same constant:

$$
\frac{1}{b - a} \int_{a}^{b} 53 \, dx = 53
$$

## Example 3

Find the average height $y$ on a semicircle, with respect to arclength. Use $d\theta$, not $dx$.

$$
\text{Average} = \frac{1}{\pi} \int_{0}^{\pi} \sin \theta \, d\theta = \frac{2}{\pi}
$$

## Example 4

Find the average temperature of water in the witches cauldron from last lecture.

First, recall how to find the volume of the solid of revolution by disks.

$$V = \int_{0}^{1} (\pi x^2) \, dy = \int_{0}^{1} \pi y \, dy = \left. \frac{\pi y^2}{2} \right|_{0}^{1} = \frac{\pi}{2}$$

Recall that $T(y) = 100 - 30y$ and $T(0) = 100^\circ; T(1) = 70^\circ$. The average temperature per unit volume is computed by giving an importance or "weighting" $w(y) = \pi y$ to the disk at height $y$.

$$\frac{\int_{0}^{1} T(y) w(y) \, dy}{\int_{0}^{1} w(y) \, dy}$$

The numerator is

$$
\int_{0}^{1} T \pi y \, dy = \pi \int_{0}^{1} (100 - 30y) y \, dy = \pi \left. ( 500y^2 - 10y^3) \right|_{0}^{1} = 40\pi
$$


Thus, the average temperature is:

$$
\frac{40\pi}{\frac{\pi}{2}} = 80^\circ \, C
$$

Compare this with the average taken with respect to height $y$:

$$
\frac{1}{1} \int_{0}^{1} T \, dy = \int_{0}^{1} (100 - 30y) \, dy = \left(100y - 15y^2\right) \Big|_{0}^{1} = 85^\circ C
$$


$T$ is linear. Largest $T = 100^\circ \, C$, smallest $T = 70^\circ \, C$, and the average of the two is:

$$
\frac{70 + 100}{2} = 85
$$

The answer $85^\circ \, C$ is consistent with the ordinary average. The weighted average (integration with respect to $\pi y \, dy$) is lower ($80^\circ \, C$) because there is more water at cooler temperatures in the upper parts of the cauldron.

## Dart Board, Revisited

Last time, we said that the accuracy of your aim at a dart board follows a “normal distribution”:

$$ ce^{-r^2} $$

Now, let’s pretend someone – say, your little brother – foolishly decides to stand close to the dart board. What is the chance that he’ll get hit by a stray dart?


Figure 5: Shaded section is $2r_1 < r < 3r_1$ between 3 and 5 o’clock.

To make our calculations easier, let’s approximate your brother as a sector (the shaded region in Fig. 5). Your brother doesn’t quite stand in front of the dart board. Let us say he stands at a distance $r$ from the center where $2r_1 < r < 3r_1$ and $r_1$ is the radius of the dart board. Note that your brother doesn’t surround the dart board. Let us say he covers the region between 3 o’clock and 5 o’clock, or $\frac{1}{6}$ of a ring.

Remember that

$$ \text{probability} = \frac{\text{part}}{\text{whole}} $$



Figure 6: Integrating over rings.

The ring has weight $\left( ce^{-r^2} \right) (2\pi r)(dr)$ (see Figure 6). The probability of a dart hitting your brother is:

$$ 
\text{Probability} = \frac{ \frac{1}{6} \int_{2r_1}^{3r_1} ce^{-r^2} 2\pi r \, dr }{ \int_0^\infty ce^{-r^2} 2\pi r \, dr }
$$

Recall that $\frac{1}{6} = \frac{5 - 3}{12}$ is our approximation to the portion of the circumference where the little brother stands. (Note: $e^{-r^2} = e^{(-r^2)}$, not $(e^{-r})^2$)

$$ 
\int_a^b re^{-r^2} dr = -\frac{1}{2} e^{-r^2} \Bigg|_a^b = -\frac{1}{2} e^{-b^2} + \frac{1}{2} e^{-a^2} \quad \left( \frac{d}{dr} e^{-r^2} = -2r e^{-r^2} \right) 
$$

Denominator:

$$ 
\int_0^\infty e^{-r^2} r \, dr = -\frac{1}{2} e^{-r^2} \Bigg|_0^R \rightarrow -\frac{1}{2} e^{-R^2} + \frac{1}{2} e^{-0^2} = \frac{1}{2} 
$$



(Note that $e^{-R^2} \rightarrow 0$ as $R \rightarrow \infty$).

---

$$\text{Probability} = \frac{ \frac{1}{6} \int_{2r_1}^{3r_1} ce^{-r^2}2\pi r \, dr }{ \int_{0}^{\infty} ce^{-r^2}2\pi r \, dr } = \frac{ \frac{1}{6} \int_{2r_1}^{3r_1} e^{-r^2}r \, dr }{ \int_{0}^{\infty} e^{-r^2}r \, dr } = \frac{1}{3} \int_{2r_1}^{3r_1} e^{-r^2}r \, dr = \left. \frac{-e^{-r^2}}{6} \right|_{2r_1}^{3r_1}$$


$Probability = \frac{-e^{-9r^2} + e^{-4r^2}}{6}$

Let’s assume that the person throwing the darts hits the dartboard $0 \leq r \leq r_1$ about half the time.
(Based on personal experience with 7-year-olds, this is realistic.)

$$
P(0 \leq r \leq r_1) = \frac{1}{2} = \int_{0}^{r_1} 2e^{-r^2}rdr = -e^{-r_1^2} + 1 \implies e^{-r_1^2} = \frac{1}{2}
$$

$$e^{-9r_1^2} = \left(e^{-r_1^2}\right)^9 = \left(\frac{1}{2}\right)^9 \approx 0$$

$$e^{-4r_1^2} = \left(e^{-r_1^2}\right)^4 = \left(\frac{1}{2}\right)^4 = \frac{1}{16}$$

So, the probability that a stray dart will strike your little brother is

$$\left(\frac{1}{16}\right)\left(\frac{1}{6}\right) \approx \frac{1}{100}$$

In other words, there’s about a 1% chance he’ll get hit with each dart thrown.



## Volume by Slices: An Important Example

Compute $Q = \int_{-\infty}^{\infty} e^{-x^2} \, dx$

Figure 8: $Q =$ Area under curve $e^{-x^2}$.

This is one of the most important integrals in all of calculus. It is especially important in probability and statistics. It’s an improper integral, but don’t let those ∞’s scare you. In this integral, they’re actually easier to work with than finite numbers would be. To find $Q$, we will first find a volume of revolution, namely,

$$ V = \text{volume under } e^{-r^2} \ (r = \sqrt{x^2 + y^2}) $$

We find this volume by the method of shells, which leads to the same integral as in the last problem.
The shell or cylinder under $e^{-r^2}$ at radius sr has circumference $2\pi r$, thickness dr; (see Figure 9).

Therefore $dV = e^{-r^2} 2\pi r \, dr$. In the range $0 \leq r \leq R$,

$$
\int_{0}^{R} e^{-r^2} 2 \pi r \, dr = -\pi e^{-r^2} \bigg|_{0}^{R} = -\pi e^{-R^2} + \pi
$$

$$
When R \to \infty$, e^{-R^2} \to 0,
$$

$$
V = \int_{0}^{\infty} e^{-r^2} 2\pi r \, dr = \pi \quad \text{(same as in the darts problem)}
$$


Next, we will find $V$ by a second method, the method of slices. Slice the solid along a plane where $y$ is fixed. (See Figure 10). Call $A(y)$ the cross-sectional area. Since the thickness is $dy$ (see Figure 11),

$$ V = \int_{-\infty}^{\infty} A(y) \, dy $$

To compute $ A(y)$, note that it is an integral (with respect to $ dx$)

$$
A(y) = \int_{-\infty}^{\infty} e^{-r^2} dx = \int_{-\infty}^{\infty} e^{-x^2 - y^2} dx = e^{-y^2} \int_{-\infty}^{\infty} e^{-x^2} dx = e^{-y^2} Q
$$




Here, we have used $r^2 = x^2 + y^2$ and $e^{-x^2 - y^2} = e^{-x^2} e^{-y^2}$ and the fact that $y$ is a constant in the $A(y)$ slice (see Figure 12). In other words,

$$ \int_{-\infty}^{\infty}c e^{-x^2} \, dx = c \int_{-\infty}^{\infty} e^{-x^2} \, dx $$

with $c = e^{-y^2}$.

It follows that

$$ V = \int_{-\infty}^{\infty} A(y) \, dy = \int_{-\infty}^{\infty} e^{-y^2} Q \, dy = Q \int_{-\infty}^{\infty} e^{-y^2} \, dy = Q^2 $$

Indeed,

$$ Q = \int_{-\infty}^{\infty} e^{-x^2} \, dx = \int_{-\infty}^{\infty} e^{-y^2} \, dy $$

because the name of the variable does not matter. To conclude the calculation read the equation backwards:

$$ \pi = V = Q^2 \Rightarrow Q = \sqrt{\pi} $$

We can rewrite $Q = \sqrt{\pi}$ as

$$ \frac{1}{\sqrt{\pi}} \int_{-\infty}^{\infty} e^{-x^2} \, dx = 1 $$

An equivalent rescaled version of this formula (replacing $x$ with $x / \sqrt{2\sigma}$) is used:

$$ \frac{1}{\sqrt{2\pi\sigma}} \int_{-\infty}^{\infty} e^{-x^2 / 2\sigma^2} \, dx = 1 $$

This formula is central to probability and statistics. The probability distribution

$$ \frac{1}{\sqrt{2\pi\sigma}} e^{-x^2 / 2\sigma^2} $$

on $-\infty < x < \infty$ is known as the normal distribution, and $\sigma > 0$ is its standard deviation.


### Numerical Integration

Numerical integration when an integral has no elementary antiderivative. For instance, there is no formula for

$$ \int_0^x \cos(t^2) \, dt \text{ or } \int_0^3 e^{-x^2} \, dx $$

Numerical integration yields numbers rather than analytical expressions.

We’ll talk about three techniques for numerical integration: Riemann sums, the trapezoidal rule, and Simpson’s rule.

## 1. Riemann Sum

Here,

$$ x_i - x_{i-1} = \Delta x $$

(or, $x_i = x_{i-1} + \Delta x$)

$$ a = x_0 < x_1 < x_2 < ... < x_n = b $$

$$ y_0 = f(x_0), y_1 = f(x_1), ... y_n = f(x_n) $$

## 2. Trapezoidal Rule

The trapezoidal rule divides up the area under the function into trapezoids, rather than rectangles. The area of a trapezoid is the height times the average of the parallel bases:

$$ \text{Area} = \frac{\text{base}_1 + \text{base}_2}{2} \times \text{height} $$

$$ \text{Total Trapezoidal Area} = \Delta x \left(\frac{y_0}{2} + y_1 + y_2 + ... + y_{n-1} + \frac{y_n}{2}\right) $$

The trapezoidal rule gives a more symmetric treatment of the two ends (a and b) than a Riemann sum does — the average of left and right Riemann sums.

## 3. Simpson’s Rule

This approach often yields much more accurate results than the trapezoidal rule does. Here, we match quadratics (i.e. parabolas), instead of straight or slanted lines, to the graph. This approach requires an even number of intervals.

$$ \text{Area under parabola} = (\text{base})(\text{weighted average height}) = (2\Delta x) \frac{y_0 + 4y_1 + y_2}{6} $$

Simpson’s rule for $n$ intervals (n must be even!):

$$ \text{Area} = \frac{2\Delta x}{6} [(y_0 + 4y_1 + y_2) + (y_2 + 4y_3 + y_4) + (y_4 + 4y_5 + y_6) + \cdots + (y_{n-2} + 4y_{n-1} + y_n)] $$

Notice the following pattern in the coefficients:

$$ 1, 4, 1, \quad 1, 4, 2, 4, 1, \quad 1, 4, 2, 4, 2, 4, 1 $$

Simpson’s rule:

$$ \int_a^b f(x) \, dx \approx \frac{\Delta x}{3} \left( y_0 + 4y_1 + 2y_2 + 4y_3 + 2y_4 + \cdots + 4y_{n-1} + y_n \right) $$

The pattern of coefficients in parentheses is:

$$ 1, 4, 1 = \text{sum } 6 $$

$$ 1, 4, 2, 4, 1 = \text{sum } 12 $$

$$ 1, 4, 2, 4, 2, 4, 1 = \text{sum } 18 $$

To double check – plug in $f(x) = 1$ (n even!).

$$
\frac{\Delta x}{3} \left( 1 + 4 + 2 + 4 + 2 + \cdots + 2 + 4 + 1 \right) = \frac{\Delta x}{3} \left( 1 + 1 + 4 \left( \frac{n}{2} \right) + 2 \left( \frac{n}{2} - 1 \right) \right) = n \Delta x \quad (\text{n even})
$$

Example:

## Example 1. Evaluate $\int_0^1 \frac{dx}{1 + x^2}$ using two methods (trapezoidal and Simpson’s) of numerical integration.

**By the trapezoidal rule:**

$$
\Delta x \left(\frac{1}{2} y_0 + y_1 + \frac{1}{2} y_2\right) = \frac{1}{2} \left(\frac{1}{2} (1) + \frac{4}{5} + \frac{1}{2}\right) = \frac{1}{2} \left(\frac{1}{2} + \frac{4}{5} + \frac{1}{2}\right) = 0.775
$$

**By Simpson’s rule:**

$$
\frac{\Delta x}{3} (y_0 + 4y_1 + y_2) = \frac{1/2}{3} \left(1 + 4\left(\frac{4}{5}\right) + \frac{1}{2}\right) = 0.78333...
$$

**Exact answer:**

$$
\int_0^1 \frac{1}{1 + x^2} dx = \tan^{-1} x \bigg|_0^1 = \tan^{-1} 1 - \tan^{-1} 0 = \frac{\pi}{4} - 0 = \frac{\pi}{4} \approx 0.785
$$

Roughly speaking, the error, abs(Simpson's-Exact), has order of magnitude $(\Delta x)^4$.
