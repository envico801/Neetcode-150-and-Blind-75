========== Question ==========  

### Combination Sum

Given an array of **distinct** integers `candidates` and a target integer `target`, return a list of all **unique combinations** of `candidates` where the chosen numbers sum to `target`. You may return the combinations in **any order**.

The **same** number may be chosen from `candidates` an unlimited number of times. Two combinations are unique if the

frequency

of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations that sum up to `target` is less than `150` combinations for the given input.

**Example 1:**

```
Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
```

---

In our decision tree, for each element in the array we will create a branch, where we choose to either include that element only once or skip it entirely. Will this find all combinations?

A) Yes

B) No  

========== Answer ==========  

**Answer**: B

No, this won't find all combinations. Because the same number may be chosen from candidates an unlimited number of times, we need to consider including each element more than once.

========== Id ==========  
168

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part IX - Backtracking::Chapter 2 - Combination Sum - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-IX-Backtracking::#Chapter-2-Combination-Sum-Blind::#168-Combination-sum-given-an-array-of-distin

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
