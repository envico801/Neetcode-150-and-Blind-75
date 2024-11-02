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

How can you find the middle node of a singly linked list?

A) Starting from the head, move to the next node until you find the middle node.

B) Use two pointers: a slow pointer moving one step at a time, and a fast pointer moving two steps at a time.  

========== Answer ==========  

**Answer**: B

We use a technique known as the 'tortoise and the hare' to find the middle of a singly linked list. The slow pointer moves one step at a time while the fast pointer moves two steps at a time. By the time the fast pointer reaches the end of the list, the slow pointer will be at the middle.

========== Id ==========  
130

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VI - Linked List::Chapter 3 - Reorder List - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VI-Linked-List::#Chapter-3-Reorder-List-Blind::#130-Reorder-linked-list-you-are-given-the-head

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
