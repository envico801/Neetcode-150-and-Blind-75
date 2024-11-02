========== Question ==========  

### Subtree of Another Tree

Given the roots of two binary trees `root` and `subRoot`, return `true` if there is a subtree of `root` with the same structure and node values of `subRoot` and `false` otherwise.

A subtree of a binary tree `tree` is a tree that consists of a node in `tree` and all of this node's descendants. The tree `tree` could also be considered as a subtree of itself.

**Example 1:**

![image](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/52b41f82-273f-4b31-83ea-f6895eb79200/public)

```
Input: root = [3,4,5,1,2], subRoot = [4,1,2]
Output: true
```

**Example 2:**

![image](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/fc852005-42e7-434d-3514-e5c834361b00/public)

```
Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
Output: false
```

**Constraints:**

-   The number of nodes in the `root` tree is in the range `[1, 2000]`.

-   The number of nodes in the `subRoot` tree is in the range `[1, 1000]`.

-   `10^4 <= root.val <= 10^4`

-   `10^4 <= subRoot.val <= 10^4`

---

Given the below Python solution to solve the problem, what are the time and space complexities of the `isSubtree` function? Assume the tree may not be balanced.

```python
class Solution:
    def isSubtree(self, s: TreeNode, t: TreeNode) -> bool:
        if not t: return True
        if not s: return False
        if self.sameTree(s, t):
            return True
        return (self.isSubtree(s.left, t) or
                self.isSubtree(s.right, t))
    def sameTree(self, s, t):
        if not s and not t:
            return True
        if s and t and s.val == t.val:
            return (self.sameTree(s.left, t.left) and
                    self.sameTree(s.right, t.right))
        return False
```

A) Time complexity: O(mn), Space complexity: O(n)

B) Time complexity: O(m+n), Space complexity: O(m+n)

C) Time complexity: O(n), Space complexity: O(log n)  

========== Answer ==========  

**Answer**: A

The time complexity of this solution is O(mn), where m and n are the number of nodes in root and subroot, respectively. This is because, in the worst case, for each node in root, we may have to traverse all nodes in subroot to check if they form the same tree (i.e., in the sameTree function). The space complexity is O(n) in the worst case (for an unbalanced tree) because of the potential stack space needed for the DFS traversal. However, if the tree is balanced, the space complexity would be O(log n) as the maximum depth of the tree (and thus the maximum stack size) would be log n.

========== Id ==========  
164

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VII - Trees::Chapter 6 - Subtree of Another Tree - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VII-Trees::#Chapter-6-Subtree-of-Another-Tree-Blind::#164-Subtree-of-another-tree-given-the-roots-of

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
