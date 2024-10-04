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

Can you reduce the time complexity of the algorithm to find the indices of two numbers that add up to the target using a data structure?

A) No, the time complexity cannot be reduced

B) Yes, using a priority queue

C) Yes, using a hashmap

D) Yes, using a balanced binary search tree  

========== Answer ==========  

**Answer**: C

Yes, you can reduce the time complexity using a hashmap. A hashmap allows you to store and retrieve values in O(1) - constant time, which can help you find the required indices more efficiently than a brute-force solution.

========== Id ==========  
16

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays Hashing::Chapter 3 - Two Sum - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-Hashing::#Chapter-3-Two-Sum-Blind::#16-Two-integer-sum-given-an-array-of-integers

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Not safe to store
