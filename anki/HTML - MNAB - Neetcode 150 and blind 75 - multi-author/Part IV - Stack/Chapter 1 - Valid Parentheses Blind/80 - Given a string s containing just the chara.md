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

Assume we iterate through the string s and we maintain a stack. What should we do when we encounter a closing bracket?

A) Ignore it.

B) Push it onto the stack.

C) Pop the top element from the stack and check if it matches with the current closing bracket.

D) Check if it matches with the bottom element of the stack.  

==================== Answer ====================  

**Answer**: C

When we encounter a closing bracket, we should pop the top element from the stack and check if it is the matching opening bracket for the current closing bracket. If it is, we can continue; if it's not, or if the stack is empty, then the string is not valid.

==================== Id ====================  
80

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part IV - Stack::Chapter 1 - Valid Parentheses Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-IV-Stack::#Chapter-1-Valid-Parentheses-Blind::#80-Given-a-string-s-containing-just-the-chara

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
