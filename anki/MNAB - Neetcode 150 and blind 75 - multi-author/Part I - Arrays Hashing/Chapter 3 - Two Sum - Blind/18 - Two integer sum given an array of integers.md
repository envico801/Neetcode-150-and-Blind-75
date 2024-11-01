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

What is the time and space complexity of the optimal solution using a hashmap?

A) Time complexity: O(n), Space complexity: O(n)

B) Time complexity: O(n \* log n), Space complexity: O(n)

C) Time complexity: O(n^2), Space complexity: O(1)

D) Time complexity: O(n), Space complexity: O(1)  

========== Answer ==========  

**Answer**: A

The hashmap solution has a time complexity of O(n) because you need to iterate through the array once. Also, the key lookup operation with hashmaps runs in O(1) time. The space complexity is also O(n) because, in the worst case, you might need to store all n elements in the hashmap.

========== Id ==========  
18

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays Hashing::Chapter 3 - Two Sum - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-Hashing::#Chapter-3-Two-Sum-Blind::#18-Two-integer-sum-given-an-array-of-integers

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
