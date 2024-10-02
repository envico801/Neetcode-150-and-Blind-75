========== Question ==========  

### Valid Anagram

Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

**Example 1:**

```
Input: s = "anagram", t = "nagaram"
Output: true
```

**Example 2:**

```
Input: s = "rat", t = "car"
Output: false
```

**Constraints:**

-   `1 <= s.length, t.length <= 5 * 10^4`

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

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-Hashing::#Chapter-2-Valid-Anagram-Blind::#7-Valid-anagram-given-two-strings-s-and-t

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
