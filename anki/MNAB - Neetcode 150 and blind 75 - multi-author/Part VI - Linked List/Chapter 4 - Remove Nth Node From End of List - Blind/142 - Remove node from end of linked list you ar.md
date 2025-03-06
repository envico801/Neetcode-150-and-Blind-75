========== Question ==========  

### Remove Node From End of Linked List

You are given the beginning of a linked list `head`, and an integer `n`.

Remove the `nth` node from the end of the list and return the beginning of the list.

**Example 1:**

```
Input: head = [1,2,3,4], n = 2

Output: [1,2,4]
```

**Example 2:**

```
Input: head = [5], n = 1

Output: []
```

**Example 3:**

```
Input: head = [1,2], n = 2

Output: [2]
```

**Constraints:**

-   The number of nodes in the list is `sz`.

-   `1 <= sz <= 30`

-   `0 <= Node.val <= 100`

-   `1 <= n <= sz`

---

In order to remove a node `x` from a singly linked list, which node do we need access to?

A) Node x

B) Node before x

C) Node after x  

========== Answer ==========  

**Answer**: B

To remove a node x from a singly linked list, we need access to the node before x. This is because in a singly linked list, we can only navigate in one direction and there's no reference to the previous node from a given node. By having access to the node before x, we can adjust its next reference to bypass x, effectively removing x from the list.

========== Id ==========  
142

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VI - Linked List::Chapter 4 - Remove Nth Node From End of List - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VI-Linked-List::#Chapter-4-Remove-Nth-Node-From-End-of-List-Blind::#142-Remove-node-from-end-of-linked-list-you-ar

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
