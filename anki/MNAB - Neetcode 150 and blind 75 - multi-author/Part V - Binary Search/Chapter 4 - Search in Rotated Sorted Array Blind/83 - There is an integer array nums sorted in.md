========== Question ==========  

### There is an integer array `nums` sorted in ascending order (with **distinct** values).

Prior to being passed to your function, `nums` is **possibly rotated** at an
unknown pivot index `k` (`1 <= k < nums.length`) such that the resulting array
is `[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]`
(**0-indexed**). For example, `[0,1,2,4,5,6,7]` might be rotated at pivot index
`3` and become `[4,5,6,7,0,1,2]`.

Given the array `nums` after the possible rotation and an integer `target`,
return the index of `target` if it is in `nums`, or `-1` if it is not in `nums`.

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

- `1 <= nums.length <= 5000`

- `-10^4 <= nums[i] <= 10^4`

- `All values of nums are unique.`

- `nums is an ascending array that is possibly rotated.`

- `-10^4 <= target <= 10^4`

---

Suppose we have a normal sorted integer array. What is normally the optimal time
complexity to find an element in it?

A) O(n)

B) O(log n)

C) O(n^2)

D) O(1)  

========== Answer ==========  

**Answer**: B

For a sorted array, binary search can be applied to find an element. The time
complexity of binary search is O(log n).

========== Id ==========  
83

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part V - Binary Search::Chapter 4 - Search in Rotated Sorted Array Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-V-Binary-Search::#Chapter-4-Search-in-Rotated-Sorted-Array-Blind::#83-There-is-an-integer-array-nums-sorted-in

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
