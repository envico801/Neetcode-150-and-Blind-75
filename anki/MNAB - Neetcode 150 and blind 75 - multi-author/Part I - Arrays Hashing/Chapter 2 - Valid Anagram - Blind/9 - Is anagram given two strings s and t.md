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

Given the nature of anagrams and the constraints of the problem, can you improve upon the overall time complexity of the sorting solution?

A) No, sorting and comparing is the most optimal solution.

B) Yes, by using a hashmap to store the count of letters.

C) Yes, by checking if the first and last letter of both words are the same.  

========== Answer ==========  

**Answer**: B

Given the constraints of the problem and the nature of anagrams, we can use a hashmap to store the count of letters for each string. This would allow us to compare the frequency of each letter in both strings in a more time-efficient way. The downside is we may need extra memory, compared to an in-place sorting algorithm.

========== Id ==========  
9

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays Hashing::Chapter 2 - Valid Anagram - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-Hashing::#Chapter-2-Valid-Anagram-Blind::#9-Is-anagram-given-two-strings-s-and-t

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
