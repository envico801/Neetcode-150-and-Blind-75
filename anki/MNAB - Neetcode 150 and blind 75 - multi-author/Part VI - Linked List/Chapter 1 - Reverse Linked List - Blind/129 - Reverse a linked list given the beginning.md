========== Question ==========  

### Reverse a Linked List

Given the beginning of a singly linked list `head`, reverse the list, and return the new beginning of the list.

**Example 1:**

```
Input: head = [0,1,2,3]
Output: [3,2,1,0]
```

**Example 2:**

```
Input: head = []
Output: []
```

**Constraints:**

-   `0 <= The length of the list <= 1000`.

-   `-1000 <= Node.val <= 1000`

---

In order to reverse a linked list, we need to change the direction of which part of each node?

A) The node's value

B) The node's 'next' reference  

========== Answer ==========  

**Answer**: B

In a singly linked list, each node has a value and a 'next' reference pointing to the next node in the list. To reverse the list, we need to change the 'next' reference of each node to point to the previous node.

========== Id ==========  
129

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VI - Linked List::Chapter 1 - Reverse Linked List - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VI-Linked-List::#Chapter-1-Reverse-Linked-List-Blind::#129-Reverse-a-linked-list-given-the-beginning

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
