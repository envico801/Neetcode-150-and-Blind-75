========== Question ==========  

### Products of Array Discluding Self

Given an integer array `nums`, return an array `output` where `output[i]` is the product of all the elements of `nums` except `nums[i]`.

Each product is **guaranteed** to fit in a **32-bit** integer.

Follow-up: Could you solve it in `O(n)` time without using the division operation?

**Example 1:**

```
Input: nums = [1,2,4,6]

Output: [48,24,12,8]
```

**Example 2:**

```
Input: nums = [-1,0,1,2,3]

Output: [0,-6,0,0,0]
```

**Constraints:**

-   `2 <= nums.length <= 1000`

-   `-20 <= nums[i] <= 20`

---

What data structure allows for the most efficient implementation of this algorithm?

A) Queue

B) Stack

C) Array

D) Linked List  

========== Answer ==========  

**Answer**: C

An array is the most efficient data structure for this solution because:

-   Allows constant-time access

-   Can be modified in-place for prefix/suffix products

-   Provides O(1) space for intermediate calculations

-   Supports the two-pass approach efficiently

========== Id ==========  
41

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays Hashing::Chapter 7 - Product of Array Except Self - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-Hashing::#Chapter-7-Product-of-Array-Except-Self-Blind::#41-Products-of-array-discluding-self-given-an

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
