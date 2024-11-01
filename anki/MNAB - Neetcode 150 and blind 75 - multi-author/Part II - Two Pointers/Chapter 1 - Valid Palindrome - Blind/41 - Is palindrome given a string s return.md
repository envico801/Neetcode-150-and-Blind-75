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

Given a string, what is a crucial step in the initial preprocessing to determine whether it is a palindrome?

A) Reverse the string.

B) Convert the string to lowercase.

C) Check if the string is empty.

D) Split the string into words.  

========== Answer ==========  

**Answer**: B

A crucial step to check if a string is a palindrome is to convert it to lowercase. This is because palindromes are case-insensitive. However, it's important to note that removing non-alphanumeric characters is another critical preprocessing step not mentioned in this particular question.

========== Id ==========  
41

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part II - Two Pointers::Chapter 1 - Valid Palindrome - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-II-Two-Pointers::#Chapter-1-Valid-Palindrome-Blind::#41-Is-palindrome-given-a-string-s-return

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
