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

What would be a straightforward but not necessarily optimal approach to solve
this problem?

A) Sequentially merge the linked lists, starting from the first one

B) Reverse each linked list, and then merge

C) Select the last node from each list and create a new sorted list

D) Randomly pick two lists to merge until one list is left  

========== Answer ==========  

**Answer**: A

A straightforward approach for this problem would involve sequentially merging
the linked lists, starting from the first one. This would involve merging the
first two lists, then merging the result with the third list, and so on. While
this approach is simple, it may not be the most efficient in terms of time
complexity.

========== Id ==========  
133

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VI - Linked List::Chapter 10 - Merge k Sorted Lists Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VI-Linked-List::#Chapter-10-Merge-k-Sorted-Lists-Blind::#133-You-are-given-an-array-of-k-linked-lists

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
