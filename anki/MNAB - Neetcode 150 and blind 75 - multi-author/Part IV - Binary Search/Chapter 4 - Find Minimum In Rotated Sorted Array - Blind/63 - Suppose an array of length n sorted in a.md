========== Question ==========  

### Suppose an array of length `n` sorted in ascending order is **rotated** between `1` and `n` times. For example, the array `nums = [0, 1, 2, 4, 5, 6, 7]` might become:

-   `[4, 5, 6, 7, 0, 1, 2]` if it was rotated `4` times.

-   `[0, 1, 2, 4, 5, 6, 7]` if it was rotated `7` times.

    Notice that **rotating** an array `[a[0], a[1], a[2], ..., a[n-1]]` 1 time results in the array `[a[n-1], a[0], a[1], a[2], ..., a[n-2]]`.

Given the sorted rotated array `nums` of **unique** elements, return _the minimum element of this array_.

You must write an algorithm that runs in `O(log n)` time.

**Example 1:**

```
Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.
```

**Example 2:**

```
Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
```

**Example 3:**

```
Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times.
```

**Constraints:**

-   `n == nums.length`

-   `1 <= n <= 5000`

-   `-5000 <= nums[i] <= 5000`

-   All the integers of `nums` are unique.

-   `nums` is sorted and rotated between `1` and `n` times.

---

If the middle element is less than the first element of the array, where is the minimum element?

![image](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/33828cf2-4d4e-42d0-e429-b03e49111500/public)

A) At the mid point.

B) At the mid point or to the left of mid.

C) To the right of mid.  

========== Answer ==========  

**Answer**: B

If the middle element is less than the first element, it means the middle element is in the right sorted portion. The smallest element will always be found in the right sorted portion, so either the middle element is the minimum or the minimum is to the left of mid.

========== Id ==========  
63

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part IV - Binary Search::Chapter 4 - Find Minimum In Rotated Sorted Array - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-IV-Binary-Search::#Chapter-4-Find-Minimum-In-Rotated-Sorted-Array-Blind::#63-Suppose-an-array-of-length-n-sorted-in-a

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
