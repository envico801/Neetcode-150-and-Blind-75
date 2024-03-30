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

What are the time and space complexities of the two-pointer approach to check if a string is a palindrome?

A) Time complexity: O(n), Space complexity: O(n)

B) Time complexity: O(n log n), Space complexity: O(n)

C) Time complexity: O(n^2), Space complexity: O(1)

D) Time complexity: O(n), Space complexity: O(1)  

==================== Answer ====================  

**Answer**: D

The time complexity is O(n) because in the worst case, we would have to compare every character in the string with its counterpart from the end. Here, 'n' is the length of the string. This is still linear time complexity. The space complexity is O(1) because no extra space proportional to the size of the input is used. The two pointers used do not scale with the input size.

==================== Id ====================  
41

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part II - Two Pointers::Chapter 1 - Valid Palindrome Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-II-Two-Pointers::#Chapter-1-Valid-Palindrome-Blind::#41-A-phrase-is-a-palindrome-if-after-con

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
