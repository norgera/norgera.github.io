---
order: 2007
layout: default
toc: true
---

## Predicates


Predicates deal with mapping variables and constants to true for false, with the rules being called predicate calculus

Operators:
  - and ∧
  - or ∨
  - not ¬
  - implication → 
  - equivalence ↔

Quantifiers:
  - existential ∃
  - universal ∀

∀C (rainy(C) ∧ cold(C) → snowy(C))

∀A, ∀B (takes(A, C) ∧ takes(B, C) → classmates(A, B))

- Fermat’s last Theorem:\\
∀N ((N > 2) → ¬(∃A ∃B ∃C (A^N + B^N = C^N)))

- ∀, ∃ bind variables like λ in λ-calculus


There’s just a few important things I’ll go over here: first is the notion or normal form

There’s many ways to write statements, but this isn’t good for us if we want automatic provers, so we should convert things to normal form

One of these normal forms is clausal form, which we get to with the following steps

∀X (¬student(X) → (¬resident(X) ∧ ¬∃Y (takes(X, Y) ∧ class(Y))))

1. eliminate → and ↔:\\
∀X (student(X) ∨ (¬resident(X) ∧ ¬∃Y (takes(X, Y) ∧ class(Y))))

2. move ¬ inward (using De Morgan’s laws):\\
∀X (student(X) ∨ (¬resident(X) ∧ ∀Y (¬(takes(X, Y) ∧ class(Y)))))\\
≡\\
∀X (student(X) ∨ (¬resident(X) ∧ ∀Y (¬takes(X, Y) ∨ ¬class(Y))))

∀X (student(X) ∨ (¬resident(X) ∧ ∀Y (¬takes(X, Y) ∨ ¬class(Y))))

3. eliminate existential quantifiers\\
  - Skolemization (not necessary in our example)

4. pull universal quantifiers to the outside of the \\proposition (some renaming might be needed)

∀X ∀Y (student(X) ∨ (¬resident(X) ∧ (¬takes(X, Y) ∨ ¬class(Y))))\\
  - convention: rules are universally quantified\\
  - we drop the implicit ∀'s:

student(X) ∨ (¬resident(X) ∧ (¬takes(X, Y) ∨ ¬class(Y)))

5. convert the proposition in conjunctive normal form (CNF)\\
  - conjunction of disjunctions

(student(X) ∨ ¬resident(X)) ∧ \\
(student(X) ∨ ¬takes(X, Y) ∨ ¬class(Y))


(student(X) ∨ ¬resident(X)) ∧ \\
(student(X) ∨ ¬takes(X, Y) ∨ ¬class(Y))

- We can rewrite as:

(resident(X) → student(X)) ∧ \\
((takes(X, Y) ∧ class(Y)) → student(X))

≡

(student(X) ← resident(X)) ∧ \\
(student(X) ← (takes(X, Y) ∧ class(Y)))


Now that we have a normal form, we can throw this straight into a logical language like Prolog

- We obtained:
(student(X) ← resident(X)) ∧ 
(student(X) ← (takes(X, Y) ∧ class(Y)))

- which translates directly to Prolog:

```prolog
student(X) :- resident(X).
student(X) :- takes(X, Y), class(Y).
```

:- means “if”
, means “and”

Another particular case is the horn clause, where we only have one negated term

- **Horn clauses**
  - particular case of clauses: only one non-negated term:\\
    ¬Q₁ ∨ ¬Q₂ ∨ ... ∨ ¬Qₖ ∨ P ≡\\
    Q₁ ∧ Q₂ ∧ ... ∧ Qₖ → P ≡\\
    P ← Q₁ ∧ Q₂ ∧ ... ∧ Qₖ
  - which is a rule in Prolog:

```prolog
P :- Q1, Q2, ..., Qk.
for k = 0 we have a fact:

P.
```

## Auto-Proofs

The thing that we’re most concerned with here is automated proving, meaning, given a set of axioms, we want to prove that our theorems follow through negating the theorem to get a contradiction

- **Rule:** both sides of `:-`
  - `P :- Q1, Q2, ..., Qk.` means `P ← Q1 ∧ Q2 ∧ ... ∧ Qk`

- **Fact:** left-hand side of (implicit) `:-`
  - `P.` means `P ← true`

- **Query:** right-hand side of (implicit) `:-`
  - `?- Q1, Q2, ..., Qk.`

- **Automated proving:** given a collection of axioms (facts and rules), add the negation of the theorem (query) we want to prove and attempt (using resolution) to obtain a contradiction
  - Query negation: `¬(Q1 ∧ Q2 ∧ ... ∧ Qk)`

- Example
  ```prolog
  student(john).
  ?- student(john).
  true.
  ```
Fact: student(john) ← true

Query (negated):

- ¬student(john) ≡ false ← student(john)

We obtain a contradiction (that proves the query):

- false ← student(john) ← true

The above contradiction is obvious; in general, use resolution.

