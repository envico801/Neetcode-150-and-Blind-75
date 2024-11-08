========== Question ==========  

### Number of Islands

Given an `m x n` 2D binary grid `grid` which represents a map of '1's (land) and '0's (water), return the number of islands.

An **island** is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

**Example 1:**

```
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
```

---

Assume we are solving this by running a recursive depth-first search on each island. Under what conditions (base cases) should we stop recursing in our search algorithm?

A) When all the cells in the grid have been visited.

B) When we reach a visited land cell.

C) When we reach an unvisited land cell.

D) When we reach a water cell, or reach a visited land cell, or go out of bounds.  

========== Answer ==========  

**Answer**: D

We should stop the recursion in our search algorithm when we reach a water cell ('0'), or reach a cell that has been already visited, or go out of the bounds of the grid. This ensures we only count connected land ('1's) as part of the same island and we don't overcount or go beyond the grid boundaries.

========== Id ==========  
188

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part XI - Graphs::Chapter 1 - Number of Islands - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-XI-Graphs::#Chapter-1-Number-of-Islands-Blind::#188-Number-of-islands-given-an-m-x-n-2d-bina

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
