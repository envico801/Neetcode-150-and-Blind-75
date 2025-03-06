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

If a = 5 and b = 3, what will be the value of the first carry operation ((a & b) << 1)?

A) 1

B) 2

C) 4

D) 8  

========== Answer ==========  

**Answer**: B

In binary: 5 is 101 and 3 is 011. ANDing gives: 101 & 011 = 001. Left shifting by 1: 001 << 1 = 010, which is 2 in decimal. This represents the carries shifted to their correct positions.

========== Id ==========  
234

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part XVII - Bit Manipulation::Chapter 6 - Sum of Two Integers - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-XVII-Bit-Manipulation::#Chapter-6-Sum-of-Two-Integers-Blind::#234-Sum-of-two-integers-details-summary-b

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
