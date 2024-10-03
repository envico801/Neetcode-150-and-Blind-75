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

What is the time and space complexity of the solution using a hashmap to count and compare the frequency of each letter?

A) Time complexity: O(n), Space complexity: O(n)

B) Time complexity: O(n log n), Space complexity: O(n)

C) Time complexity: O(n^2), Space complexity: O(1)

D) Time complexity: O(n), Space complexity: O(1)  

========== Answer ==========  

**Answer**: A

The time complexity of this solution is O(n) because we iterate over the input strings once. The space complexity is also O(n) because in the worst-case scenario (where each letter is unique), we would need to store each letter in the hashmap.

========== Id ==========  
11

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays Hashing::Chapter 2 - Valid Anagram - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-Hashing::#Chapter-2-Valid-Anagram-Blind::#11-Is-anagram-given-two-strings-s-and-t

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
