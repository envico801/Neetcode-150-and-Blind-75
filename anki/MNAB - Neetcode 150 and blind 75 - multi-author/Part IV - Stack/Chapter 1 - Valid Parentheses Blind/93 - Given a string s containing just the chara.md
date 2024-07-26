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

- `1 <= s.length <= 10^4`

- `s` consists of parentheses only `'()[]{}'`

---

Assume we iterate through the string s and we maintain a stack. What should we
do when we encounter an open bracket?

A) Ignore it.

B) Check if it matches with the top element of the stack.

C) Push it onto the stack.

D) Pop the top element from the stack.  

========== Answer ==========  

**Answer**: C

When we encounter an open bracket, we should push it onto the stack. The stack
is used to keep track of the open brackets that we have encountered but not yet
closed.

========== Id ==========  
93

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part IV - Stack::Chapter 1 - Valid Parentheses Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-IV-Stack::#Chapter-1-Valid-Parentheses-Blind::#93-Given-a-string-s-containing-just-the-chara

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
