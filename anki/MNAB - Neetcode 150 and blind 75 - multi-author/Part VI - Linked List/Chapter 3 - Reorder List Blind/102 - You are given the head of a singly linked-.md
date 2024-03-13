========== Question ==========  

### You are given the head of a singly linked-list. The list can be represented as:

```
L0 → L1 → … → Ln - 1 → Ln
```

_Reorder the list to be on the following form:_

```
L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
```

You may not modify the values in the list's nodes. Only nodes themselves may be
changed.

**Example 1:**

![image](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/034d3a04-1ca6-4c81-8a7a-648658944600/public)

```
Input: head = [1,2,3,4]
Output: [1,4,2,3]
```

**Example 2:**

![image](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/80f9be46-c7d9-43bb-b072-3bbfd7942500/public)

```
Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]
```

**Constraints:**

- The number of nodes in the list is in the range `[1, 5 * 10^4]`.

- `1 <= Node.val <= 1000`

---

Given the list L0 → L1 → … → Ln - 1 → Ln, what is the first step to reorder the
list to the following form: L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …?

A) Reversing the entire list.

B) Reversing the second half of the list.

C) Swapping the first and the last node.  

========== Answer ==========  

**Answer**: B

To get to the required order, we first need to reverse the second half of the
list. This is because the second half of the list is to be interweaved with the
first half, but in the reverse order.

========== Id ==========  
102

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VI - Linked List::Chapter 3 - Reorder List Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VI-Linked-List::#Chapter-3-Reorder-List-Blind::#102-You-are-given-the-head-of-a-singly-linked-

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
