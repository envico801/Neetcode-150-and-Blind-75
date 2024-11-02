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

Considering an efficient approach, what strategy could we use to solve this problem efficiently?

A) Divide and Conquer

B) Two pointers with sliding window

C) Recursion  

========== Answer ==========  

**Answer**: B

The two pointers with sliding window strategy allows us to scan through the string in linear time complexity while keeping track of the longest substring with the same letters. The sliding window size changes based on the character frequency and the number of operations allowed.

========== Id ==========  
109

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part V - Sliding Window::Chapter 3 - Longest Repeating Character Replacement - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-V-Sliding-Window::#Chapter-3-Longest-Repeating-Character-Replacement-Blind::#109-Longest-repeating-substring-with-replaceme

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
