========== Question ==========  

### Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.

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

**Constraints:**

- `1 <= nums.length <= 10^5`

- `10^9 <= nums[i] <= 10^9`

---

How can a HashSet be used to efficiently check for duplicates in the array?

A) Iterate through each element in the array and try to insert it into the
HashSet. If an insertion fails (the element already exists in the HashSet),
return true to indicate a duplicate was found.

B) Insert all elements from the array into the HashSet without checking for
duplicates during this process. After all insertions, compare the size of the
HashSet with the size of the array. If the HashSet size is smaller, return true
to indicate a duplicate exists.

C) Both A and B  

========== Answer ==========  

**Answer**: C

A HashSet does not allow duplicate values. So, if you try to insert an element
that already exists in the HashSet, it will not add the element and you know
you've found a duplicate (choice A). Alternatively, you could add all elements
to the HashSet and then compare its size to the size of the array. If the sizes
are different, then there must have been a duplicate in the array (choice B).
Both these methods will help identify if a duplicate exists in the array.

========== Id ==========  
4

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays and Hashing::Chapter 1 - Contains Duplicate Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-and-Hashing::#Chapter-1-Contains-Duplicate-Blind::#4-Given-an-integer-array-nums-return-tru

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
