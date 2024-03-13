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

If we are in the right sorted half of the array, but the target element belongs
in the left sorted half, where should we search relative to the mid pointer?

![image](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/37e384cf-75a6-4148-d389-0beb27f7ee00/public)

A) To the left of mid.

B) To the right of mid.

C) At the mid point.

D) This scenario is not possible.  

========== Answer ==========  

**Answer**: A

If we are in the right sorted half of the array, but the target element belongs
to the left sorted half, we should continue our search to the left of the mid
pointer.

========== Id ==========  
82

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part V - Binary Search::Chapter 4 - Search in Rotated Sorted Array Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-V-Binary-Search::#Chapter-4-Search-in-Rotated-Sorted-Array-Blind::#82-There-is-an-integer-array-nums-sorted-in

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
