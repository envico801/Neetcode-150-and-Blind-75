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

What are the time and space complexities of the recursive solution to this problem? Assume the binary tree is balanced and contains n nodes.

A) Time complexity: O(1), Space complexity: O(1)

B) Time complexity: O(n), Space complexity: O(log n)

C) Time complexity: O(n), Space complexity: O(n)

D) Time complexity: O(n^2), Space complexity: O(n^2)  

========== Answer ==========  

**Answer**: B

The time complexity of the recursive solution is O(n), where n is the number of nodes in the tree. This is because we have to visit every node in the tree once in order to swap its left and right children. The space complexity is O(log n) in the average case, because the maximum amount of space we'll need corresponds to the depth of the tree, which in a balanced binary tree is log(n). In the worst case scenario (a completely unbalanced tree), it could be O(n), but generally, we consider the average case for space complexity in recursive solutions.

========== Id ==========  
149

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VII - Trees::Chapter 1 - Invert Binary Tree - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VII-Trees::#Chapter-1-Invert-Binary-Tree-Blind::#149-Invert-a-binary-tree-you-are-given-the-roo

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
