========== Question ==========  

### Two Integer Sum

Given an array of integers `nums` and an integer `target`, return the indices `i` and `j` such that `nums[i] + nums[j] == target` and `i != j`.

You may assume that _every_ input has exactly one pair of indices `i` and `j` that satisfy the condition.

Return the answer with the smaller index first.

**Example 1:**

```
Input:
nums = [3,4,5,6], target = 7
Output: [0,1]
```

Explanation: `nums[0] + nums[1] == 7`, so we return `[0, 1]`.

**Example 2:**

```
Input: nums = [4,5,6], target = 10
Output: [0,2]
```

**Example 3:**

```
Input: nums = [5,5], target = 10
Output: [0,1]
```

**Constraints:**

-   `2 <= nums.length <= 1000`

-   `-10,000,000 <= nums[i] <= 10,000,000`

-   `-10,000,000 <= target <= 10,000,000`

---

For any given element `x` within the array, how many possible unique `y-values` would satisfy `target = x + y`?

A) 1

B) 2

C) n - 1

D) n  

========== Answer ==========  

**Answer**: A

We can solve this equation for y: y = target - x. For example, if target=9, and x=2, then y = 9 - 2 = 7. In mathematics, this value is known as the complement.

========== Id ==========  
15

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays Hashing::Chapter 3 - Two Sum - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-Hashing::#Chapter-3-Two-Sum-Blind::#15-Two-integer-sum-given-an-array-of-integers

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Not safe to store
