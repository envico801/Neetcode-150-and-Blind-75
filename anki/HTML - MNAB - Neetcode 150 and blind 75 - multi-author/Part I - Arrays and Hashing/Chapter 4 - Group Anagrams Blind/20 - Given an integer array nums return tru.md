==================== Question ====================  

### Given an integer array `nums`, return `true` if any value appears **at least twice** in the array, and return `false` if every element is distinct.

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

**Example 3:**

<!-- codeblock-start -->
<pre><code>Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
</code></pre>
<!-- codeblock-end -->

**Constraints:**

- `1 <= nums.length <= 10^5`

- `-10^9 <= nums[i] <= 10^9`

---

What is the time complexity of sorting each string in the input array?

A) O(n)

B) O(n log n)

C) O(n^2)

D) O(n^2 log n)  

==================== Answer ====================  

**Answer**: B

The time complexity of sorting a string of length n is O(n log n) using efficient sorting algorithms like Merge Sort or Quick Sort. Since we need to sort each string in the input array, the overall time complexity of sorting all strings is O(n log n), where n is the total number of characters in all strings.

==================== Id ====================  
20

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays and Hashing::Chapter 4 - Group Anagrams Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-and-Hashing::#Chapter-4-Group-Anagrams-Blind::#20-Given-an-integer-array-nums-return-tru

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
