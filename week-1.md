# Week 1

## Big-O notation

There are different flavors of asymptotic complexity notation:

- $f(n) \in \mathcal O(g(n))$: $f(n)$ grows **no faster** than $g(n)$ as $n$
  gets large. Formally:

  $$
  f(n) \in \mathcal O(g(n)) \text{ if } \exists c > 0, N \in \mathbb Z \text{ such that } \forall n > N, |f(n)| < c |g(n)|
  $$
- $f(n) \in o(g(n))$: $f(n)$ grows **strictly slower** than $g(n)$. Formally:

  $$
  f(n) \in o(g(n)) \text{ if } \forall c > 0, \exists N_c \in \mathbb Z \text{ such that } \forall n > N_c, |f(n)| < c |g(n)|
  $$
- $f(n) \in \Omega(g(n))$: $g(n)$ grows **no faster** than $f(n)$. Formally:

  $$
  f(n) \in \Omega(g(n)) \text{ if } g(n) \in \mathcal O(f(n))
  $$
- $f(n) \in \omega(g(n))$: $g(n)$ grows **strictly slower** than $f(n)$.
  Formally:

  $$
  f(n) \in \omega(g(n)) \text{ if } g(n) \in o(f(n))
  $$
- $f(n) \in \Theta(g(n))$: $f(n)$ and $g(n)$ grow at the same rate. Formally:

  $$
  f(n) \in \Theta(g(n)) \text{ if } f(n) \in \mathcal O(g(n)) \text{ and } f(n) \in \Omega(g(n))
  $$
- $f(n) \doteq g(n)$ if
  $\lim_{n \rightarrow \infty} \frac{\log(f(n))}{\log(g(n))} = 1$,
  $f(n) \, \dot\le \, g(n)$ if
  $\lim_{n \rightarrow \infty} \frac{\log(f(n))}{\log(g(n))} \le 1$,
  $f(n) \, \dot\ge \, g(n)$ if
  $\lim_{n \rightarrow \infty} \frac{\log(f(n))}{\log(g(n))} \ge 1$.

This notation is crucial for analysing the complexity and scaling behavior of
algorithms and information-theoretic quantities.

## Stirling's approximation

Stirling's approximation for factorials:

$$
n! \doteq \sqrt{2 \pi n} \left( \frac n e \right)^n \left( 1 + \Theta\left(\frac 1 n\right) \right)
$$

This is a useful approximation when working with factorials, which often come up
in combinatorics and information theory. The key takeaway is that for large $n$,
the factorial $n!$ grows exponentially, and Stirling's formula provides a good
approximation.

## Binary random variables

Some specific results for binary random variables $X$ that take values in
$[0, 1]$:

- $\mathbb E(\bar X) = pn$, where $\bar X \triangleq \sum_{i=1}^n X_i$ is the
  sample mean. $n$ is the total number of binary random variables, or elements
  in the binary vector, being analysed.
- $\Pr[\bar X = \mathbb E(\bar X)] = \begin{pmatrix}n \\ pn\end{pmatrix}p^{pn} (1-p)^{(1-p)n} = \frac 1 {\sqrt{2 \pi p (1-p) n}} \left(1 + \Theta \left(\frac 1 n \right)\right)$.

This shows how the sample mean concentrates around the expected value for i.i.d.
binary trials.

## Types and type classes

For vectors $x \in X^n$:

- The **type** $T(\underline x)$ of a vector $\underline x$ is a
  length-$|\mathcal X|$ probability vector, where the $i$-th component is the
  fraction of occurrences of the symbol $i$ in $\underline x$.
- The **type-class** $\mathcal T(\underline x)$ is the set of all vectors
  $\underline x'$ such that $T(\underline x') = T(\underline x)$.

Some key results about the size of type-classes:

- The number of types of length-$n$ vectors over an alphabet $\mathcal X$
  satisfies
  $|\mathcal P_n(\mathcal X)| = {n + |\mathcal X| -1 \choose |\mathcal X| - 1} \le (n+1)^{|\mathcal X|-1}$.
- For a binary vector $\underline x \in \{0, 1\}^n$ with $qn$ ones, the size of
  its type-class is
  $|\mathcal T(\underline x)| = {n \choose qn} \doteq 2^{n H(q)}$, where
  $H(q) \triangleq q \log \frac 1 q + (1-q) \log \frac 1 {1-q}$ is the binary
  entropy function.

> Alphabet and vector space:
>
> - $\mathcal X$ represents the **alphabet** or set of possible symbols and
>   values. In the binary case, $\mathcal X = \{0, 1\}$.
> - $\underline x$ represents a vector of length $n$ containing elements from
>   the alphabet $\mathcal X$, i.e. $\underline x \in \mathcal X^n$.
>
> Types:
>
> - The type $T(\underline x)$ of a vector $\underline x$ is a
>   length-$\mathcal X$ probability vector, where the $i$-th component is the
>   fraction of occurrences of the symbol $i$ in $\underline x$.
> - The type captures the empirical distribution or the histogram of the symbols
>   in the vector $\underline x$.
>
> Type classes:
>
> - The type-class $\mathcal T(\underline x)$ is the set of all vectors
>   $\underline x'$ such that $T(\underline x') = T(\underline x)$.
> - The type-class contains all vectors that have the same empirical
>   distribution or type.
>
> Size of type-classes:
>
> - The number of types of length-$n$ vectors over the alphabet $\mathcal X$
>   satisfies $|\mathcal P_n(\mathcal X)| \le (n+1)^{|\mathcal X| - 1}$.
> - This provides an upper bound on the number of possible types for vectors of
>   length $n$ over the alphabet $\mathcal X$.
> - For a binary vector $\underline x \in \{0, 1\}^n$ with $qn$ ones, the size
>   of its type-class is approximately
>   $|\mathcal T(\underline x)| \doteq 2^{n H(q)}$ where $H(q)$ is the binary
>   entropy function.
> - This shows that the size of the type-class grows exponentially with the
>   length of the vector $n$, and the growth rate is determined by the binary
>   entropy of the type $q$.
>
> $q$:
>
> - In the context of the binary vector $x \in \{0, 1\}^n$, $q$ represents the
>   fraction or proportion of ones in the vector.
> - Specifically, if the binary vector $\underline x$ has $qn$ ones, then $q$ is
>   the ratio of the number of 1s to the total length $n$ of the vector.
> - So $q$ is the empirical probability or relative frequency of the symbol $1$
>   appearing in the binary vector $\underline x$.
>
> $\mathcal P_n(\mathcal X)$:
>
> - This represents the set of all possible types (empirical distribution) of
>   length-$n$ vectors over the alphabet $\mathcal X$.
> - In other words, $\mathcal P_n(\mathcal X)$ is the set of all
>   length-$|\mathcal X|$ probability vectors that can arise as the type of some
>   length-$n$ vector over the alphabet $\mathcal X$.
> - The size of this set, $|\mathcal P_n(\mathcal X)|$ is bounded above by
>   $(n+1)^{|\mathcal X| -1}$.

### Example

Let's say we have a binary alphabet $\mathcal X = \{0, 1\}$, and we have a
binary vector $\underline x = [0, 1, 1, 0, 1]$ of length $n = 5$.

1. Calculating the type $T(\underline x)$:
   - The type $T(\underline x)$ is a length $|\mathcal X| = 2$ probability
     vector that represents the empirical distribution of the symbols in
     $\underline x$.
   - In this case, there are 3 ones and 2 zeros in $x$.
   - The type $T(x) = \left( \frac 2 5, \frac 3 5 \right)$, since the fraction
     of 0's is $\frac 2 5$ and the fraction of 1's is $\frac 3 5$.
2. Calculating the type-class $\mathcal T(\underline x)$:
   - The type-class $\mathcal T(\underline x)$ is the set of all vectors
     $\underline x'$ that have the same type as $x$.
   - In other words, $\mathcal T(\underline x)$ contains all binary vectors of
     length 5 that have 3 ones and 2 zeros, in any order.
   - Some examples of vectors in $\mathcal T(\underline x)$ are:
     $[0, 1, 1, 0, 1]$, $[1, 0, 1, 1, 0]$, $[1, 1, 0, 0, 1]$, etc.
3. Size of the type-class $|\mathcal T(\underline x)|$:
   - For a binary vector $\underline x \in \{0, 1\}^n$ with $qn$ ones, the size
     of the type-class $\mathcal T(\underline x)$ is approximately $2^{n H(q)}$,
     where $H(q)$ is the binary entropy function.
   - In this case, $q = \frac 3 5$, so
     $H(q) = H \left(\frac 3 5\right) = 0.971$.
   - The size of the type-class is then
     $|\mathcal T(\underline x)| \approx 2^{5 \times 0.971} \approx 29$.
     However, the true value is ${5 \choose 3} = 10$.

> [!danger] WAT
>
> The approximation doesn't work.

## Probability of type

Building on the type-class concept, the probability that a vector $\underline x$
has has a particular type $q_\underline x$ is:

$$
\Pr[T(\underline x) = q_X] = {n \choose qn} p^{pn} (1-p)^{(1-p)n} \doteq 2^{-nD(q \| p)}
$$

where $D(q_X \| p)$ is the **Kullback-Leibler divergence** between the type
$q_X$ and the true underlying distribution $p$. This relates the probability of
observing a particular type to the "distance" between the empirical distribution
and the true distribution.

$$
D(q \| p) \triangleq q \log \left(\frac q p\right) + (1-q) \log \left( \frac{1-q}{1-p} \right)
$$

## (Binary) Pinsker's inequality

Pinsker's inequality is a mathematical relationship between two ways of
measuring the "distance" between probability distributions. We can think of it
like comparing two different ways to measure energy in physics. $D(q \| p)$ is
the KL divergence, and $|p-q|$ is just the absolute difference between the
probabilities. The inequality states that the KL divergence is always greater
than or equal to a constant times the square of the absolute difference.

$$
D(q \| p) \ge \frac{2}{\ln(2)} |p-q|^2
$$

For example, we can take a biased coin. The true probability of heads,
$p = 0.6$, while the estimated probability of heads (from experiments),
$q = 0.55$.

On the right side, we have
$|p-q|^2 = |0.6 - 0.55|^2 = |0.05|^2 = 0.0025 \Rightarrow \frac 2 {\ln(2)} \times 0.0025 = 0.0072$.
On the left hand side, the KL divergence $D(q \| p) = 0.0074$. Hence, the KL
divergence is larger than the right hand side, and so the inequality holds.

The inequality tells us that the KL divergence is always at least
$\frac 2 {\ln(2)}$ times the squared absolute difference. This means that if the
absolute difference is large, the KL divergence must be even larger. It provides
a useful lower bound, since if we know $D(q \| p)$, we can bound how different
$p$ and $q$ can be.

We can think of this like measuring distances. $|p-q|$ is like measuring
distance with a ruler, while $D(q \| p)$ is like measuring the actual path
length when you have to go over hills and valleys. Pinsker's inequality tells us
that the complex path is always at least a certain times longer than the
straight-line distance.

This is useful in physics when comparing theoretical predictions ($p$) with
experimental results ($q$). It's also useful in information theory when
analysing how much information is lost when using one distribution to
approximate another.

## Chernoff bound (additive form)

This is similar to uncertainty principles in physics. If we imagine that we are
measuring the average value of many identical experiments (like measuring
particle positions), $\bar X$ is the measured average, and $\mathbb E\bar X$ is
the true expected value. The Chernoff bound tells us how likely it is that our
measurement will deviate from the true value by more than some amount
($2 \epsilon n$). This bound shows us that this probability decreases
exponentially with the sample size $n$.

$$
\Pr\left[\left|\bar X - \mathbb E \bar X\right| \ge 2 \epsilon n\right] \,\dot\le\, \exp\left( -\frac 2 {\ln(2)} n \epsilon^2 \right)
$$

If we imagine that we are doing $n$ identical measurements (like measuring
particle positions). Each measurement will give us a binary outcome (like
"particle detected" or "not detected"). $\bar X$ is the measured average, and
$\mathbb E \bar X$ is the expected (theoretical) average. For example, we can
measure something in a lab $n$ times, and we know the theoretical expected value
(like mean energy) from calculations, and we want to know how likely it is that
our lab measurement average will be more than $2 \epsilon n$ away from the
theoretical expected value.

$\Pr\left[\left|\bar X - \mathbb E \bar X\right| \ge 2 \epsilon n\right]$ is the
probability that our measurement deviates from the expected value by more than
$2 \epsilon n$. $\left|\bar X - \mathbb E \bar X]\right|$ is how far our
measurement ($\bar X$) is from the expected value ($\mathbb E \bar X$).
$\epsilon$ is like the "tolerance" – how much error we are willing to accept.

$\exp\left( -\frac 2 {\ln(2)} n \epsilon^2 \right)$ gives us the upper bound on
that probability. It decreases exponentially with $n$ (the number of
measurements) and $\epsilon^2$ (our squared tolerance).

This shows us a few things:

- The more measurements we take (larger $n$), the less likely we are to be far
  from the expected value
- The larger our tolerance $\epsilon$, the less likely we are to exceed it.
- The bound drops off exponentially, which is very fast.

For example, let's say we're measuring electron spin. We do $n=1000$
measurements, and we want our result to be within $\epsilon = 0.1$ of the true
value. The bound tells us that the probability of our result being further than
0.1 of the true value is less than:

$$
\begin{align}
\exp\left( -\frac 2 {\ln(2)} n \epsilon^2 \right) &= \exp\left( -\frac 2 {\ln(2)} \times 1000 \times 0.1^2 \right) \\
&= \exp\left( -\frac {20} {\ln(2)} \right) \\
&\approx 2.06 \times 10^{-9}
\end{align}
$$

which is very small.

Hence if the tolerance $\epsilon$ decreases slower than $\frac 1 {\sqrt n}$
($\epsilon \in \omega\left(\frac 1 {\sqrt n}\right)$), then the measurements
will almost certainly be within the tolerance. Formally:

$$
\text{if }\epsilon \in \omega\left(\frac 1 {\sqrt n}\right) \text{ then } \Pr\left[\left|\bar X - \mathbb E \bar X\right| \ge 2 \epsilon n\right] \le 1 - o(1)
$$

This is similar to how measurement uncertainty in physics often scales as
$\frac 1 {\sqrt n}$.

The Chernoff bound is useful for estimating how many measurements we would need
for a desired confidence level, understanding the reliability of experimental
results, and designing experiments with appropriate sample sizes.

## Entropy perturbation bound (for general alphabets)

This is about how much of the entropy (a measure of disorder, similar to
thermodynamic entropy) changes when we slightly modify a probability
distribution. If two distributions $p$ and $q$ are too close to each other
(their $\ell_1$ distance is small), then their entropies can't be too different.
The bound is proportional to the size of the alphabet (the number of possible
outcomes).

$$
\left| H(p_X) - H(q_X) \right| \le \epsilon \log\left( \frac {|\mathcal X|} \epsilon \right)
$$

Let's take two probability distributions $p_X$ and $q_X$ over the same set
$\mathcal X$, for example $\mathcal X = \{1,2,3,4\}$,
$p_X = (0.2, 0.3, 0.4, 0.1)$ and $q_X = (0.25, 0.25, 0.35, 0.15)$. Then the
$\ell_1$-norm $\|p_X - q_X\|_1$ measures how different the distributions are by
calculating the sum of the absolute differences between probabilities. In this
example:

$$
\begin{align}
\|p_X - q_X \|_1 &= |0.2 - 0.25| + |0.3-0.25| + |0.4-0.35| + |0.1-0.15| \\
&= 0.05 + 0.05 + 0.05 + 0.05 \\
&= 0.2
\end{align}
$$

This is our $\epsilon$ in the bound.

The entropy measures uncertainty/randomness in the distribution. For a
distribution $p$:

$$
H(p) = - \sum_i p_i \log(p_i)
$$

This is similar to entropy in thermodynamics, and higher entropy means more
uncertainty/randomness.

The left hand side $|H(p_X) - H(q_X)|$ is how different the entropies are. The
bound tells us that this difference can't be too large. Specifically, it's at
most $\epsilon \log\left( \frac {|\mathcal X|} \epsilon \right)$ where
$|\mathcal X|$ is the size of the alphabet (number of possible outcomes), and
$\epsilon$ is how different the distributions are (the $\ell_1$-norm).

Physically, this is like comparing two gases. If their molecule velocities are
similar (small $\epsilon$), then their thermodynamic entropies must also be
similar. This bound tells us exactly how similar they must be.

This is useful in various fields:

- In physics, this tells us how much entropy can change when we slightly perturb
  a system.
- In information theory, it helps us understand how robust entropy measurements
  are.
- In statistical mechanics, it helps us bound entropy differences between
  similar states

Continuing the example above, $|\mathcal X| = 4$ (there are 4 possible outcomes)
and $\epsilon = 2$ (our $\ell_1$ distance from earlier). The bound says that:

$$
\begin{align}
|H(p_X) - H(q_X)| &\le 0.2 \log\left( \frac{4}{0.2} \right) \\
&\le 0.2 \log(20) \\
&\space\dot\le\space 0.86 \text{ bits}
\end{align}
$$

This means that the entropies of $p_X$ and $q_X$ cannot differ by more than 0.86
bits.

This gives us a few key insights:

- Small changes in probability (small $\epsilon$) lead to small changes in
  entropy.
- The bound gets looser with larger alphabet size $|\mathcal X|$.
- The relation involves $\log\left( \frac {|\mathcal X|} \epsilon \right)$, not
  just $\log\left( |\mathcal X| \right)$, making it tighter.

## (Binary) High probability sets

We can think of this like finding the smallest region in phase space that
contains almost all possible states of a system. In this case, $\mathcal B$ is
the smallest set of binary strings that contains almost all likely outcomes. The
size of this set is approximately 2 raised to the power of
$(nH(p) + n \epsilon \log\left( \frac 2 \epsilon \right))$, where $H(p)$ is the
entropy.

$\mathcal B$ is a subset of all the possible binary strings of length $n$. For
example, if $n=3$, then the full space $\{0, 1\}^3$ is:

$$
\{ 000, 001, 010, 011, 100, 101, 110, 111 \}
$$

$\mathcal B$ would be some subset of these strings that includes the most likely
outcomes.

$\Pr(\underline X \in \mathcal B) = 1 - o(1)$ means that the probability that
our outcome $\underline X$ is in the set $\mathcal B$ is very high, very close
to 1. $o(1)$ means that "something that approaches 0" as $n$ gets larger, so
$1-o(1)$ means "almost certainly". This is similar to physics, where we say a
particle is "almost certainly" in its ground state.

For example, we can consider a quantum system. There are many possible states
(like all possible binary strings), but most of the probability is concentrated
in a small subset. This is like finding the most important energy levels that
contain most of the system's probability.

To construct $\mathcal B$ "greedily", we start with an empty set, and keep
adding the most probable strings one by one, until the total probability reaches
$1 - o(1)$. For example, with $n=3$, say the probabilities were:

| string | probability |
| ------ | ----------- |
| 111    | 0.3         |
| 110    | 0.25        |
| 101    | 0.2         |
| 100    | 0.15        |
| 011    | 0.025       |
| 010    | 0.025       |
| 001    | 0.025       |
| 000    | 0.025       |

$\mathcal B$ might be $\{ 111, 110, 101, 100 \}$ because these total 0.9
probability.

The size bound of $\mathcal B$ is:

$$
|\mathcal B| \space\dot\le\space 2^{n H(p) + n \epsilon \log(2/\epsilon)}
$$

where $|\mathcal B|$ is the number of strings in our set, and $H(p)$ is the
entropy of the probability distribution. This bound tells us that $\mathcal B$
cannot be too large; it's approximately $2^{n H(p)}$ times some correction
factor.

This is important in various fields:

- In physics, this helps us identify which states matter the most.
- In coding theory, this helps us design efficient codes.
- In statistical mechanics, this is similar to identifying important
  microstates.

Let's use a practical example. Imagine measuring $n$ coin flips. Let $n = 1000$
flips of a biased coin with $p = 0.7$ for heads. Here,
$H(p) = - (0.7 \log(0.7) + 0.3 \log(0.3)) = 0.88$. The most likely outcomes will
have around 700 heads. So, $\mathcal B$ would contain strings with head counts
close to 700, not all $2^{1000}$ possible strings.

This is used in statistical mechanics, and is similar to how a gas at fixed
temperature occupies only a tiny fraction of all possible states, but that
fraction contains most of the probability.

## Strongly typical sets

This extends [(Binary) High probability sets](#binary-high-probability-sets) to
more general alphabets, not just binary. A sequence is considered "typical" if
its empirical distribution (what we actually observe) is close to the true
probability distribution. This is similar to how, in statistical mechanics, most
microstates of a system are "typical" and give rise to the expected macroscopic
properties.

There are 3 basic components of this:

- Alphabet $\mathcal X$ (possible outcomes), for example for a 4-sided die
  $\mathcal X = \{1,2,3,4\}$.
- $p_X$ is the true probability distribution. For a fair 4-sided die,
  $p_X = (0.25, 0.25, 0.25, 0.25)$.
- $T(\underline x)$ is the type (empirical distribution) of sequence
  $\underline x$. For example, if $\underline x = 1,1,2,3,1,4,1,2$, the type
  $T(\underline x) = \left(\frac 5 8, \frac 2 8, \frac 1 8, \frac 1 8\right)$.

A sequence $\underline x$ is $(\epsilon, n)$-strongly typical if its empirical
distribution $T(\underline x)$ is close to $p_X$. Here, "close" means that the
$\ell_1$ distance is $\le \epsilon$, where the $\ell_1$ distance is the sum of
absolute differences.

For example, let's say $\mathcal X = \{ 1,2,3 \}$, $p_X = (0.5, 0.3, 0.2)$,
$n=10$ and $\epsilon = 0.1$. For a sequence
$\underline x = 1,1,1,1,1,2,2,2,3,3$, the type
$T(\underline x) = (0.5, 0.3, 0.2)$. We can check if our sequence is typical:

$$
\| T(\underline x) - p_X \| = |0.5-0.5| + |0.3-0.3| + |0.2-0.2| = 0 \le \epsilon
$$

So this sequence is strongly typical.

Physically, this is like measuring particle positions. $p_X$ is the quantum
mechanical probability distribution, and $T(\underline x)$ is what we actually
measure in $n$ trials.

Strongly typical sequences are "reasonable" measurement outcomes, like getting
501 heads in 1000 coin flips (typical), and unlike getting all heads (not
typical).

Some properties:

- Most sequences are typical:
  $\Pr(\underline x \in \mathcal A_\epsilon^{(n)} (X)) \rightarrow 1$ as
  $n \rightarrow \infty$.
- The number of typical sequences is roughly
  $|\mathcal A_\epsilon^{(n)}| \doteq 2^{nH(p_X)}$ where $H(p_X)$ is the entropy
  of $p_X$.
- Each typical sequence has probability about $2^{-nH(p_X)}$.

> $\mathcal A_\epsilon^{(n)}$ is the same subset of most likely strings as
> $\mathcal B$ was in
> [(Binary) High probability sets](#binary-high-probability-sets), except now
> with an alphabet of arbitrary size.

This is related to [Sanov's Theorem](#sanov-s-theorem), which tells us that the
probability of observing an "atypical" sequence decreases exponentially with
$n$, similar to how exponentially suppressed.

This is used in various fields:

- In physics, it describes the likely measurement outcomes.
- In coding, it helps design efficient compression.
- In statistics, it helps understand "normal" behavior.
- In information theory, it is fundamental to channel coding.

### Sanov's Theorem

Sanov's Theorem is about the probability of observing empirical distribution
that deviate from the true distribution.

Let's say we have a true probability distribution $p_X$, and we take $n$
independent samples. We observe an empirical distribution $T(\underline x)$, and
now we want to know the probability of seeing a "weird" distribution.

Sanov's Theorem states that, for a set of distributions $\mathcal Q$:

$$
\Pr(T(\underline x) \in \mathcal Q) \doteq \exp\left( -n \times \min_{q \in \mathcal Q}(D(q \| p)) \right)
$$

where $D(q \| p)$ is the KL divergence we saw in
[(Binary) Pinsker's inequality](#binary-pinsker-s-inequality), $n$ is the number
of samples, and the minimum is taken over all distributions $q$ in set
$\mathcal Q$.

For [Strongly typical sets](#strongly-typical-sets):

$$
\mathcal Q = \{ q : \|q - p_X \|_1 > \epsilon \}
$$

$\mathcal Q$ is the set of "atypical" distributions. By Pinsker's inequality:

$$
D(q \| p) \ge \frac{2}{\ln(2)} |p-q|^2
$$

Therefore:

$$
\Pr(\underline x \notin \mathcal A_\epsilon^{(n)}) \le \exp(-\frac 2 {\ln(2)} n \epsilon^2)
$$

Using a physical example, imagine we're measuring particle positions. Let's say
the true distribution $p_X = (0.5, 0.3, 0.2)$. After $n=100$ measurements, what
is the probability of seeing $T(\underline x) = (0.7, 0.2, 0.1)$?

Sanov says this probability decreases exponentially with:

- How many measurements you take ($n$)
- How "weird" your observation is (measured by $D(T(\underline x) \| p)$).

Sanov's theorem is useful in various fields:

- In physics, it quantifies how unlikely "weird" measurements are. It is similar
  to how entropy increases in thermodynamics, and explains why we usually see
  "typical" behavior.
- In information theory, it shows that typical sets contain the most
  probability, justifies using typical sequences for coding, and gives error
  bounds for compression.

For a concrete numerical example, let's say we have a true distribution
$p = (0.5, 0.5)$, and an observed distribution $q = (0.7, 0.3)$, over the course
of $n = 100$ trials.

$$
D(q \| p) = 0.7 \log\left(\frac{0.7}{0.5}\right) + 0.3 \log\left( \frac{0.3}{0.5} \right) \approx 0.119
$$

So the probability bound is:

$$
\exp(-100 \times 0.119) \approx 2.7 \times 10^{-4}
$$

In statistical mechanics, this is similar to why gases spread out to fill
containers, why temperature equalises between objects, or why we see macroscopic
irreversibility.

Some key insights:

- Large deviations are exponentially unlikely.
- The rate of decay depends on how "strange" the deviation is.
- This explains why strongly typical sets have high probability.
- Gives quantitative bounds on atypical behavior.

## Lexicographic encoding

This is about data compression. Imagine we have a string of symbols (like a
message or a sequence of measurement outcomes). This encoding method allows us
to compress the string efficiently by:

- First describing what type of sequence it is (like saying how many 0s and 1s)
- Then describing where exactly in the list of possible sequences of that type
  this particular sequence appears.

This method is efficient because it compresses the data to nearly the
theoretical minimum length ($nH(X)$ where $H(X)$ is the entropy) and can be
implemented with reasonable computational complexity
($\mathcal O(n^3 \log^2(n))$ operations).

Basically, instead of encoding the whole sequence directly, we first describe
the type (frequency distribution), and then describe which specific sequence of
that type it is.

For example, say $n=4$, with a binary alphabet $\{0, 1\}$, and our original
sequence is 1101. To encode the string:

1. Describe the type:
   - Count: 3 ones, 1 zero
   - Type $T(\underline x) = (0.25, 0.75)$
2. Describe the position: Among all the sequences with 3 ones and 1 zero (our
   options are 1110, 1101, 1011, 0111), our sequence is number 2 in this list.

This works because:

1. Type information is relatively small, it takes about $O(\log(n))$ bits,
   because $|\mathcal P_n(X)| \le (n+1)^{|\mathcal X| - 1}$.
2. Position information takes about $n H(p)$ bits, where $H(p)$ is the entropy
   of the type. This is optimal by Shannon's source coding theorem.

A more detailed example: Let $n=8$, sequence = 11010110.

1. Type description:
   - Count: 5 ones, 3 zeros
   - Type $T(\underline x) = \left(\frac 3 8, \frac 5 8\right)$
2. Position in type-class:
   - List all sequences with 5 ones and 3 zeros in order:
     ```
     11111000
     11110100
     11110010
     ...
     00011111
     ```
   - Find the position of 11010110 in this list

The computational complexity is $\mathcal O(n^3 \log^2(n))$ because the encoding
needs to enumerate sequences in the type class, then find the position of the
sequence, and handle large numbers (hence the $\log^2$ factor).

Physically, we can think of organising books. Instead of describing the exact
location of each book, we first describe how many there are in each category,
then describe the arrangement within that constraint.

This type of encoding approaches the theoretical minimum. $nH(X)$ is Shannon's
entropy (theoretical minimum), $o(n)$ is some extra overhead, and this encoding
is perfectly reversible (lossless compression).
