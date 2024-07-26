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

What is the time complexity and space complexity of this approach? Assume `m` and `n` are the lengths of list1 and list2 respectively.

<!-- codeblock-start -->
<pre><code class="hljs language-python"><span class="hljs-keyword">class</span> <span class="hljs-title class_">Solution</span>:
     <span class="hljs-keyword">def</span> <span class="hljs-title function_">mergeTwoLists</span>(<span class="hljs-params">self, l1: ListNode, l2: ListNode</span>) -> ListNode:
         dummy = ListNode(<span class="hljs-number">0</span>)
         current = dummy
         <span class="hljs-keyword">while</span> l1 <span class="hljs-keyword">and</span> l2:
             <span class="hljs-keyword">if</span> l1.val &#x3C;= l2.val:
                 current.<span class="hljs-built_in">next</span> = l1
                 l1 = l1.<span class="hljs-built_in">next</span>
             <span class="hljs-keyword">else</span>:
                 current.<span class="hljs-built_in">next</span> = l2
                 l2 = l2.<span class="hljs-built_in">next</span>
             current = current.<span class="hljs-built_in">next</span>
         current.<span class="hljs-built_in">next</span> = l1 <span class="hljs-keyword">if</span> l1 <span class="hljs-keyword">is</span> <span class="hljs-keyword">not</span> <span class="hljs-literal">None</span> <span class="hljs-keyword">else</span> l2
         <span class="hljs-keyword">return</span> dummy.<span class="hljs-built_in">next</span>
</code></pre>
<!-- codeblock-end -->

A) Time complexity: O(m+n), Space complexity: O(1)

B) Time complexity: O(m\*n), Space complexity: O(m+n)

C) Time complexity: O(m+n), Space complexity: O(m+n)  

==================== Answer ====================  

**Answer**: A

The time complexity is O(m+n) because in the worst case, we'll have to traverse all nodes of both lists once. The space complexity is O(1) because we're not using any additional space that scales with the input size. We are simply rearranging the existing nodes.

==================== Id ====================  
122

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VI - Linked List::Chapter 2 - Merge Two Sorted Lists Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VI-Linked-List::#Chapter-2-Merge-Two-Sorted-Lists-Blind::#122-You-are-given-the-heads-of-two-sorted-link

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
