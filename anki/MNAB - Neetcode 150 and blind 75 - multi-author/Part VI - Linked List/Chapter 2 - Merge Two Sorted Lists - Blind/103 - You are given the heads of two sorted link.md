========== Question ==========  

### You are given the heads of two sorted linked lists `list1` and `list2`.

Merge the two lists in a one **sorted** list. The list should be made by splicing together the nodes of the first two lists.

Return _the head of the merged linked list_.

**Example 1:**

![image](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/6bafdf72-dfb3-4085-9372-f34e7361d700/public)

```
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
```

**Example 2:**

```
Input: list1 = [], list2 = []
Output: []
```

**Example 3:**

```
Input: list1 = [], list2 = [0]
Output: [0]
```

**Constraints:**

-   The number of nodes in both lists is in the range `[0, 50]`.

-   `100 <= Node.val <= 100`

-   Both `list1` and `list2` are sorted in **non-decreasing** order.

---

If we have two sorted linked lists, where should we start comparing elements to begin merging them into a single sorted list?

A) From the middle of each list.

B) From the last element of each list.

C) From the first element of each list.  

========== Answer ==========  

**Answer**: C

As both lists are sorted in non-decreasing order, the smallest elements are at the heads of the lists. Hence, we should start comparing from the first elements of each list to create the new sorted list.

========== Id ==========  
103

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VI - Linked List::Chapter 2 - Merge Two Sorted Lists - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VI-Linked-List::#Chapter-2-Merge-Two-Sorted-Lists-Blind::#103-You-are-given-the-heads-of-two-sorted-link

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
