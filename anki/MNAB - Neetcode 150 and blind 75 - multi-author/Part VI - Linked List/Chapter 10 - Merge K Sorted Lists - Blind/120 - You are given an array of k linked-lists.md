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

Given that all individual linked lists are already sorted, how can you take advantage of this to improve the time complexity?

A) By using a sorting algorithm that is more efficient on nearly sorted lists

B) By using a two-pointer technique to find pairs of nodes that sum to a target

C) By merging the linked lists two at a time

D) By using a priority queue to select the next smallest node  

========== Answer ==========  

**Answer**: D

Since all individual linked lists are sorted, you can use a priority queue (also known as a min-heap) to efficiently select the next smallest node from the heads of all the linked lists.

========== Id ==========  
120

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VI - Linked List::Chapter 10 - Merge K Sorted Lists - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VI-Linked-List::#Chapter-10-Merge-K-Sorted-Lists-Blind::#120-You-are-given-an-array-of-k-linked-lists

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
