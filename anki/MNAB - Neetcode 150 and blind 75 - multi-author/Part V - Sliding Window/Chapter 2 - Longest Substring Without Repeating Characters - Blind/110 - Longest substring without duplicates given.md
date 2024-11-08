========== Question ==========  

### Longest Substring Without Duplicates

Given a string `s`, find the _length of the longest substring_ without duplicate characters.

A **substring** is a contiguous sequence of characters within a string.

**Example 1:**

```
Input: s = "zxyzxyz"
Output: 3
```

Explanation: The string "xyz" is the longest without duplicate characters.

**Example 2:**

```
Input: s = "xxxx"
Output: 1
```

**Constraints:**

-   `0 <= s.length <= 1000`

-   `s` may consist of printable ASCII characters.

---

As we build a substring, what kind of data structure can we use to keep track of the characters we have already seen?

A) Stack

B) Queue

C) Hash Set

D) Heap  

========== Answer ==========  

**Answer**: C

A Set is a data structure that maintains a collection of unique elements. It provides constant-time complexity for search, insertion, and deletion, making it a suitable choice for tracking unique characters in a string.

========== Id ==========  
110

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part V - Sliding Window::Chapter 2 - Longest Substring Without Repeating Characters - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-V-Sliding-Window::#Chapter-2-Longest-Substring-Without-Repeating-Characters-Blind::#110-Longest-substring-without-duplicates-given

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
