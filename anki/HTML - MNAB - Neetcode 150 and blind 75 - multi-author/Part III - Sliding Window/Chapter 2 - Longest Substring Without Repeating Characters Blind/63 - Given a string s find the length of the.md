==================== Question ====================  

### Given a string `s`, find the length of the **longest** **substring** without repeating characters.

**Example 1:**

<!-- codeblock-start -->
<pre><code>Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
</code></pre>
<!-- codeblock-end -->

**Example 2:**

<!-- codeblock-start -->
<pre><code>Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
</code></pre>
<!-- codeblock-end -->

**Example 3:**

<!-- codeblock-start -->
<pre><code>Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
</code></pre>
<!-- codeblock-end -->

**Constraints:**

- `0 <= s.length <= 5 * 104`

- `s` consists of English letters, digits, symbols and spaces.

---

What is the time and space complexity of the sliding window approach for this problem? Assume `n` is the length of the string, and `m` is the number of distinct characters in the string.

<!-- codeblock-start -->
<pre><code class="hljs language-python"><span class="hljs-keyword">class</span> <span class="hljs-title class_">Solution</span>:
     <span class="hljs-keyword">def</span> <span class="hljs-title function_">lengthOfLongestSubstring</span>(<span class="hljs-params">self, s: <span class="hljs-built_in">str</span></span>) -> <span class="hljs-built_in">int</span>:
         char_set = <span class="hljs-built_in">set</span>()
         l, max_len = <span class="hljs-number">0</span>, <span class="hljs-number">0</span>
         <span class="hljs-keyword">for</span> r <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-built_in">len</span>(s)):
             <span class="hljs-keyword">while</span> s[r] <span class="hljs-keyword">in</span> char_set:
                 <span class="hljs-comment"># Repeating char detected, shrink window</span>
                 char_set.remove(s[l])
                 l += <span class="hljs-number">1</span>
             char_set.add(s[r])
             max_len = <span class="hljs-built_in">max</span>(max_len, r - l + <span class="hljs-number">1</span>)
         <span class="hljs-keyword">return</span> max_len
</code></pre>
<!-- codeblock-end -->

A) Time complexity: O(n), Space complexity: O(1)

B) Time complexity: O(n), Space complexity: O(m)

C) Time complexity: O(n^2), Space complexity: O(m)  

==================== Answer ====================  

**Answer**: B

Using the sliding window approach, we essentially scan through the string once with two pointers, making the time complexity O(n). The space complexity is O(m) because, in the worst-case scenario, the set used to check for repeating characters can contain all the distinct characters in the string, where m is the number of distinct characters.

==================== Id ====================  
63

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part III - Sliding Window::Chapter 2 - Longest Substring Without Repeating Characters Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-III-Sliding-Window::#Chapter-2-Longest-Substring-Without-Repeating-Characters-Blind::#63-Given-a-string-s-find-the-length-of-the

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
