========== Question ==========  

### Minimum Window Substring

Given two strings `s` and `t` of lengths `m` and `n` respectively, return the _**minimum window substring**_ of `s` such that every character in `t` (_**including duplicates**_) is included in the window. If there is no such substring, return the empty string `""`.

The testcases will be generated such that the answer is **unique**.

**Example 1:**

```
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
```

**Example 2:**

```
Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.
```

**Example 3:**

```
Input: s <span class="token operator">=</span> <span class="token string">"a"</span><span class="token punctuation">,</span> t <span class="token operator">=</span> <span class="token string">"aa"</span>
Output: <span class="token string">""</span>
Explanation: Both <span class="token string">'a'</span>s <span class="token keyword">from</span> t must be included <span class="token operator">in</span> the window<span class="token punctuation">.</span>
Since the largest window <span class="token keyword">of</span> s only has one <span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token keyword">return</span> empty string<span class="token punctuation">.</span>
```

**Constraints:**

-   `m == s.length`

-   `n == t.length`

-   `1 <= m, n <= 10^5`

-   `s` and `t` consist of uppercase and lowercase English letters.

---

If our current window contains all characters of `t`, what should we do to find the smallest valid window?

A) Expand the window from the right

B) Shrink the window from the left

C) Expand the window from the left  

========== Answer ==========  

**Answer**: B

If our current window already contains all characters of \`t\`, we try to shrink the window from the left to find the smallest window that still satisfies the condition. If we can't shrink it without losing a necessary character, we move on to expanding it from the right again.

========== Id ==========  
96

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part V - Sliding Window::Chapter 5 - Minimum Window Substring - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-V-Sliding-Window::#Chapter-5-Minimum-Window-Substring-Blind::#96-Minimum-window-substring-given-two-strings

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
