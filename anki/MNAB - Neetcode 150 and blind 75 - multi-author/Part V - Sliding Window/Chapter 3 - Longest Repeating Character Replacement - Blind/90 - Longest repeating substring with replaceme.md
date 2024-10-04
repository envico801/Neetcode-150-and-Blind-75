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

Considering that the given string only contains uppercase English letters (from A to Z), what would be the time complexity of finding the most frequent character in the window?

A) O(1)

B) O(n)

C) O(logn)  

========== Answer ==========  

**Answer**: A

Since we know that the string only contains uppercase English letters, there can be at most 26 unique characters. Thus, if we were to iterate through each unique character in our frequency dictionary or array to find the most frequent one, the time complexity would be O(26), which is essentially constant time, O(1).

========== Id ==========  
90

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part V - Sliding Window::Chapter 3 - Longest Repeating Character Replacement - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-V-Sliding-Window::#Chapter-3-Longest-Repeating-Character-Replacement-Blind::#90-Longest-repeating-substring-with-replaceme

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Not safe to store
