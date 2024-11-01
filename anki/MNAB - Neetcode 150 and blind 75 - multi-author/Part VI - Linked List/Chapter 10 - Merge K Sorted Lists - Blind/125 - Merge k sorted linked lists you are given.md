========== Question ==========  

### Merge K Sorted Linked Lists

You are given an array of `k` linked lists `lists`, where each list is sorted in ascending order.

Return the **sorted** linked list that is the result of merging all of the individual linked lists.

**Example 1:**

```
Input: lists = [[1,2,4],[1,3,5],[3,6]]
Output: [1,1,2,3,3,4,5,6]
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

-   `0 <= lists.length <= 1000`

-   `0 <= lists[i].length <= 100`

-   `-1000 <= lists[i][j] <= 1000`

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
125

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VI - Linked List::Chapter 10 - Merge K Sorted Lists - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VI-Linked-List::#Chapter-10-Merge-K-Sorted-Lists-Blind::#125-Merge-k-sorted-linked-lists-you-are-given

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
