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

If the current portion of our search range from left to right is already sorted,
e.g. `nums[l] < nums[r]`, then which element is the minimum of the current
search range?

![image](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/958a3861-e7b7-4da8-8561-544714ca8400/public)

A) nums\[m\]

B) nums\[l\]

C) nums\[r\]

D) None of the above.  

========== Answer ==========  

**Answer**: B

In a normal sorted array, the leftmost element is the minimum. In our case, if
the original array is rotated n times, the minimum will be nums\[0\].
Alternatively, as we run binary search, if the current subarray of our search is
a normal sorted array, we can end the binary search.

========== Id ==========  
89

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part V - Binary Search::Chapter 5 - Find Minimum in Rotated Sorted Array Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-V-Binary-Search::#Chapter-5-Find-Minimum-in-Rotated-Sorted-Array-Blind::#89-Suppose-an-array-of-length-n-sorted-in-a

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
