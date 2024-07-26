========== Question ==========  

### You are given an array of `k` linked-lists `lists`, each linked-list is sorted in ascending order.

_Merge all the linked-lists into one sorted linked-list and return it._

**Example 1:**

```
Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1-&gt;4-&gt;5,
  1-&gt;3-&gt;4,
  2-&gt;6
]
merging them into one sorted list:
1-&gt;1-&gt;2-&gt;3-&gt;4-&gt;4-&gt;5-&gt;6
```

**Example 2:**

```
Input: lists = []
Output: []
```

**Example 3:**

```
Input: lists = [[]]
Output: []
```

**Constraints:**

- `k == lists.length`

- `0 <= k <= 10^4`

- `0 <= lists[i].length <= 500`

- `10^4 <= lists[i][j] <= 10^4`

- `lists[i]` is sorted in **ascending order**.

- The sum of `lists[i].length` will not exceed `10^4`.

---

What are the time and space complexities of the recursive solution to this
problem? Assume the binary tree is balanced and contains n nodes.

A) Time complexity: O(1), Space complexity: O(1)

B) Time complexity: O(n), Space complexity: O(log n)

C) Time complexity: O(n), Space complexity: O(n)

D) Time complexity: O(n^2), Space complexity: O(n^2)  

========== Answer ==========  

**Answer**: B

The time complexity of the recursive solution is O(n), where n is the number of
nodes in the tree. This is because we have to visit every node in the tree once
in order to swap its left and right children. The space complexity is O(log n)
in the average case, because the maximum amount of space we'll need corresponds
to the depth of the tree, which in a balanced binary tree is log(n). In the
worst case scenario (a completely unbalanced tree), it could be O(n), but
generally, we consider the average case for space complexity in recursive
solutions.

========== Id ==========  
143

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VII - Trees::Chapter 1 - Invert Binary Tree Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VII-Trees::#Chapter-1-Invert-Binary-Tree-Blind::#143-You-are-given-an-array-of-k-linked-lists

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
