========== Question ==========  

### Valid Palindrome

A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string `s`, return `true` if it is a **palindrome,** or `false` otherwise.

**Example 1:**

```
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
```

**Example 2:**

```
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
```

**Example 3:**

```
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
```

**Constraints:**

`1 <= s.length <= 2 * 10^5`

`s consists only of printable ASCII characters.`

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
35

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part II - Two Pointers::Chapter 1 - Valid Palindrome - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-II-Two-Pointers::#Chapter-1-Valid-Palindrome-Blind::#35-Valid-palindrome-a-phrase-is-a-palindrom

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
