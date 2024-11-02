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

What kind of data structure could help us track the frequency of each character in the current window of our string?

A) Linked List

B) Hash Map

C) Stack  

========== Answer ==========  

**Answer**: B

A Hash Map is a good data structure to efficiently track the frequency of each character in the current window. By using the character itself as the key and the frequency as the value, we can access and update the frequency of each character in constant time.

========== Id ==========  
114

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part V - Sliding Window::Chapter 5 - Minimum Window Substring - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-V-Sliding-Window::#Chapter-5-Minimum-Window-Substring-Blind::#114-Minimum-window-with-characters-given-two-s

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
