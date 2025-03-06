========== Question ==========  

### Duplicate Integer

Given an integer array `nums`, return `true` if any value appears **more than once** in the array, otherwise return `false`.

**Example 1:**

```
Input: nums = [1, 2, 3, 3]

Output: true
```

**Example 2:**

```
Input: nums = [1, 2, 3, 4]

Output: false
```

---

How many possible pairs of elements are there in an array of size n?

A) log n

B) n

C) n^2

D) 2^n  

========== Answer ==========  

**Answer**: C

There are exactly n \* (n - 1) / 2 distinct pairs of integers in the array. This is equivalent to (n^2 - n) / 2, and we normally consider the largest term, which in this case is n^2.

========== Id ==========  
1

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays Hashing::Chapter 1 - Contains Duplicate - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-Hashing::#Chapter-1-Contains-Duplicate-Blind::#1-Duplicate-integer-given-an-integer-array

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
