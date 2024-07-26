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

What is the time and space complexity of the sliding window approach for this
problem? Assume `n` is the length of the string.

```python
class Solution:
     def characterReplacement(self, s: str, k: int) -> int:
         res = 0
         l = 0
         count = [0] * 26
         for r in range(len(s)):
             count[ord(s[r]) - ord('A')] += 1
             while (r - l + 1) - max(count) > k:
                 count[ord(s[l]) - ord('A')] -= 1
                 l += 1
             res = max(res, r - l + 1)
         return res
```

A) Time complexity: O(n), Space complexity: O(1)

B) Time complexity: O(n), Space complexity: O(n)

C) Time complexity: O(n^2), Space complexity: O(1)  

========== Answer ==========  

**Answer**: A

The sliding window approach only scans the string once, and the time complexity
is therefore O(n). The space complexity is O(1) because the count array always
has a fixed size of 26, corresponding to the number of uppercase English
letters. Even though we're dealing with a string of n characters, we're only
ever tracking a maximum of 26 different ones.

========== Id ==========  
83

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part III - Sliding Window::Chapter 3 - Longest Repeating Character Replacement Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-III-Sliding-Window::#Chapter-3-Longest-Repeating-Character-Replacement-Blind::#83-You-are-given-a-string-s-and-an-integer

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
