========== Question ==========  

### Valid Parentheses

Given a string s containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

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

After reaching the end of s, how do we know if the string is valid?

A) If the stack is empty.

B) If the stack is not empty.

C) If the last element in the stack is an open bracket.

D) If the last element in the stack is a closing bracket.  

========== Answer ==========  

**Answer**: A

If we have managed to close all open brackets while iterating through the string, the stack should be empty at the end. If the stack is not empty, it means there are some open brackets that were not closed, so the string is not valid.

========== Id ==========  
56

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part III - Stack::Chapter 1 - Valid Parentheses - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-III-Stack::#Chapter-1-Valid-Parentheses-Blind::#56-Valid-parentheses-given-a-string-s-contain

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
