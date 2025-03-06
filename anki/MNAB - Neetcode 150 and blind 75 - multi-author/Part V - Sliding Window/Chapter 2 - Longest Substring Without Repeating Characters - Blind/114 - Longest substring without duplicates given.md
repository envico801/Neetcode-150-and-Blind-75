========== Question ==========  

### Longest Substring Without Duplicates

Given a string `s`, find the _length of the longest substring_ without duplicate characters.

A **substring** is a contiguous sequence of characters within a string.

**Example 1:**

```
Input: s = "zxyzxyz"

Output: 3
```

Explanation: The string "xyz" is the longest without duplicate characters.

**Example 2:**

```
Input: s = "xxxx"

Output: 1
```

**Constraints:**

-   `0 <= s.length <= 1000`

-   `s` may consist of printable ASCII characters.

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
114

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part V - Sliding Window::Chapter 2 - Longest Substring Without Repeating Characters - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-V-Sliding-Window::#Chapter-2-Longest-Substring-Without-Repeating-Characters-Blind::#114-Longest-substring-without-duplicates-given

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
