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

Consider the following code for reordering a linked list. What is its time complexity and space complexity?

<!-- codeblock-start -->
<pre><code class="hljs language-python"><span class="hljs-comment"># Definition for singly-linked list.</span>
<span class="hljs-comment"># class ListNode:</span>
<span class="hljs-comment">#     def __init__(self, x):</span>
<span class="hljs-comment">#         self.val = x</span>
<span class="hljs-comment">#         self.next = None</span>
<span class="hljs-keyword">class</span> <span class="hljs-title class_">Solution</span>:
     <span class="hljs-keyword">def</span> <span class="hljs-title function_">reorderList</span>(<span class="hljs-params">self, head: ListNode</span>) -> <span class="hljs-literal">None</span>:
         <span class="hljs-comment"># find middle</span>
         slow, fast = head, head.<span class="hljs-built_in">next</span>
         <span class="hljs-keyword">while</span> fast <span class="hljs-keyword">and</span> fast.<span class="hljs-built_in">next</span>:
             slow = slow.<span class="hljs-built_in">next</span>
             fast = fast.<span class="hljs-built_in">next</span>.<span class="hljs-built_in">next</span>
         <span class="hljs-comment"># reverse second half</span>
         second = slow.<span class="hljs-built_in">next</span>
         prev = slow.<span class="hljs-built_in">next</span> = <span class="hljs-literal">None</span>
         <span class="hljs-keyword">while</span> second:
             tmp = second.<span class="hljs-built_in">next</span>
             second.<span class="hljs-built_in">next</span> = prev
             prev = second
             second = tmp
         <span class="hljs-comment"># merge two halves</span>
         first, second = head, prev
         <span class="hljs-keyword">while</span> second:
             tmp1, tmp2 = first.<span class="hljs-built_in">next</span>, second.<span class="hljs-built_in">next</span>
             first.<span class="hljs-built_in">next</span> = second
             second.<span class="hljs-built_in">next</span> = tmp1
             first, second = tmp1, tmp2
</code></pre>
<!-- codeblock-end -->

A) Time complexity: O(n), Space complexity: O(1)

B) Time complexity: O(n), Space complexity: O(n)

C) Time complexity: O(n^2), Space complexity: O(1)  

==================== Answer ====================  

**Answer**: A

This approach has a linear time complexity O(n) because we are making a single pass to find the middle, a single pass to reverse the second half, and a single pass to merge the two halves. The space complexity is O(1) because we are rearranging the nodes in-place without using additional storage proportional to the input size.

==================== Id ====================  
127

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VI - Linked List::Chapter 3 - Reorder List Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VI-Linked-List::#Chapter-3-Reorder-List-Blind::#127-You-are-given-the-head-of-a-singly-linked-

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
