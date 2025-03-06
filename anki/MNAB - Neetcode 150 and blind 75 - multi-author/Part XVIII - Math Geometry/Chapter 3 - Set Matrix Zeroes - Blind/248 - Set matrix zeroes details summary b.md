========== Question ==========  

### Set Matrix Zeroes

<details><summary><b>📄 Description</b></summary><br>

Given an `m x n` matrix of integers `matrix`, if an element is `0`, set its entire row and column to `0`'s.

You must update the matrix _in-place_.

**Follow up:** Could you solve it using `O(1)` space?

**Example 1:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/49ffd14e-b32b-4ed8-e0d0-9378e5eb9b00/public)

```
Input: matrix = [
  [0,1],
  [1,0]
]

Output: [
  [0,0],
  [0,0]
]
```

**Example 2:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/04d99cc8-e453-464d-888c-58d0a95daf00/public)

```
Input: matrix = [
  [1,2,3],
  [4,0,5],
  [6,7,8]
]

Output: [
  [1,0,3],
  [0,0,0],
  [6,0,8]
]
```

**Constraints:**

-   `1 <= matrix.length, matrix[0].length <= 100`

-   `-2^31 <= matrix[i][j] <= (2^31) - 1`

</details>

---

When trying to use O(1) extra space, which of the following is a valid approach?

A) Use recursive algorithms

B) Use the first row and first column of the matrix itself as markers

C) Sort each row and column first

D) Convert the matrix to a graph structure  

========== Answer ==========  

**Answer**: B

The optimal approach for O(1) space is to use the first row and first column of the matrix itself to mark which rows and columns should be zeroed. This clever technique avoids using additional data structures while still tracking all necessary information.

========== Id ==========  
248

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part XVIII - Math Geometry::Chapter 3 - Set Matrix Zeroes - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-XVIII-Math-Geometry::#Chapter-3-Set-Matrix-Zeroes-Blind::#248-Set-matrix-zeroes-details-summary-b

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
