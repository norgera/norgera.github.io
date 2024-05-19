---
order: 2001
layout: default
toc: true
---

# Applications of Differentiation

Today, we’ll be using differentiation to make approximations.

### Linear and Quadratic Approximation

$$ y = f(x) $$
$$ y = b + a(x - x_0) $$

where:
- $b = f(x_0)$
- $a = f'(x_0)$

The tangent line approximates $f(x)$. It gives a good approximation near the tangent point $x_0$. As you move away from $x_0$, however, the approximation grows less accurate.

$$f(x) \approx f(x_0) + f'(x_0)(x - x_0)$$

**Example 1:**
$$f(x) = \ln x, \quad x_0 = 1$$

$$f(1) = \ln 1 = 0$$
$$f'(1) = \left. \frac{1}{x} \right|_{x=1} = 1$$

Change the basepoint:
$$\text{Basepoint } u_0 = x_0 - 1 = 0$$

$$\ln x \approx f(1) + f'(1)(x - 1) = 0 + 1 \cdot (x - 1) = x - 1$$

$$x = 1 + u \quad \Rightarrow \quad u = x - 1$$

$$\ln(1 + u) \approx u$$

## Basic List of Linear Approximations

In this list, we always use base point $x_0$ = 0 and assume that abs(x) < < 1.

1. $\sin x \approx x$ (if $x \approx 0$)
2. $\cos x \approx 1$ (if $x \approx 0$)
3. $e^x \approx 1 + x$ (if $x \approx 0$)
4. $\ln(1 + x) \approx x$ (if $x \approx 0$)
5. $(1 + x)^r \approx 1 + rx$ (if $x \approx 0$)

**Proof of 1:**
Take $f(x) = \sin x$, then $f'(x) = \cos x$ and $f(0) = 0$

$$f'(0) = 1$$
$$f(x) \approx f(0) + f'(0)(x - 0) = 0 + 1 \cdot x = x$$

So using basepoint $x_0 = 0$, $f(x) = x$.

The proofs of 2 and 3 are similar. We already proved 4 above.

**Proof of 5:**

$$f(x) = (1 + x)^r$$
$$f(0) = 1$$

$$f'(0) = \left. \frac{d}{dx} (1 + x)^r \right|_{x=0} = r(1 + x)^{r-1} \bigg|_{x=0} = r$$

$$f(x) = f(0) + f'(0)x = 1 + rx$$

**Example 2:**
Find the linear approximation of $f(x) = \frac{e^{-2x}}{\sqrt{1 + x}}$ near $x = 0$.

We could calculate $f'(x)$ and find $f'(0)$. But instead, we will do this by combining basic approximations algebraically.

$$e^{-2x} \approx 1 - 2x$$ 
(using $e^u \approx 1 + u$ where $u = -2x$)

$$\sqrt{1 + x} = (1 + x)^{1/2} \approx 1 + \frac{1}{2} x$$

Put these two approximations together to get:

$$
\frac{e^{-2x}}{\sqrt{1 + x}} \approx \frac{1 - 2x}{1 + \frac{1}{2}x} \approx (1 - 2x)\left(1 + \frac{1}{2}x\right)^{-1}
$$

Moreover, 
$$
(1 + \frac{1}{2}x)^{-1} \approx 1 - \frac{1}{2}x \quad \text{(using } (1 + u)^{-1} \approx 1 - u \text{ with } u = \frac{x}{2})
$$

Thus,
$$
\frac{e^{-2x}}{\sqrt{1 + x}} \approx (1 - 2x)(1 - \frac{1}{2}x) = 1 - 2x - \frac{1}{2}x + 2\left(\frac{1}{2}x\right)^2
$$

Now, we discard that last $x^2$ term because we’ve already thrown out a number of other $x^2$ (and higher-order) terms in making these approximations. Remember, we’re assuming that abs(x) < < 1. This means that $x^2$ is very small, $x^3$ is even smaller, etc. We can ignore these higher-order terms because they are very, very small. This yields:

$$
\frac{e^{-2x}}{\sqrt{1 + x}} \approx 1 - 2x - \frac{1}{2}x = 1 - \frac{5}{2}x
$$

Because $f(x) \approx 1 - \frac{5}{2}x$, we can deduce $f(0) = 1$ and $f'(0) = -\frac{5}{2}$ directly from our linear approximation, which is quicker in this case than calculating $f'(x)$.


**Example 3:** 
$f(x) = (1 + 2x)^{10}$

On the first exam, you were asked to calculate 
$\lim_{x \to 0} \frac{(1 + 2x)^{10} - 1}{x}$
The quickest way to do this with the tools of Unit 1 is as follows:

$$
\lim_{x \to 0} \frac{(1 + 2x)^{10} - 1}{x} = \lim_{x \to 0} \frac{f(x) - f(0)}{x} = f'(0) = 20
$$

(since $f'(x) = 10(1 + 2x)^9 \cdot 2 = 20$ at $x = 0$)

Now we can do the same problem a different way, namely, using linear approximation:

$$
(1 + 2x)^{10} \approx 1 + 10(2x) \quad \text{(Use } (1 + u)^r \approx 1 + ru \text{ where } u = 2x \text{ and } r = 10)
$$

Hence,

$$
\frac{(1 + 2x)^{10} - 1}{x} \approx \frac{1 + 20x - 1}{x} = 20
$$


**Example 4: Planet Quirk**

Let’s say I am on Planet Quirk, and that a satellite is whizzing overhead with a velocity $v$. We want to find the time dilation (a concept from special relativity) that the clock onboard the satellite experiences relative to my wristwatch. We borrow the following equation from special relativity:

$$T' = \frac{T}{\sqrt{1 - \frac{v^2}{c^2}}}$$

A shortcut to the two-step process $\sqrt{1 + x} \approx 1 + \frac{1}{2} x$ is to write:

$$\frac{1}{\sqrt{1 + x}} \approx \frac{1}{1 + \frac{1}{2}x} \approx 1 - \frac{1}{2} x$$

Therefore,

$$\frac{1}{\sqrt{1 + x}} = (1 + x)^{-1/2} \approx 1 - \frac{1}{2} x$$

Here, $T'$ is the time I measure on my wristwatch, and $T$ is the time measured onboard the satellite.

$$T' = T \left( 1 - \frac{v^2}{c^2} \right)^{-1/2} \approx 1 + \frac{1}{2} \left( \frac{v^2}{c^2} \right) \left[ (1 + u)^4 \approx 1 + ru, \text{ where } u = -\frac{v^2}{c^2}, \ r = -\frac{1}{2} \right]$$


(using $(1 + u)^{-1/2} \approx 1 - \frac{1}{2} u$ with $u = \frac{v^2}{c^2}$).

If $v = 4$ km/s, and the speed of light $c$ is $3 \times 10^5$ km/s, then:

$$\frac{v^2}{c^2} \approx 10^{-10}$$

There’s hardly any difference between the times measured on the ground and in the satellite. Nevertheless, engineers used this very approximation (along with several other such approximations) to calibrate the radio transmitters on GPS satellites. (The satellites transmit at a slightly offset frequency.)


## Quadratic Approximations

These are more complicated. They are only used when higher accuracy is needed.

$$f(x) \approx f(x_0) + f'(x_0)(x - x_0) + \frac{f''(x_0)}{2} (x - x_0)^2$$

**Geometric picture:**
A quadratic approximation gives a best-fit parabola to a function. For example, consider $f(x) = \cos(x)$. If $x_0 = 0$, then:

$$f(0) = \cos(0) = 1$$
$$f'(x) = -\sin(x) \quad \Rightarrow \quad f'(0) = 0$$
$$f''(x) = -\cos(x) \quad \Rightarrow \quad f''(0) = -\cos(0) = -1$$

$$\cos(x) \approx 1 + 0 \cdot x - \frac{1}{2} x^2 = 1 - \frac{1}{2} x^2$$

## Basic Quadratic Approximations:
$$f(x) \approx f(0) + f'(0)x + \frac{f''(0)}{2} x^2$$

1. $\sin x \approx x$
2. $\cos x \approx 1 - \frac{1}{2} x^2$
3. $e^x \approx 1 + x + \frac{x^2}{2}$
4. $\ln(1 + x) \approx x - \frac{x^2}{2}$
5. $(1 + x)^r \approx 1 + rx + \frac{r(r - 1)}{2} x^2$

**Proofs:**
The proof of these is to evaluate $f(0)$, $f'(0)$, $f''(0)$ in each case.

**Example:**
$$f(x) = \ln(1 + x)$$
$$f(0) = \ln 1 = 0$$

$$f'(x) = \left( \ln(1 + x) \right)' = \frac{1}{1 + x} \quad \Rightarrow \quad f'(0) = 1$$

$$f''(x) = \left( \frac{1}{1 + x} \right)' = -\frac{1}{(1 + x)^2} \quad \Rightarrow \quad f''(0) = -1$$

$$\ln(1 + x) \approx x - \frac{1}{2} x^2$$

Let us apply a quadratic approximation to our Planet Quirk example and see where it gives.

$$\left[ 1 - \frac{v^2}{c^2} \right]^{-1/2} \approx 1 + \frac{1}{2} \frac{v^2}{c^2} + \left[ \frac{\left( -\frac{1}{2} \right)\left( -\frac{1}{2} - 1 \right)}{2} \right] \left( \frac{-v^2}{c^2} \right)^2$$

Since $\frac{v^2}{c^2} \approx 10^{-10}$, that last term will be of the order $\left( \frac{v^2}{c^2} \right)^2 \approx 10^{-20}$. Not even the best atomic clocks can measure time with this level of precision. Since the quadratic term is so small, we might as well ignore it and stick to the linear approximation in this case.


**Example 5.**

$f(x) = \frac{e^{-2x}}{\sqrt{1 + x}}$

Let us find the quadratic approximation of this expression. We can rewrite it as $f(x) = e^{-2x}(1 + x)^{-1/2}$.

Using the approximation of each factor gives:

$$f(x) \approx \left( 1 - 2x + \frac{1}{2}(-2x)^2 \right) \left( 1 - \frac{1}{2}x + \left( \frac{-1}{2} \right) \left( \frac{-1}{2} - 1 \right) \frac{x^2}{2} \right)$$

$$f(x) \approx 1 - 2x - \frac{1}{2}x + (-2)\left(-\frac{1}{2}\right)x^2 + 2x^2 + \frac{3}{8}x^2 = 1 - \frac{5}{2}x + \frac{27}{8}x^2$$

(Note: we drop the $x^3$ and higher order terms. This is a quadratic approximation, so we don’t care about anything higher than $x^2$.)



### Curve Sketching

## Goal
To draw the graph of $f$ using the behavior of $f'$ and $f''$. We want the graph to be qualitatively correct, but not necessarily to scale.

## Typical Picture
Here, $y_0$ is the minimum value, and $x_0$ is the point where that minimum occurs.

## Critical Point of a Function
Notice that for $x < x_0$, $f'(x) < 0$. In other words, $f$ is decreasing to the left of the critical point. For $x > x_0$, $f'(x) > 0$: $f$ is increasing to the right of the critical point.

## Concave-Down Graph
Here, $y_0$ is the critical (maximum) value, and $x_0$ is the critical point. $f$ is decreasing on the right side of the critical point, and increasing to the left of $x_0$.

## Rubric for Curve-Sketching
1. **Plot the discontinuities of $f$** — especially the infinite ones!
2. **Find the critical points**. These are the points at which $f'(x) = 0$ (usually where the slope changes from positive to negative, or vice versa.)
3. (a) Plot the critical points (and critical values), but only if it’s relatively easy to do so.
    (b) Decide the sign of $f'(x)$ in between the critical points (if it’s not already obvious).
4. **Find and plot the zeros of $f$**. These are the values of $x$ for which $f(x) = 0$. Only do this if it’s relatively easy.
5. **Determine the behavior at the endpoints (or at ±∞).**

## **Example 1:** $y = 3x - x^3$
1. No discontinuities.
2. $y' = 3 - 3x^2 = 3(1 - x^2)$ so, $y' = 0$ at $x = \pm1$.
3. (a) At $x = 1$, $y = 3 - 1 = 2$.
    (b) At $x = -1$, $y = -3 + 1 = -2$. Mark these two points on the graph.
4. Find the zeros: $y = 3x - x^3 = x(3 - x^2) = 0$ so the zeros lie at $x = 0, \pm \sqrt{3}$.
5. Behavior of the function as $x \to \pm \infty$.
    As $x \to \infty$, the $x^3$ term of $y$ dominates, so $y \to -\infty$. Likewise, as $x \to -\infty$, $y \to \infty$.

Putting all of this information together gives us the graph. Let us do step 3b (the sign of $f'$) to double-check for consistency:
$$y' = 3 - 3x^2 = 3(1 - x^2)$$
$$y' > 0 \text{ when } |x| < 1; \quad y' < 0 \text{ when } |x| > 1$$
Sure enough, $y$ is increasing between $x = -1$ and $x = 1$, and is decreasing everywhere else.

## Example 2: $y = \frac{1}{x}$
This example illustrates why it’s important to find a function’s discontinuities before looking at the properties of its derivative. We calculate:
$$y' = -\frac{1}{x^2} < 0$$
Warning: The derivative is never positive, so you might think that $y$ is always decreasing, and its graph looks something like a monotonically decreasing function.

But as you probably know, the graph of $y = \frac{1}{x}$ looks nothing like this! It actually looks like it has a jump from $-\infty$ to $+\infty$. In fact, $y = \frac{1}{x}$ is decreasing except at $x = 0$, where it jumps from $-\infty$ to $+\infty$. This is why we must watch out for discontinuities.

## **Example 3:** $y = x^3 - 3x^2 + 3x$
$$y' = 3x^2 - 6x + 3 = 3(x^2 - 2x + 1) = 3(x - 1)^2$$
There is a critical point at $x = 1$. $y' > 0$ on both sides of $x = 1$, so $y$ is increasing everywhere. In this case, the sign of $y'$ doesn’t change at the critical point, but the graph does level out.

## Example 4: $y = \frac{\ln x}{x}$ (Note: this function is only defined for $x > 0$)
What happens as $x$ decreases towards zero? Let $x = 2^{-n}$. Then,
$$y = \frac{\ln 2^{-n}}{2^{-n}} = \frac{-n \ln 2}{2^n} \to -\infty \text{ as } n \to \infty$$
In other words, $y$ decreases to $-\infty$ as $x$ approaches zero.

Next, we want to find the critical points.
$$y' = \left( \frac{\ln x}{x} \right)' = \frac{x(1/x) - \ln x(1)}{x^2} = \frac{1 - \ln x}{x^2}$$
$$y' = 0 \Rightarrow 1 - \ln x = 0 \Rightarrow \ln x = 1 \Rightarrow x = e$$
In other words, the critical point is $x = e$. The critical value is:
$$y(x) |_{x=e} = \frac{\ln e}{e} = \frac{1}{e}$$

Next, find the zeros of this function:
$$y = 0 \Leftrightarrow \ln x = 0$$
So $y = 0$ when $x = 1$.

What happens as $x \to \infty$? This time, consider $x = 2^n$.
$$y = \frac{\ln 2^n}{2^n} = \frac{n \ln 2}{2^n} \approx \frac{n(0.7)}{2^n}$$
So, $y \to 0$ as $n \to \infty$.

## 2nd Derivative Information
When $f'' > 0$, $f'$ is increasing. When $f'' < 0$, $f'$ is decreasing.

Therefore, the sign of the second derivative tells us about concavity/convexity of the graph. Thus the second derivative is good for two purposes:
1. Deciding whether a critical point is a maximum or a minimum. This is known as the second derivative test.
    - $f'(x_0) = 0$, $f''(x_0) < 0$ : maximum
    - $f'(x_0) = 0$, $f''(x_0) > 0$ : minimum
2. Concave/convex “decoration.”

The points where $f'' = 0$ are called inflection points. Usually, at these points the graph changes from concave up to down, or vice versa.


### Max/Min Problems

## Example 1
$$y = \frac{\ln x}{x}$$, 
$x_0 = e$

What is the maximum value? Answer: $y = \frac{1}{e}$.

Where (or at what point) is the maximum achieved? Answer: $x = e$.

Beware: Some people will ask, “What is the maximum?” The answer is not $e$. You will get so used to finding the critical point $x = e$, the main calculus step, that you will forget to find the maximum value $y = \frac{1}{e}$. Both the critical point $x = e$ and critical value $y = \frac{1}{e}$ are important. Together, they form the point on the graph $(e, \frac{1}{e})$ where it turns around.

## Example 2
Find the max and the min of the function.

Answer: If you’ve already graphed the function, it’s obvious where the maximum and minimum values are. The point is to find the maximum and minimum without sketching the whole graph.

**Idea**: Look for the max and min among the critical points and endpoints. You can see that we only need to compare the heights or $y$-values corresponding to endpoints and critical points. (Watch out for discontinuities!)

## Example 3
Find the open-topped can with the least surface area enclosing a fixed volume, $V$.

1. **Draw the picture.**

2. **Figure out what variables to use.** In this case, $r$, $h$, $V$, and surface area $S$.

3. **Figure out the constraints** in the problem, and express them using a formula. In this example, the constraint is:
   $$V = \pi r^2 h = \text{constant}$$
   We’re also looking for the surface area. So we need the formula for that, too:
   $$S = \pi r^2 + (2\pi r)h$$
   Now, in symbols, the problem is to minimize $S$ with $V$ constant.

4. **Use the constraint equation to express everything in terms of $r$** (and the constant $V$):
   $$h = \frac{V}{\pi r^2}$$
   $$S = \pi r^2 + (2\pi r)\left(\frac{V}{\pi r^2}\right)$$

5. **Find the critical points** (solve $\frac{dS}{dr} = 0$), as well as the endpoints. $S$ will achieve its max and min at one of these places.
   $$\frac{dS}{dr} = 2\pi r - \frac{2V}{r^2} = 0$$
   $$\pi r^3 - V = 0$$
   $$r = \left(\frac{V}{\pi}\right)^{1/3}$$

We’re not done yet. We’ve still got to evaluate $S$ at the endpoints: $r = 0$ and $r = \infty$.
$$S = \pi r^2 + \frac{2V}{r}, \quad 0 \leq r < \infty$$

As $r \to 0$, the second term $\frac{2V}{r}$ goes to infinity, so $S \to \infty$. As $r \to \infty$, the first term $\pi r^2$ goes to infinity, so $S \to \infty$. Since $S = \infty$ at each end, the minimum is achieved at the critical point $r = \left(\frac{V}{\pi}\right)^{1/3}$, not at either endpoint.

We’re still not done. We want to find the minimum value of the surface area $S$, and the values of $h$.
$$r = \left(\frac{V}{\pi}\right)^{1/3}$$
$$h = \frac{V}{\pi r^2} = \left(\frac{V}{\pi}\right)^{1/3}$$
$$S = \pi r^2 + \frac{2V}{r} = \pi \left(\frac{V}{\pi}\right)^{2/3} + 2\left(\frac{V}{\pi}\right)^{1/3} = 3\pi^{-1/3} V^{2/3}$$

Finally, another, often better, way of answering that question is to find the proportions of the can. In other words, what is $\frac{h}{r}$?
$$\frac{h}{r} = 1$$

## Example 4
Consider a wire of length 1, cut into two pieces. Bend each piece into a square. We want to figure out where to cut the wire in order to enclose as much area in the two squares as possible.

The first square will have sides of length $\frac{x}{4}$. Its area will be $\left(\frac{x}{4}\right)^2$. The second square will have sides of length $\frac{1 - x}{4}$. Its area will be $\left(\frac{1 - x}{4}\right)^2$. The total area is then:
$$A = \left(\frac{x}{4}\right)^2 + \left(\frac{1 - x}{4}\right)^2$$

$$A' = \frac{x}{8} - \frac{1 - x}{8} = \frac{2x - 1}{8} = 0$$
$$x = \frac{1}{2}$$

So, one extreme value of the area is:
$$A = \left(\frac{1}{4}\right)^2 + \left(\frac{1}{4}\right)^2 = \frac{1}{16} + \frac{1}{16} = \frac{1}{8}$$

We’re not done yet, though. We still need to check the endpoints! At $x = 0$,
$$A = 0^2 + \left(\frac{1}{4}\right)^2 = \frac{1}{16}$$

At $x = 1$,
$$A = \left(\frac{1}{4}\right)^2 + 0^2 = \frac{1}{16}$$

By checking the endpoints, we see that the minimum area was achieved at $x = \frac{1}{2}$. The maximum area is not achieved in $0 < x < 1$, but it is achieved at $x = 0$ or $x = 1$. The maximum corresponds to using the whole length of wire for one square.

## Moral
Don’t forget endpoints. If you only look at critical points you may find the worst answer, rather than the best one.


### Related Rates

## Example 1
Police are 30 feet from the side of the road. Their radar sees your car approaching at 80 feet per second when your car is 50 feet away from the radar gun. The speed limit is 65 miles per hour (which translates to 95 feet per second). Are you speeding?


At $D = 50$, $x = 40$. (We know this because it’s a 3-4-5 right triangle.) In addition,

$$\frac{dD}{dt} = D' = -80
$$

$D'$ is negative because the car is moving in the $-x$ direction. Don’t plug in the value for $D$ yet! $D$ is changing, and it depends on $x$.The Pythagorean theorem says:$$30^2 + x^2 = D^2$$


Next, give the variables names. The important thing to figure out is which variables are changing. At $D = 50$, $x = 40$. (We know this because it’s a 3-4-5 right triangle.) In addition, $\frac{dD}{dt} = -80$. $\frac{dD}{dt}$ is negative because the car is moving in the $-x$ direction. Don’t plug in the value for $D$ yet! $D$ is changing, and it depends on $x$.


$$
\frac{d}{dt} \left( 30^2 + x^2 = D^2 \right) \implies 2xx' = 2DD' \implies x' = \frac{2DD'}{2x}
$$


Now, plug in the instantaneous numerical values:
$$
x' = \frac{50}{40}(-80) = -100 \ \text{feet/s}
$$

This exceeds the speed limit of 95 feet per second; you are, in fact, speeding.

There is another, longer, way of solving this problem. Start with

$$ 
D = \sqrt{30^2 + x^2} = (30^2 + x^2)^{1/2} 
$$

$$
\frac{d}{dt}D = \frac{1}{2}(30^2 + x^2)^{-1/2}(2x \frac{dx}{dt})
$$

Plug in the values:

$$ 
-80 = \frac{1}{2}(30^2 + 40^2)^{-1/2}(2)(40)\frac{dx}{dt} 
$$

and solve to find

$$ 
\frac{dx}{dt} = -100 \frac{\text{feet}}{\text{s}}
$$


**Example 2.** Consider a conical tank. Its radius at the top is 4 feet, and it’s 10 feet high. It’s being filled with water at the rate of 2 cubic feet per minute. How fast is the water level rising when it is 5 feet high?



From the figure:

$$
\text{Volume of the tank: } V = \frac{1}{3} \pi r^2 h
$$

Using similar triangles, we get the relationship between $r$ and $h$:

From Fig. 3, we see that

$$
\frac{r}{h} = \frac{4}{10}
$$

or, in other words,

$$
r = \frac{2}{5}h
$$

Plug this expression for $ r $ back into $ V $ to get

$$
V = \frac{1}{3}\pi \left(\frac{2}{5}h\right)^2 h = \frac{4}{3(25)}\pi h^3
$$

$$
\frac{dV}{dt} = V' = \frac{4}{25} \pi h^2 h'
$$

Now, plug in the numbers $\left(\frac{dV}{dt} = 2, h = 5\right)$:

$$
2 = \left(\frac{4}{25}\right) \pi (5)^2 h'
$$

$$
h' = \frac{1}{2\pi}
$$


There’s a part II margin of error problem involving a satellite, where you’re asked to find $\Delta L / \Delta h$:

$$
L^2 + c^2 = h^2
$$

$$
2LL' = 2hh'
$$

Hence,

$$
\frac{\Delta L}{\Delta h} \approx \frac{L'}{h'} = \frac{h}{L}
$$


There is also a parabolic mirror problem based on similar ideas:


Here, you want to find either $\frac{\Delta a}{\Delta \theta}$ or $\frac{\Delta \theta}{\Delta a}$. This type of sensitivity of measurement problem matters in every measurement problem, for instance predicting whether asteroids will hit Earth.


### Newton’s Method and Other Applications

**Newton’s Method**

Newton’s method is a powerful tool for solving equations of the form $f(x) = 0$.

**Example 1.** $f(x) = x^2 - 3$. In other words, solve $x^2 - 3 = 0$. We already know that the solution to this is $x = \sqrt{3}$. Newton’s method gives a good numerical approximation to the answer. The method uses tangent lines.

![Newton's Method Example](image-link)

The goal is to find where the graph crosses the x-axis. We start with a guess of $x_0 = 1$. Plugging that back into the equation for $y$, we get $y_0 = 1^2 - 3 = -2$, which isn’t very close to 0. Our next guess is $x_1$, where the tangent line to the function at $x_0$ crosses the x-axis. The equation for the tangent line is:

$$y - y_0 = m(x - x_0)$$

In our example, $f(x) = x^2 - 3$, $f'(x) = 2x$. Thus,

$$
x_1 = x_0 - \frac{(x_0^2 - 3)}{2x} = x_0 - \frac{1}{2}x_0 + \frac{3}{2x_0}
$$

$$
x_1 = \frac{1}{2}x_0 + \frac{3}{2x_0}
$$

The main idea is to repeat (iterate) this process:

$$
x_2 = \frac{1}{2}x_1 + \frac{3}{2x_1}
$$

$$
x_3 = \frac{1}{2}x_2 + \frac{3}{2x_2}
$$

and so on. The procedure approximates $\sqrt{3}$ extremely well.

|   x   |   y   | accuracy: abs(y - √3) |
|-------|-------|-----------|
| x₀    |   1   |   |
| x₁    |   2   | 3 × 10⁻¹  |
| x₂    | 7/4   | 2 × 10⁻²  |
| x₃    | 7/8 + 6/7 | 10⁻⁴  |
| x₄    | 18,817 / 10,864 | 3 × 10⁻⁹  |

Notice that the number of digits of accuracy doubles with each iteration.

**Summary**

Newton’s Method is illustrated and can be summarized as follows:

$$x_{k+1} = x_k - \frac{f(x_k)}{f'(x_k)}$$

where $x_k$ is the $k$-th iterate.

Example 1 considered the particular case of

$$f(x) = x^2 - 3$$

$$x_{k+1} = x_k - \frac{f(x_k)}{f'(x_k)} = ... = \frac{1}{2}x_k + \frac{3}{2x_k}$$

Now, we define

$\bar{x} = \lim_{k \to \infty} x_k \quad (x_k \to \bar{x} \text{ as } k \to \infty)$


To evaluate $\bar{x}$ in Example 1, take the limit as $k \to \infty$ in the equation

$$x_{k+1} = \frac{1}{2}x_k + \frac{3}{2x_k}$$

This yields

$$\bar{x} = \frac{1}{2}\bar{x} + \frac{3}{2\bar{x}} \implies \bar{x} - \frac{1}{2}\bar{x} = \frac{3}{2\bar{x}} \implies \frac{1}{2}\bar{x} = \frac{3}{2\bar{x}} \implies \bar{x}^2 = 3$$

which is just what we hoped: $\bar{x} = \sqrt{3}$.


**Warnings:**

1. Newton’s Method can find an unexpected root.
2. Newton’s Method can fail completely.

---

# Ring on a String

Consider a ring on a string held fixed at two ends at $(0, 0)$ and $(a, b)$. The ring is free to slide to any point. Find the position $(x, y)$ of the string.

![Ring on a String](image-link)

**Physical Principle:** The ring settles at the lowest height (lowest potential energy), so the problem is to minimize $y$ subject to the constraint that $(x, y)$ is on the string.

**Constraint:** The length $L$ of the string is fixed:

$$\sqrt{x^2 + y^2} + \sqrt{(x - a)^2 + (y - b)^2} = L$$

The function $y = y(x)$ is determined implicitly by the constraint equation above. This curve is an ellipse with foci at $(0, 0)$ and $(a, b)$.

**Finding the Critical Point:**

To find the critical point, differentiate the constraint equation implicitly with respect to $ x $,

$$\frac{x + yy'}{\sqrt{x^2 + y^2}} + \frac{x - a + (y - b)y'}{\sqrt{(x - a)^2 + (y - b)^2}} = 0$$

Since $ y' = 0 $ at the critical point, the equation can be rewritten as

$$\frac{x}{\sqrt{x^2 + y^2}} = \frac{a - x}{\sqrt{(x - a)^2 + (y - b)^2}}$$

The last equation can be interpreted geometrically as saying that $\sin \alpha = \sin \beta$, where $\alpha$ and $\beta$ are the angles the left and right portions of the string make with the vertical.

## Formulae for $x$ and $y$

We did not yet find the location of $(x,y)$. We will now show that

$$x = \frac{a}{2} \left(1 - \frac{b}{\sqrt{L^2 - a^2}}\right), \quad y = \frac{1}{2} \left(b - \sqrt{L^2 - a^2}\right)$$

Because $\alpha = \beta$,

$$x = \sqrt{x^2 + y^2} \sin \alpha; \quad a - x = \sqrt{(x - a)^2 + (y - b)^2} \sin \alpha$$

Adding these two equations,

$$a = \left(\sqrt{x^2 + y^2} + \sqrt{(x - a)^2 + (y - b)^2}\right) \sin \alpha = L \sin \alpha \implies \sin \alpha = \frac{a}{L}$$

The equations for the vertical legs of the right triangles are (note that $y < 0$):

$$-y = \sqrt{x^2 + y^2} \cos \alpha; \quad b - y = \sqrt{(x - a)^2 + (y - b)^2} \cos \beta$$

Adding these two equations, and using $\alpha = \beta$,

$$b - 2y = \left(\sqrt{x^2 + y^2} + \sqrt{(x - a)^2 + (y - b)^2}\right) \cos \alpha = L \cos \alpha \implies y = \frac{1}{2} (b - L \cos \alpha)$$

Use the relation $\sin \alpha = \frac{a}{L}$ to write $L \cos \alpha = L \sqrt{1 - \sin^2 \alpha} = \sqrt{L^2 - a^2}$. Then the formula for $y$ is

$$y = \frac{1}{2} \left(b - \sqrt{L^2 - a^2}\right)$$

Finally, to find the formula for $x$, use the similar right triangles

$$\tan \alpha = \frac{x}{-y} = \frac{a - x}{b - y} \implies x(b - y) = (-y)(a - x) \implies (b - 2y)x = -ay$$

Therefore,

$$x = \frac{-ay}{b - 2y} = \frac{a}{2} \left(1 - \frac{b}{\sqrt{L^2 - a^2}}\right)$$

Thus we have formulae for $x$ and $y$ in terms of $a$, $b$, and $L$.


### Mean-Value Theorem

The Mean-Value Theorem (MVT) is the underpinning of calculus. It says:

If $f$ is differentiable on $a < x < b$, and continuous on $a \le x \le b$, then

$$\frac{f(b) - f(a)}{b - a} = f'(c) \text{ for some } c, \, a < c < b$$

Here, $\frac{f(b) - f(a)}{b - a}$ is the slope of a secant line, while $f'(c)$ is the slope of a tangent line.

## Geometric Proof

Take dotted lines parallel to the secant line and shift them up from below the graph until one of them first touches the graph. Alternatively, one may have to start with a dotted line above the graph and move it down until it touches.

If the function isn’t differentiable, this approach goes wrong. For instance, it breaks down for the function f(x) = abs(x). The dotted line always touches the graph first at $x = 0$, no matter what its slope is, and f'(0) is undefined.

## Interpretation of the Mean Value Theorem

You travel from Boston to Chicago (which we’ll assume is a 1,000 mile trip) in exactly 3 hours. At some time in between the two cities, you must have been going at exactly:

$$\frac{1000}{3} \text{ miles per hour}$$

Let $f(t)$ be the position, measured as the distance from Boston. 

$$f(3) = 1000, \, f(0) = 0, \, a = 0, \, b = 3$$

Then,

$$\frac{1000}{3} = \frac{f(b) - f(a)}{b - a} = f'(c)$$

where $f'(c)$ is your speed at some time, $c$.

## Versions of the Mean Value Theorem

There is a second way of writing the MVT:

$$f(b) - f(a) = f'(c)(b - a)$$

$$f(b) = f(a) + f'(c)(b - a) \text{ (for some } c, \, a < c < b \text{)}$$

There is also a third way of writing the MVT: change the name of $b$ to $x$.

$$f(x) = f(a) + f'(c)(x - a) \text{ for some } c, \, a < c < x$$

The theorem does not say what $c$ is. It depends on $f$, $a$, and $x$.

This version of the MVT should be compared with linear approximation:

$$f(x) \approx f(a) + f'(a)(x - a) \text{ for } x \text{ near } a$$

The tangent line in the linear approximation has a definite slope $f'(a)$. By contrast, the formula is an exact formula. It conceals its lack of specificity in the slope $f'(c)$, which could be the slope of $f$ at any point between $a$ and $x$.

## Uses of the Mean Value Theorem

Key conclusions:

1. If $f'(x) > 0$, then $f$ is increasing.
2. If $f'(x) < 0$, then $f$ is decreasing.
3. If $f'(x) = 0$ for all $x$, then $f$ is constant.

Definition of increasing/decreasing:

Increasing means $a < b \implies f(a) < f(b)$. Decreasing means $a < b \implies f(a) > f(b)$.


**Proof of 1:**

$$a < b$$

$$f(b) = f(a) + f'(c)(b - a)$$

Because $f'(c)$ and $(b - a)$ are both positive,

$$f(b) = f(a) + f'(c)(b - a) > f(a)$$

**Proof of 3:**

$$f(b) = f(a) + f'(c)(b - a) = f(a) + 0(b - a) = f(a)$$

### Inequalities

The fundamental property $f' > 0 \implies f \text{ is increasing}$ can be used to deduce many other inequalities.

## Example

$$e^x > 0$$
$$e^x > 1 \text{ for } x > 0$$
$$e^x > 1 + x$$

## Proofs

We will take property 1 ($e^x > 0$) for granted. Proofs of the other two properties follow:

**Proof of 2:** 

Define $f_1(x) = e^x - 1$. Then, $f_1(0) = e^0 - 1 = 0$, and $f_1'(x) = e^x > 0$. Hence, $f_1(x)$ is increasing, so $f_1(x) > f_1(0)$ for $x > 0$. That is:

$$e^x > 1 \text{ for } x > 0$$

**Proof of 3:** 

Let $f_2(x) = e^x - (1 + x)$.

$$f_2'(x) = e^x - 1 = f_1(x) > 0 \text{ (if } x > 0 \text{)}$$

Hence, $f_2(x) > 0 \text{ for } x > 0$. In other words,

$$e^x > 1 + x$$

Similarly, 

$$e^x > 1 + x + \frac{x^2}{2}$$

(proved using $f_3(x) = e^x - (1 + x + \frac{x^2}{2})$). One can keep on going:

$$e^x > 1 + x + \frac{x^2}{2} + \frac{x^3}{3!} \text{ for } x > 0$$

Eventually, it turns out that

$$e^x = 1 + x + \frac{x^2}{2} + \frac{x^3}{3!} + \cdots$$

We will be discussing this when we get to Taylor series near the end of the course.


### Differentials and Antiderivatives

## Differentials
New notation:
$$dy = f'(x)dx \quad (y = f(x))$$
Both $dy$ and $f'(x)dx$ are called differentials. You can think of:
$$\frac{dy}{dx} = f'(x)$$
as a quotient of differentials. One way this is used is for linear approximations.
$$\frac{\Delta y}{\Delta x} \approx \frac{dy}{dx}$$

## Example 1. Approximate $65^{1/3}$
**Method 1 (review of linear approximation method)**
$$f(x) = x^{1/3}$$
$$f'(x) = \frac{1}{3}x^{-2/3}$$
$$f(x) \approx f(a) + f'(a)(x - a)$$
$$x^{1/3} \approx a^{1/3} + \frac{1}{3}a^{-2/3}(x - a)$$
A good base point is $a = 64$, because $64^{1/3} = 4$.
Let $x = 65$.
$$65^{1/3} = 64^{1/3} + \frac{1}{3}64^{-2/3}(65 - 64) = 4 + \frac{1}{48} = 4.02$$

Similarly,
$$(64.1)^{1/3} \approx 4 + \frac{0.1}{48}$$

**Method 2 (review)**
$$65^{1/3} = (64 + 1)^{1/3} = \left[64\left(1 + \frac{1}{64}\right)\right]^{1/3} = 64^{1/3}\left(1 + \frac{1}{64}\right)^{1/3} = 4 \left(1 + \frac{1}{64}\right)^{1/3}$$
Next, use the approximation $(1 + x)^r \approx 1 + rx$ with $r = \frac{1}{3}$ and $x = \frac{1}{64}$.
$$65^{1/3} \approx 4\left(1 + \frac{1}{192}\right) = 4 + \frac{1}{48}$$
This is the same result that we got from Method 1.

**Method 3 (with differential notation)**
$$y = x^{1/3} \big|_{x=64} = 4$$
$$dy = \frac{1}{3} x^{-2/3} dx \big|_{x=64} = \frac{1}{48} dx$$
We want $dx = 1$, since $x + dx = 65$. $dy = \frac{1}{48}$ when $dx = 1$.
$$(65)^{1/3} = 4 + \frac{1}{48}$$
What underlies all three of these methods is:
$$y = x^{1/3}$$
$$dy = \frac{1}{3} x^{-2/3} dx \big|_{x=64}$$

## Antiderivatives
$$\int f(x) dx = F(x)$$
means that $F$ is the antiderivative of $f$.
Other ways of saying this are:
$$F'(x) = f(x)$$
or,
$$dF = f(x) dx$$

## Examples:
1. $\int \sin x \, dx = -\cos x + c$ where $c$ is any constant.
2. $\int x^n \, dx = \frac{x^{n+1}}{n + 1} + c$ for $n \neq -1$.
3. $\int \frac{dx}{x} = \ln abs(x) + c$ (This takes care of the exceptional case n = -1 in 2.)
4. $\int \sec^2 x \, dx = \tan x + c$
5. $\int \frac{1}{\sqrt{1 - x^2}} \, dx = \sin^{-1} x + c$ (where $\sin^{-1} x$ denotes “inverse sin” or arcsin, and not $\frac{dx}{\sin x}$)
6. $\int \frac{1}{1 + x^2} \, dx = \tan^{-1}(x) + c$

## Proof of Property 2:
The absolute value $|x|$ gives the correct answer for both positive and negative $x$. We will double check this now for the case $x < 0$:
$$\frac{d}{dx} \ln |x| = \frac{d}{dx} \ln(-x) = \ln(-x)$$
$$\frac{d}{dx} \ln(-x) = \frac{1}{u} \cdot \frac{du}{dx}$$
where $u = -x$.
$$\frac{d}{dx} \ln(-x) = \frac{1}{-x} \cdot (-1) = \frac{1}{x}$$

## Uniqueness of the Antiderivative Up to an Additive Constant
If $F'(x) = f(x)$, and $G'(x) = f(x)$, then $G(x) = F(x) + c$ for some constant factor $c$.

## Proof:
$$(G - F)' = f - f = 0$$
Recall that we proved as a corollary of the Mean Value Theorem that if a function has a derivative zero then it is constant. Hence $G(x) - F(x) = c$ (for some constant $c$). That is, $G(x) = F(x) + c$.

## Method of Substitution
## **Example 1:** $\int x^3 (x^4 + 2)^5 dx$
Substitution:
$$u = x^4 + 2, \, du = 4x^3 dx, \, (x^4 + 2)^5 = u^5, \, x^3 dx = \frac{du}{4}$$
Hence,
$$\int x^3 (x^4 + 2)^5 dx = \int u^5 \frac{du}{4} = \frac{1}{4} \int u^5 du = \frac{u^6}{24} + c = \frac{(x^4 + 2)^6}{24} + c$$

## Example 2: $\int \frac{x}{\sqrt{1 + x^2}} dx$
Another way to find an antiderivative is “advanced guessing.” First write:
$$\int \frac{x}{\sqrt{1 + x^2}} dx = \int x (1 + x^2)^{-1/2} dx$$
Guess: $(1 + x^2)^{1/2}$. Check this.
$$\frac{d}{dx} (1 + x^2)^{1/2} = \frac{1}{2}(1 + x^2)^{-1/2} (2x) = x (1 + x^2)^{-1/2}$$
Therefore,
$$\int x (1 + x^2)^{-1/2} dx = (1 + x^2)^{1/2} + c$$

## **Example 3:** $\int e^{6x} dx$
Guess: $e^{6x}$. Check this:
$$\frac{d}{dx} e^{6x} = 6e^{6x}$$
Therefore,
$$\int e^{6x} dx = \frac{1}{6} e^{6x} + c$$

## Example 4: $\int x e^{-x^2} dx$
Guess: $e^{-x^2}$. Again, take the derivative to check:
$$\frac{d}{dx} e^{-x^2} = -2x e^{-x^2}$$
Therefore,
$$\int x e^{-x^2} dx = -\frac{1}{2} e^{-x^2} + c$$


## **Example 5.** $\int \sin x \cos x \, dx = \frac{1}{2} \sin^2 x + c$

Another, equally acceptable answer is
$$\int \sin x \cos x \, dx = -\frac{1}{2} \cos^2 x + c$$

This seems like a contradiction, so let’s check our answers:
$$\frac{d}{dx} \left(\frac{1}{2} \sin^2 x\right) = \sin x \cos x$$
and
$$\frac{d}{dx} \left(-\frac{1}{2} \cos^2 x\right) = \sin x \cos x$$

So both of these are correct. Here’s how we resolve this apparent paradox: the difference between the two answers is a constant.
$$\frac{1}{2} \sin^2 x - \left(-\frac{1}{2} \cos^2 x\right) = \frac{1}{2} (\sin^2 x + \cos^2 x) = \frac{1}{2}$$

So,
$$\frac{1}{2} \sin^2 x - \frac{1}{2} = -\frac{1}{2} \cos^2 x$$

The two answers are, in fact, equivalent. The constant $c$ is shifted by $\frac{1}{2}$ from one answer to the other.

## Example 6. (We will assume $x > 0$)
$$\int \frac{dx}{x \ln x}$$

Let $u = \ln x$. This means $du = \frac{dx}{x}$. Substitute these into the integral to get
$$\int \frac{dx}{x \ln x} = \int \frac{1}{u} du = \ln u + c = \ln (\ln(x)) + c$$


### Differential Equations and Separation of Variables

## Ordinary Differential Equations (ODEs)

**Example 1:**
$$\frac{dy}{dx} = f(x)$$
**Solution:** $y = \int f(x) \, dx$. We consider these types of equations as solved.

**Example 2:**
$$\frac{d}{dx} + x y = 0 \quad \text{or} \quad \frac{dy}{dx} + xy = 0$$
$\frac{d}{dx} + x$ is known in quantum mechanics as the annihilation operator.

Besides integration, we have only one method of solving this so far, namely, substitution. Solving for $\frac{dy}{dx}$ gives:
$$\frac{dy}{dx} = -xy$$

The key step is to separate variables:
$$\frac{dy}{y} = -x \, dx$$

Note that all $y$-dependence is on the left and all $x$-dependence is on the right.

Next, take the antiderivative of both sides:
$$\int \frac{dy}{y} = - \int x \, dx$$
$$\ln |y| = -\frac{x^2}{2} + c \quad \text{(only need one constant $c$)}$$
$$|y| = e^c e^{-x^2/2} \quad \text{(exponentiate)}$$
$$y = ae^{-x^2/2} \quad \text{(where $a = \pm e^c$)}$$

Despite the fact that $e^c \neq 0$, $a = 0$ is possible along with all $a \neq 0$, depending on the initial conditions. For instance, if $y(0) = 1$, then $y = e^{-x^2/2}$. If $y(0) = a$, then $y = ae^{-x^2/2}$ (See Fig. 1).


In general:
$$\frac{dy}{dx} = f(x)g(y)$$
$$\frac{dy}{g(y)} = f(x) \, dx$$

which we can write as
$$\int \frac{1}{g(y)} \, dy = \int f(x) \, dx$$

Now, we get an implicit formula for $y$:
$$H(y) = F(x) + c$$
where $H(y) = \int \frac{1}{g(y)} \, dy$ and $F(x) = \int f(x) \, dx$,
$$y = H^{-1}(F(x) + c)$$
where $H^{-1}$ is the inverse function.

In the previous example:
$$f(x) = x$$
$$F(x) = -\frac{x^2}{2}$$
$$g(y) = y$$
$$h(y) = \frac{1}{y}$$
$$H(y) = \ln |y|$$

**Example 3 (Geometric Example):**
$$\frac{dy}{dx} = \frac{2y}{x}$$

Find a graph such that the slope of the tangent line is twice the slope of the ray from $(0,0)$ to $(x,y)$.

![Figure 2: The slope of the tangent line (red) is twice the slope of the ray from the origin to the point (x,y)](file-XghwlkssV2ztJtsb4VtZC3tr)

Separate variables:

$$\frac{dy}{y} = 2 \frac{dx}{x}$$

$$\int \frac{dy}{y} = 2 \int \frac{dx}{x}$$

$$\ln |y| = 2 \ln |x| + c$$

$$|y| = e^c x^2$$

Thus,
$$y = ax^2$$

Again, $a < 0$, $a > 0$, and $a = 0$ are all acceptable. Possible solutions include, for example:
- $y = x^2$ $(a = 1)$
- $y = 2x^2$ $(a = 2)$
- $y = -x^2$ $(a = -1)$
- $y = 0x^2 = 0$ $(a = 0)$
- $y = -2x^2$ $(a = -2)$
- $y = 100x^2$ $(a = 100)$

**Example 4:** Find the curves that are perpendicular to the parabolas in Example 3.

We know that their slopes,
$$\frac{dy}{dx} = -\frac{x}{2y}$$

Separate variables:
$$ydy = -x \, dx$$

Take the antiderivative:
$$\int ydy = - \int x \, dx$$
$$\frac{y^2}{2} = -\frac{x^2}{2} + c$$
$$y^2 + x^2 = c$$

This is an equation for a family of ellipses. For these ellipses, the ratio of the $x$-semi-major axis to the $y$-semi-minor axis is $\sqrt{2}$ (see Fig. 3).

![Figure 3: The ellipses are perpendicular to the parabolas.](file-2E5mUVmRYYdro0ieedVUJAvG)

Separation of variables leads to implicit formulas for $y$, but in this case, you can solve for $y$:

$$y = \pm \sqrt{2(c - \frac{x^2}{2})}$$
