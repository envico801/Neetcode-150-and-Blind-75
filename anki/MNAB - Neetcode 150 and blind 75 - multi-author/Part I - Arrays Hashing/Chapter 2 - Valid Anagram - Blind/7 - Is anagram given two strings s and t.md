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

Given the nature of anagrams, which of the following methods can be used to check if two words are anagrams?

A) Compare the lengths of two words. If they are equal, the words are anagrams.

B) Convert each word to an array, sort the arrays, and then compare them.

C) Check if the first letter of the first word is present in the second word.  

========== Answer ==========  

**Answer**: B

By converting each word to an array, sorting the arrays, and then comparing them, we can confirm if two words are anagrams. This is because anagrams have the same letters in the same quantities. For example, after sorting either 'heart' and 'earth', the result is 'aehrt'.

========== Id ==========  
7

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays Hashing::Chapter 2 - Valid Anagram - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-Hashing::#Chapter-2-Valid-Anagram-Blind::#7-Is-anagram-given-two-strings-s-and-t

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Not safe to store
