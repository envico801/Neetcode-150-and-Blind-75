========== Question ==========  

### Minimum Window With Characters

Given two strings `s` and `t`, return the shortest **substring** of `s` such that every character in `t`, including duplicates, is present in the substring. If such a substring does not exist, return an empty string `""`.

You may assume that the correct output is always unique.

**Example 1:**

```
Input: s = "OUZODYXAZV", t = "XYZ"
Output: "YXAZ"
```

Explanation: `"YXAZ"` is the shortest substring that includes `"X"`, `"Y"`, and `"Z"` from string `t`.

**Example 2:**

```
Input: s = "xyz", t = "xyz"
Output: "xyz"
```

**Example 3:**

```
Input: s = "x", t = "xy"
Output: ""
```

**Constraints:**

-   `1 <= s.length <= 1000`

-   `1 <= t.length <= 1000`

-   `s` and `t` consist of uppercase and lowercase English letters.

---

What is a brute force solution for this problem?

A) Check all substrings of s to find if they contain all characters of t

B) Remove each character of s one by one and check if the remaining string contains t

C) Sort both s and t and check if t is a substring of s  

========== Answer ==========  

**Answer**: A

The brute force solution would be to generate all possible substrings of s and for each substring, check if it contains all characters of t including duplicates. Then we keep the shortest such valid substring.

========== Id ==========  
105

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part V - Sliding Window::Chapter 5 - Minimum Window Substring - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-V-Sliding-Window::#Chapter-5-Minimum-Window-Substring-Blind::#105-Minimum-window-with-characters-given-two-s

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
