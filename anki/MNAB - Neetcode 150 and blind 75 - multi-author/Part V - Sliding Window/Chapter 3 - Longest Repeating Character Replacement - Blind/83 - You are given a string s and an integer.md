========== Question ==========  

### You are given a string `s` and an integer `k`. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most `k` times.

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

If our current window size minus the frequency of the most common character is greater than k, what should we do?

A) Expand the window from the right

B) Shrink the window from the left

C) Increase k

D) Change the character at the left of the window  

========== Answer ==========  

**Answer**: B

If the window size minus the frequency of the most common character is greater than k, it means we cannot make all characters the same in this window by changing k characters. Therefore, we need to shrink the window from the left.

========== Id ==========  
83

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part V - Sliding Window::Chapter 3 - Longest Repeating Character Replacement - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-V-Sliding-Window::#Chapter-3-Longest-Repeating-Character-Replacement-Blind::#83-You-are-given-a-string-s-and-an-integer

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
