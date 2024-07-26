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

What should the prefix look like to make the encoding efficient?

A) Prefix each string with the length of the entire list strs.

B) Prefix each string with its individual length followed by a delimiter.

C) Prefix each string with the sum of the lengths of all previous strings.  

==================== Answer ====================  

**Answer**: B

Prefixing each string with its own length allows us to know exactly where each string starts and ends in the encoded string, which simplifies the decoding process.

==================== Id ====================  
41

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays and Hashing::Chapter 8 - Encode and Decode Strings Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-and-Hashing::#Chapter-8-Encode-and-Decode-Strings-Blind::#41-Design-an-algorithm-to-encode-a-list-of

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
