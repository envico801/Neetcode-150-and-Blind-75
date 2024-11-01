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

At any point in the string, we can only close the most recent open bracket, and after we close a bracket we then want to close the next most recent open bracket. Which data structure would be most useful here?

A) Hashmap

B) Stack

C) Queue

D) Binary Tree  

========== Answer ==========  

**Answer**: B

A Stack is a LIFO (Last In First Out) data structure, which aligns well with this problem's requirements. When dealing with nested structures, like brackets, the most recently opened bracket must be the first one to be closed. This 'last opened, first closed' pattern is a characteristic behavior of a Stack, making it a suitable data structure to handle such scenarios.

========== Id ==========  
59

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part III - Stack::Chapter 1 - Valid Parentheses - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-III-Stack::#Chapter-1-Valid-Parentheses-Blind::#59-Validate-parentheses-you-are-given-a-strin

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
