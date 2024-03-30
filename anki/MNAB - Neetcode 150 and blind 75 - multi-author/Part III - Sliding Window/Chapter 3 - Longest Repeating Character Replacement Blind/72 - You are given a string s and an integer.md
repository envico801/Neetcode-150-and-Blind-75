========== Question ==========  

### You are given a string `s` and an integer `k`. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most `k` times.

Return _the length of the longest substring containing the same letter you can
get after performing the above operations_.

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

- `1 <= s.length <= 105`

- `s` consists of only uppercase English letters.

- `0 <= k <= s.length`

---

What kind of data structure could help us track the frequency of each character
in the current window of our string?

A) Queue

B) Array

C) Hash Map

D) Either B or C  

========== Answer ==========  

**Answer**: D

Both an Array and a Hash Map can be used to efficiently count the frequency of
elements. By keeping a frequency count of characters in our current window, we
can determine the most frequent character. In the case of an Array, we could use
each index to represent a unique character from the string (i.e., 'A' to 'Z'
mapped to 0 to 25). In the case of a Hash Map, we would use the character itself
as the key and the frequency as the value. Both methods allow us to update and
access the frequency of each character in constant time.

========== Id ==========  
72

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part III - Sliding Window::Chapter 3 - Longest Repeating Character Replacement Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-III-Sliding-Window::#Chapter-3-Longest-Repeating-Character-Replacement-Blind::#72-You-are-given-a-string-s-and-an-integer

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
