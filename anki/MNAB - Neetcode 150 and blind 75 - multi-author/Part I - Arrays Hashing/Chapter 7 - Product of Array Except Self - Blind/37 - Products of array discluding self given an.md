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

What would be the time and space complexity of the two-pass solution?

A) Time: O(n), Space: O(n)

B) Time: O(n), Space: O(1)

C) Time: O(n^2), Space: O(1)

D) Time: O(log n), Space: O(n)  

========== Answer ==========  

**Answer**: A

The solution requires:

-   First pass to compute left-to-right prefix products: O(n)

-   Second pass to compute right-to-left suffix products: O(n)

-   Space to store the output array: O(n)

Total time complexity is O(n), and space complexity is O(n) to store the output array.

========== Id ==========  
37

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays Hashing::Chapter 7 - Product of Array Except Self - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-Hashing::#Chapter-7-Product-of-Array-Except-Self-Blind::#37-Products-of-array-discluding-self-given-an

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
