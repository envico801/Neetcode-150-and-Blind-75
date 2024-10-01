========== Question ==========  

### Design an algorithm to encode **a list of strings** to **a string**. The encoded string is then sent over the network and is decoded back to the original list of strings.

Please implement `encode` and `decode`

**Example1**

```
Input: dummy_input = ["Hello", "World"]
Output: ["Hello", "World"]
Explanation:
Machine 1:
Codec encoder = new Codec();
String msg = encoder.encode(strs);
Machine 1 ---msg---&gt; Machine 2
Machine 2:
Codec decoder = new Codec();
String[] strs = decoder.decode(msg);
```

**Example2**

```
Input: dummy_input = [""]
Output: [""]
```

**Constraints:**

-   `1 <= strs.length <= 200`

-   `0 <= strs[i].length <= 200`

-   `strs[i] contains any possible characters out of 256 valid ASCII characters`

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
22

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays Hashing::Chapter 6 - Encode and Decode Strings - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-Hashing::#Chapter-6-Encode-and-Decode-Strings-Blind::#22-Design-an-algorithm-to-encode-a-list-of

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
