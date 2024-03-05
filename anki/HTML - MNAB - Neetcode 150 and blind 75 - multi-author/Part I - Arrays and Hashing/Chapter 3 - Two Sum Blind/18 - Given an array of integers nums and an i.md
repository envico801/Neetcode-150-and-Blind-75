==================== Question ====================  

### Given an array of integers `nums` and an integer `target`, _return indices of the two numbers such that they add up to `target`_.

You may assume that each input would have **exactly one solution**, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

<!-- codeblock-start -->
<pre><code>Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
</code></pre>
<!-- codeblock-end -->

---

What is the time and space complexity of the optimal solution using a hashmap?

A) Time complexity: O(n), Space complexity: O(n)

B) Time complexity: O(n \* log n), Space complexity: O(n)

C) Time complexity: O(n^2), Space complexity: O(1)

D) Time complexity: O(n), Space complexity: O(1)  

==================== Answer ====================  

**Answer**: A

The hashmap solution has a time complexity of O(n) because you need to iterate through the array once. Also, the key lookup operation with hashmaps runs in O(1) time. The space complexity is also O(n) because, in the worst case, you might need to store all n elements in the hashmap.

==================== Id ====================  
18

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays and Hashing::Chapter 3 - Two Sum Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-and-Hashing::#Chapter-3-Two-Sum-Blind::#18-Given-an-array-of-integers-nums-and-an-i

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
