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

If we were to solve this problem without precomputing the length of the list, but instead using two pointers, what should the _offset_ between the two pointers be? Assume we will iterate until the second pointer reaches null.

![image](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/c6af2817-4885-47c2-9f04-8e9603192500/public)

A) n

B) n + 1

C) n - 1  

========== Answer ==========  

**Answer**: B

If we are to solve this problem using two pointers without precomputing the length of the list, the offset between the two pointers should be n + 1. This ensures that the second pointer reaches null right when the first pointer gets to the node before the target node, which is the nth node from the end of the list.

========== Id ==========  
136

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VI - Linked List::Chapter 4 - Remove Nth Node From End of List - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VI-Linked-List::#Chapter-4-Remove-Nth-Node-From-End-of-List-Blind::#136-Remove-node-from-end-of-linked-list-you-ar

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
