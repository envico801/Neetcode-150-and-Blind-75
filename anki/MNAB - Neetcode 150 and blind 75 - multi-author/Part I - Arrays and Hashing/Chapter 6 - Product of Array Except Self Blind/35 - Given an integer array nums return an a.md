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

What is the time complexity of the efficient solution using prefix and suffix
products?

A) O(n)

B) O(n log n)

C) O(n^2)

D) O(log n)  

========== Answer ==========  

**Answer**: A

The efficient solution using prefix and suffix products has a time complexity of
O(n), where n is the length of the input array. This is because we make three
passes through the array: one to calculate prefix products, one for suffix
products, and one to compute the final result.

========== Id ==========  
35

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays and Hashing::Chapter 6 - Product of Array Except Self Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-and-Hashing::#Chapter-6-Product-of-Array-Except-Self-Blind::#35-Given-an-integer-array-nums-return-an-a

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
