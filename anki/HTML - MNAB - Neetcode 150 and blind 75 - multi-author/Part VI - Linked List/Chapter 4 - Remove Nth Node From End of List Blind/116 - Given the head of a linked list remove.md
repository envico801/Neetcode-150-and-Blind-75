==================== Question ====================  

### Given the `head` of a linked list, remove the `nth` node from the end of the list and return its head.

**Example 1:**

![image](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/23a28313-7f20-49b4-9781-fcf45a598100/public)

<!-- codeblock-start -->
<pre><code>Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
</code></pre>
<!-- codeblock-end -->

**Example 2:**

<!-- codeblock-start -->
<pre><code>Input: head = [1], n = 1
Output: []
</code></pre>
<!-- codeblock-end -->

**Example 3:**

<!-- codeblock-start -->
<pre><code>Input: head = [1,2], n = 1
Output: [1]
</code></pre>
<!-- codeblock-end -->

**Constraints:**

- The number of nodes in the list is `sz`.

- `1 <= sz <= 30`

- `0 <= Node.val <= 100`

- `1 <= n <= sz`

**Follow up:** Could you do this in one pass?

---

If we were to solve this problem without precomputing the length of the list, but instead using two pointers, what should the _offset_ between the two pointers be? Assume we will iterate until the second pointer reaches null.

![image](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/c6af2817-4885-47c2-9f04-8e9603192500/public)

A) n

B) n + 1

C) n - 1  

==================== Answer ====================  

**Answer**: B

If we are to solve this problem using two pointers without precomputing the length of the list, the offset between the two pointers should be n + 1. This ensures that the second pointer reaches null right when the first pointer gets to the node before the target node, which is the nth node from the end of the list.

==================== Id ====================  
116

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VI - Linked List::Chapter 4 - Remove Nth Node From End of List Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VI-Linked-List::#Chapter-4-Remove-Nth-Node-From-End-of-List-Blind::#116-Given-the-head-of-a-linked-list-remove

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
