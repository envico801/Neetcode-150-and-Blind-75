========== Question ==========  

### Suppose an array of length `n` sorted in ascending order is **rotated** between `1` and `n` times. For example, the array `nums = [0, 1, 2, 4, 5, 6, 7]` might become:

- `[4, 5, 6, 7, 0, 1, 2]` if it was rotated `4` times.

- `[0, 1, 2, 4, 5, 6, 7]` if it was rotated `7` times.

  Notice that **rotating** an array `[a[0], a[1], a[2], ..., a[n-1]]` 1 time
  results in the array `[a[n-1], a[0], a[1], a[2], ..., a[n-2]]`.

Given the sorted rotated array `nums` of **unique** elements, return _the
minimum element of this array_.

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

- `n == nums.length`

- `1 <= n <= 5000`

- `-5000 <= nums[i] <= 5000`

- All the integers of `nums` are unique.

- `nums` is sorted and rotated between `1` and `n` times.

---

In this case, our target is the minimum element. Which portion of the array will
it be found?

![image](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/02eaac7f-445e-4d1c-d51b-48c7c6aa2d00/public)

A) The left sorted portion

B) The right sorted portion  

========== Answer ==========  

**Answer**: B

The minimum element will be found in the right sorted portion since every
element in that portion will be less than every element in the left sorted
portion. The minimum element will be the leftmost value in the right sorted
portion.

========== Id ==========  
109

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part V - Binary Search::Chapter 5 - Find Minimum in Rotated Sorted Array Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-V-Binary-Search::#Chapter-5-Find-Minimum-in-Rotated-Sorted-Array-Blind::#109-Suppose-an-array-of-length-n-sorted-in-a

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
