==================== Question ====================  

### Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.

**Example 1:**

<!-- codeblock-start -->
<pre><code>Input: nums = [1,2,3,1]
Output: true
</code></pre>
<!-- codeblock-end -->

**Example 2:**

<!-- codeblock-start -->
<pre><code>Input: nums = [1,2,3,4]
Output: false
</code></pre>
<!-- codeblock-end -->

**Constraints:**

- `1 <= nums.length <= 10^5`

- `10^9 <= nums[i] <= 10^9`

---

What data structure can you use to optimize the approach for checking if there are any duplicate elements in the array?

A) Queue

B) Priority Queue

C) Stack

D) Hashmap or HashSet  

==================== Answer ====================  

**Answer**: D

A Hashmap (or Hashtable) and a HashSet allow us to store and retrieve values in constant time, O(1). We can utilize this property to efficiently check for duplicates.

==================== Id ====================  
3

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays and Hashing::Chapter 1 - Contains Duplicate Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-and-Hashing::#Chapter-1-Contains-Duplicate-Blind::#3-Given-an-integer-array-nums-return-tru

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
