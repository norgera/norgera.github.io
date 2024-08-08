---
order: 2003
layout: default
toc: true
---

# Integration Techniques

### Trigonometric Integrals and Substitution

# Trigonometric Integrals

How do you integrate an expression like $\int \sin^n x \cos^m x \, dx$? (n = 0, 1, 2, ... and m = 0, 1, 2, ...)

We already know that:

$$
\int \sin x \, dx = -\cos x + c \quad \text{and} \quad \int \cos x \, dx = \sin x + c
$$

## Method A

Suppose either $n$ or $m$ is odd.

## Example 1.

$$
\int \sin^3 x \cos^2 x \, dx
$$

Our strategy is to use $\sin^2 x + \cos^2 x = 1$ to rewrite our integral in the form:

$$
\int \sin^3 x \cos^2 x \, dx = \int f(\cos x) \sin x \, dx
$$

Indeed,

$$
\int \sin^3 x \cos^2 x \, dx = \int \sin^2 x \cos^2 x \sin x \, dx = \int (1 - \cos^2 x) \cos^2 x \sin x \, dx
$$

Next, use the substitution

$$
u = \cos x \quad \text{and} \quad du = -\sin x \, dx
$$

Then,

$$
\int (1 - \cos^2 x) \cos^2 x \sin x \, dx = \int (1 - u^2) u^2 (-du)
$$

$$
= \int (-u^2 + u^4) du = -\frac{1}{3} u^3 + \frac{1}{5} u^5 + c = -\frac{1}{3} \cos^3 x + \frac{1}{5} \cos^5 x + c
$$

## Example 2.

$$
\int \cos^3 x \, dx = \int f(\sin x) \cos x \, dx = \int (1 - \sin^2 x) \cos x \, dx
$$

Again, use a substitution, namely

$$
u = \sin x \quad \text{and} \quad du = \cos x \, dx
$$

$$
\int \cos^3 x \, dx = \int (1 - u^2) du = u - \frac{u^3}{3} + c = \sin x - \frac{\sin^3 x}{3} + c
$$


## Method B

This method requires both $m$ and $n$ to be even. It requires double-angle formulae such as

$$
\cos^2 x = \frac{1 + \cos 2x}{2}
$$

(Recall that $\cos 2x = \cos^2 x - \sin^2 x = \cos^2 x - (1 - \sin^2 x) = 2 \cos^2 x - 1$)
Integrating gets us

$$
\int \cos^2 x \, dx = \int \frac{1 + \cos 2x}{2} \, dx = \frac{x}{2} + \frac{\sin(2x)}{4} + c
$$

We follow a similar process for integrating $\sin^2 x$.

$$
\sin^2 x = \frac{1 - \cos(2x)}{2}
$$

$$
\int \sin^2 x \, dx = \int \frac{1 - \cos(2x)}{2} \, dx = \frac{x}{2} - \frac{\sin(2x)}{4} + c
$$

The full strategy for these types of problems is to keep applying Method B until you can apply Method A (when one of $m$ or $n$ is odd).

## Example 3.

$$
\int \sin^2 x \cos^2 x \, dx
$$

Applying Method B twice yields

$$
\int \left(\frac{1 - \cos 2x}{2}\right) \left(\frac{1 + \cos 2x}{2}\right) \, dx = \int \left(\frac{1}{4} - \frac{1}{4} \cos 2x\right) \, dx
$$

$$
= \int \left(\frac{1}{4} - \frac{1}{8}(1 + \cos 4x)\right) \, dx = \frac{1}{8} x - \frac{1}{32} \sin 4x + c
$$

There is a shortcut for Example 3. Because $\sin 2x = 2 \sin x \cos x$,

$$
\int \sin^2 x \cos^2 x \, dx = \int \left(\frac{1}{2} \sin 2x\right)^2 \, dx = \frac{1}{4} \int \frac{1 - \cos 4x}{2} \, dx = \text{same as above}
$$

The next family of trig integrals, which we’ll start today, but will not finish is:

$$
\int \sec^n x \tan^m x \, dx \quad \text{where} \, n = 0, 1, 2, \ldots \, \text{and} \, m = 0, 1, 2, \ldots
$$

Remember that

$$
\sec^2 x = 1 + \tan^2 x
$$

which we double-check by writing

$$
\frac{1}{\cos^2 x} = 1 + \frac{\sin^2 x}{\cos^2 x} = \frac{\cos^2 x + \sin^2 x}{\cos^2 x} = \sec^2 x
$$

$$
\int \sec^2 x \, dx = \tan x + c \quad \text{and} \quad \int \sec x \tan x \, dx = \sec x + c
$$


To calculate the integral of $\tan x$, write

$$
\int \tan x \, dx = \int \frac{\sin x}{\cos x} \, dx
$$

Let $u = \cos x$ and $du = -\sin x \, dx$, then

$$
\int \tan x \, dx = \int \frac{\sin x}{\cos x} \, dx = \int \frac{-du}{u} = -\ln(u) + c
$$

$$
\int \tan x \, dx = -\ln(\cos x) + c
$$

(We'll figure out what $\int \sec x \, dx$ is later.)

Now, let’s see what happens when you have an even power of secant. (The case $n$ even.)

$$
\int \sec^4 x \, dx = \int f(\tan x) \sec^2 x \, dx = \int (1 + \tan^2 x) \sec^2 x \, dx
$$

Make the following substitution:

$$
u = \tan x
$$

and

$$
du = \sec^2 x \, dx
$$

$$
\int \sec^4 x \, dx = \int (1 + u^2) \, du = u + \frac{u^3}{3} + c = \tan x + \frac{\tan^3 x}{3} + c
$$

What happens when you have an odd power of tan? (The case $m$ odd.)

$$
\int \tan^3 x \sec x \, dx = \int f(\sec x) \, d(\sec x)
$$

$$
= \int (\sec^2 x - 1) \sec x \, dx = \int (\sec^2 x - 1) \sec x \, dx
$$

(Remember that $\sec^2 x - 1 = \tan^2 x$.)

Use substitution:

$$
u = \sec x
$$

and

$$
du = \sec x \tan x \, dx
$$

Then,

$$
\int \tan^3 x \sec x \, dx = \int (u^2 - 1) \, du = \frac{u^3}{3} - u + c = \frac{\sec^3 x}{3} - \sec x + c
$$

We carry out one final case: $n = 1$, $m = 0$

$$
\int \sec x \, dx = \ln (\tan x + \sec x) + c
$$

We get the answer by "advanced guessing," i.e., "knowing the answer ahead of time."

$$
\int \sec x \, dx = \sec x \left( \frac{\sec x + \tan x}{\sec x + \tan x} \right) \, dx = \int \frac{\sec^2 x + \sec x \tan x}{\tan x + \sec x} \, dx
$$

Make the following substitutions:

$$
u = \tan x + \sec x
$$

and

$$
du = (\sec^2 x + \sec x \tan x) \, dx
$$

This gives

$$
\int \sec x \, dx = \int \frac{du}{u} = \ln(u) + c = \ln(\tan x + \sec x) + c
$$

Cases like $n = 3$, $m = 0$ or more generally $n$ odd and $m$ even are more complicated and will be discussed later.


## Trigonometric Substitution

Knowing how to evaluate all of these trigonometric integrals turns out to be useful for evaluating integrals involving square roots.

**Example 4.** $y = \sqrt{a^2 - x^2}$


We already know that the area of the top half of the disk is

$$
\int_{-a}^{a} \sqrt{a^2 - x^2} \, dx = \frac{\pi a^2}{2}
$$

To do so, you need to evaluate this integral:

$$
\int_{t=0}^{t=x} \sqrt{a^2 - t^2} \, dt
$$

Let $t = a \sin u$ and $dt = a \cos u \, du$. (Remember to change the limits of integration when you do a change of variables.) Then,

$$
a^2 - t^2 = a^2 - a^2 \sin^2 u = a^2 \cos^2 u; \quad \sqrt{a^2 - t^2} = a \cos u
$$

Plugging this into the integral gives us

$$
\int_0^x \sqrt{a^2 - t^2} \, dt = \int_0^{u = \sin^{-1} \left( \frac{x}{a} \right)} (a \cos u) a \cos u \, du = a^2 \int_{u=0}^{u = \sin^{-1} \left( \frac{x}{a} \right)} \cos^2 u \, du
$$

Here's how we calculated the new limits of integration:



$$
\int_0^x \sqrt{a^2 - t^2} \, dt = a^2 \int_0^{u = \sin^{-1} \left( \frac{x}{a} \right)} \cos^2 u \, du = a^2 \left( \frac{u}{2} + \frac{\sin 2u}{4} \right) \bigg|_0^{\sin^{-1} \left( \frac{x}{a} \right)}
$$

$$
= \frac{a^2 \sin^{-1} \left( \frac{x}{a} \right)}{2} + \left( \frac{a^2}{4} \right) \left( 2 \sin \left( \sin^{-1} \left( \frac{x}{a} \right) \right) \cos \left( \sin^{-1} \left( \frac{x}{a} \right) \right) \right)
$$

(Remember, $\sin 2u = 2 \sin u \cos u$.)



### Integration by Inverse Substitution; Completing the Square

## Trigonometric Substitutions, continued

Figure 1: Find area of shaded portion of semicircle.

$$
\int_{0}^{x} \sqrt{a^2 - t^2} \, dt
$$

$$
t = a \sin u; \quad dt = a \cos u \, du
$$

$$
a^2 - t^2 = a^2 - a^2 \sin^2 u = a^2 \cos^2 u \implies \sqrt{a^2 - t^2} = a \cos u \quad \text{(No more square root!)}
$$

Start: $x = -a \iff u = -\pi/2$; Finish: $x = a \iff u = \pi/2$

$$
\int \sqrt{a^2 - t^2} \, dt = \int a^2 \cos^2 u \, du = a^2 \int \frac{1 + \cos(2u)}{2} \, du = a^2 \left[ \frac{u}{2} + \frac{\sin(2u)}{4} \right] + c
$$

(Recall, $\cos^2 u = \frac{1 + \cos(2u)}{2}$).

We want to express this in terms of $x$, not $u$. When $t = 0$, $a \sin u = 0$, and therefore $u = 0$. When $t = x$, $a \sin u = x$, and therefore $u = \sin^{-1}(x/a)$.

$$
\frac{\sin(2u)}{4} = \frac{2 \sin u \cos u}{4} = \frac{1}{2} \sin u \cos u
$$

$$
\sin u = \sin (\sin^{-1}(x/a)) = \frac{x}{a}
$$
From the diagram, we see

$$
\cos u = \frac{\sqrt{a^2 - x^2}}{a}
$$

And finally,

$$
\int_{0}^{x} \sqrt{a^2 - t^2} \, dt = a^2 \left[ \frac{u}{4} + \frac{1}{2} \sin u \cos u \right] - 0 = a^2 \left[ \frac{\sin^{-1}(x/a)}{2} + \frac{1}{2} \left( \frac{x}{a} \right) \frac{\sqrt{a^2 - x^2}}{a} \right]
$$

$$
\int_{0}^{x} \sqrt{a^2 - t^2} \, dt = \frac{a^2}{2} \sin^{-1}(x/a) + \frac{1}{2} x \sqrt{a^2 - x^2}
$$

When the *answer* is this complicated, the route to getting there has to be rather complicated. There’s no way to avoid the complexity.

Let’s double-check this answer. The area of the upper shaded sector in Figure 3 is $\frac{1}{2} a^2 u$. The area of the lower shaded region, which is a triangle of height $\sqrt{a^2 - x^2}$ and base $x$, is $\frac{1}{2} x \sqrt{a^2 - x^2}$.


## Integrals Using Trigonometric Substitution and Identities

Here is a list of integrals that can be computed using a trigonometric substitution and identity:

$$
\int \frac{dx}{\sqrt{x^2 + 1}} \quad \text{with} \quad x = \tan u \quad \text{and} \quad \tan^2 u + 1 = \sec^2 u
$$

$$
\int \frac{dx}{\sqrt{x^2 - 1}} \quad \text{with} \quad x = \sec u \quad \text{and} \quad \sec^2 u - 1 = \tan^2 u
$$

$$
\int \frac{dx}{\sqrt{1 - x^2}} \quad \text{with} \quad x = \sin u \quad \text{and} \quad 1 - \sin^2 u = \cos^2 u
$$

Let's extend this further. How can we evaluate an integral like this?

$$
\int \frac{dx}{\sqrt{x^2 + 4x}}
$$

When you have a linear and a quadratic term under the square root, complete the square.

$$
x^2 + 4x = (\text{something})^2 \pm \text{constant}
$$

In this case,

$$
(x + 2)^2 = x^2 + 4x + 4 \implies x^2 + 4x = (x + 2)^2 - 4
$$

Now, we make a substitution.

$$
v = x + 2 \quad \text{and} \quad dv = dx
$$

Plugging these in gives us

$$
\int \frac{dx}{\sqrt{(x + 2)^2 - 4}} = \int \frac{dv}{\sqrt{v^2 - 4}}
$$

Now, let

$$
v = 2 \sec u \quad \text{and} \quad dv = 2 \sec u \tan u \, du
$$

$$
\int \frac{dv}{\sqrt{v^2 - 4}} = \int \frac{2 \sec u \tan u \, du}{2 \tan u} = \int \sec u \, du
$$

Remember that

$$
\int \sec u \, du = \ln|\sec u + \tan u| + c
$$

Finally, rewrite everything in terms of $x$.

$$
v = 2 \sec u \iff \cos u = \frac{2}{v}
$$

Set up a right triangle as in Figure 4. Express $\tan u$ in terms of $v$.

Just from looking at the triangle, we can read off

$$
\sec u = \frac{v}{2} \quad \text{and} \quad \tan u = \frac{\sqrt{v^2 - 4}}{2}
$$

$$
\int 2 \sec u \, du = \ln \left( \frac{v}{2} + \frac{\sqrt{v^2 - 4}}{2} \right) + c
$$

$$
= \ln (v + \sqrt{v^2 - 4}) - \ln 2 + c
$$

We can combine those last two terms into another constant, $\tilde{c}$.

$$
\int \frac{dx}{\sqrt{x^2 + 4x}} = \ln (x + 2 + \sqrt{x^2 + 4x}) + \tilde{c}
$$

Here’s a teaser for next time. In the next lecture, we’ll integrate all rational functions. By “rational functions,” we mean functions that are the ratios of polynomials:

$$
\frac{P(x)}{Q(x)}
$$

It’s easy to evaluate an expression like this:

$$
\int \left( \frac{1}{x - 1} + \frac{3}{x + 2} \right) dx = \ln |x - 1| + 3 \ln |x + 2| + c
$$

If we write it a bit differently, however, it becomes much harder to integrate:

$$
\frac{1}{x - 1} + \frac{3}{x + 2} = \frac{x + 2 + 3(x - 1)}{(x - 1)(x + 2)} = \frac{4x - 1}{x^2 + x - 2}
$$

$$
\int \frac{4x - 1}{x^2 + x - 2} \, dx = \text{???}
$$

### Partial Fractions

We continue the discussion we started last lecture about integrating rational functions. We defined a rational function as the ratio of two polynomials:

$$
\frac{P(x)}{Q(x)}
$$

We looked at the example

$$
\int \left[ \frac{1}{x - 1} + \frac{3}{x + 2} \right] dx = \ln |x - 1| + 3 \ln |x + 2| + c
$$

That same problem can be disguised:

$$
\frac{1}{x - 1} + \frac{3}{x + 2} = \frac{(x + 2) + 3(x - 1)}{(x - 1)(x + 2)} = \frac{4x - 1}{x^2 + x - 2}
$$

which leaves us to integrate this:

$$
\int \frac{4x - 1}{x^2 + x - 2} \, dx = \text{???}
$$

**Goal:** we want to figure out a systematic way to split $\frac{P(x)}{Q(x)}$ into simpler pieces.

First, we factor the denominator $Q(x)$.

$$
\frac{4x - 1}{x^2 + x - 2} = \frac{4x - 1}{(x - 1)(x + 2)} = \frac{A}{x - 1} + \frac{B}{x + 2}
$$

There’s a slow way to find $A$ and $B$. You can clear the denominator by multiplying through by $(x - 1)(x + 2)$:

$$
(4x - 1) = A(x + 2) + B(x - 1)
$$

From this, you find

$$
4 = A + B \quad \text{and} \quad -1 = 2A - B
$$

You can then solve these simultaneous linear equations for $A$ and $B$. This approach can take a very long time if you’re working with 3, 4, or more variables.

There’s a faster way, which we call the “cover-up method.” Multiply both sides by $(x - 1)$:

$$
\frac{4x - 1}{x + 2} = A + \frac{B}{x + 2}(x - 1)
$$

Set $x = 1$ to make the $B$ term drop out:

$$
\frac{4 - 1}{1 + 2} = A
$$

$$
A = 1
$$


The fastest way is to do this in your head or physically cover up the struck-through terms. For instance, to evaluate $B$:

$$
\frac{4x - 1}{(x - 1)(x + 2)} = \frac{A}{x - 1} + \frac{B}{x + 2}
$$

Implicitly, we are multiplying by $(x + 2)$ and setting $x = -2$. This gives us

$$
\frac{4(-2) - 1}{-2 - 1} = B \implies B = 3
$$

What we’ve described so far works when $Q(x)$ factors completely into distinct factors and the degree of $P$ is less than the degree of $Q$.

If the factors of $Q$ repeat, we use a slightly different approach. For example:

$$
\frac{x^2 + 2}{(x - 1)^2 (x + 2)} = \frac{A}{x - 1} + \frac{B}{(x - 1)^2} + \frac{C}{x + 2}
$$

Use the cover-up method on the highest degree term in $(x - 1)$.

$$
\frac{x^2 + 1}{x + 2} = B + [\text{stuff}](x - 1)^2 \implies \frac{1^2 + 2}{1 + 2} = B \implies B = 1
$$

Implicitly, we multiplied by $(x - 1)^2$, then took the limit as $x \to 1$.

$C$ can also be evaluated by the cover-up method. Set $x = -2$ to get

$$
\frac{x^2 + 2}{(x - 1)} = C + [\text{stuff}](x + 2) \implies \frac{(-2)^2 + 2}{(-2 - 1)^2} = C \implies C = \frac{2}{3}
$$

This yields

$$
\frac{x^2 + 2}{(x - 1)^2 (x + 2)} = \frac{A}{x - 1} + \frac{1}{(x - 1)^2} + \frac{2}{3} \frac{1}{x + 2}
$$

Cover-up can’t be used to evaluate $A$. Instead, plug in an easy value of $x: x = 0$.

$$
\frac{2}{(-1)^2 (2)} = \frac{A}{-1} + 1 + \frac{1}{3} \implies 1 = 1 + \frac{1}{3} - A \implies A = \frac{1}{3}
$$

Now we have a complete answer:

$$
\frac{x^2 + 2}{(x - 1)^2 (x + 2)} = \frac{1}{3(x - 1)} + \frac{1}{(x - 1)^2} + \frac{2}{3(x + 2)}
$$

Not all polynomials factor completely (without resorting to using complex numbers). For example:

$$
\frac{1}{(x^2 + 1)(x - 1)} = \frac{A_1}{x - 1} + \frac{B_1 x + C_1}{x^2 + 1}
$$

We find $A_1$, as usual, by the cover-up method.

$$
\frac{1}{1^2 + 1} = A_1 \implies A_1 = \frac{1}{2}
$$


Now, we have

$$
\frac{1}{(x^2 + 1)(x - 1)} = \frac{1/2}{x - 1} + \frac{B_1 x + C_1}{x^2 + 1}
$$

Plug in $x = 0$.

$$
\frac{1}{1(-1)} = -\frac{1}{2} + \frac{C_1}{1} \implies C_1 = -\frac{1}{2}
$$

Now, plug in any value other than $x = 0, 1$. For example, let’s use $x = -1$.

$$
\frac{1}{2(-2)} = \frac{1/2}{-2} + \frac{B_1(-1) - 1/2}{2} \implies 0 = -\frac{B_1 - 1/2}{2} \implies B_1 = -\frac{1}{2}
$$

Alternatively, you can multiply out to clear the denominators (not done here).

Let’s try to integrate this function, now.

$$
\int \frac{dx}{(x^2 + 1)(x - 1)} = \frac{1}{2} \int \frac{dx}{x - 1} - \frac{1}{2} \int \frac{x \, dx}{x^2 + 1} - \frac{1}{2} \int \frac{dx}{x^2 + 1}
$$

$$
= \frac{1}{2} \ln |x - 1| - \frac{1}{4} \ln |x^2 + 1| + \frac{1}{2} \tan^{-1} x + c
$$

What if we’re faced with something that looks like this?

$$
\int \frac{dx}{(x - 1)^{10}}
$$

This is actually quite simple to integrate:

$$
\int \frac{dx}{(x - 1)^{10}} = -\frac{1}{9} (x - 1)^{-9} + c
$$

What about this?

$$
\int \frac{dx}{(x^2 + 1)^{10}}
$$

Here, we would use trig substitution:

$$
x = \tan u \quad \text{and} \quad dx = \sec^2 u \, du
$$

and the trig identity

$$
\tan^2 u + 1 = \sec^2 u
$$

to get

$$
\int \frac{\sec^2 u \, du}{(\sec^2 u)^{10}} = \int \cos^{18} u \, du
$$

From here, we can evaluate this integral using the methods we introduced two lectures ago.


### Integration by Parts, Reduction Formulae

# Integration by Parts

Remember the product rule:

$$
(uv)' = u'v + uv'
$$

We can rewrite that as

$$
uv' = (uv)' - u'v
$$

Integrate this to get the formula for integration by parts:

$$
\int uv' \, dx = uv - \int u'v \, dx
$$

**Example 1.** $\int \tan^{-1} x \, dx$

At first, it’s not clear how integration by parts helps. Write

$$
\int \tan^{-1} x \, dx = \int \tan^{-1} x (1 \cdot dx) = \int uv' \, dx
$$

with

$$
u = \tan^{-1} x \quad \text{and} \quad v' = 1
$$

Therefore,

$$
v = x \quad \text{and} \quad u' = \frac{1}{1 + x^2}
$$

Plug all of these into the formula for integration by parts to get:

$$
\int \tan^{-1} x \, dx = \int uv' \, dx = (\tan^{-1} x) x - \int \frac{1}{1 + x^2} (x) \, dx
$$

$$
= x \tan^{-1} x - \frac{1}{2} \ln |1 + x^2| + c
$$

## Alternative Approach to Integration by Parts

As above, the product rule:

$$
(uv)' = u'v + uv'
$$

can be rewritten as

$$
uv' = (uv)' - u'v
$$

This time, let’s take the *definite* integral:

$$
\int_{a}^{b} uv' \, dx = \int_{a}^{b} (uv)' \, dx - \int_{a}^{b} u'v \, dx
$$


By the fundamental theorem of calculus, we can say

$$
\int_{a}^{b} uv' \, dx = uv \bigg|_{a}^{b} - \int_{a}^{b} u'v \, dx
$$

Another notation in the indefinite case is

$$
\int u \, dv = uv - \int v \, du
$$

This is the same because

$$
dv = v' \, dx \implies uv' \, dx = u \, dv \quad \text{and} \quad du = u' \, dx \implies u'v \, dx = v \, du
$$

**Example 2.** $\int (\ln x) \, dx$

$$
u = \ln x; \quad du = \frac{1}{x} \, dx \quad \text{and} \quad dv = dx; \quad v = x
$$

$$
\int (\ln x) \, dx = x \ln x - \int x \left( \frac{1}{x} \right) \, dx = x \ln x - \int dx = x \ln x - x + c
$$

We can also use “advanced guessing” to solve this problem. We know that the derivative of something equals $\ln x$:

$$
\frac{d}{dx} (??) = \ln x
$$

Let’s try

$$
\frac{d}{dx} (x \ln x) = \ln x + x \cdot \frac{1}{x} = \ln x + 1
$$

That’s almost it, but not quite. Let’s repair this guess to get:

$$
\frac{d}{dx} (x \ln x - x) = \ln x + 1 - 1 = \ln x
$$

## Reduction Formulas (Recurrence Formulas)

**Example 3.** $\int (\ln x)^n \, dx$

Let’s try:

$$
u = (\ln x)^n \implies u' = n (\ln x)^{n-1} \left( \frac{1}{x} \right)
$$

$$
v' = dx; \quad v = x
$$

Plugging these into the formula for integration by parts gives us:

$$
\int (\ln x)^n \, dx = x (\ln x)^n - \int n (\ln x)^{n-1} \left( \frac{1}{x} \right) x \, dx
$$

Keep repeating integration by parts to get the full formula: $n \to (n-1) \to (n-2) \to (n-3) \to \text{etc.}$

**Example 4.** $\int x^n e^x \, dx$

Let’s try:

$$
u = x^n \implies u' = nx^{n-1}; \quad v' = e^x \implies v = e^x
$$

Putting these into the integration by parts formula gives us:

$$
\int x^n e^x \, dx = x^n e^x - \int n x^{n-1} e^x \, dx
$$

Repeat, going from $n \to (n-1) \to (n-2) \to \text{etc.}$

**Bad news:** If you change the integrals just a little bit, they become impossible to evaluate:

$$
\int (\tan^{-1} x)^2 \, dx = \text{impossible}
$$

$$
\int \frac{e^x}{x} \, dx = \text{also impossible}
$$

**Good news:** When you can’t evaluate an integral, then

$$
\int_{1}^{2} \frac{e^x}{x} \, dx
$$

is an answer, not a question. This *is* the solution—you don’t have to integrate it!

The most important thing is setting up the integral! (Once you’ve done that, you can always evaluate it numerically on a computer.) So, why bother to evaluate integrals by hand, then? Because you often get families of related integrals, such as

$$
F(a) = \int_{1}^{\infty} \frac{e^x}{x^a} \, dx
$$

where you want to find how the answer depends on, say, $a$.

# Arc Length

This is very useful to know for 18.02 (multi-variable calculus).

In Figures 1 and 2, $s$ denotes arc length and $ds$ = the infinitesimal of arc length.
$$ds = \sqrt{(dx)^2 + (dy)^2} = \sqrt{1 + \left(\frac{dy}{dx}\right)^2} \, dx$$

Integrating with respect to $ds$ finds the length of a curve between two points.

To find the length of the curve between $P_0$ and $P_1$, evaluate:
$$\int_{P_0}^{P_1} ds$$

We want to integrate with respect to $x$, not $s$, so we do the same algebra as above to find $ds$ in terms of $dx$:

$$
\left( \frac{ds}{dx} \right)^2 = \frac{(dx)^2}{(dx)^2} + \frac{(dy)^2}{(dx)^2} = 1 + \left( \frac{dy}{dx} \right)^2
$$

Therefore,

$$\int_{P_0}^{P_1} ds = \int_a^b \sqrt{1 + \left(\frac{dy}{dx}\right)^2} \, dx$$

## Example 5: The Circle

$$
y = \sqrt{1 - x^2}
$$

$$
\frac{dy}{dx} = \frac{-2x}{\sqrt{1 - x^2}} \left( \frac{1}{2} \right) = \frac{-x}{\sqrt{1 - x^2}}
$$

$$
ds = \sqrt{1 + \left( \frac{-x}{\sqrt{1 - x^2}} \right)^2} \, dx
$$

$$
1 + \left( \frac{-x}{\sqrt{1 - x^2}} \right)^2 = 1 + \frac{x^2}{1 - x^2} = \frac{1 - x^2 + x^2}{1 - x^2} = \frac{1}{1 - x^2}
$$

$$
ds = \sqrt{\frac{1}{1 - x^2}} \, dx
$$

$$
s = \int_{0}^{a} \frac{dx}{\sqrt{1 - x^2}} = \sin^{-1} x \bigg|_{0}^{a} = \sin^{-1} a - \sin^{-1} 0 = \sin^{-1} a
$$

$$
\sin s = a
$$

# Parametric Equations

## Example 6

Given:
$$x = a \cos t$$
$$y = a \sin t$$

Is there a relationship between $x$ and $y$? Yes:
$$x^2 + y^2 = a^2 \cos^2 t + a^2 \sin^2 t = a^2$$

## Example 7: The Ellipse

Given:
$$x = 2 \sin t$$
$$y = \cos t$$

Then,
$$\frac{x^2}{4} + y^2 = 1$$

# Arc Length for Parametric Equations

## Example 6

$$dx = -a \sin t \, dt$$
$$dy = a \cos t \, dt$$
$$ds = \sqrt{(dx)^2 + (dy)^2} = \sqrt{(a \sin t)^2 + (a \cos t)^2} \, dt = a \, dt$$


### Parametric Equations, Arclength, Surface Area

## Arclength, Continued

**Example 1.** Consider this parametric equation:

$$
x = t^2 \quad y = t^3 \quad \text{for} \ 0 \leq t \leq 1
$$

$$
x^3 = (t^2)^3 = t^6; \quad y^2 = (t^3)^2 = t^6 \implies x^3 = y^2 \implies y = x^{2/3} \quad 0 \leq x \leq 1
$$


$$
(ds)^2 = (dx)^2 + (dy)^2
$$

$$
(ds)^2 = (2t \, dt)^2 + (3t^2 \, dt)^2 = (4t^2 + 9t^4)(dt)^2
$$

Length $= \int_{t=0}^{t=1} ds = \int_{0}^{1} \sqrt{4t^2 + 9t^4} \, dt = \int_{0}^{1} t \sqrt{4 + 9t^2} \, dt$

$$
= \left( \frac{(4 + 9t^2)^{3/2}}{27} \right) \bigg|_{0}^{1} = \frac{1}{27} \left( 13^{3/2} - 4^{3/2} \right)
$$

Even if you can’t evaluate the integral analytically, you can always use numerical methods.


## Surface Area (Surfaces of Revolution)

## Example 2: Revolve Example 1 ($x = t^2$, $y = t^3$, $0 \le t \le 1$) around the x-axis.

$$
\text{Area} = \int_{0}^{1} 2\pi y \, ds = \int_{0}^{1} 2\pi t^3 t\sqrt{4 + 9t^2} \, dt = 2\pi \int_{0}^{1} t^4 \sqrt{4 + 9t^2} \, dt
$$

Now, we discuss the method used to evaluate

$$
\int t^4 (4 + 9t^2)^{1/2} \, dt
$$

We’re going to ignore the factor of $2\pi$. You can reinsert it once you’re done evaluating the integral. We use the trigonometric substitution

$$
t = \frac{2}{3} \tan u; \quad dt = \frac{2}{3} \sec^2 u \, du; \quad \tan^2 u + 1 = \sec^2 u
$$

Putting all of this together gives us:

$$
\int t^4 (4 + 9t^2)^{1/2} \, dt = \int \left( \frac{2}{3} \tan u \right)^4 \left( 4 + 9 \left( \frac{4}{9} \tan^2 u \right) \right)^{1/2} \left( \frac{2}{3} \sec^2 u \, du \right)
$$

$$
= \left( \frac{2}{3} \right)^5 \int \tan^4 u (2 \sec u) (\sec^2 u \, du)
$$

This is a tan–sec integral. It’s doable, but it will take a long time for you to work the whole thing out.


## Example 3: Surface Area of the Unit Sphere

For the top half of the sphere,

$$
y = \sqrt{1 - x^2}
$$

We want to find the area of the spherical slice between $x = a$ and $x = b$. A spherical slice has area

$$
A = \int_{x=a}^{x=b} 2\pi y \, ds
$$

From last time,

$$
ds = \frac{dx}{\sqrt{1 - x^2}}
$$

Plugging that in yields a remarkably simple formula for $A$:

$$
A = \int_{a}^{b} 2\pi \sqrt{1 - x^2} \cdot \frac{dx}{\sqrt{1 - x^2}} = \int_{a}^{b} 2\pi \, dx = 2\pi (b - a)
$$

**Special Cases**

For a whole sphere, $a = -1$, and $b = 1$.

$$
2\pi (1 - (-1)) = 4\pi
$$

is the surface area of a unit sphere.

For a half sphere, $a = 0$ and $b = 1$.

$$
2\pi (1 - 0) = 2\pi
$$


### Polar Coordinates, Area in Polar Coordinates

## Polar Coordinates

In polar coordinates, we specify an object's position in terms of its distance $r$ from the origin and the angle $\theta$ that the ray from the origin to the point makes with respect to the x-axis.

## Example 1
What are the polar coordinates for the point specified by $(1, -1)$ in rectangular coordinates?

$$r = \sqrt{1^2 + (-1)^2} = \sqrt{2}$$
$$\theta = -\frac{\pi}{4}$$

In most cases, we use the convention that $r \ge 0$ and $0 \le \theta \le 2\pi$. Another common convention is to say $r \ge 0$ and $-\pi \le \theta \le \pi$.

## Conversion from Rectangular to Polar Coordinates
Regardless of whether we allow positive or negative values of $r$ or $\theta$, what is always true is:

$$x = r \cos \theta$$
$$y = r \sin \theta$$

For instance, $x = 1$, $y = -1$ can be represented by $r = -\sqrt{2}$, $\theta = \frac{3\pi}{4}$:

$$1 = x = -\sqrt{2} \cos \frac{3\pi}{4}$$
$$-1 = y = -\sqrt{2} \sin \frac{3\pi}{4}$$

## Example 2
Consider a circle of radius $a$ with its center at $x = a$, $y = 0$. We want to find an equation that relates $r$ to $\theta$.

The equation for the circle in rectangular coordinates is:

$$(x - a)^2 + y^2 = a^2$$

Start by plugging in:

$$x = r \cos \theta$$
$$y = r \sin \theta$$

This gives us:

$$(r \cos \theta - a)^2 + (r \sin \theta)^2 = a^2$$
$$r^2 \cos^2 \theta - 2ar \cos \theta + a^2 + r^2 \sin^2 \theta = a^2$$
$$r^2 - 2ar \cos \theta = 0$$
$$r = 2a \cos \theta$$

The range of $0 \le \theta \le \frac{\pi}{2}$ traces out the top half of the circle, while $-\frac{\pi}{2} \le \theta \le 0$ traces out the bottom half.

## Area in Polar Coordinates

Since radius is a function of angle ($r = f(\theta)$), we will integrate with respect to $\theta$.

$$\text{Area} = \int_{\theta_1}^{\theta_2} \frac{1}{2} r^2 \, d\theta$$

**Example 3.** $r = 2a \cos \theta$, and $-\frac{\pi}{2} < \theta < \frac{\pi}{2}$ (the circle in Figure 5).

$$
A = \text{area} = \int_{-\pi/2}^{\pi/2} \frac{1}{2} (2a \cos \theta)^2 d\theta = 2a^2 \int_{-\pi/2}^{\pi/2} \cos^2 \theta d\theta
$$

Because $\cos^2 \theta = \frac{1}{2} + \frac{1}{2} \cos 2\theta$, we can rewrite this as

$$
A = \text{area} = \int_{-\pi/2}^{\pi/2} (1 + \cos 2\theta) d\theta = a^2 \int_{-\pi/2}^{\pi/2} d\theta + a^2 \int_{-\pi/2}^{\pi/2} \cos 2\theta d\theta
$$

$$
= \pi a^2 + \frac{1}{2} \sin 2\theta \bigg|_{-\pi/2}^{\pi/2} = \pi a^2 + \frac{1}{2} [\sin \pi - \sin (-\pi)] = \pi a^2
$$

**Example 4:** Circle centered at the Origin.


$$
x = r \cos \theta; \ y = r \sin \theta
$$

$$
x^2 + y^2 = r^2 \cos^2 \theta + r^2 \sin^2 \theta = r^2
$$

The circle is $x^2 + y^2 = a^2$, so $r = a$ and

$$
x = a \cos \theta; \ y = a \sin \theta
$$

$$
A = \int_{0}^{2\pi} \frac{1}{2} a^2 d\theta = \frac{1}{2} a^2 \cdot 2\pi = \pi a^2
$$


**Example 5:** A Ray. In this case, $\theta = b$.

The range of $r$ is $0 \leq r < \infty$; $x = r \cos b$; $y = r \sin b$.

**Example 6:** Finding the Polar Formula, based on the Cartesian Formula


Consider, in Cartesian coordinates, the line $y = 1$. To find the polar coordinate equation, plug in $y = r \sin \theta$ and $x = r \cos \theta$ and solve for $r$.

$$
r \sin \theta = 1 \implies r = \frac{1}{\sin \theta} \quad \text{with} \quad 0 < \theta < \pi
$$


**Example 7:** Going back to $(x, y)$ coordinates from $r = f(\theta)$.

Start with

$$
r = \frac{1}{1 + \frac{1}{2} \sin \theta}.
$$

Hence,

$$
r + \frac{r}{2} \sin \theta = 1
$$

Plug in $r = \sqrt{x^2 + y^2}$:

$$
\sqrt{x^2 + y^2} + \frac{y}{2} = 1
$$

$$
\sqrt{x^2 + y^2} = 1 - \frac{y}{2} \implies x^2 + y^2 = \left(1 - \frac{y}{2}\right)^2 = 1 - y + \frac{y^2}{4}
$$

Finally,

$$
x^2 + \frac{3y^2}{4} + y = 1
$$

This is an equation for an ellipse, with the origin at one focus.

Useful conversion formulas:

$$
r = \sqrt{x^2 + y^2} \quad \text{and} \quad \theta = \tan^{-1} \left(\frac{y}{x}\right)
$$

**Example 8:** A Rose $r = \cos (2\theta)$

The graph looks a bit like a flower:


For the first “petal”

$$
-\frac{\pi}{4} < \theta < \frac{\pi}{4}
$$

Note: Next lecture is Lecture 34 as Lecture 33 is Exam 4.



### Indeterminate Forms - L’Hôpital’s Rule

# L'Hôpital's Rule

(Two correct spellings: "L'Hôpital" and "L'Hospital")

Sometimes, we run into indeterminate forms. These are things like

$$
\frac{0}{0}
$$

and

$$
\frac{\infty}{\infty}
$$

For instance, how do you deal with the following?

$$
\lim_{x \to 1} \frac{x^3 - 1}{x^2 - 1} = \frac{0}{0} \text{ ??}
$$

**Example 0.** One way of dealing with this is to use algebra to simplify things:

$$
\lim_{x \to 1} \frac{x^3 - 1}{x^2 - 1} = \lim_{x \to 1} \frac{(x - 1)(x^2 + x + 1)}{(x - 1)(x + 1)} = \lim_{x \to 1} \frac{x^2 + x + 1}{x + 1} = \frac{3}{2}
$$

In general, when $f(a) = g(a) = 0$,

$$
\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f(x) - f(a)}{x - a} \bigg/ \frac{g(x) - g(a)}{x - a} = \frac{f'(a)}{g'(a)}
$$

This is the easy version of L'Hôpital's rule:

$$
\lim_{x \to a} \frac{f(x)}{g(x)} = \frac{f'(a)}{g'(a)}
$$

**Note:** this only works when $g'(a) \neq 0$!

In example 0,

$$
f(x) = x^3 - 1; \quad g(x) = x^2 - 1
$$

$$
f'(x) = 3x^2; \quad g'(x) = 2x \implies f'(1) = 3; \ g'(1) = 2
$$

The limit is $f'(1) / g'(1) = 3 / 2$. Now, let's go on to the full L'Hôpital rule.

**Example 1.** Apply L'Hôpital's rule (a.k.a. "L'Hop") to

$$
\lim_{x \to 1} \frac{x^{15} - 1}{x^3 - 1}
$$

to get

$$
\lim_{x \to 1} \frac{x^{15} - 1}{x^3 - 1} = \lim_{x \to 1} \frac{15x^{14}}{3x^2} = \frac{15}{3} = 5
$$

Let’s compare this with the answer we’d get if we used linear approximation techniques, instead of L'Hôpital's rule:

$$
x^{15} - 1 \approx 15(x - 1)
$$

(Here, $f(x) = x^{15} - 1, a = 1, f(a) = b = 0, m = f'(1) = 15$, and $f(x) \approx m(x - a) + b.$)

Similarly,

$$
x^3 - 1 \approx 3(x - 1)
$$

Therefore,

$$
\frac{x^{15} - 1}{x^3 - 1} \approx \frac{15(x - 1)}{3(x - 1)} = 5
$$

**Example 2.** Apply L'Hop to

$$
\lim_{x \to 0} \frac{\sin 3x}{x}
$$

to get

$$
\lim_{x \to 0} \frac{\sin 3x}{x} = 3
$$

This is the same as

$$
\frac{d}{dx} \left( \sin (3x) \right) \bigg|_{x=0} = 3 \cos (3x) \bigg|_{x=0} = 3
$$

**Example 3.**

$$
\lim_{x \to \frac{\pi}{4}} \frac{\sin x - \cos x}{x - \frac{\pi}{4}} = \lim_{x \to \frac{\pi}{4}} \frac{\cos x + \sin x}{1} = \frac{1}{\sqrt{2}} + \frac{1}{\sqrt{2}} = \sqrt{2}
$$

$f(x) = \sin x - \cos x, \ f'(x) = \cos x + \sin x$

$$
f'\left( \frac{\pi}{4} \right) = \sqrt{2}
$$

**Remark:** Derivatives $\lim_{\Delta x \to 0} \frac{\Delta y}{\Delta x}$ are always a $\frac{0}{0}$ type of limit.

**Example 4.**

$$
\lim_{x \to 0} \frac{\cos x - 1}{x}
$$

Use L'Hôpital's rule to evaluate the limit:

$$
\lim_{x \to 0} \frac{\cos x - 1}{x} = \lim_{x \to 0} \frac{-\sin x}{1} = 0
$$


**Example 5.**

$$
\lim_{x \to 0} \frac{\cos x - 1}{x^2}
$$

$$
\lim_{x \to 0} \frac{\cos x - 1}{x^2} = \lim_{x \to 0} \frac{-\sin x}{2x} = \lim_{x \to 0} \frac{-\cos x}{2} = -\frac{1}{2}
$$

Just to check, let’s compare that answer to the one we would get if we used quadratic approximation techniques. Remember that:

$$
\cos x \approx 1 - \frac{1}{2} x^2 \quad (x \approx 0)
$$

$$
\frac{\cos x - 1}{x^2} \approx \frac{1 - \frac{1}{2} x^2 - 1}{x^2} = \frac{\left( -\frac{1}{2} \right) x^2}{x^2} = -\frac{1}{2}
$$

**Example 6.**

$$
\lim_{x \to 0} \frac{\sin x}{x^2}
$$

$$
\lim_{x \to 0} \frac{\sin x}{x^2} = \lim_{x \to 0} \frac{\cos x}{2x} \quad \text{By L'Hôpital's rule}
$$

If we apply L'Hôpital again, we get

$$
\lim_{x \to 0} \frac{-\sin x}{2} = 0
$$

But this doesn’t agree with what we get from taking the linear approximation:

$$
\frac{\sin x}{x^2} \approx \frac{x}{x^2} = \frac{1}{x} \to \infty \quad \text{as} \quad x \to 0^+
$$

We can clear up this seeming paradox by noting that

$$
\lim_{x \to 0} \frac{\cos x}{2x} = \frac{1}{0}
$$

The limit is not of the form $\frac{0}{0}$, which means L'Hôpital's rule cannot be used. The point is: look before you L'Hôp!

## More “interesting” cases that work.

It is also okay to use L'Hôpital's rule on limits of the form $\frac{\infty}{\infty}$, or if $x \to \infty$, or $x \to -\infty$. Let’s apply this to rates of growth. Which function goes to $\infty$ faster: $x$, $e^{ax}$, or $\ln x$?

**Example 7.** For $a > 0$,

$$
\lim_{x \to \infty} \frac{e^{ax}}{x} = \lim_{x \to \infty} \frac{ae^{ax}}{1} = +\infty
$$

So $e^{ax}$ grows faster than $x$ (for $a > 0$).

**Example 8.**

$$
\lim_{x \to \infty} \frac{e^{ax}}{x^{10}} = \lim_{x \to \infty} \frac{ae^{ax}}{10x^9} = \lim_{x \to \infty} \frac{c^2 e^{ax}}{10 \cdot 9x^8} = \cdots = \lim_{x \to \infty} \frac{a^{10} e^{ax}}{10!} = \infty
$$


You can apply L'Hôpital's rule ten times. There's a better way, though:

$$
\lim_{x \to \infty} \left( \frac{e^{ax}}{x^{10}} \right)^{1/10} = \frac{e^{ax/10}}{x} = \lim_{x \to \infty} \frac{e^{ax}}{x^{10}} = \lim_{x \to \infty} \left( \frac{e^{ax/10}}{x} \right)^{10} = \infty^{10} = \infty
$$

**Example 9.**

$$
\lim_{x \to \infty} \frac{\ln x}{x^{1/3}} = \lim_{x \to \infty} \frac{1/x}{3x^{-2/3}} = \lim_{x \to \infty} 3x^{-1/3} = 0
$$

Combining the preceding examples, $\ln x \ll x^{1/3} \ll x \ll x^{10} \ll e^{ax}$  ($x \to \infty, a > 0$).

L'Hôpital's rule applies to $\frac{0}{0}$ and $\frac{\infty}{\infty}$. But, we sometimes face other indeterminate limits, such as $1^{\infty}, 0^{0}$, and $0 \cdot \infty$. Use algebra, exponentials, and logarithms to put these in L'Hôpital form.

**Example 10.**

$$
\lim_{x \to 0} x^x \text{ for } x > 0.
$$

Because the exponent is a variable, use base $e$:

$$
\lim_{x \to 0} x^x = \lim_{x \to 0} e^{x \ln x}
$$

First, we need to evaluate the limit of the exponent

$$
\lim_{x \to 0} x \ln x
$$

This limit has the form $0 \cdot \infty$. We want to put it in the form $\frac{0}{0}$ or $\frac{\infty}{\infty}$.

Let's try to put it into the $\frac{0}{0}$ form:

$$
\frac{x}{1 / \ln x}
$$

We don't know how to find $\lim_{x \to 0} \frac{1}{\ln x}$, though, so that approach isn't helpful.

Instead, let's try to put it into the $\frac{\infty}{\infty}$ form:

$$
\frac{\ln x}{1 / x}
$$

Using L'Hôpital's rule, we find

$$
\lim_{x \to 0} x \ln x = \lim_{x \to 0} \frac{\ln x}{1 / x} = \lim_{x \to 0} \frac{1 / x}{-1 / x^2} = \lim_{x \to 0} (-x) = 0
$$

Therefore,

$$
\lim_{x \to 0} x^x = \lim_{x \to 0} e^{x \ln x} = \lim_{x \to 0} e^0 = 1
$$



### Improper Integrals
 
An improper integral, defined by

$$
\int_{a}^{\infty} f(x) dx = \lim_{M \to \infty} \int_{a}^{M} f(x) dx
$$

is said to converge if the limit exists (diverges if the limit does not exist).

**Example 1.**

$$
\int_{0}^{\infty} e^{-kx} dx = 1/k \quad (k > 0)
$$

$$
\int_{0}^{M} e^{-kx} dx = (-1/k) e^{-kx} \bigg|_{0}^{M} = (1/k) (1 - e^{-kM})
$$

Taking the limit as $M \to \infty$, we find $e^{-kM} \to 0$ and

$$
\int_{0}^{\infty} e^{-kx} dx = 1/k
$$

We rewrite this calculation more informally as follows,

$$
\int_{0}^{\infty} e^{-kx} dx = (-1/k) e^{-kx} \bigg|_{0}^{\infty} = (1/k) (1 - e^{-k\infty}) = 1/k \quad (\text{since } k > 0)
$$

Note that the integral over the infinite interval $\int_{0}^{\infty} e^{-kx} dx = 1/k$ has an easier formula than the corresponding finite integral $\int_{0}^{M} e^{-kx} dx = (1/k) (1 - e^{-kM})$. As a practical matter, for large $M$, the term $e^{-kM}$ is negligible, so even the simpler formula $1/k$ serves as a good approximation to the finite integral. Infinite integrals are often easier than finite ones, just as infinitesimals and derivatives are easier than difference quotients.

**Application:** Replace $x$ by $t =$ time in seconds in Example 1. $R =$ rate of decay $=$ number of atoms that decay per second at time 0. At later times $t > 0$ the decay rate is $Re^{-kt}$ (smaller by an exponential factor $e^{-kt}$).

Eventually (over time $0 \leq t < \infty$) every atom decays. So the total number of atoms $N$ is calculated using the formula we found in Example 1,

$$
N = \int_{0}^{\infty} Re^{-kt} dt = R/k
$$

The half life $H$ of a radioactive element is the time $H$ at which the decay rate is half what it was at the start. Thus

$$
e^{-kH} = 1/2 \implies -kH = \ln(1/2) \implies k = (\ln 2)/H
$$

Hence

$$
R = Nk = N (\ln 2)/H
$$

Let us illustrate with Polonium 210, which has been in the news lately. The half life is 138 days or

$$
H = (138 \text{ days}) (24 \text{ hr/day}) (60^2 \text{ sec/hr}) = (138) (24) (60^2) \text{ seconds}
$$

Using this value of $H$, we find that one gram of Polonium 210 emits $(1 \text{ gram}) (6 \times 10^{23} / 210 \text{ atoms/gram}) (\ln 2) / H = 1.6610^{14} \text{ decays/sec} \approx 4500 \text{ curies}$.

At 5.3 MeV per decay, Polonium gives off 140 watts of radioactive energy per gram (white hot). Polonium emits alpha rays, which are blocked by skin but when ingested are 20 times more dangerous than gamma and X-rays. The lethal dose, when ingested, is about $10^{-7}$ grams.



**Example 2.**

$$
\int_{0}^{\infty} \frac{dx}{1 + x^2} = \pi / 2.
$$

We calculate,

$$
\int_{0}^{M} \frac{dx}{1 + x^2} = \tan^{-1} x \bigg|_{0}^{M} = \tan^{-1} M \to \pi / 2
$$

as $M \to \infty$. (If $\theta = \tan^{-1} M$ then $\theta \to \pi / 2$ as $M \to \infty$.)


**Example 3.**

$$
\int_{0}^{\infty} e^{-x^2} dx = \sqrt{\pi}/2
$$

Recall that we already computed this improper integral (by computing a volume in two ways, slices and the method of shells). This shows vividly that a finite integral can be harder to understand than its infinite counterpart:

$$
\int_{0}^{M} e^{-x^2} dx
$$

can only be evaluated numerically. It has no elementary formula. By contrast, we found an explicit formula when $M = \infty$.

**Example 4.**

$$
\int_{1}^{\infty} \frac{dx}{x}
$$

$$
\int_{1}^{M} \frac{dx}{x} = \ln x \bigg|_{1}^{M} = \ln M - \ln 1 = \ln M \to \infty
$$

as $M \to \infty$. This improper integral is infinite (called divergent or not convergent).

**Example 5.**

$$
\int_{1}^{\infty} \frac{dx}{x^p} \quad (p > 1)
$$

$$
\int_{1}^{M} \frac{dx}{x^p} = \left( \frac{1}{1-p} \right) x^{1-p} \bigg|_{1}^{M} = \left( \frac{1}{1-p} \right) (M^{1-p} - 1) \to \frac{1}{p-1}
$$

as $M \to \infty$ because $1 - p < 0$. Thus, this integral is convergent.

**Example 6.**

$$
\int_{1}^{\infty} \frac{dx}{x^p} \quad (0 < p < 1)
$$

This is very similar to the previous example, but diverges

$$
\int_{1}^{M} \frac{dx}{x^p} = \left( \frac{1}{1-p} \right) x^{1-p} \bigg|_{1}^{M} = \left( \frac{1}{1-p} \right) (M^{1-p} - 1) \to \infty
$$

as $M \to \infty$ because $1 - p > 0$.

## Determining Divergence and Convergence
To decide whether an integral converges or diverges, compare it to a simpler integral that can be evaluated.

**Example 7.**

$$
\int_{0}^{\infty} \frac{dx}{\sqrt{x^3 + 1}}
$$

It is natural to try the comparison

$$
\frac{1}{\sqrt{x^3 + 1}} \leq \frac{1}{x^{3/2}}
$$

But the area under $x^{-3/2}$ on the interval $0 < x < \infty$,

$$
\int_{0}^{\infty} \frac{dx}{x^{3/2}}
$$

turns out to be infinite because of the infinite behavior as $x \to 0$. We can rescue this comparison by excluding an interval near 0.

$$
\int_{0}^{\infty} \frac{dx}{\sqrt{x^3 + 1}} = \int_{0}^{1} \frac{dx}{\sqrt{x^3 + 1}} + \int_{1}^{\infty} \frac{dx}{\sqrt{x^3 + 1}}
$$

The integral on $0 < x < 1$ is a finite integral and the second integral now works well with comparison,

$$
\int_{1}^{\infty} \frac{dx}{\sqrt{x^3 + 1}} \leq \int_{1}^{\infty} \frac{dx}{x^{3/2}} < \infty
$$

because $3/2 > 1$.

**Example 8.**

$$
\int_{0}^{\infty} e^{-x^3} dx
$$

For $x \geq 1$, $x^3 \geq x$, so

$$
\int_{1}^{\infty} e^{-x^3} dx \leq \int_{1}^{\infty} e^{-x} dx = 1 < \infty
$$

Thus the full integral from $0 \leq x < \infty$ of $e^{-x^3}$ converges as well. We can ignore the interval $0 \leq x \leq 1$ because it has finite length and $e^{-x^3}$ does not tend to infinity there.

**Limit comparison:**

Suppose that $0 \leq f(x)$ and $\lim_{x \to \infty} \frac{f(x)}{g(x)} \leq 1$. Then $f(x) \leq 2g(x)$ for $x \geq a$ (some large $a$).

Hence

$$
\int_{a}^{\infty} f(x) \, dx \leq 2 \int_{a}^{\infty} g(x) \, dx.
$$

**Example 9.**

$$
\int_{0}^{\infty} \frac{(x + 10) \, dx}{x^2 + 1}
$$

The limiting behavior as $x \to \infty$ is

$$
\frac{(x + 10) \, dx}{x^2 + 1} \approx \frac{x}{x^2} = \frac{1}{x}
$$

Since

$$
\int_{0}^{\infty} \frac{dx}{x} = \infty,
$$

the integral

$$
\int_{0}^{\infty} \frac{(x + 10) \, dx}{x^2 + 1}
$$

also diverges.


**Example 10 (from PS8).**

$$
\int_{0}^{\infty} x^n e^{-x} \, dx
$$

This converges. To carry out a convenient comparison requires some experience with growth rates of functions.

$$
x^n \ll e^x \text{ not enough. Instead use } \frac{x^n}{e^{x/2}} \to 0 \text{ (true by L'Hop). It follows that}
$$

$$
x^n \ll e^{x/2} \implies x^n e^{-x} \ll e^{x/2} e^{-x} = e^{-x/2}
$$

Now by limit comparison, since

$$
\int_{0}^{\infty} e^{-x/2} dx
$$

converges, so does our integral. You will deal with this integral on the problem set.

**Improper Integrals of the Second Type**

$$
\int_{0}^{1} \frac{dx}{\sqrt{x}}
$$

We know that $\frac{1}{\sqrt{x}} \to \infty$ as $x \to 0$.

$$
\int_{0}^{1} \frac{dx}{\sqrt{x}} = \lim_{a \to 0^+} \int_{a}^{1} x^{-1/2} dx
$$

$$
\int_{a}^{1} x^{-1/2} dx = 2x^{1/2} \bigg|_{a}^{1} = 2 - 2a^{1/2}
$$

As $a \to 0$, $2a^{1/2} \to 0$. So,

$$
\int_{0}^{1} x^{-1/2} dx = 2
$$

Similarly,

$$
\int_{0}^{1} x^{-p} dx = \frac{1}{-p + 1}
$$

for all $p < 1$. For $p = \frac{1}{2}$,

$$
\frac{1}{\left( -\frac{1}{2} \right) + 1} = 2
$$

However, for $p \geq 1$, the integral diverges.


### Infinite Series and Convergence Tests

## Infinite Series

## Geometric Series
A geometric series looks like

$$1 + a + a^2 + a^3 + \ldots = S$$

There’s a trick to evaluate this: multiply both sides by $a$:

$$a + a^2 + a^3 + \ldots = aS$$

Subtracting,

$$(1 + a + a^2 + a^3 + \ldots) - (a + a^2 + a^3 + \ldots) = S - aS$$

In other words,

$$1 = S - aS \implies 1 = (1 - a)S \implies S = \frac{1}{1 - a}$$

This only works when $|a| < 1$, i.e. $-1 < a < 1$.

## Notation
Here is some notation that’s useful for dealing with series or sums. An infinite sum is written:

$$\sum_{k=0}^{\infty} a_k = a_0 + a_1 + a_2 + \ldots$$

The finite sum

$$S_n = \sum_{k=0}^{n} a_k = a_0 + \ldots + a_n$$

is called the "nth partial sum" of the infinite series.

## Definition
$$\sum_{k=0}^{\infty} a_k = s$$

means the same thing as

$$\lim_{n \to \infty} S_n = s, \text{ where } S_n = \sum_{k=0}^{n} a_k$$

We say the series converges to $s$, if the limit exists and is finite. The importance of convergence is illustrated here by the example of the geometric series. If $a = 1$, $S = 1 + 1 + 1 + \ldots = \infty$. But

$$S - aS = 1 \text{ or } \infty - \infty = 1$$

does not make sense and is not usable!

## Example: Geometric Series
If $a = 1$:

$$S = 1 + 1 + 1 + \ldots = \infty$$

If $a = -1$:

$$S = 1 - 1 + 1 - 1 + \ldots = \frac{1}{1 - (-1)} = \frac{1}{2}$$

## Harmonic Series

$$\sum_{n=1}^{\infty} \frac{1}{n}$$

We can use integrals to decide if this type of series converges. First, turn the sum into an integral:

$$\sum_{n=1}^{\infty} \frac{1}{n^p} \sim \int_{1}^{\infty} \frac{dx}{x^p}$$

If that improper integral evaluates to a finite number, the series converges.

Consider a positive, decreasing function $f(x) > 0$. (For example, $f(x) = \frac{1}{x^p}$)

$$
\left| \sum_{n=1}^{\infty} f(n) - \int_{1}^{\infty} f(x) \, dx \right| < f(1)
$$

So, either both of the terms converge, or they both diverge. This is what we mean when we say

$$
\sum_{n=1}^{\infty} \frac{1}{n^p} \sim \int_{1}^{\infty} \frac{dx}{x^p}
$$

Therefore, $\sum_{n=1}^{\infty} \frac{1}{n^p}$ diverges for $p \leq 1$ and converges for $p > 1$.

Lots of fudge room: in comparison.

$$
\sum_{n=1}^{\infty} \frac{1}{\sqrt{n^2 + 10}}
$$

diverges, because

$$
\frac{1}{\sqrt{n^2 + 10}} \sim \frac{1}{(n^2)^{1/2}} = \frac{1}{n}
$$

**Limit comparison:**

If $f(x) \sim g(x)$ as $x \to \infty$, then $\sum f(n)$ and $\sum g(n)$ either both converge or both diverge.

What, exactly, does $f(x) \sim g(x)$ mean? It means that

$$
\lim_{x \to \infty} \frac{f(x)}{g(x)} = c
$$

where $0 < c < \infty$.

Let's check: does the following series converge?

$$
\sum_{n=1}^{\infty} \frac{n}{\sqrt{n^5 - 10}}
$$

$$
\frac{n}{\sqrt{n^5 - 10}} \sim \frac{n}{\sqrt{n^5}} = n^{-3/2} = \frac{1}{n^{3/2}}
$$

Since $\frac{3}{2} > 1$, this series does converge.

## Playing with Blocks

At this point in the lecture, the professor brings out several long, identical building blocks. Do you think it’s possible to stack the blocks like this?

*Top block is farther out than the bottom block.*

In order for this to work, you want the collective center of mass of the upper blocks always to be over the base block. The professor successfully builds the stack. Is it possible to extend this stack clear across the room? The best strategy is to build from the top block down.

Let $C_0$ be the left end of the first (top) block.
Let $C_1$ be the center of mass of the first block (top block).
Put the second block as far to the right as possible, namely, so that its left end is at $C_1$.

Let $C_2$ be the center of mass of the top two blocks. The strategy is to put the left end of the next block underneath the center of mass of all the previous ones combined.

$$C_0 = 0$$
$$C_1 = 1$$
$$C_2 = 1 + \frac{1}{2}$$
$$C_{n+1} = \frac{nC_n + 1(C_{n+1})}{n+1} = C_n + \frac{1}{n+1}$$

$$C_3 = 1 + \frac{1}{2} + \frac{1}{3}$$
$$C_4 = 1 + \frac{1}{2} + \frac{1}{3} + \frac{1}{4}$$
$$C_5 = 1 + \frac{1}{2} + \frac{1}{3} + \frac{1}{4} + \frac{1}{5} > 2$$

So yes, you can extend this stack as far (horizontally) as you want — provided that you have enough blocks. Another way of looking at this problem is to say

$$\sum_{n=1}^{N} \frac{1}{n} = S_N$$

Recall the Riemann Sum estimation from the beginning of this lecture:

$$\ln N < S_N < (\ln N) + 1$$

As $N \to \infty$, $S_N \to \infty$.

How high would this stack of blocks be if we extended it across the two lab tables here at the front of the lecture hall? The blocks are 30 cm by 3 cm. One lab table is 6.5 blocks, or 13 units, long. Two tables are 26 units long. There will be 26 - 2 = 24 units of overhang in the stack.

If $\ln N = 24$, then $N = e^{24}$.

Height = $3 \text{ cm} \cdot e^{24} \approx 8 \times 10^8 \text{ m}$

That height is roughly twice the distance to the moon. If you want the stack to span this room (~30 ft.), it would have to be $10^{26}$ meters high. That’s about the diameter of the observable universe.

### Taylor Series

## General Power Series

## What is cos x anyway?
Recall: geometric series
$$\frac{1}{1-a} = 1 + a + a^2 + a^3 + \cdots \quad \text{for} \ |a| < 1$$

A general power series is an infinite sum:
$$f(x) = a_0 + a_1 x + a_2 x^2 + a_3 x^3 + \cdots$$
This represents $f$ when $|x| < R$, where $R$ is the radius of convergence. This means that for $|x| < R$, $|a_n x^n| \to 0$ as $n \to \infty$ (“geometrically”). On the other hand, if $|x| > R$, then $|a_n x^n|$ does not tend to 0. For example, in the case of the geometric series, if $|a| = \frac{1}{2}$, then $|a^n| = \left(\frac{1}{2}\right)^n$. Since the higher-order terms get increasingly small if $|a| < 1$, the "tail" of the series is negligible.

## Example 1
If $a = -1$, $|a^n| = 1$ does not tend to 0.
$$1 - 1 + 1 - 1 + \cdots$$
The sum bounces back and forth between 0 and 1. Therefore, it does not approach 0. Outside the interval $-1 < a < 1$, the series diverges.

## Basic Tools

## Substitution/Algebra
$$\frac{1}{1-x} = 1 + x + x^2 + \cdots$$

## Example 2
If $x = -u$,
$$\frac{1}{1+u} = 1 - u + u^2 - u^3 + \cdots$$

## Example 3
If $x = -v^2$,
$$\frac{1}{1+v^2} = 1 - v^2 + v^4 - v^6 + \cdots$$

## Example 4
$$\left( \frac{1}{1-x} \right)^2 = (1 + x + x^2 + \cdots)(1 + x + x^2 + \cdots)$$
Term-by-term multiplication gives:
$$1 + 2x + 3x^2 + \cdots$$

Differentiation (term by term)

$$
\frac{d}{dx} \left[ \frac{1}{1-x} \right] = \frac{d}{dx} \left[ 1 + x + x^2 + x^3 + \cdots \right]
$$

$$
\frac{1}{(1-x)^2} = 0 + 1 + 2x + 3x^2 + \cdots \quad \text{where 1 is } a_0, \ 2 \text{ is } a_1 \text{ and 3 is } a_2
$$

Same answer as Example 4, but using a new method.

Integration (term by term)

$$
\int f(x) \, dx = c + \left( a_0 + \frac{a_1}{2} x^2 + \frac{a_2}{3} x^3 + \cdots \right)
$$

where

$$
f(x) = a_0 + a_1 x + a_2 x^2 + \cdots
$$

Example 5. 
$$
\int \frac{du}{1+u}
$$

$$
\left( \frac{1}{1+u} = 1 - u + u^2 - u^3 + \cdots \right)
$$

$$
\int \frac{du}{1+u} = c + u - \frac{u^2}{2} + \frac{u^3}{3} - \frac{u^4}{4} + \cdots
$$

$$
\ln(1+x) = \int_0^x \frac{du}{1+u} = x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \cdots
$$

So now we know the series expansion of $\ln(1 + x)$.


## Example 6
$$
\frac{1}{1+v^2} = 1 - v^2 + v^4 - v^6 + \cdots
$$

$$
\int \frac{dv}{1+v^2} = c + \left( v - \frac{v^3}{3} + \frac{v^5}{5} - \frac{v^7}{7} + \cdots \right)
$$

$$
\tan^{-1} x = \int_0^x \frac{dv}{1+v^2} = x - \frac{x^3}{3} + \frac{x^5}{5} - \frac{x^7}{7} + \cdots
$$



# Taylor’s Series and Taylor’s Formula

If $f(x) = a_0 + a_1 x + a_2 x^2 + \cdots$, we want to figure out what all these coefficients are.

Differentiating,
$$f'(x) = a_1 + 2a_2 x + 3a_3 x^2 + \cdots$$
$$f''(x) = (2)(1) a_2 + (3)(2) a_3 x + (4)(3) a_4 x^2 + \cdots$$
$$f'''(x) = (3)(2)(1) a_3 + (4)(3)(2) a_4 x + \cdots$$

Let's plug in $x = 0$ to all of these equations.
$$f(0) = a_0$$
$$f'(0) = a_1$$
$$f''(0) = 2a_2$$
$$f'''(0) = (3!) a_3$$

Taylor’s Formula tells us what the coefficients are:
$$f^{(n)}(0) = (n!) a_n$$

Remember, $n! = n(n-1)(n-2) \cdots (2)(1)$ and $0! = 1$. Coefficients $a_n$ are given by:
$$a_n = \frac{f^{(n)}(0)}{n!}$$

## Example 7: $f(x) = e^x$
$$f'(x) = e^x$$
$$f''(x) = e^x$$
$$f^{(n)}(x) = e^x$$
$$f^{(n)}(0) = e^0 = 1$$

Therefore, by Taylor’s Formula,
$$a_n = \frac{1}{n!}$$
and
$$e^x = \frac{1}{0!} + \frac{x}{1!} + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots$$
Or in compact form,
$$e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!}$$

Now, we can calculate $e$ to any accuracy:
$$e = 1 + 1 + \frac{1}{2!} + \frac{1}{3!} + \frac{1}{4!} + \frac{1}{5!} + \cdots$$

## Example 8: $f(x) = \cos x$
$$f'(x) = -\sin x$$
$$f''(x) = -\cos x$$
$$f'''(x) = \sin x$$
$$f^{(4)}(x) = \cos x$$

$$f(0) = \cos(0) = 1$$
$$f'(0) = -\sin(0) = 0$$
$$f''(0) = -\cos(0) = -1$$
$$f'''(0) = \sin(0) = 0$$

Only even coefficients are non-zero, and their signs alternate. Therefore,
$$\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \cdots$$

Note: $\cos(x)$ is an even function. So is this power series — as it contains only even powers of $x$.

There are two ways of finding the Taylor Series for $\sin x$. Take the derivative of $\cos x$, or use Taylor’s formula. We will take the derivative:

$$
-\sin x = \frac{d}{dx} \cos x = 0 - 2 \left(\frac{1}{2}\right)x + \frac{4}{4!}x^3 - \frac{6}{6!}x^5 + \frac{8}{8!}x^7 + \cdots 
$$

$$
= -x + \frac{x^3}{3!} - \frac{x^5}{5!} + \frac{x^7}{7!} + \cdots
$$

$$
\boxed{\sin(x) = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \cdots}
$$

Compare with quadratic approximation from earlier in the term:
$$\cos x \approx 1 - \frac{1}{2} x^2$$

$$\sin x \approx x$$

We can also write:

$$ 
\cos x = \sum_{k=0}^{\infty} \frac{x^{2k}}{(2k)!} (-1)^k = (-1)^0 \frac{x^0}{0!} + (-1)^2 \frac{x^2}{2!} + \cdots = 1 - \frac{1}{2} x^2 + \cdots 
$$

$$ 
\sin x = \sum_{k=0}^{\infty} \frac{x^{2k+1}}{(2k+1)!} (-1)^k \quad \text{where} \quad n = 2k + 1 
$$


## Example 9: Binomial Expansion
$$f(x) = (1 + x)^a$$

$$
(1 + x)^a = 1 + \frac{a}{1}x + \frac{a(a - 1)}{2!}x^2 + \frac{a(a - 1)(a - 2)}{3!}x^3 + \cdots

$$

## Taylor Series with Another Base Point

A Taylor series with its base point at $a$ (instead of at 0) looks like:

$$f(x) = f(b) + f'(b)(x - b) + \frac{f''(b)}{2} (x - b)^2 + \frac{f^{(3)}(b)}{3!} (x - b)^3 + \ldots$$

Taylor series for $\sqrt{x}$. It’s a bad idea to expand using $b = 0$ because $\sqrt{x}$ is not differentiable at $x = 0$. Instead use $b = 1$.

$$x^{1/2} = 1 + \frac{1}{2}(x - 1) + \frac{\left(\frac{1}{2}\right) \left(\frac{1}{2} - 1\right)}{2!}(x - 1)^2 + \ldots
$$
