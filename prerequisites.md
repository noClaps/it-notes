# Prerequisites

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
> - $x$ is a specific outcome or value from the set $\mathcal X$.

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

## Union bound

The **union bound**, also known as Boole's inequality, states that for any finite or countable set of events $\{ A_1, A_2, ..., A_n \}$, the probability of the union is less than or equal to the sum of their individual probabilities:

$$
P(A_1 \space\cup\space A_2 \space\cup\space ... \space\cup\space A_n) \le \sum_i P(A_i)
$$

In simpler terms, the probability of at least one event occurring is less than or equal to the sum of the probabilities of each event occurring individually. It's useful in information theory for error analysis, bounding failure probabilities in communication systems, analysing the probability of decoding errors and deriving achievability bounds. This bound is especially valuable because it's simple to apply, often gives useful results even though it's not always tight, and is valid regardless of whether the events are independent.
