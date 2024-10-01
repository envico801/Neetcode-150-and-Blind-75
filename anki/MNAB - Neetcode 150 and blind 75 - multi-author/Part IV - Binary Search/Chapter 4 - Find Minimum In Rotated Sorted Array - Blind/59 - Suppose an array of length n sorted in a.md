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
59

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part IV - Binary Search::Chapter 4 - Find Minimum In Rotated Sorted Array - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-IV-Binary-Search::#Chapter-4-Find-Minimum-In-Rotated-Sorted-Array-Blind::#59-Suppose-an-array-of-length-n-sorted-in-a

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
