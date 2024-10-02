========== Question ==========  

### Merge K Sorted Lists

You are given an array of `k` linked-lists `lists`, each linked-list is sorted in ascending order.

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

What would be the time complexity of the solution where you merge the linked lists one by one into the first linked list? Assume `n` is the total number of nodes, and `k` is the number of linked lists.

A) O(n)

B) O(n log n)

C) O(n^2)

D) O(kn)  

========== Answer ==========  

**Answer**: D

When you merge two linked lists, the time complexity is proportional to the total number of nodes in the two lists. If you merge the linked lists one by one, you'll end up with a time complexity of O(kn) because each merge operation can potentially traverse all n nodes, and this operation is repeated k times.

========== Id ==========  
119

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VI - Linked List::Chapter 10 - Merge K Sorted Lists - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VI-Linked-List::#Chapter-10-Merge-K-Sorted-Lists-Blind::#119-Merge-k-sorted-lists-you-are-given-an-arra

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
