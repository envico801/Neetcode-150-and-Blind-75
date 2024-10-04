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

How should we proceed after inserting a node from one of the lists into the output list?

A) Insert the node from the other list into the output list.

B) Shift to the next node in both lists and repeat the comparison.

C) Shift to the next node in the list from which we inserted the node and repeat the comparison.  

========== Answer ==========  

**Answer**: C

After inserting a node from one of the lists into the output list, we should shift to the next node in the same list. We've already considered the inserted node in the sorting process. Now, it's time to compare the next node from this list with the current node from the other list.

========== Id ==========  
105

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VI - Linked List::Chapter 2 - Merge Two Sorted Lists - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VI-Linked-List::#Chapter-2-Merge-Two-Sorted-Lists-Blind::#105-Merge-two-sorted-linked-lists-you-are-give

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Not safe to store
