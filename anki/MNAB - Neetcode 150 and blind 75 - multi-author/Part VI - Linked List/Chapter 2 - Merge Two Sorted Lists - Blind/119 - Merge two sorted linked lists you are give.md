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

What if one list becomes empty (all of its nodes are used up) before the other during the merging process?

A) Discard the remaining nodes in the other list.

B) Append the remaining nodes in the other list to the merged list.

C) Pick nodes from the exhausted list randomly to fill up the merged list.  

========== Answer ==========  

**Answer**: B

If one list becomes empty before the other, we can safely append the remaining nodes from the other list to the merged list. As both lists are sorted, the remaining nodes will also be in sorted order.

========== Id ==========  
119

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VI - Linked List::Chapter 2 - Merge Two Sorted Lists - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VI-Linked-List::#Chapter-2-Merge-Two-Sorted-Lists-Blind::#119-Merge-two-sorted-linked-lists-you-are-give

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
