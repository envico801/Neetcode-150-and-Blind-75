========== Question ==========  

### Rotate Image

You are given an `n x n` 2D `matrix` representing an image, rotate the image by **90** degrees (clockwise).

You have to rotate the image **[in-place](https://en.wikipedia.org/wiki/In-place_algorithm)**, which means you have to modify the input 2D matrix directly. **DO NOT** allocate another 2D matrix and do the rotation.

**Example 1:**

![image](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/0e39a867-7e9c-4189-2b4e-1f6335868600/public)

```
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]
```

**Example 2:**

![image](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/a7e0dfba-646e-423e-2c4e-a6f0dfc2a500/public)

```
Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
```

**Constraints:**

-   `n == matrix.length == matrix[i].length`

-   `1 <= n <= 20`

-   `1000 <= matrix[i][j] <= 1000`

---

If we consider a layer-by-layer rotation starting from the corners, which will be the next four elements to be rotated after the four corners?

![image](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/d01c9636-cfee-4f7c-3fbb-ddb051090300/public)

A) 2nd element in first row, 2nd element in the first column, 2nd element in last row, 2nd element in last column

B) 2nd element in first row, 2nd element in last column, second to last element in last row, second to last element in first column  

========== Answer ==========  

**Answer**: B

After the corners, we shift one place inward or towards the center on each side. So, the next four elements to rotate are the 2nd element in the first row, the 2nd element in the last column, the second to last element in the last row, and the second to last element in the first column.

========== Id ==========  
180

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part XVIII - Math Geometry::Chapter 1 - Rotate Image

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-XVIII-Math-Geometry::#Chapter-1-Rotate-Image::#180-Rotate-image-you-are-given-an-n-x-n-2d

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
