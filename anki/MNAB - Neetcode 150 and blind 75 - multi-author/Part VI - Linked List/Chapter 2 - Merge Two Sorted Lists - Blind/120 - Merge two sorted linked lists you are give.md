========== Question ==========  

### Merge Two Sorted Linked Lists

You are given the heads of two sorted linked lists `list1` and `list2`.

Merge the two lists into one **sorted** linked list and return the head of the new sorted linked list.

The new list should be made up of nodes from `list1` and `list2`.

**Example 1:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/51adfea9-493a-4abb-ece7-fbb359d1c800/public)

```
Input: list1 = [1,2,4], list2 = [1,3,5]
Output: [1,1,2,3,4,5]
```

**Example 2:**

```
Input: list1 = [], list2 = [1,2]
Output: [1,2]
```

**Example 3:**

```
Input: list1 = [], list2 = []
Output: []
```

**Constraints:**

-   `0 <= The length of the each list <= 100`.

-   `-100 <= Node.val <= 100`

---

What is the time complexity and space complexity of this approach? Assume `m` and `n` are the lengths of list1 and list2 respectively.

```python
class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        dummy = ListNode(0)
        current = dummy
        while l1 and l2:
            if l1.val <= l2.val:
                current.next = l1
                l1 = l1.next
            else:
                current.next = l2
                l2 = l2.next
            current = current.next
        current.next = l1 if l1 is not None else l2
        return dummy.next
```

A) Time complexity: O(m+n), Space complexity: O(1)

B) Time complexity: O(m\*n), Space complexity: O(m+n)

C) Time complexity: O(m+n), Space complexity: O(m+n)  

========== Answer ==========  

**Answer**: A

The time complexity is O(m+n) because in the worst case, we'll have to traverse all nodes of both lists once. The space complexity is O(1) because we're not using any additional space that scales with the input size. We are simply rearranging the existing nodes.

========== Id ==========  
120

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VI - Linked List::Chapter 2 - Merge Two Sorted Lists - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VI-Linked-List::#Chapter-2-Merge-Two-Sorted-Lists-Blind::#120-Merge-two-sorted-linked-lists-you-are-give

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
