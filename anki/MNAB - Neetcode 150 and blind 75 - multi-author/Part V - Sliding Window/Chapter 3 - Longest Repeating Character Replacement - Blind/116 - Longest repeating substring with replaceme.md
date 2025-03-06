========== Question ==========  

### Longest Repeating Substring With Replacement

You are given a string `s` consisting of only uppercase english characters and an integer `k`. You can choose up to `k` characters of the string and replace them with any other uppercase English character.

After performing at most `k` replacements, return the length of the longest substring which contains only one distinct character.

**Example 1:**

```
Input: s = "XYYX", k = 2

Output: 4
```

Explanation: Either replace the 'X's with 'Y's, or replace the 'Y's with 'X's.

**Example 2:**

```
Input: s = "AAABABB", k = 1

Output: 5
```

**Constraints:**

-   `1 <= s.length <= 1000`

-   `0 <= k <= s.length`

---

What kind of data structure could help us track the frequency of each character in the current window of our string?

A) Queue

B) Array

C) Hash Map

D) Either B or C  

========== Answer ==========  

**Answer**: D

Both an Array and a Hash Map can be used to efficiently count the frequency of elements. By keeping a frequency count of characters in our current window, we can determine the most frequent character. In the case of an Array, we could use each index to represent a unique character from the string (i.e., 'A' to 'Z' mapped to 0 to 25). In the case of a Hash Map, we would use the character itself as the key and the frequency as the value. Both methods allow us to update and access the frequency of each character in constant time.

========== Id ==========  
116

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part V - Sliding Window::Chapter 3 - Longest Repeating Character Replacement - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-V-Sliding-Window::#Chapter-3-Longest-Repeating-Character-Replacement-Blind::#116-Longest-repeating-substring-with-replaceme

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
