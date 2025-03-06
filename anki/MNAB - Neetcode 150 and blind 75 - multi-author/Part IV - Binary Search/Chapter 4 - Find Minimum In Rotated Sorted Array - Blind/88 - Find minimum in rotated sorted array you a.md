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

Now consider a sorted array that has been rotated at an unknown index. What is the time complexity of the _simplest_ (but non-optimal) solution to find the minimum element in this array?

A) O(n)

B) O(log n)

C) O(n^2)

D) O(1)  

========== Answer ==========  

**Answer**: A

The simplest solution would be to perform a linear search, which has a time complexity of O(n).

========== Id ==========  
88

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part IV - Binary Search::Chapter 4 - Find Minimum In Rotated Sorted Array - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-IV-Binary-Search::#Chapter-4-Find-Minimum-In-Rotated-Sorted-Array-Blind::#88-Find-minimum-in-rotated-sorted-array-you-a

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
