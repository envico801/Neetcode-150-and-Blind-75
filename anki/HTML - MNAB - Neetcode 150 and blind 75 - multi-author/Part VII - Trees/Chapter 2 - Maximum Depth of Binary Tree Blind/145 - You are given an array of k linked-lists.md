==================== Question ====================  

### You are given an array of `k` linked-lists `lists`, each linked-list is sorted in ascending order.

_Merge all the linked-lists into one sorted linked-list and return it._

**Example 1:**

<!-- codeblock-start -->
<pre><code>Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1-&#x26;gt;4-&#x26;gt;5,
  1-&#x26;gt;3-&#x26;gt;4,
  2-&#x26;gt;6
]
merging them into one sorted list:
1-&#x26;gt;1-&#x26;gt;2-&#x26;gt;3-&#x26;gt;4-&#x26;gt;4-&#x26;gt;5-&#x26;gt;6
</code></pre>
<!-- codeblock-end -->

**Example 2:**

<!-- codeblock-start -->
<pre><code>Input: lists = []
Output: []
</code></pre>
<!-- codeblock-end -->

**Example 3:**

<!-- codeblock-start -->
<pre><code>Input: lists = [[]]
Output: []
</code></pre>
<!-- codeblock-end -->

**Constraints:**

- `k == lists.length`

- `0 <= k <= 10^4`

- `0 <= lists[i].length <= 500`

- `10^4 <= lists[i][j] <= 10^4`

- `lists[i]` is sorted in **ascending order**.

- The sum of `lists[i].length` will not exceed `10^4`.

---

Which tree traversal technique could be utilized to find the maximum depth of a binary tree?

A) Depth-First Search (DFS)

B) Breadth-First Search (BFS)

C) Both DFS and BFS

D) Neither DFS nor BFS  

==================== Answer ====================  

**Answer**: C

Both DFS and BFS can be used to solve this problem. Both methods would work because they both can explore the full depth of the tree. There is no inherent efficiency gain in this particular problem for DFS over BFS or vice versa, as we would need to traverse all nodes to ensure we've found the maximum depth.

==================== Id ====================  
145

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VII - Trees::Chapter 2 - Maximum Depth of Binary Tree Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VII-Trees::#Chapter-2-Maximum-Depth-of-Binary-Tree-Blind::#145-You-are-given-an-array-of-k-linked-lists

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
