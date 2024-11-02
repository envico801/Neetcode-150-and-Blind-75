========== Question ==========  

### Validate Parentheses

You are given a string `s` consisting of the following characters: `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`.

The input string `s` is valid if and only if:

1.  Every open bracket is closed by the same type of close bracket.

2.  Open brackets are closed in the correct order.

3.  Every close bracket has a corresponding open bracket of the same type.

Return `true` if `s` is a valid string, and `false` otherwise.

**Example 1:**

```
Input: s = "[]"
Output: true
```

**Example 2:**

```
Input: s = "([{}])"
Output: true
```

**Example 3:**

```
Input: s = "[(])"
Output: false
```

Explanation: The brackets are not closed in the correct order.

**Constraints:**

-   `1 <= s.length <= 1000`

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
77

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part III - Stack::Chapter 1 - Valid Parentheses - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-III-Stack::#Chapter-1-Valid-Parentheses-Blind::#77-Validate-parentheses-you-are-given-a-strin

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
