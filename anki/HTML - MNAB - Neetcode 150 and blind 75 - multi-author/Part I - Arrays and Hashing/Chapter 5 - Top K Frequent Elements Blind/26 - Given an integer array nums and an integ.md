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

What is the time complexity of a brute force approach to find the k most frequent elements in an array of size n?

A) O(n)

B) O(n log n)

C) O(n^2)

D) O(n^2 log n)  

==================== Answer ====================  

**Answer**: C

A brute force approach to find the k most frequent elements would involve checking the frequency of each element by comparing it with every other element in the array. This would require a nested loop, resulting in a time complexity of O(n^2), where n is the size of the input array.

==================== Id ====================  
26

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays and Hashing::Chapter 5 - Top K Frequent Elements Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-and-Hashing::#Chapter-5-Top-K-Frequent-Elements-Blind::#26-Given-an-integer-array-nums-and-an-integ

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
