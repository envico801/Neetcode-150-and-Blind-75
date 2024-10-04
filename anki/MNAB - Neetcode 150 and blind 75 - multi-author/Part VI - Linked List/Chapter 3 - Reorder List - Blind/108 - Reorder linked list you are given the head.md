========== Question ==========  

### Reorder Linked List

You are given the head of a singly linked-list.

The positions of a linked list of `length = 7` for example, can intially be represented as:

`[0, 1, 2, 3, 4, 5, 6]`

Reorder the nodes of the linked list to be in the following order:

`[0, 6, 1, 5, 2, 4, 3]`

Notice that in the general case for a list of `length = n` the nodes are reordered to be in the following order:

`[0, n-1, 1, n-2, 2, n-3, ...]`

You may not modify the values in the list's nodes, but instead you must reorder the nodes themselves.

**Example 1:**

```
Input: head = [2,4,6,8]
Output: [2,8,4,6]
```

**Example 2:**

```
Input: head = [2,4,6,8,10]
Output: [2,10,4,8,6]
```

**Constraints:**

-   `1 <= Length of the list <= 1000`.

-   `1 <= Node.val <= 1000`

---

Given the list L0 → L1 → … → Ln - 1 → Ln, what is the first step to reorder the list to the following form: L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …?

A) Reversing the entire list.

B) Reversing the second half of the list.

C) Swapping the first and the last node.  

========== Answer ==========  

**Answer**: B

To get to the required order, we first need to reverse the second half of the list. This is because the second half of the list is to be interweaved with the first half, but in the reverse order.

========== Id ==========  
108

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VI - Linked List::Chapter 3 - Reorder List - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VI-Linked-List::#Chapter-3-Reorder-List-Blind::#108-Reorder-linked-list-you-are-given-the-head

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
