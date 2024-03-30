========== Question ==========  

### Given an integer array `nums`, return `true` if any value appears **at least twice** in the array, and return `false` if every element is distinct.

**Example 1:**

```
Input: nums = [1,2,3,1]
Output: true
```

**Example 2:**

```
Input: nums = [1,2,3,4]
Output: false
```

**Example 3:**

```
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
```

**Constraints:**

- `1 <= nums.length <= 10^5`

- `-10^9 <= nums[i] <= 10^9`

---

What is the time complexity of iterating through the input array and grouping
the anagrams using a dictionary?

A) O(n)

B) O(n log n)

C) O(n^2)

D) O(n^2 log n)  

========== Answer ==========  

**Answer**: A

After sorting each string, the time complexity of iterating through the input
array and grouping the anagrams using a dictionary is O(n), where n is the
number of strings in the input array. This is because we perform a constant-time
operation (dictionary lookup or insertion) for each string.

========== Id ==========  
21

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays and Hashing::Chapter 4 - Group Anagrams Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-and-Hashing::#Chapter-4-Group-Anagrams-Blind::#21-Given-an-integer-array-nums-return-tru

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
