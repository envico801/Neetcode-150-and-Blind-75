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

Given that all individual linked lists are already sorted, how can you take advantage of this to improve the time complexity?

A) By using a sorting algorithm that is more efficient on nearly sorted lists

B) By using a two-pointer technique to find pairs of nodes that sum to a target

C) By merging the linked lists two at a time

D) By using a priority queue to select the next smallest node  

========== Answer ==========  

**Answer**: D

Since all individual linked lists are sorted, you can use a priority queue (also known as a min-heap) to efficiently select the next smallest node from the heads of all the linked lists.

========== Id ==========  
133

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VI - Linked List::Chapter 10 - Merge K Sorted Lists - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VI-Linked-List::#Chapter-10-Merge-K-Sorted-Lists-Blind::#133-Merge-k-sorted-linked-lists-you-are-given

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
