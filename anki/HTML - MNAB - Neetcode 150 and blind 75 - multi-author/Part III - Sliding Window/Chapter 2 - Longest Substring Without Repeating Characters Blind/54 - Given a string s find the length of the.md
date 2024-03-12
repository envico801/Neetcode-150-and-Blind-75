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

What can we do when we encounter a repeating character while expanding our window?

A) Remove the repeating character from our data structure and continue expanding.

B) Shrink the window from the left until the repeating character is no longer in the window.

C) Discard the current window and start a new window from the next character.  

==================== Answer ====================  

**Answer**: B

When we encounter a repeating character, it means we need to shrink the window from the left until the repeating character is no longer in the window, as we are searching for substrings without repeating characters.

==================== Id ====================  
54

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part III - Sliding Window::Chapter 2 - Longest Substring Without Repeating Characters Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-III-Sliding-Window::#Chapter-2-Longest-Substring-Without-Repeating-Characters-Blind::#54-Given-a-string-s-find-the-length-of-the

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
