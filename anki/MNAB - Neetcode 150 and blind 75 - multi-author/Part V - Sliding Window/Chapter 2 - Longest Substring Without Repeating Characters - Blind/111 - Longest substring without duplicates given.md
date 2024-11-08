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

What approach can we use to solve this problem efficiently?

A) Divide and Conquer

B) Sliding Window

C) Recursion  

========== Answer ==========  

**Answer**: B

The sliding window approach allows us to scan through the string once (linear time complexity) while keeping track of the longest substring without repeating characters. It's an optimal strategy for this problem as it avoids unnecessary repeated computations.

========== Id ==========  
111

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part V - Sliding Window::Chapter 2 - Longest Substring Without Repeating Characters - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-V-Sliding-Window::#Chapter-2-Longest-Substring-Without-Repeating-Characters-Blind::#111-Longest-substring-without-duplicates-given

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
