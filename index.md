# Information Theory

> [!warning]
>
> Most of these notes are from Claude. Review them carefully after you're done.

> [!important] NOTATION
>
> - All logarithms ($\log$) and exponentials ($\exp$) will be in base-$2$
>   (unless explicitly specified otherwise) since a "natural" unit of
>   information is bits.
> - Sets will be denoted with calligraphic letters, e.g. $\mathcal X$.
> - Vectors will be denoted with underlines, e.g. $\underline x$.
> - Random variables will be denoted by capital letters, e.g. $X$. So, combined
>   with the previous convention, random _vectors_ will be denoted by underlined
>   capital letters, e.g. $\underline X$.
> - Notation such as $p_X(\cdot)$ references the probability mass function
>   (p.m.f.) of random variable $X$. So $p_X(i)$ equals the probability that the
>   random variable $X$ takes the value $i$.
> - For any vector $\underline v \in \mathbb R^n$, the $\ell_1$ norm
>   $\| \underline v \|_1 = \sum_{i=1}^n |v_i|$.
> - We denote the length of a vector $\underline v$ as $len(\underline v)$
> - $\triangleq$ is for definitions. So $a \triangleq b$ means $a$ is defined to
>   be $b$.
> - $\doteq$ is approximate. So $a \doteq b$ is the same as $a \approx b$.
> - When given a vector, say $(X_1, ..., X_n)$, if we want to reference only a
>   (consecutive) subset of its components, say
>   $X_i, X_{i+1}, ..., X_{j-1}, X_j$, we denote this as $X_i^j$. By convention,
>   $X^n$ should be taken as meaning $X_1^n$.
> - "iff" means "if and only if"

Table of Contents:

- [Prerequisites](./prerequisites)
- [Week 1](./week-1)
- [Week 2](./week-2)
- [Week 3](./week-3)
- [Week 4](./week-4)
- [Week 5](./week-5)
