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

If you use a priority queue to select the smallest node from each linked list, what would be the space complexity for merging all the linked lists into one sorted list?

A) O(1)

B) O(n)

C) O(k)

D) O(n + k)  

========== Answer ==========  

**Answer**: C

In this case, the space complexity is O(k) because at any point, you only need to store the head nodes of each linked list in the priority queue. Here, k is the number of linked lists.

========== Id ==========  
129

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VI - Linked List::Chapter 10 - Merge K Sorted Lists - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VI-Linked-List::#Chapter-10-Merge-K-Sorted-Lists-Blind::#129-Merge-k-sorted-linked-lists-you-are-given

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
