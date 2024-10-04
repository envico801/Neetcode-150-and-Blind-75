========== Question ==========  

### Is Anagram

Given two strings `s` and `t`, return `true` if the two strings are anagrams of each other, otherwise return `false`.

An **anagram** is a string that contains the exact same characters as another string, but the order of the characters can be different.

**Example 1:**

```
Input: s = "racecar", t = "carrace"
Output: true
```

**Example 2:**

```
Input: s = "jar", t = "jam"
Output: false
```

**Constraints:**

-   `s` and `t` consist of lowercase English letters.

---

If using a hashmap to check if two words are anagrams, what would be the keys and the values in the hashmap?

A) Keys = Words, Values = Count of each word

B) Keys = Letters, Values = Count of each letter

C) Keys = Length of words, Values = Words of that length  

========== Answer ==========  

**Answer**: B

In this case, the keys would be the letters, and the values would be the count of each letter. This way, we can track the frequency of each letter in the strings and compare them.

========== Id ==========  
10

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays Hashing::Chapter 2 - Valid Anagram - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-Hashing::#Chapter-2-Valid-Anagram-Blind::#10-Is-anagram-given-two-strings-s-and-t

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
