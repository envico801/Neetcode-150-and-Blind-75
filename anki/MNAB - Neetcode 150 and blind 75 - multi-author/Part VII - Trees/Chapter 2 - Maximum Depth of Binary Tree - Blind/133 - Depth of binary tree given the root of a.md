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

Given the below Python function to solve the problem, what are the time and space complexities? Assume the binary tree is balanced.

```python
class Solution:
    def maxDepth(self, root: TreeNode) -> int:
        if not root:
            return 0
        return 1 + max(
            self.maxDepth(root.left),
            self.maxDepth(root.right)
        )
```

A) Time complexity: O(1), Space complexity: O(1)

B) Time complexity: O(n), Space complexity: O(log n)

C) Time complexity: O(n), Space complexity: O(n)  

========== Answer ==========  

**Answer**: B

The time complexity of the recursive solution is O(n), where n is the number of nodes in the tree. We visit each node once, so the time complexity is proportional to the size of the tree. The space complexity is O(log n) in the average case (for a balanced tree), as we only need to store information up to the depth of the tree, which is log(n) for a balanced binary tree. In the worst case (a completely unbalanced tree), the space complexity could be O(n).

========== Id ==========  
133

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VII - Trees::Chapter 2 - Maximum Depth of Binary Tree - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VII-Trees::#Chapter-2-Maximum-Depth-of-Binary-Tree-Blind::#133-Depth-of-binary-tree-given-the-root-of-a

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
