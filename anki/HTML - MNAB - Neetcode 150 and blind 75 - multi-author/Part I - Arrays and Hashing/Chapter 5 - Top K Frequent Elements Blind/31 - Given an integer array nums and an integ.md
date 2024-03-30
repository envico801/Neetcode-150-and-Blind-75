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

What is the time complexity of building a Heap (Priority Queue) of size k and inserting all elements and their frequencies into it?

A) O(n)

B) O(n log k)

C) O(k log n)

D) O(k log k)  

==================== Answer ====================  

**Answer**: C

The time complexity of building a Heap (Priority Queue) of size k and inserting all elements and their frequencies into it is O(k log n), where n is the size of the input array. This is because we need to perform k insertion operations into the heap, and each insertion operation has a time complexity of O(log n), where n is the maximum size of the heap.

==================== Id ====================  
31

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays and Hashing::Chapter 5 - Top K Frequent Elements Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-and-Hashing::#Chapter-5-Top-K-Frequent-Elements-Blind::#31-Given-an-integer-array-nums-and-an-integ

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
