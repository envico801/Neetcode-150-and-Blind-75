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

What is the time complexity of the previous solution?

A) O(2^target)

B) O(2^(target + n))

C) O(n\*target)

D) O(n^2)  

========== Answer ==========  

**Answer**: B

The time complexity is O(n^(target + n)), where n is the number of candidates and target is the target sum. This is because, in the worst case the height of our tree may be n + target, since we have a level in the tree for each element in the array. If we have a '1' value, we may choose it 'target' number of times to sum up to the target value, further adding to the height. There will be 2 branches for each node in the tree, one to include the element and one to skip it. Thus, the time complexity is O(2^(n + target)).

========== Id ==========  
157

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part IX - Backtracking::Chapter 2 - Combination Sum - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-IX-Backtracking::#Chapter-2-Combination-Sum-Blind::#157-Combination-sum-given-an-array-of-distin

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
