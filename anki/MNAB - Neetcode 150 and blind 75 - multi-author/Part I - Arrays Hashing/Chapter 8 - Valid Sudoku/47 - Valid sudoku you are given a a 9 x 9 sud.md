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

What is a potential optimization when checking for duplicates in rows, columns, and boxes?

A) Check each separately with three passes

B) Use three HashSets and check all in one pass

C) Sort the board first

D) Use a Queue to track elements  

========== Answer ==========  

**Answer**: B

Using three HashSets and checking all in one pass is optimal because:

1. Only requires one traversal of the board

2. Can validate row, column, and box constraints simultaneously

3. Maintains O(1) space complexity

4. Reduces the number of times each cell is visited

========== Id ==========  
47

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays Hashing::Chapter 8 - Valid Sudoku

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-Hashing::#Chapter-8-Valid-Sudoku::#47-Valid-sudoku-you-are-given-a-a-9-x-9-sud

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
