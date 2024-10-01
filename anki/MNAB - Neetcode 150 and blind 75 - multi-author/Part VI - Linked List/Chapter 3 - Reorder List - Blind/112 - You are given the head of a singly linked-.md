========== Question ==========  

### You are given the head of a singly linked-list. The list can be represented as:

```
L0 → L1 → … → Ln - 1 → Ln
```

_Reorder the list to be on the following form:_

```
L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
```

You may not modify the values in the list's nodes. Only nodes themselves may be changed.

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

-   The number of nodes in the list is in the range `[1, 5 * 10^4]`.

-   `1 <= Node.val <= 1000`

---

Consider the following code for reordering a linked list. What is its time complexity and space complexity?

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None
class Solution:
    def reorderList(self, head: ListNode) -> None:
        # find middle
        slow, fast = head, head.next
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        # reverse second half
        second = slow.next
        prev = slow.next = None
        while second:
            tmp = second.next
            second.next = prev
            prev = second
            second = tmp
        # merge two halves
        first, second = head, prev
        while second:
            tmp1, tmp2 = first.next, second.next
            first.next = second
            second.next = tmp1
            first, second = tmp1, tmp2
```

A) Time complexity: O(n), Space complexity: O(1)

B) Time complexity: O(n), Space complexity: O(n)

C) Time complexity: O(n^2), Space complexity: O(1)  

========== Answer ==========  

**Answer**: A

This approach has a linear time complexity O(n) because we are making a single pass to find the middle, a single pass to reverse the second half, and a single pass to merge the two halves. The space complexity is O(1) because we are rearranging the nodes in-place without using additional storage proportional to the input size.

========== Id ==========  
112

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VI - Linked List::Chapter 3 - Reorder List - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VI-Linked-List::#Chapter-3-Reorder-List-Blind::#112-You-are-given-the-head-of-a-singly-linked-

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
