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

Which of the following is NOT a valid way to generate a key for the HashMap when grouping anagrams?

A) Sorting the characters of the string

B) Creating a count of each character in the string

C) Using the original string as is

D) Using a prime number product based on character counts  

========== Answer ==========  

**Answer**: C

Using the original string as is would not be a valid way to generate a key for the HashMap when grouping anagrams. This is because anagrams can have different orders of characters, so they would end up as different keys in the HashMap. The other options (sorting, character count, prime number product) all produce the same key for anagrams regardless of the order of characters.

========== Id ==========  
23

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays Hashing::Chapter 4 - Group Anagrams - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-Hashing::#Chapter-4-Group-Anagrams-Blind::#23-Anagram-groups-given-an-array-of-strings

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
