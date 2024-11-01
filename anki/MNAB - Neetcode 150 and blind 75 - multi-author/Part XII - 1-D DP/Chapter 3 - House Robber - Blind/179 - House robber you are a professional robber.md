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

If we implement the brute-force approach using recursion, what will be our decisions as we go through the array?

A) Choice 1 = Rob the current house and go to the next house and continue making decisions. Choice 2 = Skip the current house altogether.

B) Choice 1 = Rob the current house and skip the next house and continue making decisions. Choice 2 = Skip the current house altogether.  

========== Answer ==========  

**Answer**: B

This ensures that we don't rob two adjacent houses.

========== Id ==========  
179

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part XII - 1-D DP::Chapter 3 - House Robber - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-XII-1-D-DP::#Chapter-3-House-Robber-Blind::#179-House-robber-you-are-a-professional-robber

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
