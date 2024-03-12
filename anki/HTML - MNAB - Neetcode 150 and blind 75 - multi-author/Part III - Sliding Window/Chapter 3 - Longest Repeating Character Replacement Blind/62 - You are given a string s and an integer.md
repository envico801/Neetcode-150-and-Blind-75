==================== Question ====================  

### You are given a string `s` and an integer `k`. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most `k` times.

Return _the length of the longest substring containing the same letter you can get after performing the above operations_.

**Example 1:**

<!-- codeblock-start -->
<pre><code>Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
</code></pre>
<!-- codeblock-end -->

**Example 2:**

<!-- codeblock-start -->
<pre><code>Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
There may exists other ways to achive this answer too.
</code></pre>
<!-- codeblock-end -->

**Constraints:**

- `1 <= s.length <= 105`

- `s` consists of only uppercase English letters.

- `0 <= k <= s.length`

---

What is the time and space complexity of the sliding window approach for this problem? Assume `n` is the length of the string.

<!-- codeblock-start -->
<pre><code class="hljs language-python"><span class="hljs-keyword">class</span> <span class="hljs-title class_">Solution</span>:
     <span class="hljs-keyword">def</span> <span class="hljs-title function_">characterReplacement</span>(<span class="hljs-params">self, s: <span class="hljs-built_in">str</span>, k: <span class="hljs-built_in">int</span></span>) -> <span class="hljs-built_in">int</span>:
         res = <span class="hljs-number">0</span>
         l = <span class="hljs-number">0</span>
         count = [<span class="hljs-number">0</span>] * <span class="hljs-number">26</span>
         <span class="hljs-keyword">for</span> r <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-built_in">len</span>(s)):
             count[<span class="hljs-built_in">ord</span>(s[r]) - <span class="hljs-built_in">ord</span>(<span class="hljs-string">'A'</span>)] += <span class="hljs-number">1</span>
             <span class="hljs-keyword">while</span> (r - l + <span class="hljs-number">1</span>) - <span class="hljs-built_in">max</span>(count) > k:
                 count[<span class="hljs-built_in">ord</span>(s[l]) - <span class="hljs-built_in">ord</span>(<span class="hljs-string">'A'</span>)] -= <span class="hljs-number">1</span>
                 l += <span class="hljs-number">1</span>
             res = <span class="hljs-built_in">max</span>(res, r - l + <span class="hljs-number">1</span>)
         <span class="hljs-keyword">return</span> res
</code></pre>
<!-- codeblock-end -->

A) Time complexity: O(n), Space complexity: O(1)

B) Time complexity: O(n), Space complexity: O(n)

C) Time complexity: O(n^2), Space complexity: O(1)  

==================== Answer ====================  

**Answer**: A

The sliding window approach only scans the string once, and the time complexity is therefore O(n). The space complexity is O(1) because the count array always has a fixed size of 26, corresponding to the number of uppercase English letters. Even though we're dealing with a string of n characters, we're only ever tracking a maximum of 26 different ones.

==================== Id ====================  
62

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part III - Sliding Window::Chapter 3 - Longest Repeating Character Replacement Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-III-Sliding-Window::#Chapter-3-Longest-Repeating-Character-Replacement-Blind::#62-You-are-given-a-string-s-and-an-integer

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
