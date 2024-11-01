========== Question ==========  

### Depth of Binary Tree

Given the `root` of a binary tree, return its **depth**.

The **depth** of a binary tree is defined as the number of nodes along the longest path from the root node down to the farthest leaf node.

**Example 1:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/5ea6da77-7e43-43e0-dd9d-e879ca0b1600/public)

```
Input: root = [1,2,3,null,null,4]
Output: 3
```

**Example 2:**

```
Input: root = []
Output: 0
```

**Constraints:**

-   `0 <= The number of nodes in the tree <= 100`.

-   `-100 <= Node.val <= 100`

---

Considering the recursive approach, how would we compute the maximum depth of a binary tree?

A) Compare the depth of the left subtree and the right subtree, then return the maximum plus 1

B) Add the depths of the left subtree and the right subtree

C) Return the depth of the left subtree if it is non-null, else return the depth of the right subtree  

========== Answer ==========  

**Answer**: A

The maximum depth of a binary tree is one more than the maximum of the depths of its left and right subtrees. So, we recursively compute the maximum depths of the left and right subtrees, and the maximum depth of the tree is the maximum of these two depths plus 1.

========== Id ==========  
145

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VII - Trees::Chapter 2 - Maximum Depth of Binary Tree - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VII-Trees::#Chapter-2-Maximum-Depth-of-Binary-Tree-Blind::#145-Depth-of-binary-tree-given-the-root-of-a

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
