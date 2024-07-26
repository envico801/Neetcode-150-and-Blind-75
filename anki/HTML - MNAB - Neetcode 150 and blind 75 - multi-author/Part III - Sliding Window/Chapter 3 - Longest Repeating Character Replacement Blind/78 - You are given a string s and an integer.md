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

What is a brute force solution to this problem?

A) Iterate from the end of the string to the beginning, checking for duplicate characters.

B) For each substring, find the frequency of the most common character (maxf) and check if the length of the substring minus maxf is less than or equal to k.  

==================== Answer ====================  

**Answer**: B

The brute force solution would be to generate all possible substrings and for each substring, find the frequency of the most common character. If the length of the substring minus the frequency of the most common character is less than or equal to k, then the substring is valid (since we can change at most k characters to make all characters in the substring the same). We would then keep track of the maximum length of such valid substrings.

==================== Id ====================  
78

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part III - Sliding Window::Chapter 3 - Longest Repeating Character Replacement Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-III-Sliding-Window::#Chapter-3-Longest-Repeating-Character-Replacement-Blind::#78-You-are-given-a-string-s-and-an-integer

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
