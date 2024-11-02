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

How can we determine if our current window contains all characters of `t` without iterating through the entire hashmap?

A) By checking if the length of the window is greater than or equal to the length of `t`

B) By keeping track of two variables: the number of unique characters we have from `t` in our current window and the total unique characters needed from `t`

C) By sorting the hashmap and comparing it with `t`  

========== Answer ==========  

**Answer**: B

By maintaining two variables, `have` and `need`, we can efficiently check if our window contains all characters of `t`. `need` is the number of unique characters in `t`, and `have` is the number of unique characters in `t` that our window currently contains. Each time we add a character to our window that makes the count of that character match what's needed in `t`, we increment `have`. We know our window contains all characters of `t` when `have` equals `need`.

========== Id ==========  
118

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part V - Sliding Window::Chapter 5 - Minimum Window Substring - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-V-Sliding-Window::#Chapter-5-Minimum-Window-Substring-Blind::#118-Minimum-window-with-characters-given-two-s

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
