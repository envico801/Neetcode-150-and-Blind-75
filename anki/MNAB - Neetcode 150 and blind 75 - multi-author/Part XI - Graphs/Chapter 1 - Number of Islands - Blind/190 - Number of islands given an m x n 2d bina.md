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

What should be our approach to traverse the grid to find the number of islands?

A) Traverse the entire grid and start a DFS or BFS search from each land cell.

B) Traverse the entire grid and start a DFS or BFS search from each visited land cell.

C) Traverse the entire grid and start a DFS or BFS search from each unvisited land cell.  

========== Answer ==========  

**Answer**: C

We should traverse the entire grid and start a DFS or BFS search from each unvisited land cell. This approach ensures that we cover all islands, as each unvisited '1' we encounter would represent a new island.

========== Id ==========  
190

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part XI - Graphs::Chapter 1 - Number of Islands - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-XI-Graphs::#Chapter-1-Number-of-Islands-Blind::#190-Number-of-islands-given-an-m-x-n-2d-bina

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
