========== Question ==========  

### Find Minimum in Rotated Sorted Array

You are given an array of length `n` which was originally sorted in ascending order. It has now been **rotated** between `1` and `n` times. For example, the array `nums = [1,2,3,4,5,6]` might become:

-   `[3,4,5,6,1,2]` if it was rotated `4` times.

-   `[1,2,3,4,5,6]` if it was rotated `6` times.

Notice that rotating the array `4` times moves the last four elements of the array to the beginning. Rotating the array `6` times produces the original array.

Assuming all elements in the rotated sorted array `nums` are **unique**, return the minimum element of this array.

A solution that runs in `O(n)` time is trivial, can you write an algorithm that runs in `O(log n) time`?

**Example 1:**

```
Input: nums = [3,4,5,6,1,2]
Output: 1
```

**Example 2:**

```
Input: nums = [4,5,0,1,2,3]
Output: 0
```

**Example 3:**

```
Input: nums = [4,5,6,7]
Output: 4
```

**Constraints:**

-   `1 <= nums.length <= 1000`

-   `-1000 <= nums[i] <= 1000`

---

In this case, our target is the minimum element. Which portion of the array will it be found?

![image](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/02eaac7f-445e-4d1c-d51b-48c7c6aa2d00/public)

A) The left sorted portion

B) The right sorted portion  

========== Answer ==========  

**Answer**: B

The minimum element will be found in the right sorted portion since every element in that portion will be less than every element in the left sorted portion. The minimum element will be the leftmost value in the right sorted portion.

========== Id ==========  
61

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part IV - Binary Search::Chapter 4 - Find Minimum In Rotated Sorted Array - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-IV-Binary-Search::#Chapter-4-Find-Minimum-In-Rotated-Sorted-Array-Blind::#61-Find-minimum-in-rotated-sorted-array-you-a

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Not safe to store
