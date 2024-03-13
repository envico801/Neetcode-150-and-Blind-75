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

If you use a priority queue to select the smallest node from each linked list, what would be the space complexity for merging all the linked lists into one sorted list?

A) O(1)

B) O(n)

C) O(k)

D) O(n + k)  

==================== Answer ====================  

**Answer**: C

In this case, the space complexity is O(k) because at any point, you only need to store the head nodes of each linked list in the priority queue. Here, k is the number of linked lists.

==================== Id ====================  
117

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VI - Linked List::Chapter 10 - Merge k Sorted Lists Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VI-Linked-List::#Chapter-10-Merge-k-Sorted-Lists-Blind::#117-You-are-given-an-array-of-k-linked-lists

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
