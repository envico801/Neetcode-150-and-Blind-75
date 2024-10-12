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

To traverse an `m x n` matrix in a spiral order, how many pointers do we need and what do they represent?

A) 3 pointers - one for row, one for column, and one for diagonal traversal.

B) 4 pointers - one for each of top, right, bottom, and left boundaries of the current submatrix.

C) 5 pointers - one for each of top, right, bottom, left boundaries and one for the center of the matrix.  

========== Answer ==========  

**Answer**: B

To traverse a 2D matrix in a spiral order, we need 4 pointers to keep track of the boundaries of the current submatrix we are traversing. These boundaries are top, right, bottom, and left. As we traverse, we progressively move the boundaries inward.

========== Id ==========  
195

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part XVIII - Math Geometry::Chapter 2 - Spiral Matrix - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-XVIII-Math-Geometry::#Chapter-2-Spiral-Matrix-Blind::#195-Spiral-matrix-given-an-m-x-n-matrix-r

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
