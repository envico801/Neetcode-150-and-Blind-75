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

When comparing the first nodes of each list, which node should we insert into the output list?

A) The node with the larger value.

B) The node with the smaller value.

C) Any node, the choice doesn't matter.  

========== Answer ==========  

**Answer**: B

To maintain the sorted order in the output list, we should always insert the node with the smaller value first. If there’s a tie, we can insert either node. This ensures that we are always adding the smallest remaining element to the merged list.

========== Id ==========  
133

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VI - Linked List::Chapter 2 - Merge Two Sorted Lists - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VI-Linked-List::#Chapter-2-Merge-Two-Sorted-Lists-Blind::#133-Merge-two-sorted-linked-lists-you-are-give

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
