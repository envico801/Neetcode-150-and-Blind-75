========== Question ==========  

### Merge Two Sorted Linked Lists

You are given the heads of two sorted linked lists `list1` and `list2`.

Merge the two lists into one **sorted** linked list and return the head of the new sorted linked list.

The new list should be made up of nodes from `list1` and `list2`.

**Example 1:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/51adfea9-493a-4abb-ece7-fbb359d1c800/public)

```
Input: list1 = [1,2,4], list2 = [1,3,5]
Output: [1,1,2,3,4,5]
```

**Example 2:**

```
Input: list1 = [], list2 = [1,2]
Output: [1,2]
```

**Example 3:**

```
Input: list1 = [], list2 = []
Output: []
```

**Constraints:**

-   `0 <= The length of the each list <= 100`.

-   `-100 <= Node.val <= 100`

---

If we have two sorted linked lists, where should we start comparing elements to begin merging them into a single sorted list?

A) From the middle of each list.

B) From the last element of each list.

C) From the first element of each list.  

========== Answer ==========  

**Answer**: C

As both lists are sorted in non-decreasing order, the smallest elements are at the heads of the lists. Hence, we should start comparing from the first elements of each list to create the new sorted list.

========== Id ==========  
132

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VI - Linked List::Chapter 2 - Merge Two Sorted Lists - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VI-Linked-List::#Chapter-2-Merge-Two-Sorted-Lists-Blind::#132-Merge-two-sorted-linked-lists-you-are-give

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
