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

In order to remove a node `x` from a singly linked list, which node do we need access to?

A) Node x

B) Node before x

C) Node after x  

==================== Answer ====================  

**Answer**: B

To remove a node x from a singly linked list, we need access to the node before x. This is because in a singly linked list, we can only navigate in one direction and there's no reference to the previous node from a given node. By having access to the node before x, we can adjust its next reference to bypass x, effectively removing x from the list.

==================== Id ====================  
114

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VI - Linked List::Chapter 4 - Remove Nth Node From End of List Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VI-Linked-List::#Chapter-4-Remove-Nth-Node-From-End-of-List-Blind::#114-Given-the-head-of-a-linked-list-remove

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
