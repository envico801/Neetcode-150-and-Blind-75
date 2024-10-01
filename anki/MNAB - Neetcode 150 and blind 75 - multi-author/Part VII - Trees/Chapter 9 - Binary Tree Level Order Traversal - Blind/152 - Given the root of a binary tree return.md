========== Question ==========  

### Given the `root` of a binary tree, return _the level order traversal of its nodes' values_. (i.e., from left to right, level by level).

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

Given the below Python function to solve the problem, what are the time and space complexities? Assume there are `n` nodes in the tree.

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        res = []
        q = collections.deque()
        if root: q.append(root)
        while q:
            val = []
            for i in range(len(q)):
                node = q.popleft()
                val.append(node.val)
                if node.left: q.append(node.left)
                if node.right: q.append(node.right)
            res.append(val)
        return res
```

A) Time complexity: O(n), Space complexity: O(n)

B) Time complexity: O(n^2), Space complexity: O(n)

C) Time complexity: O(n), Space complexity: O(log n)  

========== Answer ==========  

**Answer**: A

The time complexity of a level order traversal (or BFS) is O(n), where n is the number of nodes in the tree, as we need to visit every node. The space complexity is also O(n), as we need to store every node in the queue in the worst-case scenario (consider a full binary tree's last level).

========== Id ==========  
152

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VII - Trees::Chapter 9 - Binary Tree Level Order Traversal - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VII-Trees::#Chapter-9-Binary-Tree-Level-Order-Traversal-Blind::#152-Given-the-root-of-a-binary-tree-return

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
