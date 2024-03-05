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

What is the time and space complexity of the solution using a hashmap?

A) Time complexity: O(n)

Space complexity: O(n)

B) Time complexity: O(n \* log n)

Space complexity: O(n)

C) Time complexity: O(n^2)

Space complexity: O(1)

D) Time complexity: O(n)

Space complexity: O(1)  

==================== Answer ====================  

**Answer**: A

The hashmap solution has a time complexity of O(n) because you need to iterate through the array once. Also, the key lookup operation with hashmaps runs in O(1) time. The space complexity is also O(n) because, in the worst case, you might need to store all n elements in the hashmap.

==================== Id ====================  
5

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays and Hashing::Chapter 1 - Contains Duplicate Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-and-Hashing::#Chapter-1-Contains-Duplicate-Blind::#5-Given-an-integer-array-nums-return-tru

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
