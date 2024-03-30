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

What is the time and space complexity of the optimal approach?

<!-- codeblock-start -->
<pre><code class="hljs language-python"><span class="hljs-comment"># Definition for singly-linked list.</span>
<span class="hljs-comment"># class ListNode:</span>
<span class="hljs-comment">#     def __init__(self, x):</span>
<span class="hljs-comment">#         self.val = x</span>
<span class="hljs-comment">#         self.next = None</span>
<span class="hljs-keyword">class</span> <span class="hljs-title class_">Solution</span>:
     <span class="hljs-keyword">def</span> <span class="hljs-title function_">reverseList</span>(<span class="hljs-params">self, head: ListNode</span>) -> ListNode:
         prev, curr = <span class="hljs-literal">None</span>, head
         <span class="hljs-keyword">while</span> curr:
             temp = curr.<span class="hljs-built_in">next</span>
             curr.<span class="hljs-built_in">next</span> = prev
             prev = curr
             curr = temp
         <span class="hljs-keyword">return</span> prev
</code></pre>
<!-- codeblock-end -->

A) Time complexity: O(n), Space complexity: O(n)

B) Time complexity: O(n), Space complexity: O(1)

C) Time complexity: O(1), Space complexity: O(1)  

==================== Answer ====================  

**Answer**: B

The time complexity is O(n) because we need to traverse the list once, where n is the number of nodes in the list. The space complexity is O(1) because we are not using any additional space that scales with the size of the input. We only use a few variables to keep track of the previous and current nodes during the process.

==================== Id ====================  
103

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VI - Linked List::Chapter 1 - Reverse Linked List Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VI-Linked-List::#Chapter-1-Reverse-Linked-List-Blind::#103-Given-the-head-of-a-singly-linked-list

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
