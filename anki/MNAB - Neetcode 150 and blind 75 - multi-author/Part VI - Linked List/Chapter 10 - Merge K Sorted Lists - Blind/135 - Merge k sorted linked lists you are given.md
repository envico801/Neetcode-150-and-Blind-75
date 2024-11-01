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

If you use a priority queue to select the smallest node from each linked list, what would be the time complexity for merging all the linked lists into one sorted list?

A) O(n log n)

B) O(n log k)

C) O(k log n)

D) O(n)  

========== Answer ==========  

**Answer**: B

If you use a priority queue, you are essentially removing the smallest element (head of some linked list) and then adding the next element from the same list. Each operation (insert/remove) would take O(log k) time. Since we are doing these operations for all 'n' nodes, the total time complexity would be O(n log k).

========== Id ==========  
135

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VI - Linked List::Chapter 10 - Merge K Sorted Lists - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VI-Linked-List::#Chapter-10-Merge-K-Sorted-Lists-Blind::#135-Merge-k-sorted-linked-lists-you-are-given

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
