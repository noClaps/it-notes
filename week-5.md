# Week 5

## Concatenated Codes

Imagine we're trying to send a message across a noisy channel (like a radio signal through static). We've learned 2 types of codes:

- Random codes: These are theoretically excellent, but computationally impractical.
- Reed-Solomon codes: These are practical but only work well with large alphabets.

George David Forney Jr had a brilliant idea to combine these two approaches, like making a sandwich with 2 types of bread. Here's how it works:

1. The first layer (outer code) takes our message and encodes it using Reed-Solomon codes. This is like wrapping the message in a protective layer.
2. The second layer (inner code) takes the Reed-Solomon encoded message and breaks it into smaller chunks. Each chunk then gets encoded again using smaller random codes. This is like adding another protective layer, but in smaller, more manageable pieces.

The beauty of this approach is that the combination gives us good error correction (from Reed-Solomon), near-capacity performance (from random codes) and reasonable computational complexity (since we're using small random codes).

We can think of concatenated codes like a two-layer security system for our message. Let's say we're sending a package across the country. We want 2 levels of protection:

1. Level 1 (outer code): We first put the items in secure boxes with special locks.
2. Level 2 (inner code): Then we put those boxes in shipping containers with additional security.

Let's see how this works in practice. Say we have a 1000-bit message that we want to send.

1. Step 1 (outer code – Reed-Solomon): Our 1000-bit message gets encoded using Reed-Solomon. This might turn it into, say, 1200 bits. These 1200 bits are then organised into blocks (like putting items into separate secure boxes).
2. Step 2 (inner code – small random codes): Each block from step 1 gets encoded again, but instead of one huge random code (which would be impractical), we use many small random codes. Each small block may be, say, 100 bits long, and each block gets its own random encoding.

The beauty of this system is how it handles errors.

- Inner code level: Each small block might have some errors, and some blocks might be decoded incorrectly, but because the blocks are small, decoding is computationally feasible.
- Outer code level: The Reed-Solomon code can correct errors in entire blocks, so even if some of the inner blocks are decoded incorrectly, the outer code can fix it. It's like having insurance for your insurance.

A real world example would be something like sending a text message through a noisy channel. Let's say our original message is "HELLO_WORLD".

1. Outer encoding (Reed-Solomon): This will add some protection, let's say it turns "HELLO_WORLD" into "HELLO_WORLD_PROTECT".
2. Inner encoding (small random codes): This will break it into chunks ("HEL", "LO_", "WOR", "LD_", "PRO", "TEC", "T"). Each chunk then gets its own random encoding.

If noise corrupts some parts, like let's say "WOR" gets corrupted, the inner code will try to decode each chunk, and even if the "WOR" chunk is decoded incorrectly, the Reed-Solomon will most likely fix it.

The advantages of this approach are that, by breaking the message into small chunks, we make the computational manageable, and we don't need a supercomputer to encode/decode. It gets fairly good performance, it gets close to the theoretical limit, and has strong error correction capabilities.

However, the trade-off we make by using this is that, to get really close to capacity, we need longer block lengths, more computational power and more sophisticated decoding algorithms.

Going into some of the maths, we start with some fundamental parameters:

- Rate: $R = 1 = H(p) - \epsilon$ where $\epsilon > 0$ is small. The small $\epsilon$ represents how far we are from perfect efficiency.
- Message length: $nR$ bits
- Inner code block length: $\log(n)$
- Number of inner code blocks: $k = \frac n {\log(n)}$

The outer Reed-Solomon code operates over the field $\mathbb F_{2^{\log(n)}}$. Each message chunk is viewed as an element of $\mathbb F_{2^{\log(n)}}$. The rate of this outer code is $1 - \delta$, and it can correct up to $\frac{\delta k}2$ errors among $k$ blocks.

For each inner code, the error probability $P_e \doteq 2^{-c \log(n)}$ for some constant $c$. The expected number of inner code errors is $k \cdot P_e$, and by Chernoff bound:

$$
\Pr(\text{inner codes in error} \ge 2k \cdot P_e) \le \exp(-k \cdot P_e) = \exp\left(-\frac n{\log(n)} \cdot P_e\right)
$$

For the concatenated code to fail, one of two things must happen:

- Too many inner code errors: $\Pr(\text{failure}) \le \exp\left( - \frac n {\log(n)} \cdot P_e \right)$.
- Reed-Solomon decoder fails: this occurs if more than $\frac{\delta k} 2$ inner codes fail, and the probability of this happening is $\le \exp\left( -\frac n {\log(n)} \right)$.

For inner codes, the error probability decreases exponentially with $\log(n)$, which means that longer messages have much better error protection. However, longer codes also mean more computational complexity.

The overall rate $R$ satisfies:

$$
\begin{align}
R &= (1 - \delta)(1 - H(p) - \epsilon) \\
&\doteq 1 - H(p) - (\delta + \epsilon)
\end{align}
$$

As $n \to \infty$, $\delta$ and $\epsilon$ can be made arbitrarily small, and the rate approaches channel capacity $1 - H(p)$.

The total complexity is:

- Inner codes: $\mathcal O\left( n\cdot 2^{\log(n)} \right) = \mathcal O(n^2)$.
- Outer code: $\mathcal O \left( n^3 \cdot \log^3(n) \right)$.
- Overall: $\mathcal O \left( n^3 \cdot \log^3(n) \right)$.

This means that if we double the message length, the computation time increases by roughly a factor of 8, plus some logarithmic factors.

## Rate Distortion Theory

This is about a fundamental question, "How much can we compress data if we're willing to accept some errors?" (Lossy compression).

Let's take a real-world example: We can think about compressing a photo to post online. Perfect reproduction would require too much data, so we accept some loss of quality to make the file size smaller. But how much compression is possible for a given quality level?

The Rate Distortion Theorem tells us that there's a fundamental limit to how much we can compress something while maintaining a certain quality level. This limit is called $R(D)$, where $D$ is the amount of distortion we're willing to accept. If we try and compress more than this limit, we'll get worse quality than $D$, and if we use more bits than this limit, then we're just being inefficient.

Taking the example from before, let's say we have a 12 MP photo that we're trying to post. In perfect quality we might need, say, 36 MB (zero distortion). But if we reduce to quality to where it's still good, we may be able to get that down to 1MB (small distortion). If we keep pushing our compression to 100KB, our image quality will be poor (large distortion).

Looking at this mathematically, we start with a source $X$ and a reconstruction $\hat X$:

- $d(x, \hat x)$ is the distortion measure between the original and its reconstruction.
- $D$ is the maximum allowed average distortion.
- $R(D)$ is the minimum bits per symbol needed for distortion $\le D$.

Given a source distribution $p(x)$, $R(D)$ is defined as:

$$
R(D) = \min I(X;\hat X)
$$

where the minimum is taken over all conditional distributions $p(\hat x | x)$ that satisfy:

$$
\sum_{x, \hat x} p(x) p(\hat x|x) d(x, \hat x) \le D
$$

We can use a binary source with Hamming distortion:

- $X \in \{0,1\}$ with $p(X=1) = p$.
- $d(x, \hat x) = 1$ if $x \ne \hat x$, 0 if $x = \hat x$.
- $R(D) = H(p) - H(D)$ for $0 \le D \le \min(p, 1-p)$.

Achievability proof:

1. Codebook generation: Generate $2^{nR}$ sequences according to $p(\hat x)$, where each sequence has length $n$.
2. Encoding: For input sequence $x^n$, find $\hat x^n$ in the codebook, where $d(x^n, \hat x^n) \le D + \epsilon$ for some small $\epsilon > 0$.
3. Probability of success: For $R > R(D)$, the probability of finding good $\hat x^n \to 1$ as $n \to \infty$, with error probability $\le 2^{-nE(R, D)}$ for some $E(R,D) > 0$.

The basic trade-off here is that for a lower rate $R$ you get more compression, but for a higher distortion $D$ you get more errors. $R(D)$ tells us the theoretical limit of this trade-off.

For example, let's say we have a string of bits: 1101001. If $D = 0.1$, we allow ourselves to get 10% of the bits wrong during compression. $R(D)$ tells us how many bits we need per original bit.

The practical implications of this come in real compression systems. In lossy image formats like JPEG, the trade-off is between file size and image quality, while in lossy audio formats like MP3, the trade-off is between file size and audio quality. Video codec have the same trade-off, between file size and video quality.
Ω
