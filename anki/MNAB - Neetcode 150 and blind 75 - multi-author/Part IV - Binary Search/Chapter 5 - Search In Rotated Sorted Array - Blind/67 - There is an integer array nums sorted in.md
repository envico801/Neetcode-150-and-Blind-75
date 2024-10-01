========== Question ==========  

### There is an integer array `nums` sorted in ascending order (with **distinct** values).

Prior to being passed to your function, `nums` is **possibly rotated** at an unknown pivot index `k` (`1 <= k < nums.length`) such that the resulting array is `[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]` (**0-indexed**). For example, `[0,1,2,4,5,6,7]` might be rotated at pivot index `3` and become `[4,5,6,7,0,1,2]`.

Given the array `nums` after the possible rotation and an integer `target`, return the index of `target` if it is in `nums`, or `-1` if it is not in `nums`.

You must write an algorithm with `O(log n)` runtime complexity.

**Example 1:**

```
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
```

**Example 2:**

```
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
```

**Constraints:**

-   `1 <= nums.length <= 5000`

-   `-10^4 <= nums[i] <= 10^4`

-   `All values of nums are unique.`

-   `nums is an ascending array that is possibly rotated.`

-   `-10^4 <= target <= 10^4`

---

Now consider a sorted array that has been rotated at an unknown index. What is the time complexity of the _simplest_ (but non-optimal) solution to find an element in this array?

A) O(n)

B) O(log n)

C) O(n^2)

D) O(1)  

========== Answer ==========  

**Answer**: A

The simplest solution would be to perform a linear search, which has a time complexity of O(n).

========== Id ==========  
67

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part IV - Binary Search::Chapter 5 - Search In Rotated Sorted Array - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-IV-Binary-Search::#Chapter-5-Search-In-Rotated-Sorted-Array-Blind::#67-There-is-an-integer-array-nums-sorted-in

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
