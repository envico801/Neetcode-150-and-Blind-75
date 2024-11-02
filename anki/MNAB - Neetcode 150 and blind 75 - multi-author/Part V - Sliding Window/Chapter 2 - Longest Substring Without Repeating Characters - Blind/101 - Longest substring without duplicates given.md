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

What is a brute force solution to this problem?

A) Check each character and its subsequent characters for equality.

B) Generate all possible substrings and check each for repeated characters.  

========== Answer ==========  

**Answer**: B

The brute force solution for this problem would be to generate all possible substrings of the given string and check each of them for repeated characters. We would then keep track of the length of the longest substring without repeated characters.

========== Id ==========  
101

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part V - Sliding Window::Chapter 2 - Longest Substring Without Repeating Characters - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-V-Sliding-Window::#Chapter-2-Longest-Substring-Without-Repeating-Characters-Blind::#101-Longest-substring-without-duplicates-given

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
