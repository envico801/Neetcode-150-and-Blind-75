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

We can implement the encode and decode methods using `#` as the delimiter, as follow. What is the time and space complexity of the encode and decode methods? Assume `n` is the total length of the string.

<!-- codeblock-start -->
<pre><code class="hljs language-python"><span class="hljs-keyword">class</span> <span class="hljs-title class_">Codec</span>:
     <span class="hljs-keyword">def</span> <span class="hljs-title function_">encode</span>(<span class="hljs-params">self, strs: <span class="hljs-type">List</span>[<span class="hljs-built_in">str</span>]</span>) -> <span class="hljs-built_in">str</span>:
         res = <span class="hljs-string">""</span>
         <span class="hljs-keyword">for</span> s <span class="hljs-keyword">in</span> strs:
             res += <span class="hljs-built_in">str</span>(<span class="hljs-built_in">len</span>(s)) + <span class="hljs-string">"#"</span> + s
         <span class="hljs-keyword">return</span> res
     <span class="hljs-keyword">def</span> <span class="hljs-title function_">decode</span>(<span class="hljs-params">self, s: <span class="hljs-built_in">str</span></span>) -> <span class="hljs-type">List</span>[<span class="hljs-built_in">str</span>]:
         res, i = [], <span class="hljs-number">0</span>
         <span class="hljs-keyword">while</span> i &#x3C; <span class="hljs-built_in">len</span>(s):
             j = i
             <span class="hljs-keyword">while</span> s[j] != <span class="hljs-string">"#"</span>:
                 j += <span class="hljs-number">1</span>
             length = <span class="hljs-built_in">int</span>(s[i:j])
             res.append(s[j + <span class="hljs-number">1</span>: j + <span class="hljs-number">1</span> + length])
             i = j + <span class="hljs-number">1</span> + length
         <span class="hljs-keyword">return</span> res
</code></pre>
<!-- codeblock-end -->

A) Time complexity: O(n), Space complexity: O(n)

B) Time complexity: O(n^2), Space complexity: O(n)

C) Time complexity: O(n log n), Space complexity: O(n)  

==================== Answer ====================  

**Answer**: A

The overall time complexity of the solution is determined by the number of characters in the strings list (strs). We iterate over all characters twice: once when encoding and once when decoding. Therefore, the time complexity is linear. The space complexity is also linear because the encoded string has the same number of characters as the original strings list plus the length of each string and a colon for each string.

==================== Id ====================  
43

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays and Hashing::Chapter 8 - Encode and Decode Strings Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-and-Hashing::#Chapter-8-Encode-and-Decode-Strings-Blind::#43-Design-an-algorithm-to-encode-a-list-of

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
