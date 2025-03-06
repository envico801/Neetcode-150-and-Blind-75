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

Consider the string s = "( \[ ) \]" . Is this string valid?

A) Yes

B) No  

========== Answer ==========  

**Answer**: B

Although every opening bracket has a matching closing bracket of the same type, they are not closed in the correct order. The first opening bracket is '(', but the first closing bracket after that is '\]', which is not the correct matching closing bracket.

========== Id ==========  
81

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part III - Stack::Chapter 1 - Valid Parentheses - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-III-Stack::#Chapter-1-Valid-Parentheses-Blind::#81-Validate-parentheses-you-are-given-a-strin

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
