==================== Question ====================  

### You are given the head of a singly linked-list. The list can be represented as:

<!-- codeblock-start -->
<pre><code>L0 → L1 → … → Ln - 1 → Ln
</code></pre>
<!-- codeblock-end -->

_Reorder the list to be on the following form:_

<!-- codeblock-start -->
<pre><code>L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
</code></pre>
<!-- codeblock-end -->

You may not modify the values in the list's nodes. Only nodes themselves may be changed.

**Example 1:**

![image](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/034d3a04-1ca6-4c81-8a7a-648658944600/public)

<!-- codeblock-start -->
<pre><code>Input: head = [1,2,3,4]
Output: [1,4,2,3]
</code></pre>
<!-- codeblock-end -->

**Example 2:**

![image](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/80f9be46-c7d9-43bb-b072-3bbfd7942500/public)

<!-- codeblock-start -->
<pre><code>Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]
</code></pre>
<!-- codeblock-end -->

**Constraints:**

- The number of nodes in the list is in the range `[1, 5 * 10^4]`.

- `1 <= Node.val <= 1000`

---

In the code, what approach is used to merge the two halves of the list into the required form?

A) A new list is created and nodes from both halves are added alternately.

B) Corresponding nodes from the first and second half of the list are swapped.

C) At each step, a node is unlinked from the second half and linked into the first half.  

==================== Answer ====================  

**Answer**: C

The provided code merges the two halves by iterating through the first half of the list. At each step, it unlinks a node from the second half and links it into the first half. This results in the desired ordering of nodes.

==================== Id ====================  
105

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VI - Linked List::Chapter 3 - Reorder List Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VI-Linked-List::#Chapter-3-Reorder-List-Blind::#105-You-are-given-the-head-of-a-singly-linked-

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
