# Week 3

## Fields

A field $\mathbb F$ is a set, like number systems like the set of real numbers
$\mathbb R$ or the set of complex numbers $\mathbb C$, where we can:

- Add or multiply numbers.
- Find opposites, like -5 is the opposite of 5.
- Find reciprocals, like $\frac 1 5$ is the reciprocal of 5.
- And these operations behave in "nice" ways, like we're used to.

These fields should follow some properties:

- **Closure**: For any $a$ and $b$ in the field $\mathbb F$, the result of
  adding or multiplying these elements should also be in $\mathbb F$. For
  instance, multiplying $3.2 \times -4.5$ (both in $\mathbb R$) gives $-14.4$
  (also in $\mathbb R$). Similarly, adding $(4 + 3i) + (5 + 8i)$ (both in
  $\mathbb C$) gives $(9 + 11i)$ (also in $\mathbb C$).
- **Associativity**: We should be able to apply these operations in any group
  order. So for any $a$, $b$ and $c$ in field $\mathbb F$,
  $(a + b) + c = a + (b + c)$ (the group order in which add add elements doesn't
  matter). Similarly, $(a \times b) \times c = a \times (b \times c)$ (the group
  order in which we multiply elements doesn't matter).
- **Commutativity**: We should be able to apply these operations to any two
  elements in any order. If have elements $a$ and $b$ in field $\mathbb F$, then
  $a \times b = b \times a$ and $a + b = b + a$.
- **Existence of identities**: This basically means that there should be the
  equivalent of 0 and 1 values in the field. Let's say we assign the equivalent
  of 0 to $b$ in this field $\mathbb F$, and we take any other value $a$ in
  $\mathbb F$, then $a + b = a$, and this value should be denoted as $0$
  (additive identity). Similarly, if we assign the equivalent of 1 to $c$ in
  $\mathbb F$, then $a \times c = a$, and this value should be denoted as $1$
  (multiplicative identity).
- **Existence of inverses**: This basically means that we should have a way to
  invert the values, whether by finding the opposite or the reciprocal. Let's
  say we have a value $a$ in the field $\mathbb F$. There should exist a value
  $b$ in the same field such that $a + b = 0$, and this value should be denoted
  as $-a$ (additive inverse). Similarly, there should exist a value $c$ in
  $\mathbb F$ such that $a \times c = 1$, and this value should be denoted as
  $a^{-1}$ (multiplicative inverse).
- **Distributivity of $\times$ over $+$**: This basically means that for any
  $a$, $b$ and $c$ in $\mathbb F$, multiplication should distribute itself over
  an addition operation. So if we have $a \times (b+c)$, then $a \times$ should
  distribute over $b$ and $c$ to give $(a \times b) + (a \times c)$.

Some examples of fields are $\mathbb R$ (real numbers), $\mathbb C$ (complex
numbers), and $\mathbb Q$ (rational numbers). However, $\mathbb Z$ (integers) is
not a field because there's no way to get a multiplicative inverse
($n^{-1} = \frac 1 n$ doesn't exist for any $n$ other than 1 in $\mathbb Z$).

## Euclid's algorithm

Euclid's algorithm is used to find the greatest common denominator of any two
numbers. We can think of this like finding the largest common unit of
measurement between two lengths. If we have a 15-meter rope and a 9-meter rope,
what's the largest measuring stick that can measure both lengths perfectly?

Here's how Euclid's algorithm works:

1. We start with two numbers, $a$ and $b$. Let's take them to be from the
   example above, $a = 15$ and $b = 9$.
2. We divide $a$ by $b$ and get the remainder.
   $a / b = 15 / 9 = 1 \text{ remainder } 6$. This basically means that
   $15 = 1 \times 9 + 6$.
3. If the remainder is 0, then $b$ is the greatest common denominator. If not,
   then we replace $a$ with $b$, and $b$ with the remainder. So in this case,
   now $a = 9$ and $b = 6$.
4. We repeat 2 and 3 until we get to a remainder of 0. So $9 = 1 \times 6 + 3$,
   and now $a = 6$ and $b = 3$. Finally, $6 = 2 \times 3 + 0$.
5. Therefore, 3 is the greatest common denominator.

Let's try another example, we can try to find the g.c.d. of 48 and 18:

$$
\begin{align}
a &= 48 \\
b &= 18 \\
\\
48 &= 18 \times 2 + 12 \\
a_1 &= 18 \\
b_1 &= 12 \\
\\
18 &= 12 \times 1 + 6 \\
a_2 &= 12 \\
b_2 &= 6 \\
\\
12 &= 6 \times 2 + 0 \\
\\
\therefore \text{ g.c.d.} &= 6
\end{align}
$$

But that's not all, Euclid's algorithm can also find $m$ and $n$ such that
$ma + nb = g$ where $g$ is the g.c.d. of $a$ and $b$. Using the same 48 and 18
example from above, we can work backwards:

$$
\begin{align}
6 &= 18 - 12 \times 1 \\
&= 18 - (48 - 18 \times 2) \\
&= 18 - 48 + (18 \times 2) \\
&= 18 \times 3 - 48 \times 1 \\
\end{align}
$$

So, $m = -1$ and $n = 3$.

This is very useful in number theory and cryptography, but also has other uses.
For example, it's handy in physics when you're dealing with resonance and need
to find out when two periodic motions will sync up, or in computer graphics when
you need to find the largest size of tile that will fit evenly in both width and
height.

## Finite fields

These are like normal [Fields](#fields) except that they're finite in size, and
have a limited number of elements. A good example of how this would work is like
doing clock arithmetic. When we add 5 hours to 22:00, we get 03:00. It "loops
around" back to being within the field, so the field is limited to being from
00:00:00 to 23:59:59.

> Let's ignore that clocks aren't a field, they don't have multiplicative
> inverses for instance, depending on how you look at it. It's an example to
> prove a point.

### Prime fields

This is a field with a prime number of elements. Let's take a prime number $p$.
There then exists a field $\mathbb F_p \triangleq \{0, 1, ..., p-1\}$ that
follows the following addition and multiplication rules:

- **Addition**: For any $a$ and $b$ in $\mathbb F_p$, addition is defined as
  $(a + b) \mod (p)$. This is usually denoted as $(a + b)$ since the fact that
  it's a finite field and so addition is $\mod (p)$ is implied from context,
  however it's also written as $(a +_p b)$ if written explicitly.
- **Multiplication**: For any $a$ and $b$ in $\mathbb F_p$, multiplication is
  defined as $(a \times b) \mod (p)$. This is usually denoted as $(a \times b)$
  since the fact that it's a finite field and so multiplication is $\mod (p)$ is
  implied from context, however it's also written as $(a \times_p b)$ if written
  explicitly.

An example of this can be a prime field with 5 elements:
$\mathbb F_5 = \{ 0,1,2,3,4 \}$. Here, whenever we add or multiply, we take the
remainder after dividing by 5 (like looping around with the clock example
above). So if we take $a = b = 4$, then $(4 +_5 4) = 3$ because 8 divides with 5
to give a remainder of 3. Similarly, $(4 \times_5 4) = 1$ because 16 divides
with 5 to give a remainder of 1. In the clock example from earlier, we were
effectively dividing by 24 to loop around.

### Irreducible polynomials

Just like prime numbers can't be factored into smaller integers, irreducible
polynomials can't be factored into smaller polynomials over a given field.
First, let's look at a simple example in real space $\mathbb R$:

- $x^2 - 1$ can be reduced to $(x+1)$ and $(x-1)$, since $(x+1)(x-1) = x^2 - 1$.
  Therefore it is _not_ irreducible in the field of real numbers.
- $x^2 + 1$ cannot be reduced any further in $\mathbb R$, we need complex
  numbers to factorise it, which aren't available in the field of only real
  numbers. Therefore, it is irreducible.

Now let's look at an example in a finite field, $\mathbb F_2$ for instance,
where the only allowed coefficients are 0 or 1:

- Let's start with a polynomial, $x^2 + x + 1$. Because all of the coefficients
  are 0 or 1, this polynomial exists in $\mathbb F_2$.
- The only possible factors of this polynomial are first-degree polynomials:
  $(ax + b)$.
- We can try all of the combinations of $a = 0,1$ and $b=0,1$.
- We will find that none of them multiply together to give us $x^2 + x + 1$.
- Therefore, $x^2 + x + 1$ is irreducible in $\mathbb F_2$.

We can prove this mathematically:

$$
\begin{align}
a &= 0, 1 \\
b &= 0, 1 \\
\\
\text{First degree polynomials: }& x, x + 1, 1 \\
\\
(x)(x) &= x^2 \\
(x)(x+1) &= x^2 + x \\
(x)(1) &= x \\
(x+1)(x+1) &= x^2 + 1 \\
(x+1)(1) &= x + 1 \\
(1)(1) &= 1
\end{align}
$$

None of these give us $x^2 + x + 1$, so it is irreducible in $\mathbb F_2$.

These are important because they are like building blocks. In physics, we build
complex wavefunctions out of simpler basis functions (think $\ket 0$ and
$\ket 1$). Similarly, we use irreducible polynomials to build larger fields.

The HAROLD fact states that for any prime $p$ and any positive integer $m$ there
exists at least one irreducible polynomial of degree $m$ over $\mathbb F_p$.
Basically, no matter what size field we need, we can always find an irreducible
polynomial to construct it.

## Extension fields

For example, if we want to construct $\mathbb F_{16}$ (which is basically just
$\mathbb F_{2^4}$), we can start with $\mathbb F_2$ (which is just 0 and 1), and
find an irreducible polynomial of degree 4 (like $x^4 + x + 1$), and use this to
construct a field with 16 elements. The elements of $\mathbb F_{16}$ will be all
polynomials with degree < 4 with coefficients in $\mathbb F_2$. This means that
every element will look like $ax^3 + bx^2 + cx + d$, where $a$, $b$, $c$ and $d$
are either 0 or 1.

$$
\begin{align}
0 &= 0000 \text{ in binary} \\
1 &= 0001 \text{ in binary} \\
x &= 0010 \text{ in binary} \\
x + 1 &= 0011 \text{ in binary} \\
x^2 &= 0100 \text{ in binary} \\
x^2 + 1 &= 0101 \text{ in binary} \\
x^2 + x &= 0110 \text{ in binary} \\
x^2 + x + 1 &= 0111 \text{ in binary} \\
x^3 &= 1000 \text{ in binary} \\
x^3 + 1 &= 1001 \text{ in binary} \\
x^3 + x &= 1010 \text{ in binary} \\
x^3 + x + 1 &= 1011 \text{ in binary} \\
x^3 + x^2 &= 1100 \text{ in binary} \\
x^3 + x^2 + 1 &= 1101 \text{ in binary} \\
x^3 + x^2 + x &= 1110 \text{ in binary} \\
x^3 + x^2 + x + 1 &= 1111 \text{ in binary} \\
\end{align}
$$

### Addition

Addition works by adding coefficients modulo 2:

$$
(x^3 + x + 1) + (x^2 + x + 1) = x^3 + x^2
$$

### Multiplication

Multiplication is trickier, after multiplying normally we have to reduce by the
irreducible polynomial from earlier, $x^4 + x + 1$. Let's start by multiplying
$x^3$ and $x^2$, for example:

$$
x^3 \times x^2 = x^5
$$

But $x^5$ doesn't exist in $\mathbb F_{16}$, so we need to reduce it by
$x^4 + x + 1$:

$$
x^5 = x \times x^4 = x \times (x + 1) = x^2 + x
$$

Therefore, in $\mathbb F_{16}$, $x^3 \times x^2 = x^2 + x$.

### Primitive element

We can also find a primitive element. Let's try $x$ as a candidate. We'll
compute its powers:

$$
\begin{align}
x^1 &= x \\
x^2 &= x^2 \\
x^3 &= x^3 \\
x^4 &= x + 1 \text{ because }x^4 + x + 1 = 0 \\
x^5 &= x^2 + x \\
x^6 &= x^3 + x^2 \\
x^7 &= x^3 + x + 1 \\
...
\end{align}
$$

If we continue this, we will get all the non-zero elements before returning to
1, making it a primitive element.

### Multiplicative inverse

There are two main ways to find the multiplicative inverses:

1. **Extended Euclidean Algorithm Method**: For element $a(x)$, find polynomials
   $s(x)$ and $t(x)$ such that $s(x)a(x) + f(x)t(x) = 1$ where $f(x)$ is our
   original irreducible polynomial ($x^4 + x + 1$ for $\mathbb F_{16}$). For
   example, if we want to find the multiplicative inverse of $x^3 + x + 1$:

   1. Divide $x^4 + x + 1$ by $x^3 + x + 1$:

      $$
      x^4 + x + 1 = x(x^3 + x + 1) + (x^2 + 1)
      $$

   2. Divide $x^3 + x + 1$ by $x^2 + 1$:

      $$
      x^3 + x + 1 = x(x^2 + 1) + 1
      $$

   3. Since the remainder is now 1, we're done. Working backwards:

      $$
      \begin{align}
      1 &= (x^3 + x + 1) - x(x^2 + 1) \\
      &= (x^3 + x + 1) - x((x^4 + x + 1) - x(x^3 + x + 1)) \\
      &= (x^3 + x + 1) - x(x^4 + x + 1) + x^2(x^3 + x + 1) \\
      &= (x^2 + 1)(x^3 + x + 1) - x(x^4 + x + 1)
      \end{align}
      $$

   So the multiplicative inverse is $x^2 + 1$.

2. **Exponential trick** (usually faster): In $\mathbb F_{16}$, any non-zero
   element $a$ satisfies $a^{15} = 1 = a^0$, and so
   $a^{14} = a^{15-1} = a^{0-1} = a^{-1}$. For example, taking
   $a = x^3 + x + 1$:

   $$
   \begin{align}
   (x^3 + x + 1)^{14} &= (x^3 + x + 1)^8 + (x^3 + x + 1)^4 + (x^3 + x + 1)^2 \\
   \\
   (x^3 + x + 1)^2 &= (x^3 + x + 1)(x^3 + x + 1) \\
   &= x^6 + x^4 + x^3 + x^4 + x^2 + x + x^3 + x + 1 \\
   &= x^6 + 2x^4 + 2x^3 + x^2 + 2x + 1 \\
   &= x^6 + x^2 + 1 \\
   \\
   x^6 &= x^2(x^4 + x + 1) + x^3 + x^2 \\
   &= x^3 + x^2 \\
   \\
   (x^3 + x + 1)^2 &= (x^3 + x^2) + x^2 + 1 \\
   &= x^3 + 1 \\
   \\
   (x^3 + x + 1)^4 &= (x^3 + 1)^2 \\
   &= (x^3 + 1)(x^3 + 1) \\
   &= x^6 + 2x^3 + 1 \\
   &= (x^3 + x^2) + 1 \\
   &= x^3 + x^2 + 1 \\
   \\
   (x^3 + x + 1)^8 &= (x^3 + x^2 + 1)^2 \\
   &= (x^3 + x^2 + 1)(x^3 + x^2 + 1) \\
   &= x^6 + x^5 + x^3 + x^5 + x^4 + x^2 + x^3 + x^2 + 1 \\
   &= x^6 + 2x^5 + x^4 + 2x^3 + 2x^2 + 1 \\
   &= x^6 + x^4 + 1 \\
   &= (x^3 + x^2) + (x + 1) + 1 \\
   &= x^3 + x^2 + x \\
   \\
   (x^3 + x + 1)^{14} &= (x^3 + x + 1)^8 \times (x^3 + x + 1)^4 \times (x^3 + x + 1)^2 \\
   &= (x^3 + x^2 + x) (x^3 + x^2 + 1) (x^3 + 1) \\
   &= (x^6 + x^5 + x^3 + x^5 + x^4 + x^2 + x^4 + x^3 + x)(x^3 + 1) \\
   &= (x^6 + 2x^5 + 2x^4 + 2x^3 + x^2 + x) (x^3 + 1) \\
   &= (x^6 + x^2 + x) (x^3 + 1) \\
   &= (x^3 + x^2 + x^2 + x) (x^3 + 1) \\
   &= (x^3 + 2x^2 + x)(x^3 + 1) \\
   &= (x^3 + x)(x^3 + 1) \\
   &= x^6 + x^3 + x^4 + x \\
   &= (x^3 + x^2) + x^3 + (x + 1) + x \\
   &= 2x^3 + x^2 + 2x + 1 \\
   &= x^2 + 1
   \end{align}
   $$

   Therefore, the multiplicative inverse is $x^2 + 1$.

## Linear algebraic notions that are similar/different for finite fields

### Similar

The ideas of:

- [Gaussian elimination](#gaussian-elimination)
- Matrix addition/multiplication/inverses
- Determinants
- Vector spaces
- Row/columns/null-spaces of matrices/bases/rank

are all shared between infinite fields like $\mathbb R$, $\mathbb C$ and finite
fields $\mathbb F_p$. The only difference is that all operations in the finite
field are $\mod p$.

#### Gaussian elimination

This is a way to solve a system of linear equations by converting them to an
easier format and "eliminating". Say we have two equations, $2x + y = 5$ and
$x + 3y = 4$, let's call them equations 1 and 2, respectively.

First, we multiply one of the equations such that one of its coefficients is the
same as the other. For example, we can multiply equation 2 by 2, so that $x$
becomes $2x$, matching the $2x$ in equation 1. This gives us $2x + y = 5$ and
$2x + 6y = 8$, the latter of which we can call equation 2a.

Now, we "subtract" equation 1 from 2a, giving us
$(2x-2x) + (6y - y) = (8 - 5) \Rightarrow 5y = 3$. We've eliminated the $x$
term. Therefore, we know that $y = \frac 3 5$. Now, we can solve any one of our
linear equations to get the value of $x$. Solving equation 1,
$2x + \frac 3 5 = 5$, gives us a value of $x = \frac {11} 5$.

This process is the same in finite fields, except all operations are $\mod p$
for a field of size $p$. For instance, solving the same problem in
$\mathbb F_5$:

$$
\begin{align}
2x + y &= 1 \text{ (since 5 = 0 in mod }5) \\
x + 3y &= 4 \\
\\
2x + y &= 1 \\
2x + y &= 3 \text{ (multiplying the first equation by 2)} \\
\end{align}
$$

> [!note]
>
> I discovered this on my own while trying to solve the problem Claude
> was giving me. Turns out you can't solve some problems in finite fields that
> work in $\mathbb R$ or $\mathbb C$.

We can see that this equation doesn't work. However, the idea still stands, we
can use Gaussian elimination to solve linear equations like these even in finite
fields.

### Differences

The main differences are that:

- Instead of Euclidean distance, we use [Hamming distance](#hamming-distance).
- Instead of Euclidean norm, we use [Hamming weight](#hamming-weight).
- "Angles" between vectors don't make sense. There is no natural notion of
  "size" or "direction" in finite field vectors, so we can't really have angles
  between them.

#### Hamming distance

In infinite fields, we use Euclidean distance,
$\sqrt{(x_1 - y_1)^2 + (x_2 - y_2)^2}$. However, in finite fields, we use
Hamming distance.

Basically, Hamming distance is the number of locations in which two vectors
differ. So if we have a vector $(1, 0 ,1)$ and another vector $(1, 1, 0)$, the
Hamming distance between them is 2. This is because 2 positions – positions 1
and 2 – differ between the vectors.

#### Hamming weight

In infinite fields, we use Euclidean norm $\sqrt{{x_1}^2 + {x_2}^2}$. However,
in finite fields, we use Hamming weight.

Basically, Hamming weight is the number of locations a vector is non-zero. So
the Hamming weight of a vector $(1, 0, 1, 0)$ is 2, since there are 2 non-zero
positions – the first and the third.

## Error-correcting code

We start with some basic parameters:

- $q$: the size of the alphabet we will be using. This is usually a prime $p$ or
  a prime power $p^m$.
- $k$: The number of message symbols. This is the length of the original
  message.
- $n$: The blocklength. This is the length of the message after encoding, it is
  always larger than $k$.
- $R$: The rate, or efficiency of communication, equal to $\frac k n$. The
  smaller $R$ is, the more redundancy there is, hence our communication method
  will hopefully be more tolerant of errors, at the cost of being slower.

Then, we add some key components:

- $\underline m$: The message. This is made up of $k$ symbols uniformly
  distributed in $\mathbb F_q$, formally written as $(\mathbb F_q)^k$.
- $\underline x$: The codeword. This is the encoded message, in $n$ symbols all
  in $\mathbb F_q$, formally written as $(\mathbb F_q)^n$.
- $\underline y$: The received, possibly corrupted, word. This is also of length
  $n$, and in $\mathbb F_q$. It corresponds to the noisy observation of
  $\underline x$ (which basically means after transmission and the data losses
  that happened), and may have up to $pn$ erasures (missing data) or errors
  (incorrect symbols).

We have some additional parts here as well:

- $\text{Enc}$: the encoder, which maps $\underline m$ to $\underline x$. We can
  write this as $\underline x = \text{Enc}(\underline m)$. Hence, the codeword
  $\underline x$ is also sometimes denoted as $\underline x(\underline m)$.
- $\text{Dec}$: the decoder, which maps $\underline y$ to $\underline{\hat m}$,
  the decoded message. We can write this as
  $\underline{\hat m} = \text{Dec}(\underline y)$.
- $\mathcal C$: the code. This is the collection of all possible codewords
  $\underline x$ that could be generated by the encoder.

Finally, we have the distance:

- $d$: minimum distance. This is the smallest Hamming distance in $\mathcal C$
  between any two codewords, i.e.
  $\min_{\underline x, \underline x' \in \mathcal C} d_H(\underline x, \underline x')$.
- Any code with minimum distance $d$ can tolerate up to $d-1$ erasures, or less
  than $\frac d 2$ errors.

Let's say we're working in $\mathbb F_2$ (binary):

1. We start with a message $\underline m = [1, 0, 1]$. The length of this
   message $k = 3$.
2. We encode this message using our encoder to get
   $\underline x = \text{Enc}(\underline m) = [1, 0, 1, 1, 0, 0, 1]$. The length
   of this encoded message $n = 7$.
3. Therefore, the rate $R = \frac k n = \frac 3 7$.
4. Let's say after transmission, we receive
   $\underline y = [1, 0, 1, 1, 1, 0, 1]$. The Hamming distance between
   $\underline x$ and $\underline y$ is 1, and we can see that the element in
   the 5th position has changed, so one error has occurred.

In practice, this workflow looks something like:

$$
\begin{align}
\text{Encoder: }& \underline m \rightarrow \underline x = \text{Enc}(\underline m) \\
\text{Channel: }& \text{ might corrupt } x \text{ to } y \\
\text{Decoder: }& \underline y \rightarrow \underline{\hat m} = \text{Dec}(\underline y) \text{ (}\underline{\hat m}\text{ is an estimate of }m\text{)}
\end{align}
$$

The goal with this is to add enough redundancy to correct errors, but not so
much that transmitting the message becomes too slow. So we need to find the
sweet spot between reliability $d$ and efficiency $R$.

#### Distance

The basic idea of distance in error correction is that, if two codewords are a
distance $d$ apart, then it takes $d$ changes to turn one into the other. For
example, if we have codeword 1: (1, 0, 0, 1) and codeword 2: (0, 1, 1, 1), then
their distance is 3, so it takes 3 changes to go from one to the other.

Let's say the minimum distance $d = 5$ between any two codewords. If we now get
a corrupted code word with 2 errors, we know that it can only be distance 2 from
the original codeword, but must be at least distance 3 from any other codeword.
Therefore, the closest codeword must be the original message.

> Let's say $n = 5$. Not every 5 character string will be a valid codeword,
> because the encoder uses a specific algorithm to generate these codewords. We
> will see this in a bit with the (7, 4, 3) Hamming code.

A visual example:

```
Original:    1 1 1 0 0
Received:    1 1 0 1 0
                 ^ ^   2 differences

Other valid: 0 0 0 1 1
             ^ ^     ^ 3 differences
```

Therefore, the received word is closer to the original message than any other
codeword.

This follows the rule of less than $\frac d 2$ errors. For instance, if we got 3
or more errors in the example above, we wouldn't be able to tell which valid
codeword was the closest, and therefore correct, one.

```
Original:    1 1 1 0 0
Received:    1 0 0 1 0
               ^ ^ ^   3 differences
Other valid: 0 0 0 1 1
             ^       ^ 2 differences
```

Here, we're finding the incorrect valid codeword as the closest one, because of
too many errors.

Erasures, on the other hand, are easier to correct, because we know which
positions are corrupted, and so we can correct up to $d-1$ erasures. For
example:

```
(? means erasure)

Original:    1 1 1 0 0
Received:    1 ? 1 ? 0

Other valid: 0 0 0 1 1
```

Only the original message matches, and so we can easily correct this. Whereas
with errors, we don't always know which positions are incorrect, so we can only
correct less than $\frac d 2$ errors.

## Linear codes

A linear code multiplies our message $\underline m$ with an $n \times k$
 **generator matrix** to generate the codeword $\underline x$. For example, in
$\mathbb F_2$, we can have a generator matrix:

$$
G = \begin{bmatrix}
1 & 0 & 1 & 1 \\
0 & 1 & 1 & 0
\end{bmatrix}
$$

and a message $\underline m = \begin{bmatrix}1 & 0\end{bmatrix}$. This gives us
a codeword:

$$
\begin{align}
\underline x &= \underline mG \\
&= \begin{bmatrix}
1 & 0
\end{bmatrix} \begin{bmatrix}
1 & 0 & 1 & 1 \\
0 & 1 & 1 & 0
\end{bmatrix} \\
&= \begin{bmatrix}
(1 \times 1) + (0 \times 0) & (1 \times 0) + (0 \times 1) & (1 \times 1) + (0 \times 1) & (1 \times 1) + (0 \times 0)
\end{bmatrix} \\
&= \begin{bmatrix}
1 & 0 & 1 & 1
\end{bmatrix}
\end{align}
$$

So a 2-bit message becomes a 4-bit codeword.

Linear codes have some key properties:

- The sum of two codewords is also a codeword.
- The field multiple of a codeword is also a codeword.
- The zero vector is always a codeword.
- The minimum distance $d$ is the minimum weight of a non-zero codeword.

### Repetition code

A simple way to encode messages is to just repeat them. Let's say we have
$\underline m = [1]$. Using a generator matrix
$G = \begin{bmatrix} 1 & 1 & 1 \end{bmatrix}$, we can get
$\underline x = \underline mG = \begin{bmatrix} 1 & 1 & 1 \end{bmatrix}$.

### (7,4,3) Hamming code

This takes a 4-bit message,
$\underline m = \begin{bmatrix} m_1 & m_2 & m_3 & m_4 \end{bmatrix}$ and
converts it into a 7-bit codeword. It does so by adding 3 parity bits
$\begin{bmatrix} p_1 & p_2 & p_3 \end{bmatrix}$ to get a codeword
$\underline x = \begin{bmatrix} p_1 & p_2 & m_1 & p_3 & m_2 & m_3 & m_4 \end{bmatrix}$.
The parity bits are chose so:

$$
\begin{align}
p_1 &= m_1 + m_2 + m_4 \\
p_2 &= m_1 + m_3 + m_4 \\
p_3 &= m_2 + m_3 + m_4
\end{align}
$$

This ensures minimum distance $d = 3$. This is achieved by making the parity
checks "overlap" – each message bit affects multiple parity bits, making it
impossible to change just one or two positions and get another valid codeword.
The generator matrix for this looks like this:

$$
G = \begin{bmatrix}
1 & 1 & 1 & 0 & 0 & 0 & 0 \\
1 & 0 & 0 & 1 & 1 & 0 & 0 \\
0 & 1 & 0 & 1 & 0 & 1 & 0 \\
1 & 1 & 0 & 1 & 0 & 0 & 1 \\
\end{bmatrix}
$$

### Reed-Solomon codes

The generator matrix is a Vandermonde matrix, with the $(i,j)$th element
equalling $(a_i)^{j-1}$ for distinct $a_i$'s. The field size $q$ has to be at
least $n$, and this can tolerate up to $n-k$ erasures.

The Vandermonde matrix looks like this:

$$
\begin{bmatrix}
1 & a_1 & {a_1}^2 & ... \\
1 & a_2 & {a_2}^2 & ... \\
1 & a_3 & {a_3}^2 & ... \\
\vdots & \vdots & \vdots & \ddots
\end{bmatrix}
$$

where $a_1$, $a_2$, $a_3$, etc., are all distinct field elements.
