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

What is the overall time complexity of the solution that sorts each string and
uses a dictionary to group anagrams?

A) O(n)

B) O(n log n)

C) O(n^2)

D) O(n^2 log n)  

========== Answer ==========  

**Answer**: B

The overall time complexity of the solution that sorts each string and uses a
dictionary to group anagrams is O(n log n), where n is the total number of
characters in all strings. This is because sorting each string takes O(n log n)
time, and iterating through the input array and grouping the anagrams using a
dictionary takes O(n) time, which is dominated by the sorting step.

========== Id ==========  
22

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays and Hashing::Chapter 4 - Group Anagrams Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-and-Hashing::#Chapter-4-Group-Anagrams-Blind::#22-Given-an-integer-array-nums-return-tru

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
