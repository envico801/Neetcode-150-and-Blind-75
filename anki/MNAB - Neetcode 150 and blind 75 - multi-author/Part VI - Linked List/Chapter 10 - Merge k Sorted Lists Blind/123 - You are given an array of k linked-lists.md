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

If you use a priority queue to select the smallest node from each linked list,
what would be the time complexity for merging all the linked lists into one
sorted list?

A) O(n log n)

B) O(n log k)

C) O(k log n)

D) O(n)  

========== Answer ==========  

**Answer**: B

If you use a priority queue, you are essentially removing the smallest element
(head of some linked list) and then adding the next element from the same list.
Each operation (insert/remove) would take O(log k) time. Since we are doing
these operations for all 'n' nodes, the total time complexity would be O(n log
k).

========== Id ==========  
123

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VI - Linked List::Chapter 10 - Merge k Sorted Lists Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VI-Linked-List::#Chapter-10-Merge-k-Sorted-Lists-Blind::#123-You-are-given-an-array-of-k-linked-lists

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
