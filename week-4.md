# Week 4

## Communication channels

We can think of this like sending a signal through a noisy channel (similar to
how we might think of radio waves or quantum states being affected by noise).
The key components here are:

- A sender (Alice)
- A receiver (Bob)
- A noisy channel between them

The problem here is that Alice wants to send a message to Bob through this noisy
channel. So how can we send that message, or any information, when we know the
channel will corrupt some of it?

## Discrete Memoryless Channel (DMC)

A DMC is a probabilistic transformation machine, similar to how we might think
about quantum measurements, except simpler because it's classical.

It is **discrete** because the input and output alphabets are finite fields. The
**memoryless** part comes from the idea that each input symbol transformed
independently of any past events. It's like having multiple experiments where
each one is independent of all the others. Therefore:

$$
p_{\underline Y | \underline X = \underline x} (\underline y) = \prod_{i=1}^n p_{Y|X=x_i}(y_i)
$$

which means that all of the constituent probabilities can simply be multiplied
together to get the total probability of the outcome. We call $p_{Y|X}$ the
**channel law**.

We can break this down into parts:

- We have an input $X$ that goes into the system. This is like preparing a
  quantum state.
- $p_{Y|X}$ is the channel law, like a measurement operator.
- $Y$ is the output we get out of the system, like the measurement results.

In the real world, this can be like throwing tennis balls through a tree. Some
of the tennis balls will get through the tree unchanged, others will deviate
slightly from their initial path, and a few will get completely blocked.
However, each throw is completely independent of previous throws (memoryless, it
doesn't "remember" any previous attempts), and there's only certain possible
outcomes (discrete, not continuous).

## Channel coding model

This is like creating an error correction system for measurements, but for
classical information.

Let's say Alice has a message $\underline M$ that's uniformly distributed over
all possible $nR$ bit vectors. We can imagine this like preparing $n$ quantum
states, where the rate $R$ is like the information density. It is uniformly
distributed, like an ensemble of equally likely states. Of course since this is
information theory, it's all in binary. This is formally written as:

$$
\underline M \sim U(\{0. 1\}^{nR})
$$

Alice wants to reliably communicate this message to Bob. To do this, Alice and
Bob design an encoder-decoder pair that satisfies some properties. The encoder
$\text{Enc}(\cdot)$ is a function that takes a message $\underline m$ and
transforms it into a codeword $\underline x$, that is of length $n$.

> Remember that $R = \frac k n$, so $nR$ is just $k$, the length of the original
> message.

Formally, this can be written as:

$$
\underline x = \text{Enc}(\underline m)
$$

or:

$$
\underline x(\underline m)
$$

The decoder $\text{Dec}(\cdot)$ works in the other direction, taking a codeword
$\underline x$ and transforming it into a (probably noisy) message
$\underline y$.

The **code** comprises of the encoder-decoder pair
$(\text{Enc}(\cdot), \text{Dec}(\cdot))$. The set of all possible encoder
outputs
$\{ \underline x(\underline m) = \text{Enc}(\underline m) \}_{\underline m \in \{0,1\}^{nR}}$
is called the **codebook** $\mathcal C$.

The average probability of error of a code $P_e(\mathcal C)$ is:

$$
P_e(\mathcal C) = \sum_{\underline m \in \{0,1\}^{nR}} p_\underline M (\underline m) \sum_{\underline x \in \mathcal X^n} \mathbb 1 (\underline x = \text{Enc}(\underline m)) \sum_{\underline y \in \mathcal Y^n} p_{\underline Y | \underline X = \underline x} (\underline y) \mathbb 1 (\text{Dec}(\underline y) \ne \underline m)
$$

Let's break this equation down with a simple analogy. Imagine throwing a 100
tennis balls (message bits) through a foggy field (noisy channel). We want to
know the probability that at least one ball goes missing or gets misidentified.

The first sum,
$\sum_{\underline m \in \{0,1\}^{nR}} p_\underline M (\underline m)$ goes
through all the possible messages, where $p_\underline M (\underline m)$ is the
probability of each message. Since the messages are uniformly distributed, the
probability for each message is:

$$
p_\underline M(\underline m) = \frac 1 {2^{nR}}
$$

This is like considering all the possible initial configurations.

Next, we have
$\sum_{\underline x \in \mathcal X^n} \mathbb 1 (\underline x = \text{Enc}(\underline m))$,
which is that for each message $\underline m$, what is the codeword
$\underline x$ that we're sending? The $\mathbb 1$ is an indicator function,
which returns 1 if the condition inside it is true, and 0 otherwise. In this
case, it will return 1 if $\underline x$ is the encoded version of
$\underline m$, and 0 otherwise. This maps the initial configuration to what we
actually send.

Finally, we have the third sum,
$\sum_{\underline y \in \mathcal Y^n} p_{\underline Y | \underline X = \underline x} (\underline y) \mathbb 1 (\text{Dec}(\underline y) \ne \underline m)$,
which goes through all possible received configurations $\underline y$.
$p_{\underline Y|\underline X = \underline x} (\underline y)$ is the probability
of receiving $\underline y$ when $\underline x$ was sent.
$\mathbb 1(\text{Dec}(\underline y) \ne \underline m)$ is another indicator
function, this time returning 1 if the decoded message is not the original, and
0 otherwise. This is like considering all the possible ways that transmission
could go wrong.

For example, let's say we're sending a 2-bit message $\underline m = 01$. Our
encoder takes this and outputs $\underline x = \text{Enc}(\underline m) = 0011$.
After transmission, we may receive $\underline y = 0111$, so one bit has
flipped. Now our error is:

$$
\begin{align}
P(\text{error}) = &\sum (\text{all possible messages}) \times P(\text{message}) \\
&\times \sum (\text{what we send}) \\
&\times \sum (\text{what could be received}) \times P(\text{wrong decode})
\end{align}
$$

When designing this code, Alice and Bob want to choose an $R$ as large as
possible, such that they can design a sequence, over increasing $n$, of codes
with rate $R$ and $P_e(\mathcal C) \xrightarrow{n \rightarrow \infty} 0$.
Basically, they want to make $n$ as close to $k$ as possible, while also
reducing the probability of error as $n$ increases. Given that $n$ always larger
than $k$, this basically means that we want to send as little data as possible,
while still avoiding errors through a noisy channel.

## Binary Erasure Channel (BEC)

This is a [Discrete Memoryless Channel (DMC)](#discrete-memoryless-channel-dmc)
with:

$$
p_{Y|X=x_i}(y_i) = \begin{cases}
x_i & \text{with probability } 1-p \\
E & \text{with probability } p
\end{cases}
$$

Here, $E$ is the **erasure symbol**. It basically means a symbol that got lost,
or "erased" during transmission.

If we imagine sending bits (0s and 1s), sometimes a bit gets lost (erased) with
probability $p$. However, if a bit does get through, it gets through perfectly,
with no errors. You either get a valid result or no result at all. So if you
send a 0, there's a $1-p$ chance you get a 0 out the other end, and a $p$ chance
that you get $E$, and the same for if you send a 1.

For any $\epsilon > 0$ (where $\epsilon$ is small), the rate
$R = 1 - p - 2 \epsilon$ is achievable with
$P_e(\mathcal C) \xrightarrow{n \to \infty} 0$ using the following linear code
(with both encoding and decoding complexity that is a polynomial in $n$):

1. First, a random $n \times nR$ generator matrix $G$ is chosen, where each
   element is randomly assigned to 0 or 1 (like flipping a coin). Formally: a
   random $n \times nR$ matrix $G$ over $\mathbb F_2$ is chosen with each entry
   chosen i.i.d. $\text{Bernoulli}(\frac 1 2)$.
2. Then, the generator matrix $G$ is used to encode the message we are trying to
   send $\underline m$ to generate the codeword $\underline x$. This can be
   written as $\underline x = G \underline m$. Alice then sends this codeword
   over a noisy channel to Bob.
3. Bob receives $\underline y$, which is just $\underline x$ with some bits
   erased ($E$). Bob's decoder can then use the non-erased bits to solve linear
   equations over $\mathbb F_2$ to try and retrieve $\underline m$. If there's a
   unique solution after this, then that's the message, but if there are
   multiple possible solutions, then the decoder declares an error.

There are two types of errors that can happen:

- **Too many erasures**: If the channel erases more than $(p + \epsilon)n$ bits,
  then the decoder will declare an error. By the Chernoff bound, the probability
  for this to happen is exponentially small for large $n$. This is like how in
  statistical mechanics, large systems are very unlikely to deviate too far from
  the average state.
- **Ambiguous solution**: This happens when the non-erased solutions don't give
  a unique answer. The probability of this happening is also exponentially small
  because the random matrix $G$ is most likely "well-behaved".

  If we take the number of bits that got erased to be $e$, then we can create a
  new matrix $G'$ that is just $G$ but with the rows corresponding to the erased
  bits removed, so a $(n-e) \times nR$ matrix. We then want to find the
  [Rank](#rank) of $G'$, and if it's equal to $nR$ then there is a unique
  solution. Assuming that there are fewer than $(p + \epsilon)n$ erasures, the
  probability that $G'$ has a rank less than $nR$ is exponentially small, so the
  probability of an ambiguous solution is also exponentially small.

At the same time, any code with rate $R = 1 - p + \epsilon$ must have a
probability of error bounded away from zero. What this means is if we're trying
to send information at a rate higher than $1-p$, then we're guaranteed to have
errors, regardless of how clever our code is.

> [!note] I don't know what the inequalities are to prove this, they're
> somewhere in the (handwritten?) notes, so you'd have to check that for
> yourself.

### Rank

The rank is the number of "truly independent directions" or "degrees of freedom"
a matrix has. We can think of vectors in 3D space. If we have only one vector,
then that's a rank of 1 (1 direction). If we have 2 non-parallel vectors, that's
now 2 directions. 3 non-parallel vectors represent 3 directions, and so on.
However, if we have 3 non-parallel vectors, but one is a combination of two
others (think $\vec x$, $\vec y$ and $\vec z = \vec x + \vec y$), then the rank
is less than 3.

Let's say we have a matrix:

$$
M = \begin{pmatrix}
1 & 0 \\
0 & 1
\end{pmatrix}
$$

This has a rank of 2, since there are 2 independent directions. This is like
basis vectors $\hat i$ and $\hat j$ in physics.

Another matrix:

$$
M = \begin{pmatrix}
1 & 0 \\
2 & 0
\end{pmatrix}
$$

has a rank of 1, since the second row is parallel to the first row, just twice
the length.

Finally:

$$
M = \begin{pmatrix}
0 & 0 \\
0 & 0
\end{pmatrix}
$$

has a rank if 0, since there are no non-zero elements. It's like having no
vectors.

Basically, we want to think about how many rows are independent and therefore
how many independent equations we have, or how many columns are independent and
therefore how many independent variables we can solve for.

## Binary Symmetric Channel (BSC)

This is a [Discrete Memoryless Channel (DMC)](#discrete-memoryless-channel-dmc)
with:

$$
p_{Y|X=x_i}(y_i) = \begin{cases}
x_i & \text{with probability } 1-p \\
1-x_i & \text{with probability } p
\end{cases}
$$

This is a noisy measurement where bits can flip. Each bit has a $1-p$
probability of staying the same ($0 \to 0$, $1 \to 1$), and a probability $p$ of
flipping ($0 \to 1$, $1 \to 0$). Despite this, we can reliably communicate at
rate $R = 1 - H(p) - \delta$, where $H(p)$ is the binary entropy function and
$\delta$ is any small positive number, using the following random code (with
encoding and decoding complexity that is exponential in $n$):

1. First, we create a random codebook $\mathcal C$ of size $2^{nR} \times n$,
   where each entry is a 1 or 0 with equal probability. Formally: A random
   $2^{nR}\times n$ codebook $\mathcal C$ over $\mathbb F_2$ is chosen with each
   entry chose i.i.d. $\text{Bernoulli}(\frac 1 2)$.
2. Then, Alice's message $\underline m$ is encoded by selecting the
   $\underline m$-th row of the codebook $\mathcal C$ to give $\underline x$.
3. Bob then receives $\underline y$, which is just $\underline x$ with some bits
   flipped. To decode this, we use $\epsilon > 0$, which is a function of
   $\delta$, and look at all the sequences within Hamming distance
   $n(p + \epsilon)$ of $\underline y$, which creates a "Hamming ball"
   $\mathcal B_H(\underline y, n(p+\epsilon))$. If this Hamming ball contains
   exactly one codeword $\underline x$ that's also in $\mathcal C$ then the
   decoder returns the message corresponding to that codeword. However, if there
   are no codewords, or multiple, then the decoder returns an error.

There are two types of errors that can happen:

- **Too many bit-flips**: If the channel flips more than $n(p+\epsilon)$ bits,
  then Bob's decoder will return an error since the codeword $\underline x$ will
  not be in Bob's Hamming ball. By the Chernoff bound, the probability of this
  happening decreases exponentially with $n$.
- **"Spoofing" codeword**: There is an exponentially small chance that another
  valid codeword $\underline x'$ appears close to the received signal, but
  doesn't decode into the correct message.

At the same time, any code with rate $R = 1 - H(p) + \epsilon$ must have a
probability of error bounded away from zero. What this means is that if we're
trying to send information at a rate faster than $1 - H(p)$ then we're
guaranteed to have errors, regardless of how clever our code is.

> [!note] I don't know what the inequalities are to prove this, they're
> somewhere in the (handwritten?) notes, so you'd have to check that for
> yourself.

## Channel capacity of general DMCs

Given channel law $p_{Y|X}$, we can define the channel capacity as:

$$
C = \max_{p_X \in \mathcal P(\mathcal X)} I(X;Y)
$$

It is the maximum rate of reliable communication. It's like finding the "speed
limit" of information transfer. For BEC, the channel capacity is $C = 1-p$,
while for BSC, the channel capacity is $C = 1 - H(p)$.

We also have the optimal input $p_X^*$:

$$
p_X^* = \arg \max_{p_X \in \mathcal P(\mathcal X)} I(X;Y)
$$

It is the input distribution that achieves the maximum channel capacity. It's
like finding the optimal settings for an experiment. For BSC, it turns out that
a uniform distribution is optimal, while for other channels this could vary.

> [!note] I was curious why the uniform distribution was optimal if it maximised
> entropy, which would in turn minimise the channel capacity, so I asked Claude
> about it. Here is its response, rewritten by me:
>
> The channel capacity depends on the mutual information
> $I(X;Y) = H(X) - H(X|Y)$, which depends on both the entropy of the input
> distribution $H(X)$, and the entropy of the channel $H(X|Y)$. Since the
> entropy of the channel is fixed, $I(X;Y) \propto H(X)$, so increasing the
> entropy of the input distribution increases the mutual information of the
> input and output distributions, hence increasing the channel capacity.
>
> Therefore, by maximising the entropy with an uniform distribution, we also
> maximise the channel capacity.

## General DMC

This is the general case that all DMCs, like BEC and BSC, follow.

The rate $R = C - \delta$, where $C$ is the channel capacity and $\delta$ is a
small positive number, is achievable with
$P_e(\mathcal C) \xrightarrow{n \to \infty} 0$ using the following random code
(with encoding and decoding complexity that is exponential in $n$):

1. First, we create a random $2^{nR}\times n$ codebook $\mathcal C$ over the
   alphabet $\mathcal X$, where each row has type $p_X^*$, the optimal input
   distribution.
2. Then, we generate the codeword $\underline x$ by selecting the
   $\underline m$-th row of the codebook $\mathcal C$. This is similar to what
   we did in [Binary Symmetric Channel (BSC)](#binary-symmetric-channel-bsc).
   Alice then sends this codeword over the noisy communication channel.
3. Bob receives it as $\underline y$. We then look for the codeword
   $\underline x$ in the codebook $\mathcal C$ where the joint type
   $T(\underline x, \underline y)$ is close to what we expect:

   $$
   \| T(\underline x, \underline y) - p_X^*(x) p_{Y|X=x}(y) \|_1 \le \epsilon
   $$

   where $\epsilon$ is a function of $\delta$. If there is a unique codeword
   found, then Bob's decoder outputs the message corresponding to that decoder.
   If no codeword is found, or multiple are found, then the decoder outputs an
   error.

There are two types of errors that can happen:

- **Atypical noise**: If the truly transmitted codeword $\underline x$ and the
  received signal $\underline y$ have a joint type
  $T(\underline x, \underline y)$ that does not satisfy the inequality, then the
  decoder will output an error. This basically means that what was received was
  too different from what we expected, and so we can't decode it. The
  probability of this happening decreases exponentially with increasing $n$.
- **"Spoofing" codeword**: The received signal $\underline y$ seems to match up
  with a different codeword $\underline x'$ than what was sent. It looks like
  something else could have been sent, which would decode into the wrong
  message. The probability of this happening is exponentially small.

At the same time, any code with rate $R = C + \epsilon$ must have a probability
of error bounded away from zero. This means that if we try sending information
at a rate $R$ greater than the channel capacity $C$, then we're guaranteed to
have some errors, no matter how clever our code is.
