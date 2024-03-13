==================== Question ====================  

### Given the `head` of a singly linked list, reverse the list, and return _the reversed list_.

**Example 1:**

![image](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/b57f05e4-bd0a-4d71-2066-bfad19f84300/public)

<!-- codeblock-start -->
<pre><code>Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
</code></pre>
<!-- codeblock-end -->

**Example 2:**

![image](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/21b14354-6a3a-45e0-8d02-ecc7ec7f7300/public)

<!-- codeblock-start -->
<pre><code>Input: head = [1,2]
Output: [2,1]
</code></pre>
<!-- codeblock-end -->

**Example 3:**

<!-- codeblock-start -->
<pre><code>Input: head = []
Output: []
</code></pre>
<!-- codeblock-end -->

**Constraints:**

- The number of nodes in the list is the range `[0, 5000]`.

- `5000 <= Node.val <= 5000`

---

In order to reverse a linked list, we need to change the direction of which part of each node?

A) The node's value

B) The node's 'next' reference  

==================== Answer ====================  

**Answer**: B

In a singly linked list, each node has a value and a 'next' reference pointing to the next node in the list. To reverse the list, we need to change the 'next' reference of each node to point to the previous node.

==================== Id ====================  
94

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VI - Linked List::Chapter 1 - Reverse Linked List Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VI-Linked-List::#Chapter-1-Reverse-Linked-List-Blind::#94-Given-the-head-of-a-singly-linked-list

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
