========== Question ==========  

### String Encode and Decode

Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

Please implement `encode` and `decode`

**Example 1:**

```
Input: ["neet","code","love","you"]
Output:["neet","code","love","you"]
```

**Example 2:**

```
Input: ["we","say",":","yes"]
Output: ["we","say",":","yes"]
```

**Constraints:**

-   `0 <= strs.length < 100`

-   `0 <= strs[i].length < 200`

-   `strs[i]` contains only UTF-8 characters.

---

We can implement the encode and decode methods using `#` as the delimiter, as follow. What is the time and space complexity of the encode and decode methods? Assume `n` is the total length of the string.

```python
class Codec:
    def encode(self, strs: List[str]) -> str:
        res = ""
        for s in strs:
            res += str(len(s)) + "#" + s
        return res
    def decode(self, s: str) -> List[str]:
        res, i = [], 0
        while i < len(s):
            j = i
            while s[j] != "#":
                j += 1
            length = int(s[i:j])
            res.append(s[j + 1: j + 1 + length])
            i = j + 1 + length
        return res
```

A) Time complexity: O(n), Space complexity: O(n)

B) Time complexity: O(n^2), Space complexity: O(n)

C) Time complexity: O(n log n), Space complexity: O(n)  

========== Answer ==========  

**Answer**: A

The overall time complexity of the solution is determined by the number of characters in the strings list (strs). We iterate over all characters twice: once when encoding and once when decoding. Therefore, the time complexity is linear. The space complexity is also linear because the encoded string has the same number of characters as the original strings list plus the length of each string and a colon for each string.

========== Id ==========  
28

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays Hashing::Chapter 6 - Encode and Decode Strings - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-Hashing::#Chapter-6-Encode-and-Decode-Strings-Blind::#28-String-encode-and-decode-design-an-algorit

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Not safe to store
