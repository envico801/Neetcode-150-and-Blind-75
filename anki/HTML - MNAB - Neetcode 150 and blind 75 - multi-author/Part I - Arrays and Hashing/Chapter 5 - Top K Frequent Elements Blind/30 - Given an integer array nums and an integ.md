==================== Question ====================  

### Given an integer array `nums` and an integer `k`, return _the_ `k` _most frequent elements_. You may return the answer in **any order**.

**Example 1:**

<!-- codeblock-start -->
<pre><code>Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
</code></pre>
<!-- codeblock-end -->

**Example 2:**

<!-- codeblock-start -->
<pre><code>Input: nums = [1], k = 1
Output: [1]
</code></pre>
<!-- codeblock-end -->

**Constraints:**

- `1 <= nums.length <= 10^5`

- `-10^4 <= nums[i] <= 10^4`

- `k` is in the range `[1, the number of unique elements in the array]`.

- It is **guaranteed** that the answer is **unique**.

**Follow up:** Your algorithm's time complexity must be better than `O(n log n)`, where n is the array's size.

---

To find the k most frequent elements, after obtaining the frequencies using a Hashmap, which additional data structure can be used to efficiently retrieve the top k elements?

A) Sorted List

B) Heap (Priority Queue)

C) Trie

D) Graph  

==================== Answer ====================  

**Answer**: B

After obtaining the frequencies of all elements using a Hashmap, a Heap (or Priority Queue) can be used to efficiently retrieve the top k elements. We can build a min-heap (or max-heap) of size k and insert the elements and their frequencies into the heap. This way, the heap will automatically maintain the top k elements.

==================== Id ====================  
30

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays and Hashing::Chapter 5 - Top K Frequent Elements Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-and-Hashing::#Chapter-5-Top-K-Frequent-Elements-Blind::#30-Given-an-integer-array-nums-and-an-integ

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
