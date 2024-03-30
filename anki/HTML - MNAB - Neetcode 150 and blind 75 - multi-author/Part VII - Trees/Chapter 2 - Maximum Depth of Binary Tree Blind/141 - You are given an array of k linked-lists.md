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

Given the below Python function to solve the problem, what are the time and space complexities? Assume the binary tree is balanced.

<!-- codeblock-start -->
<pre><code class="hljs language-python"><span class="hljs-keyword">class</span> <span class="hljs-title class_">Solution</span>:
     <span class="hljs-keyword">def</span> <span class="hljs-title function_">maxDepth</span>(<span class="hljs-params">self, root: TreeNode</span>) -> <span class="hljs-built_in">int</span>:
         <span class="hljs-keyword">if</span> <span class="hljs-keyword">not</span> root:
             <span class="hljs-keyword">return</span> <span class="hljs-number">0</span>
         <span class="hljs-keyword">return</span> <span class="hljs-number">1</span> + <span class="hljs-built_in">max</span>(
             self.maxDepth(root.left),
             self.maxDepth(root.right)
         )
</code></pre>
<!-- codeblock-end -->

A) Time complexity: O(1), Space complexity: O(1)

B) Time complexity: O(n), Space complexity: O(log n)

C) Time complexity: O(n), Space complexity: O(n)  

==================== Answer ====================  

**Answer**: B

The time complexity of the recursive solution is O(n), where n is the number of nodes in the tree. We visit each node once, so the time complexity is proportional to the size of the tree. The space complexity is O(log n) in the average case (for a balanced tree), as we only need to store information up to the depth of the tree, which is log(n) for a balanced binary tree. In the worst case (a completely unbalanced tree), the space complexity could be O(n).

==================== Id ====================  
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
