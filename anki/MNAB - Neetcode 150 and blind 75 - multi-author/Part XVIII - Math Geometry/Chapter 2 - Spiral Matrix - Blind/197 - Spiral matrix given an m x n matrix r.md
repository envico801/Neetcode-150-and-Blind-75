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

What is the correct order of traversal to achieve a spiral order in a matrix?

A) Top row from left to right, rightmost column from top to bottom, bottom row from right to left, leftmost column from bottom to top.

B) Top row from right to left, rightmost column from bottom to top, bottom row from left to right, leftmost column from top to bottom.  

========== Answer ==========  

**Answer**: A

To achieve a spiral order in a matrix, we start by traversing the top row from left to right, then the rightmost column from top to bottom, then the bottom row from right to left, and finally the leftmost column from bottom to top. This completes one cycle of spiral traversal.

========== Id ==========  
197

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part XVIII - Math Geometry::Chapter 2 - Spiral Matrix - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-XVIII-Math-Geometry::#Chapter-2-Spiral-Matrix-Blind::#197-Spiral-matrix-given-an-m-x-n-matrix-r

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
