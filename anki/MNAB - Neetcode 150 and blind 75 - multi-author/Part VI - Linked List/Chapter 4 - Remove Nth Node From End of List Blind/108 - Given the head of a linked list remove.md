========== Question ==========  

### Given the `head` of a linked list, remove the `nth` node from the end of the list and return its head.

**Example 1:**

![image](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/23a28313-7f20-49b4-9781-fcf45a598100/public)

```
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
```

**Example 2:**

```
Input: head = [1], n = 1
Output: []
```

**Example 3:**

```
Input: head = [1,2], n = 1
Output: [1]
```

**Constraints:**

- The number of nodes in the list is `sz`.

- `1 <= sz <= 30`

- `0 <= Node.val <= 100`

- `1 <= n <= sz`

**Follow up:** Could you do this in one pass?

---

An edge case is where we must remove the first node in the list. What is a
simple way to eliminate this edge case?

A) Add a dummy node at the end of the list.

B) Add a dummy node at the beginning of the list.

C) There is no way to eliminate this edge case.  

========== Answer ==========  

**Answer**: B

To eliminate the edge case of removing the first node in the list, we can add a
dummy node at the beginning of the list. This dummy node won't affect the other
operations, but allows us to handle the head of the list in a consistent way
with other nodes.

========== Id ==========  
108

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VI - Linked List::Chapter 4 - Remove Nth Node From End of List Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VI-Linked-List::#Chapter-4-Remove-Nth-Node-From-End-of-List-Blind::#108-Given-the-head-of-a-linked-list-remove

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
