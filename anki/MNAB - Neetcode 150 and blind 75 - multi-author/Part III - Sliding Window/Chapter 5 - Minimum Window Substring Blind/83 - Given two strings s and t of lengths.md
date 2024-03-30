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

Given that the input strings only consist of lowercase or uppercase English
characters, what is the time and space complexity of the sliding window approach
below? Assume `n` is the length of `s` and `m` is the length of `t`.

```python
class Solution:
     def minWindow(self, s: str, t: str) -> str:
         if t == '': return ''
         countT, window = {}, {}
         for c in t:
             countT[c] = 1 + countT.get(c, 0)
         have, need = 0, len(countT)
         res, resLen = [-1, -1], float('infinity')
         l = 0
         for r in range(len(s)):
             c = s[r]
             window[c] = 1 + window.get(c, 0)
             if c in countT and window[c] == countT[c]:
                 have += 1
             while have == need:
                 if (r - l + 1) < resLen:
                     res = [l, r]
                     resLen = (r - l + 1)
                 window[s[l]] -= 1
                 if s[l] in countT and window[s[l]] < countT[s[l]]:
                     have -= 1
                 l += 1
         l, r = res
         return s[l:r+1] if resLen != float('infinity') else ''
```

A) Time complexity: O(n+m), Space complexity: O(1)

B) Time complexity: O(n), Space complexity: O(n)

C) Time complexity: O(n^2), Space complexity: O(m)  

========== Answer ==========  

**Answer**: A

The time complexity is O(n+m) as we go through both s and t once. The space
complexity is O(1) because the countT and window dictionaries will at most
contain 52 unique keys, corresponding to the 26 lowercase and 26 uppercase
English letters, which is a constant number and does not grow with n or m.

========== Id ==========  
83

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part III - Sliding Window::Chapter 5 - Minimum Window Substring Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-III-Sliding-Window::#Chapter-5-Minimum-Window-Substring-Blind::#83-Given-two-strings-s-and-t-of-lengths

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
