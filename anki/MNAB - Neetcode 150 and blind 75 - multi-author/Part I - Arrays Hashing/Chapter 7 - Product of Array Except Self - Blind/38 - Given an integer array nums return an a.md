========== Question ==========  

### Given an integer array `nums`, return an array `output` where `output[i]` is the product of all the elements of `nums` except `nums[i]`.

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

How do you handle the case of zero in the input array?

A) The solution automatically handles zero by setting appropriate elements to zero

B) You must add a special check for zero

C) Zero always results in all zeros in the output

D) Zero causes the solution to fail  

========== Answer ==========  

**Answer**: A

In this solution, if a zero is present in the input:

-   If there's one zero: The output will be all zeros except for the position of the zero, which will contain the product of all other elements

-   If there are multiple zeros: The entire output will be zeros

The two-pass approach naturally handles this scenario without additional complexity.

========== Id ==========  
38

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays Hashing::Chapter 7 - Product of Array Except Self - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-Hashing::#Chapter-7-Product-of-Array-Except-Self-Blind::#38-Given-an-integer-array-nums-return-an-a

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
