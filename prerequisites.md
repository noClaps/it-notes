# Prerequisites

> [!important] NOTATION
> - All logarithms ($\log$) and exponentials ($\exp$) will be in base-$2$ (unless explicitly specified otherwise) since a "natural" unit of information is bits.
> - Sets will be denoted with calligraphic letters, e.g. $\mathcal X$.
> - Vectors will be denoted with underlines, e.g. $\underline x$.
> - Random variables will be denoted by capital letters, e.g. $X$. So, combined with the previous convention, random _vectors_ will be denoted by underlined capital letters, e.g. $\underline X$.
> - Notation such as $p_X(\cdot)$ references the probability mass function (p.m.f.) of random variable $X$. So $p_X(i)$ equals the probability that the random variable $X$ takes the value $i$.
> - For any vector $\underline v \in \mathbb R^n$, the $\ell_1$ norm $\| \underline v \|_1 = \sum_{i=1}^n |v_i|$.
> - We denote the length of a vector $\underline v$ as $len(\underline v)$
> - $\triangleq$ is for definitions. So $a \triangleq b$ means $a$ is defined to be $b$.
> - $\doteq$ is approximate. So $a \doteq b$ is the same as $a \approx b$.
> - When given a vector, say $(X_1, ..., X_n)$, if we want to reference only a (consecutive) subset of its components, say $X_i, X_{i+1}, ..., X_{j-1}, X_j$, we denote this as $X_i^j$. By convention, $X^n$ should be taken as meaning $X_1^n$.

## Probability Basics

Probability is like quantum states, just like a particle can be in different states with different probabilities, we can have a random variable $X$ that can take different values. For example:

$$
X = \begin{cases}
0 & \text{with probability } 1-p \\
1 & \text{with probability } p
\end{cases}
$$

This is called a **binary random variable** (like spin up/down).

> A concrete example: Let $p = 0.3$, the probability of getting $1$. So the probability of $0$ is $1 - p = 0.7$. If $X$ follows this distribution, we write:
>
> $$X \sim (0.7, 0.3)$$
>
> meaning $p(X=0) = 0.7$ and $p(X=1) = 0.3$.

This can be written as $p_X = (1-p, p)$.

## Expected value

Just like expectation values in QM, we can calculate the average/expected values:

$$
\mathbb E(X) = 0 \times (1-p) + 1 \times p = p
$$

For example with $p = 0.3$:

$$
\mathbb E(X) = 0.3
$$

which means that, on average, $X = 0.3$.

## Independent events

When we have multiple random variables that don't affect each other, we call them **independent and identically distributed** (i.i.d.). When there is a statement like "Let $X_i$ be i.i.d. binary random variables", this means that we are doing multiple independent trials of the same experiment.

## Probability mass function (p.m.f.)

In probability theory, the **probability mass function** (p.m.f.) formally describes the probability distribution of a discrete random variable. For a random variable $X$ that can take values in a set $\mathcal X$, the p.m.f. is denoted as $p_X(x)$ and gives the probability that $X$ takes the specific value $x$:

$$
p_X(x) = P(X = x)
$$

> - $\mathcal X$ is the set of all possible values for the random variable $X$.
> - $X$ is the random variable itself.
> - $x$ is a specific outcome or value from the set $\underline X$.

For example, if $X$ is a binary random variable:

$$
\begin{align}
p_X(0) &= 1 - p \\
p_X(1) &= p
\end{align}
$$

The p.m.f. provides a complete description of the probabilities associated with the possible values of the random variable.

## Probability laws

There are some fundamental probability laws we need to be familiar with:

- **Axiom of Nonnegativity**: $0 \le p_X(x) \le 1$ for all $x$ in $X$.
- **Axiom of Unitarity**: $\sum p_X(x) = 1$, summing over all possible values of $x$.

These ensure that the p.m.f. defines a valid probability distribution.

## Independence

When we have multiple random variables that don't affect each other, we call them independent. For independent variables $X$ and $Y$:

$$
P(X = x, Y=y) = P(X=x) P(Y=x)
$$

This factorisation property is key for working with joint distributions.
