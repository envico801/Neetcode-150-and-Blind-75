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

Assume we iterate through the string s and we maintain a stack. What should we do when we encounter a closing bracket?

A) Ignore it.

B) Push it onto the stack.

C) Pop the top element from the stack and check if it matches with the current closing bracket.

D) Check if it matches with the bottom element of the stack.  

========== Answer ==========  

**Answer**: C

When we encounter a closing bracket, we should pop the top element from the stack and check if it is the matching opening bracket for the current closing bracket. If it is, we can continue; if it's not, or if the stack is empty, then the string is not valid.

========== Id ==========  
68

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part III - Stack::Chapter 1 - Valid Parentheses - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-III-Stack::#Chapter-1-Valid-Parentheses-Blind::#68-Validate-parentheses-you-are-given-a-strin

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
