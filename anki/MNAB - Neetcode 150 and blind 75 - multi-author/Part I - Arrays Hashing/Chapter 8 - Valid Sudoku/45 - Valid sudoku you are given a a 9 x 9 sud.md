========== Question ==========  

### Valid Sudoku

You are given a a `9 x 9` Sudoku board `board`. A Sudoku board is valid if the following rules are followed:

1.  Each row must contain the digits `1-9` without duplicates.

2.  Each column must contain the digits `1-9` without duplicates.

3.  Each of the nine `3 x 3` sub-boxes of the grid must contain the digits `1-9` without duplicates.

Return `true` if the Sudoku board is valid, otherwise return `false`

Note: A board does not need to be full or be solvable to be valid.

**Example 1:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/0be40c5d-2d18-42b8-261b-13ca50de4100/public)

```
Input: board =
[["1","2",".",".","3",".",".",".","."],
 ["4",".",".","5",".",".",".",".","."],
 [".","9","8",".",".",".",".",".","3"],
 ["5",".",".",".","6",".",".",".","4"],
 [".",".",".","8",".","3",".",".","5"],
 ["7",".",".",".","2",".",".",".","6"],
 [".",".",".",".",".",".","2",".","."],
 [".",".",".","4","1","9",".",".","8"],
 [".",".",".",".","8",".",".","7","9"]]
Output: true
```

**Example 2:**

```
Input: board =
[["1","2",".",".","3",".",".",".","."],
 ["4",".",".","5",".",".",".",".","."],
 [".","9","1",".",".",".",".",".","3"],
 ["5",".",".",".","6",".",".",".","4"],
 [".",".",".","8",".","3",".",".","5"],
 ["7",".",".",".","2",".",".",".","6"],
 [".",".",".",".",".",".","2",".","."],
 [".",".",".","4","1","9",".",".","8"],
 [".",".",".",".","8",".",".","7","9"]]
Output: false
```

Explanation: There are two 1's in the top-left 3x3 sub-box.

**Constraints:**

-   `board.length == 9`

-   `board[i].length == 9`

-   `board[i][j]` is a digit `1-9` or `'.'`.

---

What is the total time complexity for validating the entire Sudoku board?

A) O(1)

B) O(n)

C) O(n^2)

D) O(n^3)  

========== Answer ==========  

**Answer**: C

The total time complexity is O(n^2) because:

1. We need to visit each cell once: 9 \* 9 = 81 visits

2. Each visit involves O(1) operations with HashSet

3. Even though the board size is fixed at 9x9, we use O(n^2) to describe the general case

4. The linear scans for rows, columns, and boxes can all be done in one pass

========== Id ==========  
45

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays Hashing::Chapter 8 - Valid Sudoku

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-Hashing::#Chapter-8-Valid-Sudoku::#45-Valid-sudoku-you-are-given-a-a-9-x-9-sud

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
