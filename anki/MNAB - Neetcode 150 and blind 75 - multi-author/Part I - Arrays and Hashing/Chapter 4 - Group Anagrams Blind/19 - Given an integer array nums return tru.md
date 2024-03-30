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

What is the basic idea behind grouping anagrams?

A) Sorting the characters in each string and using the sorted string as a key in
a dictionary

B) Using a brute force approach to compare each string with every other string

C) Counting the frequency of each character in each string and using the
frequency as a key

D) Using a stack data structure to group anagrams  

========== Answer ==========  

**Answer**: A

The basic idea is to sort the characters in each string and use the sorted
string as a key in a dictionary (HashMap or HashTable). Strings that are
anagrams of each other will have the same sorted representation, and they can be
grouped together using the sorted string as the key in the dictionary.

========== Id ==========  
19

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays and Hashing::Chapter 4 - Group Anagrams Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-and-Hashing::#Chapter-4-Group-Anagrams-Blind::#19-Given-an-integer-array-nums-return-tru

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
