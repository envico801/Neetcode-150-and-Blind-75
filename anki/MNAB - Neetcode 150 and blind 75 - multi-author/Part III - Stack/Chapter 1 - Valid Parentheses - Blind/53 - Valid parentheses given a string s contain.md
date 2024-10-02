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

At any point in the string, we can only close the most recent open bracket, and after we close a bracket we then want to close the next most recent open bracket. Which data structure would be most useful here?

A) Hashmap

B) Stack

C) Queue

D) Binary Tree  

========== Answer ==========  

**Answer**: B

A Stack is a LIFO (Last In First Out) data structure, which aligns well with this problem's requirements. When dealing with nested structures, like brackets, the most recently opened bracket must be the first one to be closed. This 'last opened, first closed' pattern is a characteristic behavior of a Stack, making it a suitable data structure to handle such scenarios.

========== Id ==========  
53

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part III - Stack::Chapter 1 - Valid Parentheses - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-III-Stack::#Chapter-1-Valid-Parentheses-Blind::#53-Valid-parentheses-given-a-string-s-contain

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
