========== Question ==========  

### Group Anagrams

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

Given the constraint that the strings are made up of lowercase English letters, what is the maximum possible number of unique keys in our HashMap solution?

A) 26

B) 100

C) 26^100

D) 26!  

========== Answer ==========  

**Answer**: C

Given that the strings are made up of lowercase English letters and the maximum length of a string is 100, the maximum possible number of unique keys in our HashMap solution is 26^100. This is because for each of the 100 positions in the string, we have 26 possible choices of letters. However, in practice, this number is much smaller due to the constraints of actual words and the limited number of input strings.

========== Id ==========  
24

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays Hashing::Chapter 4 - Group Anagrams - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-Hashing::#Chapter-4-Group-Anagrams-Blind::#24-Group-anagrams-given-an-array-of-strings

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Not safe to store
