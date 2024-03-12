========== Question ==========  

### Given two strings `s` and `t` of lengths `m` and `n` respectively, return the _**minimum window substring**_ of `s` such that every character in `t` (_**including duplicates**_) is included in the window. If there is no such substring, return the empty string `""`.

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

- `m == s.length`

- `n == t.length`

- `1 <= m, n <= 10^5`

- `s` and `t` consist of uppercase and lowercase English letters.

---

What should we do if our current window doesn't contain all characters of `t`?

A) Expand the window from the right

B) Shrink the window from the left

C) Remove the window and create a new one  

========== Answer ==========  

**Answer**: A

If our current window does not contain all characters of \`t\`, it means we need
to expand the window from the right in hope of including the missing characters.

========== Id ==========  
66

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part III - Sliding Window::Chapter 5 - Minimum Window Substring Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-III-Sliding-Window::#Chapter-5-Minimum-Window-Substring-Blind::#66-Given-two-strings-s-and-t-of-lengths

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
