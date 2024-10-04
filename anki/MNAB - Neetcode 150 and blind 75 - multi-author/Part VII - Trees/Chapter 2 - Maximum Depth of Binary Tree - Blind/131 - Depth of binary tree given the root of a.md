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

If we use a recursive DFS approach to solve this problem, what would be a sensible base case?

A) When we encounter a null node

B) When we encounter a node with only one child

C) There is no need for a base case  

========== Answer ==========  

**Answer**: A

A good base case for this problem could be when we encounter a null node. When we reach a null node, it indicates we've traversed all the way down one path of the tree and we've hit a leaf node in the previous step.

========== Id ==========  
131

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VII - Trees::Chapter 2 - Maximum Depth of Binary Tree - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VII-Trees::#Chapter-2-Maximum-Depth-of-Binary-Tree-Blind::#131-Depth-of-binary-tree-given-the-root-of-a

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Not safe to store
