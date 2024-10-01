========== Question ==========  

### Given an array of strings `strs`, group all _anagrams_ together into sublists. You may return the output in **any order**.

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

What data structure can be used to optimize the approach for grouping anagrams?

A) Array

B) LinkedList

C) Stack

D) HashMap  

========== Answer ==========  

**Answer**: D

A HashMap can be used to optimize the approach for grouping anagrams. We can use a sorted version of each string (or a count of its characters) as the key, and a list of all anagrams that match that key as the value. This allows us to group anagrams efficiently.

========== Id ==========  
20

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays Hashing::Chapter 4 - Group Anagrams - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-Hashing::#Chapter-4-Group-Anagrams-Blind::#20-Given-an-array-of-strings-strs-group-al

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
