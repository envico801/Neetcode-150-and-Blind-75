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

What approach can we use to solve this problem efficiently?

A) Divide and Conquer

B) Sliding Window

C) Recursion  

==================== Answer ====================  

**Answer**: B

The sliding window approach allows us to scan through the string once (linear time complexity) while keeping track of the longest substring without repeating characters. It's an optimal strategy for this problem as it avoids unnecessary repeated computations.

==================== Id ====================  
74

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part III - Sliding Window::Chapter 2 - Longest Substring Without Repeating Characters Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-III-Sliding-Window::#Chapter-2-Longest-Substring-Without-Repeating-Characters-Blind::#74-Given-a-string-s-find-the-length-of-the

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
