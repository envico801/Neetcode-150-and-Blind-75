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

What is the time complexity of the solution for this problem?

A) O(m \* n)

B) O(m^2 \* n^2)

C) O(m + n)

D) O(m \* n \* log(m \* n))  

========== Answer ==========  

**Answer**: A

The time complexity of the solution is O(m \* n), where m and n are the number of rows and columns in the grid, respectively. This is because in the worst-case scenario, we might have to visit all cells in the grid.

========== Id ==========  
162

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part XI - Graphs::Chapter 1 - Number of Islands - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-XI-Graphs::#Chapter-1-Number-of-Islands-Blind::#162-Number-of-islands-given-an-m-x-n-2d-bina

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Not safe to store
