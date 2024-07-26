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

How can we determine if our current window contains all characters of `t` without iterating through the entire hashmap?

A) By checking if the length of the window is greater than or equal to the length of \`t\`

B) By keeping track of two variables: the number of unique characters we have from \`t\` in our current window and the total unique characters needed from \`t\`

C) By sorting the hashmap and comparing it with \`t\`  

==================== Answer ====================  

**Answer**: B

By maintaining two variables, \`have\` and \`need\`, we can efficiently check if our window contains all characters of \`t\`. \`need\` is the number of unique characters in \`t\`, and \`have\` is the number of unique characters in \`t\` that our window currently contains. Each time we add a character to our window that makes the count of that character match what's needed in \`t\`, we increment \`have\`. We know our window contains all characters of \`t\` when \`have\` equals \`need\`.

==================== Id ====================  
89

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part III - Sliding Window::Chapter 5 - Minimum Window Substring Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-III-Sliding-Window::#Chapter-5-Minimum-Window-Substring-Blind::#89-Given-two-strings-s-and-t-of-lengths

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
