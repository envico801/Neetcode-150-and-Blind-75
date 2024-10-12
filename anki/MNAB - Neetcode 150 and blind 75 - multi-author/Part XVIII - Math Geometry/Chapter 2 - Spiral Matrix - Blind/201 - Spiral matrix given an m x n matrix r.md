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

Consider the below code snippet. It returns the spiral order of elements in the given matrix without duplicating elements. What is its time and space complexity? Assume we include the output as additional space.

```python
class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        res = []
        left, right = 0, len(matrix[0])
        top, bottom = 0, len(matrix)
        # while pointers have not met
        while left < right and top < bottom:
            # get every val in the top row
            for i in range(left, right):
                res.append(matrix[top][i])
            top += 1
            # get every val in the right col
            for i in range(top, bottom):
                res.append(matrix[i][right - 1])
            right -= 1
            if not (left < right and top < bottom):
                # Pointers have met, so the spiral is complete
                break
            # get every val in the bottom row
            for i in range(right - 1, left - 1, -1):
                res.append(matrix[bottom - 1][i])
            bottom -= 1
            # get every val in the left col
            for i in range(bottom - 1, top - 1, -1):
                res.append(matrix[i][left])
            left += 1
        return res
```

A) Time complexity: O(m\*n)

Space complexity: O(m\*n)

B) Time complexity: O(m^2)

Space complexity: O(n^2)

C) Time complexity: O(m+n)

Space complexity: O(m+n)  

========== Answer ==========  

**Answer**: A

The time complexity of this function is O(m\*n), where m is the number of rows and n is the number of columns in the input matrix. This is because each element is visited and processed exactly once. The space complexity is also O(m\*n), because in the worst case, if all elements are stored in the output list, it will contain m\*n elements.

========== Id ==========  
201

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part XVIII - Math Geometry::Chapter 2 - Spiral Matrix - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-XVIII-Math-Geometry::#Chapter-2-Spiral-Matrix-Blind::#201-Spiral-matrix-given-an-m-x-n-matrix-r

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
