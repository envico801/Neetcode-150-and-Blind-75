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

Considering that the given string only contains uppercase English letters (from A to Z), what would be the time complexity of finding the most frequent character in the window?

A) O(1)

B) O(n)

C) O(logn)  

==================== Answer ====================  

**Answer**: A

Since we know that the string only contains uppercase English letters, there can be at most 26 unique characters. Thus, if we were to iterate through each unique character in our frequency dictionary or array to find the most frequent one, the time complexity would be O(26), which is essentially constant time, O(1).

==================== Id ====================  
61

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part III - Sliding Window::Chapter 3 - Longest Repeating Character Replacement Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-III-Sliding-Window::#Chapter-3-Longest-Repeating-Character-Replacement-Blind::#61-You-are-given-a-string-s-and-an-integer

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
