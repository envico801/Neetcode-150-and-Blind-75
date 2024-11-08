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

What is the time complexity of a brute force approach that compares every pair of strings to check if they are anagrams?

A) O(n)

B) O(n \* log n)

C) O(n^2 \* k), where k is the maximum length of a string

D) O(n^2 \* k \* log k), where k is the maximum length of a string  

========== Answer ==========  

**Answer**: D

The brute force approach would compare every pair of strings (O(n^2)) and for each comparison, it would need to sort both strings to check if they are anagrams (O(k \* log k) for each string, where k is the length of the string). This results in a total time complexity of O(n^2 \* k \* log k).

========== Id ==========  
19

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays Hashing::Chapter 4 - Group Anagrams - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-Hashing::#Chapter-4-Group-Anagrams-Blind::#19-Anagram-groups-given-an-array-of-strings

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
