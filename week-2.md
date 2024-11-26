# Week 2

## Entropy

This is similar to the concept of entropy we know from physics. It measures the
"uncertainty" or "randomness" in a signal. Like with physical entropy, the
higher the value, the more disordered or uncertain the signal is. If we have a
completely predictable signal (like always rolling a 6 on a die), then the
entropy is 0. Maximum entropy occurs when all outcomes are equally likely (like
a fair die).

Entropy measures disorder in a system. More possible states mean higher entropy,
and a uniform distribution of states is maximum entropy. On the other hand,
highly ordered states are low entropy. In information theory, the formula for
entropy is:

$$
H(X) = H(p_X) = \sum_{x \in \mathcal X} p_X(x) \log\left( \frac 1 {p_X(x)} \right)
$$

Let's use a few examples to explain this:

- Let's say we have perfect certainty (like perfectly ordered crystals). Imagine
  a "signal" that's always the same value, like a broken thermometer that always
  shows 20ºC. Here, the probability of 20ºC = 1, and the probability of all
  other values is 0. Hence, the entropy is 0 (there is no uncertainty).

$$
H(X) = 1 \log(1) = 0
$$

- Let's consider the binary case (like a two-state system). We can think of a
  coin flip. For a fair coin, $p(\text{heads}) = p(\text{tails}) = \frac 1 2$.
  Hence, entropy is:

  $$
  H(X) = \frac 1 2 \log (2) + \frac 1 2 \log(2) = \frac 1 2 + \frac 1 2 = 1 \text{ bit}
  $$

  This is the maximum entropy for a two-state system. For a biased coin, the
  entropy would be lower as there is more certainty of the outcome.

- Let's consider a system with multiple states (like energy levels). We can say
  that each of those states has a different probability, like
  $(A = 0.5, B = 0.25, C = 0.125, D = 0.125)$. This produces a lower entropy
  than if all the states were equally likely. The entropy for this system would
  be:

  $$
  H(X) = \frac 1 2 \log(2) + \frac 1 4 \log(4) + \frac 1 8 \log(8) + \frac 1 8 \log(8) = \frac 1 2 + \frac 1 2 + \frac 3 8 + \frac 3 8 = \frac 7 4 \text{ bits}
  $$

  If all the states were equally likely (0.25 each), the entropy would have been
  2 bits, so as there is more "order" or predictability, the entropy is lower.

Some key properties:

- Minimum entropy occurs when the outcome is certain (probability = 1), like a
  system frozen in its ground state.

  $$
  H(X) = 0
  $$

- Maximum entropy occurs when all outcomes are equally likely, like a system at
  infinite temperature.

  $$
  H(X) = \log(\text{number of possible states}) = \log(|\mathcal X|)
  $$

- The entropy uses logarithms because it makes it additive (like in physics).
  The entropy of independent events can be summed, $H(X, Y) = H(X) + H(Y)$.
  Since the logarithms are in base-2, the entropy is measured in "bits".

For example, this concept can be used in weather forecasting. Imagine if the
probabilities for weather during a summer day were
$(\text{Sunny} = 0.7, \text{Cloudy} = 0.2, \text{Rainy} = 0.1)$, which has less
entropy than winter where the probabilities might be more equal. Therefore, by
knowing that it's a summer day, we can reduce our uncertainty about the weather.

The big insight is that entropy measures the average uncertainty of our system.
Just like in statistical mechanics where higher entropy means more possible
microstates, in information theory higher entropy means that we need more "bits"
on average to describe what's happening.

## Joint entropy

This measures the total uncertainty when we have two related things, say $X$ and
$Y$, for example, temperature and pressure readings in a system. It considers
how they behave together, not just individually.

The joint entropy $H(X, Y)$ is like measuring the total uncertainty of a system
with two variables – similar to how we think about the total energy of a system
with two interacting parts.

$$
H(X, Y) = H(p_{X,Y}) = \sum_{(x, y) \in \mathcal X \times \mathcal Y} p_{X,Y}(x,y) \log\left( \frac 1 {p_{X,Y}(x,y)} \right)
$$

For example, if we take a simple weather system, with $X$ being the temperature
(hot/cold), and $Y$ being the sky conditions (cloudy/clear), we can create a
joint probability table:

|           | Clear | Cloudy |                    |
| --------- | ----- | ------ | ------------------ |
| **Hot**   | 0.4   | 0.1    | = 0.5 (total hot)  |
| **Cold**  | 0.1   | 0.4    | = 0.5 (total cold) |
| **Total** | 0.5   | 0.5    | = 1.0              |

Some key properties:

- Chain rule (like in physics where we can break down total energy):

  $$
  H(X, Y) = H(X) + H(Y|X)
  $$

  This basically just means:

  $$
  \text{Total entropy} = \text{Uncertainty of }X + \text{Remaining uncertainty of }Y\text{ after knowing }X
  $$

  just like
  $\text{Total Energy} = \text{Kinetic Energy} + \text{Potential Energy}$.

- Upper and lower bounds:

  $$
  H(X, Y) \le H(X) + H(Y)
  $$

  with equality only if $X$ and $Y$ are independent. This is similar to how the
  total energy of interacting particles can be less than the sum of the
  individual energies.

There are a few physical analogies we can use to explain different types of
systems with joint entropy:

- **Independent systems**: This is like two non-interacting particles. The total
  entropy is just the sum of the individual entropies:

  $$
  H(X, Y) = H(X) + H(Y)
  $$

  For example, the temperatures in New York and Tokyo can be considered
  independent systems.

- **Completely dependent systems**: This is like rigidly connected particles.

  $$
  H(X,Y) = H(X) = H(Y)
  $$

  For example, the temperatures in ºC and in ºF is a completely dependent
  system, since knowing one tells you the other.

- **Partially dependent systems**: This is like weakly interacting particles.

  $$
  H(X) + H(Y|X) \text{ with } H(Y|X) < H(Y)
  $$

  For example, the temperature and pressure in a room can be a partially
  dependent system, since knowing the temperature can give you some idea about
  the pressure, but not the true value.

Let's look at a two-particle system, for example. We can say that $X$ is the
spin of particle 1 (up/down), and $Y$ is the spin of particle 2 (up/down).

If these particles are completely independent, then:

$$
\begin{align}
p(\text{up}, \text{up}) &= 0.25 \\
p(\text{up}, \text{down}) &= 0.25 \\
p(\text{down}, \text{up}) &= 0.25 \\
p(\text{down}, \text{down}) &= 0.25
\end{align}
$$

and the joint entropy is:

$$
\begin{align}
H(X, Y) &= H(X) + H(Y) \\
&= \left[\frac 1 2 \log(2) + \frac 1 2 \log(2)\right] + \left[\frac 1 2 \log(2) + \frac 1 2 \log(2)\right] \\
&= 1 + 1 \\
&= 2 \text{ bits}
\end{align}
$$

which is the maximum possible. If the particles are entangled:

$$
\begin{align}
p(\text{up}, \text{up}) &= 0 \\
p(\text{up}, \text{down}) &= 0.5 \\
p(\text{down}, \text{up}) &= 0.5 \\
p(\text{down}, \text{down}) &= 0
\end{align}
$$

then the joint entropy is:

$$
\begin{align}
H(X, Y) &= \sum p_{X,Y}(x,y) \log\left(\frac 1 {p_{X,Y}(x,y)} \right) \\
&= p(\text{up}, \text{up}) + p(\text{up}, \text{down}) + p(\text{down}, \text{up}) + p(\text{down}, \text{down}) \\
&= 0 + 0.5 + 0.5 + 0 \\
&= 1 \text{ bit}
\end{align}
$$

The same calculation can also be used for independent system from earlier:

$$
\begin{align}
H(X, Y) &= \sum p_{X,Y}(x,y) \log\left(\frac 1 {p_{X,Y}(x,y)} \right) \\
&= p(\text{up}, \text{up}) + p(\text{up}, \text{down}) + p(\text{down}, \text{up}) + p(\text{down}, \text{down}) \\
&= \frac 1 4 \log(4) + \frac 1 4 \log(4) + \frac 1 4 \log(4) + \frac 1 4 \log(4) \\
&= \frac 1 2 + \frac 1 2 + \frac 1 2 + \frac 1 2 \\
&= 2 \text{ bits}
\end{align}
$$

To visualise how joint entropy works, we can imagine the x-axis being the first
variable, the y-axis being the second variable, and the z-axis being their joint
probability. The volume under this surface then becomes the joint entropy.

The key insight is that joint entropy tells us how much total uncertainty exists
in a system with two variables, accounting for any relationships between them.
The joint entropy can also be extended to any number of variables over possibly
different alphabets:

$$
H(X_1, ..., X_n) \triangleq \sum_{(x_1, ..., x_n) \in \mathcal X_1 \times ... \times \mathcal X_n} p_{X_1, ..., X_N}(x_1, ..., x_n) \log\left(\frac 1 {p_{X_1, ..., X_N}(x_1, ..., x_n)} \right)
$$

## Conditional entropy

This asks, "If I know $Y$, how much uncertainty remains about $X$?" For example,
if we know today's weather ($Y$), how uncertain are we about tomorrow's weather
($X$)?

It can be like measuring position after measuring momentum in quantum mechanics,
or like knowing the remaining uncertainty in energy after measuring temperature.

$$
H(X|Y) = \sum_{y \in \mathcal Y}p_Y(y) H(X|Y=y)
$$

where:

$$
H(X|Y=y) = \sum_{x \in \mathcal X} p_{X|Y=y}(x) \log\left( \frac{1}{p_{X|Y=y}(x)} \right)
$$

For example, we can consider a temperature and weather system, where $X$ is the
temperature (hot/cold) and $Y$ is the weather (sunny/cloudy). Here, given that
it's sunny, we can say that:

$$
\begin{align}
p(\text{hot} | \text{sunny}) &= 0.8 \\
p(\text{cold} | \text{sunny}) &= 0.2
\end{align}
$$

or if it's cloudy:

$$
\begin{align}
p(\text{hot} | \text{cloudy}) &= 0.3 \\
p(\text{cold} | \text{cloudy}) &= 0.7
\end{align}
$$

where:

$$
\begin{align}
p(\text{sunny}) &= 0.6 \\
p(\text{cloudy}) &= 0.4
\end{align}
$$

We can therefore calculate the entropy $H(X|Y)$:

$$
\begin{align}
H(X|Y) &= \sum_{y \in \mathcal Y} p_Y(y) H(X|Y=y) \\
&= p(\text{sunny}) H(X | \text{sunny}) + p(\text{cloudy}) H(X | \text{cloudy}) \\
&= p(\text{sunny}) \left[ \sum_{x \in \mathcal X} p_{X|\text{sunny}}(x) \log\left( \frac{1}{p_{X|\text{sunny}}(x)} \right) \right] + p(\text{cloudy}) \left[ \sum_{x \in \mathcal X} p_{X|\text{cloudy}}(x) \log\left( \frac{1}{p_{X|\text{cloudy}}(x)} \right) \right] \\
&= p(\text{sunny}) \left[ p(\text{hot} | \text{sunny}) \log\left(\frac 1 {p(\text{hot} | \text{sunny})}\right) + p(\text{cold} | \text{sunny}) \log\left(\frac 1 {p(\text{cold} | \text{sunny})}\right) \right] + p(\text{cloudy}) \left[ p(\text{hot} | \text{cloudy}) \log\left(\frac 1 {p(\text{hot} | \text{cloudy})}\right) + p(\text{cold} | \text{cloudy}) \log\left(\frac 1 {p(\text{cold} | \text{cloudy})}\right) \right] \\
&= 0.4 \left[ 0.8 \log\left( \frac 1 {0.8}\right) + 0.2 \log\left( \frac 1 {0.2}\right) \right] + 0.6 \left[ 0.3 \log\left( \frac 1 {0.3}\right) + 0.7 \log\left( \frac 1 {0.7}\right) \right] \\
&= 0.82 \text{ bits}
\end{align}
$$

Some key properties:

- Conditioning reduces entropy (like making a measurement reduces uncertainty):

  $$
  H(X|Y) \le H(X)
  $$

  Knowing $Y$ never increases the uncertainty about $X$. This is like how
  measuring position gives you some information about the momentum (though
  limited by uncertainty principle).

- Perfect knowledge: $H(X|Y) = 0$ if $X$ is completely determined by $Y$. This
  is like how knowing velocity completely determines the momentum for a given
  mass, or how temperature in ºC completely determines the temperature in ºF.
- Independence: $H(X|Y) = H(X)$ if $X$ and $Y$ are independent. For example,
  measuring the spin in the $x$ direction tells us nothing about the spin in the
  $z$ direction, or how the temperature in New York tells us nothing about the
  temperature in Tokyo.

Let's take an example of predicting the weather. If we are trying to predict
what the temperature will be like in the evening (hot/cold) given that we know
the temperature in the morning was cold:

$$
\begin{align}
p(\text{evening=cold} | \text{morning = cold}) &= 0.7 \\
p(\text{evening=hot} | \text{morning = cold}) &= 0.3
\end{align}
$$

or if the morning was hot:

$$
\begin{align}
p(\text{evening=cold} | \text{morning = hot}) &= 0.2 \\
p(\text{evening=hot} | \text{morning = hot}) &= 0.8
\end{align}
$$

The conditional entropy here represents how uncertain we are about the evening
temperature after knowing the morning temperature. This is lower than total
entropy of evening temperature alone, but not zero (since the weather isn't
perfectly predictable).

We can think of conditional entropy as starting with total uncertainty $H(X)$
and subtracting information gained from knowing $Y$, and what's left is
$H(X|Y)$.

This connects to [Mutual information](#mutual-information) $I(X; Y)$:

$$
\underbrace{H(X)}_{\text{Total uncertainty}} = \underbrace{I(X;Y)}_{\text{Shared information}} + \underbrace{H(X|Y)}_{\text{Remaining uncertainty}}
$$

## Kullback-Leibler (KL) Divergence

KL divergence $D(q \| p)$ is a measure of how different two probability
distributions $p$ and $q$ are:

$$
D(q_X\| p_X) = \sum_{x \in \mathcal X} q_X(x) \log\left(\frac{q_X(x)}{p_X(x)} \right)
$$

For example, we can take two temperature distributions:
$p = (\text{cold} = 0.3, \text{mild} = 0.4, \text{hot} = 0.3)$ which is the
actual distribution, and
$q = (\text{cold} = 0.2, \text{mild} = 0.5, \text{hot} = 0.3)$ which is the
measured/predicted distribution. From this we can find their KL divergence:

$$
\begin{align}
D(p \| q) &= \sum_t p(t) \log\left(\frac{p(t)}{q(t)}\right) \\
&= 0.3 \log\left(\frac{0.3}{0.2}\right) + 0.4 \log\left(\frac{0.4}{0.5}\right) + 0.3 \log\left(\frac{0.3}{0.3}\right) \\
&= 0.047
\end{align}
$$

However, the KL divergence is asymmetrical, $D(p\|q) \ne D(q \| p)$. In the
example above: $D(q \| p) = 0.044$, which is different from $D(p\|q) = 0.047$.
This is similar to how entropy can be irreversible, and is the reason that the
KL divergence is not a true distance metric.

Another property of the KL divergence is non-negativity, or Gibbs' inequality:

$$
D(p_X \| q_X) \ge 0
$$

with equality if $p_X = q_X$.

Basically, we can think of KL divergence like the information lost when using
$q$ to approximate $p$, or the work needed to transform one distribution into
another.

## Mutual information

This measures how much knowing about one thing tells you about another. It's
like correlation in physics, but more general. For example, we can ask, "how
much does knowing the air pressure tell us about the likelihood of rain?"

Mutual information is like measuring how much two variables "know about each
other".

$$
I(X; Y) = \sum_{(x,y) \in \mathcal X \times \mathcal Y} p_{X, Y}(x,y) \log\left( \frac{p_{X,Y}(x,y)}{p_X(x) p_Y(y)} \right)
$$

This can also be written in a few different ways:

$$
\begin{align}
I(X; Y) &= D(p_{X,Y} \| p_X p_Y) & \\
&= H(X) - H(X|Y) & \text{Information about }X\text{ gained by knowing }Y \\
&= H(Y) - H(Y|X) & \text{Information about }Y\text{ gained by knowing }X \\
&= H(X) + H(Y) - H(X, Y) & \text{Total info minus joint info}
\end{align}
$$

We can use the example of quantum entanglement to explain this. For example, if
we have perfect entanglement, if $X$ is up then $Y$ must be down:

$$
\begin{align}
p(\text{up}, \text{down}) &= 0.5 \\
p(\text{down}, \text{up}) &= 0.5 \\
\\
p(\text{up}) &= 0.5 \\
p(\text{down}) &= 0.5 \\
\\
I(X;Y) &= \sum p_{X,Y}(x,y) \log \left( \frac{p_{X,Y}(x,y)}{p_X(x)p_Y(y)} \right) \\
&= 0.5 \log\left( \frac{0.5}{0.5 \times 0.5} \right) + 0.5 \log\left( \frac{0.5}{0.5 \times 0.5} \right) \\
&= 0.5 + 0.5 \\
&= 1 \text{ bit}
\end{align}
$$

This has high mutual information. On the other hand, if there is no
entanglement:

$$
\begin{align}
p(\text{up}, \text{up}) &= 0.25 \\
p(\text{up}, \text{down}) &= 0.25 \\
p(\text{down}, \text{up}) &= 0.25 \\
p(\text{down}, \text{down}) &= 0.25 \\
\\
p(\text{up}) &= 0.5 \\
p(\text{down}) &= 0.5 \\
\\
I(X;Y) &= \sum p_{X,Y}(x,y) \log \left( \frac{p_{X,Y}(x,y)}{p_X(x)p_Y(y)} \right) \\
&=  0.25 \log\left(\frac{0.25}{0.5 \times 0.5}\right) + 0.25 \log\left(\frac{0.25}{0.5 \times 0.5}\right) + 0.25 \log\left(\frac{0.25}{0.5 \times 0.5}\right) + 0.25 \log\left(\frac{0.25}{0.5 \times 0.5}\right) \\
&= 0 \text{ bits}
\end{align}
$$

So there is zero mutual information.

In classical physics, we can consider the ideal gas equation $PV = nRT$. Here,
assuming fixed volume, the mutual information between the pressure $P$ and the
temperature $T$ is high, knowing one will tell you a lot about the other.

Mutual information has a property of non-negativity:

$$
I(X;Y) \ge 0
$$

with equality if $X$ and $Y$ are independent. This is similar to how correlation
functions in physics are bounded. Independent systems are like uncoupled systems
in physics.

Mutual information is also symmetric:

$$
I(X;Y) = I(Y;X)
$$

This is like how correlation functions in physics are symmetric.

We can think of this like a Venn diagram, where the circles are entropies, and
the overlap between them is the mutual information.

For example, if we're trying to predict the weather for the next day $X$, and we
have a barometer $Y$, we can use mutual information to make some predictions,
since there is high mutual information between these:

- Low pressure → likely rain
- High pressure → likely clear

However, this isn't perfect, since the weather is unpredictable:

$$
I(X; Y) < H(Y)
$$

There is a data processing inequality for mutual information: If we have
$X \rightarrow Y \rightarrow Z$ forming a [Markov chain](#markov-chain), then:

$$
I(X; Z) \le min[I(X;Y), I(Y;Z)]
$$

This shows that information/energy can only degrade through a system.

### Markov chain

We can think of a Markov chain as the path of a particle where its next position
depends only on where it is now, not how it got there.

For example, with a weather Markov chain, we can say that tomorrow's weather
only depends on today's weather, not yesterday's. If it's sunny today:

$$
\begin{align}
p(\text{sunny tomorrow} | \text{sunny today}) &= 0.8 \\
p(\text{rainy tomorrow} | \text{sunny today}) &= 0.2
\end{align}
$$

but if it's rainy today:

$$
\begin{align}
p(\text{sunny tomorrow} | \text{rainy today}) &= 0.4 \\
p(\text{rainy tomorrow} | \text{rainy today}) &= 0.6
\end{align}
$$

A physical analogy could be a random walk, where the next step only depends on
the current position of the particle, not how it got to that position. Another
example could be quantum measurements, where each measurement only depends on
the previous state, not on any further history.

$$
\overbrace{X}^{\text{Initial state}} \rightarrow \overbrace{Y}^{\text{Measurement 1}} \rightarrow \overbrace{Z}^{\text{Measurement 2}}
$$

For the data processing inequality (DPI) in
[Mutual information](#mutual-information), we can think of it like, information
can never be gained, only lost. For instance, let's say we're measuring
temperature. We have a Markov chain:

$$
\overbrace{X}^{\text{Actual temperature}} \rightarrow \overbrace Y^\text{Thermometer reading} \rightarrow \overbrace Z^\text{Digital display}
$$

Each step can lose information: the thermometer has limited precision and may be
slightly inaccurate, and the digital display rounds numbers. Hence, we can't
know more about $X$ from $Z$ than from $Y$:

$$
I(X;Z) \le I(X;Y)
$$

Markov chains are memory-less:

$$
p(X_\text{future} | X_\text{present}, X_\text{past}) = p(X_\text{future} | X_\text{present})
$$

Only the current state of the system matters.

Markov chains can also be reversible:

$$
X \leftrightarrow Y \leftrightarrow Z
$$

Reversible Markov chains are symmetrical:

$$
p_{X,Y,Z}(x,y,z) = p_X(x) p_{Y|X=x}(y) p_{Z|Y=y}(z) = p_Z(z)p_{Y|Z=z}(y)p_{X|Y=y}(x)
$$

This is like reversible processes in thermodynamics, or reversible chemical
reactions. Reversibility means that the system has no preferred direction.

## Conditional mutual information

This measures how much $X$ and $Y$ "know about each other" when we already know
$Z$.

$$
I(X;Y|Z) = H(X|Z) - H(X|Y,Z)
$$

We can think of it like how much information $X$ and $Y$ share after already
knowing $Z$. This is similar to partial correlation in physics.

For example, let's say we have three particles: $X$, $Y$ and $Z$, where $X$ and
$Y$ are potentially entangled particles, and $Z$ is a particle that we've
measured. Here, $I(X;Y|Z)$ tells us how much $X$ and $Y$ are entangled, even
after knowing $Z$'s state.

In classical physics, this can be temperature $T$, pressure $P$ and volume $V$.
Here, $I(T;P|V)$ tells us how much temperature and pressure are related, given
that we know the volume (constant).

Conditional mutual information is non-negative:

$$
I(X;Y|Z) \ge 0
$$

This is just like other information measures, we can't have negative
information. This is just like how we can't have negative energy in physics.

We can also chain mutual information:

$$
\underbrace{I(X;Y,Z)}_{\text{Total information}} = \underbrace{I(X;Z)}_\text{Direct} + \underbrace{I(X;Y|Z)}_\text{Conditional}
$$

and more generally:

$$
I(X_1^n; Y_1^m) = I(X_1;Y_1^m) + \sum_{i=2}^n I(X_i; Y_1^m | X_1^{i-1})
$$

This is like decomposing forces in physics.

For example, if we have today's temperature $Z$, and we want to find out how
much tomorrow's temperature $X$ tells us about whether it will rain tomorrow
$Y$, then we can use the conditional mutual information $I(X;Y|Z)$.

## Information identities

### Basic identity relation

$$
I(X;Y) = H(X) - H(X|Y) = H(Y) - H(Y|X)
$$

This is basically $\text{total uncertainty} - \text{remaining uncertainty}$.

### Joint entropy relation

$$
H(X,Y) = H(X) + H(Y|X) = H(Y) + H(X|Y)
$$

We can think of this like energy in a two-particle system, with
$\text{total energy} = \text{energy of particle 1} + \text{energy of particle 2 given particle 1}$,
or if we take position and momentum, then
$H(\text{position}, \text{momentum}) = H(\text{position}) + H(\text{momentum}|\text{position})$.

For example, we can take a weather system with temperature $T$ and pressure $P$.
Then:

$$
H(T,P) = H(T) + H(P|T)
$$

which means that the total uncertainty in temperature and pressure is the
uncertainty in temperature, and the uncertainty in pressure given that
temperature.

### Chain rule for entropy

$$
H(X_1^n) = H(X_1) + \sum_{i=2}^2 H(X_i|X_1^{i-1})
$$

We can think of this as being in a multi-particle system, and we're adding
particles one by one:
$H(\text{system}) = H(\text{particle}_1) + H(\text{particle}_2|\text{particle}_1) + H(\text{particle}_3 | \text{particle}_2, \text{particle}_1) + ...$

Similar to [Joint entropy relation](#joint-entropy-relation), the total entropy
of the system is the initial entropy, plus the entropy of all subsequent states
given the previous states.

### Chain rule for mutual information

$$
I(X_1^n; Y_1^m) = I(X_1; Y_1^m) + \sum_{i=2}^n I(X_i; Y_1^m|X_1^{i-1})
$$

We can think of this like:

$$
\begin{align}
\text{Information gained} = &\text{ Initial info} \\
&+ \text{New info from 1st measurement} \\
&+ \text{New info from 2nd measurement} \\
&+ \space ...
\end{align}
$$

This is also similar to the [Chain rule for entropy](#chain-rule-for-entropy),
where the total information of the system is the initial information we start
with, plus the information we get from every subsequent state given the previous
states.

## Information inequalities/conditions for tightness

### Non-negativity of entropy

$$
H(X) \ge 0
$$

with equality if $p_X(i)$ equals 0 or 1 for all $i \in \mathcal X$. This means
that $p_X(x)$ equals 1 for one value, and 0 for everything else. Since there is
no uncertainty in the distribution, entropy is therefore zero. For everything
else, entropy can only be positive.

### Log-cardinality bound on entropy

$$
H(X) \le \log(|\mathcal X|)
$$

with equality if $p_X() = \frac 1 {|\mathcal X|}$ for all $i \in \mathcal X$.
This means that $H(X) = \log(|\mathcal X|)$ if all probabilities are equal for
all outcomes. This is maximum entropy, since the distribution doesn't favor any
particular outcome. If there were any bias in the distribution, entropy would be
lower than this.

### Gibbs' inequality/non-negativity of KL divergence

$$
D(p_X\|q_X) \ge 0
$$

with equality if $p_X = q_X$ for any pair of distributions $p_X$ and $q_X$ on
the same alphabet $\mathcal X$. Basically, since the KL divergence measures the
difference between distributions, this difference can only be non-negative. The
divergence is zero when the distributions are the same, since there is no
difference between them, and positive otherwise.

### Non-negativity of conditional entropies

$$
H(X|Y) \ge 0
$$

with equality if $X$ is a deterministic function of $Y$. Basically, if
$X = f(Y)$ then the entropy of $X$ given $Y$ is zero, since $X$ can be
determined with full certainty if $Y$ is known. For instance, if we take $X$ to
be momentum, and $Y$ to be velocity, since momentum can be deterministically
calculated from velocity (assuming known constant mass), the uncertainty in
momentum $X$ is 0. Otherwise,
[Non-negativity of entropy](#non-negativity-of-entropy) applies.

### Non-negativity of mutual information

$$
I(X;Y) \ge 0
$$

with equality if $X$ and $Y$ are independent. Basically, if $X$ and $Y$ are
completely unrelated, then the shared information between them is zero, since
you can't know anything about $X$ from $Y$, and vice versa. However, if they are
related, then knowing something about $Y$ will tell you something about $X$, and
vice versa, so it is positive.

Additionally, $I(X;X) = H(X)$, and so
[Non-negativity of entropy](#non-negativity-of-entropy) also applies.

### Entropy bound on mutual information

$$
I(X;Y) \le min[H(X), H(Y)]
$$

with equality if either $X$ is a deterministic function of $Y$, or $Y$ is a
deterministic function of $X$. If either variable determines the other, then
knowing any one variable gives you knowledge of the full system, and so in that
case $I(X;Y) = H(X) = H(Y)$. However, in any other case, you can't get the full
information of the system from any one variable, so the mutual information is
less than any one of the variables.

### Conditioning reduces entropy (C.R.E.)

$$
H(X|Y) \le H(X)
$$

with equality if $X$ is independent of $Y$. If $X$ and $Y$ are independent, then
knowing $Y$ gives no information about $X$, and so $H(X|Y) = H(X)$. However, if
$X$ and $Y$ are related, then knowing $Y$ reduces the uncertainty about $X$, and
so the uncertainty of $X$ given $Y$ is less than the uncertainty of $X$ alone.

## Convexity/concavity inequalities

> [!danger] WAT
>
> I'm gonna be honest I have no clue what anything in this section means.

For a function $y = f(x)$, the gradient $\frac {dy}{dx}$ of a **concave
function** _decreases_ as $x$ increases. An example of a concave function is
$\log$. On the other hand, the gradient of a **convex function** _increases_ as
$x$ increases.

### Jensen's inequality

For a concave function $f(\cdot)$:

$$
\sum_{i=1}^k \lambda_i f(\underline x_1) \le f \left( \sum_{i=1}^k \lambda_i \underline x_i \right)
$$

for $k$ vectors: $\underline x_1$, $\underline x_2$, ..., $\underline x_k$ in
$\mathcal R$, and $\{ \lambda_i \}_{i=1}^k$ such that $\lambda_i \ge 0$ for all
$i$ and $\sum \lambda_i = 1$.

Let's think of a rope hanging in between two points:

```
A •         • B
   \       /
    \     / <- Actual rope position
     \   /
      \ /
       • C <- Average position
```

> Imagine that's a smooth curve, I can't draw a curved line in ASCII art.

The average height of points on the rope $\sum \lambda_i f(x_i)$ is less than
the height of the rope at the average position $f(\sum \lambda_i x_i)$. Here,
$f(x)$ is a concave function that determines the height of the rope.

### Convexity of KL divergence

$D(p_X \| q_X)$ is convex in the pair of distributions $(p_X, q_X)$. This means
the opposite of [Jensen's inequality](#jensen-s-inequality) for the KL
divergence:

$$
\sum_i \lambda_i D(p_i\|q_i) \ge D\left(\sum_i \lambda_i p_i \| \sum_i \lambda_i q_i \right)
$$

So basically, the average distance between two distributions is less than the
distance between two average distributions.

### Concavity/convexity of mutual information

If we take $p_{X,Y}(x,y) = p_X(x) p_{Y|X=x}(y)$:

- For fixed $p_{Y|X=x}(\cdot)$, $I(X;Y)$ is concave in $p_X(x)$. This means that
  mixing input distributions can't increase information. Like entropy in
  thermodynamics, if we mix two pure states (like one that always returns 1, and
  another that always returns 0), this will increase uncertainty (since now
  there's a chance of 1 and a chance of 0). The more uniform the mixed
  distribution is (closer to 50-50), the higher the entropy will be, and so the
  mutual information can't increase.
- For fixed $p_X(x)$, $I(X;Y)$ is convex in $p_{Y|X}(y)$. This means that mixing
  channels is worse than using either one consistently. It's like noise in
  measurements, if we're mixing two different measurement devices (let's say one
  gives consistently perfect results, and the other is complete noise), the
  result will generally be worse than just using the better one. It can't get
  better by randomising between different devices.

## Information inequalities for Markov chains

If we have a reversible Markov chain:

$$
X \leftrightarrow Y \leftrightarrow Z
$$

### Data processing inequality (D.P.I.)

$$
I(X;Z) \le min[I(X;Y), I(Y;Z)]
$$

This is described in more detail in [Markov chain](#markov-chain). Basically, it
means that information can only decrease as it's passed around. You can't get
more information about $X$ from $Z$ than you had at $Y$.

### Fano's inequality

$$
\Pr(Z \ne X) \ge \frac{H(X|Y) - 1}{\log(|\mathcal X|)}
$$

Let's say we have a Markov chain over a communication channel:

$$
\overbrace X^\text{Sent message} \rightarrow \overbrace Y^\text{Received signal} \rightarrow \overbrace Z^\text{Decoded message}
$$

Fano's inequality states that there is a minimum error rate in decoding, if a
channel $Y$ adds noise (increases $H(X|Y)$). It tells us the minimum error rate
that's related to the noise in the channel, and the size of the alphabet.

## Primary use of information inequalities

Let's say we have a source coding problem. We need to take some data $X$,
compress it into $Y$, and then decompress it to $Z$. This forms a Markov chain:

$$
\overbrace X^\text{Original data} \rightarrow \overbrace Y^\text{Compressed} \rightarrow \overbrace Z^\text{Decompressed data}
$$

The goal is to make $Z$ as close to $X$ as possible, while making $Y$ as small
as possible.

We can use Fano's inequality to show that it's impossible to compress data
beyond a certain size without guaranteeing some errors. We can prove this by
assuming we can compress better than the claimed limit, and then using Fano's
inequality to show that this leads to contradiction.

Say we have binary data $X$, and we try to compress $n$ bits to $n-1$ bits, then
decompress back. If we apply Fano's inequality:

$$
\Pr(Z \ne X) \ge \frac{H(X|Y) - 1}{\log(|\mathcal X|)}
$$

If $X$ is uniformly distributed, $H(X) = n \text{ bits}$,
$H(X|Y) \ge 1 \text{ bit}$ since $Y$ has fewer bits than $X$. Therefore, the
probability that $Z \ne X$ is nonzero, and so some error must exist.

A physics analogy of this would be trying to prove perpetual motion is
impossible. First, we assume that it works, then we show that it would violate
energy conservation, and so we can prove that it is impossible.

The general strategy to prove something is impossible:

1. Assume it's possible.
2. Apply information inequalities:
   - Fano's inequality
   - Data processing inequality
   - Non-negativity of mutual information
3. Reach contradiction.
4. Therefore, the original assumption was wrong.
