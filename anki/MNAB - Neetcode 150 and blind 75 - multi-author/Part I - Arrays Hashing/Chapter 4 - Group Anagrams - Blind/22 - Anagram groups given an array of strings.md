========== Question ==========  

### Anagram Groups

Given an array of strings `strs`, group all _anagrams_ together into sublists. You may return the output in **any order**.

An **anagram** is a string that contains the exact same characters as another string, but the order of the characters can be different.

**Example 1:**

```
Input: strs = ["act","pots","tops","cat","stop","hat"]
Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
```

**Example 2:**

```
Input: strs = ["x"]
Output: [["x"]]
```

**Example 3:**

```
Input: strs = [""]
Output: [[""]]
```

**Constraints:**

-   `1 <= strs.length <= 1000`.

-   `0 <= strs[i].length <= 100`

-   `strs[i]` is made up of lowercase English letters.

---

What is the space complexity of the optimal solution using a HashMap?

A) O(n)

B) O(n \* k), where k is the maximum length of a string

C) O(n^2)

D) O(k), where k is the maximum length of a string  

========== Answer ==========  

**Answer**: B

The space complexity of the optimal solution using a HashMap is O(n \* k), where n is the number of strings and k is the maximum length of a string. In the worst case, we might need to store all n strings in our HashMap, and each string can be up to k characters long.

========== Id ==========  
22

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays Hashing::Chapter 4 - Group Anagrams - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-Hashing::#Chapter-4-Group-Anagrams-Blind::#22-Anagram-groups-given-an-array-of-strings

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
