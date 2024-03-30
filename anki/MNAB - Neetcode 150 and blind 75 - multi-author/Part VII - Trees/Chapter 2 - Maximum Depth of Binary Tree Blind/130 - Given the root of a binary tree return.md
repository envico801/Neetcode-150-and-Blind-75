========== Question ==========  

### Given the `root` of a binary tree, return _its maximum depth_.

A binary tree's **maximum depth** is the number of nodes along the longest path
from the root node down to the farthest leaf node.

**Example 1:**

![image](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/4601cb74-8473-4e92-bf42-b0406178d900/public)

```
Input: root = [3,9,20,null,null,15,7]
Output: 3
```

**Example 2:**

```
Input: root = [1,null,2]
Output: 2
```

**Constraints:**

- The number of nodes in the tree is in the range `[0, 10^4]`.

- `100 <= Node.val <= 100`

---

What is the maximum depth of a binary tree with a single node?

A) 0

B) 1

C) 2

D) The depth is undefined for a single node tree.  

========== Answer ==========  

**Answer**: B

A tree with a single node (which is also the root) has a maximum depth of 1. The
depth of a tree is the number of nodes along the longest path from the root node
down to the farthest leaf node. Here, that path consists only of the root node
itself.

========== Id ==========  
130

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VII - Trees::Chapter 2 - Maximum Depth of Binary Tree Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VII-Trees::#Chapter-2-Maximum-Depth-of-Binary-Tree-Blind::#130-Given-the-root-of-a-binary-tree-return

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
