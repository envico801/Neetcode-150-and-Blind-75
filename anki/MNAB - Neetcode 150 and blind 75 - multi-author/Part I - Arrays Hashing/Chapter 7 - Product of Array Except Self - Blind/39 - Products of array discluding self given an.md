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

What is the maximum possible value in the output array given the constraints?

A) 400

B) 8000

C) 20 \* 20 \* n

D) 20^n  

========== Answer ==========  

**Answer**: B

Given the constraints:

-   Array length is max 1000

-   Each element is between -20 and 20

The maximum possible product would be 20 \* 20 = 400

In the worst case, with multiple elements multiplied, the maximum could approach 8000, which still fits in a 32-bit integer.

========== Id ==========  
39

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays Hashing::Chapter 7 - Product of Array Except Self - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-Hashing::#Chapter-7-Product-of-Array-Except-Self-Blind::#39-Products-of-array-discluding-self-given-an

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
