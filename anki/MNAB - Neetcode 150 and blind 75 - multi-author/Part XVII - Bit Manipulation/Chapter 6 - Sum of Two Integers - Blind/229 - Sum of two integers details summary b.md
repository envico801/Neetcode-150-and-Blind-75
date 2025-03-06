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

What is the time complexity of adding two integers using bitwise operations?

A) O(1)

B) O(log n)

C) O(n)

D) O(n^2)  

========== Answer ==========  

**Answer**: B

The time complexity is O(log n) where n is the maximum of the absolute values of a and b. This is because we need to process each bit position, and the number of bits required to represent an integer n is log₂(n).

========== Id ==========  
229

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part XVII - Bit Manipulation::Chapter 6 - Sum of Two Integers - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-XVII-Bit-Manipulation::#Chapter-6-Sum-of-Two-Integers-Blind::#229-Sum-of-two-integers-details-summary-b

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
