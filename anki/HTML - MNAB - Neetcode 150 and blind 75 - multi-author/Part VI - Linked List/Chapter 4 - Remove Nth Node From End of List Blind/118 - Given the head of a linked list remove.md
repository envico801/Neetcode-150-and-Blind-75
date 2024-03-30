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

What is the time and space complexity of the two-pointer approach for this problem? Assume `n` is the length of the list.

<!-- codeblock-start -->
<pre><code class="hljs language-python"><span class="hljs-keyword">class</span> <span class="hljs-title class_">Solution</span>:
     <span class="hljs-keyword">def</span> <span class="hljs-title function_">removeNthFromEnd</span>(<span class="hljs-params">self, head: ListNode, n: <span class="hljs-built_in">int</span></span>) -> ListNode:
         dummy = ListNode(<span class="hljs-number">0</span>, head)
         left = dummy
         right = head
         <span class="hljs-keyword">while</span> n > <span class="hljs-number">0</span>: // Create offset
             right = right.<span class="hljs-built_in">next</span>
             n -= <span class="hljs-number">1</span>
         <span class="hljs-keyword">while</span> right:
             left = left.<span class="hljs-built_in">next</span>
             right = right.<span class="hljs-built_in">next</span>
         left.<span class="hljs-built_in">next</span> = left.<span class="hljs-built_in">next</span>.<span class="hljs-built_in">next</span> // delete
         <span class="hljs-keyword">return</span> dummy.<span class="hljs-built_in">next</span>
</code></pre>
<!-- codeblock-end -->

A) Time complexity: O(n), Space complexity: O(1)

B) Time complexity: O(n), Space complexity: O(n)

C) Time complexity: O(n^2), Space complexity: O(1)  

==================== Answer ====================  

**Answer**: A

The two-pointer approach has a linear time complexity of O(n). We perform a constant amount of work for each node (moving the pointers and eventually deleting a node). The space complexity is O(1) as we are not using any extra space that scales with the input size, we're simply using two pointers to navigate the existing list.

==================== Id ====================  
118

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VI - Linked List::Chapter 4 - Remove Nth Node From End of List Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VI-Linked-List::#Chapter-4-Remove-Nth-Node-From-End-of-List-Blind::#118-Given-the-head-of-a-linked-list-remove

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
