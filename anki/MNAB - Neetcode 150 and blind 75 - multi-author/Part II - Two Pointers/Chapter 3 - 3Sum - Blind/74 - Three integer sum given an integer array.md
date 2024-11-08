========== Question ==========  

### Three Integer Sum

Given an integer array `nums`, return all the triplets `[nums[i], nums[j], nums[k]]` where `nums[i] + nums[j] + nums[k] == 0`, and the indices `i`, `j` and `k` are all distinct.

The output should _not_ contain any duplicate triplets. You may return the output and the triplets in **any order**.

**Example 1:**

```
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
```

Explanation:

`nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.`

`nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.`

`nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.`

The distinct triplets are `[-1,0,1]` and `[-1,-1,2]`.

**Example 2:**

```
Input: nums = [0,1,1]
Output: []
```

Explanation: The only possible triplet does not sum up to 0.

**Example 3:**

```
Input: nums = [0,0,0]
Output: [[0,0,0]]
```

Explanation: The only possible triplet sums up to 0.

**Constraints:**

-   `3 <= nums.length <= 1000`

-   `-10^5 <= nums[i] <= 10^5`

---

Given the optimized solution using sorting and a two-pointer approach, what is the overall time and space complexity?

```python
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        res = []
        nums.sort()
        for i, a in enumerate(nums):
            if i > 0 and a == nums[i - 1]:
                # We already used nums[i] as the
                # first element, so skip it
                continue
            # Use two pointers on the remaining
            # sorted subarray to solve a + b + c = 0
            l, r = i + 1, len(nums) - 1
            while l < r:
                threeSum = a + nums[l] + nums[r]
                if threeSum > 0:
                    r -= 1
                elif threeSum < 0:
                    l += 1
                else:
                    # Solution found
                    res.append([a, nums[l], nums[r]])
                    l += 1
                    while nums[l] == nums[l - 1] and l < r:
                        # Eliminate duplicates by incrementing
                        # left ptr until new nums[l] is found
                        l += 1
        return res
```

A) Time complexity: O(n^2), Space complexity: O(1)

B) Time complexity: O(n^2), Space complexity: O(n)

C) Time complexity: O(n log n), Space complexity: O(n)  

========== Answer ==========  

**Answer**: A

The time complexity is O(n^2) because we iterate through the array once (which is O(n)), and for each iteration, we potentially go through the rest of the array using the two-pointer approach (which is also O(n)), thus resulting in O(n^2). The space complexity is O(1) since we aren't using additional space, other than the output.

========== Id ==========  
74

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part II - Two Pointers::Chapter 3 - 3Sum - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-II-Two-Pointers::#Chapter-3-3Sum-Blind::#74-Three-integer-sum-given-an-integer-array

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
