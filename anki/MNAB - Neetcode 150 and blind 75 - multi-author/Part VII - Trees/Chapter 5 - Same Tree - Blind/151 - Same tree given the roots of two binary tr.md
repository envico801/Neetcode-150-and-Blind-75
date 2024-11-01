========== Question ==========  

### Same Tree

Given the roots of two binary trees `p` and `q`, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

**Example 1:**

![image](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/1168b33f-0718-49d2-3991-d2e92b1ae500/public)

```
Input: p = [1,2,3], q = [1,2,3]
Output: true
```

**Example 2:**

![image](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/753a6eeb-7153-4c61-096f-438a4ccd9400/public)

```
Input: p = [1,2], q = [1,null,2]
Output: false
```

**Example 3:**

![image](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/76cda15a-858b-4702-d319-badd1fb6da00/public)

```
Input: p = [1,2,1], q = [1,1,2]
Output: false
```

**Constraints:**

-   The number of nodes in both trees is in the range `[0, 100]`.

-   `10^4 <= Node.val <= 10^4`

---

Considering the below Python function to solve the problem, where `n` and `m` are the number of nodes in the first and second tree respectively, and `h1` and `h2` are the heights of the first and second tree respectively. What are the time and space complexities?

```python
class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        if not p and not q:
            return True
        if not p or not q or p.val != q.val:
            return False
        return (
            self.isSameTree(p.left, q.left) and
            self.isSameTree(p.right, q.right)
        )
```

A) Time complexity: O(1), Space complexity: O(1)

B) Time complexity: O(min(n, m)), Space complexity: O(min(h1, h2))

C) Time complexity: O(max(n, m)), Space complexity: O(max(h1, h2))  

========== Answer ==========  

**Answer**: B

The time complexity of the recursive solution is O(min(n, m)), where n and m are the number of nodes in the first and second tree, respectively. We stop as soon as we find a difference between the trees, which could be at a size smaller than the larger tree. The space complexity is O(min(h1, h2)) in the worst case, which is determined by the maximum amount of space required by the recursive stack. The worst-case occurs in situations where the tree is completely unbalanced (e.g., each node only contains a left / right child node), leading to a maximum recursion depth of h (height of the tree). However, because we are comparing two trees, the maximum recursion depth would be the minimum height of the two trees.

========== Id ==========  
151

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VII - Trees::Chapter 5 - Same Tree - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VII-Trees::#Chapter-5-Same-Tree-Blind::#151-Same-tree-given-the-roots-of-two-binary-tr

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
