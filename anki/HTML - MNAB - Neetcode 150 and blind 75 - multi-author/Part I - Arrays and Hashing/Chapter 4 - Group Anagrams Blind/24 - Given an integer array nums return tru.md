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

Which of the following data structures can be used to store the grouped anagrams?

A) Dictionary (HashMap or HashTable)

B) List

C) Queue

D) Both A and B  

==================== Answer ====================  

**Answer**: D

Both a dictionary (HashMap or HashTable) and a list can be used to store the grouped anagrams. The dictionary can be used to group the anagrams by mapping each sorted string (key) to a list of original strings (value). Alternatively, a list of lists can be used, where each inner list contains the anagrams of a particular group.

==================== Id ====================  
24

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays and Hashing::Chapter 4 - Group Anagrams Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-and-Hashing::#Chapter-4-Group-Anagrams-Blind::#24-Given-an-integer-array-nums-return-tru

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
