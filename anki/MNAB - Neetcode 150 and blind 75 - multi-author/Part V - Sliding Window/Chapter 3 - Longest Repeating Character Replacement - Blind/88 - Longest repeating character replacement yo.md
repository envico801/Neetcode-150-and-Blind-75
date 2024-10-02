========== Question ==========  

### Longest Repeating Character Replacement

You are given a string `s` and an integer `k`. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most `k` times.

Return _the length of the longest substring containing the same letter you can get after performing the above operations_.

**Example 1:**

```
Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
```

**Example 2:**

```
Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
There may exists other ways to achive this answer too.
```

**Constraints:**

-   `1 <= s.length <= 105`

-   `s` consists of only uppercase English letters.

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
88

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part V - Sliding Window::Chapter 3 - Longest Repeating Character Replacement - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-V-Sliding-Window::#Chapter-3-Longest-Repeating-Character-Replacement-Blind::#88-Longest-repeating-character-replacement-yo

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
