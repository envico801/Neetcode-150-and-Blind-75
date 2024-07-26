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

What is the space complexity of the efficient solution if we're not counting the
output array?

A) O(1)

B) O(n)

C) O(log n)

D) O(n^2)  

========== Answer ==========  

**Answer**: A

The space complexity of the efficient solution, not counting the output array,
is O(1). We only need a constant amount of extra space to store variables for
our calculations, regardless of the input size.

========== Id ==========  
36

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays and Hashing::Chapter 6 - Product of Array Except Self Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-and-Hashing::#Chapter-6-Product-of-Array-Except-Self-Blind::#36-Given-an-integer-array-nums-return-an-a

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
