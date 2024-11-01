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

What is a brute force solution to this problem?

A) Iterate from the end of the string to the beginning, checking for duplicate characters.

B) For each substring, find the frequency of the most common character (maxf) and check if the length of the substring minus maxf is less than or equal to k.  

========== Answer ==========  

**Answer**: B

The brute force solution would be to generate all possible substrings and for each substring, find the frequency of the most common character. If the length of the substring minus the frequency of the most common character is less than or equal to k, then the substring is valid (since we can change at most k characters to make all characters in the substring the same). We would then keep track of the maximum length of such valid substrings.

========== Id ==========  
92

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part V - Sliding Window::Chapter 3 - Longest Repeating Character Replacement - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-V-Sliding-Window::#Chapter-3-Longest-Repeating-Character-Replacement-Blind::#92-Longest-repeating-substring-with-replaceme

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
