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

To summarize, the below code will solve this problem using an augmented binary search solution. What is the time and space complexity?

```python
def findMin(self, nums: List[int]) -> int:
    res = nums[0]
    l, r = 0, len(nums) - 1
    while l <= r:
        if nums[l] < nums[r]:
            return min(res, nums[l])
        m = (l + r) // 2
        res = min(res, nums[m])
        if nums[m] >= nums[l]:
            # We are in the left sorted portion, move right
            l = m + 1
        else:
            # We are in the right sorted portion, move left
            r = m - 1
    return res
```

A) Time complexity: O(n), Space complexity: O(1)

B) Time complexity: O(log n), Space complexity: O(1)

C) Time complexity: O(n log n), Space complexity: O(n)

D) Time complexity: O(n^2), Space complexity: O(n)  

========== Answer ==========  

**Answer**: B

The binary search approach has a time complexity of O(log n) because in each step, you reduce the problem size by half. The space complexity is O(1) because you are not using any additional space that scales with the input size. You only need a constant amount of space to store the variables left, right, and mid.

========== Id ==========  
71

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part IV - Binary Search::Chapter 4 - Find Minimum In Rotated Sorted Array - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-IV-Binary-Search::#Chapter-4-Find-Minimum-In-Rotated-Sorted-Array-Blind::#71-Find-minimum-in-rotated-sorted-array-you-a

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
