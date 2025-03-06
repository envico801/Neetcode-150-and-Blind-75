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

With the recursive approach in mind, how would we invert a binary tree?

A) Swap the left and right children of the root node, then recursively invert the left and right subtrees

B) Recursively invert the left subtree, then the right subtree, then swap the left and right children of the root node

C) Recursively invert the right subtree, then the left subtree, then swap the left and right children of the root node

D) Any of the above.  

========== Answer ==========  

**Answer**: D

The recursive approach to inverting a binary tree would involve swapping the left and right children of the root node, as well as recursively inverting the left subtree, and the right subtree. But it doesn’t matter the order we execute these operations because none of them interfere with each other.

========== Id ==========  
156

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VII - Trees::Chapter 1 - Invert Binary Tree - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VII-Trees::#Chapter-1-Invert-Binary-Tree-Blind::#156-Invert-a-binary-tree-you-are-given-the-roo

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
