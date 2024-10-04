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

Which graph algorithm can be used to solve this problem?

A) Depth-first search

B) Breadth-first search

C) Both DFS and BFS

D) Neither  

========== Answer ==========  

**Answer**: C

Both depth-first search (DFS) and breadth-first search (BFS) can be used to solve this problem. They can both traverse all the connected '1's (land) starting from any given '1', and thus identify an island.

========== Id ==========  
158

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part XI - Graphs::Chapter 1 - Number of Islands - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-XI-Graphs::#Chapter-1-Number-of-Islands-Blind::#158-Number-of-islands-given-an-m-x-n-2d-bina

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
