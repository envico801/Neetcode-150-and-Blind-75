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

What bitwise operation can be used to find the carry bits when adding two integers?

A) Bitwise AND (&)

B) Bitwise OR (|)

C) Bitwise XOR (^)

D) Bitwise NOT (~)  

========== Answer ==========  

**Answer**: A

Bitwise AND (&) identifies positions where both bits are 1, which is exactly where a carry will be generated in binary addition. For example, 1 & 1 = 1 (carry generated) and 1 & 0 = 0 & 1 = 0 & 0 = 0 (no carry).

========== Id ==========  
227

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part XVII - Bit Manipulation::Chapter 6 - Sum of Two Integers - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-XVII-Bit-Manipulation::#Chapter-6-Sum-of-Two-Integers-Blind::#227-Sum-of-two-integers-details-summary-b

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
