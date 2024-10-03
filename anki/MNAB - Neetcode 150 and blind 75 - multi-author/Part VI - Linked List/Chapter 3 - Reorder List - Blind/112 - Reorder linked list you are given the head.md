========== Question ==========  

### Reorder Linked List

You are given the head of a singly linked-list.

The positions of a linked list of `length = 7` for example, can intially be represented as:

`[0, 1, 2, 3, 4, 5, 6]`

Reorder the nodes of the linked list to be in the following order:

`[0, 6, 1, 5, 2, 4, 3]`

Notice that in the general case for a list of `length = n` the nodes are reordered to be in the following order:

`[0, n-1, 1, n-2, 2, n-3, ...]`

You may not modify the values in the list's nodes, but instead you must reorder the nodes themselves.

**Example 1:**

```
Input: head = [2,4,6,8]
Output: [2,8,4,6]
```

**Example 2:**

```
Input: head = [2,4,6,8,10]
Output: [2,10,4,8,6]
```

**Constraints:**

-   `1 <= Length of the list <= 1000`.

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

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VI-Linked-List::#Chapter-3-Reorder-List-Blind::#112-Reorder-linked-list-you-are-given-the-head

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
