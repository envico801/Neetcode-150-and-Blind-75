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

What should the prefix look like to make the encoding efficient?

A) Prefix each string with the length of the entire list strs.

B) Prefix each string with its individual length followed by a delimiter.

C) Prefix each string with the sum of the lengths of all previous strings.  

========== Answer ==========  

**Answer**: B

Prefixing each string with its own length allows us to know exactly where each string starts and ends in the encoded string, which simplifies the decoding process.

========== Id ==========  
26

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays Hashing::Chapter 6 - Encode and Decode Strings - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-Hashing::#Chapter-6-Encode-and-Decode-Strings-Blind::#26-String-encode-and-decode-design-an-algorit

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
