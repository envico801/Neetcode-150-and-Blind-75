========== Question ==========  

### House Robber

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and **it will automatically contact the police if two adjacent houses were broken into on the same night**.

Given an integer array `nums` representing the amount of money of each house, return the maximum amount of money you can rob tonight **without alerting the police**.

**Example 1:**

```
Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
```

---

We want to use memoization to improve the efficiency of the recursive solution. What subproblem should we cache the result of? Assume we start our recursion at the beginning of the array.

A) If we are at index i, the subproblem is the maximum we can rob only from houses that are at or to the right of index i. We can store this in a hashmap or an array by mapping the index to maximum amount.

B) If we are at index i, the subproblem is the maximum we can rob only from houses that are at or to the left of index i. We can store this in a hashmap or an array by mapping the index to maximum amount.  

========== Answer ==========  

**Answer**: A

If we start at the beginning of the array, each recursive call is a subproblem of the maximum we can rob only from a postfix of the array. The result of a subproblem allows us to solve a slightly larger subproblem.

========== Id ==========  
189

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part XII - 1-D DP::Chapter 3 - House Robber - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-XII-1-D-DP::#Chapter-3-House-Robber-Blind::#189-House-robber-you-are-a-professional-robber

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
