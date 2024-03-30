==================== Question ====================  

### Design an algorithm to encode **a list of strings** to **a string**. The encoded string is then sent over the network and is decoded back to the original list of strings.

Please implement `encode` and `decode`

**Example1**

<!-- codeblock-start -->
<pre><code>Input: dummy_input = ["Hello", "World"]
Output: ["Hello", "World"]
Explanation:
Machine 1:
Codec encoder = new Codec();
String msg = encoder.encode(strs);
Machine 1 ---msg---&#x26;gt; Machine 2
Machine 2:
Codec decoder = new Codec();
String[] strs = decoder.decode(msg);
</code></pre>
<!-- codeblock-end -->

**Example2**

<!-- codeblock-start -->
<pre><code>Input: dummy_input = [""]
Output: [""]
</code></pre>
<!-- codeblock-end -->

**Constraints:**

- `1 <= strs.length <= 200`

- `0 <= strs[i].length <= 200`

- `strs[i] contains any possible characters out of 256 valid ASCII characters`

---

What should be the delimiter between the length prefix and the actual string content?

A) The delimiter can be any character, as it is not important for decoding.

B) The delimiter should be a character that is not allowed in the strings.

C) The delimiter should be a non-integer character.  

==================== Answer ====================  

**Answer**: C

If the delimiter is a number, it could lead to confusion during decoding. Hence, we need to choose a delimiter that cannot be part of the prefix.

==================== Id ====================  
35

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays and Hashing::Chapter 8 - Encode and Decode Strings Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-and-Hashing::#Chapter-8-Encode-and-Decode-Strings-Blind::#35-Design-an-algorithm-to-encode-a-list-of

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
