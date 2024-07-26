========== Question ==========  

### Given an integer array `nums`, return an array `output` where `output[i]` is the product of all the elements of `nums` except `nums[i]`.

Each product is **guaranteed** to fit in a **32-bit** integer.

Follow-up: Could you solve it in `O(n)` time without using the division
operation?

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

- `2 <= nums.length <= 1000`

- `-20 <= nums[i] <= 20`

---

Which of the following approaches does NOT solve the problem in O(n) time
without using division?

A) Using prefix and suffix products

B) Using a single array to store both prefix and suffix products

C) Using two separate arrays for prefix and suffix products

D) Calculating the total product and dividing by each element  

========== Answer ==========  

**Answer**: D

Calculating the total product and dividing by each element does not solve the
problem in O(n) time without using division. This approach uses the division
operation, which is explicitly forbidden in the follow-up question.

========== Id ==========  
37

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays and Hashing::Chapter 6 - Product of Array Except Self Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-and-Hashing::#Chapter-6-Product-of-Array-Except-Self-Blind::#37-Given-an-integer-array-nums-return-an-a

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
