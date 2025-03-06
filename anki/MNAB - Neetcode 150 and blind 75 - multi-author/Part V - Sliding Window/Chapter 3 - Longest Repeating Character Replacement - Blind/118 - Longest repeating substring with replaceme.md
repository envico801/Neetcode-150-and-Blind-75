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

If our current window size minus the frequency of the most common character is greater than k, what should we do?

A) Expand the window from the right

B) Shrink the window from the left

C) Increase k

D) Change the character at the left of the window  

========== Answer ==========  

**Answer**: B

If the window size minus the frequency of the most common character is greater than k, it means we cannot make all characters the same in this window by changing k characters. Therefore, we need to shrink the window from the left.

========== Id ==========  
118

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part V - Sliding Window::Chapter 3 - Longest Repeating Character Replacement - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-V-Sliding-Window::#Chapter-3-Longest-Repeating-Character-Replacement-Blind::#118-Longest-repeating-substring-with-replaceme

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
