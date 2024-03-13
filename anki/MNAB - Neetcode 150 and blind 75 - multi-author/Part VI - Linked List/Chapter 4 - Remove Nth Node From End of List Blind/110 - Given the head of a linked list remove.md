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

After we have created the offset, by how much should we shift each pointer on
each iteration of the loop?

A) First pointer by 1, Second pointer by 2

B) First pointer by 1, Second pointer by 1  

========== Answer ==========  

**Answer**: B

After we have created the offset, we should shift each pointer by 1 on each
iteration of the loop. This ensures that the offset (the gap between the two
pointers) remains constant while traversing the list, allowing us to find the
node to be removed.

========== Id ==========  
110

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VI - Linked List::Chapter 4 - Remove Nth Node From End of List Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VI-Linked-List::#Chapter-4-Remove-Nth-Node-From-End-of-List-Blind::#110-Given-the-head-of-a-linked-list-remove

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
