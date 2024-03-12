==================== Question ====================  

### Given two strings `s` and `t` of lengths `m` and `n` respectively, return the _**minimum window substring**_ of `s` such that every character in `t` (_**including duplicates**_) is included in the window. If there is no such substring, return the empty string `""`.

The testcases will be generated such that the answer is **unique**.

**Example 1:**

<!-- codeblock-start -->
<pre><code>Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
</code></pre>
<!-- codeblock-end -->

**Example 2:**

<!-- codeblock-start -->
<pre><code>Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.
</code></pre>
<!-- codeblock-end -->

**Example 3:**

<!-- codeblock-start -->
<pre><code>Input: s &#x3C;span class="token operator">=&#x3C;/span> &#x3C;span class="token string">"a"&#x3C;/span>&#x3C;span class="token punctuation">,&#x3C;/span> t &#x3C;span class="token operator">=&#x3C;/span> &#x3C;span class="token string">"aa"&#x3C;/span>
Output: &#x3C;span class="token string">""&#x3C;/span>
Explanation: Both &#x3C;span class="token string">'a'&#x3C;/span>s &#x3C;span class="token keyword">from&#x3C;/span> t must be included &#x3C;span class="token operator">in&#x3C;/span> the window&#x3C;span class="token punctuation">.&#x3C;/span>
Since the largest window &#x3C;span class="token keyword">of&#x3C;/span> s only has one &#x3C;span class="token string">'a'&#x3C;/span>&#x3C;span class="token punctuation">,&#x3C;/span> &#x3C;span class="token keyword">return&#x3C;/span> empty string&#x3C;span class="token punctuation">.&#x3C;/span>
</code></pre>
<!-- codeblock-end -->

**Constraints:**

- `m == s.length`

- `n == t.length`

- `1 <= m, n <= 10^5`

- `s` and `t` consist of uppercase and lowercase English letters.

---

Given that the input strings only consist of lowercase or uppercase English characters, what is the time and space complexity of the sliding window approach below? Assume `n` is the length of `s` and `m` is the length of `t`.

<!-- codeblock-start -->
<pre><code class="hljs language-python"><span class="hljs-keyword">class</span> <span class="hljs-title class_">Solution</span>:
     <span class="hljs-keyword">def</span> <span class="hljs-title function_">minWindow</span>(<span class="hljs-params">self, s: <span class="hljs-built_in">str</span>, t: <span class="hljs-built_in">str</span></span>) -> <span class="hljs-built_in">str</span>:
         <span class="hljs-keyword">if</span> t == <span class="hljs-string">''</span>: <span class="hljs-keyword">return</span> <span class="hljs-string">''</span>
         countT, window = {}, {}
         <span class="hljs-keyword">for</span> c <span class="hljs-keyword">in</span> t:
             countT[c] = <span class="hljs-number">1</span> + countT.get(c, <span class="hljs-number">0</span>)
         have, need = <span class="hljs-number">0</span>, <span class="hljs-built_in">len</span>(countT)
         res, resLen = [-<span class="hljs-number">1</span>, -<span class="hljs-number">1</span>], <span class="hljs-built_in">float</span>(<span class="hljs-string">'infinity'</span>)
         l = <span class="hljs-number">0</span>
         <span class="hljs-keyword">for</span> r <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-built_in">len</span>(s)):
             c = s[r]
             window[c] = <span class="hljs-number">1</span> + window.get(c, <span class="hljs-number">0</span>)
             <span class="hljs-keyword">if</span> c <span class="hljs-keyword">in</span> countT <span class="hljs-keyword">and</span> window[c] == countT[c]:
                 have += <span class="hljs-number">1</span>
             <span class="hljs-keyword">while</span> have == need:
                 <span class="hljs-keyword">if</span> (r - l + <span class="hljs-number">1</span>) &#x3C; resLen:
                     res = [l, r]
                     resLen = (r - l + <span class="hljs-number">1</span>)
                 window[s[l]] -= <span class="hljs-number">1</span>
                 <span class="hljs-keyword">if</span> s[l] <span class="hljs-keyword">in</span> countT <span class="hljs-keyword">and</span> window[s[l]] &#x3C; countT[s[l]]:
                     have -= <span class="hljs-number">1</span>
                 l += <span class="hljs-number">1</span>
         l, r = res
         <span class="hljs-keyword">return</span> s[l:r+<span class="hljs-number">1</span>] <span class="hljs-keyword">if</span> resLen != <span class="hljs-built_in">float</span>(<span class="hljs-string">'infinity'</span>) <span class="hljs-keyword">else</span> <span class="hljs-string">''</span>
</code></pre>
<!-- codeblock-end -->

A) Time complexity: O(n+m), Space complexity: O(1)

B) Time complexity: O(n), Space complexity: O(n)

C) Time complexity: O(n^2), Space complexity: O(m)  

==================== Answer ====================  

**Answer**: A

The time complexity is O(n+m) as we go through both s and t once. The space complexity is O(1) because the countT and window dictionaries will at most contain 52 unique keys, corresponding to the 26 lowercase and 26 uppercase English letters, which is a constant number and does not grow with n or m.

==================== Id ====================  
69

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part III - Sliding Window::Chapter 5 - Minimum Window Substring Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-III-Sliding-Window::#Chapter-5-Minimum-Window-Substring-Blind::#69-Given-two-strings-s-and-t-of-lengths

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
