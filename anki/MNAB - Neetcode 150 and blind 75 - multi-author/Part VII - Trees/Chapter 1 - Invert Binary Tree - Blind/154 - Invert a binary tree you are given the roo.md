========== Question ==========  

### Invert a Binary Tree

You are given the root of a binary tree `root`. Invert the binary tree and return its root.

**Example 1:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/ac124ee6-207f-41f6-3aaa-dfb35815f200/public)

```
Input: root = [1,2,3,4,5,6,7]

Output: [1,3,2,7,6,5,4]
```

**Example 2:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/e39e8d4f-9946-4f99-ee3d-0d4df08d4d00/public)

```
Input: root = [3,2,1]

Output: [3,1,2]
```

**Example 3:**

```
Input: root = []

Output: []
```

**Constraints:**

-   `0 <= The number of nodes in the tree <= 100`.

-   `-100 <= Node.val <= 100`

---

Which tree traversal can be used to solve this problem?

A) Depth-First Search (DFS)

B) Breadth-First Search (BFS)

C) Neither DFS nor BFS

D) Both DFS and BFS  

========== Answer ==========  

**Answer**: D

Both Depth-First Search (DFS) and Breadth-First Search (BFS) could be used to solve this problem. Both methods would work because the order in which we visit the nodes doesn't matter in this problem, as long as every node’s children are swapped.

========== Id ==========  
154

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VII - Trees::Chapter 1 - Invert Binary Tree - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VII-Trees::#Chapter-1-Invert-Binary-Tree-Blind::#154-Invert-a-binary-tree-you-are-given-the-roo

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
