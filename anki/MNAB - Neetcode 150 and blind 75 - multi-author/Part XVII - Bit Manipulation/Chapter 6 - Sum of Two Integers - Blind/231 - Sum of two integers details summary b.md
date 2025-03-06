========== Question ==========  

### Sum of Two Integers

<details><summary><b>📄 Description</b></summary><br>

Given two integers `a` and `b`, return the sum of the two integers without using the `+` and `-` operators.

**Example 1:**

```
Input: a = 1, b = 1

Output: 2
```

**Example 2:**

```
Input: a = 4, b = 7

Output: 11
```

**Constraints:**

-   `-1000 <= a, b <= 1000`

</details>

---

How do we handle negative numbers in this problem?

A) By using two's complement representation

B) By converting them to positive first

C) By treating the sign bit separately

D) The problem constraints don't allow negative numbers  

========== Answer ==========  

**Answer**: A

We rely on the two's complement representation that most programming languages use for integers. The bitwise operations automatically work with the two's complement representation, handling negative numbers correctly.

========== Id ==========  
231

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part XVII - Bit Manipulation::Chapter 6 - Sum of Two Integers - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-XVII-Bit-Manipulation::#Chapter-6-Sum-of-Two-Integers-Blind::#231-Sum-of-two-integers-details-summary-b

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
