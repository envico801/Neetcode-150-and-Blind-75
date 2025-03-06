========== Question ==========  

### Find Target in Rotated Sorted Array

You are given an array of length `n` which was originally sorted in ascending order. It has now been **rotated** between `1` and `n` times. For example, the array `nums = [1,2,3,4,5,6]` might become:

-   `[3,4,5,6,1,2]` if it was rotated `4` times.

-   `[1,2,3,4,5,6]` if it was rotated `6` times.

Given the rotated sorted array `nums` and an integer `target`, return the index of `target` within `nums`, or `-1` if it is not present.

You may assume all elements in the sorted rotated array `nums` are **unique**,

A solution that runs in `O(n)` time is trivial, can you write an algorithm that runs in `O(log n) time`?

**Example 1:**

```
Input: nums = [3,4,5,6,1,2], target = 1

Output: 4
```

**Example 2:**

```
Input: nums = [3,5,6,0,1,2], target = 4

Output: -1
```

**Constraints:**

-   `1 <= nums.length <= 1000`

-   `-1000 <= nums[i] <= 1000`

-   `-1000 <= target <= 1000`

---

If we are in the left sorted half of the array, but the target element belongs in the right sorted half, where should we search relative to the mid pointer?

![image](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/90bcf494-c8c6-4c8e-5119-349868839200/public)

A) To the left of mid.

B) To the right of mid.

C) At the mid point.

D) This scenario is not possible.  

========== Answer ==========  

**Answer**: B

If we are in the left sorted half of the array, but the target element belongs to the right sorted half, we should continue our search to the right of the mid pointer.

========== Id ==========  
100

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part IV - Binary Search::Chapter 5 - Search In Rotated Sorted Array - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-IV-Binary-Search::#Chapter-5-Search-In-Rotated-Sorted-Array-Blind::#100-Find-target-in-rotated-sorted-array-you-ar

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
