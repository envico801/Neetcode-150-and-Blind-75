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

If you use a priority queue to keep track of the smallest node in each linked list, what would be the time complexity of inserting an element into the queue?

A) O(1)

B) O(log k)

C) O(k)

D) O(n)  

========== Answer ==========  

**Answer**: B

The time complexity of inserting an element into a priority queue (or min-heap) is O(log k), where k is the number of linked lists (or the current size of the heap). Each insert operation might need to restructure the heap to maintain its properties, which takes logarithmic time.

========== Id ==========  
134

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VI - Linked List::Chapter 10 - Merge K Sorted Lists - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VI-Linked-List::#Chapter-10-Merge-K-Sorted-Lists-Blind::#134-Merge-k-sorted-linked-lists-you-are-given

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
