========== Question ==========  

### Spiral Matrix

Given an `m x n` `matrix`, return _all elements of the_ `matrix` _in spiral order_.

**Example 1:**

![image](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/d23c7df9-a6dd-4b27-1b10-716af9df2c00/public)

```
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]
```

**Example 2:**

![image](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/7a94bac6-b2a5-4487-77b0-8313eb6e0900/public)

```
Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
```

**Constraints:**

-   `m == matrix.length`

-   `n == matrix[i].length`

-   `1 <= m, n <= 10`

-   `100 <= matrix[i][j] <= 100`

---

After completing one cycle of spiral traversal in the matrix, what should be the next step?

![image](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/cb1d1f77-711b-4fa0-e81f-fd5dfc35b700/public)

A) Repeat the same cycle on the remaining submatrix.

B) Reverse the cycle on the remaining submatrix.

C) Transpose the remaining submatrix and then repeat the same cycle.  

========== Answer ==========  

**Answer**: A

After completing one cycle of spiral traversal, the remaining submatrix will be smaller, but we should still traverse it in the same order: top row, rightmost column, bottom row, leftmost column.

========== Id ==========  
198

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part XVIII - Math Geometry::Chapter 2 - Spiral Matrix - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-XVIII-Math-Geometry::#Chapter-2-Spiral-Matrix-Blind::#198-Spiral-matrix-given-an-m-x-n-matrix-r

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
