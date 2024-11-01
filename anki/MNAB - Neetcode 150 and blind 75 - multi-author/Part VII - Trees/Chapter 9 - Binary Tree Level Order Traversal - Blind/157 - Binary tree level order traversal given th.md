========== Question ==========  

### Binary Tree Level Order Traversal

Given the `root` of a binary tree, return _the level order traversal of its nodes' values_. (i.e., from left to right, level by level).

**Example 1:**

![image](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/e9bf9a5e-fd98-48e2-0967-a1d246f32100/public)

```
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
```

**Example 2:**

```
Input: root = [1]
Output: [[1]]
```

**Example 3:**

```
Input: root = []
Output: []
```

**Constraints:**

-   The number of nodes in the tree is in the range `[0, 2000]`.

-   `1000 <= Node.val <= 1000`

---

For level order traversal, when do we start a new level in the output?

A) When we have visited all the nodes in the current level

B) When the tree has no more levels to traverse  

========== Answer ==========  

**Answer**: A

We start a new level in the output when we have visited all the nodes in the current level. This can be tracked by recording the size of the queue before starting a new level, and then dequeueing that many nodes for the current level.

========== Id ==========  
157

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VII - Trees::Chapter 9 - Binary Tree Level Order Traversal - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VII-Trees::#Chapter-9-Binary-Tree-Level-Order-Traversal-Blind::#157-Binary-tree-level-order-traversal-given-th

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
