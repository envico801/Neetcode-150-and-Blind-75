========== Question ==========  

### Given two strings `s` and `t`, return `true` _if `t` is an anagram of `s`, and `false` otherwise_.

An **Anagram** is a word or phrase formed by rearranging the letters of a
different word or phrase, typically using all the original letters exactly once.

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

- `1 <= s.length, t.length <= 5 * 10^4`

- `s` and `t` consist of lowercase English letters.

---

What is the time complexity of the solution that sorts and then compares the
arrays? Note: We are using an efficient sorting algorithm where we can't make
any assumptions about the character set.

A) O(n)

B) O(n log n)

C) O(n^2)

D) O(2^n)  

========== Answer ==========  

**Answer**: B

The time complexity of sorting an array of n elements is O(n log n), and the
time complexity of comparing two arrays is O(n). When considering the largest
term, the time complexity of the solution becomes O(n log n).

========== Id ==========  
8

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays and Hashing::Chapter 2 - Valid Anagram Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-and-Hashing::#Chapter-2-Valid-Anagram-Blind::#8-Given-two-strings-s-and-t-return-tru

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
