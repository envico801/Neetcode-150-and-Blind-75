========== Question ==========  

### Given a string `s`, find the length of the **longest** **substring** without repeating characters.

**Example 1:**

```
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

**Example 2:**

```
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

**Example 3:**

```
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

**Constraints:**

- `0 <= s.length <= 5 * 104`

- `s` consists of English letters, digits, symbols and spaces.

---

As we build a substring, what kind of data structure can we use to keep track of
the characters we have already seen?

A) Stack

B) Queue

C) Hash Set

D) Heap  

========== Answer ==========  

**Answer**: C

A Set is a data structure that maintains a collection of unique elements. It
provides constant-time complexity for search, insertion, and deletion, making it
a suitable choice for tracking unique characters in a string.

========== Id ==========  
52

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part III - Sliding Window::Chapter 2 - Longest Substring Without Repeating Characters Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-III-Sliding-Window::#Chapter-2-Longest-Substring-Without-Repeating-Characters-Blind::#52-Given-a-string-s-find-the-length-of-the

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
