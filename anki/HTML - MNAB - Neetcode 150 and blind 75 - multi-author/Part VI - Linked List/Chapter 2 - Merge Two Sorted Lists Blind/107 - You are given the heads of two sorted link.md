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

What if one list becomes empty (all of its nodes are used up) before the other during the merging process?

A) Discard the remaining nodes in the other list.

B) Append the remaining nodes in the other list to the merged list.

C) Pick nodes from the exhausted list randomly to fill up the merged list.  

==================== Answer ====================  

**Answer**: B

If one list becomes empty before the other, we can safely append the remaining nodes from the other list to the merged list. As both lists are sorted, the remaining nodes will also be in sorted order.

==================== Id ====================  
107

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VI - Linked List::Chapter 2 - Merge Two Sorted Lists Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VI-Linked-List::#Chapter-2-Merge-Two-Sorted-Lists-Blind::#107-You-are-given-the-heads-of-two-sorted-link

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
