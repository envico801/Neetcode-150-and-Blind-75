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

Considering the constraint that `s` consists of English letters, digits, symbols, and spaces, what is the maximum possible size of our window?

A) 26

B) 52

C) 95  

========== Answer ==========  

**Answer**: C

In ASCII, there are 95 printable characters: 26 lowercase English letters, 26 uppercase English letters, 10 digits (0-9), 32 special characters and symbols, and the space character. This makes a total of 95 unique characters. Even if you don’t know there are exactly 95, it reasonable that there would be more than 52 (26 uppercase, 26 lowercase).

========== Id ==========  
90

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part V - Sliding Window::Chapter 2 - Longest Substring Without Repeating Characters - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-V-Sliding-Window::#Chapter-2-Longest-Substring-Without-Repeating-Characters-Blind::#90-Longest-substring-without-duplicates-given

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
