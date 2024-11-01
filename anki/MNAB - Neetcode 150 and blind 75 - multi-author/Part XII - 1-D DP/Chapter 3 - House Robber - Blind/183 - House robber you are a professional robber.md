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

How can we solve this problem using dynamic programming? Assume we start robbing at the beginning of the array.

A) If we are at index i, the subproblem is the maximum we can rob only from houses that are at or to the right of index i. We can store this in a hashmap or an array after we compute it.

B) If we are at index i, the subproblem is the maximum we can rob only from houses that are at or to the left of index i. We can store this in a hashmap or an array after we compute it.  

========== Answer ==========  

**Answer**: B

If we start at the beginning of the array, on each iteration we are solving a new subproblem - a prefix of the array. The result of previous subproblems will be used to compute the next one.

========== Id ==========  
183

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part XII - 1-D DP::Chapter 3 - House Robber - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-XII-1-D-DP::#Chapter-3-House-Robber-Blind::#183-House-robber-you-are-a-professional-robber

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
