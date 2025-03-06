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

If the middle element is greater than or equal to the first element of the array, where is the minimum element?

![image](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/c5da4e6e-997d-4ccc-952d-9dd0360f9200/public)

A) To the left of mid.

B) To the right of mid.

C) At the mid point.

D) This scenario is not possible.  

========== Answer ==========  

**Answer**: B

If the middle element is greater than the first element, it means the middle element is in the left sorted portion, but the minimum must be found in the right sorted portion.

========== Id ==========  
93

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part IV - Binary Search::Chapter 4 - Find Minimum In Rotated Sorted Array - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-IV-Binary-Search::#Chapter-4-Find-Minimum-In-Rotated-Sorted-Array-Blind::#93-Find-minimum-in-rotated-sorted-array-you-a

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
