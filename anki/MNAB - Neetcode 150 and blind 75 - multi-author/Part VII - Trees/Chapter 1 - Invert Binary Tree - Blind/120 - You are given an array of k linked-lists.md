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

-   `k == lists.length`

-   `0 <= k <= 10^4`

-   `0 <= lists[i].length <= 500`

-   `10^4 <= lists[i][j] <= 10^4`

-   `lists[i]` is sorted in **ascending order**.

-   The sum of `lists[i].length` will not exceed `10^4`.

---

If we were to use a recursive DFS approach to solve this problem, what would be the base case?

A) When we encounter a null node

B) When we encounter a leaf node

C) Neither A nor B

D) Either one of A or B would be a sufficient base case  

========== Answer ==========  

**Answer**: D

The base case for a recursive approach to this problem could be when we encounter a null node. This is because we cannot swap the left and right children of a null node. But an alternative base case could be when we encounter a leaf node, since the node doesn’t have any children to swap.

========== Id ==========  
120

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VII - Trees::Chapter 1 - Invert Binary Tree - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VII-Trees::#Chapter-1-Invert-Binary-Tree-Blind::#120-You-are-given-an-array-of-k-linked-lists

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
