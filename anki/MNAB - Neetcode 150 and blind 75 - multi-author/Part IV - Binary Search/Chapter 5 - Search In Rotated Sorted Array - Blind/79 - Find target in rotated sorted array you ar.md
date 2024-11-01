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

Suppose we have a normal sorted integer array. What is normally the optimal time complexity to find an element in it?

A) O(n)

B) O(log n)

C) O(n^2)

D) O(1)  

========== Answer ==========  

**Answer**: B

For a sorted array, binary search can be applied to find an element. The time complexity of binary search is O(log n).

========== Id ==========  
79

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part IV - Binary Search::Chapter 5 - Search In Rotated Sorted Array - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-IV-Binary-Search::#Chapter-5-Search-In-Rotated-Sorted-Array-Blind::#79-Find-target-in-rotated-sorted-array-you-ar

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
