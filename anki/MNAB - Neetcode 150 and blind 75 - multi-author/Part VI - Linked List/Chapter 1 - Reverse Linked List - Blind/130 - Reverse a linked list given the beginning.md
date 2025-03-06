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

What could be a simple, but also optimal approach to reverse a linked list?

A) Recursively reverse the linked list in-place.

B) Use a stack to reverse the values of the linked list in-place.

C) Traverse the list once, and for each node, set its 'next' to the previous node.  

========== Answer ==========  

**Answer**: C

Recursion or using a stack would require additional space and isn't necessary. By traversing the list and updating the 'next' reference of each node to point to the previous node, we can achieve the desired result.

========== Id ==========  
130

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VI - Linked List::Chapter 1 - Reverse Linked List - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VI-Linked-List::#Chapter-1-Reverse-Linked-List-Blind::#130-Reverse-a-linked-list-given-the-beginning

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
