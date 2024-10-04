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

How can you find all pairs of elements `x1, x2` within an array, which have a different index?

A) Sorting the array and using binary search to find a pair

B) Using two nested loops to iterate over all pairs of elements

C) Using divide and conquer to recursively find pairs  

========== Answer ==========  

**Answer**: B

To find all pairs of elements with different indices in the array, you can use two nested loops. The first loop iterates over each element, while the second loop only iterates over the elements to the right of the current element. This allows you to compare all possible pairs without duplicates.

========== Id ==========  
13

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays Hashing::Chapter 3 - Two Sum - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-Hashing::#Chapter-3-Two-Sum-Blind::#13-Two-integer-sum-given-an-array-of-integers

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Not safe to store
