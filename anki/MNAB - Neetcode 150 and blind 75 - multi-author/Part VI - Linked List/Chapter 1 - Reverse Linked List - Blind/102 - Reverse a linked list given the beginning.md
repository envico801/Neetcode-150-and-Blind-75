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

What is the time and space complexity of the optimal approach?

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None
class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        prev, curr = None, head
        while curr:
            temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp
        return prev
```

A) Time complexity: O(n), Space complexity: O(n)

B) Time complexity: O(n), Space complexity: O(1)

C) Time complexity: O(1), Space complexity: O(1)  

========== Answer ==========  

**Answer**: B

The time complexity is O(n) because we need to traverse the list once, where n is the number of nodes in the list. The space complexity is O(1) because we are not using any additional space that scales with the size of the input. We only use a few variables to keep track of the previous and current nodes during the process.

========== Id ==========  
102

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VI - Linked List::Chapter 1 - Reverse Linked List - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VI-Linked-List::#Chapter-1-Reverse-Linked-List-Blind::#102-Reverse-a-linked-list-given-the-beginning

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Not safe to store
