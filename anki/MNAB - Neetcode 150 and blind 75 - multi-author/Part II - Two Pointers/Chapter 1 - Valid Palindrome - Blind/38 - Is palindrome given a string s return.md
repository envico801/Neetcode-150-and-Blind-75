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

What is the time and space complexity of the approach where we create a new reversed string to compare?

A) Time complexity: O(n), Space complexity: O(n)

B) Time complexity: O(n log n), Space complexity: O(n)

C) Time complexity: O(n^2), Space complexity: O(1)

D) Time complexity: O(n), Space complexity: O(1)  

========== Answer ==========  

**Answer**: A

The time complexity is O(n) because all operations (lowercase conversion, removing non-alphanumeric characters, and reversing the string) take linear time. The 'n' here is the length of the string. The space complexity is also O(n) because we are creating a new string for the reversed version, which can be as long as the input string.

========== Id ==========  
38

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part II - Two Pointers::Chapter 1 - Valid Palindrome - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-II-Two-Pointers::#Chapter-1-Valid-Palindrome-Blind::#38-Is-palindrome-given-a-string-s-return

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
