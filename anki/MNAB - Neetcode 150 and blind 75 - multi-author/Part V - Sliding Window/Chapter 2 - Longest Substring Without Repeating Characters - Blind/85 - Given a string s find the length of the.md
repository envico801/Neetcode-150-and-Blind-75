========== Question ==========  

### Given a string `s`, find the length of the **longest** **substring** without repeating characters.

**Example 1:**

```
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

**Example 2:**

```
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

**Example 3:**

```
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

**Constraints:**

-   `0 <= s.length <= 5 * 104`

-   `s` consists of English letters, digits, symbols and spaces.

---

What is the time and space complexity of the sliding window approach for this problem? Assume `n` is the length of the string, and `m` is the number of distinct characters in the string.

```python
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        char_set = set()
        l, max_len = 0, 0
        for r in range(len(s)):
            while s[r] in char_set:
                # Repeating char detected, shrink window
                char_set.remove(s[l])
                l += 1
            char_set.add(s[r])
            max_len = max(max_len, r - l + 1)
        return max_len
```

A) Time complexity: O(n), Space complexity: O(1)

B) Time complexity: O(n), Space complexity: O(m)

C) Time complexity: O(n^2), Space complexity: O(m)  

========== Answer ==========  

**Answer**: B

Using the sliding window approach, we essentially scan through the string once with two pointers, making the time complexity O(n). The space complexity is O(m) because, in the worst-case scenario, the set used to check for repeating characters can contain all the distinct characters in the string, where m is the number of distinct characters.

========== Id ==========  
85

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part V - Sliding Window::Chapter 2 - Longest Substring Without Repeating Characters - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-V-Sliding-Window::#Chapter-2-Longest-Substring-Without-Repeating-Characters-Blind::#85-Given-a-string-s-find-the-length-of-the

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
