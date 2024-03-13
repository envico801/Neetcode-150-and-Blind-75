========== Question ==========  

### Given the `head` of a singly linked list, reverse the list, and return _the reversed list_.

**Example 1:**

![image](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/b57f05e4-bd0a-4d71-2066-bfad19f84300/public)

```
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
```

**Example 2:**

![image](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/21b14354-6a3a-45e0-8d02-ecc7ec7f7300/public)

```
Input: head = [1,2]
Output: [2,1]
```

**Example 3:**

```
Input: head = []
Output: []
```

**Constraints:**

- The number of nodes in the list is the range `[0, 5000]`.

- `5000 <= Node.val <= 5000`

---

What could be a simple, but also optimal approach to reverse a linked list?

A) Recursively reverse the linked list in-place.

B) Use a stack to reverse the values of the linked list in-place.

C) Traverse the list once, and for each node, set its 'next' to the previous
node.  

========== Answer ==========  

**Answer**: C

Recursion or using a stack would require additional space and isn't necessary.
By traversing the list and updating the 'next' reference of each node to point
to the previous node, we can achieve the desired result.

========== Id ==========  
95

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VI - Linked List::Chapter 1 - Reverse Linked List Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VI-Linked-List::#Chapter-1-Reverse-Linked-List-Blind::#95-Given-the-head-of-a-singly-linked-list

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
