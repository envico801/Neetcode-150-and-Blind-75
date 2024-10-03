========== Question ==========  

### Is Palindrome

Given a string `s`, return `true` if it is a **palindrome**, otherwise return `false`.

A **palindrome** is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

**Example 1:**

```
Input: s = "Was it a car or a cat I saw?"
Output: true
```

Explanation: After considering only alphanumerical characters we have "wasitacaroracatisaw", which is a palindrome.

**Example 2:**

```
Input: s = "tab a cat"
Output: false
```

Explanation: "tabacat" is not a palindrome.

**Constraints:**

-   `1 <= s.length <= 1000`

-   `s` is made up of only printable ASCII characters.

---

After converting the string to lowercase, what should be the next step?

A) Reverse the string.

B) Check if the string is empty.

C) Remove all non-alphanumeric characters.

D) Convert the string to uppercase.  

========== Answer ==========  

**Answer**: C

The next step is to remove all non-alphanumeric characters. This is because palindromes only consider alphanumeric characters.

========== Id ==========  
36

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part II - Two Pointers::Chapter 1 - Valid Palindrome - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-II-Two-Pointers::#Chapter-1-Valid-Palindrome-Blind::#36-Is-palindrome-given-a-string-s-return

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
