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

What is the time complexity of the solution that sorts and then compares the arrays? Note: We are using an efficient sorting algorithm where we can't make any assumptions about the character set.

A) O(n)

B) O(n log n)

C) O(n^2)

D) O(2^n)  

========== Answer ==========  

**Answer**: B

The time complexity of sorting an array of n elements is O(n log n), and the time complexity of comparing two arrays is O(n). When considering the largest term, the time complexity of the solution becomes O(n log n).

========== Id ==========  
8

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays Hashing::Chapter 2 - Valid Anagram - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-Hashing::#Chapter-2-Valid-Anagram-Blind::#8-Is-anagram-given-two-strings-s-and-t

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Not safe to store
