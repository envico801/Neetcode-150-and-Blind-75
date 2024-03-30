========== Question ==========  

### You are given an array of `k` linked-lists `lists`, each linked-list is sorted in ascending order.

_Merge all the linked-lists into one sorted linked-list and return it._

**Example 1:**

```
Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1-&gt;4-&gt;5,
  1-&gt;3-&gt;4,
  2-&gt;6
]
merging them into one sorted list:
1-&gt;1-&gt;2-&gt;3-&gt;4-&gt;4-&gt;5-&gt;6
```

**Example 2:**

```
Input: lists = []
Output: []
```

**Example 3:**

```
Input: lists = [[]]
Output: []
```

**Constraints:**

- `k == lists.length`

- `0 <= k <= 10^4`

- `0 <= lists[i].length <= 500`

- `10^4 <= lists[i][j] <= 10^4`

- `lists[i]` is sorted in **ascending order**.

- The sum of `lists[i].length` will not exceed `10^4`.

---

Given the below Python function to solve the problem, what are the time and
space complexities? Assume the binary tree is balanced.

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

The time complexity of the recursive solution is O(n), where n is the number of
nodes in the tree. We visit each node once, so the time complexity is
proportional to the size of the tree. The space complexity is O(log n) in the
average case (for a balanced tree), as we only need to store information up to
the depth of the tree, which is log(n) for a balanced binary tree. In the worst
case (a completely unbalanced tree), the space complexity could be O(n).

========== Id ==========  
141

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VII - Trees::Chapter 2 - Maximum Depth of Binary Tree Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VII-Trees::#Chapter-2-Maximum-Depth-of-Binary-Tree-Blind::#141-You-are-given-an-array-of-k-linked-lists

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
