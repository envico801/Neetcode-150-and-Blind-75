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

What is the time and space complexity of the two-pointer approach for this
problem? Assume `n` is the length of the list.

```python
class Solution:
     def removeNthFromEnd(self, head: ListNode, n: int) -> ListNode:
         dummy = ListNode(0, head)
         left = dummy
         right = head
         while n > 0: // Create offset
             right = right.next
             n -= 1
         while right:
             left = left.next
             right = right.next
         left.next = left.next.next // delete
         return dummy.next
```

A) Time complexity: O(n), Space complexity: O(1)

B) Time complexity: O(n), Space complexity: O(n)

C) Time complexity: O(n^2), Space complexity: O(1)  

========== Answer ==========  

**Answer**: A

The two-pointer approach has a linear time complexity of O(n). We perform a
constant amount of work for each node (moving the pointers and eventually
deleting a node). The space complexity is O(1) as we are not using any extra
space that scales with the input size, we're simply using two pointers to
navigate the existing list.

========== Id ==========  
118

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VI - Linked List::Chapter 4 - Remove Nth Node From End of List Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VI-Linked-List::#Chapter-4-Remove-Nth-Node-From-End-of-List-Blind::#118-Given-the-head-of-a-linked-list-remove

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
