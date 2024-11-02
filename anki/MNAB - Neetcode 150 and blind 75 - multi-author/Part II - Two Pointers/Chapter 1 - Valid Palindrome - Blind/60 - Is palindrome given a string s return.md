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

Is there a way to check if a string is a palindrome without creating a new string for the reversed version?

A) No, it's not possible.

B) Yes, by using two pointers.

C) Yes, by sorting the string.

D) Yes, by using a stack.  

========== Answer ==========  

**Answer**: B

Yes, it is possible. You can use two pointers: one starting from the beginning of the string and the other from the end. If the characters at both pointers are equal, we increment the left pointer and decrement the right pointer. If they are not equal, then the string is not a palindrome. This approach avoids creating a new string for the reversed version, thus saving space.

========== Id ==========  
60

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part II - Two Pointers::Chapter 1 - Valid Palindrome - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-II-Two-Pointers::#Chapter-1-Valid-Palindrome-Blind::#60-Is-palindrome-given-a-string-s-return

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
