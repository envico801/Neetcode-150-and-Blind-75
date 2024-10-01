========== Question ==========  

### Given a string s containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.

Open brackets must be closed in the correct order.

Every close bracket has a corresponding open bracket of the same type.

**Example 1:**

```
Input: s = "()[]{}"
Output: true
```

**Example 2:**

```
Input: s = "(]"
Output: false
```

**Constraints:**

-   `1 <= s.length <= 10^4`

-   `s` consists of parentheses only `'()[]{}'`

---

Consider the string s = "( \[ ) \]" . Is this string valid?

A) Yes

B) No  

========== Answer ==========  

**Answer**: B

Although every opening bracket has a matching closing bracket of the same type, they are not closed in the correct order. The first opening bracket is '(', but the first closing bracket after that is '\]', which is not the correct matching closing bracket.

========== Id ==========  
52

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part III - Stack::Chapter 1 - Valid Parentheses - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-III-Stack::#Chapter-1-Valid-Parentheses-Blind::#52-Given-a-string-s-containing-just-the-chara

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
