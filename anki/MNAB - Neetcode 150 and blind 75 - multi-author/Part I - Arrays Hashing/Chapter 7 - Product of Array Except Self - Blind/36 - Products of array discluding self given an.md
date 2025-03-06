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

What is the key insight to solving this problem in O(n) time without division?

A) Using a single pass with running product from left to right

B) Sorting the array first

C) Using two separate passes - left-to-right and right-to-left to compute prefix and suffix products

D) Using a stack to track products  

========== Answer ==========  

**Answer**: C

The optimal solution involves two passes through the array:

1. First pass (left-to-right): Compute prefix products

2. Second pass (right-to-left): Compute suffix products

This allows calculating the product of all elements except the current one in O(n) time and O(1) extra space (not counting the output array).

========== Id ==========  
36

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays Hashing::Chapter 7 - Product of Array Except Self - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-Hashing::#Chapter-7-Product-of-Array-Except-Self-Blind::#36-Products-of-array-discluding-self-given-an

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
