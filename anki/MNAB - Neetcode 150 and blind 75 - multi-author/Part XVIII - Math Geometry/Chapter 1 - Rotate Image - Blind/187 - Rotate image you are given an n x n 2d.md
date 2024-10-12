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

Considering the method of rotating each layer of the matrix, what would be the time complexity and space complexity of this operation?

```python
class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        l, r = 0, len(matrix) - 1
        while l < r:
            for i in range(r - l):
                top, bottom = l, r
                # save the topleft
                topLeft = matrix[top][l + i]
                # move bottom left into top left
                matrix[top][l + i] = matrix[bottom - i][l]
                # move bottom right into bottom left
                matrix[bottom - i][l] = matrix[bottom][r - i]
                # move top right into bottom right
                matrix[bottom][r - i] = matrix[top + i][r]
                # move top left into top right
                matrix[top + i][r] = topLeft
            r -= 1
            l += 1
```

A) Time complexity: O(1)

Space complexity: O(n)

B) Time complexity: O(n)

Space complexity: O(1)

C) Time complexity: O(n^2)

Space complexity: O(1)  

========== Answer ==========  

**Answer**: C

The time complexity of the rotation operation is O(n^2). This is because, for each layer of the matrix, we perform a constant amount of work for each element, and there are n^2 total elements. The space complexity is O(1) because we perform the rotation in-place without allocating any additional significant space. The only extra space we use is a couple of variables to keep track of the current position and temporarily hold an element during the rotation.

========== Id ==========  
187

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part XVIII - Math Geometry::Chapter 1 - Rotate Image - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-XVIII-Math-Geometry::#Chapter-1-Rotate-Image-Blind::#187-Rotate-image-you-are-given-an-n-x-n-2d

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
