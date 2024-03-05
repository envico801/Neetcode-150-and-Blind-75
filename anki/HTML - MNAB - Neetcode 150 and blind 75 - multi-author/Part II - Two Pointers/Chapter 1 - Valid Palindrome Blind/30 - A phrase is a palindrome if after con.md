==================== Question ====================  

### A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string `s`, return `true` if it is a **palindrome,** or `false` otherwise.

**Example 1:**

<!-- codeblock-start -->
<pre><code>Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
</code></pre>
<!-- codeblock-end -->

**Example 2:**

<!-- codeblock-start -->
<pre><code>Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
</code></pre>
<!-- codeblock-end -->

**Example 3:**

<!-- codeblock-start -->
<pre><code>Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
</code></pre>
<!-- codeblock-end -->

**Constraints:**

`1 <= s.length <= 2 * 10^5`

`s consists only of printable ASCII characters.`

---

After converting the string to lowercase, what should be the next step?

A) Reverse the string.

B) Check if the string is empty.

C) Remove all non-alphanumeric characters.

D) Convert the string to uppercase.  

==================== Answer ====================  

**Answer**: C

The next step is to remove all non-alphanumeric characters. This is because palindromes only consider alphanumeric characters.

==================== Id ====================  
30

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part II - Two Pointers::Chapter 1 - Valid Palindrome Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-II-Two-Pointers::#Chapter-1-Valid-Palindrome-Blind::#30-A-phrase-is-a-palindrome-if-after-con

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
