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

After reversing the second half of the list, how do you reorder the list to the required form?

A) By appending the second half of the list to the first half.

B) By alternating nodes from the first and second half of the list.

C) By concatenating the first half of the list to the second half.  

========== Answer ==========  

**Answer**: B

After reversing the second half of the list, we reorder the list by alternating nodes from the first and second half of the list.

========== Id ==========  
123

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VI - Linked List::Chapter 3 - Reorder List - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VI-Linked-List::#Chapter-3-Reorder-List-Blind::#123-Reorder-linked-list-you-are-given-the-head

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
