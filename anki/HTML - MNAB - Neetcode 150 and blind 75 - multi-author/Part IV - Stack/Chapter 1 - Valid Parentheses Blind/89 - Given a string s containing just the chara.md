==================== Question ====================  

### Given a string s containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.

Open brackets must be closed in the correct order.

Every close bracket has a corresponding open bracket of the same type.

**Example 1:**

<!-- codeblock-start -->
<pre><code>Input: s = "()[]{}"
Output: true
</code></pre>
<!-- codeblock-end -->

**Example 2:**

<!-- codeblock-start -->
<pre><code>Input: s = "(]"
Output: false
</code></pre>
<!-- codeblock-end -->

**Constraints:**

- `1 <= s.length <= 10^4`

- `s` consists of parentheses only `'()[]{}'`

---

What is the time and space complexity of the solution using a stack? Assume the length of the input string is n.

A) Time: O(n), Space: O(1)

B) Time: O(n), Space: O(n)

C) Time: O(n), Space: O(n^2)

D) Time: O(n^2), Space: O(n)  

==================== Answer ====================  

**Answer**: B

We are iterating through the string only once, where n is the length of the string. For each character, we are performing a constant amount of work (either pushing onto the stack or popping from it). Hence, the time complexity is O(n). In the worst-case scenario, all characters in the string are opening brackets, and we push all of them onto the stack. Hence, the space complexity is O(n), where n is the length of the string.

==================== Id ====================  
89

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part IV - Stack::Chapter 1 - Valid Parentheses Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-IV-Stack::#Chapter-1-Valid-Parentheses-Blind::#89-Given-a-string-s-containing-just-the-chara

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
