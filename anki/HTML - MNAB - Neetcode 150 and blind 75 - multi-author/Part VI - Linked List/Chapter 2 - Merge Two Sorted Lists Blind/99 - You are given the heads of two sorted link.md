==================== Question ====================  

### You are given the heads of two sorted linked lists `list1` and `list2`.

Merge the two lists in a one **sorted** list. The list should be made by splicing together the nodes of the first two lists.

Return _the head of the merged linked list_.

**Example 1:**

![image](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/6bafdf72-dfb3-4085-9372-f34e7361d700/public)

<!-- codeblock-start -->
<pre><code>Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
</code></pre>
<!-- codeblock-end -->

**Example 2:**

<!-- codeblock-start -->
<pre><code>Input: list1 = [], list2 = []
Output: []
</code></pre>
<!-- codeblock-end -->

**Example 3:**

<!-- codeblock-start -->
<pre><code>Input: list1 = [], list2 = [0]
Output: [0]
</code></pre>
<!-- codeblock-end -->

**Constraints:**

- The number of nodes in both lists is in the range `[0, 50]`.

- `100 <= Node.val <= 100`

- Both `list1` and `list2` are sorted in **non-decreasing** order.

---

How should we proceed after inserting a node from one of the lists into the output list?

A) Insert the node from the other list into the output list.

B) Shift to the next node in both lists and repeat the comparison.

C) Shift to the next node in the list from which we inserted the node and repeat the comparison.  

==================== Answer ====================  

**Answer**: C

After inserting a node from one of the lists into the output list, we should shift to the next node in the same list. We've already considered the inserted node in the sorting process. Now, it's time to compare the next node from this list with the current node from the other list.

==================== Id ====================  
99

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VI - Linked List::Chapter 2 - Merge Two Sorted Lists Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VI-Linked-List::#Chapter-2-Merge-Two-Sorted-Lists-Blind::#99-You-are-given-the-heads-of-two-sorted-link

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
