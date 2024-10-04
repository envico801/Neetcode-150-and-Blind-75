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

Which tree traversal technique could be utilized to find the maximum depth of a binary tree?

A) Depth-First Search (DFS)

B) Breadth-First Search (BFS)

C) Both DFS and BFS

D) Neither DFS nor BFS  

========== Answer ==========  

**Answer**: C

Both DFS and BFS can be used to solve this problem. Both methods would work because they both can explore the full depth of the tree. There is no inherent efficiency gain in this particular problem for DFS over BFS or vice versa, as we would need to traverse all nodes to ensure we've found the maximum depth.

========== Id ==========  
130

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VII - Trees::Chapter 2 - Maximum Depth of Binary Tree - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VII-Trees::#Chapter-2-Maximum-Depth-of-Binary-Tree-Blind::#130-Depth-of-binary-tree-given-the-root-of-a

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Not safe to store
