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

If using a hashmap to check if two words are anagrams, what would be the keys
and the values in the hashmap?

A) Keys = Words, Values = Count of each word

B) Keys = Letters, Values = Count of each letter

C) Keys = Length of words, Values = Words of that length  

========== Answer ==========  

**Answer**: B

In this case, the keys would be the letters, and the values would be the count
of each letter. This way, we can track the frequency of each letter in the
strings and compare them.

========== Id ==========  
10

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays and Hashing::Chapter 2 - Valid Anagram Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-and-Hashing::#Chapter-2-Valid-Anagram-Blind::#10-Given-two-strings-s-and-t-return-tru

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
